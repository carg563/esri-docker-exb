/** @jsx jsx */
import {
  React,
  jsx,
  css,
  Immutable,
  ImmutableObject,
  DataSourceManager,
  UseDataSource,
  FeatureLayerDataSource,
  SceneLayerDataSource,
  IconResult
} from 'jimu-core'
import { hooks, TextInput, Switch, PanelHeader } from 'jimu-ui'
import { IconPicker } from 'jimu-ui/advanced/resource-selector'
import { DataSourceSelector, AllDataSourceTypes } from 'jimu-ui/advanced/data-source-selector'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import defaultMessages from './translations/default'
import { QueryItemType, QueryArrangeType } from '../config'
import { getOutputJsonOriginDs } from './setting-utils'
import { AttributeFilterSetting } from './attribute-filter'
import { SpatialFilterSetting } from './spatial-filter'
import { ResultsSetting } from './results'
import { DEFAULT_QUERY_ITEM } from '../default-query-item'

const dsTypes = Immutable([AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.SceneLayer])

interface Props {
  widgetId: string
  arrangeType: QueryArrangeType
  total: number
  index: number
  queryItem?: ImmutableObject<QueryItemType>
  onClose: () => void
  handleStageChange: (id: number) => void
  onQueryItemChanged: (index: number, item: ImmutableObject<QueryItemType>, dsUpdateRequired?: boolean) => void
  onQueryItemAdded: (item: ImmutableObject<QueryItemType>) => void
}

function createNewQueryItem (
  widgetId: string,
  useDataSource: UseDataSource,
  outputJsonOriginDs: FeatureLayerDataSource
): ImmutableObject<QueryItemType> {
  const nextConfigId = `${Math.random()}`.slice(2)
  const queryItemLabel = outputJsonOriginDs?.getLabel()
  return Immutable({
    configId: nextConfigId,
    name: queryItemLabel,
    useDataSource: useDataSource as any,
    outputDataSourceId: `${widgetId}_output_${nextConfigId}`,

    spatialRelationUseDataSources: [] as any
  })
}

export function QueryItemSettingMain (props: Props) {
  const { index, total, arrangeType, widgetId, queryItem, onQueryItemAdded, onQueryItemChanged, onClose } = props
  const getI18nMessage = hooks.useTranslate(defaultMessages)
  const [itemLabel, setItemLabel] = React.useState('')
  const currentItem = Object.assign({}, DEFAULT_QUERY_ITEM, queryItem)
  const useDataSources = currentItem.useDataSource != null ? Immutable([currentItem.useDataSource]) : undefined

  React.useEffect(() => {
    if (queryItem?.name && itemLabel !== queryItem.name) {
      setItemLabel(queryItem.name)
    }
    // eslint-disable-next-line
  }, [queryItem?.name])

  const handleUseDsChanged = (useDataSource: UseDataSource) => {
    if (!useDataSource) {
      return
    }
    DataSourceManager.getInstance()
      .createDataSourceByUseDataSource(Immutable(useDataSource))
      .then((originDs: FeatureLayerDataSource | SceneLayerDataSource) => {
        const outputJsonOriginDs = getOutputJsonOriginDs(originDs)
        if (!outputJsonOriginDs) Promise.reject(Error(''))
        return outputJsonOriginDs
      })
      .then((outputJsonOriginDs: FeatureLayerDataSource) => {
        if (queryItem == null) {
          const newItem = createNewQueryItem(widgetId, useDataSource, outputJsonOriginDs)
          onQueryItemAdded(newItem)
        } else {
          const newItem = queryItem.set('useDataSource', useDataSource).set('name', outputJsonOriginDs?.getLabel())
          onQueryItemChanged(index, newItem, true)
        }
      })
  }

  const updateProperty = React.useCallback((prop: string, value: any, dsUpdateRequired = false) => {
    let newItem
    if (value == null) {
      newItem = queryItem.without(prop as any)
    } else {
      newItem = queryItem.set(prop, value)
    }
    onQueryItemChanged(index, newItem, dsUpdateRequired)
  }, [onQueryItemChanged, index, queryItem])

  const updateItem = (newItem: ImmutableObject<QueryItemType>, dsUpdateRequired = false) => {
    onQueryItemChanged(index, newItem, dsUpdateRequired)
  }

  const handleLabelChange = React.useCallback((e) => setItemLabel(e.target.value), [])

  const handleLabelAccept = React.useCallback((value) => {
    if (value.trim().length > 0) {
      updateProperty('name', value, true)
    } else {
      setItemLabel(queryItem.name)
    }
  }, [queryItem?.name, updateProperty])

  return (
    <div className='h-100'>
      <PanelHeader
        level={1}
        showClose
        onClose={onClose}
        className='setting-ui-unit-header px-3 pt-3'
        title={getI18nMessage('setQuery')}
      />
      <div css={css`height: calc(100% - 40px);overflow: auto;`}>
        <SettingSection title={getI18nMessage('data')}>
          <SettingRow>
            <DataSourceSelector
              widgetId={widgetId}
              disableRemove={() => true}
              mustUseDataSource
              closeDataSourceListOnChange
              types={dsTypes}
              isMultiple={false}
              useDataSources={useDataSources as any}
              onChange={(useDataSources) => handleUseDsChanged(useDataSources?.[0])}
            />
          </SettingRow>
        </SettingSection>
        {queryItem && (
          <React.Fragment>
            <SettingSection title={getI18nMessage('label')}>
              <SettingRow>
                <TextInput
                  className='w-100'
                  value={itemLabel}
                  onChange={handleLabelChange}
                  onAcceptValue={handleLabelAccept}
                />
              </SettingRow>
              {total < 2 && arrangeType !== QueryArrangeType.Inline && (
                <SettingRow label={getI18nMessage('displayLabel')}>
                  <Switch
                    checked={currentItem.displayLabel}
                    onChange={(e) => updateProperty('displayLabel', e.target.checked)}
                  />
                </SettingRow>
              )}
            </SettingSection>
            <SettingSection>
              <SettingRow label={getI18nMessage('icon')}>
                <IconPicker
                  buttonOptions={{ type: 'default', size: 'sm' }}
                  icon={currentItem.icon as IconResult}
                  onChange={(icon) => updateProperty('icon', icon)}
                  configurableOption='none'
                />
              </SettingRow>
            </SettingSection>
            <AttributeFilterSetting
              queryItem={queryItem}
              onPropertyChanged={updateProperty}
              onQueryItemChanged={updateItem}
            />
            <SpatialFilterSetting
              queryItem={queryItem}
              onPropertyChanged={updateProperty}
              handleStageChange={props.handleStageChange}
            />
            <ResultsSetting widgetId={widgetId} queryItem={queryItem} onPropertyChanged={updateProperty} onQueryItemChanged={updateItem} />
          </React.Fragment>
        )}
      </div>
    </div>
  )
}
