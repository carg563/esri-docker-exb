System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/advanced/setting-components"],(function(e,t){var o={},a={},i={},r={};return{setters:[function(e){o.BrowserSizeMode=e.BrowserSizeMode,o.DialogMode=e.DialogMode,o.PageType=e.PageType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.jsx=e.jsx,o.utils=e.utils},function(e){a.builderAppSync=e.builderAppSync,a.getAppConfigAction=e.getAppConfigAction},function(e){i.Button=e.Button,i.Dropdown=e.Dropdown,i.DropdownItem=e.DropdownItem,i.DropdownMenu=e.DropdownMenu,i.DropdownToggle=e.DropdownToggle,i.Icon=e.Icon,i.styleUtils=e.styleUtils},function(e){r.changeCurrentDialog=e.changeCurrentDialog,r.changeCurrentPage=e.changeCurrentPage}],execute:function(){e((()=>{var e={1335:e=>{e.exports='<svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 3.5v-3a.5.5 0 011 0v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3z" fill-rule="evenodd"></path></svg>'},2240:e=>{e.exports='<svg viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h8v1H0z" fill-rule="evenodd"></path></svg>'},1810:e=>{"use strict";e.exports=o},3297:e=>{"use strict";e.exports=a},1835:e=>{"use strict";e.exports=i},3080:e=>{"use strict";e.exports=r}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var s={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(s),n.d(s,{default:()=>h});var e=n(1810),t=n(1835),o=n(3297),a=n(3080);function i(o){const{pageId:a,label:i,isInFolder:r,isFolder:n,isActive:s,hasSubPage:l,onSelect:p}=o,d=e.React.useCallback((()=>{p(a)}),[a,p]);return(0,e.jsx)(t.DropdownItem,{className:(0,e.classNames)({"page-item":!n||l,"in-folder":r,folder:n&&!l,"has-subpage":l,active:s}),active:s,header:n&&!l,onClick:d},(0,e.jsx)("div",{className:"text-truncate w-100",title:i},i))}function r(e){(0,a.changeCurrentPage)(e)}function l(t){const a=e.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.pageStructure})),n=[];if(a){const t=(0,o.getAppConfigAction)().appConfig.pages;a.forEach((o=>{var a,i;const r=Object.keys(o)[0],s=t[r];if(s.type===e.PageType.Normal)if((null===(a=o[r])||void 0===a?void 0:a.length)>0){const a=[];o[r].forEach((o=>{const i=t[o];i.type===e.PageType.Normal&&a.push({pageId:o,label:i.label,isInFolder:!0})})),a.length>0?(n.push({pageId:r,label:s.label,isFolder:!0,hasSubPage:!0}),n.push(...a)):n.push({pageId:r,label:s.label})}else n.push({pageId:r,label:s.label});else if(s.type===e.PageType.Folder){const a=[];(null===(i=o[r])||void 0===i?void 0:i.length)>0&&o[r].forEach((o=>{const i=t[o];i.type===e.PageType.Normal&&a.push({pageId:o,label:i.label,isInFolder:!0})})),a.length>0&&(n.push({pageId:r,label:s.label,isFolder:!0}),n.push(...a))}}))}return(0,e.jsx)(e.React.Fragment,null,n.map((o=>(0,e.jsx)(i,Object.assign({key:o.pageId,onSelect:r,isActive:o.pageId===t.currentPageId},o)))))}function p(e){(0,a.changeCurrentDialog)(e)}function d(o){const a=e.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.dialogs}));if(!a||0===Object.keys(a).length)return null;const i=[],r=[];return Object.keys(a).forEach((t=>{const o=a[t];o.mode===e.DialogMode.Fixed?i.push({id:t,label:o.label}):o.mode===e.DialogMode.Anchored&&r.push({id:t,label:o.label})})),(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(t.DropdownItem,{header:!0,className:"page-header"},o.formatMessage("dialog")),(0,e.jsx)(t.DropdownItem,{className:"folder",header:!0},o.formatMessage("fixedWindows")),i.map((a=>(0,e.jsx)(t.DropdownItem,{key:a.id,className:(0,e.classNames)("page-item in-folder",{active:o.currentDialogId===a.id}),active:o.currentDialogId===a.id,onClick:()=>p(a.id)},(0,e.jsx)("div",{className:"text-truncate w-100",title:a.label},a.label)))),(0,e.jsx)(t.DropdownItem,{className:"folder",header:!0},o.formatMessage("anchoredWindows")),r.map((a=>(0,e.jsx)(t.DropdownItem,{key:a.id,className:(0,e.classNames)("page-item in-folder",{active:o.currentDialogId===a.id}),active:o.currentDialogId===a.id,onClick:()=>p(a.id)},(0,e.jsx)("div",{className:"text-truncate w-100",title:a.label},a.label)))))}const c=n(2240),g=n(1335),u=.5;class h extends e.React.PureComponent{constructor(a){super(a),this.formatMessage=(e,t)=>this.props.intl.formatMessage({id:e},t),this.onPreviewScaleChange=e=>{e.stopPropagation();const t=this.fromRangeToZoomScale(Number(e.currentTarget.value));this.updateScale(t)},this.zoomout=e=>{e.stopPropagation();const{zoomScale:t}=this.props,o=Math.round(100*t),a=10*Math.floor(o/10);let i;i=o===a?t-.1:a/100,i=Math.round(10*i)/10,i=Math.max(u,i),this.updateScale(i)},this.zoomin=e=>{e.stopPropagation();const{zoomScale:t}=this.props,o=Math.round(100*t),a=10*Math.ceil(o/10);let i;i=o===a?t+.1:a/100,i=Math.round(10*i)/10,i=Math.min(2,i),this.updateScale(i)},this.zoomToFit=e=>{e.stopPropagation();const{viewportSize:t}=this.props;let o=this.calAvailableWidth()/t.width;o=Math.floor(100*o)/100,o=Math.max(.5,Math.min(2,o)),this.updateScale(o)},this.zoomToNormal=e=>{e.stopPropagation(),this.updateScale(1)},this.stopPropgation=e=>{e.stopPropagation()},this.toggleSettingPanel=()=>{(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange("right-sidebar","collapse",!this.props.settingPanelVisible))},this.onDropDownToggle=e=>{const{isPageListOpen:t}=this.state;this.setState({isPageListOpen:!t}),e.stopPropagation()},this.handlePageListItemClick=(e,t)=>{e.stopPropagation();const{currentPageId:a}=this.props;t!==a&&(o.builderAppSync.publishChangeSelectionToApp(null),o.builderAppSync.publishPageChangeToApp(t))},this.getDropdownStyle=()=>e.css`
      padding: unset;
      max-width: 240px;

      .page-header {
        height: 2rem;
        background-color: var(--light-700);
        color: var(--dark-800) !important;
        font-size: 14px;
        line-height: 2rem;
        display: flex !important;
        align-items: center;
      }

      .page-item {
        font-size: 13px;
        color: var(--black) !important;
        padding: 0 24px !important;
        height: 2rem;

        &:not(.active):hover {
          background: var(--light-600) !important;
        }

        &.active {
          background: var(--primary);
        }
      }

      .folder {
        font-size: 13px;
        color: var(--dark-500) !important;
        padding: 0 !important;
        margin: 0 24px;
        height: 2rem;
        line-height: 2rem;
      }

      .page-header,
      .folder {
        &:focus {
          outline: none;
        }
      }

      .in-folder {
        padding-left: 2.25rem !important;
      }
    `,this.renderPageList=()=>{var o;const{isPageListOpen:a}=this.state,{pages:i,currentPageId:r,currentDialogId:n,currentDialogLabel:s}=this.props,p=n?s:null===(o=null==i?void 0:i[r])||void 0===o?void 0:o.label;return(0,e.jsx)("div",{className:"d-flex page-list align-items-center ml-3"},(0,e.jsx)("div",{className:"page-label"},n?this.formatMessage("dialog"):this.formatMessage("page"),":"),(0,e.jsx)(t.Dropdown,{direction:"up",size:"sm",toggle:this.onDropDownToggle,isOpen:a},(0,e.jsx)(t.DropdownToggle,{className:"text-truncate",title:p,css:e.css`max-width: 240px`,icon:!0,size:"sm",type:"tertiary",caret:!0},p),(0,e.jsx)(t.DropdownMenu,{css:this.getDropdownStyle()},(0,e.jsx)(t.DropdownItem,{header:!0,className:"page-header"},this.formatMessage("page")),(0,e.jsx)(l,{currentPageId:n?null:r}),(0,e.jsx)(d,{currentDialogId:n,formatMessage:this.formatMessage}))))},this.state={isPageListOpen:!1}}calAvailableWidth(){const e=document.querySelector('div[data-widgetid="app-loader"]').getBoundingClientRect();let o=parseFloat(t.styleUtils.remToPixel("3rem"));return isNaN(o)&&(o=48),e.width-o-10}updateScale(e){o.builderAppSync.publichChangeZoomScaleToApp(e)}percentageZoomScale(){const{zoomScale:t}=this.props;return e.utils.formatPercentageNumber(`${Math.round(100*t)}%`)}mapStep(){return.1}fromZoomScaleToRange(e){return e<1?50*(e-u)/.5+0:e>1?50*(e-1)/1+50:50}fromRangeToZoomScale(e){return e<50?.5*(e-0)/50+u:e>50?1*(e-50)/50+1:1}calBackground(){const t=100*(this.fromZoomScaleToRange(this.props.zoomScale)-0)/100+"%",o=`linear-gradient(to right, var(--dark-600) 0%, var(--dark-600) ${t}, var(--light-800) ${t}, var(--light-600))`;return e.css`
      &::-webkit-slider-runnable-track {
        background: ${o} !important;
      }
      &::-moz-range-track {
        background: ${o} !important;
      }
      &::-ms-track {
        background: ${o} !important;
      }
    `}render(){const{zoomScale:o,settingPanelVisible:a}=this.props;return(0,e.jsx)("div",{css:(i=this.props.theme,e.css`
    overflow: hidden;
    height: 100%;
    background-color: var(--secondary);
    border-top: 1px solid var(--light-800);

    .zoom-section {
      .percentage-label {
        width: 4rem;
        color: var(--dark-800);
      }
      .form-control-range {
        margin: 0 8px 1px;
      }
    }

    .btn {
      padding: 0 0 2px;

      .jimu-icon {
        margin-right: 0;
        margin-left: 0;
      }
    }

    .dropdown-toggle-content {
      font-size: 12px;
      line-height: 16px;
    }

    .setting-panel-visible {
      background-color: var(--light-700);
      .btn {
        color: var(--black);
      }
    }

    .jimu-dropdown .jimu-icon {
      transform: rotate(180deg);
    }

    .page-list {
      .page-label {
        color: var(--dark-800);
        font-size: 12px;
        margin-right: 8px;
      }
      .icon-btn {
        color: var(--dark-800);
        &:hover {
          color: var(--black);
        }
        .jimu-icon {
          margin-left: 6px;
        }
      }
    }

    input[type='range'] {
      -webkit-appearance: none;
      background: transparent;
    }
    input[type='range']:focus {
      outline: none;
    }
    input[type='range']::-webkit-slider-runnable-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: var(--light-800);
      border-radius: 2px;
    }
    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 12px;
      width: 12px;
      border-radius: 6px;
      cursor: pointer;
      background: var(--light-300);
      border: 2px solid var(--dark-600);
      margin-top: -5px;

      &:hover {
        border-color: var(--black);
      }
    }
    input[type='range']:focus::-webkit-slider-runnable-track {
      background: var(--light-800);
    }
    input[type='range']::-moz-range-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: var(--light-800);
      border-radius: 2px;
    }
    input[type='range']::-moz-range-thumb {
      height: 10px;
      width: 10px;
      border-radius: 8px;
      cursor: pointer;
      background: var(--light-300);
      border: 2px solid var(--dark-600);
      margin-top: -5px;
      &:hover {
        border-color: var(--black);
      }
    }
    input[type='range']::-ms-track {
      width: 100%;
      height: 2px;
      cursor: pointer;
      background: ${null===(n=null===(r=null==i?void 0:i.colors)||void 0===r?void 0:r.palette)||void 0===n?void 0:n.light[800]};
      border-radius: 2px;
    }
    input[type='range']::-ms-thumb {
      height: 10px;
      width: 10px;
      border-radius: 8px;
      cursor: pointer;
      background: ${null===(l=null===(s=null==i?void 0:i.colors)||void 0===s?void 0:s.palette)||void 0===l?void 0:l.light[300]};
      border: 2px solid ${null===(d=null===(p=null==i?void 0:i.colors)||void 0===p?void 0:p.palette)||void 0===d?void 0:d.dark[600]};
      margin-top: 0px;
      &:hover {
        border-color: ${null===(h=null==i?void 0:i.colors)||void 0===h?void 0:h.black};
      }
    }
  `),className:"jimu-widget widget-status-bar d-flex"},this.renderPageList(),(0,e.jsx)("div",{className:"zoom-section flex-grow-1 d-flex justify-content-end align-items-center"},(0,e.jsx)(t.Button,{type:"tertiary",disabled:o<=u,title:this.formatMessage("zoomOut"),onClick:this.zoomout},(0,e.jsx)(t.Icon,{icon:c,width:12,height:12})),(0,e.jsx)("input",{css:this.calBackground(),type:"range",className:"form-control-range",min:0,max:100,step:this.mapStep(),value:this.fromZoomScaleToRange(o),onClick:this.stopPropgation,onChange:this.onPreviewScaleChange}),(0,e.jsx)(t.Button,{type:"tertiary",disabled:o>=2,title:this.formatMessage("zoomIn"),onClick:this.zoomin},(0,e.jsx)(t.Icon,{icon:g,width:12,height:12})),(0,e.jsx)(t.Dropdown,{direction:"up",size:"sm",className:"ml-2"},(0,e.jsx)(t.DropdownToggle,{icon:!0,size:"sm",type:"tertiary"},this.percentageZoomScale()),(0,e.jsx)(t.DropdownMenu,{css:e.css`min-width: 5rem;`},[200,175,150,125,100,75,50].map((o=>(0,e.jsx)(t.DropdownItem,{className:"justify-content-center",key:o,onClick:()=>this.updateScale(o/100)},e.utils.formatPercentageNumber(`${o}%`)))))),(0,e.jsx)(t.Button,{type:"tertiary",className:"ml-2",onClick:this.zoomToNormal,title:this.formatMessage("zoomToNormal")},(0,e.jsx)(t.Icon,{icon:"./widgets/status-bar/dist/runtime/assets/union.svg",width:12,height:12,className:"m-0"})),(0,e.jsx)(t.Button,{type:"tertiary",className:"ml-2",onClick:this.zoomToFit,title:this.formatMessage("zoomToFit")},(0,e.jsx)(t.Icon,{icon:"./widgets/status-bar/dist/runtime/assets/tool-width-max.svg",width:12,height:12,className:"m-0"}))),(0,e.jsx)("div",{className:(0,e.classNames)("setting-panel-section d-flex justify-content-center align-items-center ml-4 mr-2",{"setting-panel-visible":a})},(0,e.jsx)(t.Button,{type:"tertiary",title:a?this.formatMessage("closeSettingPanel"):this.formatMessage("openSettingPanel"),className:"px-2",onClick:this.toggleSettingPanel},(0,e.jsx)(t.Icon,{icon:"./widgets/status-bar/dist/runtime/assets/setting-panel.svg",width:12,height:12,className:"m-0",autoFlip:!0}))));var i,r,n,s,l,p,d,h}}h.mapExtraStateProps=(t,o)=>{var a,i,r,n,s,l,p,d,c,g,u,h,m,v,b,x,f,w,S;const y=null!==(r=null===(i=null===(a=t.appStateInBuilder)||void 0===a?void 0:a.appRuntimeInfo)||void 0===i?void 0:i.zoomScale)&&void 0!==r?r:1,k=null!==(s=null===(n=t.appStateInBuilder)||void 0===n?void 0:n.browserSizeMode)&&void 0!==s?s:e.BrowserSizeMode.Large,j=e.utils.findViewportSize(null===(l=t.appStateInBuilder)||void 0===l?void 0:l.appConfig,k),I=null===(d=null===(p=null==t?void 0:t.appStateInBuilder)||void 0===p?void 0:p.appConfig)||void 0===d?void 0:d.pages,P=null===(g=null===(c=null==t?void 0:t.appStateInBuilder)||void 0===c?void 0:c.appConfig)||void 0===g?void 0:g.pageStructure,D=null===(h=null===(u=null==t?void 0:t.appStateInBuilder)||void 0===u?void 0:u.appRuntimeInfo)||void 0===h?void 0:h.currentPageId,M=null===(v=null===(m=null==t?void 0:t.appStateInBuilder)||void 0===m?void 0:m.appRuntimeInfo)||void 0===v?void 0:v.currentDialogId,z=M?null===(b=null==t?void 0:t.appStateInBuilder)||void 0===b?void 0:b.appConfig.dialogs[M].label:null;return{zoomScale:y,viewportSize:j,settingPanelVisible:null===(w=null===(f=null===(x=t.widgetsState)||void 0===x?void 0:x["right-sidebar"])||void 0===f?void 0:f.collapse)||void 0===w||w,pages:I,pageStructure:P,currentPageId:D,currentDialogId:M,currentDialogLabel:z,locale:null===(S=null==t?void 0:t.appContext)||void 0===S?void 0:S.locale}}})(),s})())}}}));