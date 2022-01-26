/** @jsx jsx */
import { jsx, css, React, ImmutableArray } from 'jimu-core'
import { List, TreeItemActionType } from 'jimu-ui/basic/list-tree'
import { QueryItemType } from '../config'
import { QueryTaskListItem } from './query-task-list-item'
import { QueryTask } from './query-task'

export interface QueryTaskListProps {
  widgetId: string
  queryItems: ImmutableArray<QueryItemType>
  className?: string
}

const blockInfo = () => {
  return {
    name: TreeItemActionType.RenderOverrideItem,
    children: [
      {
        name: TreeItemActionType.RenderOverrideItemBody,
        children: [
          {
            name: TreeItemActionType.RenderOverrideItemMainLine
          }
        ]
      }
    ]
  }
}

// show task label and an arrow to the task content
export function QueryTaskList (props: QueryTaskListProps) {
  const { queryItems, widgetId, className = '' } = props
  const [stage, setStage] = React.useState(0)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleTaskSelected = (index) => {
    setStage(1)
    setSelectedIndex(index)
  }

  const handleNavBack = () => {
    setStage(0)
    setSelectedIndex(-1)
  }

  return (
    <div className={`runtime-query__query-list h-100 ${className}`} css={css`.jimu-tree-item__body {width: 100%;}`}>
      {stage === 0 && queryItems.length > 1 && (
        <List
          itemsJson={Array.from(queryItems).map((queryItem, index) => ({
            itemStateDetailContent: queryItem,
            itemKey: `${index}`
          }))}
          isItemFocused={() => false}
          overrideItemBlockInfo={blockInfo}
          renderOverrideItemMainLine={(actionData, refComponent) => {
            const { itemJsons } = refComponent.props
            const currentItemJson = itemJsons[0]
            const queryItem = currentItemJson.itemStateDetailContent
            const index = +currentItemJson.itemKey
            return (
              <QueryTaskListItem
                key={queryItem.configId}
                index={index}
                queryItem={queryItem}
                onClickItem={handleTaskSelected}
              />
            )
          }}
        />
      )}

      {(stage === 1 || queryItems.length === 1) && (
        <QueryTask
          widgetId={widgetId}
          index={queryItems.length > 1 ? selectedIndex : 0}
          total={queryItems.length}
          queryItem={queryItems[queryItems.length > 1 ? selectedIndex : 0]}
          onNavBack={handleNavBack}
        />
      )}
    </div>
  )
}
