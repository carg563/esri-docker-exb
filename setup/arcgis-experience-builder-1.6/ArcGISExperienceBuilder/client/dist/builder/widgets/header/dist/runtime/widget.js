System.register(["jimu-core","jimu-for-builder","jimu-for-builder/service","jimu-theme","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components"],(function(e,t){var s={},i={},o={},a={},r={},l={},n={};return{setters:[function(e){s.APP_FRAME_NAME_IN_BUILDER=e.APP_FRAME_NAME_IN_BUILDER,s.AppMode=e.AppMode,s.BrowserSizeMode=e.BrowserSizeMode,s.CONSTANTS=e.CONSTANTS,s.Immutable=e.Immutable,s.Keyboard=e.Keyboard,s.LoadingType=e.LoadingType,s.PageMode=e.PageMode,s.React=e.React,s.ReactRedux=e.ReactRedux,s.ReactResizeDetector=e.ReactResizeDetector,s.SessionManager=e.SessionManager,s.appActions=e.appActions,s.classNames=e.classNames,s.css=e.css,s.defaultMessages=e.defaultMessages,s.getAppStore=e.getAppStore,s.jimuHistory=e.jimuHistory,s.jsx=e.jsx,s.polished=e.polished,s.portalUrlUtils=e.portalUrlUtils,s.portalUtils=e.portalUtils,s.queryString=e.queryString,s.urlUtils=e.urlUtils,s.utils=e.utils},function(e){i.appStateHistoryActions=e.appStateHistoryActions,i.builderActions=e.builderActions,i.builderAppSync=e.builderAppSync,i.getAppConfigAction=e.getAppConfigAction,i.helpUtils=e.helpUtils},function(e){o.appServices=e.appServices},function(e){a.withTheme=e.withTheme},function(e){r.AlertPopup=e.AlertPopup,r.Button=e.Button,r.ButtonGroup=e.ButtonGroup,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.Icon=e.Icon,r.Popper=e.Popper,r.Switch=e.Switch,r.Toast=e.Toast,r.ToastType=e.ToastType,r.UserProfile=e.UserProfile,r.defaultMessages=e.defaultMessages},function(e){l.dataComponentsUtils=e.dataComponentsUtils},function(e){n.ProxySettingPopup=e.ProxySettingPopup,n.proxySettingUtils=e.proxySettingUtils}],execute:function(){e((()=>{var e={4065:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4h12v7H2V4zM0 4a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm4 10a1 1 0 100 2h8a1 1 0 100-2H4z" fill="#000"></path></svg>'},888:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 5H6v9h4V5zM6 3a2 2 0 00-2 2v9a2 2 0 002 2h4a2 2 0 002-2V5a2 2 0 00-2-2H6z" fill="#000"></path></svg>'},1658:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0a2 2 0 100 4 2 2 0 000-4zM6 8a2 2 0 114 0 2 2 0 01-4 0zm0 6a2 2 0 114 0 2 2 0 01-4 0z" fill="#000"></path></svg>'},4928:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3H4v11h8V3zM4 1a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V3a2 2 0 00-2-2H4z" fill="#000"></path></svg>'},4454:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.329 1a.875.875 0 00-.87.773l-.005.102v1.78c-4.878.411-7.355 3.17-7.432 8.277L1 12.374v.64l.006.35c.004.124.009.256.016.396l.034.503c.089.525.433.757.82.736.305-.018.532-.302.607-.6l.103-.398.109-.388c.122-.42.23-.72.324-.901 1.298-2.504 3.343-3.685 5.435-3.824v1.38a.875.875 0 001.364.725l.087-.067 4.796-4.196a.875.875 0 00.078-1.24l-.078-.077-4.796-4.197A.875.875 0 009.33 1z" fill="#000"></path></svg>'},3416:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.671 1c.449 0 .819.338.87.773l.005.102v1.78c4.878.411 7.355 3.17 7.432 8.277l.022.442v.64c-.002.217-.008.467-.022.746l-.034.503c-.089.525-.433.757-.82.736-.305-.018-.532-.302-.607-.6l-.103-.398-.108-.388c-.123-.42-.231-.72-.325-.901-1.298-2.504-3.343-3.685-5.435-3.824v1.38a.875.875 0 01-1.364.725l-.087-.067L1.299 6.73a.875.875 0 01-.078-1.24l.078-.077 4.796-4.197A.875.875 0 016.67 1z" fill="#000"></path></svg>'},119:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4l-6 8-6-8h12z" fill="#000"></path></svg>'},4138:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8A7 7 0 111 8a7 7 0 0114 0zM6.25 5.621a.6.6 0 01.933-.5l3.568 2.38a.6.6 0 010 .998l-3.568 2.38a.6.6 0 01-.933-.5V5.62z" fill="#000"></path></svg>'},5648:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 3a2 2 0 012-2h8.086a1 1 0 01.707.293l2.914 2.914a1 1 0 01.293.707V13a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm1.75.75a1 1 0 011-1h5.875a1 1 0 011 1v1.5a1 1 0 01-1 1H3.75a1 1 0 01-1-1v-1.5zm7.875 6.875a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" fill="#000"></path></svg>'},4767:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 2H2v2h12V2zM2 1H1v4h14V1H2zm2 7H2v6h2V8zM2 7H1v8h4V7H2zm6 1h6v6H8V8zM7 7h8v8H7V7z" fill="#000"></path></svg>'},9216:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.226 1.312c-.403-.404-1.044-.417-1.431-.03L2.49 8.587l-.48 2.674a.637.637 0 00.73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431l-1.462-1.462zm-8.113 9.575l.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991-1.781.32zm7.473-6.012l1.402-1.4-1.462-1.463-1.401 1.402 1.461 1.461z" fill="#000"></path><path d="M1.5 14a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill="#000"></path></svg>'},1262:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARYSURBVHgB7ZvLahNRGMf/J6mirWJcKFhQp4IKLdiK6KaCEURQF1bwumr6BK1P0OkTmDxB01XxAsaNghU7BV2ICHVRF4oaFRUMaERbxaY5nm9iFk3SJOcyl9T+YLqYziSc//muJ+cwBMHktIVIIYEIGwZHXtxxsBQdw5XjWfgMg5/cnIqLv6Ni0PHaD7A02OIELpxy4BPeCzA+HcPmpUFwPrDywKuYFdaRxPkTE/AY7wSggbcXRkpmzmNQgmVR5CnwtoxX7mFeADJzzofFRw/AKMI9PIgT5gS49WDAHXjzZq4GEwGTCTEMuYeeAEbMXBXhHhHYWIzO6FiFmgBk5kWcFQNP+D/wChjLC6vLqLqHnAAN01jQ8AzYUkomjTYWoGzmjA2KL7DQEvxzjybiRH0Brk/Zwfi3KYQQDarM2gLQrG8q3A6vqatQu8qM1Hy2Y8leXYMnuAjY0fHKu9UCuIGOChmz9MU2Y3B3J8JGtQCcgp15SID0kW68PX0UZzu3IyxUC8B4HzzE6tiATP8BjB/ugdW+EUFTwwLgqQBlEtYOvD3Tj2t9+wMVog2ajOzbhdHuPYita0N2/he67j6We3/vTveSJTv/G/bca0y8+wwdItAgvm0rrvXucwfvN+RK6SM92t+tJYDVEbwP94rgqoOWAKsB32zXyX1F3HkGHQ7GNrlB0yS+CUBBiy4dZnLfjAvw37vAmgBocQJNg2Eg09+rVU2uChegSnI6fkip2/QtCySsTtEAdTf1LKVLivgylCrDblEaf5J6T8sCtgRQAtcjnZUbPKElADVCYSG/WMDY3BvIoiwAmbTVvgFhIfnyPbIL8oWWkgDUBI327EFYoDZ87IX87BNKAlD/H6bZt+fUBk9IC0CzT6s5YSHzMae1KCItQLOpzC+Sr95DB6k8RrNPq0AqyLTDz/M/4BdSAlCwIX+zFQKgiXbYC6RdgKJt191HSkVHGFHKAjSTQ09f4OrsS7Q6WpUgVV+tztqCCAwSW78uFD93yWC0naPVGfq5S5eDU08w61MqDKUL+Nlmr8UAaPDtzyJaHS0B7nzKuVdQ0BqA7NJZJdrONvD4OY4p9AddYg2P1hRks0a5n/guahD5QOnuGluGkWijMgszOVrD++yu6A6LpbVmhdCacY7ZyluBB8Hkqw84LmbVl96iWEhV3gpFFij3FtRkOV/0fHpFOGxcOZWtvF29UfLGw2NAYcT8fv8AKbI0Lp8YqvWvlbfKTt6zEI2WNkYzZqE1yaPIbVw+mVrpgcabpUkIROPCWUZbSAhHDC2D+R8TGDqXr/eg3Hb5yfsJRN2NlHGEE0c4u42LJ2eafUHtwETZPcASCJ48eDGNYjFVK8g1Qu/ITLDuQSdFklj4mWpk5vUwd2jKP/dwZM28HuaPzZXSaMKwe5TMnInAZmjgZbw7OGkmjRox83r4c3aY3EMuTjjgoni51MpHZ2vR2D0ck/7dDP4KUGa5e8S8NvN6/AXWppIKbqQ9gQAAAABJRU5ErkJggg=="},1810:e=>{"use strict";e.exports=s},3297:e=>{"use strict";e.exports=i},8396:e=>{"use strict";e.exports=o},3016:e=>{"use strict";e.exports=a},1835:e=>{"use strict";e.exports=r},3037:e=>{"use strict";e.exports=l},3080:e=>{"use strict";e.exports=n}},t={};function p(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,p),o.exports}p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},p.d=(e,t)=>{for(var s in t)p.o(t,s)&&!p.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.p="";var d={};return p.p=window.jimuConfig.baseUrl,(()=>{"use strict";p.r(d),p.d(d,{default:()=>ne});var e,t,s=p(1810),i=p(1835),o=p(3297),a=p(8396);!function(e){e.Experience="Web Experience",e.Template="Web Experience Template"}(e||(e={})),function(e){e.Published="Published",e.Draft="Draft",e.Changed="Changed",e.Publishing="Publishing"}(t||(t={}));const r={createNew:"Create new",newExperience:"New experience",undo:"Undo",redo:"Redo",save:"Save",saving:"Saving",saved:"Saved",download:"Download",saveError:"Saving error",saveSuccess:"Saved successfully!",publishing:"Publishing",published:"Published",publishError:"Publishing error",publishSuccess:"Published successfully!",publishTo:"Publish to",publishOptions:"Publish options",copySuccess:"Copied successfully!",changeShareSettings:"Change share settings",viewPublishedItem:"View published item",copyPublishedItemLink:"Copy published item link",headerLeave:"Leave",headerLeaveSite:"Leave site?",headerLeaveDescription:"Changes you made may not be saved.",editPageForLargeScreen:"Edit your page for large screen devices",editPageForMediumScreen:"Edit your page for medium screen devices",editPageForSmallScreen:"Edit your page for small screen devices",appMode:"Live view",generateTemplate:"Generate template",moreOptionsForTool:"More",moreTools:"More tools",access:"Access",generateTemplateSuccess:"Generated template successfully!",generateTemplateError:"Generating error",headerLockLayout:"Lock layout",enableLayoutEditing:"Turn on layout lock to disable layout editing",disableLayoutEditing:"Turn off layout lock to enable layout editing",layoutIsEnabled:"Layout editing is enabled.",layoutIsDisabled:"Layout editing is disabled.",appTypeTemplate:"Experience Template",appTypeExperience:"Experience",publishedTitle:"This item can be viewed by users you've shared with.",publishedUnsaveTitle:"There are unpublished changes since last publishing.",itemStatusDraft:"Draft",draftStatusTitle:"This item is not published. It can only be viewed by you.",headerHome:"Home",renameExperience:"Rename experience",renameTemplate:"Rename template",turnOnLiveView:"Turn on live view",turnOffLiveView:"Turn off live view",changeScreenSize:"Change screen size",createNewExperience:"Create new experience",gotIt:"Got it",templateRemind:"You are now working on an experience template.",unpublishedChanges:"Unpublished changes"};class l extends s.React.PureComponent{getStyle(e){return s.css`
      .item-inner {
        width: 16px;
        height: 16px;
        position: relative;
      }

      .item-loader-container {
        width: 100%;
        height: 100%;
      }

      .la-ball-fall,
        .la-ball-fall>div {
          position:relative;
          -webkit-box-sizing:border-box;
          -moz-box-sizing:border-box;
          box-sizing:border-box
        }

      .la-ball-fall {
        display:block;
        font-size:0;
        color:${e.colors.black}
      }

      .la-ball-fall>div {
        display:inline-block;
        float:none;
        background-color:currentColor;
        border:0 solid currentColor
      }

      .la-ball-fall {
        width:54px;
        height:18px
      }

      .la-ball-fall>div{
        width:10px;
        height:10px;
        margin:4px;
        border-radius:100%;
        opacity:0;
        -webkit-animation:ball-fall 1s ease-in-out infinite;
        -moz-animation:ball-fall 1s ease-in-out infinite;
        -o-animation:ball-fall 1s ease-in-out infinite;
        animation:ball-fall 1s ease-in-out infinite
      }

      .la-ball-fall>div:nth-of-type(1){
        -webkit-animation-delay:-200ms;
        -moz-animation-delay:-200ms;
        -o-animation-delay:-200ms;
        animation-delay:-200ms
      }

      .la-ball-fall>div:nth-of-type(2){
        -webkit-animation-delay:-100ms;
        -moz-animation-delay:-100ms;
        -o-animation-delay:-100ms;
        animation-delay:-100ms
      }

      .la-ball-fall>div:nth-of-type(3){
        -webkit-animation-delay:0ms;
        -moz-animation-delay:0ms;
        -o-animation-delay:0ms;
        animation-delay:0ms
      }

      .la-ball-fall.la-2x{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .la-ball-fall.la-2x>div{
        width:25%;
        height:25%;
        margin:3%;
      }

      @-webkit-keyframes ball-fall{
        0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}
        20%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}
        90%{opacity:.5}
        100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}
      }

      @-moz-keyframes ball-fall{
        0%{opacity:0;-moz-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}20%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}
        100%{opacity:0;-moz-transform:translateY(145%);transform:translateY(145%)}
      }

      @-o-keyframes ball-fall{
        0%{opacity:0;-o-transform:translateY(-145%);transform:translateY(-145%)}
        10%{opacity:.5}20%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}
        80%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}
        100%{opacity:0;-o-transform:translateY(145%);transform:translateY(145%)}
      }

      @keyframes ball-fall{
        0%{opacity:0;-webkit-transform:translateY(-145%);
        -moz-transform:translateY(-145%);
        -o-transform:translateY(-145%);
        transform:translateY(-145%)}10%{opacity:.5}
        20%{opacity:1;-webkit-transform:translateY(0);
        -moz-transform:translateY(0);
        -o-transform:translateY(0);
        transform:translateY(0)}
        80%{opacity:1;-webkit-transform:translateY(0);
        -moz-transform:translateY(0);
        -o-transform:translateY(0);
        transform:translateY(0)}
        90%{opacity:.5}
        100%{opacity:0;
        -webkit-transform:translateY(145%);
        -moz-transform:translateY(145%);
        -o-transform:translateY(145%);
        transform:translateY(145%)}
      }
    `}render(){return(0,s.jsx)("div",{className:"w-100 h-100",css:this.getStyle(this.props.theme)},(0,s.jsx)("div",{className:"item-inner"},(0,s.jsx)("div",{className:"item-loader-container"},(0,s.jsx)("div",{className:"la-ball-fall la-2x"},(0,s.jsx)("div",null),(0,s.jsx)("div",null),(0,s.jsx)("div",null)))))}}const n=l;var h=p(3080),c=p(3037),u=p(3016),m=p(1658),g=p.n(m);const b=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:g()},o))};var v=p(4138),f=p.n(v);const w=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:f()},o))};var y=p(3416),x=p.n(y);const S=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:x()},o))};var T=p(4454),j=p.n(T);const O=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:j()},o))};var P=p(5648),M=p.n(P);const A=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:M()},o))};var k,N=function(e,t,s,i){return new(s||(s=Promise))((function(o,a){function r(e){try{n(i.next(e))}catch(e){a(e)}}function l(e){try{n(i.throw(e))}catch(e){a(e)}}function n(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,l)}n((i=i.apply(e,t||[])).next())}))};!function(e){e.NewApp="NewApp",e.SaveAsTemplate="SaveAsTemplate",e.Publish="Publish"}(k||(k={}));const C=Object.assign({},r,i.defaultMessages,s.defaultMessages);class I extends s.React.PureComponent{constructor(l){super(l),this.fontSizeBase=14,this.panelWidth=210/this.fontSizeBase+"rem",this.save="save",this.saved="saved",this.saving="saving",this.saveError="saveError",this.saveSuccess="saveSuccess",this.publish="publish",this.published="published",this.publishing="publishing",this.publishError="publishError",this.publishSuccess="publishSuccess",this.translationMap={},this.updateToollistWidth=()=>{var e,t;const{toolListWidth:s}=this.state,i=(null===(t=null===(e=this.toolContainer)||void 0===e?void 0:e.current)||void 0===t?void 0:t.clientWidth)||0;s!==i&&this.setState({toolListWidth:i})},this.checkIsSaved=()=>this.state.saveState===this.saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1,this.onUndo=()=>{this.props.stateHistory.past.length<=1||(0,s.getAppStore)().dispatch(o.appStateHistoryActions.InBuilderAppConfigUndo())},this.onRedo=()=>{this.props.stateHistory.future.length<=0||(0,s.getAppStore)().dispatch(o.appStateHistoryActions.InBuilderAppConfigRedo())},this._getTimeOffset=e=>{const t=e.getTimezoneOffset();return(t<0?1:-1)*(t<0?Math.abs(t)/60:t/60)*60*60*1e3},this.onSaveClick=e=>N(this,void 0,void 0,(function*(){var t;this.setState({saveState:this.saving});const i=new Date,o=i.getTime()-this._getTimeOffset(i);return yield a.appServices.saveApp(null===(t=this.props)||void 0===t?void 0:t.appItem,this.props.appConfig.set("timestamp",o)).then((t=>N(this,void 0,void 0,(function*(){return this.setState({saveState:this.saved,savedAppConfig:(0,s.Immutable)(this.props.appConfig)}),this.updateTypeKeywordsRequest(),!e&&this.toastNote(this.translationMap[this.saveSuccess]),yield Promise.resolve()}))),(t=>N(this,void 0,void 0,(function*(){return console.error(t),this.setState({saveState:this.saveError}),!e&&this.toastNote(this.translationMap[this.saveError]),yield Promise.reject(t)}))))})),this.updateTypeKeywordsRequest=()=>{const e=this.props.appItem;e.title=this.props.titleText;const t=this.getTypeKeywords();e.typeKeywords=t.typeKeywords,a.appServices.updateAppInfo(e).then((()=>{this.props.changePublishStatus(t.status)}),(e=>{console.error(e)}))},this.getTypeKeywords=()=>{let e=!1,s=t.Draft;const{publishStatus:i}=this.props;let o=this.props.appItem.typeKeywords||[];if(o=o.map((o=>(o.includes("status:")&&(e=!0),o.includes("status:")&&i!==t.Draft?(s=t.Changed,`status: ${t.Changed}`):o))),!e){const e=`status: ${t.Draft}`;s=t.Draft,o.push(e)}return{typeKeywords:o,status:s}},this.onPublishClick=()=>{this.props.publishStatus!==t.Publishing&&(this.state.saveState===this.saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1?this.tryToPublishApp():(this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=k.Publish))},this.tryToPublishApp=()=>N(this,void 0,void 0,(function*(){(yield h.proxySettingUtils.needToConfigProxy())?this.setState({isProxySettingPopupOpen:!0}):this.publishApp()})),this.onAppProxiesFinish=()=>N(this,void 0,void 0,(function*(){return yield this.onSaveClick().then((()=>this.publishApp()))})),this.onAppProxiesCancel=()=>{this.setState({isProxySettingPopupOpen:!1})},this.onToggleProxySettingPopup=()=>{this.setState({isProxySettingPopupOpen:!this.state.isProxySettingPopupOpen})},this.publishApp=()=>{this.props.changePublishStatus(t.Publishing);const{appItem:e}=this.props;a.appServices.publishApp(e).then((()=>{this.setState({isPublished:!0}),this.props.changePublishStatus(t.Published),this.toastNote(this.translationMap[this.publishSuccess])}),(e=>{console.error(e),this.toastNote(this.translationMap[this.publishError]),this.props.changePublishStatus(t.Changed)}))},this.onToggleToolTipUndo=()=>{this.setState({toolTipUndoOpen:!this.state.toolTipUndoOpen,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipRedo=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!this.state.toolTipRedoOpen,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipSave=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!this.state.toolTipSaveOpen,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPreview=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!this.state.toolTipPreviewOpen,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPublish=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!this.state.toolTipPublishOpen,toolTipPublishOptionsOpen:!1})},this.onToggleToolTipPublishOptions=()=>{this.setState({toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!this.state.toolTipPublishOptionsOpen})},this.togglePublishOptionList=()=>{this.setState({publishOptionsListOpen:!this.state.publishOptionsListOpen,toolTipPublishOptionsOpen:!1})},this.toggleMoreToolList=()=>{this.setState({moreToolListOpen:!this.state.moreToolListOpen})},this.copyPublishUrlToClipBoard=()=>{const e=location.origin+window.jimuConfig.mountPath+(window.jimuConfig.useStructuralUrl?`experience/${this.props.queryObject.id}/`:`experience/?id=${this.props.queryObject.id}`),t=document.createElement("input");t.value=e,t.style.position="absolute",t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.toastNote(this.copySuccess),this.setState({publishOptionsListOpen:!1})},this.isInOnLine=()=>s.portalUrlUtils.isAGOLDomain(this.props.portalUrl),this.toastNote=e=>{this.setState({isToastNote:!0,noteText:e},(()=>{setTimeout((()=>{this.setState({isToastNote:!1,noteText:""})}),2e3)}))},this.saveForkeyBoard=()=>(this.state.saveState===this.saved||this.props.stateHistory.past.length<=1&&this.props.stateHistory.future.length<1||this.state.saveState===this.saving||this.onSaveClick(),!1),this.isMac=()=>/macintosh|mac os x/i.test(navigator.userAgent),this.newApp=()=>{if(!this.checkIsSaved())return this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=k.NewApp,!1;this.toNewApp()},this.toNewApp=()=>{const{locale:t}=this.props,i=t?{redirect:"back",locale:t}:{redirect:"back"},o=t?{page:"template",redirect:"back",locale:t}:{page:"template",redirect:"back"};this.props.itemType===e.Experience?(s.jimuHistory.changePage("template"),window.jimuConfig.useStructuralUrl?s.jimuHistory.replaceQueryObject(i,!0):s.jimuHistory.replaceQueryObject(o,!0)):this.createNewAppByTemplate(this.props.appItem)},this.createNewAppByTemplate=e=>{a.appServices.createAppByItemTemplate(e).then((e=>{e&&(s.jimuHistory.replaceQueryObject({id:e},!0),this.props.changePublishStatus(t.Draft))}),(()=>{}))},this.isConfirmsaveAsTemplate=()=>{if(!this.checkIsSaved())return this.setState({isShowLeaveAlertPopup:!0}),this.clickEventType=k.SaveAsTemplate,!1;this.saveAsTemplate()},this.saveAsTemplate=()=>{var e;this.toggleLoading(!0),a.appServices.createTemplateByApp(null===(e=this.props)||void 0===e?void 0:e.appItem).then((e=>{this.toggleLoading(!1),e&&(this.toastNote(this.generateTemplateSuccess),s.jimuHistory.replaceQueryObject({id:e},!0),this.props.changePublishStatus(t.Draft))}),(()=>{this.toastNote(this.generateTemplateError),this.toggleLoading(!1)}))},this.toggleLoading=e=>{(0,s.getAppStore)().dispatch(s.appActions.setIsBusy(e,s.LoadingType.Primary))},this.deleteApp=(e,i)=>{a.appServices.deleteApp(e).then((()=>{i&&(s.jimuHistory.replaceQueryObject({id:i},!0),this.props.changePublishStatus(t.Draft))}))},this.handleToggleForLeaveAlertPopup=e=>{if(this.setState({isShowLeaveAlertPopup:!this.state.isShowLeaveAlertPopup}),e)switch(this.clickEventType){case k.NewApp:this.toNewApp();break;case k.SaveAsTemplate:this.saveAsTemplate();break;case k.Publish:this.tryToPublishApp()}},this.previewToggle=()=>{this.setState({isShowPreviewAlertPop:!this.state.isShowPreviewAlertPop})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:C[e]}):e,this.getAlertPopTitle=()=>{switch(this.clickEventType){case k.NewApp:case k.SaveAsTemplate:return this.nls("headerLeaveSite");case k.Publish:return`${this.nls("publish")}`}},this.getAlertPopOkLabel=()=>{switch(this.clickEventType){case k.NewApp:case k.SaveAsTemplate:return this.nls("headerLeave");default:return""}},this.previewAlertPopStyle=()=>{var e,t,i,o,a,r;const l=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors;return s.css`
      .preview-alert-pop-content {
        font-size: 1rem;
        position: relative;
      }
      .modal-footer {
        padding: 0;
      }
      .modal-content {
        border: 1px solid ${null===(i=null==l?void 0:l.palette)||void 0===i?void 0:i.secondary[500]};
      }
      .perview-pop-button-con {
        right:0;
        bottom: -20px;
        text-align: right;
        margin-top: ${s.polished.rem(32)};
      }
      .preview-alert-pop-btn {
        min-width: ${s.polished.rem(80)};
        border: none;
        box-sizing: border-box;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.375rem;
        border-radius: 2px;
        background: transparent;
      }
      .btn-primary {
        color: ${null==l?void 0:l.black};
        background: ${null===(o=null==l?void 0:l.palette)||void 0===o?void 0:o.primary[500]};
      }
      .btn-cancle {
        color: ${null===(a=null==l?void 0:l.palette)||void 0===a?void 0:a.dark[600]};
        border-color: ${null===(r=null==l?void 0:l.palette)||void 0===r?void 0:r.secondary[800]};
        margin-left: ${s.polished.rem(10)};
        border-width: 1px;
        border-style: solid;
      }
    `},this.getTostStyle=()=>{var e,t,i,o,a,r,l,n,p,d,h;return s.css`
      & {
        height:  ${s.polished.rem(40)};
        top: ${s.polished.rem(60)};
      }
      .jimu-toast-info {
        background: ${null===(o=null===(i=null===(t=null===(e=this.props)||void 0===e?void 0:e.theme)||void 0===t?void 0:t.colors)||void 0===i?void 0:i.palette)||void 0===o?void 0:o.secondary[300]};
        line-height: ${s.polished.rem(40)};
        color: ${null===(n=null===(l=null===(r=null===(a=this.props)||void 0===a?void 0:a.theme)||void 0===r?void 0:r.colors)||void 0===l?void 0:l.palette)||void 0===n?void 0:n.dark[800]};
        font-weight: 300;
        padding: 0 ${s.polished.rem(16)};
        box-shadow: 0 0 ${s.polished.rem(10)} ${s.polished.rem(2)} ${s.polished.rgba(null===(h=null===(d=null===(p=this.props)||void 0===p?void 0:p.theme)||void 0===d?void 0:d.colors)||void 0===h?void 0:h.white,.2)};
      }
    `},this.getPublishText=()=>{const{publishStatus:e}=this.props;switch(e){case t.Published:return this.nls("published");case t.Publishing:return this.nls("publishing");case t.Changed:case t.Draft:return this.nls("publish")}},this.renderMore=()=>{var o,a;const l=window.jimuConfig.isDevEdition,{itemType:p,publishStatus:d,stateHistory:h,theme:c,queryObject:u}=this.props,{saveState:m,toolListWidth:g}=this.state,v=p===e.Template,f=s.SessionManager.getInstance().getMainSession(),y=null==f?void 0:f.token,x=m===this.saved||(null===(o=null==h?void 0:h.past)||void 0===o?void 0:o.length)<=1&&(null===(a=null==h?void 0:h.future)||void 0===a?void 0:a.length)<1,T=s.urlUtils.getAppUrl({appId:u.id,isTemplate:v,isArcGisOnlineTemplate:!1,isPortalRequest:!1,isDraft:!0});return(0,s.jsx)("div",{className:"tool_more_con"},(0,s.jsx)(i.Dropdown,{size:"sm",toggle:this.togglePublishOptionList,isOpen:this.state.publishOptionsListOpen},(0,s.jsx)(i.DropdownButton,{arrow:!1,icon:!0,size:"sm",type:"tertiary",className:"toollist-item-click border-0",title:this.moreOptionsForTool},(0,s.jsx)(b,{className:"toollist-dropdown-icon"})),(0,s.jsx)(i.DropdownMenu,{css:this.getDropdownStyle(c)},(0,s.jsx)(i.DropdownItem,{onClick:this.onUndo,className:"dropdown-more-undo",disabled:h.past.length<=1||g>=46,toggle:!1},(0,s.jsx)("div",{title:this.undo},(0,s.jsx)(S,{className:"toollist-dropdown-icon",autoFlip:!0}),this.undo)),(0,s.jsx)(i.DropdownItem,{onClick:this.onRedo,className:"dropdown-more-redo",disabled:this.props.stateHistory.future.length<1||g>=92,toggle:!1},(0,s.jsx)("div",{title:this.redo},(0,s.jsx)(O,{className:"toollist-dropdown-icon",autoFlip:!0}),this.redo)),(0,s.jsx)(i.DropdownItem,{onClick:x?void 0:()=>{this.onSaveClick()},className:"dropdown-more-save",disabled:x||g>=138,toggle:!1},(0,s.jsx)("div",{title:this.translationMap[m]},m!==this.saving&&(0,s.jsx)(A,{className:"toollist-dropdown-icon"}),m===this.saving&&(0,s.jsx)("div",{style:{width:"16px",marginRight:"8px",display:"inline-block"}},(0,s.jsx)(n,{theme:c})),this.translationMap[m])),x?(0,s.jsx)(i.DropdownItem,{onClick:void 0,className:"dropdown-more-preview",disabled:g>=184,tag:"a",href:T,rel:"noreferrer",target:"_blank",title:this.preview},(0,s.jsx)("div",{id:"tooltip_preview",title:this.preview},(0,s.jsx)(w,{className:"toollist-dropdown-icon"}),this.preview)):(0,s.jsx)(i.DropdownItem,{onClick:this.previewToggle,className:"dropdown-more-preview",disabled:g>=184},(0,s.jsx)("div",{id:"tooltip_preview",title:this.preview},(0,s.jsx)(w,{className:"toollist-dropdown-icon"}),this.preview)),!l&&(0,s.jsx)(i.DropdownItem,{onClick:()=>{window.open(`${this.props.portalUrl}/home/item.html?id=${this.props.currentAppId}`)}},this.changeShareSettings),(0,s.jsx)(i.DropdownItem,{disabled:!this.state.isPublished,onClick:()=>{window.open(s.urlUtils.getAppUrl({appId:this.props.queryObject.id,isTemplate:v}),"_blank"),this.setState({publishOptionsListOpen:!1})}},this.viewPublishedItem),l&&d!==t.Draft&&(0,s.jsx)(i.DropdownItem,{href:`/download/${this.props.currentAppId}?locale=${this.props.intl.locale}&token=${y}`,target:"_blank"},this.props.intl.formatMessage({id:"download",defaultMessage:r.download})),(0,s.jsx)(i.DropdownItem,{disabled:!this.state.isPublished,onClick:()=>{this.copyPublishUrlToClipBoard()}},this.copyPublishedItemLink),d!==t.Draft&&(0,s.jsx)("div",{className:"w-100 pl-2 pr-2 center-line"}),d!==t.Draft&&v&&(0,s.jsx)(i.DropdownItem,{onClick:()=>{this.newApp()}},this.createNewExperience),!v&&(0,s.jsx)(i.DropdownItem,{onClick:()=>{this.newApp()}},this.createNew),p===e.Experience&&(0,s.jsx)(i.DropdownItem,{onClick:()=>{this.isConfirmsaveAsTemplate()}},this.generateTemplate))))},this.translationMap[this.save]=this.props.intl.formatMessage({id:"save",defaultMessage:r.save}),this.translationMap[this.saved]=this.props.intl.formatMessage({id:"saved",defaultMessage:r.saved}),this.translationMap[this.saving]=this.props.intl.formatMessage({id:"saving",defaultMessage:r.saving}),this.translationMap[this.saveError]=this.props.intl.formatMessage({id:"saveError",defaultMessage:r.saveError}),this.translationMap[this.saveSuccess]=this.props.intl.formatMessage({id:"saveSuccess",defaultMessage:r.saveSuccess}),this.translationMap[this.publish]=this.nls("publish"),this.translationMap[this.published]=this.props.intl.formatMessage({id:"published",defaultMessage:r.published}),this.translationMap[this.publishing]=this.props.intl.formatMessage({id:"publishing",defaultMessage:r.publishing}),this.translationMap[this.publishError]=this.props.intl.formatMessage({id:"publishError",defaultMessage:r.publishError}),this.translationMap[this.publishSuccess]=this.props.intl.formatMessage({id:"publishSuccess",defaultMessage:r.publishSuccess}),this.undo=this.props.intl.formatMessage({id:"undo",defaultMessage:r.undo}),this.redo=this.props.intl.formatMessage({id:"redo",defaultMessage:r.redo}),this.preview=this.props.intl.formatMessage({id:"preview",defaultMessage:i.defaultMessages.preview}),this.publishTo=this.props.intl.formatMessage({id:"publishTo",defaultMessage:r.publishTo}),this.publishOptions=this.props.intl.formatMessage({id:"publishOptions",defaultMessage:r.publishOptions}),this.copySuccess=this.props.intl.formatMessage({id:"copySuccess",defaultMessage:r.copySuccess}),this.changeShareSettings=this.props.intl.formatMessage({id:"changeShareSettings",defaultMessage:r.changeShareSettings}),this.viewPublishedItem=this.props.intl.formatMessage({id:"viewPublishedItem",defaultMessage:r.viewPublishedItem}),this.copyPublishedItemLink=this.props.intl.formatMessage({id:"copyPublishedItemLink",defaultMessage:r.copyPublishedItemLink}),this.createNew=this.props.intl.formatMessage({id:"createNew",defaultMessage:r.createNew}),this.createNewExperience=this.props.intl.formatMessage({id:"createNewExperience",defaultMessage:r.createNewExperience}),this.generateTemplate=this.props.intl.formatMessage({id:"generateTemplate",defaultMessage:r.generateTemplate}),this.moreOptionsForTool=this.props.intl.formatMessage({id:"moreOptionsForTool",defaultMessage:r.moreOptionsForTool}),this.moreTools=this.props.intl.formatMessage({id:"moreTools",defaultMessage:r.moreTools}),this.access=this.props.intl.formatMessage({id:"access",defaultMessage:r.access}),this.generateTemplateSuccess=this.props.intl.formatMessage({id:"generateTemplateSuccess",defaultMessage:r.generateTemplateSuccess}),this.generateTemplateError=this.props.intl.formatMessage({id:"generateTemplateError",defaultMessage:r.generateTemplateError}),this.clickEventType=k.NewApp,this.state={saveState:this.save,savedAppConfig:null,toolTipUndoOpen:!1,toolTipRedoOpen:!1,toolTipSaveOpen:!1,toolTipPreviewOpen:!1,toolTipPublishOpen:!1,toolTipPublishOptionsOpen:!1,publishOptionsListOpen:!1,moreToolListOpen:!1,isPublished:!1,noteText:"",isToastNote:!1,isShowLeaveAlertPopup:!1,isShowPreviewAlertPop:!1,isProxySettingPopupOpen:!1,toolListWidth:184},this.toolContainer=s.React.createRef()}getStyle(e){var t;return s.css`
      button:disabled:hover,button:disabled, .tool_more_con:disabled:hover, .tool_more_con:disabled{
        color:${e.colors.palette.light[800]};
      }
      button, .tool_more_con button{
        color:${e.colors.palette.dark[400]}
      }
      .tool_more_con button:hover {
        color: ${e.colors.black};
      }
      button:disabled:hover {
        border:none;
      }
      .toollist {
        .toollist-length-screen {
          width: ${s.polished.rem(0)};
          overflow: hidden;
          .tool-hidden {
            display: none;
          }
        }

        @media only screen and (max-width: 1025px) {
          .toollist-length-screen {
            width: ${s.polished.rem(0)};
          }
        }
        @media only screen and (min-width: 1025px) {
          .toollist-length-screen {
            width: ${s.polished.rem(46)};
          }
        }
        @media only screen and (min-width: 1071px) {
          .toollist-length-screen {
            width: ${s.polished.rem(92)};
          }
        }
        @media only screen and (min-width: 1117px) {
          .toollist-length-screen {
            width: ${s.polished.rem(138)};
          }
        }
        @media only screen and (min-width: 1163px) {
          .toollist-length-screen {
            width: ${s.polished.rem(184)};
          }
        }

        .tool_more_content {
          width: ${s.polished.rem(46)};
          .toollist-dropdown-icon{
            margin: 0
          }
        }
        .toollist-item {
          margin: 4px;
          padding: 4px 11px;
          border: 0;
        }
        .toollist-item-icon {
          margin-left: ${s.polished.rem(15)};
          margin-right: ${s.polished.rem(15)};
        }
        .toollist-item-click:focus {
          box-shadow: none !important;
        }
        .toollist-publish {
          border-radius: 2px;
          min-width: 4.25rem;
          height: ${s.polished.rem(26)};
          color: ${e.colors.black};
          background: ${e.colors.palette.light[800]};
          font-size: ${s.polished.rem(13)};
          padding-top: 0;
          padding-bottom: 0;
          border:none;
          &:hover {
            background: ${e.colors.primary};
            border:none;
          }
          &.btn.disabled {
            background-color: ${e.colors.palette.light[800]};
            color: ${e.colors.palette.dark[400]};
            border:none;
          }
        }
        .toollist-publish:focus {
          box-shadow: none !important;
        }

        .btn {
          &.disabled,
          &:disabled {
            background-color: transparent;
          }
        }
        .btn:not(:disabled):not(.disabled):active,
        .btn:not(:disabled):not(.disabled).active,
        .show > .btn.dropdown-toggle {
          color: ${(null===(t=null==e?void 0:e.colors)||void 0===t?void 0:t.black)||"black"};
        }
      }

      button:not(:disabled):not(.disabled):active, button:not(:disabled):not(.disabled).active, button[aria-expanded="true"]{
        border:none;
      }
    `}getDropdownStyle(e){return s.css`
      & {
        background: ${e.colors.palette.light[500]};
        border: 1px solid ${e.colors.palette.light[300]};;
        box-shadow: 0 0 10px 2px ${s.polished.rgba(e.colors.white,.2)};
        border-radius: 2px;
        border-radius: 2px;
        min-width:${s.polished.rem(220)};
        padding-top: ${s.polished.rem(8)};
        padding-bottom: 0;
      }
      .dropdown-menu--inner {
        .toollist-dropdown-icon {
          margin-right: ${s.polished.rem(8)};
          margin-bottom: ${s.polished.rem(2)};
        }
        &>button, &>a {
          padding-left: ${s.polished.rem(16)};
          margin-bottom: ${s.polished.rem(8)};
        }
        .center-line {
          border-top: 1px solid ${this.props.theme.colors.palette.light[800]};
          margin-bottom: ${s.polished.rem(14)};
          margin-top: ${s.polished.rem(14)};
        }
        button, a {
          box-sizing:border-box;
        }
        .dropdown-more-preview-a {
          color: inherit;
          text-decoration: none;
        }

        @media only screen and (min-width: 1162px) {
          .dropdown-more-preview {
            display: none;
          }
        }
        @media only screen and (max-width: 1162px) {
          .dropdown-more-preview {
            display: flex;
          }
        }
        @media only screen and (min-width: 1116px) {
          .dropdown-more-save {
            display: none;
          }
        }
        @media only screen and (max-width: 1116px) {
          .dropdown-more-save {
            display: flex;
          }
        }
        @media only screen and (min-width: 1070px) {
          .dropdown-more-redo {
            display: none;
          }
        }
        @media only screen and (max-width: 1070px) {
          .dropdown-more-redo {
            display: flex;
          }
        }
        @media only screen and (min-width: 1024px) {
          .dropdown-more-undo {
            display: none;
          }
        }
        @media only screen and (max-width: 1024px) {
          .dropdown-more-undo {
            display: flex;
          }
        }
      }
    `}componentDidMount(){window.onbeforeunload=()=>{if(!this.checkIsSaved())return!1},window.addEventListener("resize",this.updateToollistWidth)}componentWillUnmount(){window.onbeforeunload=null}componentDidUpdate(e){if(this.updateToollistWidth(),this.props.onSaveStatusChanged&&this.props.onSaveStatusChanged(this.checkIsSaved()),this.props.currentAppId!==e.currentAppId){const{publishStatus:e}=this.props;e===t.Draft?this.setState({isPublished:!1}):this.setState({isPublished:!0}),(0,s.getAppStore)().dispatch(o.appStateHistoryActions.InBuilderAppConfigClear())}this.props!==e&&this.props.appConfig&&(this.state.savedAppConfig?this.props.appConfig!==this.state.savedAppConfig?this.setState({saveState:this.save}):this.setState({saveState:this.saved}):this.state.saveState===this.saveError&&this.setState({saveState:this.save}))}render(){var o,a,r,l;const{toolListWidth:p}=this.state,d=window.jimuConfig.isDevEdition,{itemType:u,publishStatus:m}=this.props,g=d?"":`${this.publishTo} ${this.isInOnLine()?"ArcGIS Online":"Portal for ArcGIS"}`,b=this.state.saveState===this.saved||(null===(a=null===(o=this.props.stateHistory)||void 0===o?void 0:o.past)||void 0===a?void 0:a.length)<=1&&(null===(l=null===(r=this.props.stateHistory)||void 0===r?void 0:r.future)||void 0===l?void 0:l.length)<1,v=u===e.Template,f=this.props.appConfig&&c.dataComponentsUtils.getWhetherDataSourceIsInited(this.props.dataSources,this.props.dataSourcesInfo),y=s.urlUtils.getAppUrl({appId:this.props.queryObject.id,isTemplate:v,isArcGisOnlineTemplate:!1,isPortalRequest:!1,isDraft:!0});return(0,s.jsx)("div",{className:"float-right d-flex flex-row align-items-center",css:this.getStyle(this.props.theme)},this.isMac()&&(0,s.jsx)(s.Keyboard,{bindings:{"command+keys":()=>{this.saveForkeyBoard()}}}),!this.isMac()&&(0,s.jsx)(s.Keyboard,{bindings:{"ctrl+keys":()=>{this.saveForkeyBoard()}}}),(0,s.jsx)("div",{className:"h-100 toollist d-flex flex-row align-items-center justify-content-end"},(0,s.jsx)("div",{className:"toollist-length-screen d-flex align-items-center justify-content-starth-100 justify-content-start",ref:this.toolContainer},(0,s.jsx)(i.Button,{id:"tooltip_undo",className:(0,s.classNames)("toollist-item",{"toollist-item-click":!(this.props.stateHistory.past.length<=1),"tool-hidden":p<46}),type:"tertiary",title:this.undo,icon:!0,size:"sm",disabled:this.props.stateHistory.past.length<=1,onClick:this.onUndo},(0,s.jsx)(S,{className:"toollist-item-icon",autoFlip:!0})),(0,s.jsx)(i.Button,{id:"tooltip_redo",className:(0,s.classNames)("toollist-item",{"toollist-item-click":!(this.props.stateHistory.future.length<1),"tool-hidden":p<92}),type:"tertiary",title:this.redo,icon:!0,size:"sm",disabled:this.props.stateHistory.future.length<1,onClick:this.onRedo},(0,s.jsx)(O,{className:"toollist-item-icon",autoFlip:!0})),(0,s.jsx)(i.Button,{id:"tooltip_save",className:(0,s.classNames)("toollist-item",{"toollist-item-click":!b,"tool-hidden":p<138}),type:"tertiary",icon:!0,size:"sm",title:this.translationMap[this.state.saveState],disabled:b,onClick:()=>{this.onSaveClick()}},this.state.saveState===this.saving?(0,s.jsx)("div",{style:{width:"16px",height:"16px"}},(0,s.jsx)(n,{theme:this.props.theme})):(0,s.jsx)(A,{className:"toollist-item-icon"})),b?(0,s.jsx)(i.Button,{icon:!0,size:"sm",tag:"a",href:y,rel:"noreferrer",target:"_blank",title:this.preview,type:"tertiary",className:(0,s.classNames)("toollist-item toollist-item-click",{"tool-hidden":p<184})},(0,s.jsx)(w,{className:"toollist-item-icon"})):(0,s.jsx)(i.Button,{icon:!0,size:"sm",id:"tooltip_preview",title:this.preview,type:"tertiary",onClick:this.previewToggle,className:(0,s.classNames)("toollist-item toollist-item-click",{"tool-hidden":p<184})},(0,s.jsx)(w,{className:"toollist-item-icon"}))),(0,s.jsx)("div",{className:"tool_more_content"},this.renderMore()),(0,s.jsx)(i.Button,{className:"ml-2 toollist-publish",onClick:this.onPublishClick,disabled:m===t.Published||m===t.Publishing||!f,title:g},(0,s.jsx)("span",null,this.getPublishText()))),(0,s.jsx)(i.Toast,{css:this.getTostStyle(),open:this.state.isToastNote,type:i.ToastType.Info,text:this.state.noteText}),(0,s.jsx)(i.AlertPopup,{isOpen:this.state.isShowLeaveAlertPopup,okLabel:this.getAlertPopOkLabel(),title:this.getAlertPopTitle(),toggle:this.handleToggleForLeaveAlertPopup},(0,s.jsx)("div",{style:{fontSize:"1rem"}},this.nls("headerLeaveDescription"))),(0,s.jsx)(i.AlertPopup,{className:"preview-alert-pop",css:this.previewAlertPopStyle(),isOpen:this.state.isShowPreviewAlertPop,hideOK:!0,hideCancel:!0,title:this.nls("preview"),toggle:this.previewToggle},(0,s.jsx)("div",{className:"preview-alert-pop-content"},this.nls("headerLeaveDescription"),(0,s.jsx)("div",{className:"perview-pop-button-con"},(0,s.jsx)("a",{className:"m-0 p-0 toollist-item-click btn h-100 border-0",onClick:this.previewToggle,href:y,rel:"noreferrer",target:"_blank"},(0,s.jsx)("button",{className:"preview-alert-pop-btn btn-primary"},this.nls("commonModalOk"))),(0,s.jsx)("button",{onClick:this.previewToggle,className:"preview-alert-pop-btn btn-cancle"},this.nls("commonModalCancel"))))),(0,s.jsx)(h.ProxySettingPopup,{isOpen:this.state.isProxySettingPopupOpen,onToggle:this.onToggleProxySettingPopup,onCancel:this.onAppProxiesCancel,onFinish:this.onAppProxiesFinish}))}}const z=(0,u.withTheme)(I),$=s.ReactRedux.connect((e=>({stateHistory:e.appStateHistory,queryObject:e.queryObject,appConfig:e.appStateInBuilder&&e.appStateInBuilder.appConfig,currentAppId:e.builder&&e.builder.currentAppId,portalUrl:e.portalUrl,dataSources:e.appStateInBuilder&&e.appStateInBuilder.appConfig&&e.appStateInBuilder.appConfig.dataSources,dataSourcesInfo:e.appStateInBuilder&&e.appStateInBuilder.dataSourcesInfo})))(z);class R extends s.React.PureComponent{constructor(e){super(e),this.onAppModeChange=()=>{this.props&&(this.getAppDocument(),this.props.appMode===s.AppMode.Run?(this.appFrameDoc&&this.appFrameDoc.body.classList.add("design-mode"),o.builderAppSync.publishAppModeChangeToApp(s.AppMode.Design)):(this.appFrameDoc&&this.appFrameDoc.body.classList.remove("design-mode"),o.builderAppSync.publishAppModeChangeToApp(s.AppMode.Run)))},this.onLockLayoutChange=()=>{const e=(0,o.getAppConfigAction)();this.getAppDocument(),this.appFrameDoc&&(this.props.lockLayout?this.appFrameDoc.body.classList.remove("lock-layout"):this.appFrameDoc.body.classList.add("lock-layout")),e.setLockLayout(!this.props.lockLayout).exec()},this.nls=e=>this.props.intl.formatMessage({id:e,defaultMessage:r[e]}),this.appMode=this.props.intl.formatMessage({id:"appMode",defaultMessage:r.appMode}),this.lockLayout=this.props.intl.formatMessage({id:"headerLockLayout",defaultMessage:r.headerLockLayout})}getStyle(e){return s.css`
      .lock-layout-label {
        font-weight: 500;
        color: ${e.colors.palette.dark[600]};
        margin-right: ${s.polished.rem(10)};
      }

      .live-view-container {
        cursor: pointer;
        background-color: ${e.colors.primary};
        border-radius: 2px !important;
        color: ${e.colors.black};
        padding-right: ${s.polished.rem(8)};
        padding-left: ${s.polished.rem(8)};
        height: ${s.polished.rem(26)};
        border:1px solid ${e.colors.primary};
      }

      .edit-view-container {
        cursor: pointer;
        border:1px solid ${e.colors.palette.light[800]};
        border-radius: 2px !important;
        color: ${e.colors.palette.dark[600]};
        padding-right: ${s.polished.rem(8)};
        padding-left: ${s.polished.rem(8)};
        height: ${s.polished.rem(26)};

        &:hover {
          color: ${e.colors.black};

          .edit-view-icon {
            border: 1px solid ${e.colors.black};
          }
        }
      }

      .live-view-icon {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: ${e.colors.black};
      }

      .edit-view-icon {
        width: 7px;
        height: 7px;
        border: 1px solid ${e.colors.palette.dark[800]};
        border-radius: 50%;
      }
    `}getAppDocument(){const e=document.querySelector(`iframe[name="${s.APP_FRAME_NAME_IN_BUILDER}"]`);this.appFrameDoc=e.contentDocument||e.contentWindow.document}render(){const{appMode:e,lockLayout:t}=this.props,o=e===s.AppMode.Run;return(0,s.jsx)("div",{className:"d-flex align-items-center",css:this.getStyle(this.props.theme),title:t?this.props.intl.formatMessage({id:"disableLayoutEditing",defaultMessage:r.disableLayoutEditing}):this.props.intl.formatMessage({id:"enableLayoutEditing",defaultMessage:r.enableLayoutEditing})},!o&&(0,s.jsx)("div",{className:"d-flex align-items-center",onClick:this.onLockLayoutChange,style:{cursor:"pointer"}},(0,s.jsx)("div",{className:"lock-layout-label"},this.props.intl.formatMessage({id:"headerLockLayout",defaultMessage:r.headerLockLayout})),(0,s.jsx)(i.Switch,{checked:t})),(0,s.jsx)("div",{className:"liveview-gap"}),(0,s.jsx)(i.Button,{type:"tertiary",size:"sm",className:(0,s.classNames)("d-flex align-items-center",{"live-view-container":o,"edit-view-container":!o}),onClick:this.onAppModeChange,title:o?this.nls("turnOffLiveView"):this.nls("turnOnLiveView"),style:{whiteSpace:"nowrap"}},(0,s.jsx)("div",{className:(0,s.classNames)("mr-2",{"live-view-icon":o,"edit-view-icon":!o})}),(0,s.jsx)("div",{className:"d-flex align-items-center border-left-0 app-toolbar-mode"},(0,s.jsx)("span",null,this.appMode))))}}const L=(0,u.withTheme)(R),E=s.ReactRedux.connect((e=>{var t,s,i,o,a;return{appMode:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appRuntimeInfo.appMode,lockLayout:null!==(a=null===(o=null===(i=null===(s=e.appStateInBuilder)||void 0===s?void 0:s.appConfig)||void 0===i?void 0:i.forBuilderAttributes)||void 0===o?void 0:o.lockLayout)&&void 0!==a&&a}}))(L);var D=p(4065),B=p.n(D);const U=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:B()},o))};var H=p(888),Y=p.n(H);const F=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:Y()},o))};var W=p(4928),V=p.n(W);const K=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:V()},o))};class q extends s.React.PureComponent{constructor(e){super(e),this.editPageForLargeScreen=this.props.intl.formatMessage({id:"editPageForLargeScreen",defaultMessage:r.editPageForLargeScreen}),this.editPageForMediumScreen=this.props.intl.formatMessage({id:"editPageForMediumScreen",defaultMessage:r.editPageForMediumScreen}),this.editPageForSmallScreen=this.props.intl.formatMessage({id:"editPageForSmallScreen",defaultMessage:r.editPageForSmallScreen})}getStyle(e){var t,i,o;return s.css`
      .device-switch-group {
        margin-right: ${s.polished.rem(10)};
      }

      .device-switch {
        width: ${s.polished.rem(26)};
        height: ${s.polished.rem(26)};
        border-radius: 2px !important;
        border: 0;
        margin-left: 1px;
        margin-right: 1px;

        &:focus {
          box-shadow: none !important;
        }
      }

      .device-switch-gap {
        margin-right: ${s.polished.rem(5)};
      }

      .device-switch-gap button {
        border: none;
      }
      .device-switch-container button {
        color: ${null===(i=null===(t=null==e?void 0:e.colors)||void 0===t?void 0:t.palette)||void 0===i?void 0:i.dark[400]};
      }
      .device-switch-container button:hover {
        color: ${null===(o=null==e?void 0:e.colors)||void 0===o?void 0:o.black};
      }

      .device-active {
        background-color: ${e.colors.primary} !important;
        color: ${e.colors.black} !important;
      }

      .no-animation {
        transition: none;
        -webkit-transition: none;
      }
    `}onBrowserSizeModeChange(e){o.builderAppSync.publishChangeBrowserSizeModeToApp(e),e!==this.props.browserSizeMode&&o.builderAppSync.publishChangeSelectionToApp(null),this.setState({isDeviceChooseShow:!1})}render(){return(0,s.jsx)("div",{css:this.getStyle(this.props.theme)},(0,s.jsx)(i.ButtonGroup,{className:"h-100 d-flex align-items-center device-switch-group"},(0,s.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container no-animation device-switch-gap"},(0,s.jsx)(i.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(s.BrowserSizeMode.Large)},className:(0,s.classNames)("device-switch d-flex align-items-center p-0",{"device-active":!this.props.browserSizeMode||this.props.browserSizeMode===s.BrowserSizeMode.Large,"device-disactive":this.props.browserSizeMode&&this.props.browserSizeMode!==s.BrowserSizeMode.Large}),title:this.editPageForLargeScreen},(0,s.jsx)(U,null))),(0,s.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container device-switch-gap"},(0,s.jsx)(i.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(s.BrowserSizeMode.Medium)},className:(0,s.classNames)("device-switch d-flex align-items-center p-0 no-animation",{"device-active":this.props.browserSizeMode===s.BrowserSizeMode.Medium,"device-disactive":!(this.props.browserSizeMode===s.BrowserSizeMode.Medium)}),title:this.editPageForMediumScreen},(0,s.jsx)(K,null))),(0,s.jsx)("div",{className:"h-100 d-flex align-items-center device-switch-container"},(0,s.jsx)(i.Button,{icon:!0,type:"tertiary",onClick:()=>{this.onBrowserSizeModeChange(s.BrowserSizeMode.Small)},className:(0,s.classNames)("device-switch d-flex align-items-center p-0 no-animation",{"device-active":this.props.browserSizeMode===s.BrowserSizeMode.Small,"device-disactive":!(this.props.browserSizeMode===s.BrowserSizeMode.Small)}),title:this.editPageForSmallScreen},(0,s.jsx)(F,null)))))}}const _=(0,u.withTheme)(q),Q=s.ReactRedux.connect((e=>({browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode})))(_);var G=p(119),X=p.n(G);const J=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:X()},o))};class Z extends s.React.PureComponent{constructor(e){super(e),this.onToggleResolutionChoose=()=>{this.setState({isResolutionChooseShow:!this.state.isResolutionChooseShow})},this.setViewportSize=e=>{(0,o.getAppConfigAction)().setViewportSize(this.props.browserSizeMode,e).exec(),this.setState({isResolutionChooseShow:!1})},this.state={isResolutionChooseShow:!1}}getStyle(e){return s.css`
      .switch-resolution-toggle {
        width: auto;
        font-weight: 500;
        color: ${this.props.theme.colors.palette.dark[600]};
        .switch-label {
          width: auto;
          display: inline-block;
        }
      }
      .dropdown-toggle-content svg {
        margin-right: 0;
        margin-top: ${s.polished.rem(-8)};
        vertical-align: center;
      }
      .no-user-select {
        -o-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select :none;
        user-select: none;
      }
    `}getDropdownStyle(e){return s.css`
      & {
        background: ${e.colors.palette.light[500]};
        border: 1px solid ${e.colors.palette.light[300]};;
        box-shadow: 0 0 10px 2px ${s.polished.rgba(e.colors.white,.2)};
        border-radius: 2px;
        border-radius: 2px;
        padding-top: ${s.polished.rem(8)};
        padding-bottom: ${s.polished.rem(8)};
      }
    `}render(){const{browserSizeMode:e,viewportSize:t,pageMode:o,appMode:a}=this.props,r=o===s.PageMode.FitWindow?"":this.props.nls("auto"),l=t?`${t.width} × ${o!==s.PageMode.FitWindow&&a===s.AppMode.Design?r:t.height}`:"";let n=s.CONSTANTS.SCREEN_RESOLUTIONS[e]||[];if(o!==s.PageMode.FitWindow){const e={},t=[];n.forEach((s=>{null==e[s.width]&&(t.push(s),e[s.width]=s)})),n=t}return(0,s.jsx)("div",{css:this.getStyle(this.props.theme)},(0,s.jsx)(i.Dropdown,{size:"sm",toggle:this.onToggleResolutionChoose,isOpen:this.state.isResolutionChooseShow,className:"resolution-choose"},(0,s.jsx)(i.DropdownButton,{css:s.css`line-height: 1.5rem;`,size:"sm",type:"tertiary",arrow:!1,className:"switch-resolution-toggle lin",title:this.props.nls("changeScreenSize")},(0,s.jsx)("span",{className:"switch-label"},l),(0,s.jsx)(J,{size:"s"})),(0,s.jsx)(i.DropdownMenu,{css:this.getDropdownStyle(this.props.theme)},n.map(((e,t)=>(0,s.jsx)(i.DropdownItem,{key:t,className:"no-user-select",onClick:()=>{this.setViewportSize(e)}},`${e.width} × ${o!==s.PageMode.FitWindow&&a===s.AppMode.Design?r:e.height}`))))))}}const ee=(0,u.withTheme)(Z),te=s.ReactRedux.connect((e=>{var t,i,o,a,r,l;const n=e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode;let p;e.appStateInBuilder&&(p=s.utils.findViewportSize(e.appStateInBuilder.appConfig,n));const d=e.appStateInBuilder&&e.appStateInBuilder.appRuntimeInfo.currentPageId;let h;return d&&(h=null===(a=null===(o=null===(i=null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===i?void 0:i.pages)||void 0===o?void 0:o[d])||void 0===a?void 0:a.mode),{viewportSize:p,pageMode:h,appMode:null===(l=null===(r=e.appStateInBuilder)||void 0===r?void 0:r.appRuntimeInfo)||void 0===l?void 0:l.appMode,browserSizeMode:e.appStateInBuilder&&e.appStateInBuilder.browserSizeMode}}))(ee);var se=p(9216),ie=p.n(se);const oe=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:ie()},o))};var ae=p(4767),re=p.n(ae);const le=e=>{const{className:t}=e,o=function(e,t){var s={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(s[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(s[i[o]]=e[i[o]])}return s}(e,["className"]),a=(0,s.classNames)("jimu-icon-component",t);return s.React.createElement(i.Icon,Object.assign({className:a,icon:re()},o))};class ne extends s.React.PureComponent{constructor(i){super(i),this.titleTextInput=s.React.createRef(),this.spanTextInput=s.React.createRef(),this.originTitleMaxWidth=300,this.currentToolContainerWidth=0,this.currentPublishStateContainerWidth=0,this.getHelpUrl=()=>{var e;null===(e=null===o.helpUtils||void 0===o.helpUtils?void 0:o.helpUtils.getHomeHelpLink())||void 0===e||e.then((e=>{e&&this.setState({helpUrl:e})}))},this.focusEditTitle=(e=!1)=>{e&&this.titleTextInput.current.select(),this.titleTextInput.current.focus()},this.editTitle=()=>{let e=this.titleTextInput.current.value;const{appItem:t}=this.state;if(e=e.replace(/(^\s*)|(\s*$)/g,""),0===e.length||/^[ ]*$/.test(e)||e===t.title)return e=t.title,this.setState({titleText:e}),!1;a.appServices.updateAppInfo({id:this.props.queryObject.id,title:e,owner:t.owner}).then((()=>{this.props.dispatch(o.builderActions.refreshAppListAction(!0)),o.builderAppSync.publishAppInfoChangeToApp({name:e}),t.title=e,this.setState({appItem:t})}),(e=>{console.error(e)}))},this.refreshTitle=t=>{const i=this.state.itemType;s.portalUtils.getAppInfo(t).then((t=>{const s=t.type===e.Experience?e.Experience:e.Template,o=s===e.Template&&i!==s;this.getPublishStatusAndKewWorkd(t),this.setState({titleText:t.title,itemType:s,itemId:t.id,appItem:this.initAppInfo(t),isShowTemplateRemind:o})}),(e=>{console.error(e)}))},this.initAppInfo=e=>(e.isLocalApp=window.jimuConfig.isDevEdition,e.portalUrl=this.props.portalUrl,e),this.getPublishStatusAndKewWorkd=e=>{const s=e.typeKeywords||[];let{publishStatus:i}=this.state;s.forEach((e=>{if(e.includes("status:"))switch(e.split(": ")[1]){case t.Published:i=t.Published;break;case t.Changed:i=t.Changed;break;case t.Draft:i=t.Draft}})),this.setState({publishStatus:i})},this.getPublishString=()=>{const{publishStatus:e}=this.state;switch(e){case t.Draft:return this.nls("itemStatusDraft");case t.Published:return this.nls("published");case t.Changed:return this.nls("unpublishedChanges")}},this.changePublishStatus=e=>{this.setState({publishStatus:e})},this.titleTextChange=e=>{let t=e.target.value;t.length>250&&(t=t.slice(0,250)),this.setState({titleText:t})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:r[e]}):e,this.handleKeydown=e=>{"Enter"===e.key&&this.titleTextInput.current.blur()},this.onToolContainerResize=e=>{this.currentToolContainerWidth=e,this.checkAndResizeTileMaxWidth()},this.onHeaderContainerResize=()=>{this.checkAndResizeTileMaxWidth()},this.onPublishStateContainerResized=e=>{this.currentPublishStateContainerWidth=e,this.checkAndResizeTileMaxWidth()},this.checkAndResizeTileMaxWidth=()=>{if(!this.currentToolContainerWidth||!this.currentPublishStateContainerWidth)return;const e=window.innerWidth-this.currentToolContainerWidth-52-this.currentPublishStateContainerWidth;e>=this.originTitleMaxWidth?this.setState({titleMaxWidth:this.originTitleMaxWidth}):e<=40?this.setState({titleMaxWidth:40}):this.setState({titleMaxWidth:e})},this.getItemPublishStatusTitle=()=>{const{publishStatus:e}=this.state;let s="";switch(e){case t.Draft:s=this.nls("draftStatusTitle");break;case t.Published:s=this.nls("publishedTitle");break;case t.Changed:s=this.nls("publishedUnsaveTitle")}return s},this.getTemplatePopperStyle=()=>{const{theme:e}=this.props;return s.css`
      &{
        background: ${e.colors.palette.light[600]};
        color: ${e.colors.black};
        border: 1px solid ${e.colors.palette.light[300]};
        box-sizing: border-box;
        padding: ${s.polished.rem(10)} ${s.polished.rem(12)};
        border-radius: 2px;
        box-shadow: 0 0 10px 2px ${s.polished.rgba(e.colors.white,.2)};
      }
      .template-remind-porper {
        div{
          white-space: nowrap;
          text-align: center;
          font-size: ${s.polished.rem(13)};
          line-height: ${s.polished.rem(13)};
          margin-bottom: ${s.polished.rem(14)};
        }
      }
      &[data-popper-placement^="right"] .jimu-popper--arrow::before{
        border-right-color: ${e.colors.palette.light[300]};
      }
      &[data-popper-placement^="right"] .jimu-popper--arrow::after {
        border-right-color: ${e.colors.palette.light[600]};
      }
    `},this.closeTemplateRemind=()=>{this.setState({isShowTemplateRemind:!1})},this.onSaveStatusChanged=e=>{this.setState({isAppSaved:e})},this.state={titleText:"",accountPopoverOpen:!1,itemType:e.Experience,itemId:"",titleMaxWidth:this.originTitleMaxWidth,publishStatus:t.Draft,isShowTemplateRemind:!1,isAppSaved:!0,showTitle:!0,helpUrl:"#"}}getStyle(){const e=this.props.theme,{colors:t}=e;return s.css`
      .widget-builder-header {
        background-color: ${t.palette.light[500]};
        border: 1px solid ${t.palette.light[800]};
        padding-left: ${s.polished.rem(12)};
        overflow: auto;

        .header-logo {
          a {
            margin-right:${s.polished.rem(6)};
          }
          .header-logo-item {
            height: ${s.polished.rem(32)};
            width: ${s.polished.rem(32)};
            background: url('./assets/exb-logo.png') no-repeat center;
            background-size: 100%;
            &:hover {
              background: url(${p(1262)}) no-repeat center;
              background-size: 100%;
            }
          }
          input {
            padding-left:${s.polished.rem(5)};
            padding-right:${s.polished.rem(5)};
            text-align: left;
          }
        }

        .toollist-edit-icon {
          & {
            padding: 0;
            color: ${t.palette.dark[600]};
            margin-left: ${s.polished.rem(3)};
          }
          svg{
            margin: 0;
          }
        }

        .app-type {
          background: ${t.palette.secondary[400]};
          color: ${t.palette.info[700]};
          border-radius: 2px;
          font-size: ${s.polished.rem(10)};
          white-space: nowrap;
          width: ${s.polished.rem(24)};
          padding: ${s.polished.rem(2)} 0;
          text-align: center;
        }
        .publish-state {
          max-width: ${s.polished.rem(152)};
          height: ${s.polished.rem(18)};
        }
        .publish-state div {
          background: ${t.palette.success[800]};
          border-radius: 2px;
          font-size: ${s.polished.rem(10)};
          line-height: ${s.polished.rem(18)};
          position: relative;
          white-space: nowrap;
          padding: 0 ${s.polished.rem(6)};
          text-align: center;
          margin-left: ${s.polished.rem(9)};
          color: ${t.palette.success[100]};
          max-width: ${s.polished.rem(150)};
          font-weight: bold;
        }
        .publish-state .Draft{
          color: ${t.palette.warning[100]};
          background: ${t.palette.warning[800]};
        }
        .publish-state .Changed{
          color: ${t.palette.danger[100]};
          background: ${t.palette.danger[800]};
        }
        .header-title-maxwidth-screen {
        }

        .header-title {
          top: 0;
          bottom: 0;
          border: 1px solid ${t.palette.light[500]};
          input {
            background-color: transparent;
            border: 1px solid transparent;
            &:focus {
              background-color: ${e.colors.white};
            }
          }

          &:hover input{
            border: 1px solid ${t.palette.secondary[600]};
          }
        }

        .app-title-content {
          width: calc(100% - 30px);
          min-width: ${s.polished.rem(40)};
        }
        .header-title-input, .title-text-placeholder {
          border: none;
          text-align: center;
          min-width: ${s.polished.rem(40)};
          max-width: ${s.polished.rem(277)};
          cursor: text;
          color: ${t.palette.dark[800]};
          overflow:hidden;
          text-overflow:ellipsis;
          font-size: ${s.polished.rem(16)};
          box-sizing: border-box;
          height: ${s.polished.rem(28)};
        }
        .header-title-input {
          left: 0;
          top: 0;
          width: 100%;
        }
        .title-text-placeholder {
          display: block;
          opacity: 0;
          padding-left:${s.polished.rem(5)};
          padding-right:${s.polished.rem(7)};
          word-spacing: ${s.polished.rem(6)};
        }

        .header-account {
          float: left;
          color: ${e.colors.black};
          padding-left: ${s.polished.rem(20)};

          div {
            background-color: initial;
          }

          &:hover {
            // background-color: ${e.colors.white};
          }
        }

        .header-login {
          cursor: pointer;
          fill: ${e.colors.black};
        }

        .header-login-username {
          color: ${e.colors.black};
          margin-left: 5px;
          font-size: 14px;
        }

        .toollist-seperateline {
          margin-left: ${s.polished.rem(16)};
          height: 30px;
          border: 1px solid ${e.colors.palette.light[800]};
        }

        .liveview-gap {
          margin-right: ${s.polished.rem(20)};
        }

        .dropdown-toggle-content {
          margin-top: ${s.polished.rem(4)};
        }
      }

      .account-dropdown-toggle:focus {
        box-shadow: none !important;
      }`}componentDidMount(){this.props.queryObject.id&&this.refreshTitle(this.props.queryObject.id),this.getHelpUrl()}getSnapshotBeforeUpdate(e,t){return!(!this.props.queryObject.id||e.queryObject.id===this.props.queryObject.id)}componentDidUpdate(e,t,s){const{currentPageId:i}=this.props;if(s&&(this.setState({titleText:""}),this.refreshTitle(this.props.queryObject.id)),e.currentPageId!==i){let e=!0;"template"===i&&(e=!1),this.setState({showTitle:e})}}getQuery(e){return s.queryString.parse(window.location.search)[e]||""}render(){const t=this.getQuery("locale")?`?locale=${this.getQuery("locale")}`:"",{itemType:o,publishStatus:a,titleText:r,titleMaxWidth:l,isShowTemplateRemind:n,showTitle:p}=this.state;return(0,s.jsx)("div",{css:this.getStyle(),className:"h-100"},(0,s.jsx)("div",{className:"widget-builder-header d-flex justify-content-between h-100 pr-0 border-left-0 border-right-0 border-top-0",style:{overflowX:"hidden"}},(0,s.jsx)("div",{className:"d-flex"},(0,s.jsx)("div",{className:"header-logo d-flex align-items-center"},(0,s.jsx)("a",{href:`${window.jimuConfig.mountPath+t}`,title:this.nls("headerHome")},(0,s.jsx)("div",{className:"header-logo-item d-block"})),p&&(0,s.jsx)("div",{className:"header-title d-flex align-items-center header-title-maxwidth-screen",style:{maxWidth:l}},(0,s.jsx)("div",{className:"position-relative app-title-content flex-grow-1"},(0,s.jsx)("span",{className:"title-text-placeholder"},r),(0,s.jsx)("input",{ref:this.titleTextInput,className:"header-title-input  font-weight-normal position-absolute flex-grow-1",title:r,value:r,onBlur:this.editTitle,onChange:this.titleTextChange,onKeyDown:e=>{this.handleKeydown(e)}})),(0,s.jsx)(i.Button,{type:"tertiary",size:"sm",className:"toollist-edit-icon",onClick:()=>{this.focusEditTitle(!0)},title:o===e.Template?this.nls("renameTemplate"):this.nls("renameExperience")},(0,s.jsx)(oe,{size:"l"})))),(0,s.jsx)("div",{className:"d-flex align-items-center"},(0,s.jsx)("div",{ref:e=>{this.reference=e}},o===e.Template&&(0,s.jsx)("div",{title:this.nls("appTypeTemplate"),className:"app-type  position-relative"},(0,s.jsx)(le,{className:"toollist-item-icon",size:"l"}),(0,s.jsx)(i.Popper,{reference:this.reference,open:n,showArrow:!0,toggle:this.closeTemplateRemind,placement:"right-end",offset:[-8,0],css:this.getTemplatePopperStyle()},(0,s.jsx)("div",{className:"template-remind-porper"},(0,s.jsx)("div",null,this.nls("templateRemind")),(0,s.jsx)(i.Button,{type:"primary",className:"float-right",size:"sm",onClick:this.closeTemplateRemind},this.nls("gotIt")),(0,s.jsx)("span",{className:"position-absolute"}))))),(0,s.jsx)("div",{className:"publish-state position-relative",title:this.getItemPublishStatusTitle()},(0,s.jsx)("div",{className:(0,s.classNames)("text-truncate",a)},this.getPublishString())),(0,s.jsx)(s.ReactResizeDetector,{handleWidth:!0,onResize:this.onPublishStateContainerResized}))),(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-end"},(0,s.jsx)(E,{intl:this.props.intl}),(0,s.jsx)("div",{className:"liveview-gap"}),(0,s.jsx)(Q,{intl:this.props.intl}),(0,s.jsx)(te,{nls:this.nls}),(0,s.jsx)("div",{className:"toollist-seperateline border-bottom-0 border-top-0 border-left-0 mt-1 mb-1 ml-1 mr-1"}),(0,s.jsx)($,{theme:this.props.theme,itemId:this.state.itemId,itemType:this.state.itemType,intl:this.props.intl,appItem:this.state.appItem,publishStatus:this.state.publishStatus,changePublishStatus:this.changePublishStatus,titleText:r,locale:this.getQuery("locale")||"",onSaveStatusChanged:this.onSaveStatusChanged}),(0,s.jsx)("div",{className:"float-right d-flex justify-content-end"},this.props.user&&(0,s.jsx)(i.UserProfile,{user:this.props.user,portalUrl:this.props.portalUrl,isAppSaved:this.state.isAppSaved,helpUrl:this.state.helpUrl})),(0,s.jsx)(s.ReactResizeDetector,{handleWidth:!0,onResize:this.onToolContainerResize}))),(0,s.jsx)(s.ReactResizeDetector,{handleWidth:!0,onResize:this.onHeaderContainerResize}))}}ne.mapExtraStateProps=e=>({currentPageId:e.appRuntimeInfo&&e.appRuntimeInfo.currentPageId,queryObject:e.queryObject})})(),d})())}}}));