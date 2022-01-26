/** @jsx jsx */
import { React, ReactRedux, css, jsx, esri, polished, QueriableDataSource, DataRecord, IMState, Immutable, ImmutableObject, MessageManager, DataRecordsSelectionChangeMessage } from 'jimu-core'
import { hooks, Icon, Button, Popper } from 'jimu-ui'
import { IMConfig, IMServiceList, SearchServiceType } from '../../config'
import defaultMessage from '../translations/default'
import { getDatasourceConfigItemByConfigId, getJsonLength, getDatasource, loadAllDsRecord } from '../utils/utils'
import { AddressSchema } from '../utils/locator-service'
const Sanitizer = esri.Sanitizer
const sanitizer = new Sanitizer()
const { useEffect, useRef } = React
const { useSelector } = ReactRedux
interface DisplayRecord {
  value: string[]
  configId: string
  outputDsId: string
  recordId: string
}

interface DisplayRecordData {
  [configId: string]: DisplayRecord[]
}

interface DisplayRecords {
  [configId: string]: DataRecord[]
}

interface SelectRecordsOption {
  isActive: boolean
  key: string
  recordId: string
  dsId: string
  configId: string
}

type IMDisplayRecordData = ImmutableObject<DisplayRecordData>

interface ResultListProps {
  serviceList: IMServiceList
  searchText: string
  reference: any
  id: string
  config: IMConfig
  className?: string
}

