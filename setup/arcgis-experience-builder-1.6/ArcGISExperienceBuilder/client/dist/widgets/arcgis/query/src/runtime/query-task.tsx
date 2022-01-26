/** @jsx jsx */
import {
  React,
  jsx,
  css,
  ImmutableObject,
  IMSqlExpression,
  DataSourceComponent,
  DataSource,
  UseDataSource,
  Immutable,
  FeatureLayerDataSource,
  classNames,
  CONSTANTS,
  DataRecord,
  QueryParams,
  DataSourceStatus
} from 'jimu-core'
import { Button, Icon, Loading, LoadingType, Tooltip, hooks } from 'jimu-ui'
import { TrashOutlined } from 'jimu-icons/outlined/editor/trash'
import { QueryItemType, SpatialFilterObj } from '../config'
import { QueryTaskForm } from './query-task-form'
import { QueryTaskResult } from './query-result'
import { DataSourceTip } from '../common/data-source-tip'
import { QueryTaskLabel } from './query-task-label'
import { getWidgetRuntimeDataMap } from './widget-config'
import { DEFAULT_QUERY_ITEM } from '../default-query-item'
import { generateQueryParams, executeQuery, executeCountQuery } from './query-utils'
import { MenuOutlined } from 'jimu-icons/outlined/editor/menu'
import defaultMessage from './translations/default'

const { iconMap } = getWidgetRuntimeDataMap()

export interface QueryTaskProps {
  widgetId: string
  index: number
  total: number
  queryItem: ImmutableObject<QueryItemType>
  wrappedInPopper?: boolean
  className?: string
  onNavBack?: () => void
}

const style = css`
  &.wrapped .query-form {
    height: 100%;
  }
  .query-task__content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .query-form__header {
    display: flex;
    .nav-action {
      flex: 1 1 0;
      overflow: hidden;
      display: flex;
    }
    .result-menu {
      display: flex;
    }
  }
`

