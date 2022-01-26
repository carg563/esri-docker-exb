/** @jsx jsx */
import {
  React,
  jsx,
  getAppStore,
  DataSourceComponent,
  DataSource,
  UseDataSource,
  appConfigUtils,
  IMDataSourceInfo,
  DataSourceStatus,
  ImmutableObject
} from 'jimu-core'
import { Icon, hooks, Tooltip } from 'jimu-ui'
import { EntityStatusType, StatusIndicator } from './common-components'
import iconWarning from 'jimu-icons/svg/outlined/suggested/warning.svg'
import iconError from 'jimu-icons/svg/outlined/suggested/wrong.svg'

interface ContentProps {
  useDataSource: ImmutableObject<UseDataSource>
  onStatusChange?: (enabled: boolean) => void
  onDataSourceCreated?: (ds: DataSource) => void
  showMessage?: boolean
}

/**
 * Show icon and message if the data source doesn't work.
 * @param props
 * @returns
 */
export function DataSourceTip (props: ContentProps) {
  const { useDataSource, onStatusChange, onDataSourceCreated, showMessage = false } = props
  const getI18nMessage = hooks.useTranslate()
  const [dsStatus, setDsStatus] = React.useState<'error' | 'warning' | 'creating'>(null)
  const [dataSource, setDataSource] = React.useState<DataSource>(null)

  const handleDsInfoChange = React.useCallback((info: IMDataSourceInfo) => {
    if (info) {
      const { status, instanceStatus } = info
      if (instanceStatus === DataSourceStatus.NotCreated) {
        setDsStatus('creating')
        onStatusChange?.(false)
      } else if (instanceStatus === DataSourceStatus.CreateError || status === DataSourceStatus.LoadError) {
        setDsStatus('error')
        onStatusChange?.(false)
      } else if (status === DataSourceStatus.NotReady) {
        setDsStatus('warning')
        onStatusChange?.(false)
      } else {
        setDsStatus(null)
        onStatusChange?.(true)
      }
    }
  }, [onStatusChange])

  const handleDsCreated = React.useCallback((ds: DataSource) => {
    setDataSource(ds)
    onDataSourceCreated?.(ds)
  }, [onDataSourceCreated])

  const handleDsCreateFailed = React.useCallback(() => {
    setDataSource(null)
    setDsStatus('error')
    onStatusChange?.(false)
  }, [onStatusChange])

  let statusIcon
  let statusMsg
  let color
  if (dsStatus === 'creating') {
    statusIcon = iconError
    statusMsg = getI18nMessage('loading')
  } else if (dsStatus === 'error') {
    statusIcon = iconError
    statusMsg = getI18nMessage('dataSourceCreateError')
    color = 'var(--danger-500)'
  } else if (dsStatus === 'warning') {
    const originDs = dataSource?.getOriginDataSources()?.[0]
    const dsLabel = originDs?.getLabel()

    const widgetId = appConfigUtils.getWidgetIdByOutputDataSource(useDataSource)
    const appState = window?.jimuConfig?.isBuilder
      ? getAppStore().getState().appStateInBuilder
      : getAppStore().getState()
    const widgetLabel = appState.appConfig.widgets[widgetId]?.label

    color = 'var(--warning-700)'
    statusIcon = iconWarning
    statusMsg = getI18nMessage('outputDataIsNotGenerated', {
      outputDsLabel: dsLabel ?? '',
      sourceWidgetName: widgetLabel ?? ''
    })
  }
  return (
    <React.Fragment>
      <DataSourceComponent
        useDataSource={useDataSource}
        onDataSourceInfoChange={handleDsInfoChange}
        onDataSourceCreated={handleDsCreated}
        onCreateDataSourceFailed={handleDsCreateFailed}
      />
      {dsStatus === 'creating' && <StatusIndicator statusType={EntityStatusType.Loading} title={statusMsg} />}
      {(dsStatus === 'error' || dsStatus === 'warning') && (
        <div className='d-flex align-items-center'>
          <Tooltip title={statusMsg}>
            <div><Icon icon={statusIcon} color={color} /></div>
          </Tooltip>
          {showMessage && <div className='status-message'>{statusMsg}</div>}
        </div>
      )}
    </React.Fragment>
  )
}
