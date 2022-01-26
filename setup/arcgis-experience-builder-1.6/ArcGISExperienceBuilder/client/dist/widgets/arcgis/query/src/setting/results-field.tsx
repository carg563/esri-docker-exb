/** @jsx jsx */
import { React, jsx, Immutable, DataSourceManager, IMFieldSchema, UseDataSource, ThemeVariables } from 'jimu-core'
import {
  FieldSelector,
  dataComponentsUtils
} from 'jimu-ui/advanced/data-source-selector'
import { withTheme } from 'jimu-theme'
import { List, TreeItemActionType, TreeItemsType, TreeItemType } from 'jimu-ui/basic/list-tree'
import { SettingRow } from 'jimu-ui/advanced/setting-components'

interface Props {
  useDataSource: UseDataSource
  label: string
  selectedFields: string[]
  theme?: ThemeVariables
  onFieldsChanged: (fields: string[]) => void
}

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
                name: TreeItemActionType.RenderOverrideItemIcon,
                autoCollapsed: true
              }, {
                name: TreeItemActionType.RenderOverrideItemTitle
              }, {
                name: TreeItemActionType.RenderOverrideItemCommands
              }]
            }]
          }]
        }]
      }]
    }
  }
}

function _ResultsFieldSetting (props: Props) {
  const { useDataSource, selectedFields = [], label, theme, onFieldsChanged } = props

  const useDataSources = React.useMemo(() => Immutable([useDataSource]), [useDataSource])
  const fieldsSchema = React.useMemo(() => {
    const selectedDs = DataSourceManager.getInstance().getDataSource(useDataSource?.dataSourceId)
    if (!selectedDs) {
      return []
    }
    const allFieldsSchema = selectedDs?.getSchema()
    const allFields = allFieldsSchema?.fields ? Object.values(allFieldsSchema.fields) : []
    return selectedFields.map(name => {
      return allFields.find(item => item.jimuName === name)
    })
  }, [useDataSource, selectedFields])

  const handleFieldsChange = (allSelectedFields: IMFieldSchema[]) => {
    if (allSelectedFields) {
      const fieldNames = allSelectedFields.filter(item => item).map(item => item.jimuName)
      // 1. remove the field that is not in allSelectedFields
      const filterSelected = selectedFields.filter(item => fieldNames.includes(item))
      // 2. remove the field that is already in selectedFields
      const extraFields = fieldNames.filter(item => !selectedFields.includes(item))

      onFieldsChanged(filterSelected.concat(extraFields))
    }
  }

  return (
    <React.Fragment>
      <SettingRow flow='wrap' label={label}>
        <FieldSelector
          useDataSources={useDataSources}
          onChange={handleFieldsChange}
          selectedFields={Immutable(selectedFields)}
          isMultiple
          isSearchInputHidden={false}
          isDataSourceDropDownHidden
          useDropdown
          useMultiDropdownBottomTools
        />
      </SettingRow>
      {selectedFields.length > 1 && (
        <SettingRow>
          <List
            className='selected-fields-list w-100'
            itemsJson={Array.from(fieldsSchema).map((item, index) => ({
              itemStateDetailContent: item,
              itemKey: `${index}`,
              itemStateIcon: dataComponentsUtils.getIconFromFieldType(item.type, theme),
              itemStateTitle: item.alias || item.jimuName || item.name,
              itemStateCommands: []
            }))}
            dndEnabled
            onUpdateItem={(actionData, refComponent) => {
              const { itemJsons } = refComponent.props
              const [, parentItemJson] = itemJsons as [TreeItemType, TreeItemsType]
              const newTableFields: IMFieldSchema[] = parentItemJson.map(item => {
                return item.itemStateDetailContent
              })
              onFieldsChanged(newTableFields.map(item => item.jimuName))
            }}
            isItemFocused={() => false}
            {...advancedActionMap}
          />
        </SettingRow>
      )}
    </React.Fragment>
  )
}

export const ResultsFieldSetting = withTheme(_ResultsFieldSetting)
