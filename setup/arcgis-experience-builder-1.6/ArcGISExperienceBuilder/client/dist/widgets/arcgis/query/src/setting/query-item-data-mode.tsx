/** @jsx jsx */
import { React, jsx, css, ImmutableObject, ImmutableArray, Immutable, DataSourceManager, UseDataSource, CONSTANTS, IMDataSourceJson } from 'jimu-core'
import { hooks, Button, Icon, MultiSelect, MultiSelectItem } from 'jimu-ui'
import { DataSourceSelector, AllDataSourceTypes } from 'jimu-ui/advanced/data-source-selector'
import { SettingRow, SettingSection } from 'jimu-ui/advanced/setting-components'
import { List, TreeItemActionType, TreeItemsType, TreeItemType } from 'jimu-ui/basic/list-tree'
import defaultMessages from './translations/default'
import { QueryItemType, SpatialRelation } from '../config'
import { widgetSettingDataMap } from './setting-config'
import { DEFAULT_QUERY_ITEM } from '../default-query-item'
import { BufferSetting } from './buffer'
import { CloseOutlined } from 'jimu-icons/outlined/editor/close'

const { iconMap } = widgetSettingDataMap

const headerStyle = css`
  height: 55px;
  border-bottom: 1px solid var(--light-800);
  .title {
    font-weight: 600;
    font-size: 16px;
    color: var(--dark-600);
  }
`
interface Props {
  index: number
  widgetId: string
  queryItem?: ImmutableObject<QueryItemType>
  onQueryItemChanged: (index: number, item: ImmutableObject<QueryItemType>, dsUpdateRequired?: boolean) => void
  handleStageChange: (id: number) => void
}

const dsTypes = Immutable([AllDataSourceTypes.FeatureLayer])

const advancedActionMap = {
  overrideItemBlockInfo: () => {
    return {
      name: TreeItemActionType.RenderOverrideItem,
      children: [{
        name: TreeItemActionType.RenderOverrideItemDroppableContainer,
        children: [{
          name: TreeItemActionType.RenderOverrideItemDraggableContainer,
          children: [{
            name: TreeItemActionType.RenderOverrideItemBody,
            children: [{
              name: TreeItemActionType.RenderOverrideItemMainLine,
              children: [{
                name: TreeItemActionType.RenderOverrideItemDragHandle
              }, {
                name: TreeItemActionType.RenderOverrideItemTitle
              }]
            }]
          }]
        }]
      }]
    }
  }
}

function shouldHideDataSource (dsJson: IMDataSourceJson): boolean {
  return dsJson.geometryType == null
}