const ResultList = (props: ResultListProps) => {
  const nls = hooks.useTranslate(defaultMessage)
  const { className, reference, searchText, id, config, serviceList } = props
  const { resultMaxNumber } = config
  const selectedRecordKey = useRef([] as string[])
  const widgetPageId = useRef(null)
  const isDataLoaded = useRef(false)
  let firstRecord: DisplayRecord = {} as DisplayRecord
  const theme = useSelector(
    (state: IMState) => state?.theme
  )
  const currentPageId = useSelector(
    (state: IMState) => {
      const currentPageId = state?.appRuntimeInfo?.currentPageId
      if (!widgetPageId?.current) {
        widgetPageId.current = currentPageId
      }
      return currentPageId
    }
  )
  const STYLE = css`
    & {
      max-height: ${polished.rem(300)};
      min-width: ${polished.rem(reference?.current?.clientWidth)};
      overflow: auto;
    }
    button {
      display: block;
      width: 100%;
      text-align: left;
      border: none;
      border-radius: 0;
    }
    button:hover {
      border: none;
    }
  `
  const [displayRecord, setDisplayRecord] = React.useState(Immutable({}) as IMDisplayRecordData)
  const [displayRecords, setDisplayRecords] = React.useState({} as DisplayRecords)

  const [activeButtonKey, setActiveButtonKey] = React.useState(null)
  const [isShowResultList, setIsShowResultList] = React.useState(true)
  const [isInCurrentPage, setIsInCurrentPage] = React.useState(true)
  const [isHasAutoSelectFirstRecord, setDsHasAutoSelectFirstRecord] = React.useState(false)

  useEffect(() => {
    loadRecords()
  }, [serviceList])

  useEffect(() => {
    selectedRecordKey.current = []
  }, [searchText])

  /**
   * close result panel when jump to another page
  */
  useEffect(() => {
    const isWidgetInCurrentPage = widgetPageId.current === currentPageId
    setIsInCurrentPage(isWidgetInCurrentPage)
  }, [currentPageId])

  /**
   * Load records by outputDatasource
  */
  const loadRecords = () => {
    isDataLoaded.current = false
    const serviceRecords = loadAllDsRecord(serviceList?.asMutable({ deep: true }), resultMaxNumber, id)
    Promise.all([serviceRecords]).then(res => {
      isDataLoaded.current = true
      let newDisplayRecord = displayRecord || Immutable({}) as IMDisplayRecordData
      let allResponse = []
      res?.forEach(resItem => {
        allResponse = allResponse.concat(resItem)
      })
      const newDisplayRecords: any = {}
      allResponse.forEach(dsResult => {
        const { records, configId, dsId, isGeocodeRecords } = dsResult
        newDisplayRecords[configId] = records
        const disPlayData = getDisplayRecords(records, configId, dsId, isGeocodeRecords)
        newDisplayRecord = newDisplayRecord.setIn([configId], disPlayData)
      })
      setDisplayRecords(newDisplayRecords)
      setDisplayRecord(newDisplayRecord)
      autoSelectFirstRecord()
      onSelectedRecordChange()
    })
  }

  /**
   * Render result list
  */
  const renderResultList = () => {
    const recordElementdata = []
    for (const configId in displayRecord) {
      const displayItem = displayRecord?.asMutable({ deep: true })?.[configId]
      const datasourceConfigItem = getDatasourceConfigItemByConfigId(config, configId)
      const label = datasourceConfigItem?.label
      const icon = datasourceConfigItem?.icon
      const currentOutputNumber = getJsonLength(serviceList)
      const list = (
        <div key={`${configId}_${label}_con`}>
          {displayItem.length > 0 && <div>
            {currentOutputNumber > 1 &&
              <Button disabled={true} key={`${configId}_${label}`}>
                {icon && <Icon color={theme?.colors?.primary} size={16} icon={icon?.svg}/> }
                {label}
              </Button>
            }
            {renderResultItem(displayItem)}
          </div>}
        </div>
      )
      recordElementdata.push(list)
    }
    return recordElementdata
  }

  /**
   * Render result item
  */
  const renderResultItem = (displayData: DisplayRecord[]) => {
    return displayData?.map((displayDataItem, index) => {
      const { configId, value, recordId, outputDsId } = displayDataItem
      const key = getItemKey(configId, recordId)
      const isSelected = activeButtonKey === key
      const datasourceConfigItem = getDatasourceConfigItemByConfigId(config, configId)
      const icon = datasourceConfigItem?.icon
      const iconColor = isSelected ? theme?.colors?.white : theme?.colors?.primary
      const currentOutputNumber = getJsonLength(serviceList)

      return (
        <Button
          className='d-flex align-items-center'
          key={key}
          active={isSelected}
          onClick={() => {
            onSelectRecord({
              isActive: isSelected,
              key: key,
              recordId: recordId,
              dsId: outputDsId,
              configId: configId
            })
          }}
        >
          {(icon && currentOutputNumber === 1) && <Icon color={iconColor} size={16} icon={icon?.svg}/> }
          <div>{value.join(', ')}</div>
        </Button>
      )
    })
  }

  /**
   * Select record after ds selected records changed
  */
  const onSelectedRecordChange = () => {
    if (isNoResult()) return
    const newSelectedRecordsKey = []
    for (const configId in serviceList) {
      const serviceItem = serviceList[configId]
      const isGeocodeService = serviceItem?.searchServiceType === SearchServiceType.GeocodeService
      const dsId = isGeocodeService ? serviceItem?.outputDataSourceId : serviceItem?.useDataSource?.dataSourceId
      const key = getDsSelectRecordsKeyItemByDsId(dsId, configId)
      key && newSelectedRecordsKey.push(key)
    }
    const newSelectedRecordsKeyList = getNewSelectedRecordKey(newSelectedRecordsKey, selectedRecordKey?.current)
    selectedRecordKey.current = newSelectedRecordsKey
    if (newSelectedRecordsKeyList && newSelectedRecordsKeyList[0]) {
      setActiveButtonKey(newSelectedRecordsKeyList[0])
    } else {
      setActiveButtonKey(null)
    }
  }

  const getDsSelectRecordsKeyItemByDsId = (dsId: string, configId: string) => {
    const ds = getDatasource(dsId) as QueriableDataSource
    const selectRecords = ds.getSelectedRecords()
    const selectedRecordId = selectRecords?.[0]?.getId()
    if (!selectRecords || !selectedRecordId) {
      return null
    }
    const selectedRecordKey = getItemKey(configId, selectedRecordId)
    return selectedRecordKey
  }

  /**
   * Get key of new selected records by newSelectedKey andoldSelectedKey
  */
  const getNewSelectedRecordKey = (newSelectedKey: string[], oldSelectedKey: string[]): string[] => {
    if (newSelectedKey?.length > oldSelectedKey?.length) {
      return newSelectedKey.concat(oldSelectedKey).filter(key => !newSelectedKey.includes(key) || !oldSelectedKey.includes(key)) || []
    } else {
      return newSelectedKey || []
    }
  }

  const onSelectRecord = (option: SelectRecordsOption) => {
    const { isActive, recordId, dsId, configId } = option
    const ds = getDatasource(dsId) as QueriableDataSource

    //Publish message action
    const records = !isActive ? getRecordsByRecordsId(configId, recordId) : []
    MessageManager.getInstance().publishMessage(
      new DataRecordsSelectionChangeMessage(id, records)
    )
    if (recordId) {
      !isActive ? ds.selectRecordsByIds([recordId]) : ds.selectRecordsByIds([])
      !isActive && clearOtherDsSlectedRecords(configId)
    }
  }

  const clearOtherDsSlectedRecords = (currentSelectConfigId: string) => {
    for (const configId in displayRecord) {
      if (currentSelectConfigId === configId) {
        continue
      } else {
        const dsId = displayRecord[configId]?.[0]?.outputDsId
        const ds = getDatasource(dsId) as QueriableDataSource
        ds && ds.selectRecordsByIds([])
      }
    }
  }

  const getRecordsByRecordsId = (configId: string, recordId: string): DataRecord[] => {
    const records = displayRecords?.[configId] || []
    const fieldRecord = records?.filter(record => record?.getId() === recordId)
    return fieldRecord || []
  }

  /**
   * Get display record list by field name
  */
  const getDisplayRecords = (records: DataRecord[], configId: string, dsId: string, isGeocodeRecords: boolean): DisplayRecord[] => {
    const layerDisplayFields = serviceList?.[configId]?.displayFields || []
    const displayFields = isGeocodeRecords ? [AddressSchema] : layerDisplayFields
    const displayRecordItem: DisplayRecord[] = []
    records?.forEach(record => {
      const valueData = []
      displayFields.forEach(field => {
        const fieldValue = record.getFieldValue(field.jimuName)
        fieldValue && valueData.push(fieldValue)
      })
      const displayRecord: DisplayRecord = {
        value: valueData,
        configId: configId,
        outputDsId: dsId,
        recordId: record?.getId()
      }
      displayRecordItem.push(displayRecord)
      initFirstRecord(displayRecord)
    })
    return displayRecordItem
  }

  const initFirstRecord = (displayItem: DisplayRecord) => {
    if (!firstRecord?.recordId && displayItem.recordId) {
      firstRecord = displayItem
    }
  }

  /**
   * Get key of record item element
  */
  const getItemKey = (configId: string, recordId: string) => {
    return `${configId}_${recordId}`
  }

  /**
   * Auto select first result
  */
  const autoSelectFirstRecord = () => {
    if (!config?.isAutoSelectFirstResult || !firstRecord?.recordId || isHasAutoSelectFirstRecord) return
    const { configId, recordId, outputDsId } = firstRecord
    const firstRecordKey = getItemKey(configId, recordId)
    onSelectRecord({
      isActive: false,
      key: firstRecordKey,
      recordId: recordId,
      dsId: outputDsId,
      configId: configId
    })
    setDsHasAutoSelectFirstRecord(true)
  }

  const toggleButtonElement = () => {
    return sanitizer.sanitize(
      nls('showResult', { searchText: `<b>${searchText}</b>` })
    )
  }

  const onShowResultButtonclick = () => {
    setIsShowResultList(true)
  }

  const isNoResult = () => {
    let recordLength = 0
    for (const configId in displayRecord) {
      const length = displayRecord?.[configId]?.length || 0
      recordLength += length
    }
    return recordLength === 0 && isDataLoaded.current
  }

  const toggleResultListPopper = () => {
    if (!isNoResult()) {
      setIsShowResultList(!isShowResultList)
    }
  }

  return (
    <div>
      <Popper
        css={STYLE}
        placement='bottom-start'
        reference={reference}
        offset={[0, 8]}
        open={!isShowResultList && !!searchText && isInCurrentPage}
        trapFocus={false}
        autoFocus={false}
        toggle={() => { }}
        className={className}
      >
        <Button onClick={onShowResultButtonclick} dangerouslySetInnerHTML={{ __html: toggleButtonElement() }}/>
      </Popper>
      <Popper
        css={STYLE}
        placement='bottom-start'
        reference={reference}
        offset={[0, 8]}
        open={isShowResultList && isInCurrentPage}
        trapFocus={false}
        autoFocus={false}
        toggle={toggleResultListPopper}
        className={className}
      >
        {isNoResult() && <Button className='text-center' disabled={true}>{nls('noResult', { searchText: searchText })}</Button>}
        {!isNoResult() && renderResultList()}
      </Popper>
    </div>
  )
}

export default ResultList
