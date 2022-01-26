System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime"],(function(e,t){var o={},n={},l={};return{setters:[function(e){o.BaseVersionManager=e.BaseVersionManager,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.LinkType=e.LinkType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.css=e.css,o.getAppStore=e.getAppStore,o.getIndexFromProgress=e.getIndexFromProgress,o.jsx=e.jsx,o.lodash=e.lodash,o.polished=e.polished},function(e){n.NavButtonGroup=e.NavButtonGroup,n.Navigation=e.Navigation,n.PageNumber=e.PageNumber,n.Slider=e.Slider,n.TextAlignValue=e.TextAlignValue,n.WidgetPlaceholder=e.WidgetPlaceholder,n.componentStyleUtils=e.componentStyleUtils,n.defaultMessages=e.defaultMessages,n.hooks=e.hooks,n.styleUtils=e.styleUtils,n.utils=e.utils},function(e){l.searchUtils=e.searchUtils}],execute:function(){e((()=>{var e={9553:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M2.479 5.47L8.019.162a.592.592 0 01.813 0 .534.534 0 010 .779L3.552 6l5.28 5.06a.534.534 0 010 .779.592.592 0 01-.813 0l-5.54-5.31a.726.726 0 010-1.058z" fill="#000"></path><path d="M0 0h12v12H0z"></path></g></svg>'},91116:e=>{e.exports='<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M9.521 5.47L3.981.162a.592.592 0 00-.813 0 .534.534 0 000 .779L8.448 6l-5.28 5.06a.534.534 0 000 .779.592.592 0 00.813 0l5.54-5.31a.726.726 0 000-1.058z" fill="#000"></path><path d="M0 0h12v12H0z"></path></g></svg>'},63503:e=>{e.exports='<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg"><circle cx="1104" cy="1049" r="3" transform="translate(-1101 -1046)" fill="#000" fill-rule="nonzero"></circle></svg>'},86444:e=>{e.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1H2zm0-1h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm6 12.9a.8.8 0 110-1.6.8.8 0 010 1.6zM3.16 7l1.7 1.686a.474.474 0 010 .674.483.483 0 01-.68 0L2.14 7.337a.474.474 0 010-.674L4.18 4.64a.483.483 0 01.68 0 .474.474 0 010 .674L3.16 7zm9.68 0l-1.7-1.686a.474.474 0 010-.674.483.483 0 01.68 0l2.04 2.023a.474.474 0 010 .674L11.82 9.36a.483.483 0 01-.68 0 .474.474 0 010-.674L12.84 7zM5.4 12.9a.8.8 0 110-1.6.8.8 0 010 1.6zm5.2 0a.8.8 0 110-1.6.8.8 0 010 1.6z" fill-rule="nonzero"></path></svg>'},1810:e=>{"use strict";e.exports=o},29169:e=>{"use strict";e.exports=l},21835:e=>{"use strict";e.exports=n}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,i),l.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var a={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(a),i.d(a,{default:()=>V});var e,t=i(1810);!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(e||(e={}));var o=i(21835);const n={_widgetLabel:"Views Navigation",widgetPlaceholder:"Please add a Section to use this widget.",tabDefault:"Tab default",tabUnderline:"Tab underline",tabPills:"Tab pills",arrow1:"Arrow 1",arrow2:"Arrow 2",arrow3:"Arrow 3"},l=i(86444),s=e=>{const{widgetId:i,show:a}=e,s=o.hooks.useTranslate(n);return a?t.React.createElement(o.WidgetPlaceholder,{icon:l,widgetId:i,message:s("widgetPlaceholder")}):null};var r=i(29169);const{useEffect:u,useMemo:d,useCallback:v}=t.React,{useSelector:c,useDispatch:p}=t.ReactRedux,g=i(63503),h=i(9553),w=i(91116),f=(e,t)=>(100*e+100*t)/100,x=(e,o,n=(0,t.Immutable)([]))=>{const l=(0,t.getIndexFromProgress)(e,n.length);return(0,t.Immutable)({visibleViews:o}).set("previousViewId",n[l.previousIndex]).set("currentViewId",n[l.currentIndex]).set("useProgress",!0).set("progress",e)};const m=t.css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`,y=e=>{const{data:n,progress:l=0,type:i,navStyle:a,vertical:s,advanced:r,variant:u,onChange:v,activeView:c,standard:p}=e,g=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]])}return o}(e,["data","progress","type","navStyle","vertical","advanced","variant","onChange","activeView","standard"]),{current:h,totalPage:w,showPageNumber:f,scrollable:x,disablePrevious:y,disableNext:b,previousText:S,previousIcon:I,nextText:T,nextIcon:R,showIcon:P,gap:C,alternateIcon:A,activedIcon:M,showText:V,showTitle:j,iconPosition:N,textAlign:O,hideThumb:k}=p||{},B=t.React.useRef((()=>0));t.React.useEffect((()=>(B.current=t.lodash.throttle((e=>{let t=+e.target.value;t=Number((t/100).toFixed(2)),null==v||v("slider",t)}),100),()=>{B.current.cancel()})),[v]);const U=t.React.useCallback((e=>c===(e=>{if(!(null==e?void 0:e.value))return"";const t=e.value.split(",");return(null==t?void 0:t.length)?t[1]:""})(e)),[c]),E=((e,n,l,i,a,s)=>d((()=>{var r,u,d;if(!l||!i)return t.css``;const v=null===(d=null===(u=null===(r=(0,t.getAppStore)())||void 0===r?void 0:r.getState())||void 0===u?void 0:u.appContext)||void 0===d?void 0:d.isRTL;return"nav"===e?((e,n,l,i)=>{var a;return t.css`
    .jimu-nav{
      ${o.componentStyleUtils.nav.getRootStyles(null===(a=n)||void 0===a?void 0:a.root)};
      ${o.componentStyleUtils.nav.getVariantStyles(e,n,l,i)};
      ${o.styleUtils.getButtonStyleByState(null==n?void 0:n.item,!0)}
    }
