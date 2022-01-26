/** @jsx jsx */
import { React, jsx, ImmutableObject } from 'jimu-core'
import { QueryItemType, QueryArrangeType } from '../config'
import { QueryItemSettingMain } from './query-item-main-mode'
import { QueryItemSettingMapMode } from './query-item-map-mode'
import { QueryItemSettingDataMode } from './query-item-data-mode'

interface Props {
  widgetId: string
  arrangeType: QueryArrangeType
  total: number
  index: number
  queryItem?: ImmutableObject<QueryItemType>
  onQueryItemChanged: (index: number, item: ImmutableObject<QueryItemType>, dsUpdateRequired?: boolean) => void
  onQueryItemAdded: (item: ImmutableObject<QueryItemType>) => void
  onClose: () => void
}

export function QueryItemSetting (props: Props) {
  const { widgetId, index, queryItem, onQueryItemChanged, onClose } = props
  const [viewStage, setViewStage] = React.useState(0)

  React.useEffect(() => {
    if (!queryItem?.useDataSource) {
      setViewStage(0)
    }
  }, [queryItem?.useDataSource])

  const handleStageChange = (id: number) => {
    if (id >= 0) {
      setViewStage(id)
    } else {
      onClose()
    }
  }

  return (
    <div className='h-100'>
      {viewStage === 0 && <QueryItemSettingMain {...props} handleStageChange={handleStageChange} />}
      {viewStage === 1 && (
        <QueryItemSettingMapMode
          index={index}
          queryItem={queryItem}
          onQueryItemChanged={onQueryItemChanged}
          handleStageChange={handleStageChange}
        />
      )}
      {viewStage === 2 && (
        <QueryItemSettingDataMode
          index={index}
          widgetId={widgetId}
          queryItem={queryItem}
          onQueryItemChanged={onQueryItemChanged}
          handleStageChange={handleStageChange}
        />
      )}
    </div>
  )
}
