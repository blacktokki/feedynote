(self.webpackChunkweb=self.webpackChunkweb||[]).push([[820],{7504:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ne});var r=n(4586),i=n(9399),o=n(9928),l=n(1632),a=n(689),u=n(3705),s=n(9367),c=n(7904),d=n(8077),f=n(6330),p=n(8111),y=n(7628);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v,j=function(){var e=(0,f.default)((function*(e){return(yield y.default.get(`/api/v1/content/${e}`)).data}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,f.default)((function*(e,t){var n=void 0!==e?`&parentId=${e}`:"",r=void 0!==t?`&type=${t}`:"";return(yield y.default.get(`/api/v1/content?self=true&size=1000&${n}${r}`)).data.value}));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=(0,f.default)((function*(e){return(yield y.default.post("/api/v1/content",e)).data.id}));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,f.default)((function*(e){var t=e.id,n=e.updated;yield y.default.patch("/api/v1/content",{ids:[t],updated:n})}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,f.default)((function*(e){yield y.default.delete(`/api/v1/content/${e}`)}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,f.default)((function*(){yield y.default.get("/api/v1/feed/pull")}));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,f.default)((function*(e){return g({type:"SCRAP"},(yield y.default.get(`/api/v1/preview/autocomplete?query=${e.query}`)).data)}));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=(0,f.default)((function*(e){return g({type:"FEED"},(yield y.default.get(`/api/v1/feed/autocomplete?query=${e.query}`)).data)}));return function(t){return e.apply(this,arguments)}}();function P(e,t){return(0,p.useQuery)(["ContentList",e,t],(0,f.default)((function*(){return void 0!==e||void 0!==t?yield m(e,t):void 0}))).data}function E(){var e=(0,p.useQueryClient)(),t=(0,p.useMutation)(x,{onSuccess:function(){e.invalidateQueries("ContentList")}}),n=(0,p.useMutation)(b,{onSuccess:function(){e.invalidateQueries("ContentList"),e.invalidateQueries("Content")}}),r=(0,p.useMutation)(O,{onSuccess:function(){e.invalidateQueries("ContentList")}}),o=(0,p.useMutation)(function(){var t=(0,f.default)((function*(t){console.log("pulling feed: "+t);var n=["ContentList"].concat((0,u.default)(t));return yield e.setQueryData(n,void 0),yield w(),n}));return function(e){return t.apply(this,arguments)}}(),{onSuccess:function(t){e.invalidateQueries(t)}});return(0,i.useEffect)((function(){void 0===v&&(o.mutateAsync([]),v=setInterval((function(){return o.mutateAsync([])}),12e5))}),[]),{create:t.mutateAsync,update:n.mutateAsync,delete:r.mutateAsync,pullFeed:o.mutateAsync}}var D=n(7989),T=n(4537),I=n(3717),R=n(9850),L=n(6927),k=n(863),A=n(5888),B=n(2990),F=n(8389),N=n(5073),z=n(575),V=["data","eventStyle","timeContainerStyle","iconContainerStyle","lineStyle","contentContainerStyle","onEndReachedThreshold","onEndReached","TimelineFooter","TimelineHeader"];function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var M=function(e){var t=e.time,n=(t=void 0===t?{}:t).content,r=t.style,i=e.style;return(0,z.jsx)(d.View,{style:[Y.timeContainer,i],children:(0,z.jsx)(d.Text,{style:[Y.time,r],children:n})})},$=function(e){var t=e.icon,n=void 0===t?{}:t,r=e.iconStyle,i=e.lineStyle,o="function"===typeof n?(0,z.jsx)(n,{styles:[Y.icon,r]}):(0,z.jsx)(N.default,{icon:n.content,style:[Y.icon,n.style?n.style:null]});return(0,z.jsxs)(d.View,{style:[Y.iconContainer,r],children:[o,(0,z.jsx)(d.View,{style:[Y.verticalLine,i]})]})},Q=function(e){var t=e.children,n=e.style;return(0,z.jsx)(d.View,{style:[Y.eventContainer,n],children:t})},W=function(e){var t=e.event,n=void 0===t?{}:t,r=e.eventStyle,i=e.timeContainerStyle,o=e.iconContainerStyle,l=e.lineStyle,a=e.contentContainerStyle,u=n.title,s=void 0===u?{}:u,c=n.description,f=void 0===c?{}:c,p=n.imageUrl,y=n.time,h=n.icon,g=n.pressAction,v=g?I.default:d.View,j=s&&"function"===typeof s?(0,z.jsx)(s,{styles:Y.title}):(0,z.jsx)(d.Text,{style:[Y.title,{fontSize:14}],children:s}),m=f&&"function"===typeof f?(0,z.jsx)(f,{styles:Y.description}):(0,z.jsxs)(d.View,{style:{flexDirection:"row"},children:[p?(0,z.jsx)(F.default,{source:{uri:p},resizeMode:"cover",style:{width:"25%",minWidth:120,minHeight:120,borderWidth:1}}):void 0,(0,z.jsx)(d.Text,{style:[Y.description,{fontSize:12}],children:f})]});return(0,z.jsxs)(v,{style:[Y.row,r],onPress:g,children:[(0,z.jsx)(M,{time:y,style:i}),(0,z.jsx)($,{icon:h,iconStyle:o,lineStyle:l}),(0,z.jsxs)(Q,{style:a,children:[j,m]})]})};const q=function(e){var t=e.data,n=void 0===t?[]:t,i=e.eventStyle,o=void 0===i?{}:i,l=e.timeContainerStyle,a=void 0===l?{}:l,u=e.iconContainerStyle,s=void 0===u?{}:u,c=e.lineStyle,f=void 0===c?{}:c,p=e.contentContainerStyle,y=void 0===p?{}:p,h=e.onEndReachedThreshold,g=e.onEndReached,v=e.TimelineFooter,j=e.TimelineHeader,m=(0,R.default)(e,V),x=(0,z.jsx)(L.default,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({data:n,renderItem:function(e){var t=e.item;return(0,z.jsx)(W,{event:t,eventStyle:o,timeContainerStyle:a,iconContainerStyle:s,lineStyle:f,contentContainerStyle:y})},keyExtractor:function(e,t){return t.toString()},onEndReached:g,onEndReachedThreshold:h||0,ListFooterComponent:v,ListHeaderComponent:j},m));return(0,z.jsx)(d.View,{style:Y.container,children:x})};var Y=k.default.create({container:{flex:1,width:"100%"},row:{flexDirection:"row",alignItems:"flex-start",marginVertical:5},timeContainer:{flexBasis:"25%",paddingTop:10},time:{fontSize:12,color:"#aaa",fontStyle:"italic",textAlign:"center"},iconContainer:{flexBasis:"6%",alignItems:"center",alignSelf:"stretch",marginHorizontal:"5%"},verticalLine:{flex:1,width:1,backgroundColor:"#ededed"},eventContainer:{flexBasis:"55%",alignItems:"flex-start",padding:16,borderRadius:15,shadowOffset:{width:A.default.isRTL?8:-8,height:0},shadowColor:"#888",shadowOpacity:.2,marginBottom:10,borderTopLeftRadius:0},icon:{textAlign:"center",width:20,height:20,backgroundColor:"#6F98FA",paddingTop:"ios"===B.default.OS?2.5:5,borderRadius:10,fontSize:9,overflow:"hidden",borderWidth:3,borderColor:"#e0e9ff"},title:{fontSize:12,fontWeight:"bold",textAlign:"left",marginBottom:5,lineHeight:20},description:{textAlign:"left",fontSize:11,lineHeight:18,paddingBottom:10}}),G=n(3775);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=/<\/?[^>]*>/gi,J=(new Date).getTimezoneOffset(),K=function(e){var t=new Date(e);t.setMinutes(t.getMinutes()-J);var n=t.toISOString().slice(0,16),r=n.slice(0,10);return r==(new Date).toISOString().slice(0,10)?n.slice(11):r};const X=function(e){var t,n,r=e.parentContent,i="TIMELINE"===r.type,o=P(void 0,i?"FEEDCONTENT":void 0),a=P(r.id),c=a?new Set(a.map((function(e){return e.id}))):void 0,f=null==(t=i?null==o?void 0:o.filter((function(e){return null==c?void 0:c.has(e.parentId)})):a?(0,u.default)(a):void 0)?void 0:t.reverse(),p=(0,d.useResizeContext)(),y=(0,d.useColorScheme)();return f&&("LIBRARY"!==r.type?(0,z.jsx)(q,{data:f.map((function(e){return Z(Z({},e),{},{time:{content:K(e.updated)},pressAction:function(){return(0,l.navigate)("EditorScreen",{id:e.id})}})}))}):(0,z.jsxs)(s.default,{style:{backgroundColor:d.Colors[y].background},contentContainerStyle:{flexDirection:"row",justifyContent:"center"},children:[(0,z.jsx)(d.View,{style:{flexBasis:"100%",maxWidth:1280,flexWrap:"wrap",flexDirection:"row",paddingRight:20},children:null==(n=(0,u.default)(f))?void 0:n.map((function(e,t){var n;if(null===e)return(0,z.jsx)(d.View,{style:{flexBasis:"landscape"===p?"33%":"50%",maxWidth:230}},t);var r=null==(n=e.description)?void 0:n.replaceAll(/\n/g,"").replaceAll(/<hr\s*[\/]?>\n/gi,"").replaceAll(/&nbsp;/gi," ").replaceAll(/<br\s*[\/]?>/gi,"\r\n").replaceAll(_,""),i=function(){return(0,l.navigate)("EditorScreen",{id:e.id})};return(0,z.jsxs)(I.default,{style:{flexBasis:"landscape"===p?"33%":"50%",padding:20,paddingRight:0,minWidth:230,maxWidth:230},onPress:i,children:[(0,z.jsx)(G.default,{onPress:i,style:{aspectRatio:1/Math.sqrt(2),borderRadius:6,marginVertical:10,marginHorizontal:8,overflow:"hidden"},children:(0,z.jsx)(G.default.Content,{children:(0,z.jsx)(d.Text,{style:{fontSize:16,opacity:.4},children:r})})}),(0,z.jsxs)(d.View,{style:{flexDirection:"row",marginTop:10,justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,z.jsx)(d.Text,{style:{fontSize:18},children:e.title}),(0,z.jsx)(d.Text,{style:{fontSize:14,opacity:.4,textAlign:"right"},children:K(e.updated)})]})]},t)}))}),"landscape"===p&&(0,z.jsx)(d.View,{style:{flexBasis:"0%",flexGrow:1,maxWidth:240}})]}))};function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne={},re=function(e){return`<div class="scrap mceNonEditable" style="border:1px solid #ddd; padding:10px; display:flex; align-items:center;">\n  ${void 0!==e.imageUrl?`<img src="${e.imageUrl}" alt="preview" style="width:80px; height:80px; margin-right:10px;">`:""}\n  <div>\n    <strong>${e.title}</strong><br>\n    <a href="${e.url}" target="_blank">${e.url}</a>\n    ${e.description?`<p>${e.description}</p>`:""}\n  </div>\n</div>`},ie=function(){var e=(0,f.default)((function*(e,t){try{new URL(t)}catch(o){return}if(ne[t])return ne[t];var n="FEED"===e?yield C({query:t}):yield S({query:t});if(n&&null!==n.title){var r=re(te(te({},n),{},{url:t})),i={title:n.title,description:r};return ne[t]=i,i}}));return function(t,n){return e.apply(this,arguments)}}();const oe=function(e,t){var n=(0,i.useState)(),r=(0,a.default)(n,2),o=r[0],l=r[1],u=(0,p.useQuery)(["Preview",e,o],(0,f.default)((function*(){return o?yield ie(e,o):void 0}))).data;return(0,i.useEffect)((function(){var e=setTimeout((function(){return l(t)}),320);return function(){return clearTimeout(e)}}),[t]),u};function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=n(2571),se=n(5614);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=i.memo((function(e){var t=oe("SCRAP",e.url);return(null==t?void 0:t.description)&&(0,z.jsxs)(c.default,{style:{height:155,flexDirection:"row"},children:[(0,z.jsx)(se.EditorHtml,{content:t.description}),(0,z.jsx)(d.CommonButton,{title:"\u2728",onPress:function(){return e.replacer(t.description)},style:{height:155,paddingTop:65}})]})})),pe=function(e,t){for(var n,r=t,i=0,o=[];null!=(n=new RegExp(e).exec(r));){o.push({index:i,str:r.substring(0,n.index)});var l=n.index+n[0].length;o.push({index:i+n.index,str:r.substring(n.index,l)}),i+=l,r=r.substring(l)}return o.push({index:i,str:r}),o},ye=function(e,t){if(void 0!==t)return function(e){var t=[],n=/https?:\/\/(?:www\\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/gi;return pe(/(<a .*?href="(.*?)".*?>(.*)<\/a>|<img .*?src="(.*?)".*?\/>)/,e).forEach((function(e,r){r%2!=1&&pe(n,e.str).forEach((function(n,r){r%2==1&&t.push({pos:e.index+n.index,url:n.str})}))})),t}(t).map((function(n,r){return(0,z.jsx)(fe,{url:n.url,replacer:function(r){e(t.substring(0,n.pos)+r+t.substring(n.pos+n.url.length))}},r)}))};var he=n(4952),ge=n(9767),ve=n(7687),je=n(205),me=n(5589),xe=n(4906);function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var we=function(e){return e?5:8},Se=function(e){var t=(0,d.useColorScheme)(),n=i.useState(!1),r=(0,a.default)(n,2),o=r[0],u=r[1],s=(0,d.useResizeContext)(),c=P(o?e.timeline.id:void 0),f=we("landscape"===s);return(0,z.jsxs)(d.View,{children:[(0,z.jsx)(he.default,{title:e.timeline.title,expanded:o&&void 0!==c,style:{padding:f},onPress:function(){return(0,l.navigate)("ContentListScreen",{id:e.timeline.id})},left:function(e){return(0,z.jsx)(N.default,Oe(Oe({},e),{},{icon:o?"chevron-down":"chevron-right"}))},right:function(){},children:c&&c.map((function(e){return(0,z.jsx)(ge.default,{left:function(e){return(0,z.jsx)(N.default,Oe(Oe({},e),{},{icon:"rss"}))},title:e.title,onPress:function(){return(0,l.navigate)("ContentListScreen",{id:e.id})},style:{padding:f}},e.id)}))}),(0,z.jsx)(ve.default,{style:{position:"absolute",justifyContent:"center",paddingLeft:8+f,width:40+2*f,height:40+2*f},onPress:function(){return u(!o)},children:(0,z.jsx)((function(e){var n=e.isExpanded;return(0,z.jsx)(xe.default,{name:n?"chevron-down":"chevron-right",color:d.Colors[t].text,size:24,direction:A.default.getConstants().isRTL?"rtl":"ltr"})}),{isExpanded:o})})]})};const Ce=function(e){var t=P(0,e.type),n=(0,d.useLangContext)().lang,r=(0,d.useResizeContext)(),i=we("landscape"===r);return(0,z.jsxs)(je.default,{children:[(0,z.jsxs)(d.View,{style:{flexDirection:"row"},children:[(0,z.jsx)(me.default,{style:{flex:1},selectable:!1,children:n("LIBRARY"===e.type?"Libraries":"Timelines")}),(0,z.jsx)(ve.default,{onPress:function(){return(0,l.navigate)("ContentListScreen",{type:e.type})},children:(0,z.jsx)(N.default,{icon:"plus",style:{margin:i}})})]}),t&&t.map((function(t){return"TIMELINE"==e.type?(0,z.jsx)(Se,{timeline:t},t.id):(0,z.jsx)(ge.default,{left:function(e){return(0,z.jsx)(N.default,Oe(Oe({},e),{},{icon:"library"}))},title:t.title,onPress:function(){return(0,l.navigate)("ContentListScreen",{id:t.id})},style:{padding:i}},t.id)}))]})};var Pe=function(){var e=(0,d.useColorScheme)();return(0,z.jsxs)(s.default,{style:{flex:1,backgroundColor:d.Colors[e].background},children:[(0,z.jsx)(Ce,{type:"TIMELINE"}),(0,z.jsx)(Ce,{type:"LIBRARY"})]})},Ee=function(){var e=(0,d.useColorScheme)();return(0,z.jsx)(s.default,{style:{flex:1,backgroundColor:d.Colors[e].background},children:(0,z.jsx)(l.ConfigSections,{})})};var De={HomeScreen:{title:"home",component:function(e){e.navigation,e.route;var t=(0,d.useLangContext)().lang,n=(0,d.useColorScheme)(),r=d.Colors[n].text,i=[{title:t("Contents"),component:Pe,icon:(0,z.jsx)(N.default,{icon:"table-of-contents"}),headerRight:function(){return(0,z.jsx)(z.Fragment,{})}},{title:t("Config"),component:Ee,icon:(0,z.jsx)(N.default,{icon:"dots-horizontal"}),headerRight:function(){return(0,z.jsx)(z.Fragment,{})}}];return(0,z.jsx)(l.HomeSection,{tabViews:i,title:t("home"),children:(0,z.jsxs)(c.default,{style:{flexGrow:1,width:"80%",marginTop:72},children:[(0,z.jsx)(d.Text,{style:{fontSize:32,color:r},children:"feedynote"}),(0,z.jsx)(c.default,{style:{backgroundColor:d.Colors.borderColor,height:1,width:"100%"}}),(0,z.jsx)(c.default,{style:{height:24}}),(0,z.jsx)(l.ConfigSections,{})]})})},path:"home"},EditorScreen:{path:"editor",title:"editor",component:function(e){var t,n,r,o,u,y=e.navigation,h=e.route,g={created:void 0===(null==h||null==(t=h.params)?void 0:t.id),id:parseInt(null==h||null==(n=h.params)?void 0:n.id),parentId:void 0!==(null==h||null==(r=h.params)?void 0:r.parentId)?parseInt(null==h||null==(o=h.params)?void 0:o.parentId):0},v=(0,d.useColorScheme)(),m=(0,d.useLangContext)().lang,x=(0,T.useAuthContext)().auth,b=(u=g.created?void 0:g.id,(0,p.useQuery)(["Content",u],(0,f.default)((function*(){return u?yield j(u):void 0}))).data),O=P(null==b?void 0:b.parentId),w=E(),S=(0,i.useState)(),C=(0,a.default)(S,2),I=C[0],R=C[1],L=(0,i.useState)(),k=(0,a.default)(L,2),A=k[0],B=k[1],F=(0,i.useState)(),N=(0,a.default)(F,2),V=N[0],H=N[1],M=(0,i.useState)(!1),$=(0,a.default)(M,2),Q=$[0],W=$[1],q={NOTE:m("New Note")},Y=function(){W(!0)};(0,i.useLayoutEffect)((function(){if(g.created){var e="NOTE";W(!1),R(q[e]),B(""),H(e)}else b&&(W(!1),R(b.input),B(b.description),H(b.type))}),[b]),(0,i.useLayoutEffect)((function(){g.created?y.setOptions({headerShown:!1}):b&&y.setOptions({title:b.title,headerRight:function(){return(0,z.jsx)(c.default,{style:{flexDirection:"row"},children:"FEEDCONTENT"===b.type?(0,z.jsx)(d.CommonButton,{title:"\ud83c\udf10",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return ue.default.openURL(b.input)}}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d.CommonButton,{title:"\u270f\ufe0f",style:{height:40,paddingTop:8,marginRight:10},onPress:Y}),(0,z.jsx)(d.CommonButton,{title:"\ud83d\uddd1\ufe0f",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return w.delete(b.id).then((function(e){return G()}))}})]})})},headerShown:!Q})}),[y,b,Q]);var G=function(){y.canGoBack()?y.goBack():y.navigate("HomeScreen",{tab:1})},U=g.created||Q;return(0,z.jsxs)(d.View,{style:{width:"100%",height:"100%"},children:[U&&void 0!==I&&(0,z.jsx)(D.default,{mode:"outlined",value:I,onChangeText:R,style:{borderRadius:20,margin:1}}),"NOTE"===V&&(0,z.jsx)(se.Editor,{theme:v,active:U,value:A||"",setValue:U?B:function(){}}),U&&(0,z.jsxs)(z.Fragment,{children:[ye(B,A),(0,z.jsx)(d.CommonButton,{title:m("save"),onPress:function(){var e,t;!x.user||(null==b?void 0:b.input)==I&&(null==b?void 0:b.description)==A||void 0===V?W(!1):(g.created?t=w.create({userId:x.user.id,parentId:g.parentId,type:V,order:((null==O?void 0:O.length)||0)+1,input:I||"",title:I||"",description:A}).then((function(e){(0,l.navigate)("EditorScreen",{id:e})})):void 0!==b&&(t=w.update({id:b.id,updated:de(de({},b),{},{type:V,input:I||"",title:I||"",description:A})})),null==(e=t)||e.then((function(){W(!1)})))},style:{height:65,paddingVertical:20}})]}),(0,z.jsx)(s.default,{style:{flex:U?0:1},contentContainerStyle:{flexGrow:1},children:(0,z.jsx)(se.EditorHtml,{content:"FEEDCONTENT"===(null==b?void 0:b.type)?re(de(de({},b),{},{url:b.input})):A||"",onPress:"FEEDCONTENT"===(null==b?void 0:b.type)?void 0:Y})})]})}},ContentListScreen:{path:"contents",title:"contents",component:function(e){var t,n,r,o,f=e.navigation,p=e.route,y={created:void 0===(null==p||null==(t=p.params)?void 0:t.id),id:parseInt(null==p||null==(n=p.params)?void 0:n.id),parentId:null!=p&&null!=(r=p.params)&&r.parentId?parseInt(p.params.parentId):void 0,type:null==p||null==(o=p.params)?void 0:o.type},h=(0,d.useLangContext)().lang,g=(0,T.useAuthContext)().auth,v=P(0),j=P(void 0,"FEED"),m=void 0!==v&&void 0!==j?[].concat((0,u.default)(v),(0,u.default)(j)):void 0,x=E(),b=y.created||null==m?void 0:m.find((function(e){return e.id===y.id})),O=(0,i.useState)(),w=(0,a.default)(O,2),S=w[0],C=w[1],I=(0,i.useState)(),R=(0,a.default)(I,2),L=R[0],k=R[1],A=(0,i.useState)(!1),B=(0,a.default)(A,2),F=B[0],N=B[1],V=oe("FEED",y.created&&"FEED"===y.type?S:void 0),H=function(){f.canGoBack()?f.goBack():f.navigate("HomeScreen",{tab:1})};y.created&&"FEED"===y.type&&void 0===y.parentId&&H();var M={LIBRARY:h("New Library"),TIMELINE:h("New Timelines"),FEED:"https://"},$=function(){N(!0)};(0,i.useLayoutEffect)((function(){y.created?(N(!1),C(M[y.type]),k(y.type)):b&&(N(!1),C(b.input),k(L))}),[b]),(0,i.useLayoutEffect)((function(){y.created?f.setOptions({headerShown:!1}):b&&f.setOptions({title:b.title,headerRight:function(){return(0,z.jsxs)(c.default,{style:{flexDirection:"row"},children:["LIBRARY"===b.type&&(0,z.jsx)(d.CommonButton,{title:"\u2295",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return(0,l.navigate)("EditorScreen",{parentId:b.id})}}),"TIMELINE"===b.type&&(0,z.jsx)(d.CommonButton,{title:"\u2295",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return(0,l.navigate)("ContentListScreen",{type:"FEED",parentId:b.id})}}),"LIBRARY"!==b.type&&(0,z.jsx)(d.CommonButton,{title:"\ud83d\udd04",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return x.pullFeed("TIMELINE"===b.type?[void 0,"FEEDCONTENT"]:[b.id,void 0])}}),(0,z.jsx)(d.CommonButton,{title:"\u270f\ufe0f",style:{height:40,paddingTop:8,marginRight:10},onPress:$}),(0,z.jsx)(d.CommonButton,{title:"\ud83d\uddd1\ufe0f",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return x.delete(b.id).then((function(e){return H()}))}})]})},headerShown:!F})}),[f,b,F]);var Q=y.created||F;return(0,z.jsx)(d.View,{style:{width:"100%",height:"100%",backgroundColor:"transparent"},children:Q?(0,z.jsxs)(z.Fragment,{children:[void 0!==S&&(0,z.jsx)(D.default,{mode:"outlined",value:S,onChangeText:C,style:{borderRadius:20,margin:1}}),(null==V?void 0:V.description)&&(0,z.jsx)(d.Text,{children:V.description}),("FEED"!==L||void 0!==V)&&(0,z.jsx)(d.CommonButton,{title:h("save"),onPress:function(){var e;if(g.user&&(null==b?void 0:b.input)!=S&&void 0!==L){var t,n=null!=V&&V.title?V.title:S||"";if(y.created){var r=null==m?void 0:m.filter((function(e){return e.type==y.type}));t=x.create({userId:g.user.id,parentId:"FEED"===y.type?y.parentId:0,type:L,order:((null==r?void 0:r.length)||0)+1,input:S||"",title:n}).then((function(e){(0,l.navigate)("ContentListScreen",{id:e})}))}else void 0!==b&&(t=x.update({id:b.id,updated:ae(ae({},b),{},{type:L,input:S||"",title:n})}));null==(e=t)||e.then((function(){N(!1)}))}else N(!1)},style:{height:65,paddingVertical:20}}),(0,z.jsx)(d.CommonButton,{title:h("cancel"),onPress:y.created?H:function(){return N(!1)},style:{height:65,paddingVertical:20}})]}):(0,z.jsx)(s.default,{style:{flex:1},contentContainerStyle:{flexGrow:1},children:b&&(0,z.jsx)(X,{parentContent:b})})})}}};function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Re=n(8610),Le=n(7650),ke=n(8565);function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Fe={main:De,login:l.login,prefixes:[o.makeUrl("/")],rootPath:"feedynote",documentTitle:{formatter:function(){return"feedynote"}},rootScreen:{main:"HomeScreen",login:"LoginScreen"},headerLeftIcon:(0,z.jsx)(N.default,{icon:"backburger",style:{left:-18,top:-14}}),headerRight:(0,z.jsx)(z.Fragment,{}),modals:[],drawer:(0,z.jsx)((function(){var e=(0,d.useLangContext)().lang;return(0,z.jsxs)(s.default,{style:{flex:1},children:[(0,z.jsx)(ge.default,{left:function(e){return(0,z.jsx)(N.default,Ie(Ie({},e),{},{icon:"home"}))},title:e("Home"),onPress:function(){return(0,l.navigate)("HomeScreen")}}),(0,z.jsx)(Ce,{type:"TIMELINE"}),(0,z.jsx)(Ce,{type:"LIBRARY"})]})}),{})};const Ne=function(){var e=(0,d.useColorScheme)(),t="dark"==e?Re.MD2DarkTheme:Le.MD2LightTheme,n=Be(Be({},t),{},{colors:Be(Be({},t.colors),{},{primary:d.Colors[e].text})});return(0,z.jsx)(ke.default,{theme:n,children:(0,z.jsx)(l.Navigation,{config:Fe})})}},8513:e=>{editorConfig={plugins:"image link charmap advlist lists paste hr noneditable",toolbar:"fontsizeselect | bold italic underline strikethrough | undo redo | alignleft aligncenter alignright | bullist numlist | hr link",setup:function(e){}},e.exports=editorConfig},6973:()=>{}}]);
//# sourceMappingURL=820.15a71b1b.chunk.js.map