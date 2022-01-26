/** @jsx jsx */
import { React, ReactRedux, IMState, css, esri, jsx, polished, UseDataSource, ImmutableArray, Immutable, lodash, defaultMessages as jimuCoreDefaultMessage } from 'jimu-core'
import { SettingChangeFunction } from 'jimu-for-builder'
import { SettingSection, SettingRow, SidePopper } from 'jimu-ui/advanced/setting-components'
import { IconPicker } from 'jimu-ui/advanced/resource-selector'
import { hooks, TextArea, TextInput, PanelHeader, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import defaultMessage from '../../translations/default'
import { IMConfig, GeocodeConfig, IMGeocodeConfig, SearchServiceType } from '../../../config'
import { WarningOutlined } from 'jimu-icons/outlined/suggested/warning'
import { getConfigIdList, getNewConfigId } from '../../util'
import { DefaultGeocodeURL, DefaultGeocodeLabel } from '../../../constants'
import { getDefaultGeocodeLabel } from '../../../utils/geocode-utils'
const { useEffect, useRef } = React
const { useSelector } = ReactRedux
const Sanitizer = esri.Sanitizer
const sanitizer = new Sanitizer()
interface LayerSourceSidePopperProps {
  id: string
  toggle: () => void
  onSettingChange: SettingChangeFunction
  updateConfigForLayerOptions: (newConfig?: IMConfig) => void
  trigger: Element
  isOpen: boolean
  dsConfigItemIndex: number
  config: IMConfig
  useDataSources: ImmutableArray<UseDataSource>
}

const LocatorSourceSidePopper = (props: LayerSourceSidePopperProps) => {
  const nls = hooks.useTranslate(defaultMessage, jimuiDefaultMessage, jimuCoreDefaultMessage)
  const debounceCheckUrlRef = useRef((url: string) => undefined)

  const appTheme = useSelector(
    (state: IMState) => state?.theme
  )
  const { id, trigger, toggle, isOpen, config, dsConfigItemIndex, onSettingChange, updateConfigForLayerOptions } = props
  const datasourceConfigItem: IMGeocodeConfig = config?.datasourceConfig?.[dsConfigItemIndex] as unknown as IMGeocodeConfig || Immutable({}) as IMGeocodeConfig
  const { configId, label, icon, geocodeURL, hint } = datasourceConfigItem as unknown as GeocodeConfig
  const [isInvalidValue, setIsInvalidValue] = React.useState(null)
  const [newGeocodeUrl, setNewGeocodeUrl] = React.useState(geocodeURL)
  const [isHadEnterGeocodeUrl, setIsHadEnterGeocodeUrl] = React.useState(false)
  const [newLabel, setNewLabel] = React.useState(label)

  useEffect(() => {
    if (!isOpen) return
    if (datasourceConfigItem?.geocodeURL) {
      setIsHadEnterGeocodeUrl(true)
      setIsInvalidValue(true)
      setNewGeocodeUrl(geocodeURL)
      setNewLabel(datasourceConfigItem?.label)
    } else {
      setIsHadEnterGeocodeUrl(false)
      setNewGeocodeUrl('')
      setNewLabel(DefaultGeocodeLabel)
      isInvalidValue !== false && setIsInvalidValue(false)
    }
  }, [dsConfigItemIndex, configId, isOpen])

  useEffect(() => {
    const checkGeocodeUrl = (url: string) => {
      //validate the geocode service url on change of user input url
      validateGeocodeService(url).then((isValidGeocodeService) => {
        !isHadEnterGeocodeUrl && setIsHadEnterGeocodeUrl(true)
        const isValid = !!isValidGeocodeService
        setIsInvalidValue(isValid)
      }).catch(err => {
        setIsInvalidValue(false)
      })
    }
    debounceCheckUrlRef.current = lodash.debounce(checkGeocodeUrl, 500)
  }, [])

  const onGeocodeUrlChange = (e) => {
    const value = e.target.value
    setNewGeocodeUrl(value)
    debounceCheckUrlRef.current(value)
  }

  const onGeocodeUrlInputBlur = (e) => {
    const value = e.target.value;
    (debounceCheckUrlRef as any).current?.cancel()
    validateGeocodeService(value).then((isValidGeocodeService) => {
      const isValid = !!isValidGeocodeService
      if (isValid) {
        updateGeocodeUrl(value)
      } else if (geocodeURL) {
        setIsInvalidValue(true)
        setNewGeocodeUrl(geocodeURL)
      }
    }).catch(err => {
      setIsInvalidValue(true)
      setNewGeocodeUrl(geocodeURL)
    })
  }

  /**
   * Update geocode url
   */
  const updateGeocodeUrl = (geocodeServiceUrl: string) => {
    const configIdList = getConfigIdList(config?.datasourceConfig?.asMutable({ deep: true }))
    const nextDsConfigId = configId || getNewConfigId(configIdList)
    let datasourceConfig = config?.datasourceConfig ? config.datasourceConfig.asMutable({ deep: true }) : [] as any
    const label = getDefaultGeocodeLabel(geocodeServiceUrl)
    const initDsConfigItem = {
      configId: nextDsConfigId,
      icon: null,
      label: label,
      hint: nls('findAddressOrPlace'),
      outputDataSourceId: `${id}_output_${nextDsConfigId}`,
      geocodeURL: geocodeServiceUrl,
      searchServiceType: SearchServiceType.GeocodeService
    }
    if (datasourceConfigItem?.configId) {
      datasourceConfig = datasourceConfig.map(el => {
        if (el?.configId === nextDsConfigId) {
          return initDsConfigItem
        } else {
          return el
        }
      })
    } else {
      datasourceConfig.push(initDsConfigItem as any)
    }
    const newConfig = config.setIn(['datasourceConfig'], datasourceConfig)
    updateConfigForLayerOptions(newConfig)
  }

  /**
   * Check whether geocode service is legal
   */
  const validateGeocodeService = async (geocodeServiceUrl: string) => {
    const urlRegExString = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    if (geocodeServiceUrl && urlRegExString.test(geocodeServiceUrl)) {
      try {
        return await fetch(`${geocodeServiceUrl}?f=json`)
          .then(res => res.json())
          .then(result => {
            if (result.error) {
              return false
            } else {
              return true
            }
          })
      } catch (e) {
        return false
      }
    } else {
      return false
    }
  }

  /**
   * Fire callback when change layer config.
   */
  const onConfigItemChange = (key: string[], value: any) => {
    const newDatasourceConfig = config?.datasourceConfig?.asMutable({ deep: true })
    const newDatasourceConfigItem = datasourceConfigItem?.setIn(key, value)
    newDatasourceConfig?.splice(dsConfigItemIndex, 1, newDatasourceConfigItem?.asMutable({ deep: true }))
    const newConfig = config.setIn(['datasourceConfig'], newDatasourceConfig)
    onSettingChange({ id, config: newConfig })
  }

  const handleLabelChange = (event) => {
    const value = event?.target?.value
    setNewLabel(value)
  }

  const handleLabelAccept = value => {
    if (!value) {
      setNewLabel(label)
    } else {
      setNewLabel(value?.trim())
      onConfigItemChange(['label'], value?.trim())
    }
  }

  const handleHintChange = (event) => {
    const value = event?.target?.value
    onConfigItemChange(['hint'], value)
  }

  const exampleUrlHtml = sanitizer.sanitize(nls('exampleUrl', { url: `${DefaultGeocodeURL}` }))

  return (
    <SidePopper isOpen={isOpen} position='right' toggle={toggle} trigger={trigger}>
      <PanelHeader className='pt-3 px-3' title={nls('setLocatorSource')} onClose={toggle} />
      <div className='w-100' css={css`height: calc(100% - 40px);overflow: auto;`}>
        <SettingSection>
          <SettingRow flow='wrap' label={nls('locatorUrl')}>
            <TextArea
              placeholder={nls('enterUrl')}
              value={newGeocodeUrl || ''}
              style={{
                minHeight: polished.rem(100)
              }}
              onChange={onGeocodeUrlChange}
              onBlur={onGeocodeUrlInputBlur}
            />
            <div className='mt-2 text-break'><i style={{ fontSize: polished.rem(12), color: appTheme.colors?.palette?.dark[500] }} dangerouslySetInnerHTML={{ __html: exampleUrlHtml }}/></div>
            {(isInvalidValue === false && isHadEnterGeocodeUrl) && <div className='d-flex w-100 align-items-center justify-content-between mt-1'>
              <WarningOutlined size={16} color={appTheme.colors?.palette?.danger[500]}/>
              <div
                style={{
                  width: 'calc(100% - 20px)',
                  margin: '0 4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: appTheme.colors?.palette?.danger[500]
                }}
              >
                {nls('onluSupportedHTTPS')}
              </div>
            </div>}
          </SettingRow>
        </SettingSection>
        {(isInvalidValue && configId) && <div>
          <SettingSection>
            <SettingRow flow='wrap' label={nls('label')}>
              <TextInput size='sm' value={newLabel || ''} onChange={handleLabelChange} onAcceptValue={handleLabelAccept} className='w-100' placeholder={nls('findAddressOrPlace')}/>
            </SettingRow>
          </SettingSection>

          <SettingSection>
            <SettingRow label={nls('searchIcon')}>
              <IconPicker
                buttonOptions={{ type: 'default', size: 'sm' }}
                icon={icon}
                onChange={(icon) => { onConfigItemChange(['icon'], icon) }}
                configurableOption='none'
              />
            </SettingRow>
          </SettingSection>

          <SettingSection title={nls('searchOptions')}>
            <SettingRow flow='wrap' label={nls('searchHint')}>
              <TextInput size='sm' value={hint || ''} onChange={handleHintChange} className='w-100' placeholder={nls('findAddressOrPlace')}/>
            </SettingRow>
          </SettingSection>
        </div>}
      </div>
    </SidePopper>
  )
}

export default LocatorSourceSidePopper