export function QueryItemSettingDataMode (props: Props) {
  const { index, widgetId, handleStageChange, queryItem, onQueryItemChanged } = props
  const getI18nMessage = hooks.useTranslate(defaultMessages)
  const spatialRelationOptions: ImmutableArray<MultiSelectItem> = React.useMemo(() => {
    return Immutable(Object.entries(SpatialRelation).map(([key, value]) => ({
      value,
      label: getI18nMessage(`spatialRelation_${key}`)
    })))
  }, [getI18nMessage])

  const updateProperty = (prop: string, value: any, dsUpdateRequired = false) => {
    const newItem = queryItem.set(prop, value)
    onQueryItemChanged(index, newItem, dsUpdateRequired)
  }

  const displaySelectedFields = React.useCallback(values => {
    return getI18nMessage('numSelected', {
      number: values.length
    })
  }, [getI18nMessage])

  const handleSpatailRelationsChange = hooks.useEventCallback((evt, value, values) => {
    updateProperty('spatialRelations', values)
  })

  const handleDsChange = hooks.useEventCallback((useDataSources: UseDataSource[]) => {
    const ds = useDataSources.map(u => {
      if (u.dataViewId !== CONSTANTS.SELECTION_DATA_VIEW_ID) {
        return {
          ...u,
          dataSourceId: DataSourceManager.getInstance().getDataSource(u.mainDataSourceId).getDataView(CONSTANTS.SELECTION_DATA_VIEW_ID).id,
          dataViewId: CONSTANTS.SELECTION_DATA_VIEW_ID
        }
      }
      return u
    })
    updateProperty('spatialRelationUseDataSources', ds, true)
  })

  const currentItem = Object.assign({}, DEFAULT_QUERY_ITEM, queryItem)
  const dataSources = Immutable(currentItem.spatialRelationUseDataSources ?? [])
  const spatialRelations = Immutable(currentItem.spatialRelations?.filter(rel => Object.values(SpatialRelation).includes(rel)))

  if (!queryItem) {
    return null
  }

  return (
    <React.Fragment>
      <div className='d-flex align-items-center' css={headerStyle}>
        <Button
          size='sm'
          type='tertiary'
          icon
          className='p-0 action-btn ml-2'
          onClick={() => handleStageChange(0)}>
          <Icon icon={iconMap.arrowLeft} size={18} autoFlip />
        </Button>
        <div className='title flex-grow-1 text-truncate ml-2' title={getI18nMessage('featureFromDs')}>{getI18nMessage('featureFromDs')}</div>
        <Button
          size='sm'
          type='tertiary'
          icon
          className='p-0 action-btn mx-2'
          onClick={() => handleStageChange(-1)}>
          <CloseOutlined size='s'/>
        </Button>
      </div>
      <div css={css`height: calc(100% - 55px); overflow: auto;`}>
        <SettingSection>
          <SettingRow flow='wrap' truncateLabel label={getI18nMessage('selectionViewOnly')}>
            <DataSourceSelector
              widgetId={widgetId}
              buttonLabel={getI18nMessage('newFilterLayer')}
              disableRemove={() => false}
              disableDataView
              mustUseDataSource
              closeDataSourceListOnChange
              types={dsTypes}
              isMultiple={true}
              hideDs={shouldHideDataSource}
              isMultipleDataView={false}
              useDataSources={dataSources as any}
              onChange={handleDsChange}
            />
          </SettingRow>
        </SettingSection>
        <SettingSection>
          <SettingRow flow='wrap' label={getI18nMessage('chooseSpatialRelationshipRules')}>
            <MultiSelect
              items={spatialRelationOptions}
              values={spatialRelations}
              fluid
              onClickItem={handleSpatailRelationsChange}
              displayByValues={displaySelectedFields}
            />
          </SettingRow>
          {spatialRelations?.length > 0 && (
            <SettingRow>
              <List
                className='selected-fields-list w-100'
                itemsJson={Array.from(spatialRelations).map((item, index) => {
                  const label = spatialRelationOptions.find(rel => rel.value === item).label
                  return {
                    itemStateDetailContent: item,
                    itemKey: `${index}`,
                    itemStateTitle: label,
                    itemStateCommands: []
                  }
                })}
                dndEnabled
                onUpdateItem={(actionData, refComponent) => {
                  const { itemJsons } = refComponent.props
                  const [, parentItemJson] = itemJsons as [TreeItemType, TreeItemsType]
                  const relations: SpatialRelation[] = parentItemJson.map(item => {
                    return item.itemStateDetailContent
                  })
                  updateProperty('spatialRelations', relations)
                }}
                isItemFocused={() => false}
                {...advancedActionMap}
              />
            </SettingRow>
          )}
        </SettingSection>
        <SettingSection>
          <BufferSetting
            enabled={currentItem.spatialRelationEnableBuffer}
            distance={currentItem.spatialRelationBufferDistance}
            unit={currentItem.spatialRelationBufferUnit}
            onEnableChanged={(enabled) => updateProperty('spatialRelationEnableBuffer', enabled)}
            onDistanceChanged={(distance) => updateProperty('spatialRelationBufferDistance', distance)}
            onUnitChanged={(unit) => updateProperty('spatialRelationBufferUnit', unit)}
          />
        </SettingSection>
      </div>
    </React.Fragment>
  )
}