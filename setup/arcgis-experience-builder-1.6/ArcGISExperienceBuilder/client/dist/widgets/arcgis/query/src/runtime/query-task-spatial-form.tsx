/** @jsx jsx */
import { React, ReactRedux, IMState, jsx, css, classNames, ImmutableArray, UseDataSource } from 'jimu-core'
import { hooks, Select } from 'jimu-ui'
import { CreateToolType, SpatialFilterType, SpatialFilterObj, SpatialRelation, UnitType } from '../config'
import defaultMessage from './translations/default'
import { GeometryFromDataSource } from './geometry-from-ds'
import { GeometryFromMap } from './geometry-from-map'
import { GeometryFromDraw } from './geometry-from-draw'

export interface QueryTaskItemProps {
  widgetId: string
  label: string
  enableBuffer: boolean
  bufferDistance: number
  bufferUnit: UnitType
  spatialRelations: ImmutableArray<SpatialRelation>
  useDataSources: ImmutableArray<UseDataSource>
  filterTypes: ImmutableArray<SpatialFilterType>
  mapWidgetIds: ImmutableArray<string>
  createToolTypes: ImmutableArray<CreateToolType>
  onFilterChange: (filter: SpatialFilterObj) => void
  onRelationChange: (rel: SpatialRelation) => void
  onBufferChange: (distance: number, unit: UnitType) => void
}

export function QueryTaskSpatialForm (props: QueryTaskItemProps) {
  const { label, filterTypes, mapWidgetIds, onFilterChange, onRelationChange, onBufferChange, useDataSources, spatialRelations, enableBuffer, bufferDistance, bufferUnit, createToolTypes } = props
  const getI18nMessage = hooks.useTranslate(defaultMessage)
  // used to store the selection of the data source in order to update the filter when option changes
  const selectedGeometriesRef = React.useRef<any>(null)
  const mapExists = ReactRedux.useSelector((state: IMState) => {
    if (mapWidgetIds?.length > 0) {
      const mapWidgetId = mapWidgetIds[0]
      return state.appConfig.widgets[mapWidgetId] != null
    }
    return false
  })
  const canUseMapFilter = React.useMemo(() => {
    return mapExists && (filterTypes?.includes(SpatialFilterType.CurrentMapExtent) || filterTypes?.includes(SpatialFilterType.InteractiveDrawMode))
  }, [filterTypes, mapExists])
  const supportedFilterTypes = React.useMemo(() => {
    const result = []
    if (useDataSources?.length > 0) {
      result.push({ value: 'data', label: getI18nMessage('featureFromDs') })
    }
    if (canUseMapFilter && filterTypes?.includes(SpatialFilterType.CurrentMapExtent)) {
      result.push({ value: 'map', label: getI18nMessage(`spatialFilterType_${SpatialFilterType.CurrentMapExtent}`) })
    }
    if (canUseMapFilter && filterTypes?.includes(SpatialFilterType.InteractiveDrawMode)) {
      result.push({ value: 'draw', label: getI18nMessage(`spatialFilterType_${SpatialFilterType.InteractiveDrawMode}`) })
    }
    return result
  }, [canUseMapFilter, useDataSources, getI18nMessage, filterTypes])

  const [currentFilterType, setCurrentFilterType] = React.useState(supportedFilterTypes?.[0]?.value)

  React.useEffect(() => {
    // in order to avoid invalid option being selected
    if (currentFilterType !== 'none' && !supportedFilterTypes.find((item) => item.value === currentFilterType)) {
      setCurrentFilterType(supportedFilterTypes?.[0]?.value)
    }
  }, [currentFilterType, supportedFilterTypes])

  React.useEffect(() => {
    // clear the relationship and buffer if filter type is not 'data'
    if (currentFilterType === 'map' || currentFilterType === 'draw' || currentFilterType === 'none') {
      onRelationChange(null)
      onBufferChange(0, UnitType.Meters)
      onFilterChange({ geometry: null })
    }
    // no need to update the filter if the data source has selection since it will be updated in the handleSelectionChange method
    if (currentFilterType === 'data' && selectedGeometriesRef.current == null) {
      onFilterChange({ geometry: null })
    }
  }, [currentFilterType, onRelationChange, onBufferChange, onFilterChange])

  const handleFilterTypeChanged = React.useCallback((evt) => setCurrentFilterType(evt.target.value), [])

  const handleGeometrychange = React.useCallback((geometry: __esri.Geometry, layer?: __esri.GraphicsLayer, graphic?: __esri.Graphic, clearAfterApply?: boolean) => {
    onFilterChange({ geometry, graphic, layer, clearAfterApply })
  }, [onFilterChange])

  const handleSelectionChange = React.useCallback((geometries) => {
    selectedGeometriesRef.current = geometries
    onFilterChange({ geometry: geometries })
  }, [onFilterChange])

  if (!(useDataSources?.length > 0 || canUseMapFilter)) {
    return null
  }

  return (
    <React.Fragment>
      <div className={classNames('form-title my-2', { 'd-none': label === '' })}>{label}</div>
      {supportedFilterTypes.length > 0 && (
        <div>
          <div>{getI18nMessage('chooseFilterType')}</div>
          <Select
            css={css`height: 32px;`}
            value={currentFilterType}
            onChange={handleFilterTypeChanged}
          >
            <option key='-' value='none'>-</option>
            {supportedFilterTypes.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
          </Select>
        </div>
      )}
      {currentFilterType === 'data' && (
        <GeometryFromDataSource
          enableBuffer={enableBuffer}
          bufferDistance={bufferDistance}
          bufferUnit={bufferUnit}
          spatialRelations={spatialRelations}
          useDataSources={useDataSources}
          onSelectionChange={handleSelectionChange}
          onRelationChange={onRelationChange}
          onBufferChange={onBufferChange}
        />
      )}
      {currentFilterType === 'map' && (
        <GeometryFromMap
          mapWidgetIds={mapWidgetIds}
          createToolTypes={createToolTypes}
          onGeometryChange={handleGeometrychange}
        />
      )}
      {currentFilterType === 'draw' && (
        <GeometryFromDraw
          mapWidgetIds={mapWidgetIds}
          createToolTypes={createToolTypes}
          onGeometryChange={handleGeometrychange}
        />
      )}
    </React.Fragment>
  )
}
