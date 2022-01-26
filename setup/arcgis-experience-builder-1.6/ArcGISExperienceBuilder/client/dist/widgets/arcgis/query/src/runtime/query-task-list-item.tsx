/** @jsx jsx */
import { React, jsx, css, ImmutableObject } from 'jimu-core'
import { Button, Icon } from 'jimu-ui'
import { QueryItemType } from '../config'
import { getWidgetRuntimeDataMap } from './widget-config'
import { DataSourceTip } from '../common/data-source-tip'
import { QueryTaskLabel } from './query-task-label'
import { DEFAULT_QUERY_ITEM } from '../default-query-item'

const { iconMap } = getWidgetRuntimeDataMap()

export interface QueryTaskItemProps {
  index: number
  queryItem: ImmutableObject<QueryItemType>
  onClickItem: (index: number) => void
}

const style = css`
  height: 32px;
`

export function QueryTaskListItem (props: QueryTaskItemProps) {
  const { index, queryItem, onClickItem } = props
  const [enabled, setEnabled] = React.useState(true)
  const currentItem = Object.assign({}, DEFAULT_QUERY_ITEM, queryItem)
  const { icon, name, useDataSource } = currentItem

  const handleStatusChange = (enabled: boolean) => {
    setEnabled(enabled)
  }

  const handleItemClick = () => {
    if (enabled) {
      onClickItem(index)
    }
  }

  return (
    <div className='d-flex align-items-center pl-2 pr-1 w-100' css={style} onClick={handleItemClick}>
      <QueryTaskLabel icon={icon} name={name} />
      <div className='ml-auto'>
        <DataSourceTip useDataSource={useDataSource} onStatusChange={handleStatusChange} />
      </div>
      <Button className='ml-2' size='sm' type='tertiary' disabled={!enabled} icon>
        <Icon size={16} icon={iconMap.arrowRight} autoFlip />
      </Button>
    </div>
  )
}