`})(n,i,a,v):"navButtonGroup"===e?(e=>t.css`
    .nav-button-group {
      ${o.componentStyleUtils.navButtonGroup.getVariantStyles(e)};
      ${o.styleUtils.getButtonStyleByState(null==e?void 0:e.item,!1)}
    }
 `)(i):"slider"===e?((e,n,l)=>t.css`
   > .jimu-slider {
    ${o.componentStyleUtils.slider.getRootStyles(null==e?void 0:e.root)};
    ${o.componentStyleUtils.slider.getVariantStyles(e,n,l)};
   }
 `)(i,s,v):t.css``}),[l,e,n,i,a,s]))(i,a,r,u,s,k);return(0,t.jsx)("div",Object.assign({className:"navigation",css:[m,E]},g),"nav"===i&&(0,t.jsx)(o.Navigation,{vertical:s,isActive:U,scrollable:x,data:n,gap:C,type:a,showIcon:P,alternateIcon:A,activedIcon:M,showText:V,showTitle:j||V,isUseNativeTitle:!0,iconPosition:N,textAlign:O}),"slider"===i&&(0,t.jsx)(o.Slider,{className:"h-100",size:"sm",value:100*l,hideThumb:k,onChange:e=>{var t;null===(t=e.persist)||void 0===t||t.call(e),B.current(e)}}),"navButtonGroup"===i&&(0,t.jsx)(o.NavButtonGroup,{type:a,previousText:S,previousIcon:I,nextText:T,nextIcon:R,vertical:s,disablePrevious:y,disableNext:b,onChange:e=>{null==v||v("navButtonGroup",e)}},f&&(0,t.jsx)(o.PageNumber,{current:h,totalPage:w})))},b={data:{type:"AUTO",section:"",views:[]},display:{advanced:!1,vertical:!1,navType:"default",alignment:"center",showText:!0,showIcon:!1,iconPosition:"start"}};class S extends t.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:e=>{var t;if(!e)return b;let o=e;return(null===(t=null==e?void 0:e.display)||void 0===t?void 0:t.variants)&&(o=o.setIn(["display","advanced"],!0)),o}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:e=>(e=>{const o=e;if(!e)return;const n=o.display;if(!n)return e;let l=(0,t.Immutable)({});const i=((e,t)=>{if(!e)return;const o=null==e?void 0:e[t];if(!o)return;let n=o;return o.bg&&(n=n.setIn(["root","bg"],o.bg),n=n.without("bg")),n})(n.variants,n.navType);return l=l.set("type","nav").set("vertical",n.vertical).set("advanced",n.advanced).set("navStyle",n.navType).set("standard",{scrollable:!0,textAlign:n.alignment,showText:n.showText,showIcon:n.showIcon,iconPosition:n.iconPosition}).set("variant",i),o.set("display",l)})(e||b)}]}}const I=new S,{useRef:T,useEffect:R,useState:P}=t.React,{useSelector:C,useDispatch:A}=t.ReactRedux,M=l=>{var i,a,m,b,S;const{id:I,config:M,builderSupportModules:V}=l,j=A(),N=null===(i=null==V?void 0:V.jimuForBuilderLib)||void 0===i?void 0:i.getAppConfigAction,O=T(null),{current:k}=T(null===(m=null===(a=(0,t.getAppStore)().getState())||void 0===a?void 0:a.appContext)||void 0===m?void 0:m.isInBuilder),B=C((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.widgetsState)||void 0===t?void 0:t[I])||void 0===o?void 0:o.showQuickStyle})),U=C((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.widgetsState)||void 0===t?void 0:t[I])||void 0===o?void 0:o.hasEverMount})),E=(e=>{const t=o.hooks.useTranslate(o.defaultMessages,n);return d((()=>{if(e)return[{label:t("tabDefault"),type:"nav",navStyle:"default",standard:{gap:"0px",scrollable:!0,showIcon:!1,showText:!0,iconPosition:"start",textAlign:o.TextAlignValue.CENTER}},{label:t("tabUnderline"),type:"nav",navStyle:"underline",standard:{gap:"0px",scrollable:!0,showIcon:!1,showText:!0,iconPosition:"start",textAlign:o.TextAlignValue.CENTER}},{label:t("tabPills"),type:"nav",navStyle:"pills",standard:{gap:"0px",scrollable:!0,showIcon:!1,showText:!0,iconPosition:"start",textAlign:o.TextAlignValue.CENTER}},{label:t("symbol"),type:"nav",navStyle:"default",standard:{scrollable:!1,gap:"10px",showIcon:!0,alternateIcon:o.utils.toIconResult(g,"dot-6",8),activedIcon:o.utils.toIconResult(g,"dot-10",8),showText:!1,iconPosition:"start",textAlign:o.TextAlignValue.CENTER}},{label:t("slider"),type:"slider",navStyle:"default"},{label:t("arrow1"),type:"navButtonGroup",navStyle:"default",standard:{showPageNumber:!0,previousText:"",previousIcon:o.utils.toIconResult(h,"left-arrow-12",12),nextText:"",nextIcon:o.utils.toIconResult(w,"right-arrow-12",12)}},{label:t("arrow2"),type:"navButtonGroup",navStyle:"tertiary",standard:{previousText:t("prev"),previousIcon:o.utils.toIconResult(h,"left-arrow-12",12),nextText:t("next"),nextIcon:o.utils.toIconResult(w,"right-arrow-12",12)}},{label:t("arrow3"),type:"navButtonGroup",navStyle:"tertiary",standard:{showPageNumber:!0,previousText:"",previousIcon:o.utils.toIconResult(h,"left-arrow-12",12),nextText:"",nextIcon:o.utils.toIconResult(w,"right-arrow-12",12)}}]}),[t,e])})(k),L=null==M?void 0:M.display,z=null==M?void 0:M.data,G=null==L?void 0:L.standard,$=null==z?void 0:z.type,W=null==z?void 0:z.section,D=null!==(b=null==G?void 0:G.step)&&void 0!==b?b:1,[Q,F]=P(!1),H=C((e=>{var t,o,n,l;return null===(l=null===(n=null===(o=null===(t=null==e?void 0:e.appConfig)||void 0===t?void 0:t.sections)||void 0===o?void 0:o[W])||void 0===n?void 0:n.views)||void 0===l?void 0:l[0]})),_=C((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos)||void 0===o?void 0:o[W]})),q=((o,n,l)=>{const i=c((e=>{var t,n,l;return null===(l=null===(n=null===(t=null==e?void 0:e.appConfig)||void 0===t?void 0:t.sections)||void 0===n?void 0:n[o])||void 0===l?void 0:l.views}));return t.React.useMemo((()=>{const o=((l===e.Custom?n:i)||(0,t.Immutable)([])).asMutable();return o.sort(((e,t)=>(null==i?void 0:i.indexOf(e))-(null==i?void 0:i.indexOf(t)))),(0,t.Immutable)(o)}),[n,i,l])})(W,null==z?void 0:z.views,$),J=(e=>{const o=c((e=>e.appConfig.views)),n=c((e=>{const t=e.appConfig.pages,o=Object.keys(t).find((e=>{var o;return null===(o=null==t?void 0:t[e])||void 0===o?void 0:o.isDefault}));return e.appRuntimeInfo.currentPageId||o}));return t.React.useMemo((()=>{var l;return null!==(l=null==e?void 0:e.map((e=>{var l;return{name:null===(l=null==o?void 0:o[e])||void 0===l?void 0:l.label,linkType:t.LinkType.View,value:`${n},${e}`}})))&&void 0!==l?l:(0,t.Immutable)([])}),[n,o,e])})(q),K=null==_?void 0:_.progress,X=null==_?void 0:_.useProgress,Y=null!==(S=null==_?void 0:_.currentViewId)&&void 0!==S?S:H,Z=(ee=null==L?void 0:L.vertical,d((()=>t.css`
    overflow: hidden;
    min-height: ${ee?t.polished.rem(16):"unset"};
    min-width: ${ee?"unset":t.polished.rem(16)};
  `),[ee]));var ee;const te=t.React.useMemo((()=>{const e=((e,t,o,n)=>{var l,i;let a,s;const r=null!==(l=null==n?void 0:n.length)&&void 0!==l?l:0;let u=(null==n?void 0:n.includes(e))?null==n?void 0:n.indexOf(e):0;if(u+=1,o){let e=0;const o=null!==(i=null==n?void 0:n.length)&&void 0!==i?i:0;if(o>1){e=t*(o-1);const n=e%1;e=Math.floor(e),a=0===e&&0===n,s=e===r-1&&0===n}}else a=u<=1,s=u===r;return{current:u,totalPage:r,disableNext:s,disablePrevious:a}})(Y,K,X,q);return Object.assign(Object.assign({},G),e)}),[Y,K,G,X,q]),oe=t.React.useCallback((()=>{j(t.appActions.widgetStatePropChange(I,"showQuickStyle",!1))}),[j,I]);(e=>{const n=p(),l=c((t=>o.utils.isWidgetSelected(e,t)?t.appRuntimeInfo.appMode:null));o.hooks.useUpdateEffect((()=>{n(t.appActions.widgetStatePropChange(e,"showQuickStyle",!1))}),[l,e])})(I),(e=>{const n=o.hooks.useWidgetSelected(e),l=p();o.hooks.useUpdateEffect((()=>{n||l(t.appActions.widgetStatePropChange(e,"showQuickStyle",!1))}),[n,e])})(I),((e,n)=>{const l=o.hooks.useWidgetSelected(e),i=p();u((()=>{l&&!n&&(i(t.appActions.widgetStatePropChange(e,"showQuickStyle",!0)),i(t.appActions.widgetStatePropChange(e,"hasEverMount",!0)))}),[])})(I,U);const ne=((e,o)=>v((n=>{var l;const i=(0,t.getAppStore)().getState().appConfig.widgets[e].config,a=null===(l=null==i?void 0:i.data)||void 0===l?void 0:l.section;if(!(null==n?void 0:n.includes(a))){if(!a&&!(null==n?void 0:n[0]))return;o().editWidgetProperty(e,"config",i.setIn(["data","section"],null==n?void 0:n[0])).exec(!1)}}),[o,e]))(I,N);((e,n)=>{const l=(e=>{const o=t.ReactRedux.useSelector((e=>{var t;return null===(t=null==e?void 0:e.appConfig)||void 0===t?void 0:t.layouts})),n=t.ReactRedux.useSelector((e=>{var t;return null===(t=null==e?void 0:e.appConfig)||void 0===t?void 0:t.sections})),l=t.ReactRedux.useSelector((e=>null==e?void 0:e.browserSizeMode));return t.React.useMemo((()=>{const o=(0,t.getAppStore)().getState().appConfig;return r.searchUtils.getContentsInTheSameContainer(o,e,t.LayoutItemType.Widget,t.LayoutItemType.Section,l)||[]}),[e,l,n,o])})(e),i=o.hooks.useRefValue(n),{current:a}=t.React.useRef((0,t.getAppStore)().getState().appContext.isInBuilder);u((()=>{var e;a&&(null===(e=i.current)||void 0===e||e.call(i,l))}),[l,a,i])})(I,ne);const le=((o,n)=>v((l=>{var i,a,s,r,u,d;const v=(0,t.getAppStore)().getState().appConfig.widgets[o].config,c=(null===(i=null==v?void 0:v.data)||void 0===i?void 0:i.type)===e.Custom?null===(s=null===(a=null==v?void 0:v.data)||void 0===a?void 0:a.views)||void 0===s?void 0:s.filter((e=>null==l?void 0:l.includes(e))):l;((null==c?void 0:c.length)||(null===(u=null===(r=null==v?void 0:v.data)||void 0===r?void 0:r.views)||void 0===u?void 0:u.length))&&(t.lodash.isDeepEqual(c,null===(d=null==v?void 0:v.data)||void 0===d?void 0:d.views)||n().editWidgetProperty(o,"config",v.setIn(["data","views"],c)).exec(!1))}),[n,o]))(I,N);((e,n)=>{const l=c((t=>{var o,n,l;return null===(l=null===(n=null===(o=null==t?void 0:t.appConfig)||void 0===o?void 0:o.sections)||void 0===n?void 0:n[e])||void 0===l?void 0:l.views})),{current:i}=t.React.useRef((0,t.getAppStore)().getState().appContext.isInBuilder),a=o.hooks.useRefValue(n);u((()=>{var e;i&&(null===(e=a.current)||void 0===e||e.call(a,l))}),[l,a,i])})(W,le);const ie=(e=>{const o=p();return v(((n,l)=>{var i,a,s,r,u,d;const v=null===(i=(0,t.getAppStore)())||void 0===i?void 0:i.getState(),c=null===(s=null===(a=v.appConfig.sections)||void 0===a?void 0:a[e])||void 0===s?void 0:s.views,p=null===(u=null===(r=null==v?void 0:v.appRuntimeInfo)||void 0===r?void 0:r.sectionNavInfos)||void 0===u?void 0:u[e],g=null==p?void 0:p.currentViewId,h=null==p?void 0:p.visibleViews,w=null!==(d=null==p?void 0:p.progress)&&void 0!==d?d:0;let m=null;if(1===l)m=((e,o,n,l=(0,t.Immutable)([]))=>{let i=l.indexOf(o);i=-1===i?0:i;const a=l[e?Math.max(0,i-1):Math.min(l.length-1,i+1)];return(0,t.Immutable)({visibleViews:n}).set("previousViewId",o).set("currentViewId",a).set("useProgress",!1).set("progress",l.indexOf(a)/(l.length-1))})(n,g,c,h);else{const e=n?Math.max(f(w,-l/(c.length-1)),0):Math.min(f(w,l/(c.length-1)),1);m=x(e,c,h)}o(t.appActions.sectionNavInfoChanged(e,m))}),[o,e])})(W),ae=(e=>{const o=p();return v((n=>{var l,i,a,s,r,u;const d=null===(l=(0,t.getAppStore)())||void 0===l?void 0:l.getState(),v=null===(a=null===(i=d.appConfig.sections)||void 0===i?void 0:i[e])||void 0===a?void 0:a.views,c=null===(u=null===(r=null===(s=d.appRuntimeInfo)||void 0===s?void 0:s.sectionNavInfos)||void 0===r?void 0:r[e])||void 0===u?void 0:u.visibleViews,p=x(n,v,c);o(t.appActions.sectionNavInfoChanged(e,p))}),[o,e])})(W),se=o.hooks.useEventCallback(((e,t)=>{"navButtonGroup"===e?ie(t,D):"slider"===e&&ae(t)}));R((()=>{Q||F(!0)}),[]);const re=null==V?void 0:V.widgetModules.NavQuickStyle;return(0,t.jsx)("div",{className:"widget-view-navigation jimu-widget",css:Z,ref:O},(0,t.jsx)(s,{widgetId:I,show:!J.length}),(0,t.jsx)(y,Object.assign({data:J,activeView:Y,progress:K,onChange:se},L,{standard:te})),Q&&re&&(0,t.jsx)(re,{templates:E,display:null==M?void 0:M.display,onChange:o=>{if(!N)return;const n=(0,t.Immutable)(o).set("vertical",!1).set("advanced",!1).set("variant",null);N().editWidgetProperty(I,"config",M.setIn(["data","type"],e.Auto).set("display",n)).exec()},onClose:oe,open:B,reference:O.current}))};M.versionManager=I;const V=M})(),a})())}}}));