export function QueryTask (props: QueryTaskProps) {
  const { queryItem, onNavBack, total, wrappedInPopper = false, className = '', index, ...otherProps } = props
  const getI18nMessage = hooks.useTranslate(defaultMessage)
  const [stage, setStage] = React.useState(0)
  const [enabled, setEnabled] = React.useState(true)
  const [resultCount, setResultCount] = React.useState(0)
  const queryParamRef = React.useRef<QueryParams>(null)
  const recordsRef = React.useRef<DataRecord[]>(null)
  const [outputDS, setOutputDS] = React.useState<DataSource>(null)
  const attributeFilterSqlExprObj = React.useRef<IMSqlExpression>(queryItem.sqlExprObj)
  const spatialFilterObj = React.useRef(null)

  const currentItem = Object.assign({}, DEFAULT_QUERY_ITEM, queryItem)
  const { icon, name, displayLabel } = currentItem

  const defaultPageSize = (outputDS as FeatureLayerDataSource)?.getQueryPageSize() ?? CONSTANTS.DEFAULT_QUERY_PAGE_SIZE

  const useOutputDs: ImmutableObject<UseDataSource> = React.useMemo(
    () =>
      Immutable({
        dataSourceId: queryItem.outputDataSourceId,
        mainDataSourceId: queryItem.outputDataSourceId
      }),
    [queryItem.outputDataSourceId]
  )

  const handleStatusChange = React.useCallback((enabled: boolean) => {
    setEnabled(enabled)
  }, [])

  const handleOutputDataSourceCreated = React.useCallback((ds: DataSource) => {
    setOutputDS(ds)
  }, [])

  const navToForm = React.useCallback((clearResults = false) => {
    if (clearResults) {
      recordsRef.current = null
      outputDS?.setStatus(DataSourceStatus.NotReady)
      setResultCount(0)
    }
    setStage(0)
  }, [outputDS])

  const navToResult = React.useCallback(() => {
    setStage(1)
  }, [])

  const handleFormSubmit = React.useCallback((sqlExpr: IMSqlExpression, spatialFilter: SpatialFilterObj) => {
    attributeFilterSqlExprObj.current = sqlExpr
    spatialFilterObj.current = spatialFilter
    // Load the first page
    const featureDS = outputDS as FeatureLayerDataSource
    setStage(2)
    generateQueryParams(featureDS, sqlExpr, spatialFilter, currentItem, 1, defaultPageSize)
      .then((queryParams) => {
        queryParamRef.current = queryParams
        featureDS.setCountStatus(DataSourceStatus.Unloaded)
        return executeCountQuery(props.widgetId, featureDS, queryParams)
      })
      .then((count) => {
        setResultCount(count)
        // update ds in order to execute query
        featureDS.updateQueryParams(queryParamRef.current, props.widgetId)
        featureDS.setStatus(DataSourceStatus.Unloaded)
        return executeQuery(props.widgetId, featureDS, queryParamRef.current)
      })
      .then((result) => {
        recordsRef.current = result.records
      })
      .finally(() => {
        if (spatialFilter?.layer && spatialFilter?.clearAfterApply) {
          spatialFilter.layer.removeAll()
        }
        setStage(1)
      })
  }, [currentItem, props.widgetId, outputDS, defaultPageSize])

  const clearResult = React.useCallback(() => {
    recordsRef.current = null
    outputDS?.setStatus(DataSourceStatus.NotReady)
    setResultCount(0)
  }, [outputDS])

  return (
    <div className={classNames('query-task h-100 d-flex', className, { wrapped: wrappedInPopper })} css={style}>
      <div className={classNames('query-task__content', { 'd-none': stage === 1 })}>
        <DataSourceComponent useDataSource={useOutputDs} onDataSourceCreated={handleOutputDataSourceCreated} />
        <div className='query-form__header align-items-center'>
          <div className={classNames('nav-action align-items-center', { 'd-none': wrappedInPopper })}>
            <Button
              className={classNames('p-0 mr-2', { 'd-none': total === 1 })}
              size='sm'
              type='tertiary'
              icon
              onClick={onNavBack}
            >
              <Icon size={16} icon={iconMap.arrowNavBack} autoFlip />
            </Button>
            <QueryTaskLabel icon={icon} name={displayLabel ? name : ''} />
          </div>
          <div className={classNames('result-menu ml-auto align-items-center', { 'd-none': resultCount === 0 })}>
            <Tooltip title={getI18nMessage('checkResult')} placement='bottom'>
              <Button
                size='sm'
                type='tertiary'
                aria-label={getI18nMessage('checkResult')}
                icon
                onClick={navToResult}
              >
                <MenuOutlined />
              </Button>
            </Tooltip>
            <div css={css`width: 1px; height: 16px; background-color: var(--light-400);`}></div>
            <Tooltip title={getI18nMessage('clearResult')} placement='bottom'>
              <Button
                size='sm'
                type='tertiary'
                aria-label={getI18nMessage('clearResult')}
                icon
                onClick={clearResult}
              >
                <TrashOutlined />
              </Button>
            </Tooltip>
          </div>
        </div>
        {enabled && <QueryTaskForm {...otherProps} configId={queryItem.configId} outputDS={outputDS} onFormSubmit={handleFormSubmit} />}
        <DataSourceTip useDataSource={queryItem.useDataSource} showMessage={true} onStatusChange={handleStatusChange} />
      </div>
      <div className={classNames('query-task__content', { 'd-none': stage !== 1 })}>
        <QueryTaskResult
          widgetId={props.widgetId}
          queryItem={queryItem}
          queryParams={queryParamRef.current}
          resultCount={resultCount}
          records={recordsRef.current}
          defaultPageSize={defaultPageSize}
          outputDS={outputDS}
          onNavBack={navToForm}
        />
      </div>
      {stage === 2 && <Loading type={LoadingType.Donut}/>}
    </div>
  )
}
