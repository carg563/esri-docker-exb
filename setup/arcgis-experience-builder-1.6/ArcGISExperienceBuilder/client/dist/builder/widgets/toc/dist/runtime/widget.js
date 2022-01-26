System.register(["jimu-core","jimu-core/dnd","jimu-for-builder","jimu-for-builder/templates","jimu-layouts/layout-builder","jimu-layouts/layout-runtime","jimu-theme","jimu-ui","jimu-ui/advanced/setting-components"],(function(e,t){var o={},i={},n={},s={},a={},r={},l={},d={},c={};return{setters:[function(e){o.APP_FRAME_NAME_IN_BUILDER=e.APP_FRAME_NAME_IN_BUILDER,o.AppMode=e.AppMode,o.BrowserSizeMode=e.BrowserSizeMode,o.ContainerType=e.ContainerType,o.DialogMode=e.DialogMode,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.LayoutType=e.LayoutType,o.LinkType=e.LinkType,o.LoadingType=e.LoadingType,o.PageMode=e.PageMode,o.PagePart=e.PagePart,o.PageType=e.PageType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.RootContainerType=e.RootContainerType,o.WidgetType=e.WidgetType,o.appActions=e.appActions,o.appConfigUtils=e.appConfigUtils,o.classNames=e.classNames,o.css=e.css,o.defaultMessages=e.defaultMessages,o.getAppStore=e.getAppStore,o.jsx=e.jsx,o.lodash=e.lodash,o.polished=e.polished,o.urlUtils=e.urlUtils},function(e){i.interact=e.interact},function(e){n.appConfigUtils=e.appConfigUtils,n.builderActions=e.builderActions,n.builderAppSync=e.builderAppSync,n.getAppConfigAction=e.getAppConfigAction,n.utils=e.utils},function(e){s.getWindowTemplates=e.getWindowTemplates},function(e){a.createDialogFromTemplate=e.createDialogFromTemplate,a.createPageFromTemplate=e.createPageFromTemplate,a.duplicateLayoutItem=e.duplicateLayoutItem,a.fixedLayoutActions=e.fixedLayoutActions,a.floatingLayoutItem=e.floatingLayoutItem,a.pendLayoutItem=e.pendLayoutItem,a.sinkingLayoutItem=e.sinkingLayoutItem,a.supportFloating=e.supportFloating,a.supportSinking=e.supportSinking},function(e){r.defaultMessages=e.defaultMessages},function(e){l.getThemeColorValue=e.getThemeColorValue,l.withTheme=e.withTheme},function(e){d.Button=e.Button,d.Collapse=e.Collapse,d.Dropdown=e.Dropdown,d.DropdownButton=e.DropdownButton,d.DropdownItem=e.DropdownItem,d.DropdownMenu=e.DropdownMenu,d.DropdownSubMenuItem=e.DropdownSubMenuItem,d.Icon=e.Icon,d.ListGroupItem=e.ListGroupItem,d.Modal=e.Modal,d.ModalBody=e.ModalBody,d.ModalFooter=e.ModalFooter,d.ModalHeader=e.ModalHeader,d.Tab=e.Tab,d.Tabs=e.Tabs,d.TextInput=e.TextInput,d.Tooltip=e.Tooltip,d.defaultMessages=e.defaultMessages},function(e){c.LinkSettingPopup=e.LinkSettingPopup,c.OpenTypes=e.OpenTypes,c.PageTemplatePopper=e.PageTemplatePopper,c.TemplateSelector=e.TemplateSelector,c.changeCurrentDialog=e.changeCurrentDialog,c.changeCurrentPage=e.changeCurrentPage,c.handelDialogInfos=e.handelDialogInfos}],execute:function(){e((()=>{var e={687:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.667 4.667L11.333 0 16 4.667l-4.667 4.666-4.666-4.666zM0 1.333V8h6.667V1.333H0zM6.667 16H0V9.333h6.667V16zM8 16V9.333h6.667V16H8z" fill="#000"></path></svg>'},6465:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.5 6a.5.5 0 000 1h15a.5.5 0 000-1H.5zm0 3a.5.5 0 000 1h15a.5.5 0 000-1H.5z" fill="#000"></path></svg>'},2640:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.29 6.208L8 1 .71 6.208a.5.5 0 10.58.813L2 6.515V15h12V6.514l.71.507a.5.5 0 00.58-.813zM13 5.8L8 2.229 3 5.8V14h3v-4h4v4h3V5.8zM9 14H7v-3h2v3z" fill="#000"></path></svg>'},9775:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.154 3.154a.527.527 0 01.746 0l1.317 1.317A8.618 8.618 0 018 4c2.667 0 5.667 1.333 7 4-.696 1.393-1.847 2.422-3.168 3.087l1.014 1.013a.527.527 0 11-.746.746l-1.317-1.317A8.617 8.617 0 018 12c-2.667 0-5.667-1.333-7-4 .696-1.393 1.847-2.422 3.168-3.087L3.154 3.9a.527.527 0 010-.746zm1.698 2.443C3.726 6.087 2.782 6.882 2 8c1.422 2.033 3.382 3 6 3a8.66 8.66 0 002.03-.225l-.675-.674A2.5 2.5 0 015.9 6.644L4.852 5.598zm6.296 4.805C12.275 9.912 13.218 9.118 14 8c-1.422-2.033-3.382-3-6-3-.726 0-1.402.074-2.03.225l.675.674a2.5 2.5 0 013.457 3.456l1.046 1.047zM6.5 8c0-.221.048-.431.134-.62l1.987 1.986A1.5 1.5 0 016.5 8zm.88-1.366l1.986 1.987a1.5 1.5 0 00-1.987-1.987z" fill="#000"></path></svg>'},5369:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a1 1 0 100 2 1 1 0 000-2zm5 1a1 1 0 112 0 1 1 0 01-2 0zm6 0a1 1 0 112 0 1 1 0 01-2 0z" fill="#000"></path></svg>'},710:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2c3.314 0 6 2.574 6 5.75s-2.686 5.75-6 5.75c-.78 0-1.524-.142-2.207-.402-.395-.15-1.66.151-3.793.902l.198-.52c.586-1.586.769-2.569.549-2.95A5.538 5.538 0 012 7.75C2 4.574 4.686 2 8 2zm0 1C5.23 3 3 5.136 3 7.75c0 .809.212 1.587.613 2.28.282.49.294 1.153.068 2.09l-.08.304.155-.044c1.092-.306 1.81-.391 2.297-.248l.094.031A5.212 5.212 0 008 12.5c2.77 0 5-2.136 5-4.75S10.77 3 8 3zM6 5H5v5h1V8h2v2h1V5H8v2H6V5zm4 2h1v3h-1V7zm1-2h-1v1h1V5z" fill="#000"></path></svg>'},4767:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v2h12V2zM2 1H1v4h14V1H2zm2 7H2v6h2V8zM2 7H1v8h4V7H2zm6 1h6v6H8V8zM7 7h8v8H7V7z" fill="#000"></path></svg>'},5467:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12c-2.667 0-5.667-1.333-7-4 1.333-2.667 4.333-4 7-4s5.667 1.333 7 4c-1.333 2.667-4.333 4-7 4zm0-7c-2.618 0-4.578.967-6 3 1.422 2.033 3.382 3 6 3s4.578-.967 6-3c-1.422-2.033-3.382-3-6-3zm0 5.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#000"></path></svg>'},8683:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5H2v6h4V5zM1 4v8h6V4H1zM14 5h-4v6h4V5zM9 4v8h6V4H9z" fill="#000"></path></svg>'},760:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2h12v4H2V2zM1 7V1h14v6H1zm1 3h12v4H2v-4zm-1 5V9h14v6H1z" fill="#000"></path></svg>'},1745:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2h12v12H2V2zM1 15V1h14v14H1zm4-9h6v4H5V6zm-1 5V5h8v6H4z" fill="#000"></path></svg>'},4175:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 2a2 2 0 012-2v1a1 1 0 00-1 1H0zM18 0v1a1 1 0 011 1h1a2 2 0 00-2-2zM2 20v-1a1 1 0 01-1-1H0a2 2 0 002 2zM18 20v-1a1 1 0 001-1h1a2 2 0 01-2 2z" fill="#000"></path><path d="M3 0h2v1H3V0zM0 3h1v2H0V3zM0 7h1v2H0V7zM0 11h1v2H0v-2zM0 15h1v2H0v-2zM19 3h1v2h-1V3zM19 7h1v2h-1V7zM19 11h1v2h-1v-2zM19 15h1v2h-1v-2zM7 0h2v1H7V0zM11 0h2v1h-2V0zM15 0h2v1h-2V0zM3 19h2v1H3v-1zM7 19h2v1H7v-1zM11 19h2v1h-2v-1zM15 19h2v1h-2v-1z" fill="#000"></path></svg>'},5543:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2a2 2 0 00-2-2H2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V2zM2 1h10a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 8a2 2 0 00-2-2H8a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V8zM8 7h10a1 1 0 011 1v10a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1z" fill="#000"></path></svg>'},1513:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1H3a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1zM3 14V2h10v12H3zM5.6 4h4.8c.331 0 .6.224.6.5s-.269.5-.6.5H5.6c-.331 0-.6-.224-.6-.5s.269-.5.6-.5zm4.8 3H5.6c-.331 0-.6.224-.6.5s.269.5.6.5h4.8c.331 0 .6-.224.6-.5s-.269-.5-.6-.5z" fill="#000"></path></svg>'},9788:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.146 4.653a.485.485 0 01.708 0L8 10.24l5.146-5.587a.485.485 0 01.708 0 .538.538 0 010 .738l-5.5 5.956a.485.485 0 01-.708 0l-5.5-5.956a.538.538 0 010-.738z" fill="#000"></path></svg>'},3273:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.653 13.854a.485.485 0 010-.708L10.24 8 4.653 2.854a.485.485 0 010-.708.538.538 0 01.738 0l5.956 5.5a.485.485 0 010 .708l-5.956 5.5a.538.538 0 01-.738 0z" fill="#000"></path></svg>'},6009:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.854 11.347a.486.486 0 01-.708 0L8 5.76l-5.146 5.587a.485.485 0 01-.708 0 .538.538 0 010-.738l5.5-5.956a.485.485 0 01.708 0l5.5 5.956a.538.538 0 010 .738z" fill="#000"></path></svg>'},1964:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 0a2 2 0 012 2v9a2 2 0 01-2 2H5l-5 3V2a2 2 0 012-2h11zm0 1H2a1 1 0 00-.994.883L1 2v12.233L4.723 12H13a1 1 0 00.993-.883L14 11V2a1 1 0 00-.883-.993L13 1zM7 3.5a.5.5 0 011 0V6h2.5a.5.5 0 010 1H8v2.5a.5.5 0 01-1 0V7H4.5a.5.5 0 010-1H7V3.5z" fill="#000"></path></svg>'},6593:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.793.293A1 1 0 0010.086 0H2a2 2 0 00-2 2v12a2 2 0 002 2h11a2 2 0 002-2V4.914a1 1 0 00-.293-.707L10.793.293zM2 1h8v4h4v9a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm11.086 3L11 1.914V4h2.086zM7.5 5a.5.5 0 00-.5.5V8H4.5a.5.5 0 000 1H7v2.5a.5.5 0 001 0V9h2.5a.5.5 0 000-1H8V5.5a.5.5 0 00-.5-.5z" fill="#000"></path></svg>'},5339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.745 8l6.1 6.1a.527.527 0 11-.745.746L8 8.746l-6.1 6.1a.527.527 0 11-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 01.746-.746l6.1 6.1 6.1-6.1a.527.527 0 01.746.746L8.746 8z" fill="#000"></path></svg>'},224:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-1.27 4.936a6.5 6.5 0 11.707-.707l4.136 4.137a.5.5 0 11-.707.707l-4.137-4.137z" fill="#000"></path></svg>'},1810:e=>{"use strict";e.exports=o},2008:e=>{"use strict";e.exports=i},3297:e=>{"use strict";e.exports=n},2986:e=>{"use strict";e.exports=s},9883:e=>{"use strict";e.exports=a},9169:e=>{"use strict";e.exports=r},3016:e=>{"use strict";e.exports=l},1835:e=>{"use strict";e.exports=d},3080:e=>{"use strict";e.exports=c}},t={};function p(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,p),n.exports}p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},p.d=(e,t)=>{for(var o in t)p.o(t,o)&&!p.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.p="";var g={};return p.p=window.jimuConfig.baseUrl,(()=>{"use strict";p.r(g),p.d(g,{default:()=>Mt});var e={};p.r(e),p.d(e,{alignLeftByItemJson:()=>Ve,alignRightItemJson:()=>We,bringForwardByItemJson:()=>ze,bringToFrontByItemJson:()=>Fe,floatingActionBytemJson:()=>He,formatMessage:()=>at,fullHeightByItemJson:()=>qe,fullSizeByItemJson:()=>Xe,fullWidthByItemJson:()=>Ke,getLayoutInfo:()=>Ae,getOutlineItemId:()=>Oe,getTotalExpandedNumOverItem:()=>st,getTotalLines:()=>nt,handleDuplicate:()=>Re,handleRemove:()=>Me,handleRename:()=>Be,horizontalCenterByItemJson:()=>Ue,moveToPending:()=>Le,sendBackwardByItemJson:()=>Ee,sendToBackByItemJson:()=>Je,shouldUpdateByLayouts:()=>it,shouldUpdateByScreenGroups:()=>tt,shouldUpdateByScreens:()=>ot,shouldUpdateBySections:()=>Qe,shouldUpdateByViews:()=>et,shouldUpdateByWidgets:()=>Ye,sinkingActionBytemJson:()=>$e,snapToBottomByItemJson:()=>_e,snapToTopByItemJson:()=>Ge,toggleLockLayout:()=>Ne,verticalCenterByItemJson:()=>Ze});var t=p(1810),o=p(3297),i=p(1835),n=p(9883),s=p(3080),a=p(9169);const r={tocChooseTemplate:"Select a page template",newPage:"New page",pages_upper:"Pages",content_upper:"Content",body_upper:"Body",tocLoading:"Loading",addPage:"Add page",addLink:"Add link",addFolder:"Add folder",addDialog:"Add window",makeHome:"Make homepage",makeSplash:"Set as splash",opendWithPages:"Opend with {pages}.",hideFromMenu:"Hide from menu",showFromMenu:"Show in menu",body:"Body",header:"Header",footer:"Footer",outline:"Outline",tocSetLink:"Set link",certainly:"OK",removePageTip:"There is(are) {subCount} subpage(s) in {label}, do you really want to remove it?",fullScreenApp:"Fullscreen app",fullScreenAppTip:"Best for creating a web app that takes the full area of the browser window.",scrollingPage:"Scrolling page",scrollingPageTip:"Best for creating a web page that scrolls in the browser window.",arrange:"Arrange",align:"Align"};var l=p(2008);const d="-toc-";class c extends t.React.Component{constructor(e){super(e),this.formatMessage=e=>this.props.intl.formatMessage({id:e,defaultMessage:r[e]}),this.handleArrowClick=e=>{const{onArrowClick:t,itemJson:o}=this.props;t&&t(o),e.stopPropagation()},this.handleClick=e=>{const{itemJson:t,editable:o}=this.props;t.allowEditable&&o&&e.stopPropagation()},this.handleMouseEnter=e=>{e.stopPropagation();const{itemJson:t}=this.props,i=t.id.split(d);i[0]&&i[1]&&o.builderAppSync.publishTocHoverInfoToApp({layoutId:i[0],layoutItemId:i[1]},!0)},this.handleMouseLeave=e=>{e.stopPropagation();const{itemJson:t}=this.props,i=t.id.split(d);i[0]&&i[1]&&o.builderAppSync.publishTocHoverInfoToApp({layoutId:i[0],layoutItemId:i[1]},!1)},this.handleDoubleClickItem=e=>{const{itemJson:t,onDoubleClick:o}=this.props;o&&o(t,e),e.stopPropagation()},this.renameItemClick=e=>{e&&e.stopPropagation(),this.editor.current&&(setTimeout((()=>{let e,t;this.editor.current.focus(),window.getSelection&&document.createRange?(t=document.createRange(),t.selectNodeContents(this.editor.current),e=window.getSelection(),e.removeAllRanges(),e.addRange(t)):(e=document.createRange(),e.setStart(this.editor.current.firstChild,this.editor.current.innerText.length),e.select())}),1),this.editor.current.onkeydown=e=>{"Enter"===e.key&&e.preventDefault()},this.editor.current.onkeyup=e=>{"Enter"===e.key&&(e.preventDefault(),this.onRenameBlur(null))})},this.onRenameBlur=e=>{if(!this.editor.current)return;const t=this.editor.current.innerText;this.editor.current.innerText="",setTimeout((()=>{this.editor.current.innerText=t}),10),setTimeout((()=>{const{renameItem:e}=this.props;e&&this.props.renameItem(this.props.itemJson,t)||(this.editor.current.innerText=this.props.itemJson.label)}),30)},this.editor=t.React.createRef()}componentDidMount(){const{editable:e}=this.props;e&&this.renameItemClick()}componentDidUpdate(e){const{itemJson:t,editable:o}=this.props;t.allowEditable&&o!==e.editable&&o&&this.renameItemClick()}}var h=p(3016),u=p(3273),m=p.n(u);const f=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:m()},n))};class v extends c{constructor(e){super(e),this.onDropHover=e=>{this.state.dropType!==e&&this.setState({dropType:e})},this.getStyle=()=>{var e,o;const i=(0,t.getAppStore)().getState(),n=null===(e=null==i?void 0:i.appContext)||void 0===e?void 0:e.isRTL,{theme:s,editable:a,itemJson:r,isTocDragging:l}=this.props,{mustShowArrow:d,children:c,level:p,isActive:g,isExpand:h}=r,{isDragging:u,isHovering:m}=this.state;return t.css`
      height: ${30}px;
      width: auto;
      min-width: 100%;
      align-items: center;
      cursor: pointer;
      ${u?"z-index: 100;":""}

      &.drag-move-into {
        border: 1px solid ${s.colors.palette.primary[700]};
      }

      :hover {
        ${g||l?"":`background-color: ${s.colors.palette.light[400]};`}
        .dropDown {
          .btn {
            display: ${l?"none":"inline-flex"};
          }
          z-index: 2;
        }
        .page-item-visible-btn {
          display: ${l?"none":"inline-flex"};
          z-index: 2;
        }
        .page-item-home-btn {
          display: ${r.showDefault?l&&!(null===(o=null==r?void 0:r.data)||void 0===o?void 0:o.isDefault)?"none":"inline-flex":"none"};
          z-index: 2;
        }
      }

      &.active {
        ${l?"":`background-color: ${s.colors.primary};`}
        border: 0;
      }

      .toc-item-dropzone {
        touch-action: none;
        position: relative;

        .toc-item-drag:hover {
          cursor: pointer !important;
        }

        .toc-item-drag {
          pointer-events: ${m?"all":"none"};
          visibility: ${r.allowEditable&&a?"hidden":"visible"};
          z-index: 1;
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: ${u?t.polished.rgba(s.colors.palette.light[400],.6):"transparent"};
          box-shadow: ${u?s.boxShadows.lg:s.boxShadows.none};
        }

        .toc-item {
          padding: 0;
          border: 0;
          position: relative;
          .toc-item-content {
            margin-left: ${10*p}px;
            position: relative;
            .toc-arrow {
              z-index: 2;
              padding-right: ${t.polished.rem(1)};
              visibility: ${d||c&&c.length>0?"visible":"hidden"};
              .toc-arrow-icon {
                fill: ${s.colors.black};
                transform-origin: center;
                transform: ${`rotate(${h?90:n?180:0}deg)`};
                transition: transform .5s;
              }
            }

            .left-and-right {
              overflow-x: hidden;
              margin-left: -5px;
              .left-content {
                align-items: center;
                overflow-x: hidden;
                flex: auto;
                .editor {
                  overflow: hidden;
                  text-overflow: ${a?"clip":"ellipsis"};
                  white-space: nowrap;
                  font-size: ${.875}rem;
                  user-select: none;
                  flex: auto;
                  text-align: start;
                }
                [contenteditable="true"] {
                  user-select: text;
                  -webkit-user-select: text;
                  background-color: ${s.colors.white};
                }
                .header-icon {
                  margin-right: 0.3rem;
                  flex: none;
                }
              }
            }
          }

          &.toc-drag-move-last {
            :after{
              content: '';
              position: absolute;
              left: 0;
              top: auto;
              bottom: 0;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${s.colors.palette.primary[700]};
            }
          }

          &.toc-drag-move-first {
            :before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: auto;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${s.colors.palette.primary[700]};
            }
          }

          .drag-move-out-order-bottom {
            :after{
              content: '';
              position: absolute;
              left: 0;
              top: auto;
              bottom: 0;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${s.colors.palette.primary[700]};
            }
          }

          .drag-move-out-order-top {
            :before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: auto;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${s.colors.palette.primary[700]};
            }
          }
        }
      }
    `},this.state={dropType:"none",isDragging:!1,isHovering:!1},this.dropZoneRef=t.React.createRef(),this.dragRef=t.React.createRef()}componentWillUnmount(){this.dragInteractable&&(this.dragInteractable.unset(),this.dragInteractable=null),this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}componentDidMount(){super.componentDidMount();const{canDnd:e,canDragFunc:t,canDropFunc:o,onDidDrop:i,canOrderFunc:n,canDropIntoFunc:s,itemJson:a}=this.props,{index:r}=a;if(e&&this.dropZoneRef.current&&this.dragRef.current){let e=null;this.dropZoneInteractable=(0,l.interact)(this.dropZoneRef.current).dropzone({accept:".toc-item-drag",overlap:"pointer",ondropmove:e=>{const t=e.relatedTarget,i=e.target,l=JSON.parse(t.getAttribute("data-itemJson"));if(!o||!o(a.data,l.data))return;const d=i.getBoundingClientRect(),c=d.bottom-d.top,p=2*c/3,g=1*c/3,h=c/2,u=e.dragEvent.client.y-d.top;let m=this.state.dropType;m=n&&n(l.data,a.data)?s&&s(l.data,a.data)?u>p?"bottom":u<g?"top":"moveInto":0===r?u>h?"bottom":"top":"bottom":s&&s(l.data,a.data)?"moveInto":"none",this.onDropHover(m)},ondragleave:e=>{this.onDropHover("none")},ondropactivate:e=>{this.dragRef.current.setAttribute("data-itemJson",JSON.stringify(a))},ondrop:e=>{const t=this.state.dropType;if("none"===t)return;const o=e.relatedTarget,n=JSON.parse(o.getAttribute("data-itemJson"));i&&i(n,a,t),this.onDropHover("none")}}),t&&t(a.data)&&(this.dragInteractable=(0,l.interact)(this.dragRef.current).draggable({inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{this.setState({isDragging:!0});const{onTocDragStatusChage:t}=this.props;t&&t(!0)},onmove:t=>{const{clientX:o,clientY:i,clientX0:n,clientY0:s,target:a}=t,r=parseFloat(a.getAttribute("start-x"))||0,l=parseFloat(a.getAttribute("start-y"))||0;let d=o-n+r,c=i-s+l;const p=-a.clientWidth/2,g=a.clientWidth/2;d<p?d=p:d>g&&(d=g);const{parentBoundBottom:h,parentBoundTop:u}=this.props;if(h>-1&&u>-1){const e=u-s,t=h-s;c<=e?c=e:c>=t&&(c=t)}e&&cancelAnimationFrame(e),e=requestAnimationFrame((()=>{a.style.webkitTransform=a.style.transform="translate("+d+"px, "+c+"px)",e=null}))},onend:t=>{const{target:o}=t;e&&cancelAnimationFrame(e),o.style.webkitTransform=o.style.transform="translate(0px, 0px)",this.setState({isDragging:!1});const{onTocDragStatusChage:i}=this.props;i&&i(!1)}}))}}componentDidUpdate(e){super.componentDidUpdate(e)}render(){var e,o;const{itemJson:n,renderRightContent:s,editable:a,canDnd:r,theme:l,isFirstItem:d,isLastItem:c,tocDraggingStatus:p,isTocDragging:g}=this.props,{icon:u}=n,{dropType:m,isDragging:v}=this.state;let b;b=u&&u.svg?u:{svg:u};const y="moveInto"===m?"drag-move-into":"",I="drag-move-out-order-"+m;let x="";g&&"on"!==p&&("bottom"===p&&c?x="toc-drag-move-last":"top"===p&&d&&(x="toc-drag-move-first"));const w=null===(o=null===(e=(0,t.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===o?void 0:o.theme;return(0,t.jsx)("div",{className:`d-flex ${n.isActive?"active":""}   ${y}`,css:this.getStyle(),onMouseEnter:e=>this.setState({isHovering:!0}),onMouseLeave:e=>this.setState({isHovering:!1})},(0,t.jsx)("div",{ref:this.dropZoneRef,className:"toc-item-dropzone h-100 w-100"},(0,t.jsx)("div",{className:"d-flex w-100 h-100",onDoubleClick:this.handleDoubleClickItem,onClick:this.handleClick},(0,t.jsx)("div",{className:`d-flex justify-content-between w-100 toc-item ${x}`},(0,t.jsx)("div",{className:`d-flex toc-item-content ${I} w-100`},(0,t.jsx)(i.Button,{className:"toc-arrow jimu-outline-inside","aria-expanded":n.isExpand,icon:!0,type:"tertiary",onClick:this.handleArrowClick},(0,t.jsx)(f,{className:"toc-arrow-icon",size:"s"})),(0,t.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},(0,t.jsx)("div",{className:"d-flex left-content "+(s?"pr-0":"pr-2")},u&&(0,t.jsx)(i.Icon,{autoFlip:n.needFlip,className:"header-icon",color:b.properties&&(0,h.getThemeColorValue)(b.properties.color,w)||l.colors.palette.dark[600],size:12,icon:b.svg}),(0,t.jsx)("div",{title:n.label,className:"item-label editor",ref:this.editor,onBlur:this.onRenameBlur,contentEditable:n.allowEditable&&a,suppressContentEditableWarning:!0},n.label)),s&&s(n)))),r&&(0,t.jsx)("div",{className:"toc-item-drag",ref:this.dragRef},v&&(0,t.jsx)("div",{className:"d-flex justify-content-between w-100 toc-item"},(0,t.jsx)("div",{className:"d-flex toc-item-content w-100"},(0,t.jsx)(i.Button,{icon:!0,type:"tertiary",className:"toc-arrow"},(0,t.jsx)(f,{className:"toc-arrow-icon",size:"s"})),(0,t.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},(0,t.jsx)("div",{className:"d-flex left-content "+(s?"pr-0":"pr-2")},u&&(0,t.jsx)(i.Icon,{className:"header-icon",size:12,icon:u}),(0,t.jsx)("div",{title:n.label,className:"item-label editor"},n.label)),s&&s(n))))))))}}var b=p(5369),y=p.n(b);const I=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:y()},n))};class x extends t.React.PureComponent{constructor(e){super(e),this.onDropDownToggle=e=>{const{isOpen:t}=this.state;e.stopPropagation(),!this.dontDismiss&&this.setState({isOpen:!t}),this.dontDismiss=!1},this.onItemClick=(e,t)=>{t.autoHide||void 0===t.autoHide?this.setState({isOpen:!1}):this.dontDismiss=!0,t.event(e)},this.state={isOpen:!1}}render(){const{items:e,toggleContent:o,direction:n,disabled:s,title:a,icon:r,caret:l,insideOutline:d=!1}=this.props,{isOpen:c}=this.state;return(0,t.jsx)("div",{className:"d-flex align-items-center"},(0,t.jsx)(i.Dropdown,{direction:n||"down",size:"sm",toggle:this.onDropDownToggle,isOpen:c,useKeyUpEvent:!0},(0,t.jsx)(i.DropdownButton,{title:a,arrow:l,icon:r||void 0===r,disabled:s,size:"sm",type:"tertiary",className:(0,t.classNames)("item-inside-button",{"jimu-outline-inside":d})},o||(0,t.jsx)(I,null)),(0,t.jsx)(i.DropdownMenu,null,e.map(((e,o)=>{var n;return(e.visible||void 0===e.visible)&&(e.isBtn?(0,t.jsx)(t.React.Fragment,{key:o},e.label):(0,t.jsx)(i.DropdownItem,{a11yFocusBack:e.a11yFocusBack,key:o,title:null!==(n=e.title)&&void 0!==n?n:"",className:"no-user-select",onClick:t=>this.onItemClick(t,e)},e.label))})))))}}x.defaultProps={caret:!1};class w extends t.React.PureComponent{constructor(e){super(e),this.onItemClick=(e,t)=>{t.event(e)},this.state={}}render(){const{items:e,toggleContent:o,direction:n,disabled:s,title:a,icon:r,caret:l}=this.props;return(0,t.jsx)(i.DropdownSubMenuItem,{direction:n},(0,t.jsx)(i.DropdownButton,{title:a,arrow:l,icon:r||void 0===r,disabled:s,size:"sm",type:"tertiary"},o||(0,t.jsx)(I,null)),(0,t.jsx)(i.DropdownMenu,null,e.map(((e,o)=>{var n,s;return(e.visible||void 0===e.visible)&&(e.isBtn?(0,t.jsx)(i.DropdownSubMenuItem,{key:o,title:null!==(n=e.title)&&void 0!==n?n:"",onClick:t=>this.onItemClick(t,e)},e.label):(0,t.jsx)(i.DropdownItem,{key:o,title:null!==(s=e.title)&&void 0!==s?s:"",className:"no-user-select",onClick:t=>this.onItemClick(t,e)},e.label))}))))}}class S extends t.React.PureComponent{constructor(){super(...arguments),this.handleArrowClick=e=>{e.stopPropagation();const{handleExpand:t}=this.props;t&&t()},this.getStyle=()=>{const{theme:e,itemJson:o,level:i}=this.props,{mustShowArrow:n,children:s,isActive:a,isExpand:r}=o;return t.css`
      height: ${30}px;
      width: 100%;
      align-items: center;
      border: 0;
      cursor: pointer;

      &.active {
        background-color: ${e.colors.palette.primary[100]};
        border: 0;
      }

      :hover {
        ${a?"":`background-color: ${t.polished.rgba(e.colors.palette.light[400],.4)};`}
      }

      .tree-item-content {
        padding: 0;
        padding-left: ${30*i}px;
        border: 0;

        .tree-arrow {
          visibility: ${n||s&&s.length>0?"visible":"hidden"};
          height: 24px;
          padding-right: 5px;
          padding-left: 5px;
          width: auto;
          display: flex;
          align-self: center;
          align-items: center;
          justify-content: center;
          transform-origin: center;
          transform: ${`rotate(${r?90:0}deg)`};
          transition: transform .5s;
          .tree-arrow-icon {
            fill: ${e.colors.black};
          }
        }

        .left-and-right {
          overflow-x: hidden;
          .left-content {
            align-items: center;
            overflow-x: hidden;
            flex: auto;
            .item-label{
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: ${.875}rem;
              text-align: start;
            }
            .header-icon {
              margin-right: 0.5rem;
              fill: ${e.colors.black};
            }
          }
        }
      }
    `}}render(){const{itemJson:e,renderRightContent:o,renderHeaderContent:n,arrowIcon:s}=this.props,{icon:a,isActive:r}=e;return(0,t.jsx)("div",{className:`d-flex ${r?"active":""} tree-item-common`,css:this.getStyle()},(0,t.jsx)("div",{className:"d-flex tree-item-content w-100"},(0,t.jsx)("div",{className:"tree-arrow",onClick:this.handleArrowClick},s?s(e):(0,t.jsx)(f,{className:"tree-arrow-icon",size:"s"})),(0,t.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},n?n(e):(0,t.jsx)("div",{className:"d-flex left-content "+(o?"pr-0":"pr-2")},a&&(0,t.jsx)(i.Icon,{className:"header-icon",size:12,icon:a}),(0,t.jsx)("div",{title:e.label,className:"item-label"},e.label)),o&&o(e))))}}class C extends t.React.PureComponent{constructor(e){super(e),this.handleClickItem=(e,t=!1)=>{this.setState({isKeyboardMode:t});const{onClickItem:o,itemJson:i}=this.props;o&&o(i,e)},this.shouldHandleKeyEvent=e=>"true"!==e.target.contentEditable&&("Enter"===e.key||" "===e.key),this.handleKeydownItem=e=>{this.shouldHandleKeyEvent(e)?e.preventDefault():"Tab"===e.key&&this.setState({isKeyboardMode:!0})},this.handleKeyUpItem=e=>{this.shouldHandleKeyEvent(e)&&(e.preventDefault(),this.handleClickItem(e,!0))},this.getStyle=e=>this.state.isKeyboardMode?t.css`
        &.jimu-tree-item{
          padding: 0;
          margin: 0;
          border: 0;
          &:focus,
          &:focus-within {
            .item-inside-button {
              display: inline-flex;

              &.page-item-home-btn {
                display: ${e===t.PageType.Normal?"inline-flex":"none"}
              }
            }

            .item-action-button {
              display: block;
              .dropDown .btn {
                visibility: visible;
              }
            }
          }
        }
      `:t.css`
        &.jimu-tree-item{
          padding: 0;
          margin: 0;
          border: 0;
        }
      `,this.state={isFocus:!1,isKeyboardMode:!1}}render(){var e;const{itemJson:o,theme:n,level:s,handleExpand:a}=this.props,{renderItem:r,renderHeaderContent:l,renderRightContent:d,arrowIcon:c,className:p}=o;return(0,t.jsx)(i.ListGroupItem,{css:this.getStyle(null===(e=null==o?void 0:o.data)||void 0===e?void 0:e.type),role:"menuitem",tabIndex:0,"aria-checked":o.isActive,"aria-label":o.label,onClick:this.handleClickItem,onKeyDown:this.handleKeydownItem,onKeyUp:this.handleKeyUpItem,className:(0,t.classNames)("jimu-tree-item","d-flex","jimu-outline-inside",p||"")},(0,t.jsx)("div",{className:"w-100",ref:e=>{this.itemRef=e}},r?r(o):(0,t.jsx)(S,{itemJson:o,level:s,renderHeaderContent:l,renderRightContent:d,arrowIcon:c,theme:n,handleExpand:a})))}}class P extends t.React.PureComponent{constructor(e){var o;super(e),this.handleSingleClick=(e,t)=>{const{onClickItem:o}=this.props;o&&o(e,t)},this.handleExpand=()=>{const{handleExpand:e}=this.props;let{itemJson:t}=this.props;t=t.set("isExpand",!t.isExpand),e&&e(t)},this.renderSubItemsTimeout=void 0,this.SingleTreeItem=({itemJson:e,level:o})=>t.React.createElement(C,{key:e.id,itemJson:e,level:o,handleExpand:this.handleExpand,onClickItem:this.handleSingleClick,theme:this.props.theme}),this.state={renderSubItems:null===(o=e.itemJson)||void 0===o?void 0:o.isExpand}}componentDidUpdate(e){const{itemJson:t}=this.props,{itemJson:o}=e;(null==t?void 0:t.isExpand)!==(null==o?void 0:o.isExpand)&&(this.renderSubItemsTimeout&&(clearTimeout(this.renderSubItemsTimeout),this.renderSubItemsTimeout=void 0),(null==t?void 0:t.isExpand)?this.setState({renderSubItems:!0}):this.renderSubItemsTimeout=setTimeout((()=>{this.setState({renderSubItems:!1})}),1e3))}render(){const{itemJson:e,level:o}=this.props,{SingleTreeItem:n}=this,{renderSubItems:s}=this.state;return t.React.createElement(t.React.Fragment,null,t.React.createElement(n,{key:e.id,itemJson:e,level:o}),e.children&&e.children.length>0&&t.React.createElement("div",{className:"out-container"},t.React.createElement("div",{className:"in-container"},t.React.createElement(i.Collapse,{isOpen:e.isExpand,role:"group"},s&&this.props.children))))}}const D=(e,t)=>t.label.toLocaleLowerCase().includes(e.toLocaleLowerCase()),T=(e,t,o)=>o(t,e)||e.children&&e.children.length&&!!e.children.find((e=>T(e,t,o))),j=(e,o,i=D)=>{if(i(o,e)||!e.children)return e;const n=e.children.filter((e=>T(e,o,i))).map((e=>j(e,o,i)));return(0,t.Immutable)(Object.assign({},e,{children:n}))},k=(e,o,i=D)=>{let n=e.children;if(!n||0===n.length)return(0,t.Immutable)(Object.assign({},e,{isExpand:!1}));const s=n.filter((e=>T(e,o,i))),a=s.length>0;return a&&(n=s.map((e=>k(e,o,i)))),(0,t.Immutable)(Object.assign({},e,{children:n,isExpand:a}))},O=(e,t)=>{const o=e.children;o&&o.length>0&&o.forEach(((o,i)=>{e=e.setIn(["children",i],O(o,t))}));const i=t.includes(e.id);return e.set("isExpand",i)},A=(e,t)=>{const o=e.children;o&&o.length>0&&o.forEach(((o,i)=>{e=e.setIn(["children",i],A(o,t))}));const i=t.includes(e.id);return e.set("isActive",i)},M=(e,t)=>{if(!e)return null;let o=null==e?void 0:e.children;o&&o.length>0&&o.forEach(((o,i)=>{e=e.setIn(["children",i],M(o,t))})),o=null==e?void 0:e.children;const i=t.includes(null==e?void 0:e.id),n=(null==e?void 0:e.isExpand)||B(o);return e.set("isActive",i).set("isExpand",n)},R=e=>{if(!e)return[];const t=[],o=null==e?void 0:e.children;return o&&o.length>0&&o.forEach((e=>t.push(...R(e)))),(null==e?void 0:e.isExpand)&&t.push(null==e?void 0:e.id),t},B=e=>!!e&&!!e.find((e=>e.isActive||B(e.children)));class N extends t.React.PureComponent{constructor(e){super(e),this.handleSingleClick=(e,t)=>{const{onClickItem:o}=this.props;o&&o(e,t)},this.handleExpand=e=>{const{handleExpand:t}=this.props;t&&t(e)},this.renderItemJson=e=>t.React.createElement(P,{key:e.id,handleExpand:this.handleExpand,itemJson:e,onClickItem:this.handleSingleClick,theme:this.props.theme},e.children&&e.children.map((e=>this.renderItemJson(e)))),this.state={itemJsons:e.itemJsons}}render(){const{itemJson:e,className:o,hideRoot:i,forwardRef:n}=this.props;return t.React.createElement("div",{className:(0,t.classNames)("jimu-tree",o),ref:n},i?e&&e.children&&e.children.map((e=>this.renderItemJson(e))):this.renderItemJson(e))}}const L=(0,h.withTheme)(N);class E extends t.React.PureComponent{constructor(e){super(e),this.handleCloseBtn=()=>{this.isActionClick=!1,this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e()},this.handleActionClick=()=>{this.isActionClick=!0,this.setState({isOpen:!1});const{toggle:e,isOpen:t}=this.props;void 0!==t&&e&&e()},this.handleToggle=()=>{const{isOpen:e,tapBlankClose:t}=this.props;if(!t)return;this.setState({isOpen:!e});const{toggle:o,isOpen:i}=this.props;void 0!==i&&o&&o()},this.onModalClosed=()=>{const{onClosed:e}=this.props;e&&e(this.isActionClick),this.isActionClick=!1},this.formatMessage=e=>{const o=Object.assign({},r,t.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:o[e]})},this.getStyle=()=>{const e=this.props.theme;return t.css`
      .modal-header {
        .close {
          color: ${e.colors.palette.dark[600]};
          opacity: 1;
          transition: color .15s ease-in-out;
          &:not(:disabled):not(.disabled):hover,
          &:not(:disabled):not(.disabled):focus {
            opacity: 1;
          }
        }
      }
      .modal-body{
        overflow-y: auto;
        max-height: 360px;
      }
      .modal-content{
        width: auto;
      }
      .modal-footer{
        .btn {
          min-width: 80px;
          + .btn {
            margin-left: 10px;
          }
        }
      }
      &.modal-dialog{
        width: auto;
      }
      .choose-template-description{
        width: 100%;
        font-size: ${14/17}rem;
        user-select:none;
      }
    `},this.state={isOpen:!!e.isOpen}}componentDidUpdate(e){const{isOpen:t}=e;void 0!==t&&void 0===this.props.isOpen&&this.setState({isOpen:t})}render(){let{isOpen:e}=this.props;const{isRemove:o}=this.props;return e=void 0===e?this.state.isOpen:e,(0,t.jsx)(i.Modal,{css:this.getStyle(),isOpen:e,onClosed:this.onModalClosed,toggle:this.handleToggle,centered:!0},(0,t.jsx)(i.ModalHeader,{tag:"h4",toggle:this.handleCloseBtn},this.props.title),(0,t.jsx)(i.ModalBody,null,(0,t.jsx)("div",{style:{marginLeft:"10px"}},this.props.children)),(0,t.jsx)(i.ModalFooter,null,(0,t.jsx)(i.Button,{type:o?"danger":"primary",onClick:this.handleActionClick},o?this.formatMessage("delete"):this.formatMessage("certainly")),(0,t.jsx)(i.Button,{onClick:this.handleCloseBtn},this.formatMessage("cancel"))))}}const z=t.React.forwardRef(((e,o)=>{const{onKeyDown:n,onClick:s}=e,a=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["onKeyDown","onClick"]);return t.React.createElement(i.Button,Object.assign({ref:o},a,{onClick:s,onKeyDown:e=>{!s||"Enter"!==e.key&&" "!==e.key||e.preventDefault()},onKeyUp:e=>{!s||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),s(e))}}))}));var J=p(6593),F=p.n(J);const $=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:F()},n))};var H=p(9788),V=p.n(H);const U=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:V()},n))};var W=p(2640),G=p.n(W);const Z=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:G()},n))};var _=p(5467),K=p.n(_);const q=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:K()},n))};var X=p(9775),Y=p.n(X);const Q=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:Y()},n))},ee=(0,t.jsx)(U,{className:"add-page-more-icon"}),te=Object.assign({},r,t.defaultMessages,a.defaultMessages,i.defaultMessages),oe={value:"",openType:s.OpenTypes.NewWindow,linkType:t.LinkType.WebAddress};let ie;const ne=[{name:"offset",options:{offset:[0,10]}}];class se extends t.React.PureComponent{constructor(e){super(e),this.linkSettingTrigger=t.React.createRef(),this.getTotalLines=()=>{const{itemJson:e}=this.state;let t=0;return e.children&&e.children.forEach((e=>{var o,i;t++,e.isExpand&&(t+=null!==(i=null===(o=e.children)||void 0===o?void 0:o.length)&&void 0!==i?i:0)})),t},this.getTreeContentHeight=()=>30*this.getTotalLines(),this.handleOnTocDragStatusChange=e=>{this.setState({isTocDragging:e,itemJson:this.getItemJsonByPages()})},this.handleOnTocDraggingStatusChange=e=>{this.setState({tocDraggingStatus:e,itemJson:this.getItemJsonByPages()})},this.handleChooseTemplate=e=>{this.setState({isTemplatePopoverOpen:!1}),this.props.addPageWithType("page",e)},this.handleToggleTemplatePopover=()=>{const{isTemplatePopoverOpen:e}=this.state;this.setState({isTemplatePopoverOpen:!e})},this.closeTemplatePopover=()=>{this.state.isTemplatePopoverOpen&&(this.templateBtn.focus(),this.setState({isTemplatePopoverOpen:!1}))},this.handleRemovePage=e=>{(0,o.getAppConfigAction)().appConfig.pageStructure.find((t=>t[e.id]&&t[e.id].length>0))?(this.setState({willRemovePage:e}),this.handleToggleRemovePopover()):(ie===e.id&&this.setState({isShowLinkSetting:!1}),this.props.removePage(e.id))},this.handleToggleRemovePopover=()=>{const{isRemovePopoverOpen:e}=this.state;this.setState({isRemovePopoverOpen:!e})},this.singleAndDoubleClickTimeout=void 0,this.handleClickItem=e=>{e.data.type!==t.PageType.Folder&&e.data.type!==t.PageType.Link&&(this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),this.singleAndDoubleClickTimeout=setTimeout((()=>{this.setState({currentSelectedItemId:e.id,itemJson:M(this.state.itemJson,[e.id])},(()=>{this.props.onClickPage(e.data.id)}))}),200))},this.handleOnTocDoubleClick=(e,t)=>{this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),this.props.changeEditablePageItemId(e.id),t.stopPropagation()},this.handleOnSetLinkClick=(e,t)=>{ie&&e.data.id===ie&&this.state.isShowLinkSetting||(ie=e.data.id,this.resetLinkParam(ie),this.state.isShowLinkSetting?this.setState({isShowLinkSetting:!1},(()=>{this.setState({isShowLinkSetting:!0})})):this.setState({isShowLinkSetting:!0}),t.stopPropagation())},this.handleExpand=e=>{if((!e.children||e.children.length<1)&&!e.mustShowArrow)return;const{expandIds:t}=this;e.isExpand?t.includes(e.id)&&t.splice(t.indexOf(e.id),1):t.includes(e.id)||t.push(e.id),this.setState({itemJson:O(this.state.itemJson,t)})},this.handleArrowClick=e=>{this.handleExpand(e)},this.handleSearchTextChange=e=>{this.setState({filterText:e},(()=>{this.setState({itemJson:this.getItemJsonByPages()})}))},this.handleSearchSubmit=e=>{this.setState({filterText:e},(()=>{this.setState({itemJson:this.getItemJsonByPages()})}))},this.handleSearchBtnClick=e=>{e.stopPropagation();const{showSearch:t}=this.state;t?this.handleSearchTextChange(""):this.searchInput&&(this.searchInput.focus(),this.searchInput.select()),this.setState({showSearch:!t})},this.handleSettingLinkConfirm=e=>{this.setState({isShowLinkSetting:!1}),this.changeUrl(e.value,e.openType)},this.changeUrl=(e,i)=>{const{pages:n}=this.props,s=n[ie],a=(0,t.Immutable)(s).merge({linkUrl:e||"#",openTarget:i});(0,o.getAppConfigAction)().editPage(a).exec(),oe.value=e,oe.openType=i},this.renamePage=(e,t)=>(this.props.changeEditablePageItemId(""),!!(t=null==t?void 0:t.trim())&&this.props.renamePage(e.data.id,t)),this.getFirstItemJson=()=>{const{itemJson:e}=this.state;return e.children[0]},this.getLastItemJson=()=>{const{itemJson:e}=this.state;let t=e.children[e.children.length-1];return t.isExpand&&t.children&&t.children.length>0&&(t=t.children[t.children.length-1]),t},this.getLastParentItemJson=()=>{const{itemJson:e}=this.state;return e.children[e.children.length-1]},this.onDidDrop=(e,o,i)=>{t.lodash.defer((()=>{if(this.treeRef.querySelectorAll(".toc-item-drag").forEach((e=>{e.setAttribute("data-itemJson",null)})),"moveInto"===i){this.props.movePageIntoPage(e.data.id,o.data.id);const{expandIds:t}=this;t.includes(o.id)||(t.push(o.id),this.setState({itemJson:O(this.state.itemJson,t)}))}else this.props.reOrderPage(e.data.id,o.data.id,i)}))},this.canDragFunc=e=>!0,this.canDropFunc=(e,t)=>e.id!==t.id,this.canDropIntoFunc=(e,i)=>{const n=(0,o.getAppConfigAction)().appConfig;return o.appConfigUtils.isFirstLevelPage(n,i.id)&&!o.appConfigUtils.isPageHasSubPage(n,e.id)&&e.type!==t.PageType.Folder},this.canOrderFunc=(e,i)=>{const n=(0,o.getAppConfigAction)().appConfig;return!(e.type===t.PageType.Folder&&!o.appConfigUtils.isFirstLevelPage(n,i.id))},this.formatMessage=(e,t)=>this.props.intl.formatMessage({id:e,defaultMessage:te[e]},t),this.getItemJsonByPageJson=(e,i,n)=>{const s=e.id,{expandIds:a}=this,{currentPageItemId:r}=this.props,l=a.includes(s),d={id:s,data:e,label:e.label,index:i,level:n,isActive:r===s,isExpand:l,mustShowArrow:e.type===t.PageType.Folder,showDefault:e.type===t.PageType.Normal,allowEditable:!0,renderItem:this.renderPageContent};return d.icon=e.icon,d.icon||(d.icon=o.utils.getDefaultTocPageIcon(e)),d},this.getItemJsonByPages=(e,i)=>{e||(e=this.props.pages),i||(i=this.props.pageStructure);const n={id:"ROOT",children:[],label:""};if(!e||!i)return(0,t.Immutable)(n);let s=i.map(((t,o)=>{const i=Object.keys(t)[0],n=e[i],s=this.getItemJsonByPageJson(n,o,0),a=t[i];return s.children=[],a.forEach(((t,o)=>{const i=e[t],n=this.getItemJsonByPageJson(i,o,1);s.children.push(n)})),s}));if(this.props.isPageTemplateLoading){const e=(0,o.getAppConfigAction)().appConfig,n={id:o.appConfigUtils.getUniqueId(e,"page"),label:o.appConfigUtils.getUniqueLabel(e,"page",this.formatMessage("page")),type:t.PageType.Normal},a=this.getItemJsonByPageJson(n,i.length,0);a.children=[],s=s.asMutable({deep:!0}),s.push(a)}n.children=s;let a=(0,t.Immutable)(n);const{filterText:r}=this.state;if(r&&""!==r){const e=j(a,r.trim());a=k(e,r.trim())}return a},this.getMoreDropDownItems=e=>{const i=e.data,n=[],s=(0,t.Immutable)({a11yFocusBack:!1,label:this.formatMessage("rename"),event:t=>{this.handleOnTocDoubleClick(e,t)},visible:!0});n.push(s);const a=(0,t.Immutable)({label:this.formatMessage("tocSetLink"),event:t=>{this.handleOnSetLinkClick(e,t)},visible:i.type===t.PageType.Link});n.push(a);const r=(0,t.Immutable)({label:this.formatMessage("duplicate"),event:e=>{e.stopPropagation(),this.props.duplicatePage(i.id)},visible:!0});n.push(r);const l=(0,o.getAppConfigAction)().appConfig,d=(l?o.appConfigUtils.getRealPageCountExcludeOnePage(l,i.id):0)<1,c=(0,t.Immutable)({label:this.formatMessage("delete"),event:e=>{this.handleRemovePage(i),e.stopPropagation()},visible:!d});return n.push(c),n},this.getAddPageDropDownItems=()=>{const{addPageWithType:e}=this.props,o=[],i=(0,t.Immutable)({label:this.formatMessage("addLink"),a11yFocusBack:!1,event:t=>{ie=e("link").id,this.resetLinkParam(ie),this.setState({isShowLinkSetting:!0}),t.stopPropagation()},visible:!0});o.push(i);const n=(0,t.Immutable)({label:this.formatMessage("addFolder"),a11yFocusBack:!1,event:t=>{e("folder"),t.stopPropagation()},visible:!0});return o.push(n),o},this.renderPageItemRightContent=e=>{const{theme:n,onDefaultClick:s}=this.props,{data:a}=e,r=this.getMoreDropDownItems(e),l=t.css`
      margin-right: calc(16px - ${n.components.button.sizes.sm.paddingX});
      .page-item-visible-btn {
        display: ${a.isVisible?"none":"inline-flex"};
      }

      .page-item-home-btn {
        display: ${e.showDefault&&a.isDefault?"inline-flex":"none"};
        color: ${e.showDefault&&a.isDefault?n.colors.black:n.colors.palette.dark[600]};
        &:hover {
          color: ${n.colors.black};
        }
      }

      .dropDown {
        display: inline-flex;
        .btn {
          display: none;
        }
      }

    `;return(0,t.jsx)("div",{className:"d-flex",css:l},(0,t.jsx)(i.Tooltip,{placement:"bottom",title:this.formatMessage("makeHome")},(0,t.jsx)(z,{size:"sm",icon:!0,type:"tertiary","aria-label":this.formatMessage("makeHome"),className:"page-item-home-btn page-item-icon item-inside-button jimu-outline-inside",onClick:e=>{e.stopPropagation(),a.isDefault||s(a.id)}},(0,t.jsx)(Z,null))),(0,t.jsx)(i.Tooltip,{placement:"bottom",title:a.isVisible?this.formatMessage("hideFromMenu"):this.formatMessage("showFromMenu")},(0,t.jsx)(z,{size:"sm",type:"tertiary",icon:!0,"aria-label":a.isVisible?this.formatMessage("hideFromMenu"):this.formatMessage("showFromMenu"),className:"page-item-visible-btn page-item-icon item-inside-button jimu-outline-inside",onClick:t=>{t.stopPropagation(),(0,o.getAppConfigAction)().editPageProperty(a.id,"isVisible",!e.data.isVisible).exec()}},a.isVisible?(0,t.jsx)(q,null):(0,t.jsx)(Q,null))),(0,t.jsx)("div",{title:this.formatMessage("more"),className:"dropDown page-item-icon",ref:this.linkSettingTrigger},(0,t.jsx)(x,{modifiers:ne,direction:"down",theme:n,items:r,insideOutline:!0})))},this.renderPageContent=e=>{var o,i,n;const{intl:s,theme:a,editablePageItemId:r}=this.props,{isTocDragging:l,tocDraggingStatus:d}=this.state,c=null===(o=this.treeRef)||void 0===o?void 0:o.getBoundingClientRect();return(0,t.jsx)(v,{intl:s,itemJson:e,theme:a,canDnd:!0,isFirstItem:this.getFirstItemJson().id===e.id,editable:r===e.id,onArrowClick:this.handleArrowClick,isLastItem:this.getLastItemJson().id===e.id,isTocDragging:l,onTocDragStatusChage:this.handleOnTocDragStatusChange,tocDraggingStatus:d,parentBoundTop:null!==(i=null==c?void 0:c.top)&&void 0!==i?i:-1,renderRightContent:this.renderPageItemRightContent,renameItem:this.renamePage,parentBoundBottom:null!==(n=null==c?void 0:c.bottom)&&void 0!==n?n:-1,canDropIntoFunc:this.canDropIntoFunc,onDidDrop:this.onDidDrop,canDragFunc:this.canDragFunc,canDropFunc:this.canDropFunc,canOrderFunc:this.canOrderFunc,onDoubleClick:this.handleOnTocDoubleClick})},this.getLinkSettingPopup=(e,o,i)=>{var n,a,r,l,d,c;return e&&(null===(n=null==i?void 0:i.pages)||void 0===n?void 0:n[ie])&&!(null===(a=t.urlUtils.getAppIdPageIdFromUrl())||void 0===a?void 0:a.pageId)&&o?(0,t.jsx)(s.LinkSettingPopup,{isOpen:e&&!(null===(r=t.urlUtils.getAppIdPageIdFromUrl())||void 0===r?void 0:r.pageId),isLinkPageSetting:!0,title:null===(d=null===(l=null==i?void 0:i.pages)||void 0===l?void 0:l[ie])||void 0===d?void 0:d.label,pisition:"left",linkParam:(0,t.Immutable)(oe),onSettingCancel:()=>{this.setState({isShowLinkSetting:!1})},onSettingConfirm:this.handleSettingLinkConfirm,trigger:null===(c=this.linkSettingTrigger)||void 0===c?void 0:c.current}):(!o&&e&&setTimeout((()=>{this.setState({isShowLinkSetting:!1})})),null)},this.getWillRemovePageSubCount=()=>{const e=(0,o.getAppConfigAction)().appConfig,{willRemovePage:t}=this.state;if(!e||!t)return 0;const i=e.pageStructure.find((e=>Object.keys(e)[0]===t.id));return i?i[t.id].length:0},this.onExportClick=e=>{const{currentPageItemId:t}=this.props,i=(0,o.getAppConfigAction)().appConfig,n=[{layout:i.pages[t].layout,layouts:i.layouts,widgets:i.widgets,views:i.views,sections:i.sections,name:"Column layout",description:"Align widgets by columns",thumbnail:"./thumbnails/image2.png"}],s=n[0];s.layouts&&Object.keys(s.layouts).forEach((e=>{let t=s.layouts[e].without("id");t.content&&Object.keys(t.content).forEach((e=>{const o=t.content[e].without("id");t=t.setIn(["content",e],o)})),s.layouts=s.layouts.set(e,t)})),s.widgets&&Object.keys(s.widgets).forEach(((e,t)=>{const o=s.widgets[e];s.widgets=s.widgets.set(e,o.without("context","icon","label","manifest","_originManifest","version","useDataSources","useDataSourcesEnabled"))})),s.sections&&Object.keys(s.sections).forEach(((e,t)=>{const o=s.sections[e];s.sections=s.sections.set(e,o.without("id","label"))})),s.views&&Object.keys(s.views).forEach(((e,t)=>{const o=s.views[e];s.views=s.views.set(e,o.without("id","label"))})),console.log(JSON.stringify({pages:n}))},this.expandIds=[],this.state={currentSelectedItemId:e.currentPageItemId,filterText:"",itemJson:void 0,showSearch:!1,isTemplatePopoverOpen:!1,isTocDragging:!1,isRemovePopoverOpen:!1,willRemovePage:void 0,tocDraggingStatus:"on",isShowLinkSetting:!1},this.addPageDropdownItems=this.getAddPageDropDownItems()}componentWillUnmount(){this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}componentDidUpdate(e){const t=this.props;let o=!1,i={};const{pages:n,pageStructure:s,currentPageItemId:a,editablePageItemId:r,isPageTemplateLoading:l}=e;if(t.currentPageItemId!==a||t.pages!==n||t.pageStructure!==s||t.editablePageItemId!==r||t.isPageTemplateLoading!==l)if(o=!0,t.pages===n&&s===t.pageStructure&&t.editablePageItemId===r||t.currentPageItemId===a)if(t.currentPageItemId!==a){const e=M(this.state.itemJson,[t.currentPageItemId]);i={currentSelectedItemId:t.currentPageItemId,itemJson:M(this.state.itemJson,[t.currentPageItemId])},this.expandIds=R(e)}else i={itemJson:this.getItemJsonByPages(t.pages,t.pageStructure)};else{const e=M(this.getItemJsonByPages(t.pages,t.pageStructure),[t.currentPageItemId]);i={currentSelectedItemId:t.currentPageItemId,itemJson:e},this.expandIds=R(e)}o&&this.setState(i)}componentDidMount(){this.setState({itemJson:this.getItemJsonByPages()}),this.dropZoneRef&&(this.dropZoneInteractable=(0,l.interact)(this.dropZoneRef).dropzone({accept:".toc-item-drag",overlap:"pointer",ondragenter:e=>{const{itemJson:t}=this.state;if(t&&this.treeRef){const{relatedTarget:t,dragEvent:o}=e,i=this.treeRef.getBoundingClientRect().top,n=this.getTreeContentHeight(),s=JSON.parse(t.getAttribute("data-itemJson")),a=o.client;a.y<=i?this.getFirstItemJson().data.id!==s.data.id&&this.handleOnTocDraggingStatusChange("top"):a.y<=n+i?this.handleOnTocDraggingStatusChange("on"):this.getLastParentItemJson().data.id!==s.data.id&&this.handleOnTocDraggingStatusChange("bottom")}},ondragleave:e=>{this.handleOnTocDraggingStatusChange("on")},ondrop:e=>{const t=this.state.tocDraggingStatus;if("on"===t)return;let o;o="bottom"===t?this.getLastParentItemJson():this.getFirstItemJson();const i=e.relatedTarget,n=JSON.parse(i.getAttribute("data-itemJson"));this.onDidDrop(n,o,t),this.handleOnTocDraggingStatusChange("on")},ondropdeactivate:e=>{}}))}resetLinkParam(e){const{pages:t}=this.props;oe.value="",oe.openType=s.OpenTypes.NewWindow;const o=t[e];o&&o.linkUrl&&"#"!==o.linkUrl&&(oe.value=o.linkUrl),o&&o.openTarget&&(oe.openType=o.openTarget)}render(){const{itemJson:e,willRemovePage:n,isShowLinkSetting:a}=this.state,{theme:r,isPageSectionNav:l}=this.props,d=(0,o.getAppConfigAction)().appConfig,c=t.css`
      height: 100%;
      position: relative;
      .toc-dropzone {
        position: absolute;
        pointer-events: none;
      }
      .text-data-600{
        color: ${r.colors.palette.dark[600]};
      }
      .page-list-top {
        position: absolute;
        right: 15px;
        top: -48px;
        .page-top-btns {
          margin-right: -${r.components.button.sizes.sm.paddingX};

          .my-dropdown {
            margin-left: -5px;
            margin-right: 5px;
          }
        }
      }
      .page-tree {
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        .toc-item-dropzone {
          .toc-item {
            /* padding-left: ${t.polished.rem(4)}; */
          }
        }
      }
    `;return(0,t.jsx)("div",{css:c},(0,t.jsx)("div",{ref:e=>{this.dropZoneRef=e},className:"toc-dropzone h-100 w-100"}),(0,t.jsx)("div",{className:"page-list-top"},(0,t.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},(0,t.jsx)("div",{className:"d-flex page-top-btns align-items-center"},(0,t.jsx)("div",{ref:e=>{this.addPageRef=e},css:t.css`z-index: 11;`},(0,t.jsx)(i.Tooltip,{placement:"bottom",title:this.formatMessage("addPage")},(0,t.jsx)(i.Button,{icon:!0,disabled:!e,type:"tertiary","aria-label":this.formatMessage("addPage"),ref:e=>{this.templateBtn=e},onClick:this.handleToggleTemplatePopover,size:"sm",className:"add-page-btn"},(0,t.jsx)($,{className:"add-page-icon"})))),this.state.isTemplatePopoverOpen&&(0,t.jsx)(s.PageTemplatePopper,{theme:r,referenceElement:this.addPageRef,formatMessage:this.formatMessage,onItemSelect:this.handleChooseTemplate,onClose:this.closeTemplatePopover}),(0,t.jsx)("div",{title:this.formatMessage("more"),className:"dropDown page-item-icon"},(0,t.jsx)(x,{items:this.addPageDropdownItems,theme:r,disabled:!e,direction:"down",toggleContent:ee}))))),(0,t.jsx)(L,{forwardRef:e=>{this.treeRef=e},className:"page-tree mt-2",hideRoot:!0,itemJson:e,onClickItem:this.handleClickItem,handleExpand:this.handleExpand}),n&&(0,t.jsx)(E,{isRemove:!0,theme:r,tapBlankClose:!1,toggle:this.handleToggleRemovePopover,onClosed:e=>{ie===n.id&&this.setState({isShowLinkSetting:!1}),e&&n&&this.props.removePage(n.id)},title:this.formatMessage("delete"),isOpen:this.state.isRemovePopoverOpen,intl:this.props.intl},this.formatMessage("removePageTip",{subCount:this.getWillRemovePageSubCount(),label:n.label})),this.getLinkSettingPopup(a,l,d))}}const ae=t.ReactRedux.connect((e=>{var t,o,i;const n=e.appStateInBuilder&&e.appStateInBuilder.appConfig;return{pages:n&&n.pages,pageStructure:n&&n.pageStructure,isPageSectionNav:"page"===(null===(i=null===(o=null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos)||void 0===o?void 0:o["opts-section"])||void 0===i?void 0:i.currentViewId)}}))(se);var re=p(2986);class le extends c{constructor(e){super(e),this.onDropHover=e=>{this.state.dropType!==e&&this.setState({dropType:e})},this.getStyle=()=>{var e;const o=(0,t.getAppStore)().getState(),i=null===(e=null==o?void 0:o.appContext)||void 0===e?void 0:e.isRTL,{theme:n,editable:s,itemJson:a,isTocDragging:r}=this.props,{mustShowArrow:l,children:d,level:c,isActive:p,isExpand:g}=a,{isDragging:h,isHovering:u}=this.state;return t.css`
      height: ${30}px;
      width: auto;
      min-width: 100%;
      align-items: center;
      cursor: pointer;
      ${h?"z-index: 100;":""}

      &.drag-move-into {
        border: 1px solid ${n.colors.palette.primary[700]};
      }

      :hover {
        ${p||r?"":`background-color: ${n.colors.palette.light[400]};`}
        .dialog-item-splash-btn, .dialog-item-page-btn {
          display: inline-flex;
          z-index: 2;
        }
        .dropDown {
          .btn {
            display: inline-flex;
          }
          z-index: 2;
        }
      }

      &.active {
        ${r?"":`background-color: ${n.colors.primary};`}
        border: 0;
      }

      .toc-dialog-dropzone {
        touch-action: none;
        position: relative;

        .toc-dialog-drag:hover {
          cursor: pointer !important;
        }

        .toc-dialog-drag {
          pointer-events: ${u?"all":"none"};
          visibility: ${a.allowEditable&&s?"hidden":"visible"};
          z-index: 1;
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: ${h?t.polished.rgba(n.colors.palette.light[400],.6):"transparent"};
          box-shadow: ${h?n.boxShadows.lg:n.boxShadows.none};
        }

        .toc-item {
          padding: 0;
          border: 0;
          position: relative;
          .toc-item-content {
            margin-left: ${10*c}px;
            position: relative;
            .toc-arrow {
              z-index: 2;
              padding-right: ${t.polished.rem(1)};
              visibility: hidden;
               /* ${l||d&&d.length>0?"visible":"hidden"}; */

              .toc-arrow-icon {
                fill: ${n.colors.black};
                transform-origin: center;
                transform: ${`rotate(${g?90:i?180:0}deg)`};
                transition: transform .5s;
              }
            }

            .left-and-right {
              overflow-x: hidden;
              margin-left: -5px;
              .left-content {
                align-items: center;
                overflow-x: hidden;
                flex: auto;
                .editor {
                  overflow: hidden;
                  text-overflow: ${s?"clip":"ellipsis"};
                  white-space: nowrap;
                  font-size: ${.875}rem;
                  user-select: none;
                  flex: auto;
                  text-align: start;
                }
                [contenteditable="true"] {
                  user-select: text;
                  -webkit-user-select: text;
                  background-color: ${n.colors.white};
                }
                .header-icon {
                  margin-right: 0.3rem;
                  flex: none;
                }
              }
            }
          }

          &.toc-drag-move-last {
            :after{
              content: '';
              position: absolute;
              left: 0;
              top: auto;
              bottom: 0;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${n.colors.palette.primary[700]};
            }
          }

          &.toc-drag-move-first {
            :before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: auto;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: red;
              /* ${n.colors.palette.primary[700]}; */
            }
          }

          .drag-move-out-order-bottom {
            :after{
              content: '';
              position: absolute;
              left: 0;
              top: auto;
              bottom: 0;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${n.colors.palette.primary[700]};
            }
          }

          .drag-move-out-order-top {
            :before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: auto;
              right: auto;
              height: 2px;
              width: 100%;
              background-color: ${n.colors.palette.primary[700]};
            }
          }
        }
      }
    `},this.state={dropType:"none",isDragging:!1,isHovering:!1},this.dropZoneRef=t.React.createRef(),this.dragRef=t.React.createRef()}componentWillUnmount(){this.dragInteractable&&(this.dragInteractable.unset(),this.dragInteractable=null),this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}componentDidMount(){super.componentDidMount(),this.initDragEvent()}componentDidUpdate(e){super.componentDidUpdate(e)}initDragEvent(){var e;const{canDnd:o,canDropFunc:i,onDidDrop:n,itemJson:s}=this.props;if(o&&this.dropZoneRef.current&&this.dragRef.current){let o=null;this.dragRef.current.setAttribute("itemJson",JSON.stringify(s));const a=(null===(e=s.data)||void 0===e?void 0:e.mode)===t.DialogMode.Fixed?".toc-fixed-dialog-drag":".toc-anchored-dialog-drag";this.dropZoneInteractable=(0,l.interact)(this.dropZoneRef.current).dropzone({accept:a,overlap:"pointer",ondropmove:e=>{const t=e.relatedTarget,o=e.target,n=JSON.parse(t.getAttribute("itemJson"));if(!i||!i(s.data,n.data))return;const a=o.getBoundingClientRect(),r=a.bottom-a.top,l=2*r/3,d=1*r/3,c=e.dragEvent.client.y-a.top;let p=this.state.dropType;c>l?p="bottom":c<d&&(p="top"),this.onDropHover(p)},ondragleave:e=>{this.onDropHover("none")},ondrop:e=>{const t=this.state.dropType;if("none"===t)return;const o=e.relatedTarget,i=JSON.parse(o.getAttribute("itemJson"));n&&n(i,s,t),this.onDropHover("none")}}),this.dragInteractable=(0,l.interact)(this.dragRef.current).draggable({inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{this.setState({isDragging:!0});const{onTocDragStatusChage:t}=this.props;t&&t(!0)},onmove:e=>{const{clientX:t,clientY:i,clientX0:n,clientY0:s,target:a}=e,r=parseFloat(a.getAttribute("start-x"))||0,l=parseFloat(a.getAttribute("start-y"))||0;let d=t-n+r,c=i-s+l;const p=-a.clientWidth/2,g=a.clientWidth/2;d<p?d=p:d>g&&(d=g);const{parentBoundBottom:h,parentBoundTop:u}=this.props;if(h>-1&&u>-1){const e=u-s,t=h-s;c<=e?c=e:c>=t&&(c=t)}o&&cancelAnimationFrame(o),o=requestAnimationFrame((()=>{a.style.webkitTransform=a.style.transform="translate("+d+"px, "+c+"px)",o=null}))},onend:e=>{const{target:t}=e;o&&cancelAnimationFrame(o),t.style.webkitTransform=t.style.transform="translate(0px, 0px)",this.setState({isDragging:!1});const{onTocDragStatusChage:i}=this.props;i&&i(!1)}})}}render(){var e,o;const{itemJson:n,renderRightContent:s,editable:a,canDnd:r,theme:l,isFirstItem:d,isLastItem:c,tocDraggingStatus:p,isTocDragging:g,tocDraggingMode:u}=this.props,{icon:m,isActive:v}=n,{dropType:b,isDragging:y}=this.state;let I;I=m&&m.svg?m:{svg:m};const x="moveInto"===b?"drag-move-into":"",w="drag-move-out-order-"+b;let S="";g&&"on"!==p&&u===n.data.mode&&("bottom"===p&&c?S="toc-drag-move-last":"top"===p&&d&&(S="toc-drag-move-first"));const C=null===(o=null===(e=(0,t.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===o?void 0:o.theme;return(0,t.jsx)("div",{className:`d-flex ${v?"active":""}   ${x}`,css:this.getStyle(),onMouseEnter:e=>this.setState({isHovering:!0}),onMouseLeave:e=>this.setState({isHovering:!1})},(0,t.jsx)("div",{ref:this.dropZoneRef,className:"toc-dialog-dropzone h-100 w-100"},(0,t.jsx)("div",{className:"d-flex w-100 h-100",onDoubleClick:this.handleDoubleClickItem,onClick:this.handleClick},(0,t.jsx)("div",{className:`d-flex justify-content-between w-100 toc-item ${S}`},(0,t.jsx)("div",{className:`d-flex toc-item-content ${w} w-100`},(0,t.jsx)(i.Button,{className:"toc-arrow",icon:!0,type:"tertiary",onClick:this.handleArrowClick},(0,t.jsx)(f,{className:"toc-arrow-icon",size:"s"})),(0,t.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},(0,t.jsx)("div",{className:"d-flex left-content "+(s?"pr-0":"pr-2")},m&&(0,t.jsx)(i.Icon,{autoFlip:n.needFlip,className:"header-icon",color:I.properties&&(0,h.getThemeColorValue)(I.properties.color,C)||l.colors.palette.dark[600],size:12,icon:I.svg}),(0,t.jsx)("div",{title:n.label,className:"item-label editor",ref:this.editor,onBlur:this.onRenameBlur,contentEditable:n.allowEditable&&a,suppressContentEditableWarning:!0},n.label)),s&&s(n)))),r&&(0,t.jsx)("div",{className:(0,t.classNames)("toc-dialog-drag",{"toc-fixed-dialog-drag":n.data.mode===t.DialogMode.Fixed,"toc-anchored-dialog-drag":n.data.mode===t.DialogMode.Anchored}),ref:this.dragRef},y&&(0,t.jsx)("div",{className:"d-flex justify-content-between w-100 toc-item"},(0,t.jsx)("div",{className:"d-flex toc-item-content w-100"},(0,t.jsx)(i.Button,{icon:!0,type:"tertiary",className:"toc-arrow"},(0,t.jsx)(f,{className:"toc-arrow-icon",size:"s"})),(0,t.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},(0,t.jsx)("div",{className:"d-flex left-content "+(s?"pr-0":"pr-2")},m&&(0,t.jsx)(i.Icon,{className:"header-icon",size:12,icon:m}),(0,t.jsx)("div",{title:n.label,className:"item-label editor"},n.label)),s&&s(n))))))))}}var de=p(6009),ce=p.n(de);const pe=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:ce()},n))};var ge=p(1513),he=p.n(ge);const ue=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:he()},n))};var me=p(710),fe=p.n(me);const ve=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:fe()},n))};var be=p(1964),ye=p.n(be);const Ie=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:ye()},n))},xe=[{name:"offset",options:{offset:[0,10]}}];class we extends t.React.PureComponent{constructor(e){super(e),this.getTotalLines=()=>{const{itemJson:e}=this.state;let t=0;return e.children&&e.children.forEach((e=>{var o,i;t++,e.isExpand&&(t+=null!==(i=null===(o=e.children)||void 0===o?void 0:o.length)&&void 0!==i?i:0)})),t},this.getTreeContentHeight=()=>30*this.getTotalLines(),this.handleOnTocDragStatusChange=e=>{var t;const o=this.getItemJsonByDialogs();this.setState({isTocDragging:e,tocDraggingMode:null===(t=o.data)||void 0===t?void 0:t.mode,itemJson:o})},this.getFirstItemJson=e=>{const{itemJson:t}=this.state;return t.children.filter((t=>t.data.mode===e&&0===t.data.index))[0]},this.getLastItemJson=e=>{const{itemJson:t}=this.state,o=t.children.filter((t=>t.data.mode===e));return o.filter((e=>e.data.index===o.length-1))[0]},this.getLastParentItemJson=()=>{const{itemJson:e}=this.state;return e.children[e.children.length-1]},this.handleOnTocDraggingStatusChange=e=>{this.setState({tocDraggingStatus:e,itemJson:this.getItemJsonByDialogs()})},this.onDidDrop=(e,t,o)=>{"moveInto"!==o&&this.props.reOrderDialog(e.data.id,t.data.id,o)},this.canDropFunc=(e,t)=>e.id!==t.id,this.handleChooseTemplate=e=>{this.setState({isTemplatePopoverOpen:!1}),this.props.addDialog(e)},this.handleToggleTemplatePopover=()=>{const{isTemplatePopoverOpen:e}=this.state;this.setState({isTemplatePopoverOpen:!e})},this.closeTemplatePopover=()=>{this.state.isTemplatePopoverOpen&&(this.templateBtn.focus(),this.setState({isTemplatePopoverOpen:!1}))},this.singleAndDoubleClickTimeout=void 0,this.handleClickItem=e=>{this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),this.singleAndDoubleClickTimeout=setTimeout((()=>{this.setState({currentSelectedItemId:e.id,itemJson:M(this.state.itemJson,[e.id])},(()=>{this.props.onClickDialog(e.data.id)}))}),200)},this.handleOnTocDoubleClick=(e,t)=>{this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),this.props.changeEditableDialogItemId(e.id),t.stopPropagation()},this.renameDialog=(e,t)=>(this.props.changeEditableDialogItemId(""),!!(t=null==t?void 0:t.trim())&&this.props.renameDialog(e.data.id,t)),this.formatMessage=(e,o)=>{const n=Object.assign({},r,t.defaultMessages,i.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:n[e]},o)},this.getItemJsonByDialogJson=e=>{const t=e.id,{currentDialogItemId:i}=this.props,n={id:t,isSplash:!!e.isSplash,data:e,label:e.label,index:e.index,level:0,isActive:i===t,allowEditable:!0,renderItem:this.renderDialogContent};return n.icon=e.icon,n.icon||(n.icon=o.utils.getDefaultTocDialogIcon()),n},this.getItemJsonByDialogs=e=>{e||(e=this.props.dialogs);const o={id:"ROOT",children:[],label:""};if(!e)return(0,t.Immutable)(o);const i=Object.keys(e).map(((t,o)=>{const i=this.getItemJsonByDialogJson(e[t]);return i.children=[],i}));return o.children=i,(0,t.Immutable)(o)},this.getMoreDropDownItems=e=>{const o=e.data,i=[],n=(0,t.Immutable)({a11yFocusBack:!1,label:this.formatMessage("rename"),event:t=>{this.handleOnTocDoubleClick(e,t)},visible:!0});i.push(n);const s=(0,t.Immutable)({label:this.formatMessage("duplicate"),event:e=>{e.stopPropagation(),this.props.duplicateDialog(o.id)},visible:!0});i.push(s);const a=(0,t.Immutable)({label:this.formatMessage("delete"),event:e=>{this.props.removeDialog(o.id),e.stopPropagation()},visible:!0});return i.push(a),i},this.renderDialogItemRightContent=e=>{const{theme:n,onSplashClick:s}=this.props,{data:a}=e,r=this.getMoreDropDownItems(e),l=t.css`
      margin-right: calc(16px - ${n.components.button.sizes.sm.paddingX});
      .dialog-item-splash-btn {
        display: ${e.isSplash?"inline-flex":"none"};
        color: ${e.isSplash?n.colors.black:n.colors.palette.dark[600]};
        &:hover {
          color: ${n.colors.black};
        }
      }
      .dropDown {
        display: inline-flex;
        .btn {
          display: none;
        }
      }
    `;let d=null;if(a.mode===t.DialogMode.Fixed){const e=o.utils.getPageListByDialogId(this.props.pages,a.id);e.length&&(d=this.formatMessage("opendWithPages",{pages:e.map((e=>e.label)).join(", ")}))}return(0,t.jsx)("div",{className:"d-flex",css:l},d?(0,t.jsx)(i.Tooltip,{placement:"bottom",title:d},(0,t.jsx)(i.Button,{icon:!0,size:"sm",type:"tertiary",tag:"div",style:{cursor:"inherit"},className:"dialog-item-page-btn dialog-item-icon"},(0,t.jsx)(ue,null))):a.mode===t.DialogMode.Fixed&&(0,t.jsx)(i.Tooltip,{placement:"bottom",title:this.formatMessage("makeSplash")},(0,t.jsx)(z,{size:"sm",icon:!0,type:"tertiary","aria-label":this.formatMessage("makeSplash"),className:"dialog-item-splash-btn dialog-item-icon item-inside-button jimu-outline-inside",onClick:e=>{e.stopPropagation(),s(a.id)}},(0,t.jsx)(ve,null))),(0,t.jsx)("div",{title:this.formatMessage("more"),className:"dropDown dialog-item-icon"},(0,t.jsx)(x,{modifiers:xe,direction:"down",theme:n,items:r,insideOutline:!0})))},this.renderDialogContent=e=>{var o,i,n;const{intl:s,theme:a,editableDialogItemId:r}=this.props,{isTocDragging:l,tocDraggingStatus:d,tocDraggingMode:c}=this.state,p=null===(o=e.data.mode===t.DialogMode.Fixed?this.treeRefForFixed:this.treeRefForAnchored)||void 0===o?void 0:o.getBoundingClientRect();return(0,t.jsx)(le,{intl:s,itemJson:e,theme:a,canDnd:!0,tocDraggingMode:c,isFirstItem:0===e.data.index,isLastItem:this.getLastItemJson(e.data.mode).id===e.id,isTocDragging:l,onTocDragStatusChage:this.handleOnTocDragStatusChange,tocDraggingStatus:d,parentBoundTop:null!==(i=null==p?void 0:p.top)&&void 0!==i?i:-1,parentBoundBottom:null!==(n=null==p?void 0:p.bottom)&&void 0!==n?n:-1,editable:r===e.id,renderRightContent:this.renderDialogItemRightContent,onDidDrop:this.onDidDrop,canDropFunc:this.canDropFunc,renameItem:this.renameDialog,onDoubleClick:this.handleOnTocDoubleClick})},this.getItemJsonByMode=e=>{const{itemJson:t}=this.state,o=t?{id:t.id,isActive:t.isActive,isExpand:t.isExpand,label:"",children:[]}:null;if(o){const i={};t.children.forEach((t=>{var o;(null===(o=t.data)||void 0===o?void 0:o.mode)===e&&(i[t.index]=t)})),Object.keys(i).forEach((e=>{o.children.push(i[e])}))}return o},this.state={currentSelectedItemId:e.currentDialogItemId,itemJson:void 0,isTemplatePopoverOpen:!1,isFixedGroupShown:!0,isAnchoredGroupShown:!0,isTocDragging:!1,tocDraggingMode:null,tocDraggingStatus:"on"}}componentWillUnmount(){this.dropZoneInteractable&&(this.dropZoneInteractable.unset(),this.dropZoneInteractable=null)}componentDidUpdate(e){const t=this.props;let o=!1,i={};const{dialogs:n,currentDialogItemId:s,editableDialogItemId:a,forceRefresh:r}=e;if(t.forceRefresh&&!r||t.currentDialogItemId!==s||t.dialogs!==n||t.editableDialogItemId!==a)if(o=!0,t.dialogs===n&&t.editableDialogItemId===a||t.currentDialogItemId===s)i=t.currentDialogItemId!==s?{currentSelectedItemId:t.currentDialogItemId,itemJson:M(this.state.itemJson,[t.currentDialogItemId])}:{itemJson:this.getItemJsonByDialogs(t.dialogs)};else{const e=M(this.getItemJsonByDialogs(t.dialogs),[t.currentDialogItemId]);i={currentSelectedItemId:t.currentDialogItemId,itemJson:e}}o&&this.setState(i)}componentDidMount(){this.setState({itemJson:this.getItemJsonByDialogs()}),this.initDragEvent(t.DialogMode.Fixed),this.initDragEvent(t.DialogMode.Anchored)}initDragEvent(e){const o=e===t.DialogMode.Fixed?".toc-fixed-dialog-drag":".toc-anchored-dialog-drag",i=e===t.DialogMode.Fixed?this.dropZoneRefForFixed:this.dropZoneRefForAnchored,n=e===t.DialogMode.Fixed?this.treeRefForFixed:this.treeRefForAnchored;i&&(this.dropZoneInteractable=(0,l.interact)(i).dropzone({accept:o,overlap:"pointer",ondragenter:t=>{const{itemJson:o}=this.state;if(o&&n){const{relatedTarget:o,dragEvent:i}=t,s=n.getBoundingClientRect().top,a=this.getTreeContentHeight(),r=JSON.parse(o.getAttribute("itemJson")),l=i.client;l.y<=s?this.getFirstItemJson(e).data.id!==r.data.id&&this.handleOnTocDraggingStatusChange("top"):l.y<=a+s&&this.handleOnTocDraggingStatusChange("on")}},ondragleave:e=>{this.handleOnTocDraggingStatusChange("on")},ondrop:e=>{const t=e.relatedTarget,o=JSON.parse(t.getAttribute("itemJson")),i=this.state.tocDraggingStatus;if("on"===i)return;const n="bottom"===i?this.getLastParentItemJson():this.getFirstItemJson(o.data.mode);this.onDidDrop(o,n,i),this.handleOnTocDraggingStatusChange("on")},ondropdeactivate:e=>{}}))}render(){const{itemJson:e}=this.state,{theme:o}=this.props,n=t.css`
      height: 100%;
      position: relative;
      .toc-dropzone {
        position: absolute;
        pointer-events: none;
      }
      .text-data-600{
        color: ${o.colors.palette.dark[600]};
      }
      .dialog-list-top {
        position: absolute;
        right: 16px;
        top: -44px;
        .dialog-top-btns {
          margin-right: -${o.components.button.sizes.sm.paddingX};

          .my-dropdown {
            margin-left: -5px;
            margin-right: 5px;
          }
        }
      }
      .dialog-list-content{
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;

        .dialog-group{
          display: flex;
          align-items: center;
          padding: 0.25rem 0.575rem 0.25rem 1rem;
          .dialog-group-title{
            font-size: 14px;
            color: ${o.colors.palette.dark[600]};
            flex-grow: 1;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }

        .dialog-tree {
          overflow: hidden;
        }
      }
    `,a=this.getItemJsonByMode(t.DialogMode.Fixed),r=this.getItemJsonByMode(t.DialogMode.Anchored);return(0,t.jsx)("div",{css:n},(0,t.jsx)("div",{className:"dialog-list-top"},(0,t.jsx)("div",{className:"d-flex justify-content-between w-100 align-items-center"},(0,t.jsx)("div",{className:"d-flex dialog-top-btns align-items-center"},(0,t.jsx)("div",{ref:e=>{this.addDialogRef=e},css:t.css`z-index: 11;`},(0,t.jsx)(i.Tooltip,{placement:"bottom",title:this.formatMessage("addDialog")},(0,t.jsx)(i.Button,{icon:!0,disabled:!e,type:"tertiary","aria-label":this.formatMessage("addDialog"),ref:e=>{this.templateBtn=e},onClick:this.handleToggleTemplatePopover,size:"sm",className:"add-dialog-btn mt-1"},(0,t.jsx)(Ie,{className:"add-dialog-icon"})))),this.state.isTemplatePopoverOpen&&(0,t.jsx)(s.TemplateSelector,{title:this.formatMessage("addDialog"),templates:(0,re.getWindowTemplates)(),referenceElement:this.addDialogRef,onItemSelect:this.handleChooseTemplate,onClose:this.closeTemplatePopover})))),(0,t.jsx)("div",{className:"dialog-list-content"},(0,t.jsx)("div",null,(0,t.jsx)("div",{className:"dialog-group"},(0,t.jsx)("div",{className:"dialog-group-title"},this.formatMessage("fixedWindows")),(0,t.jsx)(i.Button,{icon:!0,size:"sm",type:"tertiary",disabled:!((null==a?void 0:a.children.length)>0),onClick:e=>this.setState({isFixedGroupShown:!this.state.isFixedGroupShown})},this.state.isFixedGroupShown?(0,t.jsx)(pe,null):(0,t.jsx)(U,null))),(0,t.jsx)(i.Collapse,{isOpen:this.state.isFixedGroupShown},(0,t.jsx)("div",{ref:e=>{this.dropZoneRefForFixed=e},className:"toc-dropzone toc-dialog-dropzone w-100",style:{height:30*(null==a?void 0:a.children.length)+"px"}}),(0,t.jsx)(L,{forwardRef:e=>{this.treeRefForFixed=e},className:"dialog-tree",hideRoot:!0,itemJson:(0,t.Immutable)(a),onClickItem:this.handleClickItem})),(0,t.jsx)("div",{className:"dialog-group"},(0,t.jsx)("div",{className:"dialog-group-title"},this.formatMessage("anchoredWindows")),(0,t.jsx)(i.Button,{icon:!0,size:"sm",type:"tertiary",disabled:!((null==r?void 0:r.children.length)>0),onClick:e=>this.setState({isAnchoredGroupShown:!this.state.isAnchoredGroupShown})},this.state.isAnchoredGroupShown?(0,t.jsx)(pe,null):(0,t.jsx)(U,null))),(0,t.jsx)(i.Collapse,{isOpen:this.state.isAnchoredGroupShown},(0,t.jsx)("div",{ref:e=>{this.dropZoneRefForAnchored=e},className:"toc-dropzone toc-dialog-dropzone w-100",style:{height:30*(null==r?void 0:r.children.length)+"px"}}),(0,t.jsx)(L,{forwardRef:e=>{this.treeRefForAnchored=e},className:"dialog-tree",hideRoot:!0,itemJson:(0,t.Immutable)(r),onClickItem:this.handleClickItem})))))}}const Se=t.ReactRedux.connect((e=>{const t=e.appStateInBuilder&&e.appStateInBuilder.appConfig;return{pages:t&&t.pages,dialogs:t&&t.dialogs}}))(we);var Ce;!function(e){e.Widget="WIDGET",e.Section="SECTION",e.View="View",e.ScreenGroup="SCREEN_GROUP",e.Screen="SCREEN",e.ScreenMainStage="SCREEN_MAIN_STAGE",e.ScreenSrollingPanel="SCREEN_SCROLLING_PANEL",e.Layout="LAYOUT",e.Label="Label"}(Ce||(Ce={}));class Pe extends c{constructor(){super(...arguments),this.getStyle=()=>{var e;const o=(0,t.getAppStore)().getState(),i=null===(e=null==o?void 0:o.appContext)||void 0===e?void 0:e.isRTL,{theme:n,editable:s,itemJson:a}=this.props,{mustShowArrow:r,children:l,level:d,isActive:c,isExpand:p}=a;return t.css`
      height: ${30}px;
      width: auto;
      min-width: 100%;
      align-items: center;
      cursor: pointer;

      :hover {
        ${c?"":`background-color: ${n.colors.palette.light[400]};`}
        .dropDown {
          z-index: 2;
          .btn {
            visibility: visible;
          }
        }
        .editor {
          color: ${n.colors.black};
        }
      }

      .item-action-button {
        display: none;
      }

      &.active {
        background-color: ${n.colors.primary};
        border: 0;
        .editor {
          color: ${n.colors.black};
        }

        &:hover {
          .item-action-button {
            display: block;
          }
        }
      }

      &.insideActive {
        background-color: ${n.colors.palette.light[500]};
      }

      .toc-item {
        padding: 0;
        border: 0;
        .toc-item-content {
          margin-left: ${10*d}px;
          position: relative;
          .toc-arrow {
            z-index: 2;
            padding-right: ${t.polished.rem(1)};
            visibility: ${r||l&&l.length>0?"visible":"hidden"};
            .jimu-icon {
              fill: ${n.colors.black};
              transform-origin: center;
              transform: ${`rotate(${p?90:i?180:0}deg)`};
              transition: transform .5s;
            }
          }

          .left-and-right {
            overflow-x: hidden;
            margin-left: -5px;
            /* margin-left: calc(8px - ${n.components.button.sizes.sm.paddingX} - 0.6875rem + ${t.polished.rem(4)}); */
            .left-content {
              align-items: center;
              overflow-x: hidden;
              flex: auto;
              .editor {
                overflow: hidden;
                text-overflow: ${s?"clip":"ellipsis"};
                white-space: nowrap;
                font-size: ${.875}rem;
                user-select: none;
                flex: auto;
                text-align: start;
              }
              [contenteditable="true"] {
                user-select: text;
                -webkit-user-select: text;
                background-color: ${n.colors.white};
              }
              .header-icon {
                margin-right: 0.3rem;
                flex: none;
              }
            }
          }
        }
      }
    `}}componentDidMount(){super.componentDidMount()}componentDidUpdate(e){super.componentDidUpdate(e)}render(){var e,o;const{itemJson:n,renderRightContent:s,editable:a,theme:r,className:l}=this.props,{icon:d,isActive:c}=n;let p;p=d&&d.svg?d:{svg:d};const g=null===(o=null===(e=(0,t.getAppStore)().getState())||void 0===e?void 0:e.appStateInBuilder)||void 0===o?void 0:o.theme;return(0,t.jsx)("div",{className:(0,t.classNames)("d-flex",l,{active:c}),css:this.getStyle()},(0,t.jsx)("div",{className:"d-flex w-100 h-100",onDoubleClick:this.handleDoubleClickItem,onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},(0,t.jsx)("div",{className:"d-flex justify-content-between w-100 toc-item"},(0,t.jsx)("div",{className:"d-flex toc-item-content w-100"},(0,t.jsx)(z,{className:"toc-arrow jimu-outline-inside",icon:!0,type:"tertiary",onClick:this.handleArrowClick},(0,t.jsx)(f,{size:"s"})),(0,t.jsx)("div",{className:"left-and-right d-flex justify-content-between w-100"},(0,t.jsx)("div",{className:"d-flex left-content "+(s?"pr-0":"pr-2")},d&&(0,t.jsx)(i.Icon,{autoFlip:n.needFlip,className:"header-icon",color:p.properties&&(0,h.getThemeColorValue)(p.properties.color,g)||r.colors.palette.dark[600],size:12,icon:p.svg}),(0,t.jsx)("div",{title:n.label,className:"item-label editor",ref:this.editor,onBlur:this.onRenameBlur,contentEditable:n.allowEditable&&a,suppressContentEditableWarning:!0},n.label)),s&&s(n))))))}}var De=p(5339),Te=p.n(De);const je=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:Te()},n))};class ke extends t.React.PureComponent{constructor(e){super(e),this.handleChange=e=>{const t=(null==e?void 0:e.target.value)||"";this.setState({searchText:t},(()=>{const{onSearchTextChange:e}=this.props;e&&e(t)}))},this.handleSubmit=e=>{const{onSubmit:t}=this.props;t&&t(e)},this.onKeyUp=e=>{e&&e.target&&"Enter"===e.key&&this.handleSubmit(e.target.value)},this.handleClear=e=>{this.setState({searchText:""}),e.stopPropagation()},this.getStyle=()=>t.css`
      position: relative;
      .toc-search-input {
        .search-close-icon {
          padding: 0.125rem;
        }
      }
    `,this.state={searchText:e.searchText||""}}componentDidUpdate(e){if(this.props.searchText!==e.searchText&&this.props.searchText!==this.state.searchText){const{searchText:e}=this.props;this.setState({searchText:e})}}render(){const{placeholder:e,className:o,showClear:n,inputRef:s,onFocus:a,onBlur:r}=this.props,{searchText:l}=this.state;return(0,t.jsx)("div",{css:this.getStyle(),className:o},(0,t.jsx)(i.TextInput,{className:"toc-search-input",type:"text",ref:s,placeholder:e,onChange:this.handleChange,suffix:(0,t.jsx)(i.Button,{icon:!0,size:"sm",type:"tertiary",className:"search-close-icon "+(this.state.searchText?"":"d-none"),onClick:this.handleChange},(0,t.jsx)(je,null)),onBlur:r,onFocus:a,value:l,onKeyDown:e=>this.onKeyUp(e)}),n&&(0,t.jsx)(i.Button,{color:"tertiary",icon:!0,size:"sm",onClick:this.handleSubmit},(0,t.jsx)(je,null)))}}function Oe(e,t){let o=e.id;return t===Ce.Widget||t===Ce.Section||t===Ce.ScreenGroup?o=e.layoutId+d+e.layoutItemId+d+e.id:t!==Ce.View&&t!==Ce.Screen&&t!==Ce.ScreenMainStage&&t!==Ce.ScreenSrollingPanel||(o=e.layoutId+d+e.layoutItemId+d+(e.sectionId||e.screenGroupId)+d+e.id,t!==Ce.ScreenMainStage&&t!==Ce.ScreenSrollingPanel||(o=o+d+t)),o}function Ae(e){var t;const o=null===(t=null==e?void 0:e.id)||void 0===t?void 0:t.split(d);return!o||o.length<2?null:{layoutId:o[0],layoutItemId:o[1]}}function Me(e){const i=e.id.split(d),n=i[0],s=i[1];if(e.type===Ce.View){if(e.id.indexOf(d)<0)return;(0,o.getAppConfigAction)().removeView(e.data.id,e.id.split(d)[2]).exec()}else if(e.type===Ce.Screen){if(e.id.indexOf(d)<0)return;(0,o.getAppConfigAction)().removeScreen(e.data.id,e.id.split(d)[2]).exec()}else(0,t.getAppStore)().dispatch(o.builderActions.confirmDeleteContentChanged({layoutId:n,layoutItemId:s}))}function Re(e){const t=e.id.split(d),i=t[0],s=t[1],a=(0,o.getAppConfigAction)();e.type===Ce.Widget||e.type===Ce.Section||e.type===Ce.ScreenGroup?(0,n.duplicateLayoutItem)({layoutId:i,layoutItemId:s}):e.type===Ce.View?(a.duplicateView(t[3],t[2],!0),a.exec()):e.type===Ce.Screen&&(a.duplicateScreen(t[3],t[2],!0),a.exec())}function Be(e,t){return!(!t||""===t||""===t.replace(/(\r\n|\n|\r)/g,"")||(e.type===Ce.Widget?(0,o.getAppConfigAction)().editWidgetProperty(e.data.id,"label",t).exec():e.type===Ce.Section?(0,o.getAppConfigAction)().editSectionProperty(e.data.id,"label",t).exec():e.type===Ce.View?(0,o.getAppConfigAction)().editView(e.data.set("label",t)).exec():e.type===Ce.ScreenGroup?(0,o.getAppConfigAction)().editScreenGroupProperty(e.data.id,"label",t).exec():e.type===Ce.Screen&&(0,o.getAppConfigAction)().editScreen(e.data.set("label",t)).exec(),0))}function Ne(e){const t=Ae(e);t&&n.fixedLayoutActions.toggleLockLayout(t)}function Le(e){const t=Ae(e);(0,n.pendLayoutItem)(t)}function Ee(e){const t=Ae(e);t&&n.fixedLayoutActions.sendBackward(t)}function ze(e){const t=Ae(e);t&&n.fixedLayoutActions.bringForward(t)}function Je(e){const t=Ae(e);t&&n.fixedLayoutActions.sendToBack(t)}function Fe(e){const t=Ae(e);t&&n.fixedLayoutActions.bringToFront(t)}function $e(e){if(e){const o=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`),i=(o.contentDocument||o.contentWindow.document).querySelector(`div.exb-rnd[data-layoutid="${e.layoutId}"][data-layoutitemid="${e.layoutItemId}"]`);i&&(0,n.sinkingLayoutItem)(e,i.getBoundingClientRect())}}function He(e,o){const i=Ae(e);if(i){const e=document.querySelector(`iframe[name="${t.APP_FRAME_NAME_IN_BUILDER}"]`),s=(e.contentDocument||e.contentWindow.document).querySelector(`div.exb-rnd[data-layoutid="${i.layoutId}"][data-layoutitemid="${i.layoutItemId}"]`);if(s){const e={TL:1,TC:2,TR:3,ML:4,MC:5,MR:6,BL:7,BC:8,BR:9};(0,n.floatingLayoutItem)(i,s.getBoundingClientRect(),e[o])}}}function Ve(e){const t=Ae(e);t&&n.fixedLayoutActions.alignTo(t,"left")}function Ue(e){const t=Ae(e);t&&n.fixedLayoutActions.alignHorizontalCenter(t)}function We(e){const t=Ae(e);t&&n.fixedLayoutActions.alignTo(t,"right")}function Ge(e){const t=Ae(e);t&&n.fixedLayoutActions.alignTo(t,"top")}function Ze(e){const t=Ae(e);t&&n.fixedLayoutActions.alignVerticalCenter(t)}function _e(e){const t=Ae(e);t&&n.fixedLayoutActions.alignTo(t,"bottom")}function Ke(e){const t=Ae(e);t&&n.fixedLayoutActions.alignFullWidth(t)}function qe(e){const t=Ae(e);t&&n.fixedLayoutActions.alignFullHeight(t)}function Xe(e){const t=Ae(e);t&&n.fixedLayoutActions.alignFullSize(t)}function Ye(e,t){let o=!1;return Object.keys(e).length!==Object.keys(t).length?o=!0:Object.keys(e).some((i=>{const n=e[i],s=t[i];return s?n.label!==s.label||n.icon!==s.icon?(o=!0,!0):void 0:(o=!0,!0)})),o}function Qe(e,t){let o=!1;return Object.keys(e).length!==Object.keys(t).length?o=!0:Object.keys(e).some((i=>{const n=e[i],s=t[i];return s?n.label!==s.label||n.icon!==s.icon||s.views!==n.views?(o=!0,!0):void 0:(o=!0,!0)})),o}function et(e,t){let o=!1;return Object.keys(e).length!==Object.keys(t).length?o=!0:Object.keys(e).some((i=>{const n=e[i],s=t[i];return s?n.label!==s.label?(o=!0,!0):void 0:(o=!0,!0)})),o}function tt(e,t){let o=!1;return Object.keys(e).length!==Object.keys(t).length?o=!0:Object.keys(e).some((i=>{const n=e[i],s=t[i];return s?n.label!==s.label||n.icon!==s.icon||s.screens!==n.screens?(o=!0,!0):void 0:(o=!0,!0)})),o}function ot(e,t){let o=!1;return Object.keys(e).length!==Object.keys(t).length?o=!0:Object.keys(e).some((i=>{const n=e[i],s=t[i];return s?n.label!==s.label?(o=!0,!0):void 0:(o=!0,!0)})),o}function it(e,t){let o=!1;return Object.keys(e).length!==Object.keys(t).length?o=!0:e&&Object.keys(e).some((i=>{const n=e[i],s=t[i];if(n!==s){if(n&&!s||!n&&s)return o=!0,!0;const e=n.content,t=s.content,i=n.order,a=s.order;if((e!==t||i!==a)&&(i!==a||e&&!t||Object.keys(e||{}).length!==Object.keys(t||{}).length))return o=!0,!0;if(e&&Object.keys(e).some((i=>{var n,s;const a=e[i],r=t[i];if(a&&!r||(null===(n=null==a?void 0:a.setting)||void 0===n?void 0:n.lockLayout)!==(null===(s=null==r?void 0:r.setting)||void 0===s?void 0:s.lockLayout)||(null==a?void 0:a.isPending)!==(null==r?void 0:r.isPending))return o=!0,!0})),o)return!0}})),o}function nt(e){const{total:t}=st(null,e);return t}function st(e,t){let o=0,i=!1;if(t.id===e)return{isFind:!0,total:o};const{children:n,isExpand:s}=t;return s&&n&&n.find((t=>{o++;const{isFind:n,total:s}=st(e,t);if(o+=s,n)return i=!0,!0})),{isFind:i,total:o}}function at(e,o){const n=Object.assign({},r,t.defaultMessages,a.defaultMessages,i.defaultMessages);return e.formatMessage({id:o,defaultMessage:n[o]})}function rt(e,o){const{theme:i}=e,{showSearch:n}=o;return t.css`
    height: 100%;
    padding-bottom: 10px;
    position: relative;
    .toc-dropzone {
      position: absolute;
      pointer-events: none;
    }
    .outline-list-top {
      height: ${n?82:44}px;
      padding: 10px ${16}px;
      padding-top: 0;
      .outline-title {
        user-select: none;
        color: ${i.colors.palette.dark[600]};
        font-weight: ${i.typography.weights.extraBold};
      }
      .outline-top-btns {
        margin-right: -${i.components.button.sizes.sm.paddingX};
        // .btn:hover {
        //   svg {
        //     color: ${i.colors.black};
        //   }
        // }
      }
      .toc-search-input {
        margin-top: calc(12px - ${i.components.button.sizes.sm.paddingY});
      }
    }
    .outline-tree-container {
      color: ${i.colors.palette.dark[600]};
      height: calc(100% - ${n?82:44}px);
      overflow-y: auto;
      .outline-tree {
        >div {
          overflow: hidden;
          >div {
            overflow-x: auto;
            >.collapse {
              min-width: fit-content;
            }
          }
        }
        .tree-item-common {
          padding-left: ${16}px;
          .tree-arrow {
            display: none;
          }
        }
        .outline-title-item {
          margin-top: ${t.polished.rem(6)};
          .tree-item-common {
            .left-content {
              font-weight: ${i.typography.weights.extraBold};
              color: ${i.colors.palette.dark[600]};
            }
          }
          .tree-item-common:hover {
            background-color:${t.polished.rgba(i.colors.palette.light[400],.6)};
          }
        }
        .toc-item-dropzone {
          .toc-item {
            padding-left: ${t.polished.rem(4)};
          }
        }
      }
    }

  `}var lt,dt,ct,pt;function gt(e,t,o){return e?e[t]||e[o]:null}!function(e){e[e.BringForward=0]="BringForward",e[e.SendBackward=1]="SendBackward",e[e.BringToFront=2]="BringToFront",e[e.SendToBack=3]="SendToBack"}(lt||(lt={})),function(e){e.Page="PAGE",e.Widget="WIDGET",e.View="VIEW",e.Screen="SCREEN"}(dt||(dt={})),function(e){e.Auto="auto",e[e.Normal=0]="Normal",e[e.BoundaryDropArea=10]="BoundaryDropArea",e[e.DragMoveTip=20]="DragMoveTip",e[e.HandlerTools=30]="HandlerTools",e[e.DraggingItem=40]="DraggingItem"}(ct||(ct={})),function(e){e.Auto="AUTO",e.Stretch="STRETCH",e.Custom="CUSTOM"}(pt||(pt={}));const ht=p(8683);let ut;function mt(e,o,i,n){var s,a;let r;const{appConfig:l}=o,{id:d,layoutId:c,layoutItemId:g,type:h,sectionId:u,screenGroupId:m}=e,f=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["id","layoutId","layoutItemId","type","sectionId","screenGroupId"]);h===Ce.Widget?r=l.widgets[d]:h===Ce.Section?r=l.sections[d]:h===Ce.View?r=l.views[d]:h===Ce.ScreenGroup?r=l.screenGroups[d]:h!==Ce.Screen&&h!==Ce.ScreenMainStage&&h!==Ce.ScreenSrollingPanel||(r=l.screens[d]);const{currentSelectedItemId:v}=i,b={layoutId:c,layoutItemId:g,id:d};h===Ce.View&&(b.sectionId=u),h!==Ce.Screen&&h!==Ce.ScreenMainStage&&h!==Ce.ScreenSrollingPanel||(b.screenGroupId=m);const y=Oe(b,h),{expandIds:I,renderOutlineContent:x}=ut,w=I.includes(y),S=function(e,o){let i;return i=e===t.PagePart.Header?o.allowEditableForHeader:e===t.PagePart.Footer?o.allowEditableForFooter:e===t.PagePart.Body?o.allowEditable:o.allowEditableForDialog,i}(e.pagePart,o),C=Object.assign({id:y,data:r,label:null!=n?n:r.label,type:h,allowEditable:S,isExpand:w,isActive:v===y,renderItem:x},f);if(C.icon=r.icon,"string"==typeof r.icon){const o=null===(s=null==l?void 0:l.layouts)||void 0===s?void 0:s[e.layoutId];if((null==o?void 0:o.type)===t.LayoutType.FlowLayout){const t=null===(a=null==o?void 0:o.content)||void 0===a?void 0:a[e.layoutItemId];(null==t?void 0:t.widgetId)&&(C.icon=ht)}}return C.icon||(h===Ce.Widget?C.icon={svg:p(687)}:h===Ce.Section?C.icon={svg:p(5543)}:h===Ce.View?C.icon={svg:p(4175)}:h===Ce.ScreenGroup?C.icon={svg:p(760)}:h===Ce.Screen&&(C.icon={svg:p(1745)})),C}function ft(e,o,i,n,s,a){var r;const{appConfig:l,browserSizeMode:d}=s,c=gt(e,d,l.mainSizeMode);if(!c)return;const g=null===(r=null==l?void 0:l.layouts)||void 0===r?void 0:r[c],{currentSelectedItemId:h}=a,{expandIds:u,renderOutlineContent:m}=ut,f=u.includes(c),v={id:c,label:g.label,index:o,level:i,pagePart:n,icon:p(4767),type:Ce.Layout,isExpand:f,isActive:h===c,renderItem:m},b=bt(t.LayoutItemType.Widget,l.layouts[c])||[],y=bt(t.LayoutItemType.Section,l.layouts[c])||[];return v.children=It(y,b,v.level+1,n,s,a),v}function vt(e,t,o){var i,n,s,a;const{appConfig:r}=t,l=mt(e,t,o);l.needFlip=null===(s=null===(n=null===(i=null==l?void 0:l.data)||void 0===i?void 0:i.manifest)||void 0===n?void 0:n.properties)||void 0===s?void 0:s.flipIcon;const d=r.widgets[e.id];if(d.layouts){const e=Object.keys(d.layouts).filter((e=>0!==e.indexOf("_")));if(1===e.length){const e=d.layouts[Object.keys(d.layouts)[0]];l.children=null===(a=ft(e,0,l.level,l.pagePart,t,o))||void 0===a?void 0:a.children}else l.children=[],e.forEach(((e,i)=>{const n=ft(d.layouts[e],i,l.level+1,l.pagePart,t,o);n&&l.children.push(n)}))}return l}function bt(e,o){let i;return e===t.LayoutItemType.Widget?i="widgetId":e===t.LayoutItemType.Section?i="sectionId":e===t.LayoutItemType.ScreenGroup&&(i="screenGroupId"),o&&o.content&&o.order?o.order.asMutable().filter((t=>o.content[t].type===e&&o.content[t][i]&&!o.content[t].isPending)).map((e=>({id:o.content[e][i],layoutId:o.id,layoutItemId:e}))):[]}function yt(e,o,i,n){var s;let a=[],r=[],l=[];const{appConfig:d,browserSizeMode:c}=i;if(e===t.ContainerType.Header||e===t.ContainerType.Footer){if(d[e]){const o=gt(d[e].layout,c,d.mainSizeMode);a=bt(t.LayoutItemType.Widget,d.layouts[o])||[],r=bt(t.LayoutItemType.Section,d.layouts[o])||[]}}else if(d[e]&&d[e][o]){const i=d[e][o],p=gt(n?null===(s=i[n[0]])||void 0===s?void 0:s[n[1]]:i.layout,c,d.mainSizeMode);a=bt(t.LayoutItemType.Widget,d.layouts[p])||[],r=bt(t.LayoutItemType.Section,d.layouts[p])||[],l=bt(t.LayoutItemType.ScreenGroup,d.layouts[p])||[]}return{widgets:a,sections:r,screens:l}}function It(e,o,i,n,s,a){const r=[];return r.push(...e.map(((e,o)=>(e.index=o,e.level=i,e.pagePart=n,e.type=Ce.Section,function(e,o,i){const{appConfig:n}=o,{level:s,pagePart:a,layoutId:r,layoutItemId:l,id:d}=e,c=mt(e,o,i),p=n.sections[e.id];return p.views&&(c.children=p.views.asMutable().map(((e,n)=>function(e,o,i){const n=mt(e,o,i),{widgets:s,sections:a}=yt(t.ContainerType.View,e.id,o);return n.children=It(a,s,n.level+1,n.pagePart,o,i),n}({id:e,sectionId:d,layoutId:r,layoutItemId:l,index:n,level:s+1,pagePart:a,type:Ce.View},o,i)))),c}(e,s,a))))),r.push(...o.map(((e,t)=>(e.index=t,e.level=i,e.pagePart=n,e.type=Ce.Widget,vt(e,s,a))))),r}function xt(e,t,o,i,n,s,a){var r;let l=[];if(e.length){let t=[];if(o.length){const i=null===(r=o[0]||e[0])||void 0===r?void 0:r.layoutId,n=s.appConfig.layouts[i].order.asMutable(),a={};o.forEach((e=>{e.type=Ce.Widget,a[e.layoutItemId]=e})),e.forEach((e=>{a[e.layoutItemId]=e})),n.forEach((e=>{a[e]&&t.push(a[e])}))}else t=e;l.push(...t.map(((e,t)=>(e.index=t,e.level=i,e.pagePart=n,e.type===Ce.Widget?vt(e,s,a):(e.type=Ce.ScreenGroup,function(e,t,o){const{appConfig:i}=t,{level:n,pagePart:s,layoutId:a,layoutItemId:r,id:l}=e,d=mt(e,t,o),c=i.screenGroups[e.id];return c.screens&&(d.children=c.screens.asMutable().map(((e,i)=>function(e,t,o){const i=mt(e,t,o);e.level=i.level+1,e.type=Ce.ScreenMainStage;const n=mt(e,t,o,at(t.intl,"mainStage"));e.type=Ce.ScreenSrollingPanel;const s=mt(e,t,o,at(t.intl,"scrollingPanel")),{widgets:a,sections:r}=yt("screens",e.id,t,["main","layout"]),{widgets:l,sections:d}=yt("screens",e.id,t,["panel","layout"]);return n.children=It(r,a,i.level+2,i.pagePart,t,o),s.children=It(d,l,i.level+2,i.pagePart,t,o),n.allowEditable=!1,s.allowEditable=!1,i.children=[n,s],i}({id:e,screenGroupId:l,layoutId:a,layoutItemId:r,index:i,level:n+1,pagePart:s,type:Ce.Screen},t,o)))),d}(e,s,a))))))}else l=It(t,o,i,n,s,a);return l}var wt=p(224),St=p.n(wt);const Ct=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:St()},n))};var Pt=p(6465),Dt=p.n(Pt);const Tt=e=>{const{className:o}=e,n=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(o[i[n]]=e[i[n]])}return o}(e,["className"]),s=(0,t.classNames)("jimu-icon-component",o);return t.React.createElement(i.Icon,Object.assign({className:s,icon:Dt()},n))},jt=[{name:"offset",options:{offset:[0,10]}}];class kt extends t.React.Component{constructor(s){var a,r;super(s),this.singleAndDoubleClickTimeout=void 0,this.handleOnTocDoubleClick=(e,t)=>{this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),this.checkIfReadOnly(e)||this.setState({editableItemId:e.id})},this.handleRename=(e,t)=>(this.setState({editableItemId:""}),Be(e,t)),this.checkIfReadOnly=e=>{var t,o;const i=e.id.split(d);let n;return n=e.type===Ce.ScreenGroup||e.type===Ce.Section?i[0]===(null===(t=this.props.selection)||void 0===t?void 0:t.layoutId)&&i[1]===(null===(o=this.props.selection)||void 0===o?void 0:o.layoutItemId):this.state.currentSelectedItemId===e.id,!(n&&e.allowEditable&&e.pagePart===this.props.activePagePart)},this.handleClickItem=(e,t)=>{this.singleAndDoubleClickTimeout&&(clearTimeout(this.singleAndDoubleClickTimeout),this.singleAndDoubleClickTimeout=void 0),e.allowEditable&&(this.singleAndDoubleClickTimeout=setTimeout((()=>{if(e.type===Ce.Label||e.type===Ce.Layout)return void this.handleExpand(e);const{currentSelectedItemId:t,itemJson:o}=this.state;t!==e.id?e.type===Ce.Label||e.type===Ce.Layout?(this.setState({itemJson:Object.assign({},o)}),this.props.onClickItem(e)):(this.setState({currentSelectedItemId:e.id,itemJson:A(o,[e.id])}),this.props.onClickItem(e)):this.handleExpand(e)}),200))},this.handleExpand=e=>{const{expandIds:t}=this;e.isExpand?t.includes(e.id)&&t.splice(t.indexOf(e.id),1):t.includes(e.id)||t.push(e.id),this.setState({itemJson:O(this.state.itemJson,t)})},this.handleArrowClick=e=>{this.handleExpand(e)},this.handleSearchTextChange=e=>{this.setState({filterText:e},(()=>{this.setState({itemJson:this.getItemJsonByAppConfig()})}))},this.handleSearchSubmit=e=>{this.setState({filterText:e},(()=>{this.setState({itemJson:this.getItemJsonByAppConfig()})}))},this.handleSearchBtnClick=e=>{e.stopPropagation(),this.state.showSearch&&this.handleSearchTextChange(""),this.setState({showSearch:!this.state.showSearch})},this.handleSearchOpened=()=>{this.searchInput&&(this.searchInput.select(),this.searchInput.focus())},this.formatMessage=e=>{const{intl:t}=this.props;return at(t,e)},this.getItemJsonByAppConfig=i=>function(i,s,a){var r;const l=[],{intl:c,appConfig:p,currentPageId:g,currentDialogId:h,activePagePart:u}=i,{filterText:m,currentSelectedItemId:f}=s,{formatMessage:v}=e,b=[v(c,"header"),v(c,"footer"),v(c,"body")],y=[t.PagePart.Header,t.PagePart.Footer,t.PagePart.Body];ut=a;const{expandIds:I,renderTitleRightContent:x,lastPageId:w}=ut,S={id:"ROOT",type:Ce.Label,children:l,label:""};if(!p)return(0,t.Immutable)(S);if(h){const{widgets:e,sections:o}=yt(t.ContainerType.Dialog,h,i);S.children=It(o,e,0,null,i,s)}else for(let e=0;e<3;e++){if(0===e&&!i.enableHeader||1===e&&!i.enableFooter)continue;const a=e+"-"+b[e],h=f===a;h&&(I.includes(a)||I.push(a));const S=I.includes(a),C={label:b[e],pagePart:y[e],id:a,index:e,level:0,mustShowArrow:!0,isActive:h,isExpand:S,type:Ce.Label,className:"outline-title-item",allowEditable:!0,renderRightContent:x,arrowIcon:e=>t.React.createElement("div",null)};let P,D,T=!0;if(C.label===v(c,"header")?(P=t.ContainerType.Header,D="header",i.enableHeader||(T=!1)):C.label===v(c,"body")?(P=t.ContainerType.Page,D=g,o.appConfigUtils.isRealPage(p,g)?ut.lastPageId=g:D=w):(P=t.ContainerType.Footer,D="footer",i.enableFooter||(T=!1)),T){const{widgets:e,sections:o,screens:a}=yt(P,D,i),l=xt(a,o,e,C.level,C.pagePart,i,s),c=C.pagePart===t.PagePart.Body&&(null===(r=i.appConfig.pages[i.currentPageId])||void 0===r?void 0:r.mode)===t.PageMode.AutoScroll;C.children=c?l.filter((e=>{var t;const o=e.id.split(d);return(0,n.supportSinking)({layoutId:o[0],layoutItemId:o[1]})||(null===(t=e.children)||void 0===t?void 0:t.length)>0})):l,(m&&""!==m||u===C.pagePart)&&C.children&&C.children.length>0&&(C.isExpand=!0,I.includes(C.id)||I.push(C.id))}l.push(C)}let C=(0,t.Immutable)(S);if(m&&""!==m){const e=j(C,m.trim());C=k(e,m.trim()),ut.expandIds=R(C),o.builderAppSync.publishChangeSelectionToApp(null)}return C}(null!=i?i:this.props,this.state,this),this.getAlignmentsDropDownItems=e=>[{label:this.formatMessage(this.isRTL?"snapToRight":"snapToLeft"),event:t=>{Ve(e),t.stopPropagation()}},{label:this.formatMessage("alignHCenter"),event:t=>{Ue(e),t.stopPropagation()}},{label:this.formatMessage(this.isRTL?"snapToLeft":"snapToRight"),event:t=>{We(e),t.stopPropagation()}},{label:this.formatMessage("snapToTop"),event:t=>{Ge(e),t.stopPropagation()}},{label:this.formatMessage("alignVCenter"),event:t=>{Ze(e),t.stopPropagation()}},{label:this.formatMessage("snapToBottom"),event:t=>{_e(e),t.stopPropagation()}},{label:this.formatMessage("fullWidth"),event:t=>{Ke(e),t.stopPropagation()}},{label:this.formatMessage("fullHeight"),event:t=>{qe(e),t.stopPropagation()}},{label:this.formatMessage("fullSize"),event:t=>{Xe(e),t.stopPropagation()}}],this.getPinDropDownItems=e=>{const t=["TR","TC","TL","MR","MC","ML","BR","BC","BL"],o=[];return["TL","TC","TR","ML","MC","MR","BL","BC","BR"].forEach(((i,n)=>{const s=this.formatMessage(this.isRTL?t[n]:i);o.push({label:s,event:t=>{He(e,i),t.stopPropagation()}})})),o},this.getArrangementsDropDownItems=e=>[{label:this.formatMessage("sendBackward"),event:t=>{Ee(e),t.stopPropagation()}},{label:this.formatMessage("bringForward"),event:t=>{ze(e),t.stopPropagation()}},{label:this.formatMessage("sendToBack"),event:t=>{Je(e),t.stopPropagation()}},{label:this.formatMessage("bringToFront"),event:t=>{Fe(e),t.stopPropagation()}}],this.isOnlyOneViewOrScreen=e=>{const{appConfig:t}=this.props,o=e.id.split(d)[2];return e.type===Ce.View&&1===t.sections[o].views.length||e.type===Ce.Screen&&1===t.screenGroups[o].screens.length},this.getDropdwnItemsForSpecialCases=(e,o)=>{const{browserSizeMode:i,lockLayout:n,runMode:s}=this.props;if(s||n){if(e.type===Ce.Section||e.type===Ce.View||e.type===Ce.ScreenGroup||e.type===Ce.Screen||e.type===Ce.Widget&&e.data.manifest.widgetType===t.WidgetType.Layout)return o.slice(0,1)}else if(e.type===Ce.View||e.type===Ce.Screen||e.type===Ce.ScreenGroup){if(e.type===Ce.ScreenGroup&&i===t.BrowserSizeMode.Large)o.push({label:this.formatMessage("pendingTip"),event:t=>{Le(e),t.stopPropagation()}});else{if((e.type===Ce.ScreenGroup||e.type===Ce.Screen)&&i!==t.BrowserSizeMode.Large)return o.slice(0,1);if(this.isOnlyOneViewOrScreen(e))return o.slice(0,2)}return o}return null},this.isSupportDropDown=e=>e===Ce.Section||e===Ce.View||e===Ce.ScreenGroup||e===Ce.Screen||e===Ce.Widget,this.getDropDownItems=e=>{var o;if(!this.isSupportDropDown(e.type))return[];const{theme:i,appConfig:s,currentPageId:a,lockLayout:r,runMode:l}=this.props,d=[{a11yFocusBack:!1,label:this.formatMessage("rename"),event:t=>{this.handleOnTocDoubleClick(e,t)}},{label:this.formatMessage("duplicate"),event:t=>{Re(e),t.stopPropagation()}},{label:this.formatMessage("delete"),event:t=>{Me(e),t.stopPropagation()}}],c=this.getDropdwnItemsForSpecialCases(e,d);if(c)return c;if(l)return d.slice(0,1);if(r)return d.splice(1,1),d;const p=Ae(e),g=s.layouts[p.layoutId],h=g.content[p.layoutItemId];if(((null==g?void 0:g.type)!==t.LayoutType.FlowLayout||(0,n.supportFloating)(p)||(0,n.supportSinking)(p))&&d.push({label:this.formatMessage("pendingTip"),event:t=>{Le(e),t.stopPropagation()}}),(null==g?void 0:g.type)===t.LayoutType.FixedLayout){const n=[{label:(null===(o=null==h?void 0:h.setting)||void 0===o?void 0:o.lockLayout)?this.formatMessage("unlockLayout"):this.formatMessage("lockLayout"),event:t=>{Ne(e),t.stopPropagation()}},{label:(0,t.jsx)(w,{toggleContent:this.formatMessage("arrange"),modifiers:jt,direction:"right",theme:i,items:this.getArrangementsDropDownItems(e),icon:!1}),isBtn:!0},{label:(0,t.jsx)(w,{toggleContent:this.formatMessage("align"),modifiers:jt,direction:"right",theme:i,items:this.getAlignmentsDropDownItems(e),icon:!1}),isBtn:!0}];d.push(...n)}else null==g||g.type,t.LayoutType.FlowLayout;return this.props.lockLayout||(null==s?void 0:s.pages[a].mode)!==t.PageMode.AutoScroll||e.pagePart!==t.PagePart.Body||((0,n.supportFloating)(p)?d.push({label:(0,t.jsx)(w,{toggleContent:this.formatMessage("floating"),modifiers:jt,direction:"right",theme:i,items:this.getPinDropDownItems(e),icon:!1}),isBtn:!0}):(0,n.supportSinking)(p)&&d.push({label:this.formatMessage("sinking"),event:e=>{$e(p),e.stopPropagation()}})),d},this.renderTitleRightContent=e=>{const o=function(e,o){const{theme:i}=o;return t.css`
    margin-right:calc(14px - ${i.components.button.sizes.sm.paddingX});
    .title-arrow .jimu-icon {
      transform-origin: center;
      transform: ${`rotate(${e.isExpand?180:0}deg)`};
      transition: transform .5s;
    }

  `}(e,this.props);return(0,t.jsx)("div",{css:o},(0,t.jsx)(i.Button,{icon:!0,type:"tertiary",size:"sm",className:"title-arrow jimu-outline-inside"},(0,t.jsx)(U,null)))},this.renderCommonRightContent=e=>{const{theme:o}=this.props,i=this.getDropDownItems(e);if(i.length<1)return(0,t.jsx)("div",null);const n=function(e){const{theme:o}=e;return t.css`
    margin-right:calc(16px - ${o.components.button.sizes.sm.paddingX});
    .dropDown {
      visibility: visible;
      .btn {
        visibility: hidden;
        color: ${o.colors.palette.dark[600]};
      }
      .btn:hover {
        color: ${o.colors.black};
      }
    }
  `}(this.props);return(0,t.jsx)("div",{className:"d-flex item-action-button",css:n},(0,t.jsx)("div",{title:this.formatMessage("more"),className:"dropDown"},(0,t.jsx)(x,{modifiers:jt,direction:"down",theme:o,items:i,insideOutline:!0})))},this.renderOutlineContent=e=>{var o;const{intl:i,theme:n}=this.props,s=!this.checkIfReadOnly(e),{editableItemId:a}=this.state,{type:r}=e,l=[Ce.Section,Ce.View,Ce.ScreenGroup,Ce.Screen,Ce.Widget],d=(e.type===Ce.Section||e.type===Ce.ScreenGroup)&&(null===(o=this.state.currentSelectedItemId)||void 0===o?void 0:o.includes(e.id));return(0,t.jsx)(Pe,{className:d?"insideActive":"",intl:i,itemJson:e,onArrowClick:this.handleArrowClick,editable:a===e.id,onDoubleClick:s&&this.handleOnTocDoubleClick,renderRightContent:s&&l.includes(r)&&this.renderCommonRightContent,renameItem:this.handleRename,theme:n})},this.state={editableItemId:s.editableItemId,currentSelectedItemId:s.currentSelectedItemId,filterText:"",itemJson:void 0,showSearch:!1,showAlign:!1,showArrange:!1},this.expandIds=[],this.isRTL=null===(r=null===(a=(0,t.getAppStore)().getState())||void 0===a?void 0:a.appContext)||void 0===r?void 0:r.isRTL,this.alignRef=t.React.createRef(),this.arrangeRef=t.React.createRef(),this.tocItemCss=function(e){const{theme:o}=e;return t.css`
    :hover {
      .dropDown {
        z-index: 2;
        .btn {
          display: inline-flex;
        }
      }
      .editor {
        color: ${o.colors.black};
      }
    }
    &.active {
      .editor {
        color: ${o.colors.black};
      }
    }
  `}(s)}componentDidMount(){this.setState({itemJson:this.getItemJsonByAppConfig()})}shouldComponentUpdate(e,t){var o,i,n,s,a,r;const{appConfig:l}=this.props;let d=!1;if(e&&Object.keys(e).some((t=>this.props?"appConfig"!==t&&e[t]!==this.props[t]?(d=!0,!0):void 0:(d=!0,!0))),d)return!0;if(t&&Object.keys(t).some((e=>this.state?t[e]!==this.state[e]?(d=!0,!0):void 0:(d=!0,!0))),d)return!0;if(e.appConfig&&l&&e.appConfig!==l){const t=null==l?void 0:l.layouts,d=null===(o=e.appConfig)||void 0===o?void 0:o.layouts;if(t&&d&&t!==d&&it(t,d))return!0;const c=null==l?void 0:l.widgets,p=null===(i=e.appConfig)||void 0===i?void 0:i.widgets;if(c&&p&&c!==p&&Ye(c,p))return!0;const g=null==l?void 0:l.sections,h=null===(n=e.appConfig)||void 0===n?void 0:n.sections;if(g&&h&&g!==h&&Qe(g,h))return!0;const u=null==l?void 0:l.views,m=null===(s=e.appConfig)||void 0===s?void 0:s.views;if(u&&m&&u!==m&&et(u,m))return!0;const f=null==l?void 0:l.screenGroups,v=null===(a=e.appConfig)||void 0===a?void 0:a.screenGroups;if(f&&v&&f!==v&&tt(f,v))return!0;const b=null==l?void 0:l.screens,y=null===(r=e.appConfig)||void 0===r?void 0:r.screens;if(b&&y&&b!==y&&ot(b,y))return!0}return!1}componentDidUpdate(e,t){const o=this.props,{itemJson:i,currentSelectedItemId:n,editableItemId:s}=this.state;let a,r=!1;if(o.currentSelectedItemId!==this.state.currentSelectedItemId||s!==t.editableItemId||o.enableFooter!==e.enableFooter||o.enableHeader!==e.enableHeader||o.appConfig!==e.appConfig||o.currentPageId!==e.currentPageId||o.currentDialogId!==e.currentDialogId||o.browserSizeMode!==e.browserSizeMode){if(r=!0,o.appConfig===e.appConfig&&o.currentPageId===e.currentPageId&&o.currentDialogId===e.currentDialogId&&o.browserSizeMode===e.browserSizeMode||o.currentSelectedItemId===this.state.currentSelectedItemId)if(o.currentSelectedItemId!==n){const e=M(i,[o.currentSelectedItemId]);a={currentSelectedItemId:o.currentSelectedItemId,itemJson:e},this.expandIds=R(e)}else{if(void 0!==e.lockLayout&&this.props.lockLayout!==e.lockLayout)return;a={itemJson:this.getItemJsonByAppConfig(o)}}else{const e=M(this.getItemJsonByAppConfig(o),[o.currentSelectedItemId]);a={currentSelectedItemId:o.currentSelectedItemId,itemJson:e},this.expandIds=R(e)}r&&this.setState(a)}}render(){const{itemJson:e,showSearch:o}=this.state,{theme:n}=this.props;return(0,t.jsx)("div",{css:rt(this.props,this.state)},(0,t.jsx)("div",{className:"outline-list-top"},(0,t.jsx)("div",{className:"w-100 d-flex justify-content-center"},(0,t.jsx)(Tt,{color:n.colors.palette.dark[400]})),(0,t.jsx)("div",{className:"d-flex justify-content-between align-items-end"},(0,t.jsx)("div",{className:"outline-title h5 mb-0 text-truncate"},this.formatMessage("outline")),(0,t.jsx)("div",{className:"d-flex outline-top-btns"},(0,t.jsx)(i.Button,{title:this.formatMessage("search"),size:"sm",type:"tertiary",icon:!0,className:"search-btn",onClick:this.handleSearchBtnClick},(0,t.jsx)(Ct,{className:"search-icon"})))),(0,t.jsx)(i.Collapse,{isOpen:o,onEntered:this.handleSearchOpened},(0,t.jsx)(ke,{theme:n,placeholder:this.formatMessage("search"),searchText:this.state.filterText,onSearchTextChange:this.handleSearchTextChange,onSubmit:this.handleSearchSubmit,inputRef:e=>{this.searchInput=e}}))),(0,t.jsx)("div",{className:"w-100 outline-tree-container"},(0,t.jsx)(L,{hideRoot:!0,className:"outline-tree",itemJson:e,onClickItem:this.handleClickItem,handleExpand:this.handleExpand})))}}const Ot=t.ReactRedux.connect(((e,o)=>{var i,n,s,a,r,l,d,c,p,g,h,u,m,f,v,b,y,I,x,w,S,C,P,D,T,j,k,O,A,M,R,B,N,L,E;const z=o.currentPageId,J=e.appStateInBuilder&&e.appStateInBuilder.appRuntimeInfo&&e.appStateInBuilder.appRuntimeInfo.selection,F=e.appStateInBuilder&&e.appStateInBuilder.appConfig,$=J&&F.layouts[J.layoutId]&&F.layouts[J.layoutId].content&&F.layouts[J.layoutId].content[J.layoutItemId];let H,V,U;if($)if($.type===t.LayoutItemType.Section){const t=null===(s=null===(n=null===(i=e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===n?void 0:n.sectionNavInfos)||void 0===s?void 0:s[$.sectionId],o=null===(a=e.appStateInBuilder)||void 0===a?void 0:a.appConfig.sections[$.sectionId];V=null!==(r=null==t?void 0:t.currentViewId)&&void 0!==r?r:null==o?void 0:o.views[0],H=V?Oe(Object.assign(Object.assign({},J),{id:V,sectionId:$.sectionId}),Ce.View):Oe(Object.assign({id:$.sectionId},J),Ce.Section)}else if($.type===t.LayoutItemType.ScreenGroup){const t=null===(c=null===(d=null===(l=e.appStateInBuilder)||void 0===l?void 0:l.appRuntimeInfo)||void 0===d?void 0:d.screenGroupNavInfos)||void 0===c?void 0:c[$.screenGroupId],o=e.appStateInBuilder.appConfig.screenGroups[$.screenGroupId].screens[null!==(p=null==t?void 0:t.activeIndex)&&void 0!==p?p:0],i=null===(g=e.appStateInBuilder)||void 0===g?void 0:g.appConfig.screens[o];U=null==i?void 0:i.id,H=U?Oe(Object.assign(Object.assign({},J),{id:U,screenGroupId:$.screenGroupId}),Ce.Screen):Oe(Object.assign({id:$.screenGroupId},J),Ce.ScreenGroup)}else $.type===t.LayoutItemType.Widget&&(H=Oe(Object.assign({id:$.widgetId},J),Ce.Widget));const W=!!(null===(u=null===(h=null==F?void 0:F.pages)||void 0===h?void 0:h[z])||void 0===u?void 0:u.header),G=!!(null===(f=null===(m=null==F?void 0:F.pages)||void 0===m?void 0:m[z])||void 0===f?void 0:f.footer);return{currentSelectedItemId:H,selection:J,activePagePart:null===(b=null===(v=null==e?void 0:e.appStateInBuilder)||void 0===v?void 0:v.appRuntimeInfo)||void 0===b?void 0:b.activePagePart,allowEditableForDialog:!!(null===(w=null===(x=null===(I=null===(y=null==e?void 0:e.appStateInBuilder)||void 0===y?void 0:y.appConfig)||void 0===I?void 0:I.dialogs)||void 0===x?void 0:x[o.currentDialogId])||void 0===w?void 0:w.layout[o.browserSizeMode]),allowEditableForHeader:!(!W||!(null===(P=null===(C=null===(S=null==e?void 0:e.appStateInBuilder)||void 0===S?void 0:S.appConfig)||void 0===C?void 0:C.header)||void 0===P?void 0:P.layout[o.browserSizeMode])),allowEditableForFooter:!(!G||!(null===(j=null===(T=null===(D=null==e?void 0:e.appStateInBuilder)||void 0===D?void 0:D.appConfig)||void 0===T?void 0:T.footer)||void 0===j?void 0:j.layout[o.browserSizeMode])),allowEditable:!!(null===(M=null===(A=null===(O=null===(k=null==e?void 0:e.appStateInBuilder)||void 0===k?void 0:k.appConfig)||void 0===O?void 0:O.pages)||void 0===A?void 0:A[z])||void 0===M?void 0:M.layout[o.browserSizeMode]),appConfig:F,lockLayout:null===(N=null===(B=null===(R=null==e?void 0:e.appStateInBuilder)||void 0===R?void 0:R.appConfig)||void 0===B?void 0:B.forBuilderAttributes)||void 0===N?void 0:N.lockLayout,enableHeader:W,enableFooter:G,runMode:(null===(E=null===(L=null==e?void 0:e.appStateInBuilder)||void 0===L?void 0:L.appRuntimeInfo)||void 0===E?void 0:E.appMode)===t.AppMode.Run}}))(kt);var At=function(e,t,o,i){return new(o||(o=Promise))((function(n,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};class Mt extends t.React.PureComponent{constructor(e){super(e),this.lastResizeCall=null,this.emptyLayout={},this.getUniqueIds=(e,o,i)=>{const n=[];for(let s=0;s<i;s++){const i=t.appConfigUtils.getUniqueId(e,o);n.push(i),e=e.setIn([o+"s",i],{id:i})}return n},this.getUniqueLabels=(e,o,i)=>{const n=[];for(let s=0;s<i;s++){const i=t.appConfigUtils.getUniqueId(e,o),s=t.appConfigUtils.getUniqueLabel(e,o,o);n.push(s),e=e.setIn([o+"s",i],{id:i,label:s})}return n},this.changeSelection=e=>{o.builderAppSync.publishChangeSelectionToApp(e)},this.changeContent=e=>{const t=e.id.split(d);this.changeSelection({layoutId:t[0],layoutItemId:t[1],autoScroll:!0})},this.changeView=e=>{const t=e.id.split(d);this.changeSelection({layoutId:t[0],layoutItemId:t[1],autoScroll:!0}),o.builderAppSync.publishSectionNavInfoToApp(t[2],{currentViewId:t[3],useProgress:!1})},this.changeScreen=e=>{const t=e.id.split(d);this.changeSelection({layoutId:t[0],layoutItemId:t[1],autoScroll:!0}),o.builderAppSync.publishScreenGroupNavInfoToApp(t[2],e.index)},this.changeLayout=e=>{},this.getCurrentPageId=()=>{let e;const t=(0,o.getAppConfigAction)().appConfig;return t.pageStructure.some(((i,n)=>{const s=Object.keys(i)[0];if(o.appConfigUtils.isRealPage(t,s))return e=s,!0})),e||t.pageStructure.some(((i,n)=>i[Object.keys(i)[0]].some((i=>{if(o.appConfigUtils.isRealPage(t,i))return e=i,!0})))),o.builderAppSync.publishPageChangeToApp(e),e},this.renderActionBtn=(e,o,n)=>(0,t.jsx)(i.Button,{title:e,size:"sm",color:"link",className:" rounded icon page-action-btn",onClick:n},(0,t.jsx)(i.Icon,{size:12,icon:o})),this.PageListWrapper=()=>(0,t.jsx)(ae,{onDefaultClick:this.setHomePage,addPageWithType:this.addPageWithType,isPageTemplateLoading:this.state.isPageTemplateLoading,editablePageItemId:this.state.editablePageItemId,theme:this.props.theme,changeEditablePageItemId:this.changeEditablePageId,currentPageItemId:this.props.currentDialogId?null:this.props.currentPageId,removePage:this.removePage,intl:this.props.intl,duplicatePage:this.duplicatePage,renamePage:this.renamePage,reOrderPage:this.orderPageBelowPage,onClickPage:this.changeCurrentPage,movePageIntoPage:this.movePageIntoPage,browserSizeMode:this.props.browserSizeMode}),this.DialogListWrapper=()=>(0,t.jsx)(Se,{forceRefresh:"dialog"===this.state.selectedTabId,onSplashClick:this.setSplashDialog,theme:this.props.theme,intl:this.props.intl,currentDialogItemId:this.props.currentDialogId,addDialog:this.addDialog,removeDialog:this.removeDialog,duplicateDialog:this.duplicateDialog,renameDialog:this.renameDialog,editableDialogItemId:this.state.editableDialogItemId,changeEditableDialogItemId:this.changeEditableDialogId,reOrderDialog:this.orderDialogBelowDialog,onClickDialog:this.changeCurrentDialog}),this.getStyle=e=>{const{pageTocH:o}=this.state;return t.css`
      overflow: hidden;

      .page-toc {
        background-color: ${e.colors.palette.light[300]};
        height: ${o>0?`${o}px`:"33%"};

        .page-list,
        .dialog-list{
          height: calc(100% - 10px);
        }
      }

      .outline-toc {
        background-color: ${e.colors.palette.light[300]};
        border: 0;
        border-top: 2px solid ${e.colors.palette.light[800]};
        height: calc(100% - ${o>0?`${o}px`:"33%"});
      }

    `},this.onTabSelect=e=>{"page"===e&&(0,s.changeCurrentPage)(this.props.currentPageId),this.setState({selectedTabId:e})},this.state={editablePageItemId:"",editableDialogItemId:"",editableOutlineItemId:"",isTemplatePopoverOpen:!1,pageTocH:-1,selectedTabId:null,isPageTemplateLoading:!1},this.resizeRef=t.React.createRef(),this.pageTocRef=t.React.createRef(),this.popoverRef=t.React.createRef(),this.changeEditablePageId=this.changeEditablePageId.bind(this),this.addPageWithType=this.addPageWithType.bind(this),this.handleOutlineItemClick=this.handleOutlineItemClick.bind(this),this.changeCurrentPage=this.changeCurrentPage.bind(this),this.movePageIntoPage=this.movePageIntoPage.bind(this),this.removePage=this.removePage.bind(this),this.setHomePage=this.setHomePage.bind(this),this.formatMessage=this.formatMessage.bind(this),this.loadPageTemplate=this.loadPageTemplate.bind(this),this.parsePageTemplate=this.parsePageTemplate.bind(this),this.duplicatePage=this.duplicatePage.bind(this),this.renamePage=this.renamePage.bind(this),this.orderPageBelowPage=this.orderPageBelowPage.bind(this),this.changeEditableDialogId=this.changeEditableDialogId.bind(this),this.addDialog=this.addDialog.bind(this),this.removeDialog=this.removeDialog.bind(this),this.renameDialog=this.renameDialog.bind(this),this.duplicateDialog=this.duplicateDialog.bind(this),this.setSplashDialog=this.setSplashDialog.bind(this),this.changeCurrentDialog=this.changeCurrentDialog.bind(this),this.loadDialogTemplate=this.loadDialogTemplate.bind(this),this.parseDialogTemplate=this.parseDialogTemplate.bind(this),this.orderDialogBelowDialog=this.orderDialogBelowDialog.bind(this)}componentDidMount(){this.resizeRef&&this.resizeRef.current&&(this.interactable=(0,l.interact)(this.resizeRef.current).resizable({edges:{top:!0,left:!1,bottom:!1,right:!1},modifiers:[l.interact.modifiers.restrictEdges({outer:"parent",endOnly:!0}),l.interact.modifiers.restrictSize({min:{width:20,height:100}})],inertia:!1,onstart:e=>{e.stopPropagation()},onmove:e=>{e.stopPropagation(),this.lastResizeCall&&cancelAnimationFrame(this.lastResizeCall);const t=e.rect;let o=0;this.pageTocRef.current&&(o=this.pageTocRef.current.getBoundingClientRect().top);const i=t.top-o;i<100||(this.lastResizeCall=requestAnimationFrame((()=>{this.setState({pageTocH:i})})))},onend:e=>{e.stopPropagation(),this.lastResizeCall&&cancelAnimationFrame(this.lastResizeCall),this.lastResizeCall=requestAnimationFrame((()=>{const t=e.rect;let o=0;this.pageTocRef.current&&(o=this.pageTocRef.current.getBoundingClientRect().top),this.lastResizeCall=requestAnimationFrame((()=>{this.setState({pageTocH:t.top-o})}))}))}}))}componentWillUnmount(){this.lastResizeCall&&cancelAnimationFrame(this.lastResizeCall),this.interactable&&(this.interactable.unset(),this.interactable=null)}handleOutlineItemClick(e){e.type!==Ce.Label&&(e.type===Ce.ScreenGroup||e.type===Ce.Section||e.type===Ce.Widget?this.changeContent(e):e.type===Ce.View?this.changeView(e):[Ce.Screen,Ce.ScreenMainStage,Ce.ScreenSrollingPanel].includes(e.type)?this.changeScreen(e):e.type===Ce.Layout&&this.changeLayout(e),e.pagePart&&o.builderAppSync.publichActivePagePartChangeToApp(e.pagePart))}changeCurrentPage(e){(0,s.changeCurrentPage)(e)}changeEditablePageId(e){e!==this.state.editablePageItemId&&this.setState({editablePageItemId:e})}movePageIntoPage(e,i){if(e===i)return;const n=(0,o.getAppConfigAction)().appConfig;(0,o.getAppConfigAction)().movePageIntoPage(e,i).exec(),n.pages[e].type===t.PageType.Normal&&this.changeCurrentPage(e)}removePage(e){const t=(0,o.getAppConfigAction)().appConfig,i=t.pages[e];let n;if(t.pageStructure.some(((i,s)=>{const a=Object.keys(i)[0];return a!==e&&(o.appConfigUtils.isRealPage(t,a)?(n=a,!0):void 0)})),n||t.pageStructure.some(((i,s)=>{const a=Object.keys(i)[0];return a!==e&&!!i[a].some((i=>i!==e&&(o.appConfigUtils.isRealPage(t,i)?(n=i,!0):void 0)))})),!n)return;let s=i.isDefault;s||t.pageStructure.some(((o,i)=>{if(Object.keys(o)[0]===e)return t.pageStructure[i][e].some((e=>{if(t.pages[e].isDefault)return s=!0,!0})),!0})),o.builderAppSync.publishPageChangeToApp(n),(0,o.getAppConfigAction)().removePage(e,s?n:null).exec()}setHomePage(e){(0,o.getAppConfigAction)().replaceHomePage(e).exec()}duplicatePage(e){const i=(0,o.getAppConfigAction)().appConfig,n=(0,o.getAppConfigAction)(),s=n.duplicatePage(e);n.exec();const a=i.pages[e];a.type!==t.PageType.Folder&&a.type!==t.PageType.Link&&this.changeCurrentPage(s.id)}duplicateDialog(e){const t=(0,o.getAppConfigAction)(),i=t.duplicateDialog(e);t.exec(),this.changeCurrentDialog(i.id)}renamePage(e,t){return!(!t||""===t||((0,o.getAppConfigAction)().editPageProperty(e,"label",t).exec(),this.changeEditablePageId(""),0))}orderPageBelowPage(e,t,i){(0,o.getAppConfigAction)().orderPageToPage(e,t,i).exec()}formatMessage(e){const{intl:t}=this.props,o=Object.assign({},r,i.defaultMessages);return t.formatMessage({id:e,defaultMessage:o[e]})}addPageWithType(e,i){let n;const s=(0,o.getAppConfigAction)().appConfig;switch(e){case"page":this.setState({isPageTemplateLoading:!0}),this.loadPageTemplate(i).then((e=>{this.setState({isPageTemplateLoading:!1}),n=e,n&&(o.builderAppSync.publishChangeBrowserSizeModeToApp((0,o.getAppConfigAction)().appConfig.mainSizeMode),this.changeEditablePageId(n.id))}));break;case"link":n=(0,t.Immutable)({}).merge({id:t.appConfigUtils.getUniqueId(s,"page"),type:t.PageType.Link,label:t.appConfigUtils.getUniqueLabel(s,"page",this.formatMessage("link")),linkUrl:"#",isVisible:!0}),(0,o.getAppConfigAction)().addPage(n).exec();break;case"folder":n=(0,t.Immutable)({}).merge({id:t.appConfigUtils.getUniqueId(s,"page"),type:t.PageType.Folder,label:t.appConfigUtils.getUniqueLabel(s,"page",this.formatMessage("folder")),isVisible:!0}),(0,o.getAppConfigAction)().addPage(n).exec()}return n&&this.changeEditablePageId(n.id),n}loadPageTemplate(e){return At(this,void 0,void 0,(function*(){const t=(0,o.getAppConfigAction)().appConfig;return yield this.parsePageTemplate(e,t)}))}parsePageTemplate(e,i){return At(this,void 0,void 0,(function*(){return e?((0,t.getAppStore)().dispatch(t.appActions.setIsBusy(!0,t.LoadingType.Primary)),yield(0,n.createPageFromTemplate)(i,e,{}).then((({appConfig:e,newPageId:i})=>{const n=e.pages[i];if(!n)return;const s=e.set("pageStructure",e.pageStructure.concat([{[n.id]:[]}]));return(0,o.getAppConfigAction)(s).exec(),this.changeCurrentPage(n.id),this.changeEditablePageId(n.id),(0,t.getAppStore)().dispatch(t.appActions.setIsBusy(!1)),n})).catch((()=>(0,t.getAppStore)().dispatch(t.appActions.setIsBusy(!0,t.LoadingType.Secondary))))):yield Promise.resolve()}))}changeCurrentDialog(e){(0,s.changeCurrentDialog)(e)}changeEditableDialogId(e){e!==this.state.editableDialogItemId&&this.setState({editableDialogItemId:e})}removeDialog(e){let i=null;const n=(0,o.getAppConfigAction)().appConfig,a=n.dialogs,r=a[e],{currentDialogId:l}=this.props;if(e===l){let t=null;Object.keys(a).some(((e,o)=>{const n=a[e];if(n.mode===r.mode){if(n.index===r.index-1)return i=n.id,!0;n.index===r.index+1&&(t=n.id)}})),i||(i=t||Object.keys(a).filter((t=>a[t].mode===r.mode&&0===a[t].index&&a[t].id!==e))[0]||Object.keys(a).filter((e=>a[e].mode!==r.mode&&0===a[e].index))[0]);const n=(0,s.handelDialogInfos)(i);o.builderAppSync.publishDialogInfosChangeToApp(n),o.builderAppSync.publishDialogChangeToApp(i)}(0,o.getAppConfigAction)().removeDialog(e).exec(),r.isSplash||r.mode!==t.DialogMode.Fixed||o.utils.getPageListByDialogId(n.pages,e).map((e=>{(0,o.getAppConfigAction)().editPageProperty(e.id,"autoOpenDialogId","").exec()}))}setSplashDialog(e){(0,o.getAppConfigAction)().replaceSplashDialog(e).exec()}renameDialog(e,t){return!(!t||""===t||((0,o.getAppConfigAction)().editDialogProperty(e,"label",t).exec(),this.changeEditableDialogId(""),0))}orderDialogBelowDialog(e,t,i){(0,o.getAppConfigAction)().orderDialogToDialog(e,t,i).exec()}addDialog(e){const t=this.loadDialogTemplate(e);return o.builderAppSync.publishChangeBrowserSizeModeToApp((0,o.getAppConfigAction)().appConfig.mainSizeMode),t}loadDialogTemplate(e){const t=(0,o.getAppConfigAction)().appConfig;this.parseDialogTemplate(e,t)}parseDialogTemplate(e,i){e&&((0,t.getAppStore)().dispatch(t.appActions.setIsBusy(!0,t.LoadingType.Secondary)),(0,n.createDialogFromTemplate)(i,e,{}).then((({appConfig:e,newDialogId:i})=>{const n=e.dialogs[i];return(0,o.getAppConfigAction)(e).exec(),this.changeCurrentDialog(n.id),this.changeEditableDialogId(n.id),(0,t.getAppStore)().dispatch(t.appActions.setIsBusy(!1)),n})).catch((()=>(0,t.getAppStore)().dispatch(t.appActions.setIsBusy(!0)))))}render(){const{PageListWrapper:e,DialogListWrapper:o}=this,{currentPageId:n,currentDialogId:s,browserSizeMode:a}=this.props;let r;return r=s||"dialog"===this.state.selectedTabId?"dialog":"page",(0,t.jsx)("div",{css:this.getStyle(this.props.theme),className:"jimu-widget widget-builder-toc bg-white w-100 h-100"},(0,t.jsx)("div",{className:"page-toc",ref:this.pageTocRef},(0,t.jsx)(i.Tabs,{value:r,type:"underline",css:t.css`
          height: 100%;
          .jimu-nav {
            border-bottom: none;
            padding:12px 1px 5px 1px;
            width: calc(100% - 60px);
            overflow: hidden;
          }
          .tab-content{
            height: calc(100% - 56px);
            .tab-pane{
              width: 100%;
            }
          }
          .nav-item {
            margin: 0 1rem;
            &:last-of-type{
              margin-right: 0;
            }
            .nav-link{
              padding: 9px 0;
            }
          }
        `,onChange:this.onTabSelect},(0,t.jsx)(i.Tab,{id:"page",title:this.formatMessage("page")},(0,t.jsx)("div",{className:"page-list"},(0,t.jsx)(e,null))),(0,t.jsx)(i.Tab,{id:"dialog",title:this.formatMessage("dialog")},(0,t.jsx)("div",{className:"dialog-list"},(0,t.jsx)(o,null))))),(0,t.jsx)("div",{className:"outline-toc",ref:this.resizeRef},(0,t.jsx)(Ot,{currentPageId:n,currentDialogId:s,browserSizeMode:a,onClickItem:this.handleOutlineItemClick,editableOutlineItemId:this.state.editableOutlineItemId,theme:this.props.theme,intl:this.props.intl})))}}Mt.mapExtraStateProps=e=>{var t,o,i,n,s,a,r;return{currentPageId:null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo)||void 0===o?void 0:o.currentPageId,currentDialogId:null===(n=null===(i=null==e?void 0:e.appStateInBuilder)||void 0===i?void 0:i.appRuntimeInfo)||void 0===n?void 0:n.currentDialogId,browserSizeMode:null===(s=null==e?void 0:e.appStateInBuilder)||void 0===s?void 0:s.browserSizeMode,dialogInfos:null===(r=null===(a=null==e?void 0:e.appStateInBuilder)||void 0===a?void 0:a.appRuntimeInfo)||void 0===r?void 0:r.dialogInfos}}})(),g})())}}}));