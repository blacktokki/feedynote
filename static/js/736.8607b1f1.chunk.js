(self.webpackChunkweb=self.webpackChunkweb||[]).push([[736],{9430:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Fe});var r=n(4586),i=n(9399),o=n(9928),a=n(1632),u=n(689),l=n(3705),s=n(9367),c=n(7904),d=n(8077),f=n(6330),p=n(8111),y=n(7628);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v,j=function(){var e=(0,f.default)((function*(e){return(yield y.default.get(`/api/v1/content/${e}`)).data}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,f.default)((function*(e,t){var n=void 0!==e?`&parentId=${e}`:"",r=void 0!==t?`&type=${t}`:"";return(yield y.default.get(`/api/v1/content?self=true&size=256${n}${r}`)).data.value}));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,f.default)((function*(e,t,n){var r="TIMELINE"===t?`&grandParentId=${e}`:`&parentId=${e}`,i="LIBRARY"===t?"256":"20";return{current:(yield y.default.get(`/api/v1/content?self=true&sort=id,DESC&size=${i}&page=${n}${r}`)).data.value}}));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(){var e=(0,f.default)((function*(e){return(yield y.default.post("/api/v1/content",e)).data.id}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,f.default)((function*(e){var t=e.id,n=e.updated;yield y.default.patch("/api/v1/content",{ids:[t],updated:n})}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,f.default)((function*(e){yield y.default.delete(`/api/v1/content/${e}`)}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,f.default)((function*(){yield y.default.get("/api/v1/feed/pull")}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,f.default)((function*(e){return h({type:"SCRAP"},(yield y.default.get(`/api/v1/preview/autocomplete?query=${e.query}`)).data)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=(0,f.default)((function*(e){return h({type:"FEED"},(yield y.default.get(`/api/v1/feed/autocomplete?query=${e.query}`)).data)}));return function(t){return e.apply(this,arguments)}}();function E(e,t){return(0,p.useQuery)(["ContentList",e,t],(0,f.default)((function*(){return void 0!==e||void 0!==t?yield x(e,t):void 0}))).data}function D(){var e=(0,p.useQueryClient)(),t=(0,p.useMutation)(b,{onSuccess:function(){e.invalidateQueries("ContentList")}}),n=(0,p.useMutation)(O,{onSuccess:function(){e.invalidateQueries("ContentList"),e.invalidateQueries("Content")}}),r=(0,p.useMutation)(w,{onSuccess:function(){e.invalidateQueries("ContentList")}}),o=(0,p.useMutation)(function(){var t=(0,f.default)((function*(t){console.log("pulling feed: "+t);var n=["ContentList"].concat((0,l.default)(t));return yield e.setQueryData(n,void 0),yield P(),n}));return function(e){return t.apply(this,arguments)}}(),{onSuccess:function(t){e.invalidateQueries(t)}});return(0,i.useEffect)((function(){void 0===v&&(o.mutateAsync([]),v=setInterval((function(){return o.mutateAsync([])}),12e5))}),[]),{create:t.mutateAsync,update:n.mutateAsync,delete:r.mutateAsync,pullFeed:o.mutateAsync}}var I=n(7989),T=n(4537),R=n(6927),L=n(3717),A=(n(9850),n(863)),B=n(5888),k=n(2990),N=n(8389),z=n(5073),F=n(575);var $=function(e){var t=e.time,n=(t=void 0===t?{}:t).content,r=t.style,i=e.style;return(0,F.jsx)(c.default,{style:[Q.timeContainer,i],children:(0,F.jsx)(d.Text,{style:[Q.time,r],children:n})})},M=function(e){var t=e.icon,n=void 0===t?{}:t,r=e.iconStyle,i=e.lineStyle,o="function"===typeof n?(0,F.jsx)(n,{styles:[Q.icon,r]}):(0,F.jsx)(z.default,{icon:n.content,style:[Q.icon,n.style?n.style:null]});return(0,F.jsxs)(c.default,{style:[Q.iconContainer,r],children:[o,(0,F.jsx)(c.default,{style:[Q.verticalLine,i]})]})},V=function(e){var t=e.children,n=e.style;return(0,F.jsx)(c.default,{style:[Q.eventContainer,n],children:t})},H=function(e){var t=e.event,n=void 0===t?{}:t,r=e.eventStyle,i=e.timeContainerStyle,o=e.iconContainerStyle,a=e.lineStyle,u=e.contentContainerStyle,l=n.title,s=void 0===l?{}:l,f=n.description,p=void 0===f?{}:f,y=n.imageUrl,g=n.time,h=n.icon,v=n.pressAction,j=v?L.default:c.default,x=s&&"function"===typeof s?(0,F.jsx)(s,{styles:Q.title}):(0,F.jsx)(d.Text,{style:[Q.title,{fontSize:14}],children:s}),m=p&&"function"===typeof p?(0,F.jsx)(p,{styles:Q.description}):(0,F.jsxs)(c.default,{style:{flexDirection:"row"},children:[y?(0,F.jsx)(N.default,{source:{uri:y},resizeMode:"cover",style:{width:"33%",maxWidth:150,minHeight:120,borderWidth:1}}):void 0,(0,F.jsx)(d.Text,{style:[Q.description,{fontSize:12}],children:p})]});return(0,F.jsxs)(j,{style:[Q.row,r],onPress:v,children:[(0,F.jsx)($,{time:g,style:i}),(0,F.jsx)(M,{icon:h,iconStyle:o,lineStyle:a}),(0,F.jsxs)(V,{style:u,children:[x,m]})]})};var Q=A.default.create({container:{flex:1,width:"100%"},row:{flexDirection:"row",alignItems:"flex-start",marginVertical:5},timeContainer:{flexBasis:"15%",paddingTop:10},time:{fontSize:12,color:"#888",fontStyle:"italic",textAlign:"center"},iconContainer:{flexBasis:"5%",alignItems:"center",alignSelf:"stretch",marginHorizontal:"5%"},verticalLine:{flex:1,width:1,backgroundColor:"#ccc"},eventContainer:{flexBasis:"65%",flexGrow:1,alignItems:"flex-start",padding:16,borderRadius:15,shadowOffset:{width:B.default.isRTL?8:-8,height:0},shadowColor:"#888",shadowOpacity:.2,marginBottom:10,borderTopLeftRadius:0},icon:{textAlign:"center",width:20,height:20,backgroundColor:"#6F98FA",paddingTop:"ios"===k.default.OS?2.5:5,borderRadius:10,fontSize:9,overflow:"hidden",borderWidth:3,borderColor:"#e0e9ff"},title:{fontSize:12,fontWeight:"bold",textAlign:"left",marginBottom:5,lineHeight:20},description:{textAlign:"left",fontSize:11,lineHeight:18,paddingBottom:10}}),W=n(3775);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=/<\/?[^>]*>/gi,U=(new Date).getTimezoneOffset(),Z=function(e){var t=new Date(e);t.setMinutes(t.getMinutes()-U);var n=t.toISOString().slice(0,16),r=n.slice(0,10);return r==(new Date).toISOString().slice(0,10)?n.slice(11):r},_=i.memo((function(e){return e.data.map((function(e){return q(q({},e),{},{time:{content:Z(e.updated)},pressAction:function(){return(0,a.navigate)("EditorScreen",{id:e.id})}})})).map((function(e,t){return(0,F.jsx)(H,{event:e},t)}))})),J=function(e){return e?20:4},K=function(e){return e?230:190},X=i.memo((function(e){var t,n=e.data,r=(0,d.useResizeContext)(),i=K("landscape"===r),o="landscape"===r?2:0;return null==(t=[].concat((0,l.default)(n.sort((function(e,t){return e.updated<t.updated?1:-1}))),[null,null]))?void 0:t.map((function(e,t){var n;if(null===e)return(0,F.jsx)(c.default,{style:{flexBasis:"landscape"===r?"33%":"50%",maxWidth:i}},t);var u=null==(n=e.description)?void 0:n.replaceAll(/\n/g,"").replaceAll(/<hr\s*[\/]?>\n/gi,"").replaceAll(/&nbsp;/gi," ").replaceAll(/<br\s*[\/]?>/gi,"\r\n").replaceAll(G,""),l=function(){return(0,a.navigate)("EditorScreen",{id:e.id})};return(0,F.jsxs)(L.default,{style:{flexBasis:"landscape"===r?"33%":"50%",padding:J("landscape"===r),paddingRight:0,minWidth:i,maxWidth:i},onPress:l,children:[(0,F.jsx)(W.default,{onPress:l,style:{aspectRatio:1/Math.sqrt(2),borderRadius:6,marginVertical:10,marginHorizontal:8,overflow:"hidden"},children:(0,F.jsx)(W.default.Content,{children:(0,F.jsx)(d.Text,{style:{fontSize:12+o,opacity:.4},children:u})})}),(0,F.jsxs)(c.default,{style:{flexDirection:"row",marginTop:10,justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,F.jsx)(d.Text,{style:{fontSize:14+o},children:e.title}),(0,F.jsx)(d.Text,{style:{fontSize:12+o,opacity:.4,textAlign:"right"},children:Z(e.updated)})]})]},t)}))}));const ee=function(e){var t=e.parentContent,n=function(e,t){var n=(0,p.useInfiniteQuery)(["ContentList",e],function(){var n=(0,f.default)((function*(n){var r=n.pageParam;return yield m(e,t,r)}));return function(e){return n.apply(this,arguments)}}(),{select:function(e){return e.pages.length>1&&(e.pages[e.pages.length-2].next=e.pages[e.pages.length-1]),e},getNextPageParam:function(e,t){return t.length},refetchOnReconnect:!1});return{data:n.data,fetchNextPage:n.fetchNextPage}}(t.id,t.type),r=n.data,i=n.fetchNextPage,o=(0,d.useResizeContext)();return r&&("LIBRARY"!==t.type?(0,F.jsx)(R.default,{data:r.pages,renderItem:function(e){var t=e.item;return(0,F.jsx)(_,{data:t.current})},style:{height:0},onEndReached:function(){i()}}):(0,F.jsx)(s.default,{style:{height:0},contentContainerStyle:{flexDirection:"row",justifyContent:"center"},children:(0,F.jsx)(c.default,{style:{backgroundColor:"transparent",flexBasis:"100%",maxWidth:(K("landscape"===o)+5)*("landscape"===o?5:3),flexWrap:"wrap",flexDirection:"row",paddingRight:J("landscape"===o),justifyContent:"landscape"===o?void 0:"center"},children:r.pages.map((function(e,t){return(0,F.jsx)(X,{data:e.current},t)}))})}))};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re={},ie=function(e){return`<div class="scrap mceNonEditable" style="border:1px solid #ddd; padding:10px; display:flex; align-items:center;">\n  ${void 0!==e.imageUrl?`<img src="${e.imageUrl}" alt="preview" style="width:80px; height:80px; margin-right:10px;">`:""}\n  <div style="word-break:break-word;">\n    <strong>${e.title}</strong><br>\n    <a href="${e.url}" target="_blank">${e.url}</a>\n    ${e.description?`<p>${e.description}</p>`:""}\n  </div>\n</div>`},oe=function(){var e=(0,f.default)((function*(e,t){try{new URL(t)}catch(o){return}if(re[t])return re[t];var n="FEED"===e?yield S({query:t}):yield C({query:t});if(n&&null!==n.title){var r=ie(ne(ne({},n),{},{url:t})),i={title:n.title,description:r};return re[t]=i,i}}));return function(t,n){return e.apply(this,arguments)}}();const ae=function(e,t){var n=(0,i.useState)(),r=(0,u.default)(n,2),o=r[0],a=r[1],l=(0,p.useQuery)(["Preview",e,o],(0,f.default)((function*(){return o?yield oe(e,o):void 0}))).data;return(0,i.useEffect)((function(){var e=setTimeout((function(){return a(t)}),320);return function(){return clearTimeout(e)}}),[t]),l};function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se=n(2571),ce=n(4426);function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe=i.memo((function(e){var t=ae("SCRAP",e.url);return(null==t?void 0:t.description)&&(0,F.jsxs)(c.default,{style:{height:155,flexDirection:"row"},children:[(0,F.jsx)(ce.EditorViewer,{content:t.description}),(0,F.jsx)(d.CommonButton,{title:"\u2728",onPress:function(){return e.replacer(t.description)},style:{height:155,paddingTop:65}})]})})),ye=function(e,t){for(var n,r=t,i=0,o=[];null!=(n=new RegExp(e).exec(r));){o.push({index:i,str:r.substring(0,n.index)});var a=n.index+n[0].length;o.push({index:i+n.index,str:r.substring(n.index,a)}),i+=a,r=r.substring(a)}return o.push({index:i,str:r}),o},ge=function(e,t){if(void 0!==t)return function(e){var t=[],n=/https?:\/\/(?:www\\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/gi;return ye(/(<a .*?href="(.*?)".*?>(.*)<\/a>|<img .*?src="(.*?)".*?\/>)/,e).forEach((function(e,r){r%2!=1&&ye(n,e.str).forEach((function(n,r){r%2==1&&t.push({pos:e.index+n.index,url:n.str})}))})),t}(t).map((function(n,r){return(0,F.jsx)(pe,{url:n.url,replacer:function(r){e(t.substring(0,n.pos)+r+t.substring(n.pos+n.url.length))}},r)}))};var he=n(4952),ve=n(9767),je=n(7687),xe=n(205),me=n(5589),be=n(4906);function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Pe=function(e){return e?5:8},Ce=function(e){var t=(0,d.useColorScheme)(),n=i.useState(!1),r=(0,u.default)(n,2),o=r[0],l=r[1],s=(0,d.useResizeContext)(),c=E(o?e.timeline.id:void 0),f=Pe("landscape"===s);return(0,F.jsxs)(d.View,{children:[(0,F.jsx)(he.default,{title:e.timeline.title,expanded:o&&void 0!==c,style:{padding:f},onPress:function(){return(0,a.navigate)("ContentListScreen",{id:e.timeline.id})},left:function(e){return(0,F.jsx)(z.default,we(we({},e),{},{icon:o?"chevron-down":"chevron-right"}))},right:function(){},children:c&&c.map((function(e){return(0,F.jsx)(ve.default,{left:function(e){return(0,F.jsx)(z.default,we(we({},e),{},{icon:"rss"}))},title:e.title,onPress:function(){return(0,a.navigate)("ContentListScreen",{id:e.id})},style:{padding:f}},e.id)}))}),(0,F.jsx)(je.default,{style:{position:"absolute",justifyContent:"center",paddingLeft:8+f,width:40+2*f,height:40+2*f},onPress:function(){return l(!o)},children:(0,F.jsx)((function(e){var n=e.isExpanded;return(0,F.jsx)(be.default,{name:n?"chevron-down":"chevron-right",color:d.Colors[t].text,size:24,direction:B.default.getConstants().isRTL?"rtl":"ltr"})}),{isExpanded:o})})]})};const Se=function(e){var t=E(0,e.type),n=(0,d.useLangContext)().lang,r=(0,d.useResizeContext)(),i=Pe("landscape"===r);return(0,F.jsxs)(xe.default,{children:[(0,F.jsxs)(d.View,{style:{flexDirection:"row"},children:[(0,F.jsx)(me.default,{style:{flex:1},selectable:!1,children:n("LIBRARY"===e.type?"Libraries":"Timelines")}),(0,F.jsx)(je.default,{onPress:function(){return(0,a.navigate)("ContentListScreen",{type:e.type})},children:(0,F.jsx)(z.default,{icon:"plus",style:{margin:i}})})]}),t&&t.map((function(t){return"TIMELINE"==e.type?(0,F.jsx)(Ce,{timeline:t},t.id):(0,F.jsx)(ve.default,{left:function(e){return(0,F.jsx)(z.default,we(we({},e),{},{icon:"library"}))},title:t.title,onPress:function(){return(0,a.navigate)("ContentListScreen",{id:t.id})},style:{padding:i}},t.id)}))]})};var Ee=function(){var e=(0,d.useColorScheme)();return(0,F.jsxs)(s.default,{style:{flex:1,backgroundColor:d.Colors[e].background},children:[(0,F.jsx)(Se,{type:"TIMELINE"}),(0,F.jsx)(Se,{type:"LIBRARY"})]})},De=function(){var e=(0,d.useColorScheme)();return(0,F.jsx)(s.default,{style:{flex:1,backgroundColor:d.Colors[e].background},children:(0,F.jsx)(a.ConfigSections,{})})};var Ie={HomeScreen:{title:"home",component:function(e){e.navigation,e.route;var t=(0,d.useLangContext)().lang,n=(0,d.useColorScheme)(),r=d.Colors[n].text,i=[{title:t("Contents"),component:Ee,icon:(0,F.jsx)(z.default,{icon:"table-of-contents"}),headerRight:function(){return(0,F.jsx)(F.Fragment,{})}},{title:t("Config"),component:De,icon:(0,F.jsx)(z.default,{icon:"dots-horizontal"}),headerRight:function(){return(0,F.jsx)(F.Fragment,{})}}];return(0,F.jsx)(a.HomeSection,{tabViews:i,title:t("home"),children:(0,F.jsxs)(c.default,{style:{flexGrow:1,width:"80%",marginTop:72},children:[(0,F.jsx)(d.Text,{style:{fontSize:32,color:r},children:"feedynote"}),(0,F.jsx)(c.default,{style:{backgroundColor:d.Colors.borderColor,height:1,width:"100%"}}),(0,F.jsx)(c.default,{style:{height:24}}),(0,F.jsx)(a.ConfigSections,{})]})})},path:"home"},EditorScreen:{path:"editor",title:"editor",component:function(e){var t,n,r,o,l,y=e.navigation,g=e.route,h={created:void 0===(null==g||null==(t=g.params)?void 0:t.id),id:parseInt(null==g||null==(n=g.params)?void 0:n.id),parentId:void 0!==(null==g||null==(r=g.params)?void 0:r.parentId)?parseInt(null==g||null==(o=g.params)?void 0:o.parentId):0},v=(0,d.useColorScheme)(),x=(0,d.useLangContext)().lang,m=(0,T.useAuthContext)().auth,b=(l=h.created?void 0:h.id,(0,p.useQuery)(["Content",l],(0,f.default)((function*(){return l?yield j(l):void 0}))).data),O=E(null==b?void 0:b.parentId),w=D(),P=(0,i.useState)(),C=(0,u.default)(P,2),S=C[0],R=C[1],L=(0,i.useState)(),A=(0,u.default)(L,2),B=A[0],k=A[1],N=(0,i.useState)(),z=(0,u.default)(N,2),$=z[0],M=z[1],V=(0,i.useState)(!1),H=(0,u.default)(V,2),Q=H[0],W=H[1],Y={NOTE:x("New Note")},q=function(){W(!0)};(0,i.useLayoutEffect)((function(){if(console.log(null==b?void 0:b.id),h.created){var e="NOTE";W(!1),R(Y[e]),k(""),M(e)}else b&&(W(!1),R(b.input),k(b.description),M(b.type))}),[null==b?void 0:b.id]),(0,i.useLayoutEffect)((function(){h.created?y.setOptions({headerShown:!1}):b&&y.setOptions({title:b.title,headerRight:function(){return(0,F.jsx)(c.default,{style:{flexDirection:"row"},children:"FEEDCONTENT"===b.type?(0,F.jsx)(d.CommonButton,{title:"\ud83c\udf10",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return se.default.openURL(b.input)}}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(d.CommonButton,{title:"\u270f\ufe0f",style:{height:40,paddingTop:8,marginRight:10},onPress:q}),(0,F.jsx)(d.CommonButton,{title:"\ud83d\uddd1\ufe0f",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return w.delete(b.id).then((function(e){return G()}))}})]})})},headerShown:!Q})}),[y,b,Q]);var G=function(){y.canGoBack()?y.goBack():y.navigate("HomeScreen",{tab:1})},U=h.created||Q;return(0,F.jsxs)(d.View,{style:{width:"100%",height:"100%"},children:[U&&void 0!==S&&(0,F.jsx)(I.default,{mode:"outlined",value:S,onChangeText:R,style:{borderRadius:20,margin:1}}),"NOTE"===$&&(0,F.jsx)(ce.Editor,{theme:v,active:U,value:B||"",setValue:U?k:function(){}}),U&&(0,F.jsxs)(F.Fragment,{children:[ge(k,B),(0,F.jsx)(d.CommonButton,{title:x("save"),onPress:function(){var e,t;!m.user||(null==b?void 0:b.input)==S&&(null==b?void 0:b.description)==B||void 0===$?W(!1):(h.created?t=w.create({userId:m.user.id,parentId:h.parentId,type:$,order:((null==O?void 0:O.length)||0)+1,input:S||"",title:S||"",description:B}).then((function(e){(0,a.navigate)("EditorScreen",{id:e})})):void 0!==b&&(t=w.update({id:b.id,updated:fe(fe({},b),{},{type:$,input:S||"",title:S||"",description:B})})),null==(e=t)||e.then((function(){W(!1)})))},style:{height:65,paddingVertical:20}})]}),(0,F.jsx)(s.default,{style:{flex:U?0:1},contentContainerStyle:{flexGrow:1},children:(0,F.jsx)(ce.EditorViewer,{content:"FEEDCONTENT"===(null==b?void 0:b.type)?ie(fe(fe({},b),{},{url:b.input})):B||"",onPress:"FEEDCONTENT"===(null==b?void 0:b.type)?void 0:q})})]})}},ContentListScreen:{path:"contents",title:"contents",component:function(e){var t,n,r,o,f=e.navigation,p=e.route,y={created:void 0===(null==p||null==(t=p.params)?void 0:t.id),id:parseInt(null==p||null==(n=p.params)?void 0:n.id),parentId:null!=p&&null!=(r=p.params)&&r.parentId?parseInt(p.params.parentId):void 0,type:null==p||null==(o=p.params)?void 0:o.type},g=(0,d.useLangContext)().lang,h=(0,T.useAuthContext)().auth,v=E(0),j=E(void 0,"FEED"),x=void 0!==v&&void 0!==j?[].concat((0,l.default)(v),(0,l.default)(j)):void 0,m=D(),b=y.created||null==x?void 0:x.find((function(e){return e.id===y.id})),O=(0,i.useState)(),w=(0,u.default)(O,2),P=w[0],C=w[1],S=(0,i.useState)(),R=(0,u.default)(S,2),L=R[0],A=R[1],B=(0,i.useState)(!1),k=(0,u.default)(B,2),N=k[0],z=k[1],$=ae("FEED",y.created&&"FEED"===y.type?P:void 0),M=function(){f.canGoBack()?f.goBack():f.navigate("HomeScreen",{tab:1})};y.created&&"FEED"===y.type&&void 0===y.parentId&&M();var V={LIBRARY:g("New Library"),TIMELINE:g("New Timelines"),FEED:"https://"},H=function(){z(!0)};(0,i.useLayoutEffect)((function(){y.created?(z(!1),C(V[y.type]),A(y.type)):b&&(z(!1),C(b.input),A(b.type))}),[b]),(0,i.useLayoutEffect)((function(){y.created?f.setOptions({headerShown:!1}):b&&f.setOptions({title:b.title,headerRight:function(){return(0,F.jsxs)(c.default,{style:{flexDirection:"row"},children:["LIBRARY"===b.type&&(0,F.jsx)(d.CommonButton,{title:"\u2295",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return(0,a.navigate)("EditorScreen",{parentId:b.id})}}),"TIMELINE"===b.type&&(0,F.jsx)(d.CommonButton,{title:"\u2295",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return(0,a.navigate)("ContentListScreen",{type:"FEED",parentId:b.id})}}),"LIBRARY"!==b.type&&(0,F.jsx)(d.CommonButton,{title:"\ud83d\udd04",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return m.pullFeed("TIMELINE"===b.type?[void 0,"FEEDCONTENT"]:[b.id,void 0])}}),(0,F.jsx)(d.CommonButton,{title:"\u270f\ufe0f",style:{height:40,paddingTop:8,marginRight:10},onPress:H}),(0,F.jsx)(d.CommonButton,{title:"\ud83d\uddd1\ufe0f",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return m.delete(b.id).then((function(e){return M()}))}})]})},headerShown:!N})}),[f,b,N]);var Q=y.created||N;return(0,F.jsx)(d.View,{style:{width:"100%",height:"100%",backgroundColor:"transparent"},children:Q?(0,F.jsxs)(F.Fragment,{children:[void 0!==P&&(0,F.jsx)(I.default,{mode:"outlined",value:P,onChangeText:C,style:{borderRadius:20,margin:1}}),(null==$?void 0:$.description)&&(0,F.jsx)(d.Text,{children:$.description}),("FEED"!==L||void 0!==$)&&(0,F.jsx)(d.CommonButton,{title:g("save"),onPress:function(){var e;if(h.user&&(null==b?void 0:b.input)!=P&&void 0!==L){var t,n=null!=$&&$.title?$.title:P||"";if(y.created){var r=null==x?void 0:x.filter((function(e){return e.type==y.type}));t=m.create({userId:h.user.id,parentId:"FEED"===y.type?y.parentId:0,type:L,order:((null==r?void 0:r.length)||0)+1,input:P||"",title:n}).then((function(e){(0,a.navigate)("ContentListScreen",{id:e})}))}else void 0!==b&&(t=m.update({id:b.id,updated:le(le({},b),{},{type:L,input:P||"",title:n})}));null==(e=t)||e.then((function(){z(!1)}))}else z(!1)},style:{height:65,paddingVertical:20}}),(0,F.jsx)(d.CommonButton,{title:g("cancel"),onPress:y.created?M:function(){return z(!1)},style:{height:65,paddingVertical:20}})]}):(0,F.jsx)(s.default,{style:{flex:1},contentContainerStyle:{flexGrow:1},children:b&&(0,F.jsx)(ee,{parentContent:b})})})}}};function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Le=n(8610),Ae=n(7650),Be=n(8565);function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ze={main:Ie,login:a.login,prefixes:[o.makeUrl("/")],rootPath:"feedynote",documentTitle:{formatter:function(){return"feedynote"}},rootScreen:{main:"HomeScreen",login:"LoginScreen"},headerLeftIcon:(0,F.jsx)(z.default,{icon:"backburger",style:{left:-18,top:-14}}),headerRight:(0,F.jsx)(F.Fragment,{}),modals:[],drawer:(0,F.jsx)((function(){var e=(0,d.useLangContext)().lang;return(0,F.jsxs)(s.default,{style:{flex:1},children:[(0,F.jsx)(ve.default,{left:function(e){return(0,F.jsx)(z.default,Re(Re({},e),{},{icon:"home"}))},title:e("Home"),onPress:function(){return(0,a.navigate)("HomeScreen")}}),(0,F.jsx)(Se,{type:"TIMELINE"}),(0,F.jsx)(Se,{type:"LIBRARY"})]})}),{})};const Fe=function(){var e=(0,d.useColorScheme)(),t="dark"==e?Le.MD2DarkTheme:Ae.MD2LightTheme,n=Ne(Ne({},t),{},{colors:Ne(Ne({},t.colors),{},{primary:d.Colors[e].text})});return(0,F.jsx)(Be.default,{theme:n,children:(0,F.jsx)(a.Navigation,{config:ze})})}},6973:()=>{}}]);
//# sourceMappingURL=736.8607b1f1.chunk.js.map