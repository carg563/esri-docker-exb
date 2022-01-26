/** @jsx jsx */
import { React, jsx, css, classNames, DataSource, ImmutableObject, IMState, IMSqlExpression, ReactRedux } from 'jimu-core'
import { Button, hooks } from 'jimu-ui'
import { loadArcGISJSAPIModules } from 'jimu-arcgis'
import { SqlExpressionRuntime } from 'jimu-ui/basic/sql-expression-runtime'
import { QueryItemType, SpatialFilterObj, SpatialRelation, UnitType } from '../config'
import { DEFAULT_QUERY_ITEM } from '../default-query-item'
import defaultMessage from './translations/default'
import { QueryTaskSpatialForm } from './query-task-spatial-form'
import { useAutoHeight } from './useAutoHeight'

export interface QueryTaskItemProps {
  widgetId: string
  configId: string
  outputDS?: DataSource
  onFormSubmit: (sqlExprObj: IMSqlExpression, spatialFilter: SpatialFilterObj) => void
}

const getFormStyle = (isAutoHeight: boolean) => {
  return css`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    .form-title {
      color: var(--dark-800);
      font-weight: 500;
      font-size: 13px;
      line-height: 18px;
    }
    .query-form__content {
      flex: 1 1 ${isAutoHeight ? 'auto' : 0};
      max-height: ${isAutoHeight ? '61.8vh' : 'none'};
      overflow: auto;
    }
  `
}

export function QueryTaskForm (props: QueryTaskItemProps) {
  const { widgetId, configId, outputDS, onFormSubmit } = props
  const queryItem: ImmutableObject<QueryItemType> = ReactRedux.useSelector((state: IMState) => {
    const widgetJson = state.appConfig.widgets[widgetId]
    return widgetJson.config.queryItems.find(item => item.configId === configId)
  })
  const currentItem = Object.assign({}, DEFAULT_QUERY_ITEM, queryItem)
  const getI18nMessage = hooks.useTranslate(defaultMessage)

  // const [dataSource, setDataSource] = React.useState<DataSource>(null)
  const {
    useAttributeFilter,
    useSpatialFilter,
    spatialFilterTypes,
    sqlExprObj,
    spatialMapWidgetIds,
    spatialInteractiveCreateToolTypes,
    spatialRelationUseDataSources,
    spatialRelations,
    spatialRelationEnableBuffer,
    spatialRelationBufferDistance,
    spatialRelationBufferUnit,
    attributeFilterLabel = getI18nMessage('attributeFilter'),
    spatialFilterLabel = getI18nMessage('spatialFilter')
  } = currentItem
  const [attributeFilterSqlExprObj, setAttributeFilterSqlExprObj] = React.useState<IMSqlExpression>(sqlExprObj)
  const spatialFilterObjRef = React.useRef<SpatialFilterObj>(null)
  const spatialRelationRef = React.useRef<SpatialRelation>(SpatialRelation.Intersect)
  const bufferRef = React.useRef<{ distance: number, unit: UnitType }>(null)
  const isAutoHeight = useAutoHeight()

  const originDS = outputDS?.getOriginDataSources()[0]

  React.useEffect(() => {
    if (!sqlExprObj) {
      setAttributeFilterSqlExprObj(null)
    } else if (attributeFilterSqlExprObj?.displaySQL !== sqlExprObj.displaySQL) {
      setAttributeFilterSqlExprObj(sqlExprObj)
    }
    // eslint-disable-next-line
  }, [sqlExprObj?.displaySQL])

  const applyQuery = React.useCallback(() => {
    if (Array.isArray(spatialFilterObjRef.current?.geometry)) {
      loadArcGISJSAPIModules([
        'esri/geometry/geometryEngine'
      ]).then(modules => {
        const geometryEngine: (typeof __esri.geometryEngine) = modules[0]
        const geometry = geometryEngine.union(spatialFilterObjRef.current.geometry)
        onFormSubmit(attributeFilterSqlExprObj, { ...spatialFilterObjRef.current, geometry, relation: spatialRelationRef.current, buffer: bufferRef.current })
      })
    } else {
      onFormSubmit(attributeFilterSqlExprObj, { ...spatialFilterObjRef.current, relation: spatialRelationRef.current, buffer: bufferRef.current })
    }
  }, [onFormSubmit, attributeFilterSqlExprObj])

  const resetQuery = React.useCallback(() => {
    setAttributeFilterSqlExprObj(sqlExprObj)
    if (spatialFilterObjRef.current?.layer) {
      spatialFilterObjRef.current.layer.removeAll()
    }
    spatialFilterObjRef.current = null
  }, [sqlExprObj])

  const handleSqlExprObjChange = React.useCallback((sqlObj: IMSqlExpression) => {
    setAttributeFilterSqlExprObj(sqlObj)
  }, [])

  const handleSpatialFilterChange = React.useCallback((filter: SpatialFilterObj) => {
    spatialFilterObjRef.current = filter
  }, [])

  const handleRelationChange = React.useCallback((rel: SpatialRelation) => {
    spatialRelationRef.current = rel
  }, [])

  const handleBufferChange = React.useCallback((distance: number, unit: UnitType) => {
    bufferRef.current = { distance, unit }
  }, [])

  const showAttributeFilter = useAttributeFilter && sqlExprObj != null
  const showSpatialFilter = useSpatialFilter && (spatialFilterTypes.length > 0 || spatialRelationUseDataSources?.length > 0)

  return (
    <div className='query-form' css={getFormStyle(isAutoHeight)}>
      <div className='query-form__content my-2'>
        {showAttributeFilter && (
          <div>
            <div className={classNames('form-title my-2', { 'd-none': attributeFilterLabel === '' })}>
              {attributeFilterLabel}
            </div>
            {originDS && (
              <SqlExpressionRuntime
                widgetId={widgetId}
                dataSource={originDS}
                expression={attributeFilterSqlExprObj}
                onChange={handleSqlExprObjChange}
              />
            )}
          </div>
        )}
        {showAttributeFilter && showSpatialFilter && (
          <hr className='my-3' css={css`border: none; height: 1px; background-color: var(--light-300);`}/>
        )}
        {showSpatialFilter && (
          <QueryTaskSpatialForm
            widgetId={widgetId}
            label={spatialFilterLabel}
            filterTypes={spatialFilterTypes}
            mapWidgetIds={spatialMapWidgetIds}
            createToolTypes={spatialInteractiveCreateToolTypes}
            onFilterChange={handleSpatialFilterChange}
            onRelationChange={handleRelationChange}
            onBufferChange={handleBufferChange}
            spatialRelations={spatialRelations}
            enableBuffer={spatialRelationEnableBuffer}
            bufferDistance={spatialRelationBufferDistance}
            bufferUnit={spatialRelationBufferUnit}
            useDataSources={spatialRelationUseDataSources}
          />
        )}
      </div>
      <div className='query-form__actions d-flex align-items-center'>
        <Button className='active ml-auto mr-2' onClick={applyQuery}>
          {getI18nMessage('apply')}
        </Button>
        <Button onClick={resetQuery}>{getI18nMessage('reset')}</Button>
      </div>
    </div>
  )
}
