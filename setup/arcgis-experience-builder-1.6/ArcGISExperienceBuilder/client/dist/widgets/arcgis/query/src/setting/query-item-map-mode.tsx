/** @jsx jsx */
import { React, jsx, css, ImmutableObject, ReactRedux, IMState } from 'jimu-core'
import { hooks, Switch, Button, Icon, Checkbox } from 'jimu-ui'
import { PolylineOutlined } from 'jimu-icons/outlined/gis/polyline'
import { PolygonOutlined } from 'jimu-icons/outlined/gis/polygon'
import { RectangleOutlined } from 'jimu-icons/outlined/gis/rectangle'
import { CircleOutlined } from 'jimu-icons/outlined/gis/circle'
import { SettingRow, SettingSection, MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
import defaultMessages from './translations/default'
import { QueryItemType, CreateToolType, SpatialFilterType } from '../config'
import { toggleItemInArray } from '../common/utils'
import { widgetSettingDataMap } from './setting-config'
import { DEFAULT_QUERY_ITEM } from '../default-query-item'
import { CloseOutlined } from 'jimu-icons/outlined/editor/close'

const { iconMap } = widgetSettingDataMap

export const sketchToolInfos = [
  { type: CreateToolType.Polyline, drawToolName: 'polyline', icon: <PolylineOutlined /> },
  { type: CreateToolType.Polygon, drawToolName: 'polygon', icon: <PolygonOutlined /> },
  { type: CreateToolType.Rectangle, drawToolName: 'rectangle', icon: <RectangleOutlined /> },
  { type: CreateToolType.Circle, drawToolName: 'circle', icon: <CircleOutlined /> }
]

interface Props {
  index: number
  queryItem?: ImmutableObject<QueryItemType>
  onQueryItemChanged: (index: number, item: ImmutableObject<QueryItemType>, dsUpdateRequired?: boolean) => void
  handleStageChange: (id: number) => void
}

const headerStyle = css`
  height: 55px;
  border-bottom: 1px solid var(--light-800);
  .title {
    font-weight: 600;
    font-size: 16px;
    color: var(--dark-600);
  }
`

export function QueryItemSettingMapMode (props: Props) {
  const { index, handleStageChange, queryItem, onQueryItemChanged } = props
  const getI18nMessage = hooks.useTranslate(defaultMessages)
  const currentItem = Object.assign({}, DEFAULT_QUERY_ITEM, queryItem)

  const mapExists = ReactRedux.useSelector((state: IMState) => {
    if (queryItem.spatialMapWidgetIds?.length > 0) {
      const mapWidgetId = queryItem.spatialMapWidgetIds[0]
      return state.appStateInBuilder.appConfig.widgets[mapWidgetId] != null
    }
    return false
  })
  const updateProperty = (prop: string, value: any, dsUpdateRequired = false) => {
    const newItem = queryItem.set(prop, value)
    onQueryItemChanged(index, newItem, dsUpdateRequired)
  }

  const toggleSpatialFilterType = (type: SpatialFilterType) => {
    const types = toggleItemInArray(type, [...currentItem.spatialFilterTypes])
    updateProperty('spatialFilterTypes', types)
  }

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
        <div className='title flex-grow-1 text-truncate ml-2' title={getI18nMessage('featureFromMap')}>{getI18nMessage('featureFromMap')}</div>
        <Button
          size='sm'
          type='tertiary'
          icon
          className='p-0 action-btn mx-2'
          onClick={() => handleStageChange(-1)}>
          <CloseOutlined size='s' />
        </Button>
      </div>
      <SettingSection title={getI18nMessage('chooseAMapWidget')} className='text-truncate'>
        <SettingRow>
          <MapWidgetSelector
            onSelect={(useMapWidgetIds) => updateProperty('spatialMapWidgetIds', useMapWidgetIds)}
            useMapWidgetIds={currentItem.spatialMapWidgetIds}
          />
        </SettingRow>
      </SettingSection>
      {mapExists && (
        <SettingSection title={getI18nMessage('geometryTypes')}>
          <SettingRow>
            <label>
              <Checkbox
                className='mr-2'
                checked={currentItem.spatialFilterTypes.includes(SpatialFilterType.CurrentMapExtent)}
                onChange={() => toggleSpatialFilterType(SpatialFilterType.CurrentMapExtent)}
              />
              <span>{getI18nMessage('spatialFilterType_CurrentMapExtent')}</span>
            </label>
          </SettingRow>
          <SettingRow>
            <label>
              <Checkbox
                className='mr-2'
                checked={currentItem.spatialFilterTypes.includes(SpatialFilterType.InteractiveDrawMode)}
                onChange={() => toggleSpatialFilterType(SpatialFilterType.InteractiveDrawMode)}
              />
              <span>{getI18nMessage('spatialFilterType_InteractiveDrawMode')}</span>
            </label>
          </SettingRow>
          {currentItem.spatialFilterTypes.includes(SpatialFilterType.InteractiveDrawMode) && (
            <SettingRow flow='wrap' className='d-block' label={getI18nMessage('chooseSelectionTools')}>
              {sketchToolInfos.map((value) => {
                const { type, icon, drawToolName } = value
                const currentSpatialInteractiveCreateToolTypes = currentItem.spatialInteractiveCreateToolTypes
                const selected = currentSpatialInteractiveCreateToolTypes.includes(type)
                return (
                  <div key={type} className='d-flex mt-2'>
                    {icon}
                    <label className='ml-2'>
                      {getI18nMessage(`sketchTool_${drawToolName}`)}
                    </label>
                    <Switch
                      className='ml-auto'
                      checked={selected}
                      onChange={() => {
                        const types = toggleItemInArray(type, [...currentSpatialInteractiveCreateToolTypes])
                        updateProperty('spatialInteractiveCreateToolTypes', types)
                      }}
                    />
                  </div>
                )
              })}
            </SettingRow>
          )}
        </SettingSection>
      )}
    </React.Fragment>
  )
}
