System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/advanced/theme-components"],(function(e,t){var s={},n={},o={},i={},a={};return{setters:[function(e){s.CONSTANTS=e.CONSTANTS,s.Immutable=e.Immutable,s.React=e.React,s.ThemeManager=e.ThemeManager,s.classNames=e.classNames,s.css=e.css,s.defaultMessages=e.defaultMessages,s.jsx=e.jsx,s.lodash=e.lodash,s.urlUtils=e.urlUtils},function(e){n.getAppConfigAction=e.getAppConfigAction},function(e){o.Button=e.Button,o.Icon=e.Icon,o.PanelHeader=e.PanelHeader},function(e){i.SettingSection=e.SettingSection},function(e){a.ThemeColorConfigurator=e.ThemeColorConfigurator,a.ThemeQuickStyler=e.ThemeQuickStyler,a.ThemeSelector=e.ThemeSelector}],execute:function(){e((()=>{var e={1407:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.347 2.146a.485.485 0 010 .708L5.76 8l5.587 5.146a.486.486 0 010 .708.538.538 0 01-.738 0l-5.956-5.5a.485.485 0 010-.708l5.956-5.5a.538.538 0 01.738 0z" fill="#000"></path></svg>'},1810:e=>{"use strict";e.exports=s},3297:e=>{"use strict";e.exports=n},1835:e=>{"use strict";e.exports=o},3080:e=>{"use strict";e.exports=i},9104:e=>{"use strict";e.exports=a}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var l={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(l),r.d(l,{default:()=>f});var e=r(1810),t=r(3297),s=r(1835),n=r(9104),o=r(3080);const i={chooseTheme:"Theme",customTheme:"Customize",resetTheme:"Reset",backToMainThemePanel:"Back",customPaletteTitle:"Customize palette colors",customFontsetTitle:"Customize font set",customAppElementsTitle:"App elements"};var a=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(s[n[o]]=e[n[o]])}return s};const c="jimu-builder";class p extends e.React.PureComponent{constructor(e){super(e),this.state={currentStep:1}}render(){const t=this.props,{className:s}=t,n=a(t,["className"]),o=(0,e.classNames)(c+"-stepper",s);return(0,e.jsx)("div",Object.assign({css:h},n,{className:o}))}}class m extends e.React.PureComponent{render(){const t=this.props,{active:s,className:n,children:o}=t,i=a(t,["active","className","children"]),r=(0,e.classNames)(c+"-stepper-pane",n,{active:s});return(0,e.jsx)("div",Object.assign({},i,{className:r}),s&&o)}}function h(){return e.css`

  `}var u=r(1407),d=r.n(u);const g=t=>{const{className:n}=t,o=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(s[n[o]]=e[n[o]])}return s}(t,["className"]),i=(0,e.classNames)("jimu-icon-component",n);return e.React.createElement(s.Icon,Object.assign({className:i,icon:d()},o))};class f extends e.React.PureComponent{constructor(s){super(s),this.loadThemeListInfo=()=>{return t=this,s=void 0,o=function*(){const t=yield fetch(`${e.urlUtils.getAbsoluteRootUrl()}themes/themes-info.json`);return yield Promise.resolve((0,e.Immutable)(yield t.json()))},new((n=void 0)||(n=Promise))((function(e,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function r(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var s;t.done?e(t.value):(s=t.value,s instanceof n?s:new n((function(e){e(s)}))).then(a,r)}l((o=o.apply(t,s||[])).next())}));var t,s,n,o},this.handleThemeChange=s=>{s&&(this.setState({loadStatus:"loading",selectedTheme:s}),e.ThemeManager.getInAppInstance().loadTheme(s).then((()=>{(0,t.getAppConfigAction)(this.props.appConfig).editTheme(s).exec(),e.lodash.defer((()=>{const s=(0,e.Immutable)({});(0,t.getAppConfigAction)(this.props.appConfig).editCustomTheme(s).exec()}))})))},this.handleCustomThemeChange=s=>{var n;if(!s)return;let o=null!==(n=this.props.appConfig.customTheme)&&void 0!==n?n:(0,e.Immutable)({});o=o.merge(s),(0,t.getAppConfigAction)(this.props.appConfig).editCustomTheme(o).exec()},this.handleOnCustomize=()=>{this.setState({currentStep:2})},this.handleResetCustomTheme=()=>{const s=(0,e.Immutable)({});(0,t.getAppConfigAction)(this.props.appConfig).editCustomTheme(s).exec()},this.i18n=e=>{const t=this.props.intl;return t?t.formatMessage({id:e,defaultMessage:i[e]}):e},this.getStyle=t=>e.css`
      .jimu-builder-stepper-pane {
        display: none;
        height: 100%;
        &.active {
          display: flex;
          flex-direction: column;
        }
      }
      .panel-header {
        padding-top: 18px;
        font-weight: 500;
      }
      .widget-builder-themes--pane {
        height: 100%;
        flex: 1;
        overflow: auto;
        padding-top: 18px;
        .jimu-widget-setting--section-header h6 {
          color: ${t.colors.palette.dark[600]};
          font-weight: ${t.typography.weights.bold};
          font-size: 1rem;
        }
        .split-line {
          display: none;
        }
      }
    `,this.state={selectedTheme:null,currentStep:1,loadStatus:"loading"},this.loadingStr=this.props.intl.formatMessage({id:"loading",defaultMessage:e.defaultMessages.loading}),this.titleStr=this.props.intl.formatMessage({id:"chooseTheme",defaultMessage:i.chooseTheme})}componentDidUpdate(e){var t,s,n;(null===(s=null===(t=this.props)||void 0===t?void 0:t.appConfig)||void 0===s?void 0:s.theme)===(null===(n=null==e?void 0:e.appConfig)||void 0===n?void 0:n.theme)&&this.props.appTheme&&"loaded"!==this.state.loadStatus&&this.setState({loadStatus:"loaded"})}componentDidMount(){this.loadThemeListInfo().then((e=>{this.themeInfos=e}))}render(){const{appConfig:t,appTheme:i,theme:a,intl:r,isRTL:l}=this.props,c=(null==t?void 0:t.theme)&&i;return(0,e.jsx)(p,{className:"jimu-widget widget-builder-themes d-flex flex-column bg-light-300 w-100 h-100",css:this.getStyle(a)},"init"!==this.state.loadStatus&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(m,{active:1===this.state.currentStep},(0,e.jsx)(s.PanelHeader,{className:"px-3",title:this.titleStr,showClose:!1}),(0,e.jsx)(o.SettingSection,{className:"widget-builder-themes--pane border-bottom-0"},(0,e.jsx)(n.ThemeSelector,{themeListInfo:this.themeInfos,selectedTheme:null==t?void 0:t.theme,onChange:this.handleThemeChange})),(0,e.jsx)(o.SettingSection,{className:"d-flex"},(0,e.jsx)(s.Button,{type:"primary",css:e.css`flex: 1; font-size: 1rem;`,className:"theme-setting--customize-btn text-truncate",onClick:this.handleOnCustomize,disabled:(null==t?void 0:t.theme)===e.CONSTANTS.SHARED_THEME},this.i18n("customTheme")))),c&&(0,e.jsx)(m,{active:2===this.state.currentStep},(0,e.jsx)("div",{className:"jimu-widget-setting--header px-1 pb-0"},(0,e.jsx)(s.Button,{css:{fontSize:"1rem",fontWeight:500},type:"tertiary",onClick:()=>this.setState({currentStep:1})},(0,e.jsx)(g,{css:e.css`${l&&"transform: scaleX(-1);"} position: relative; top: -2px;`,autoFlip:!0}),this.i18n("backToMainThemePanel"))),(0,e.jsx)(n.ThemeQuickStyler,{className:"widget-builder-themes--pane",themeVariables:c,onChange:this.handleCustomThemeChange,onMoreColorConfigButtonClick:()=>this.setState({currentStep:3}),rtl:l}),(0,e.jsx)(o.SettingSection,{className:"d-flex"},(0,e.jsx)(s.Button,{type:"secondary",css:e.css`flex: 1;`,onClick:this.handleResetCustomTheme},this.i18n("resetTheme")))),c&&(0,e.jsx)(m,{active:3===this.state.currentStep},(0,e.jsx)("div",{className:"jimu-widget-setting--header px-1 pb-0"},(0,e.jsx)(s.Button,{css:{fontSize:"1rem",fontWeight:500},type:"tertiary",onClick:()=>this.setState({currentStep:2})},(0,e.jsx)(g,{css:e.css`${l&&"transform: scaleX(-1);"} position: relative; top: -2px;`,autoFlip:!0}),this.i18n("backToMainThemePanel"))),(0,e.jsx)(o.SettingSection,{title:this.i18n("themeSettingThemeColors"),className:"widget-builder-themes--pane"},(0,e.jsx)("p",{className:"text-dark-400 text-break"},this.i18n("themeSettingThemeColorsDescription")),(0,e.jsx)(n.ThemeColorConfigurator,{className:"w-100 d-flex justify-content-between",themeVariables:c,onChange:this.handleCustomThemeChange,intl:r})),(0,e.jsx)(o.SettingSection,{className:"d-flex"},(0,e.jsx)(s.Button,{type:"secondary",css:e.css`flex: 1;`,onClick:this.handleResetCustomTheme},this.i18n("resetTheme"))))))}}f.mapExtraStateProps=e=>{var t;return{appConfig:e.appStateInBuilder&&e.appStateInBuilder.appConfig||null,queryObject:e.queryObject,isRTL:e.appContext.isRTL,appId:null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appId,appTheme:e.appStateInBuilder&&e.appStateInBuilder.theme}}})(),l})())}}}));