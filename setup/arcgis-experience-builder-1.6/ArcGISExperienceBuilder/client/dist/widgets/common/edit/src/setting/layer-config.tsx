/** @jsx jsx */
import {
  React,
  jsx,
  ThemeVariables,
  Immutable,
  IntlShape,
  IMUseDataSource,
  UseDataSource,
  SerializedStyles,
  polished,
  css,
  QueriableDataSource,
  IMFieldSchema,
  DataSourceManager,
  IMDataSourceJson,
  FeatureLayerDataSource,
  DataSourceComponent,
  SupportedLayerServiceTypes,
  utils
} from 'jimu-core'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import {
  TextInput,
  defaultMessages as jimuUIMessages,
  Checkbox,
  PanelHeader,
  Button,
  Switch,
  TextArea,
  Label,
  Popper
} from 'jimu-ui'
import {
  DataSourceSelector,
  AllDataSourceTypes,
  FieldSelector,
  dataComponentsUtils
} from 'jimu-ui/advanced/data-source-selector'
import { EditModeType, IMConfig, LayersConfig, TreeFields } from '../config'
import defaultMessages from './translations/default'
import { Tree, TreeCollapseStyle, TreeItemActionType, TreeItemType, TreeType } from 'jimu-ui/basic/list-tree'
import { AddFolderOutlined } from 'jimu-icons/outlined/editor/add-folder'
import { TrashOutlined } from 'jimu-icons/outlined/editor/trash'
import { InfoOutlined } from 'jimu-icons/outlined/suggested/info'

interface Props {
  useDataSource: IMUseDataSource
  intl: IntlShape
  theme: ThemeVariables
  editorConfig: IMConfig
  onClose?: () => void
  optionChange: (prop: string, value: any) => void
  multiOptionsChange: (options: any) => void
  dataSourceChange: (useDataSources: UseDataSource[]) => void
  filterDs: (dsJson: IMDataSourceJson) => boolean
}

interface State {
  dataSource: QueriableDataSource
  rootItemJson: TreeItemType
  itemLabel: string
  hasUncheck: boolean
  isOpenDetailPopper: boolean
  popperRef: HTMLElement
  curEditField: any
  itemDesc: string
}

