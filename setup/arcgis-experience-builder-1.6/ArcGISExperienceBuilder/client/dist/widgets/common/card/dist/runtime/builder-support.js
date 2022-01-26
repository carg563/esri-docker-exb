System.register(["jimu-core","jimu-core/dnd","jimu-ui","jimu-layouts/layout-runtime","jimu-for-builder","jimu-layouts/layout-builder","jimu-theme"],(function(e,t){var o={},n={},r={},i={},s={},p={},u={};return{setters:[function(e){o.BrowserSizeMode=e.BrowserSizeMode,o.React=e.React,o.getAppStore=e.getAppStore,o.jsx=e.jsx},function(e){n.interact=e.interact},function(e){r.Button=e.Button,r.ButtonGroup=e.ButtonGroup,r.Dropdown=e.Dropdown,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.DropdownToggle=e.DropdownToggle,r.Popper=e.Popper},function(e){i.searchUtils=e.searchUtils},function(e){s.getAppConfigAction=e.getAppConfigAction},function(e){p.GLOBAL_DRAGGING_CLASS_NAME=e.GLOBAL_DRAGGING_CLASS_NAME,p.GLOBAL_H5_DRAGGING_CLASS_NAME=e.GLOBAL_H5_DRAGGING_CLASS_NAME,p.GLOBAL_RESIZING_CLASS_NAME=e.GLOBAL_RESIZING_CLASS_NAME},function(e){u.withBuilderStyles=e.withBuilderStyles,u.withBuilderTheme=e.withBuilderTheme}],execute:function(){e((()=>{"use strict";var e={1810:e=>{e.exports=o},32008:e=>{e.exports=n},3297:e=>{e.exports=s},69883:e=>{e.exports=p},29169:e=>{e.exports=i},83016:e=>{e.exports=u},21835:e=>{e.exports=r}},t={};function d(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,d),r.exports}d.d=(e,t)=>{for(var o in t)d.o(t,o)&&!d.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{d.r(a),d.d(a,{default:()=>u});var e=d(1810),t=d(32008),o=d(21835),n=d(29169),r=d(3297),i=d(69883);class s extends e.React.PureComponent{constructor(e){super(e),this.onDropDownToggle=e=>{e.stopPropagation();const{isDropDownOpen:t,onDropDownOpenChange:o}=this.props;if(void 0!==t)o&&o(!t);else{const{isOpen:e}=this.state;this.setState({isOpen:!e})}},this.onItemClick=(e,t)=>{const{isDropDownOpen:o,onDropDownOpenChange:n}=this.props;void 0!==o?n&&n(!1):this.setState({isOpen:!1}),t.event(e,t),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},this.onDropDownMouseClick=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},this.state={isOpen:!1};const{withBuilderStyle:t}=e;this.MyDropdown=t?t(o.Dropdown):o.Dropdown,this.MyDropdownToggle=t?t(o.DropdownToggle):o.DropdownToggle,this.MyDropdownMenu=t?t(o.DropdownMenu):o.DropdownMenu,this.MyDropdownItem=t?t(o.DropdownItem):o.DropdownItem}render(){const{items:t,toggleContent:o,caret:n,toggleType:r,menuContent:i,modifiers:s,toggleIsIcon:p,theme:u,isDropDownOpen:d,size:a,appendToBody:l,toggleTitle:c,direction:g,menuCss:h,className:w,showActive:A,activeLabel:m,fluid:S}=this.props;let{isOpen:y}=this.state;y=void 0===d?y:d;const{MyDropdown:I,MyDropdownToggle:D,MyDropdownMenu:B,MyDropdownItem:L}=this;return(0,e.jsx)(I,{size:a,toggle:this.onDropDownToggle,direction:g,fluid:S,isOpen:y,className:`my-dropdown ${w}`},o&&(0,e.jsx)(D,{icon:p,title:c,size:a,type:r,caret:n},o&&o(u)),(0,e.jsx)(B,{appendToBody:l,modifiers:s,css:h&&h(u)},i?i(u):t&&t.asMutable().map(((t,o)=>!t.hide&&(0,e.jsx)(L,{key:o,className:"no-user-select",active:A&&t.label===m,onClick:e=>this.onItemClick(e,t)},t.label)))))}}var p=d(83016);const u={ButtonGroup:o.ButtonGroup,interact:t.interact,searchUtils:n.searchUtils,getAppConfigAction:r.getAppConfigAction,GLOBAL_DRAGGING_CLASS_NAME:i.GLOBAL_DRAGGING_CLASS_NAME,GLOBAL_RESIZING_CLASS_NAME:i.GLOBAL_RESIZING_CLASS_NAME,GLOBAL_H5_DRAGGING_CLASS_NAME:i.GLOBAL_H5_DRAGGING_CLASS_NAME,withBuilderStyle:p.withBuilderStyles,withBuilderTheme:p.withBuilderTheme,BuilderDropDown:(0,p.withBuilderTheme)((t=>e.React.createElement(s,Object.assign({},t,{withBuilderStyle:p.withBuilderStyles})))),BuilderPopper:(0,p.withBuilderTheme)(o.Popper),BuilderButton:(0,p.withBuilderTheme)(o.Button),selectionIsSelf:(e,t,o)=>{if(!e||!e.layoutItemId||!e.layoutId)return!1;const r=n.searchUtils.findLayoutItem(o,e);return!(!r||!r.widgetId||r.widgetId!==t)},selectionInCard:(t,o,r,i=!0)=>{if(!t||!t.layoutItemId||!t.layoutId)return!1;let s;return i?s=n.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(r,t,o,(0,e.getAppStore)().getState().browserSizeMode):(s=[],s.push(...n.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(r,t,o,e.BrowserSizeMode.Large)),s.push(...n.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(r,t,o,e.BrowserSizeMode.Medium)),s.push(...n.searchUtils.getRelatedLayoutItemsInWidgetByLayoutInfo(r,t,o,e.BrowserSizeMode.Small))),s.length>0}}})(),a})())}}}));