System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/data-source-selector","jimu-core/react","jimu-ui/basic/list-tree","jimu-for-builder"],(function(e,t){var i={},a={},s={},l={},o={},n={},r={};return{setters:[function(e){i.CONSTANTS=e.CONSTANTS,i.DataSourceComponent=e.DataSourceComponent,i.DataSourceManager=e.DataSourceManager,i.Immutable=e.Immutable,i.JimuFieldType=e.JimuFieldType,i.React=e.React,i.classNames=e.classNames,i.css=e.css,i.jsx=e.jsx,i.polished=e.polished,i.urlUtils=e.urlUtils},function(e){a.Alert=e.Alert,a.Button=e.Button,a.Checkbox=e.Checkbox,a.Icon=e.Icon,a.Label=e.Label,a.MultiSelect=e.MultiSelect,a.PanelHeader=e.PanelHeader,a.Select=e.Select,a.Switch=e.Switch,a.TextInput=e.TextInput,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages},function(e){s.SettingRow=e.SettingRow,s.SettingSection=e.SettingSection,s.SidePopper=e.SidePopper},function(e){l.AllDataSourceTypes=e.AllDataSourceTypes,l.DataSourceSelector=e.DataSourceSelector,l.FieldSelector=e.FieldSelector,l.dataComponentsUtils=e.dataComponentsUtils},function(e){o.Fragment=e.Fragment},function(e){n.List=e.List,n.TreeItemActionType=e.TreeItemActionType,n.TreeType=e.TreeType},function(e){r.builderAppSync=e.builderAppSync}],execute:function(){e((()=>{var e={748:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 10-6.586 4.533l-.077-1.008A5.5 5.5 0 1112 6.5zm-9 0a3.501 3.501 0 002.88 3.445L5.8 8.901a2.501 2.501 0 113.194-2.224l.949.456A3.5 3.5 0 103 6.5zM15.5 11l-5 1-3 4-1-9.5 9 4.5zm-5.57.094l-1.702 2.269-.542-5.152 4.76 2.38-2.517.503z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.745 8l6.1 6.1a.527.527 0 11-.745.746L8 8.746l-6.1 6.1a.527.527 0 11-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 01.746-.746l6.1 6.1 6.1-6.1a.527.527 0 01.746.746L8.746 8z" fill="#000"></path></svg>'},28676:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjcwIiB2aWV3Qm94PSIwIDAgMTA5IDcwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjkzIiBoZWlnaHQ9IjU0IiByeD0iMiIgZmlsbD0iIzI4MjgyOCIvPg0KPHJlY3QgeD0iMzIiIHk9IjI0IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzUyNTI1MiIvPg0KPHJlY3QgeD0iMzIiIHk9IjMyIiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMzIiIHk9IjM5IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMzIiIHk9IjQ2IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMzIiIHk9IjUzIiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjI0IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzUyNTI1MiIvPg0KPHJlY3QgeD0iMTIiIHk9IjMyIiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjM5IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjQ2IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjUzIiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjEyIiB3aWR0aD0iMzgiIGhlaWdodD0iOCIgZmlsbD0iIzZBNkE2QSIvPg0KPHJlY3QgeD0iMTQiIHk9IjE0IiB3aWR0aD0iMjgiIGhlaWdodD0iNCIgZmlsbD0iIzE4MTgxOCIvPg0KPHBhdGggZD0iTTQ0IDE1SDQ4TDQ2IDE3TDQ0IDE1WiIgZmlsbD0iIzE4MTgxOCIvPg0KPHJlY3QgeD0iNTIiIHk9IjI0IiB3aWR0aD0iMTciIGhlaWdodD0iNSIgZmlsbD0iIzUyNTI1MiIvPg0KPHJlY3QgeD0iNTIiIHk9IjMyIiB3aWR0aD0iMTciIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNTIiIHk9IjM5IiB3aWR0aD0iMTciIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNTIiIHk9IjQ2IiB3aWR0aD0iMTciIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNTIiIHk9IjUzIiB3aWR0aD0iMTciIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNzMiIHk9IjI0IiB3aWR0aD0iMjQiIGhlaWdodD0iNSIgZmlsbD0iIzUyNTI1MiIvPg0KPHJlY3QgeD0iNzMiIHk9IjMyIiB3aWR0aD0iMjQiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNzMiIHk9IjM5IiB3aWR0aD0iMjQiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNzMiIHk9IjQ2IiB3aWR0aD0iMjQiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNzMiIHk9IjUzIiB3aWR0aD0iMjQiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPC9zdmc+DQo="},32253:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjcwIiB2aWV3Qm94PSIwIDAgMTA5IDcwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjkzIiBoZWlnaHQ9IjU0IiByeD0iMiIgZmlsbD0iIzI4MjgyOCIvPg0KPHJlY3QgeD0iMzIiIHk9IjI0IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzUyNTI1MiIvPg0KPHJlY3QgeD0iMzIiIHk9IjMyIiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMzIiIHk9IjM5IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMzIiIHk9IjQ2IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMzIiIHk9IjUzIiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjI0IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzUyNTI1MiIvPg0KPHJlY3QgeD0iMTIiIHk9IjMyIiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjM5IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjQ2IiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjUzIiB3aWR0aD0iMTYiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjE5IiB3aWR0aD0iODUiIGhlaWdodD0iMSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iMTIiIHk9IjE5IiB3aWR0aD0iMTYiIGhlaWdodD0iMSIgZmlsbD0iIzZBNkE2QSIvPg0KPHJlY3QgeD0iMTIiIHk9IjEzIiB3aWR0aD0iMTYiIGhlaWdodD0iNiIgZmlsbD0iIzZBNkE2QSIvPg0KPHJlY3QgeD0iMzAiIHk9IjEzIiB3aWR0aD0iMTYiIGhlaWdodD0iNiIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNDgiIHk9IjEzIiB3aWR0aD0iMTYiIGhlaWdodD0iNiIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNTIiIHk9IjI0IiB3aWR0aD0iMTciIGhlaWdodD0iNSIgZmlsbD0iIzUyNTI1MiIvPg0KPHJlY3QgeD0iNTIiIHk9IjMyIiB3aWR0aD0iMTciIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNTIiIHk9IjM5IiB3aWR0aD0iMTciIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNTIiIHk9IjQ2IiB3aWR0aD0iMTciIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNTIiIHk9IjUzIiB3aWR0aD0iMTciIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNzMiIHk9IjI0IiB3aWR0aD0iMjQiIGhlaWdodD0iNSIgZmlsbD0iIzUyNTI1MiIvPg0KPHJlY3QgeD0iNzMiIHk9IjMyIiB3aWR0aD0iMjQiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNzMiIHk9IjM5IiB3aWR0aD0iMjQiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNzMiIHk9IjQ2IiB3aWR0aD0iMjQiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPHJlY3QgeD0iNzMiIHk9IjUzIiB3aWR0aD0iMjQiIGhlaWdodD0iNSIgZmlsbD0iIzM2MzYzNiIvPg0KPC9zdmc+DQo="},1810:e=>{"use strict";e.exports=i},52127:e=>{"use strict";e.exports=o},3297:e=>{"use strict";e.exports=r},21835:e=>{"use strict";e.exports=a},33037:e=>{"use strict";e.exports=l},23080:e=>{"use strict";e.exports=s},82165:e=>{"use strict";e.exports=n}},t={};function d(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,d),s.exports}d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var i in t)d.o(t,i)&&!d.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var c={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(c),d.d(c,{default:()=>M});var e,t,i=d(1810),a=d(21835),s=d(23080),l=d(33037);!function(e){e.Dropdown="DROPDOWN",e.Tabs="TABS"}(e||(e={})),function(e){e.Single="SINGLE",e.Multiple="MULTIPLE"}(t||(t={}));const o={newSheet:"New sheet",sheetStyle:"Arrangement style",layerConfig:"Sheet configuration",enableAttachements:"Show attachments",enableSearch:"Search",searchFields:"Select searching fields",fullMatch:"Exact match",allowCsv:"Allow exporting to CSV",enableSelect:"Select records",enableEdit:"Allow editing",enableRefresh:"Refresh",configFields:"Configure fields",dropdown:"Dropdown",configTips:"Select fields for initial display",selectMode:"Select mode",tableBlankStatus:'Click the "{SheetString}" button to add and configure data sheets.',selectFields:"Select fields",checkAll:"Check all",uncheckAll:"Uncheck all",editable:"Editable"};var n=d(52127),r=d(82165);const{OUTPUT_DATA_VIEW_ID:h}=i.CONSTANTS;class g extends i.React.PureComponent{constructor(e){super(e),this.supportedDsTypes=(0,i.Immutable)([l.AllDataSourceTypes.FeatureLayer,l.AllDataSourceTypes.SceneLayer]),this.nameChange=e=>{const t=e.target.value;this.setState({itemLabel:t})},this.nameAccept=e=>{(e=""===(e=null==e?void 0:e.trim())?this.props.name:e)!==this.state.itemLabel&&this.setState({itemLabel:e}),this.props.optionChange("name",e)},this.getUncheckState=(e=[],t)=>{var a;let s,l=!1;if(this.state)s=this.state.dataSource;else{if(!t)return l;const e=t.lastIndexOf("-"),a=t.substr(0,e);s=i.DataSourceManager.getInstance().getDataSource(a)}const o=null===(a=s)||void 0===a?void 0:a.getLayerDefinition();return e.forEach((e=>{const t=this.getFieldEditable(o,e.jimuName);!e.editAuthority&&t&&(l=!0)})),l},this.handleCheckboxChange=e=>{const t=e.currentTarget;t&&this.props.optionChange(t.dataset.field,t.checked)},this.formatMessage=(e,t)=>{const i=Object.assign({},o,a.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)},this.displaySelectedFields=e=>this.formatMessage("numSelected",{number:e.length}),this.filterSearchFields=e=>{const{searchFields:t}=this.props,i=t.split(","),a=e.map((e=>e.jimuName));return i.filter((e=>a.includes(e))).join(",")},this.getFieldEditable=(e,t)=>{const i=((null==e?void 0:e.fields)||[]).find((e=>e.name===t));return!i||(null==i?void 0:i.editable)},this.onFieldChange=e=>{var t;if(!e)return;const{dataSource:i}=this.state,a=null===(t=i)||void 0===t?void 0:t.getLayerDefinition(),s=e.filter((e=>e)).map((e=>{const t=this.getFieldEditable(a,e.jimuName);return Object.assign(Object.assign({},e),{editAuthority:t})})),l=this.filterSearchFields(s);this.props.multiOptionsChange({searchFields:l,tableFields:s})},this.onDataSourceCreated=e=>{this.setState({dataSource:e})},this.getSearchingFields=()=>{const e=[],{tableFields:t}=this.props;return t.length>0&&t.forEach((t=>{t.type===i.JimuFieldType.String&&e.push({value:t.jimuName||t.name,label:t.alias||t.name})})),e},this.handleChooseSearchingFieldsChange=(e,t,i)=>{this.props.optionChange("searchFields",i.join(","))},this.getSelectModeOptions=()=>[(0,i.jsx)("option",{key:t.Single,value:t.Single},this.formatMessage("single")),(0,i.jsx)("option",{key:t.Multiple,value:t.Multiple},this.formatMessage("multiple"))],this.getFieldsFromDatasource=()=>{const{useDataSource:e}=this.props,t=i.DataSourceManager.getInstance().getDataSource(null==e?void 0:e.dataSourceId),a=null==t?void 0:t.getSchema(),s=(null==a?void 0:a.fields)?Object.values(null==a?void 0:a.fields):[],l=["CreationDate","Creator","EditDate","Editor","GlobalID"];let o=s.filter((e=>!l.includes(e.jimuName)));return(null==o?void 0:o.length)>50&&(o=o.slice(0,50)),{allFields:s,tableFields:o}},this.checkFieldsExist=(e,t)=>{let i=!1;for(const a of e)if(a.jimuName===t.jimuName){i=!0;break}return i},this.handleListBoxAll=e=>{const{tableFields:t}=this.props,i=t.map((t=>Object.assign(Object.assign({},t),{editAuthority:e})));this.setState({hasUncheck:!e}),this.props.optionChange("tableFields",i)},this.state={dataSource:void 0,itemLabel:e.name||"",hasUncheck:this.getUncheckState(e.tableFields,e.id)},this.colRef=i.React.createRef()}componentDidUpdate(e,t){this.props.name!==e.name&&this.setState({itemLabel:this.props.name||""})}getStyle(e){return i.css`
      .layer-config-panel {
        .panel-inner {
          .title {
            max-width: 70%;
          }
        }
        .setting-container {
          height: calc(100% - ${i.polished.rem(58)});
          overflow: auto;
          .fields-list-header {
            background: ${e.colors.palette.light[200]};
            border-bottom: 1px solid ${e.colors.palette.light[600]};
            height: 34px;
            .jimu-checkbox {
              margin-top: 2px;
            }
          }
          .selected-fields-con{
            margin-top: 0;
            .selected-fields-list {
              flex: 1;
              max-height: 265px;
              overflow-y: auto;
            }
            .jimu-tree-item{
              background: ${e.colors.palette.light[200]};
              border-bottom: 1px solid ${e.colors.palette.light[300]};
              .jimu-tree-item__content{
                div:first-of-type{
                  padding-left: 2px;
                }
                .jimu-tree-item__body{
                  background: ${e.colors.palette.light[200]};
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
        }
      }
    `}render(){const{useDataSource:e,optionChange:o,theme:d,tableFields:c,searchFields:g,enableEdit:I}=this.props,{dataSource:m,itemLabel:p,hasUncheck:u}=this.state,D=m&&m.getLayerDefinition(),S=[];c&&c.length>0&&c.forEach((e=>{S.push(e.jimuName)}));const{allFields:b}=this.getFieldsFromDatasource(),M=null==D?void 0:D.capabilities;let f=!1;M&&(f=Array.isArray(M)?M.join().toLowerCase().includes("editing"):null==D?void 0:D.capabilities.toLowerCase().includes("editing"));const y=(null==m?void 0:m.url)&&(null==m?void 0:m.dataViewId)!==h&&f,v={overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:r.TreeItemActionType.RenderOverrideItem,children:[{name:r.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:r.TreeItemActionType.RenderOverrideItemContent,children:[{name:r.TreeItemActionType.RenderOverrideItemBody,children:[{name:r.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:r.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:r.TreeItemActionType.RenderOverrideItemDragHandle},{name:r.TreeItemActionType.RenderOverrideItemChildrenToggle},{name:r.TreeItemActionType.RenderOverrideItemIcon},{name:r.TreeItemActionType.RenderOverrideItemTitle},{name:r.TreeItemActionType.RenderOverrideItemCommands}]}]},{name:r.TreeItemActionType.RenderOverrideItemDetailLine}]}]}]}]})};return(0,i.jsx)("div",{className:"w-100 h-100",css:this.getStyle(d)},(0,i.jsx)("div",{className:"w-100 h-100 layer-config-panel"},(0,i.jsx)("div",{className:"w-100 d-flex px-3 py-0"},(0,i.jsx)(a.PanelHeader,{level:1,className:"py-3 panel-inner",showClose:!!this.props.onClose,onClose:this.props.onClose,title:this.formatMessage("layerConfig")})),(0,i.jsx)("div",{className:"setting-container"},(0,i.jsx)(s.SettingSection,{title:this.formatMessage("data"),className:"pt-0"},(0,i.jsx)(s.SettingRow,null,(0,i.jsx)(l.DataSourceSelector,{types:this.supportedDsTypes,disableRemove:()=>!0,useDataSources:e?(0,i.Immutable)([e]):(0,i.Immutable)([]),mustUseDataSource:!0,onChange:this.props.dataSourceChange,closeDataSourceListOnChange:!0}))),e&&(0,i.jsx)(i.React.Fragment,null,(0,i.jsx)(s.SettingSection,{title:this.formatMessage("label")},(0,i.jsx)(s.SettingRow,null,(0,i.jsx)(a.TextInput,{type:"text",className:"w-100",value:p,onChange:this.nameChange,onAcceptValue:this.nameAccept,"aria-label":this.formatMessage("label")}))),(0,i.jsx)(s.SettingSection,{title:this.formatMessage("configFields")},(0,i.jsx)(s.SettingRow,null,this.formatMessage("configTips")),(0,i.jsx)(s.SettingRow,null,(0,i.jsx)(l.FieldSelector,{useDataSources:e?(0,i.Immutable)([e]):(0,i.Immutable)([]),onChange:this.onFieldChange,selectedFields:(0,i.Immutable)(S),isMultiple:!0,isSearchInputHidden:!1,isDataSourceDropDownHidden:!0,useDropdown:!0,useMultiDropdownBottomTools:!0})),(0,i.jsx)(s.SettingRow,{className:"fields-list-header"},(0,i.jsx)("div",{className:"d-flex w-100 ml-4 fields-list-check"},I&&(0,i.jsx)(a.Checkbox,{id:"editAllField","data-field":"editAllField",onClick:()=>this.handleListBoxAll(u),checked:!u,title:u?`${this.formatMessage("editable")} (${this.formatMessage("checkAll")})`:`${this.formatMessage("editable")} (${this.formatMessage("uncheckAll")})`}),(0,i.jsx)(a.Label,{for:"editAllField",style:{cursor:"pointer"},className:"ml-2",title:this.formatMessage("field")},this.formatMessage("field")))),(0,i.jsx)(s.SettingRow,{className:"selected-fields-con"},(0,i.jsx)(r.List,Object.assign({size:"sm",className:"selected-fields-list",listType:r.TreeType.Intact,itemsJson:Array.from(c).map(((e,t)=>({itemStateDetailContent:e,itemStateChecked:null==e?void 0:e.editAuthority,itemStateDisabled:!this.checkFieldsExist(b,e),itemKey:`${t}`,itemStateIcon:l.dataComponentsUtils.getIconFromFieldType(e.type,d),itemStateTitle:e.alias||e.jimuName||e.name,isCheckboxDisabled:!this.getFieldEditable(D,e.jimuName),itemStateCommands:[]}))),dndEnabled:!0,showCheckbox:I,onUpdateItem:(e,t)=>{const{itemJsons:i}=e,a=i[i.length-1].map((e=>Object.assign(Object.assign({},e.itemStateDetailContent),{editAuthority:e.itemStateChecked})));this.props.optionChange("tableFields",a);const s=this.getUncheckState(a);this.setState({hasUncheck:s})},isItemFocused:()=>!1},v))),y&&(0,i.jsx)(s.SettingRow,null,(0,i.jsx)("div",{className:"d-flex w-100"},(0,i.jsx)(a.Checkbox,{id:"editable-cb","data-field":"enableEdit",onClick:this.handleCheckboxChange,checked:this.props.enableEdit}),(0,i.jsx)(a.Label,{for:"editable-cb",style:{cursor:"pointer"},className:"ml-2",title:this.formatMessage("enableEdit")},this.formatMessage("enableEdit"))))),(0,i.jsx)(s.SettingSection,{title:this.formatMessage("tools")},(0,i.jsx)("div",{className:"w-100 table-options"},(0,i.jsx)("div",{className:"table-options-item",key:"enableSearch"},(0,i.jsx)("span",{className:"text-break",style:{width:"80%"}},this.formatMessage("enableSearch")),(0,i.jsx)(a.Switch,{className:"can-x-switch",checked:this.props.enableSearch||!1,onChange:e=>{o("enableSearch",e.target.checked)}}))),(0,i.jsx)("div",{className:"ds-container"},(0,i.jsx)(i.DataSourceComponent,{useDataSource:(0,i.Immutable)(e),onDataSourceCreated:this.onDataSourceCreated})),this.props.enableSearch&&(0,i.jsx)(s.SettingRow,{flow:"wrap",label:this.formatMessage("searchFields")},(0,i.jsx)("div",{className:"d-flex w-100 search-container",style:{zIndex:3}},(0,i.jsx)(a.MultiSelect,{items:(0,i.Immutable)(this.getSearchingFields()),values:g?(0,i.Immutable)(g.split(",")):(0,i.Immutable)([]),className:"search-multi-select",fluid:!0,onClickItem:this.handleChooseSearchingFieldsChange,displayByValues:this.displaySelectedFields})),(0,i.jsx)("div",{className:"d-flex w-100",style:{marginTop:"10px"}},(0,i.jsx)(a.Checkbox,{id:"fullMatch-cb","data-field":"searchExact",onClick:this.handleCheckboxChange,checked:this.props.searchExact}),(0,i.jsx)(a.Label,{for:"fullMatch-cb",style:{cursor:"pointer"},className:"ml-2",title:this.formatMessage("fullMatch")},this.formatMessage("fullMatch")))),(0,i.jsx)(s.SettingRow,null,(0,i.jsx)("div",{className:"w-100 table-options"},["enableSelect","enableRefresh"].map(((e,l)=>(0,i.jsx)(n.Fragment,{key:l},(0,i.jsx)("div",{className:"table-options-item"},(0,i.jsx)("span",{className:"text-break",style:{width:"80%"}},this.formatMessage(e)),(0,i.jsx)(a.Switch,{className:"can-x-switch",checked:this.props[e]||!1,onChange:t=>{o(e,t.target.checked)}})),"enableSelect"===e&&this.props[e]&&(0,i.jsx)(s.SettingRow,{flow:"wrap",label:this.formatMessage("selectMode"),className:"select-option"},(0,i.jsx)(a.Select,{value:this.props.selectMode||t.Multiple,onChange:e=>{o("selectMode",e.target.value)}},this.getSelectModeOptions()))))))))))))}}var I=d(3297);class m extends i.React.PureComponent{constructor(){super(...arguments),this.onDataSourceCreated=e=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,e)},this.onCreateDataSourceFailed=()=>{this.props.onCreateDataSourceCreatedOrFailed(this.props.useDataSource.dataSourceId,null)}}render(){return(0,i.jsx)(i.DataSourceComponent,{useDataSource:this.props.useDataSource,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed})}}var p=d(55339),u=d.n(p),D=d(748),S=d.n(D);const b=e=>{const{className:t}=e,s=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(i[a[s]]=e[a[s]])}return i}(e,["className"]),l=(0,i.classNames)("jimu-icon-component",t);return i.React.createElement(a.Icon,Object.assign({className:l,icon:S()},s))};class M extends i.React.PureComponent{constructor(e){super(e),this.sidePopperTrigger=i.React.createRef(),this.updateDsHash=e=>{this.dsHash={};let t=0;e.forEach((e=>{this.dsHash[t]=e.useDataSource,t++}))},this.getNewConfigId=e=>{var t;return`${e}-${((null===(t=this.props.config)||void 0===t?void 0:t.layersConfig.length)>0?this.getArrayMaxId(this.props.config.layersConfig):0)+1}`},this.dataSourceChangeSave=e=>{var a;if(!e)return;const s=(0,i.Immutable)(e[0]),l=this.dsManager.getDataSource(s.dataSourceId),o=l&&l.getSchema(),n=null===(a=l)||void 0===a?void 0:a.getLayerDefinition(),r=["CreationDate","Creator","EditDate","Editor","GlobalID"],d=(null==o?void 0:o.fields)?Object.values(null==o?void 0:o.fields):[],c=(null==n?void 0:n.fields)||[];let h=d.filter((e=>!r.includes(e.jimuName))).map((e=>{const t=c.find((t=>t.name===e.jimuName)),i=null==t?void 0:t.editable;return Object.assign(Object.assign({},e),{editAuthority:i,editable:i})}));(null==h?void 0:h.length)>50&&(h=h.slice(0,50)),this.dsManager.createDataSourceByUseDataSource((0,i.Immutable)(e[0])).then((e=>{const a={id:this.getNewConfigId(e.id),name:e.getLabel(),useDataSource:s,allFields:d,tableFields:h,enableAttachements:!1,enableEdit:!1,allowCsv:!1,enableSearch:!1,searchFields:"",enableRefresh:!0,enableSelect:!0,selectMode:t.Single};let l;if(this.props.config.layersConfig[this.index]){const e=this.props.config.layersConfig.asMutable({deep:!0});e.splice(this.index,1,a),l=(0,i.Immutable)(e)}else l=this.props.config.layersConfig.concat([(0,i.Immutable)(a)]);this.dsHash[this.index]=s,this.updateDsHash(l);const o={id:this.props.id,config:this.props.config.set("layersConfig",l),useDataSources:this.getUseDataSourcesByDsHash()};this.props.onSettingChange(o)}))},this.onCloseLayerPanel=()=>{this.setState({showLayerPanel:!1}),this.index=0},this.getUniqueValues=(e=[],t=[])=>e.concat(t).filter((function(e,t,i){return i.indexOf(e)===t})),this.getUseDataSourcesByDsHash=()=>{const e={};Object.keys(this.dsHash).forEach((t=>{const a=this.dsHash[t].dataSourceId;let s;s=e[a]?(0,i.Immutable)({dataSourceId:this.dsHash[t].dataSourceId,mainDataSourceId:this.dsHash[t].mainDataSourceId,dataViewId:this.dsHash[t].dataViewId,rootDataSourceId:this.dsHash[t].rootDataSourceId,fields:this.getUniqueValues(e[a].fields,this.dsHash[t].fields)}):this.dsHash[t],e[a]=s}));const t=[];return Object.keys(e).forEach((i=>{t.push(e[i])})),t},this.removeLayer=e=>{this.index===e&&this.onCloseLayerPanel();const t=this.props.config.layersConfig.asMutable({deep:!0});t.splice(e,1);const i=this.props.config.set("layersConfig",t);delete this.dsHash[e],this.updateDsHash(t);const a={id:this.props.id,config:i,useDataSources:this.getUseDataSourcesByDsHash()};this.props.onSettingChange(a),this.index>e&&this.index--,I.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:this.props.id,propKey:"removeLayerFlag",value:!0})},this.optionChangeSave=(e,t)=>{const i=this.props.config.layersConfig[this.index];if(i){const a=this.props.config.setIn(["layersConfig",this.index.toString()],Object.assign(Object.assign({},i),{[e]:t})),s={id:this.props.id,config:a};this.props.onSettingChange(s)}I.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:this.props.id,propKey:"removeLayerFlag",value:!0})},this.multiOptionsChangeSave=e=>{const t=this.props.config.layersConfig[this.index];if(t){const i=this.props.config.setIn(["layersConfig",this.index.toString()],Object.assign(Object.assign({},t),e)),a={id:this.props.id,config:i};this.props.onSettingChange(a)}},this.getStyle=e=>i.css`
      .widget-setting-table {
        .filter-item {
          display: flex;
          padding: 0.5rem 0.75rem;
          margin-bottom: 0.25rem;
          line-height: 23px;
          cursor: pointer;
          background-color: ${e.colors.secondary};

          .filter-item-icon {
            width: 14px;
            margin-right: 0.5rem;
          }
          .filter-item-name {
            word-wrap: break-word;
          }
        }

        .filter-item-active {
          border-left: 2px solid ${e.colors.palette.primary[600]};
        }

        .arrange-style-container {
          .arrange_container {
            margin-top: 10px;
            display: flex;
            .jimu-btn {
              padding: 0;
              background: ${e.colors.palette.light[200]};
              &.active {
                border: 2px solid ${e.colors.palette.primary[600]};
              }
            }
          }
        }
        .table-blank-placeholder {
          .placeholder-icon {
            color: ${e.colors.palette.dark[200]};
          }
          & > div {
            top: 50%;
            transform: translateY(-50%);
            padding: 1rem;
          }
          p {
            font-size: ${i.polished.rem(14)};
            margin-top: ${i.polished.rem(16)};
            line-height: ${i.polished.rem(19)};
            color: ${e.colors.palette.dark[500]};
          }
        }

        .setting-ui-unit-tree, .setting-ui-unit-list {
          width: 100%;
          .tree-item {
            justify-content: space-between;
            align-items: center;
            font-size: ${i.polished.rem(13)};
            &.tree-item_level-1 {
            }
            .jimu-checkbox {
              margin-right: .5rem;
            }
          }
        }
        .setting-ui-unit-list-new {
          padding-top: ${i.polished.rem(8)};
        }
      }
    `,this.formatMessage=(e,t)=>{const i=Object.assign({},o,a.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:i[e]},t)},this.onShowLayerPanel=e=>{const{showLayerPanel:t}=this.state;e===this.index?this.setState({showLayerPanel:!t}):(this.setState({showLayerPanel:!0,refreshPanel:!this.state.refreshPanel}),this.index=e)},this.switchTableType=e=>{if(e!==this.props.config.arrangeType){const t={id:this.props.id,config:this.props.config.set("arrangeType",e)};this.props.onSettingChange(t)}},this.onItemUpdated=(e,t)=>{const{id:i,config:a}=this.props,s=e.map((e=>e.itemStateDetailContent)),l={id:i,config:a.set("layersConfig",s)};this.updateDsHash(s),this.onShowLayerPanel(t),this.props.onSettingChange(l)},this.onCreateDataSourceCreatedOrFailed=(e,t)=>{this.setState((i=>{const a=Object.assign({},i.dataSources);return a[e]=t,{dataSources:a}}))},this.isDataSourceAccessible=e=>{var t;const i=(null===(t=this.props.useDataSources)||void 0===t?void 0:t.filter((t=>e===t.dataSourceId)).length)>0;return null!==this.state.dataSources[e]&&i},this.index=0,this.dsManager=i.DataSourceManager.getInstance(),this.updateDsHash(this.props.config.layersConfig?this.props.config.layersConfig:[]),this.state={showLayerPanel:!1,refreshPanel:!1,dataSources:{}}}getArrayMaxId(e){const t=e.map((e=>e.id.split("-").reverse()[0]));return t.length>0?Math.max.apply(null,t):0}render(){var t,l;const{showLayerPanel:o}=this.state,{theme:n,config:c}=this.props,h=this.formatMessage("newSheet"),I=c.layersConfig.length,p={isItemFocused:(e,t)=>{const{itemJsons:[i,a]}=t.props;return o&&a.indexOf(i)===this.index},overrideItemBlockInfo:({itemBlockInfo:e},t)=>({name:r.TreeItemActionType.RenderOverrideItem,children:[{name:r.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:r.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:r.TreeItemActionType.RenderOverrideItemBody,children:[{name:r.TreeItemActionType.RenderOverrideItemMainLine,children:[{name:r.TreeItemActionType.RenderOverrideItemDragHandle},{name:r.TreeItemActionType.RenderOverrideItemIcon,autoCollapsed:!0},{name:r.TreeItemActionType.RenderOverrideItemTitle},{name:r.TreeItemActionType.RenderOverrideItemDetailToggle},{name:r.TreeItemActionType.RenderOverrideItemCommands}]}]}]}]}]})};return(0,i.jsx)("div",{css:this.getStyle(n)},(0,i.jsx)("div",{className:"widget-setting-table"},null===(t=this.props.useDataSources)||void 0===t?void 0:t.map(((e,t)=>(0,i.jsx)(m,{key:t,useDataSource:e,onCreateDataSourceCreatedOrFailed:this.onCreateDataSourceCreatedOrFailed}))),(0,i.jsx)(s.SettingSection,{className:"p-0 m-0 "+(I>0?"":"border-0")},(0,i.jsx)("div",{ref:this.sidePopperTrigger},(0,i.jsx)(s.SettingSection,{className:"border-0"},(0,i.jsx)(s.SettingRow,null,(0,i.jsx)(a.Button,{className:"w-100 text-dark set-link-btn",type:"primary",onClick:()=>{this.onShowLayerPanel(I)}},(0,i.jsx)("div",{className:"w-100 px-2 text-truncate"},h)))),(0,i.jsx)(s.SettingSection,{className:"pt-0 border-0"},(0,i.jsx)("div",{className:"setting-ui-unit-list"},!!I&&(0,i.jsx)(r.List,Object.assign({size:"sm",className:"setting-ui-unit-list-exsiting",itemsJson:Array.from(c.layersConfig).map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`,itemStateTitle:e.name,itemStateCommands:[{label:this.formatMessage("remove"),iconProps:()=>({icon:u(),size:12}),action:()=>{this.removeLayer(t)}}]}))),dndEnabled:!0,renderOverrideItemDetailToggle:(e,t)=>{var s,l;const{itemJsons:o}=t.props,[n]=o,r=null===(l=null===(s=null==n?void 0:n.itemStateDetailContent)||void 0===s?void 0:s.useDataSource)||void 0===l?void 0:l.dataSourceId;return this.isDataSourceAccessible(r)?"":(0,i.jsx)(a.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:this.formatMessage("dataSourceCreateError")})},onUpdateItem:(e,t)=>{const{itemJsons:i}=t.props,[a,s]=i;this.onItemUpdated(s,+a.itemKey)},onClickItemBody:(e,t)=>{const{itemJsons:[i]}=t.props;this.onShowLayerPanel(+i.itemKey)}},p)),I===this.index&&o&&(0,i.jsx)(r.List,Object.assign({size:"sm",className:"setting-ui-unit-list-new",itemsJson:[{name:"......"}].map(((e,t)=>({itemStateDetailContent:e,itemKey:`${this.index}`,itemStateTitle:e.name,itemStateCommands:[]}))),dndEnabled:!1,renderOverrideItemDetailToggle:()=>""},p,{isItemFocused:()=>!0})))))),0===I&&(0,i.jsx)("div",{className:"w-100 text-center table-blank-placeholder"},(0,i.jsx)("div",{className:"position-absolute w-100"},(0,i.jsx)(b,{size:48,className:"placeholder-icon"}),(0,i.jsx)("p",null,this.formatMessage("tableBlankStatus",{SheetString:h})))),I>0&&(0,i.jsx)(s.SettingSection,{className:"arrange-style-container",title:this.formatMessage("sheetStyle")},(0,i.jsx)(s.SettingRow,{className:"arrange_container"},(0,i.jsx)(a.Tooltip,{title:this.formatMessage("tabs"),placement:"bottom"},(0,i.jsx)(a.Button,{onClick:()=>this.switchTableType(e.Tabs),icon:!0,size:"sm",type:"tertiary",active:c.arrangeType===e.Tabs},(0,i.jsx)(a.Icon,{autoFlip:!0,width:109,height:70,icon:d(32253)}))),(0,i.jsx)(a.Tooltip,{title:this.formatMessage("dropdown"),placement:"bottom"},(0,i.jsx)(a.Button,{onClick:()=>this.switchTableType(e.Dropdown),className:"ml-2",icon:!0,size:"sm",type:"tertiary",active:c.arrangeType===e.Dropdown},(0,i.jsx)(a.Icon,{autoFlip:!0,width:109,height:70,icon:d(28676)}))))),(0,i.jsx)(s.SidePopper,{isOpen:o&&!i.urlUtils.getAppIdPageIdFromUrl().pageId,position:"right",toggle:this.onCloseLayerPanel,trigger:null===(l=this.sidePopperTrigger)||void 0===l?void 0:l.current},(0,i.jsx)(g,Object.assign({},c.layersConfig.asMutable({deep:!0})[this.index],{intl:this.props.intl,theme:n,dataSourceChange:this.dataSourceChangeSave,optionChange:this.optionChangeSave,multiOptionsChange:this.multiOptionsChangeSave,onClose:this.onCloseLayerPanel})))))}}M.mapExtraStateProps=(e,t)=>{var i,a;return{dsJsons:e.appStateInBuilder.appConfig.dataSources,activeTabId:e&&(null===(a=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.widgetsState[t.id])||void 0===a?void 0:a.activeTabId)}}})(),c})())}}}));