export default class LayerConfig extends React.PureComponent<
Props & LayersConfig,
State
> {
  supportedDsTypes = Immutable([AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.SceneLayer])
  colRef: React.RefObject<HTMLButtonElement>
  groupId: number

  constructor (props) {
    super(props)

    this.state = {
      dataSource: undefined,
      rootItemJson: this.constructTreeItem(props.groupedFields),
      itemLabel: props.name || '',
      hasUncheck: this.getUncheckState(props.groupedFields),
      isOpenDetailPopper: false,
      popperRef: undefined,
      curEditField: undefined,
      itemDesc: ''
    }
    this.colRef = React.createRef()
    this.groupId = this.getGroupMaxId(props.groupedFields)
  }

  componentDidUpdate (preProps: Props & LayersConfig, preState: State) {
    if (this.props.name !== preProps.name) {
      this.setState({ itemLabel: this.props.name || '' })
    }
    if (this.props.id !== preProps.id) {
      this.setState({ rootItemJson: this.constructTreeItem(this.props.groupedFields) })
    }
  }

  nameChange = event => {
    const value = event.target.value
    this.setState({ itemLabel: value })
  }

  nameAccept = (value) => {
    value = value?.trim()
    value = value === '' ? this.props.name : value
    if (value !== this.state.itemLabel) {
      this.setState({ itemLabel: value })
    }
    this.props.optionChange('name', value)
  }

  getUncheckState = (groupedFields: TreeFields[] = []) => {
    let hasUncheck = false
    groupedFields.forEach(item => {
      if (!item.editAuthority && item.editable) hasUncheck = true
    })
    return hasUncheck
  }

  getGroupMaxId (arr: TreeFields[] = []): number {
    const numbers = []
    arr.forEach(item => {
      if (item?.groupKey) {
        numbers.push(item?.groupKey)
      }
    })
    return numbers.length > 0 ? Math.max.apply(null, numbers) : 0
  }

  handleSwitchChange = (evt, name) => {
    const target = evt.currentTarget
    if (!target) return
    this.props.optionChange(name, target.checked)
  }

  findEditingIndex = (targetId: string) => {
    const { groupedFields: orgGroupedFields } = this.props
    let editingIndex
    orgGroupedFields.forEach((field, index) => {
      if (field.jimuName === targetId) {
        editingIndex = [index]
      } else if (field?.children) {
        const subIndex = field.children.findIndex(item => item.jimuName === targetId)
        if (subIndex > -1) {
          editingIndex = [index, subIndex]
        }
      }
    })
    return editingIndex
  }

  handleTreeBoxChange = evt => {
    const target = evt.currentTarget
    if (!target) return
    const { groupedFields: orgGroupedFields } = this.props
    const editingIndex = this.findEditingIndex(target.id)
    // edit editAuthority
    if (editingIndex.length === 2) {
      const [index, subIndex] = editingIndex
      orgGroupedFields[index][subIndex].editAuthority = target.checked
    } else if (editingIndex.length === 1) {
      const [index] = editingIndex
      orgGroupedFields[index].editAuthority = target.checked
    }
    this.props.optionChange('groupedFields', orgGroupedFields)
    const newItemJson = this.constructTreeItem(orgGroupedFields)
    this.setState({ rootItemJson: newItemJson })
  }

  handleTreeDescChange = (id) => {
    const { itemDesc: value } = this.state
    const { groupedFields: orgGroupedFields } = this.props
    const editingIndex = this.findEditingIndex(id)
    // edit description
    if (editingIndex.length === 2) {
      const [index, subIndex] = editingIndex
      orgGroupedFields[index].children[subIndex].subDescription = value
    } else if (editingIndex.length === 1) {
      const [index] = editingIndex
      orgGroupedFields[index].subDescription = value
    }
    this.props.optionChange('groupedFields', orgGroupedFields)
    const newItemJson = this.constructTreeItem(orgGroupedFields)
    this.setState({ rootItemJson: newItemJson, isOpenDetailPopper: false })
  }

  formatMessage = (id: string, values?: { [key: string]: any }) => {
    const messages = Object.assign({}, defaultMessages, jimuUIMessages)
    return this.props.intl.formatMessage(
      { id: id, defaultMessage: messages[id] },
      values
    )
  }

  minusArray = (array1, array2, key?: string) => {
    const keyField = key || 'jimuName'
    const lengthFlag = array1.length > array2.length
    const arr1 = lengthFlag ? array1 : array2
    const arr2 = lengthFlag ? array2 : array1
    return arr1.filter(item => {
      const hasField = arr2.some(ele => {
        return ele?.[keyField] === item?.[keyField]
      })
      return !hasField
    })
  }

  onFieldChange = (allSelectedFields: IMFieldSchema[]) => {
    if (!allSelectedFields) return
    const { dataSource } = this.state
    const { showFields: orgShowFields, groupedFields: orgGroupedFields } = this.props
    const filteredFields = allSelectedFields.filter(item => item)
    if (allSelectedFields.length === 0) { // uncheck all
      orgGroupedFields.length = 0
    } else {
      // find the changed field
      const changed = this.minusArray(allSelectedFields, orgShowFields)
      const changedField = changed?.[0]
      // find the changed index in orgGroupedFields
      let editingIndex
      orgGroupedFields.forEach((field, index) => {
        if (field?.children) {
          const subIndex = field.children.findIndex(item => item.jimuName === changedField?.jimuName)
          if (subIndex > -1) {
            editingIndex = [index, subIndex]
          }
        } else {
          if (field.jimuName === changedField?.jimuName) {
            editingIndex = [index]
          }
        }
      })
      if (editingIndex) { // uncheck
        if (editingIndex.length === 2) {
          const [index, subIndex] = editingIndex
          orgGroupedFields[index].children.splice(subIndex, 1)
        } else if (editingIndex.length === 1) {
          const [index] = editingIndex
          orgGroupedFields.splice(index, 1)
        }
      } else { // check
        const layerDefinition = (dataSource as FeatureLayerDataSource)?.getLayerDefinition()
        const fieldsConfig = layerDefinition?.fields || []
        const orgField = fieldsConfig.find(field => field.name === changedField.jimuName)
        const defaultAuthority = orgField?.editable
        orgGroupedFields.push({ ...changedField, editAuthority: defaultAuthority, subDescription: changedField?.description || '', editable: defaultAuthority })
      }
    }
    this.props.multiOptionsChange({ showFields: filteredFields, groupedFields: orgGroupedFields })
    const newItemJson = this.constructTreeItem(orgGroupedFields)
    this.setState({ rootItemJson: newItemJson })
  }

  onDataSourceCreated = (dataSource: QueriableDataSource): void => {
    this.setState({ dataSource })
  }

  getStyle (theme: ThemeVariables): SerializedStyles {
    return css`
      .layer-config-panel {
        .panel-inner {
          .title {
            max-width: 70%;
          }
        }
        .setting-container {
          height: calc(100% - ${polished.rem(58)});
          overflow: auto;
          .fields-list-header {
            background: ${theme.colors.palette.light[200]};
            border-bottom: 1px solid ${theme.colors.palette.light[600]};
            height: 34px;
            .jimu-checkbox {
              margin-top: 2px;
            }
          }
          .selected-fields-con{
            margin-top: 0;
            .selected-fields-list {
              flex: 1;
              max-height: 300px;
              overflow-y: auto;
            }
            .jimu-tree-item{
              background: ${theme.colors.palette.light[200]};
              border-bottom: 1px solid ${theme.colors.palette.light[300]};
              .jimu-tree-item__content{
                div:first-of-type{
                  padding-left: 2px;
                }
                .jimu-tree-item__body{
                  background: ${theme.colors.palette.light[200]};
                  .jimu-tree-item__title{
                    .jimu-input{
                      width: 125px;
                    }
                  }
                }
              }
            }
          }
          .table-options {
            .table-options-item {
              display: flex;
              justify-content: space-between;
              margin-bottom: 8px;
            }
            .select-option {
              margin-bottom: 8px;
            }
          }
          .ds-container {
            position: absolute;
            display: none;
          }
          .component-field-selector {
            .search-input {
              width: 100%;
            }
            .field-list {
              max-height: 300px;
            }
          }
          .config-word-break {
            word-wrap: break-word;
          }
          .capability-item{
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
          }
        }
      }
    `
  }

  getFieldsFromDatasource = () => {
    const { useDataSource } = this.props
    const selectedDs = DataSourceManager.getInstance().getDataSource(useDataSource?.dataSourceId)
    const allFieldsSchema = selectedDs?.getSchema()
    const allFields = allFieldsSchema?.fields ? Object.values(allFieldsSchema?.fields) : []
    return allFields
  }

  checkFieldsExist = (allFields, tableField) => {
    let exist = false
    for (const item of allFields) {
      if (item.jimuName === tableField.jimuName) {
        exist = true
        break
      }
    }
    return exist
  }

  getSelectorFields = (showFields: IMFieldSchema[]) => {
    const selectorFields: string[] = []
    if (showFields && showFields.length > 0) {
      showFields.forEach(item => {
        selectorFields.push(item.jimuName)
      })
    }
    return selectorFields
  }

  handleTreeBoxAll = (hasUncheck) => {
    const { groupedFields } = this.props
    const newGroupedFields = groupedFields.map(item => {
      if (item?.children) {
        return {
          ...item,
          editAuthority: hasUncheck,
          children: item.children.map(child => {
            return {
              ...child,
              ...(child.editable ? { editAuthority: hasUncheck } : {})
            }
          })
        }
      }
      return {
        ...item,
        ...(item.editable ? { editAuthority: hasUncheck } : {})
      }
    })
    this.props.optionChange('groupedFields', newGroupedFields)
    const newItemJson = this.constructTreeItem(newGroupedFields)
    this.setState({ rootItemJson: newItemJson, hasUncheck: !hasUncheck })
  }

  addGroupForFields = () => {
    this.groupId++
    const newGroupField = {
      jimuName: `${this.formatMessage('group')}-${this.groupId}`,
      name: `${this.formatMessage('group')}-${this.groupId}`,
      alias: `${this.formatMessage('group')}-${this.groupId}`,
      subDescription: '',
      editAuthority: false,
      editable: true,
      children: [],
      groupKey: this.groupId
    } as TreeFields
    const { groupedFields: orgGroupedFields } = this.props
    orgGroupedFields.unshift(newGroupField)
    this.props.optionChange('groupedFields', orgGroupedFields)
    const newItemJson = this.constructTreeItem(orgGroupedFields)
    this.setState({ rootItemJson: newItemJson })
  }

  removeGroup = (jimuName: string) => {
    const { groupedFields: orgGroupedFields } = this.props
    const activeIndex = orgGroupedFields.findIndex(item => item.jimuName === jimuName)
    orgGroupedFields.splice(activeIndex, 1, ...orgGroupedFields[activeIndex]?.children)
    this.props.optionChange('groupedFields', orgGroupedFields)
    const newItemJson = this.constructTreeItem(orgGroupedFields)
    this.setState({ rootItemJson: newItemJson })
  }

  constructTreeItem = (groupedFields: TreeFields[] = []) => {
    const { theme } = this.props
    const allFields = this.getFieldsFromDatasource()
    const showFieldsToTreeItem = (groupedFields: TreeFields[]) => {
      return Array.from(groupedFields).map((item, index) => ({
        itemKey: `${utils.getUUID()}_${index}`,
        itemStateChecked: item?.editAuthority,
        itemStateTitle: item.alias || item.jimuName || item.name,
        itemStateIcon: dataComponentsUtils.getIconFromFieldType(item.type, theme),
        itemStateDetailContent: item,
        itemStateDisabled: item?.groupKey ? false : !this.checkFieldsExist(allFields, item),
        itemStateCommands: [],
        isCheckboxDisabled: !item.editable,
        ...(item.children ? { itemChildren: showFieldsToTreeItem(item.children) } : {})
      }))
    }
    const treeItem = showFieldsToTreeItem(groupedFields)
    const treeItemJson = {
      itemKey: 'root item for tree data entry',
      itemStateTitle: 'root item for tree data entry',
      itemChildren: treeItem
    }
    return treeItemJson
  }

  setRootItemJson = (nextRootItemJson) => {
    this.setState({ rootItemJson: nextRootItemJson })
  }

  showDetailPopper = (ref, curField) => {
    const { isOpenDetailPopper } = this.state
    this.setState({
      isOpenDetailPopper: !isOpenDetailPopper,
      popperRef: ref,
      curEditField: curField,
      itemDesc: curField?.subDescription || curField?.description
    })
  }

  getCurrentEditField = (jimuName) => {
    const { groupedFields } = this.props
    const curIndex = this.findEditingIndex(jimuName)
    let curField: any = {
      jimuName: '',
      groupKey: '',
      editAuthority: false,
      children: [],
      subDescription: '',
      description: '',
      name: ''
    }
    if (curIndex?.length === 2) {
      const [index, subIndex] = curIndex
      curField = groupedFields[index].children[subIndex]
    } else if (curIndex?.length === 1) {
      const [index] = curIndex
      curField = groupedFields[index]
    }
    return curField
  }

  onDescChange = event => {
    const value = event.target.value
    this.setState({ itemDesc: value })
  }

  render () {
    const {
      onClose,
      optionChange,
      dataSourceChange,
      filterDs,
      id,
      useDataSource,
      theme,
      showFields,
      editorConfig,
      addRecords,
      deleteRecords,
      updateGeometries
    } = this.props
    const { rootItemJson, itemLabel, dataSource, hasUncheck, isOpenDetailPopper, popperRef, curEditField } = this.state
    const geometryMode = editorConfig.editMode === EditModeType.Geometry
    const selectorFields = this.getSelectorFields(showFields)
    // capabilities
    const currentDataSource = !dataSource ? DataSourceManager.getInstance().getDataSource(id) : dataSource
    const layerDefinition = (currentDataSource as FeatureLayerDataSource)?.getLayerDefinition()
    const isTable = layerDefinition?.type === SupportedLayerServiceTypes.Table
    const getDsCap = (capabilities: string, capType: string) => {
      if (capabilities) {
        return Array.isArray(capabilities)
          ? capabilities?.join().toLowerCase().includes(capType)
          : capabilities?.toLowerCase().includes(capType)
      } else {
        return false
      }
    }
    const capabilities = layerDefinition?.capabilities
    const create = getDsCap(capabilities, 'create')
    const update = getDsCap(capabilities, 'update')
    const deletable = getDsCap(capabilities, 'delete')
    const advancedActionMap = {
      overrideItemBlockInfo: ({ itemBlockInfo }, refComponent) => {
        return {
          name: TreeItemActionType.RenderOverrideItem,
          children: [{
            name: TreeItemActionType.RenderOverrideItemDroppableContainer,
            children: [{
              name: TreeItemActionType.RenderOverrideItemContent,
              children: [{
                name: TreeItemActionType.RenderOverrideItemBody,
                children: [{
                  name: TreeItemActionType.RenderOverrideItemMainLine,
                  children: [{
                    name: TreeItemActionType.RenderOverrideItemDraggableContainer,
                    children: [{
                      name: TreeItemActionType.RenderOverrideItemDragHandle
                    }, {
                      name: TreeItemActionType.RenderOverrideItemChildrenToggle
                    }, {
                      name: TreeItemActionType.RenderOverrideItemIcon
                    }, {
                      name: TreeItemActionType.RenderOverrideItemTitle
                    }, {
                      name: TreeItemActionType.RenderOverrideItemCommands
                    }, {
                      name: TreeItemActionType.RenderOverrideItemDetailToggle
                    }]
                  }]
                }, {
                  name: TreeItemActionType.RenderOverrideItemDetailLine
                }]
              }]
            }]
          }, {
            name: TreeItemActionType.RenderOverrideItemSubitems
          }]
        }
      }
    }

    return (
      <div className='w-100 h-100' css={this.getStyle(theme)}>
        <div className='w-100 h-100 layer-config-panel'>
          <div className="w-100 d-flex px-3 py-0">
            <PanelHeader
              level={1}
              className='py-3 panel-inner'
              showClose={!!onClose}
              onClose={onClose}
              title={this.formatMessage('layerConfig')}>
            </PanelHeader>
          </div>
          <div className='setting-container'>
            <SettingSection title={this.formatMessage('data')} className="pt-0">
              <SettingRow>
                <DataSourceSelector
                  types={this.supportedDsTypes}
                  hideDataView
                  disableRemove={() => true}
                  useDataSources={
                    useDataSource ? Immutable([useDataSource]) : Immutable([])
                  }
                  mustUseDataSource
                  onChange={dataSourceChange}
                  closeDataSourceListOnChange
                  hideDs={filterDs}
                />
              </SettingRow>
            </SettingSection>

            {useDataSource &&
              <React.Fragment>
                <SettingSection title={this.formatMessage('label')}>
                  <SettingRow>
                    <TextInput
                      type='text'
                      className='w-100'
                      value={itemLabel}
                      onChange={this.nameChange}
                      onAcceptValue={this.nameAccept}
                      aria-label={this.formatMessage('label')}
                    />
                  </SettingRow>
                </SettingSection>

                <SettingSection title={this.formatMessage('capability')}>
                  {((!geometryMode && isTable) || geometryMode) &&
                    <div className='capability-item' key={'addRecords'}>
                      <span className='text-break' style={{ width: '80%' }}>{this.formatMessage('addRecords')}</span>
                      <Switch
                        className='can-x-switch'
                        checked={addRecords}
                        onChange={evt => this.handleSwitchChange(evt, 'addRecords')}
                        disabled={!create}
                      />
                    </div>
                  }
                  <div className='capability-item' key={'deleteRecords'}>
                    <span className='text-break' style={{ width: '80%' }}>{this.formatMessage('deleteRecords')}</span>
                    <Switch
                      className='can-x-switch'
                      checked={deleteRecords}
                      onChange={evt => this.handleSwitchChange(evt, 'deleteRecords')}
                      disabled={!deletable}
                    />
                  </div>
                  {geometryMode &&
                    <div className='capability-item' key={'updateGeometries'}>
                      <span className='text-break' style={{ width: '80%' }}>{this.formatMessage('updateGeometries')}</span>
                      <Switch
                        className='can-x-switch'
                        checked={updateGeometries}
                        onChange={evt => this.handleSwitchChange(evt, 'updateGeometries')}
                        disabled={!update}
                      />
                    </div>
                  }
                </SettingSection>

                <SettingSection title={this.formatMessage('configFields')}>
                  <SettingRow flow='wrap' label={this.formatMessage('configFieldsTip')}>
                    <FieldSelector
                      useDataSources={
                        useDataSource ? Immutable([useDataSource]) : Immutable([])
                      }
                      onChange={this.onFieldChange}
                      selectedFields={Immutable(selectorFields)}
                      isMultiple
                      isSearchInputHidden={false}
                      isDataSourceDropDownHidden
                      useDropdown
                      useMultiDropdownBottomTools
                    />
                  </SettingRow>
                  <SettingRow className='fields-list-header'>
                    <div className='d-flex w-100 ml-4 fields-list-check'>
                      <Checkbox
                        id='editAll'
                        data-field='editAll'
                        onClick={() => this.handleTreeBoxAll(hasUncheck)}
                        checked={!hasUncheck}
                        title={hasUncheck
                          ? `${this.formatMessage('editable')} (${this.formatMessage('checkAll')})`
                          : `${this.formatMessage('editable')} (${this.formatMessage('uncheckAll')})`}
                      />
                      <Label
                        for='editAll'
                        style={{ cursor: 'pointer' }}
                        className='ml-2'
                        title={this.formatMessage('field')}
                      >
                        {this.formatMessage('field')}
                      </Label>
                    </div>
                    <Button
                      icon
                      size='sm'
                      type='tertiary'
                      onClick={this.addGroupForFields}
                      title={this.formatMessage('addGroup')}
                      aria-label={this.formatMessage('addGroup')}
                    >
                      <AddFolderOutlined />
                    </Button>
                  </SettingRow>

                  <SettingRow className='selected-fields-con'>
                    <Tree
                      className='selected-fields-list'
                      rootItemJson={rootItemJson}
                      treeType={TreeType.Intact}
                      dndEnabled
                      showCheckbox
                      collapseStyle={TreeCollapseStyle.Arrow}
                      renderOverrideItemCommands={(actionData, refComponent) => {
                        const { itemJsons } = refComponent.props
                        const [currentItemJson] = itemJsons
                        const { jimuName: jimuNameKey } = currentItemJson?.itemStateDetailContent
                        const curField = this.getCurrentEditField(jimuNameKey)
                        const { jimuName, groupKey } = curField
                        return groupKey
                          ? <Button
                              icon
                              size='sm'
                              type='tertiary'
                              onClick={() => this.removeGroup(jimuName)}
                              title={this.formatMessage('remove')}
                              aria-label={this.formatMessage('remove')}
                            >
                            <TrashOutlined />
                          </Button>
                          : ''
                      }}
                      renderOverrideItemDetailToggle={(actionData, refComponent) => {
                        const { itemJsons, itemJsons: [{ itemStateDetailVisible, itemStateDetailContent, itemStateDisabled }] } = refComponent.props
                        const [currentItemJson] = itemJsons
                        const { jimuName } = currentItemJson?.itemStateDetailContent
                        const curField = this.getCurrentEditField(jimuName)
                        const getStyle = () => {
                          return css`
                            &.jimu-tree-item__detail-toggle {
                              display: flex;
                              align-items: center;
                              cursor: pointer;

                              .icon-btn-sizer {
                                margin: 0;
                                min-width: 0.5rem;
                                min-height: 0.5rem;
                              }
                            }
                          `
                        }
                        return (
                          itemStateDetailContent
                            ? <Button
                                icon
                                type='tertiary'
                                title={this.formatMessage('description')}
                                aria-label={this.formatMessage('description')}
                                disabled={!!itemStateDisabled}
                                aria-expanded={!!itemStateDetailVisible}
                                className='jimu-tree-item__detail-toggle'
                                onClick={(evt) => {
                                  evt.stopPropagation()
                                  this.showDetailPopper(refComponent.dragRef, curField)
                                }}
                                css={getStyle}
                              >
                                <InfoOutlined autoFlip={!itemStateDetailVisible} />
                              </Button>
                            : null
                        )
                      }}
                      isItemDroppable={(actionData, refComponent) => {
                        const { targetItemJsons } = actionData
                        return !!targetItemJsons[0]?.itemChildren
                      }}
                      isFolder={(actionData, refComponent) => {
                        const { targetItemJsons } = actionData
                        const [currentItemJson] = targetItemJsons
                        const { groupKey } = currentItemJson?.itemStateDetailContent
                        return !!groupKey
                      }}
                      onUpdateItem={(actionData, refComponent) => {
                        const { itemJsons, updateType } = actionData
                        const parentItemJson = itemJsons[itemJsons.length - 1]
                        const [currentItemJson] = itemJsons
                        const { jimuName } = currentItemJson?.itemStateDetailContent
                        const curField = this.getCurrentEditField(jimuName)
                        const { groupKey } = curField
                        if (!groupKey && updateType === TreeItemActionType.HandleStartEditing) return
                        const newGroupedFields = parentItemJson.itemChildren?.map(item => {
                          if (item?.itemChildren) {
                            return {
                              ...item.itemStateDetailContent,
                              children: item.itemChildren.map(child => {
                                return {
                                  ...child.itemStateDetailContent,
                                  editAuthority: child.itemStateChecked
                                }
                              }),
                              name: item.itemStateTitle,
                              alias: item.itemStateTitle,
                              editAuthority: !item.itemChildren?.some(item => item.itemStateChecked === false)
                            }
                          }
                          return {
                            ...item.itemStateDetailContent,
                            editAuthority: item.itemStateChecked
                          }
                        })
                        optionChange('groupedFields', newGroupedFields)
                        const hasUncheck = this.getUncheckState(newGroupedFields)
                        this.setState({ rootItemJson: parentItemJson, hasUncheck })
                      }}
                      isItemFocused={() => false}
                      {...advancedActionMap}
                    />
                    <Popper
                      placement='bottom-start'
                      disableResize
                      reference={popperRef}
                      offset={[-27, 3]}
                      open={isOpenDetailPopper}
                      showArrow={false}
                      toggle={e => {
                        this.setState({ isOpenDetailPopper: !isOpenDetailPopper })
                      }}
                    >
                      <div style={{ width: 228, height: 132 }} className='p-3'>
                        <TextArea
                          id={curEditField?.jimuName}
                          className='w-100'
                          style={{ height: 60 }}
                          placeholder={this.formatMessage('editFieldDescription')}
                          value={curEditField?.subDescription || curEditField?.description}
                          onChange={this.onDescChange}
                        />
                        <div className='mt-3' style={{ float: 'right' }}>
                          <Button size='sm' type='primary' onClick={() => this.handleTreeDescChange(curEditField?.jimuName)}>
                            {this.formatMessage('commonModalOk')}
                          </Button>
                          <Button size='sm' className='ml-1' onClick={() => {
                            this.setState({ isOpenDetailPopper: false })
                          }}>
                            {this.formatMessage('commonModalCancel')}
                          </Button>
                        </div>
                      </div>
                    </Popper>
                  </SettingRow>
                </SettingSection>
                <div className='ds-container'>
                  <DataSourceComponent
                    useDataSource={Immutable(useDataSource)}
                    onDataSourceCreated={this.onDataSourceCreated}
                  />
                </div>
              </React.Fragment>
            }
          </div>
        </div>
      </div>
    )
  }
}
