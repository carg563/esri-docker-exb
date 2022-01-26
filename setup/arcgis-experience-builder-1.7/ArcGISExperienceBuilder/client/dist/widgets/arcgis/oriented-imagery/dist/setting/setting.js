System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-arcgis","jimu-ui"],(function(e,t){var s={},i={},r={},o={};return{setters:[function(e){s.DataSourceManager=e.DataSourceManager,s.Immutable=e.Immutable,s.React=e.React},function(e){i.MapWidgetSelector=e.MapWidgetSelector,i.SettingRow=e.SettingRow,i.SettingSection=e.SettingSection},function(e){r.ArcGISDataSourceTypes=e.ArcGISDataSourceTypes,r.MapViewManager=e.MapViewManager,r.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){o.Button=e.Button,o.Checkbox=e.Checkbox,o.Collapse=e.Collapse,o.Label=e.Label,o.Option=e.Option,o.Select=e.Select,o.Switch=e.Switch,o.TextInput=e.TextInput,o.Tooltip=e.Tooltip}],execute:function(){e((()=>{var e={40214:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var i=s(8081),r=s.n(i),o=s(23645),n=s.n(o)()(r());n.push([e.id,".oi-hideFeatureLayers{display:none}.oi-showFeatureLayers{display:block}\n",""]);const a=n},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",i=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),i&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),i&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var n={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(n[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);i&&n[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),s&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=s):u[2]=s),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},8081:e=>{"use strict";e.exports=function(e){return e[1]}},93379:e=>{"use strict";var t=[];function s(e){for(var s=-1,i=0;i<t.length;i++)if(t[i].identifier===e){s=i;break}return s}function i(e,i){for(var o={},n=[],a=0;a<e.length;a++){var l=e[a],c=i.base?l[0]+i.base:l[0],u=o[c]||0,p="".concat(c," ").concat(u);o[c]=u+1;var h=s(p),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(d);else{var m=r(d,i);i.byIndex=a,t.splice(a,0,{identifier:p,updater:m,references:1})}n.push(p)}return n}function r(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var n=0;n<o.length;n++){var a=s(o[n]);t[a].references--}for(var l=i(e,r),c=0;c<o.length;c++){var u=s(o[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=l}}},90569:e=>{"use strict";var t={};e.exports=function(e,s){var i=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(s)}},19216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,s)=>{"use strict";e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var i="";s.supports&&(i+="@supports (".concat(s.supports,") {")),s.media&&(i+="@media ".concat(s.media," {"));var r=void 0!==s.layer;r&&(i+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),i+=s.css,r&&(i+="}"),s.media&&(i+="}"),s.supports&&(i+="}");var o=s.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},44589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},26826:e=>{"use strict";e.exports=r},48891:e=>{"use strict";e.exports=s},30726:e=>{"use strict";e.exports=o},77756:e=>{"use strict";e.exports=i}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,exports:{}};return e[s](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var a={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(a),n.d(a,{default:()=>L});var e=n(48891),t=n(77756),s=n(26826),i=n(30726);const r={enableEditing:"Add overlays to viewer",addOIC:"Add",chooseOIC:"Choose catalog",deleteOIC:"Delete",itemurl:"From item URL",contents:"From my contents",groups:"From my groups",org:"From my organization groups",chooseMapWidget:"Select map widget",addToViewer:"Add to viewer",editLayer:"Enable editing",configureEdit:"Configure editing",editingTooltip:"Layer needs to be editable",editingSwitchTooltip:"View must contain feature layers",selectOIC:"Select catalog",catalogUrl:"Item url",selectGroupFolder:"Select group/folder",selectMap:"Select map",catalogSelection:"Catalog selection",selectedCatalog:"Selected catalog"};var o=n(93379),l=n.n(o),c=n(7795),u=n.n(c),p=n(90569),h=n.n(p),d=n(3565),m=n.n(d),g=n(19216),f=n.n(g),y=n(44589),C=n.n(y),v=n(40214),I={};I.styleTagTransform=C(),I.setAttributes=m(),I.insert=h().bind(null,"head"),I.domAPI=u(),I.insertStyleElement=f(),l()(v.Z,I),v.Z&&v.Z.locals&&v.Z.locals;class L extends e.React.PureComponent{constructor(t){super(t),this.supportedTypes=(0,e.Immutable)([s.ArcGISDataSourceTypes.WebMap]),this.dsManager=e.DataSourceManager.getInstance(),this.mvManager=s.MapViewManager.getInstance(),this.featureLayerCss="oi-hideFeatureLayers",this.unmount=!1,this.onMapSelected=e=>{var t,s;if(this.props.onSettingChange({id:this.props.id,useMapWidgetIds:e}),e.length>0){this.vectorLayers=[],this.mapView=null===(t=this.mvManager.jimuMapViewGroups[e[0]].getActiveJimuMapView())||void 0===t?void 0:t.view;const i=null===(s=this.mapView)||void 0===s?void 0:s.map.layers;if(i)for(let e=0;e<i.length;e++)if("feature"===i.getItemAt(e).type){const t={};t.title=i.getItemAt(e).title,t.id=i.getItemAt(e).id,this.vectorLayers.push({featureLayer:t,addToViewer:!1,editing:!1})}}this.props.onSettingChange({id:this.props.id,config:this.props.config.set("vectorLayers",this.vectorLayers)})},this.nls=e=>this.props.intl?this.props.intl.formatMessage({id:e,defaultMessage:r[e]}):e,this.getOICFromUserAcc=()=>{new this.Portal({url:this.props.portalUrl}).load().then((e=>{if(!this.userContentInfo){this.userContentInfo={userId:this.props.user.username,myFolders:{},myGroups:{},myOrgGroups:{},user:e};for(let e=0;e<this.props.user.groups.length;e++)this.userContentInfo.myGroups[this.props.user.groups[e].title]={id:this.props.user.groups[e].id,items:[]};this.getOrganisationGroups(e),this.getOICFromFolders(e)}}))},this.getOrganisationGroups=e=>{this.esriRequest(e.restUrl+"/community/groups",{query:{f:"json",q:"orgid:"+this.props.user.orgId,start:1,num:50,sortField:"title",sortOrder:"asc"},responseType:"json"}).then((e=>{const t=e.data;for(let e=0;e<t.results.length;e++)this.userContentInfo.myOrgGroups[t.results[e].title]={id:t.results[e].id,items:[]}}))},this.getOICFromFolders=e=>{this.esriRequest(e.restUrl+"/content/users/"+this.props.user.username,{query:{f:"json",token:this.props.token},responseType:"json"}).then((e=>{e=e.data,this.userContentInfo.myFolders[e.currentFolder||"[ root folder ]"]={id:null,items:[]};for(let t=0;t<e.items.length;t++)"Oriented Imagery Catalog"===e.items[t].type&&this.userContentInfo.myFolders[e.currentFolder||"[ root folder ]"].items.push({name:e.items[t].title,url:this.props.portalUrl+"/sharing/rest/content/items/"+e.items[t].id});for(const t in e.folders)this.userContentInfo.myFolders[e.folders[t].title]={id:e.folders[t].id,items:[]};this.populateFolderGroupList(this.state.selectContent)})).catch((()=>{this.populateFolderGroupList(this.state.selectContent)}))},this.populateFolderGroupList=e=>{let t;"content"===e?t=Object.keys(this.userContentInfo.myFolders):"group"===e?t=Object.keys(this.userContentInfo.myGroups):"orgGroups"===e&&(t=Object.keys(this.userContentInfo.myOrgGroups)),null==t||t.sort((function(e,t){return(e=e.toLowerCase().split(" ")[0])<(t=t.toLowerCase().split(" ")[0])?-1:e>t?1:0})),this.setState({contentList:t})},this.populateOICList=e=>{var t,s,i;const r=e.currentTarget.value;if(r){let e;if("content"===this.state.selectContent?e=null===(t=this.userContentInfo)||void 0===t?void 0:t.myFolders[r].items:"group"===this.state.selectContent?e=null===(s=this.userContentInfo)||void 0===s?void 0:s.myGroups[r].items:"orgGroups"===this.state.selectContent&&(e=null===(i=this.userContentInfo)||void 0===i?void 0:i.myOrgGroups[r].items),e.length){e.sort((function(e,t){return(e=e.name.toLowerCase().split(" ")[0])<(t=t.name.toLowerCase().split(" ")[0])?-1:e>t?1:0}));const t=[];for(const s in e)t.push({name:e[s].name,value:e[s].url});this.setState({itemList:t})}else"content"===this.state.selectContent?this.getOICFromFolder(r):this.getOICFromGroup(r)}},this.getOICFromFolder=e=>{const t=this.userContentInfo.myFolders[e].id;this.esriRequest(this.userContentInfo.user.restUrl+"/content/users/"+this.props.user.username+"/"+t,{query:{f:"json",token:this.props.token},responseType:"json"}).then((t=>{if((t=t.data).items){this.userContentInfo.myFolders[e].items=[];for(let s=0;s<t.items.length;s++)"Oriented Imagery Catalog"===t.items[s].type&&this.userContentInfo.myFolders[e].items.push({name:t.items[s].title,url:this.userContentInfo.user.restUrl+"/content/items/"+t.items[s].id});const s=this.userContentInfo.myFolders[e].items;s.sort((function(e,t){return(e=e.name.toLowerCase().split(" ")[0])<(t=t.name.toLowerCase().split(" ")[0])?-1:e>t?1:0}));const i=[];for(const e in s)i.push({name:s[e].name,value:s[e].url});this.setState({itemList:i})}})).catch((()=>{}))},this.getOICFromGroup=e=>{const t=this.userContentInfo.myGroups[e]?this.userContentInfo.myGroups[e].id:this.userContentInfo.myOrgGroups[e].id;this.esriRequest(this.userContentInfo.user.restUrl+"/content/groups/"+t,{query:{f:"json",token:this.props.token},responseType:"json"}).then((t=>{if((t=t.data).items){this.userContentInfo.myGroups[e]?this.userContentInfo.myGroups[e].items=[]:this.userContentInfo.myOrgGroups[e]&&(this.userContentInfo.myOrgGroups[e].items=[]);for(let s=0;s<t.items.length;s++)"Oriented Imagery Catalog"===t.items[s].type&&(this.userContentInfo.myGroups[e]?this.userContentInfo.myGroups[e].items.push({name:t.items[s].title,url:this.userContentInfo.user.restUrl+"/content/items/"+t.items[s].id}):this.userContentInfo.myOrgGroups[e].items.push({name:t.items[s].title,url:this.userContentInfo.user.restUrl+"/content/items/"+t.items[s].id}));const s=this.userContentInfo.myGroups[e]?this.userContentInfo.myGroups[e].items:this.userContentInfo.myOrgGroups[e].items;s.sort((function(e,t){return(e=e.name.toLowerCase().split(" ")[0])<(t=t.name.toLowerCase().split(" ")[0])?-1:e>t?1:0}));const i=[];for(const e in s)i.push({name:s[e].name,value:s[e].url});this.setState({itemList:i})}})).catch((()=>{}))},this.changeContent=e=>{"itemurl"!==e.currentTarget.value&&this.populateFolderGroupList(e.currentTarget.value),this.setState({selectContent:e.currentTarget.value})},this.chooseOIC=e=>{this.setState({oic:{name:e.currentTarget.textContent,url:e.currentTarget.value}})},this.getOICfromUrl=e=>{const t=e;if(t.includes("id=")){const e=t.split("/home")[0]+"/sharing/rest/content/items/"+t.split("id=")[1].split("/")[0];this.esriRequest(e,{query:{f:"json"},responseType:"json"}).then((e=>{e.data&&"Oriented Imagery Catalog"===e.data.type&&this.setState({oic:{name:e.data.title,url:e.url}})})).catch((e=>{console.log(e)}))}},this.addOICToList=()=>{this.OICList=[],this.state.oic&&this.OICList.push(this.state.oic),this.props.onSettingChange({id:this.props.id,config:this.props.config.set("oicList",this.OICList)}),this.setState({oicList:this.OICList})},this.deleteOICList=()=>{this.OICList=[],this.props.onSettingChange({id:this.props.id,config:this.props.config.set("oicList",this.OICList)}),this.setState({oicList:this.OICList})},this.enableEditing=(e,t)=>{this.featureLayerCss=t?"oi-showFeatureLayers":"oi-hideFeatureLayers",this.props.onSettingChange({id:this.props.id,config:this.props.config.set("editingEnabled",t)})},this.enableLayerView=(e,t)=>{this.vectorLayers&&0!==this.vectorLayers.length||(this.vectorLayers=this.props.config.vectorLayers);for(let s=0;s<this.vectorLayers.length;s++)if(e.currentTarget.id.split("-add")[0]===this.vectorLayers[s].featureLayer.id){this.vectorLayers[s].addToViewer=t;break}this.props.onSettingChange({id:this.props.id,config:this.props.config.set("vectorLayers",this.vectorLayers)})},this.enableLayerEdit=(e,t)=>{this.vectorLayers&&0!==this.vectorLayers.length||(this.vectorLayers=this.props.config.vectorLayers);for(let s=0;s<this.vectorLayers.length;s++)if(e.currentTarget.id.split("-edit")[0]===this.vectorLayers[s].featureLayer.id){this.vectorLayers[s].editing=t;break}this.props.onSettingChange({id:this.props.id,config:this.props.config.set("vectorLayers",this.vectorLayers)})},this.state={groupList:[],selectContent:"group",folderList:[],itemList:[],orgGroupList:[],contentList:[],oicList:[],oic:null,layerEditCollapseFlags:{},apiLoaded:!1}}componentDidMount(){return e=this,t=void 0,r=function*(){this.unmount||(this.state.apiLoaded||(yield(0,s.loadArcGISJSAPIModules)(["esri/portal/Portal","esri/request"]).then((e=>{[this.Portal,this.esriRequest]=e,this.setState({apiLoaded:!0})})),this.props.config.oicList.length>0?this.OICList=this.props.config.oicList:this.OICList=[],this.getOICFromUserAcc()),this.props.useMapWidgetIds&&!this.mapView&&this.onMapSelected(this.props.useMapWidgetIds))},new((i=void 0)||(i=Promise))((function(s,o){function n(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}l((r=r.apply(e,t||[])).next())}));var e,t,i,r}componentWillUnmount(){this.unmount=!0}render(){var s,r,o,n;let a,l;this.featureLayerCss=this.props.config.editingEnabled?"oi-showFeatureLayers":"oi-hideFeatureLayers",a="itemurl"===this.state.selectContent?e.React.createElement(t.SettingRow,{role:"group","aria-label":this.nls("catalogUrl")},e.React.createElement(i.TextInput,{id:"oic-itemurl",placeholder:this.nls("catalogUrl"),onAcceptValue:this.getOICfromUrl})," "):e.React.createElement(e.React.Fragment,null,e.React.createElement(t.SettingRow,{role:"group","aria-label":this.nls("selectGroupFolder")},e.React.createElement(i.Select,{placeholder:this.nls("selectGroupFolder"),onChange:this.populateOICList},this.state.contentList.map(((t,s)=>e.React.createElement(i.Option,{value:t,key:s},e.React.createElement("div",{className:"text-truncate"},t)))))),e.React.createElement(t.SettingRow,{role:"group","aria-label":this.nls("selectOIC")},e.React.createElement(i.Select,{placeholder:this.nls("selectOIC"),onChange:this.chooseOIC,value:this.state.oic?this.state.oic.url:null},this.state.itemList.map(((t,s)=>e.React.createElement(i.Option,{value:t.value,key:s},e.React.createElement("div",{className:"text-truncate"},t.name))))))),this.mapView&&(null===(s=this.props.config.vectorLayers)||void 0===s?void 0:s.length)>0&&(l=null===(r=this.props.config.vectorLayers)||void 0===r?void 0:r.map(((s,r)=>{var o,n,a,l;const c=!(!(null===(o=this.mapView.map.findLayerById(s.featureLayer.id))||void 0===o?void 0:o.editingEnabled)||!(null===(l=null===(a=null===(n=this.mapView.map.findLayerById(s.featureLayer.id))||void 0===n?void 0:n.capabilities)||void 0===a?void 0:a.operations)||void 0===l?void 0:l.supportsEditing));return e.React.createElement(t.SettingRow,{role:"group","aria-label":this.nls("editLayer"),flow:"wrap",key:r,className:this.featureLayerCss,label:e.React.createElement("div",{className:"w-100 d-flex"},e.React.createElement("span",{className:"d-inline-flex"},e.React.createElement(i.Checkbox,{checked:s.addToViewer,onChange:this.enableLayerView,id:s.featureLayer.id+"-add"}),e.React.createElement(i.Label,{className:"pl-2"},s.featureLayer.title)))},e.React.createElement(i.Collapse,{isOpen:s.addToViewer,className:"w-100 offset-1"},e.React.createElement(i.Tooltip,{placement:"top",showArrow:!0,title:c?"":this.nls("editingTooltip")},e.React.createElement("span",{className:"d-inline-flex"},e.React.createElement(i.Checkbox,{checked:s.editing,disabled:!c,onChange:this.enableLayerEdit,id:s.featureLayer.id+"-edit"}),e.React.createElement(i.Label,{className:"pl-2"},this.nls("editLayer"))))))})));const c=(null===(o=this.props.config.vectorLayers)||void 0===o?void 0:o.length)>0;return e.React.createElement("div",{className:"widget-setting-orientedimagery"},e.React.createElement(t.SettingSection,{className:"map-selector-section",title:this.nls("chooseMapWidget"),role:"group","aria-label":this.nls("selectMap")},e.React.createElement(t.SettingRow,{role:"group","aria-label":this.nls("selectMap")},e.React.createElement(t.MapWidgetSelector,{onSelect:this.onMapSelected,useMapWidgetIds:this.props.useMapWidgetIds}),e.React.createElement("br",null))),e.React.createElement(t.SettingSection,{title:this.nls("chooseOIC"),role:"group","aria-label":this.nls("catalogSelection")},e.React.createElement(t.SettingRow,{role:"group","aria-label":this.nls("chooseOIC")},e.React.createElement(i.Select,{value:this.state.selectContent,onChange:this.changeContent},e.React.createElement(i.Option,{value:"content"},this.nls("contents")),e.React.createElement(i.Option,{value:"group"},this.nls("groups")),e.React.createElement(i.Option,{value:"orgGroups"},this.nls("org")),e.React.createElement(i.Option,{value:"itemurl"},this.nls("itemurl")))),a,e.React.createElement(t.SettingRow,{role:"group","aria-label":this.nls("selectedCatalog")},this.OICList&&this.OICList[0]?e.React.createElement(i.TextInput,{style:{width:"228px"},readOnly:!0,disabled:!0,value:null===(n=this.OICList[0])||void 0===n?void 0:n.name}):null),e.React.createElement(t.SettingRow,{role:"group","aria-label":this.nls("addOIC")},e.React.createElement(i.Button,{type:"primary",disabled:!this.state.oic,size:"sm",onClick:this.addOICToList},this.nls("addOIC")),e.React.createElement(i.Button,{type:"secondary",disabled:!this.OICList,size:"sm",onClick:this.deleteOICList,style:{marginLeft:"5px"}},this.nls("deleteOIC")))),e.React.createElement(t.SettingSection,{title:this.nls("configureEdit"),role:"group","aria-label":this.nls("configureEdit")},e.React.createElement(t.SettingRow,{role:"group","aria-label":this.nls("configureEdit")},e.React.createElement(i.Tooltip,{placement:"top",showArrow:!0,title:c?"":this.nls("editingSwitchTooltip")},e.React.createElement("span",null,e.React.createElement(i.Label,{style:{cursor:"pointer"}},e.React.createElement(i.Switch,{className:"mr-2",onChange:this.enableEditing,id:"oi-editingCheckbox",checked:!(!this.props.config.editingEnabled||!c),disabled:!c}),this.nls("enableEditing"))))),l))}}})(),a})())}}}));