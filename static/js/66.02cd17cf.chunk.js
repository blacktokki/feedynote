"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[66],{8066:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ke});var r=n(4586),o=n(6330),i=n(9399),a=n(9347),u=n(689),l=n(9367),c=n(7904),d=n(6650),s=n(8111),f=n(8389),p=n(2571),g=n(3717),y=n(575),h=/https?:\/\/(?:www\\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)/gi,v=function(e){return function(e,t){for(var n,r=t,o=0,i=[];null!=(n=new RegExp(e).exec(r));){i.push({index:o,str:r.substring(0,n.index)});var a=n.index+n[0].length;i.push({index:o+n.index,str:r.substring(n.index,a)}),o+=a,r=r.substring(a)}return i.push({index:o,str:r}),i}(h,e).filter((function(e,t){return t%2==1})).map((function(e){return e.str}))};const x=function(e){var t=e.link,n=e.isMobile;return(0,y.jsx)(d.View,{style:{borderRadius:6,marginVertical:10,marginHorizontal:8},children:(0,y.jsxs)(g.default,{onPress:function(){return p.default.openURL(t.url)},onLongPress:function(){},style:{width:"100%",flexDirection:"row"},children:[t.imageUrl?(0,y.jsx)(f.default,{source:{uri:t.imageUrl},resizeMode:"cover",style:{borderRadius:6,width:"100%",maxWidth:n?120:160,maxHeight:n?120:160,borderWidth:1}}):void 0,(0,y.jsxs)(d.View,{style:{flex:1,marginHorizontal:20,overflow:"hidden",minHeight:n?90:120},children:[(0,y.jsx)(d.Text,{style:{fontSize:18},numberOfLines:1,children:t.title}),(0,y.jsx)(d.Text,{style:{fontSize:14},numberOfLines:7,ellipsizeMode:"head",children:t.description}),(0,y.jsx)(d.Text,{style:{fontSize:12},numberOfLines:1,children:t.url})]})]})})};var m=n(8594),b=(0,m.axiosCreate)("notebook"),j=function(){var e=(0,o.default)((function*(e){return(yield b.get(`/api/v1/content/${e}`)).data}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=(0,o.default)((function*(e,t){var n=void 0!==e?`&parentId=${e}`:"",r=void 0!==t?`&type=${t}`:"";return(yield b.get(`/api/v1/content?self=true&size=256${n}${r}`)).data.value}));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=(0,o.default)((function*(e){return(yield b.post("/api/v1/content",e)).data.id}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=(0,o.default)((function*(e){var t=e.id,n=e.updated;yield b.patch("/api/v1/content",{ids:[t],updated:n})}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,o.default)((function*(e){yield b.delete(`/api/v1/content/${e}`)}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,o.default)((function*(e){yield b.post("/api/v1/content/bulk",e)}));return function(t){return e.apply(this,arguments)}}(),E=(function(){var e=(0,o.default)((function*(e){return(yield b.post("/api/v1/cell/",e)).data}))}(),function(){var e=(0,o.default)((function*(e){var t=[];for(var n of v(e.query))t.push((yield b.get(`/api/v1/preview/autocomplete?query=${n}`)).data);return t}));return function(t){return e.apply(this,arguments)}}());function I(e,t){return(0,s.useQuery)(["ContentList",e,t],(0,o.default)((function*(){return void 0!==e||void 0!==t?yield O(e,t):void 0}))).data}function k(){var e=(0,s.useQueryClient)(),t=(0,s.useMutation)(C,{onSuccess:function(){var t=(0,o.default)((function*(){yield e.invalidateQueries("ContentList")}));return function(){return t.apply(this,arguments)}}()}),n=(0,s.useMutation)(S,{onSuccess:function(){var t=(0,o.default)((function*(){yield Promise.all([e.invalidateQueries("ContentList"),e.invalidateQueries("Content")])}));return function(){return t.apply(this,arguments)}}()}),r=(0,s.useMutation)(w,{onSuccess:function(){e.invalidateQueries("ContentList")}}),a=(0,s.useMutation)(P,{onSuccess:function(){e.invalidateQueries("ContentList")}});return(0,i.useEffect)((function(){}),[]),{create:t.mutateAsync,update:n.mutateAsync,delete:r.mutateAsync,updateCells:a.mutateAsync}}var T=n(7989),D=n(3705),N=n(3775),R=(new Date).getTimezoneOffset(),z=function(e){var t=new Date(e);t.setMinutes(t.getMinutes()-R);var n=t.toISOString().slice(0,16),r=n.slice(0,10);return r==(new Date).toISOString().slice(0,10)?n.slice(11):r},B=function(e){return e?20:4},L=function(e){return e?230:190},A=i.memo((function(e){var t,n=e.data,r=(0,d.useResizeContext)(),o=L("landscape"===r),i="landscape"===r?2:0;return null==(t=[].concat((0,D.default)(n.sort((function(e,t){return e.updated<t.updated?1:-1}))),[null,null]))?void 0:t.map((function(e,t){if(null===e)return(0,y.jsx)(c.default,{style:{flexBasis:"landscape"===r?"33%":"50%",maxWidth:o}},t);var n=e.description,u=function(){return(0,a.navigate)("NoteScreen",{id:e.id})};return(0,y.jsxs)(g.default,{style:{flexBasis:"landscape"===r?"33%":"50%",padding:B("landscape"===r),paddingRight:0,minWidth:o,maxWidth:o},onPress:u,children:[(0,y.jsx)(N.default,{onPress:u,style:{aspectRatio:1/Math.sqrt(2),borderRadius:6,marginVertical:10,marginHorizontal:8,overflow:"hidden"},children:(0,y.jsx)(N.default.Content,{children:(0,y.jsx)(d.Text,{style:{fontSize:12+i,opacity:.4},children:n})})}),(0,y.jsxs)(c.default,{style:{flexDirection:"row",marginTop:10,justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,y.jsx)(d.Text,{style:{fontSize:14+i},children:e.title}),(0,y.jsx)(d.Text,{style:{fontSize:12+i,opacity:.4,textAlign:"right"},children:z(e.updated)})]})]},t)}))}));const H=function(e){var t=I(e.parentContent.id),n=(0,d.useResizeContext)();return t&&(0,y.jsx)(l.default,{style:{height:0},contentContainerStyle:{flexDirection:"row",justifyContent:"center"},children:(0,y.jsx)(c.default,{style:{backgroundColor:"transparent",flexBasis:"100%",maxWidth:(L("landscape"===n)+5)*("landscape"===n?5:3),flexWrap:"wrap",flexDirection:"row",paddingRight:B("landscape"===n),justifyContent:"landscape"===n?void 0:"center"},children:(0,y.jsx)(A,{data:t})})})};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W,F,$,U,G,J=n(3780),_=n(863),K=n(5346),Q=n(2330),X=n(2990);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}if("android"===X.default.OS||"ios"===X.default.OS){var Y={};W=Y.default,F=Y.ScaleDecorator}else $=n(2372),U=n(7660),G=n(489);var ee=function(e){var t=e.item,n=e.code,r=e.renderCellContent,o=U.useSortable({id:n}),i=o.attributes,a=o.listeners,u=o.setNodeRef,l=o.transform,c=o.transition,d=o.isDragging,s={transform:G.CSS.Transform.toString(l?{x:l.x,y:l.y,scaleX:1,scaleY:1}:null),transition:c,opacity:d?.5:1,position:"relative",flex:1,zIndex:d?1:0};return(0,y.jsxs)("div",{ref:u,style:s,children:[(0,y.jsx)("div",Z(Z(Z({},i),a),{},{style:{cursor:"move",width:40,position:"absolute",height:"100%",zIndex:10,left:0,top:0}})),r({item:t})]})},te=function(e){var t=e.items,n=e.onSortEnd,r=e.renderCellContent,o=e.getId,a=(0,i.useState)(t.map((function(e){return""+o(e)}))),l=(0,u.default)(a,2),d=l[0],s=l[1],f=(0,i.useState)(),p=(0,u.default)(f,2),g=p[0],h=p[1];(0,i.useEffect)((function(){g?(s(g),h(void 0)):(t.length!==d.length||t.filter((function(e,t){return!d[t].endsWith(o(e))})).length>0)&&s((function(e){return t.map((function(t,n){return n<e.length&&e[n].endsWith(o(t))?e[n]:Date.now().toString()+"@"+o(t)})).slice(0,t.length)}))}),[t]);var v=$.useSensors($.useSensor($.PointerSensor,{activationConstraint:{distance:8}}),$.useSensor($.KeyboardSensor,{coordinateGetter:U.sortableKeyboardCoordinates}));return(0,y.jsx)($.DndContext,{sensors:v,collisionDetection:$.closestCenter,onDragEnd:function(e){var r=e.active,o=e.over;if(o&&r.id!==o.id){var i=d.findIndex((function(e){return e===r.id})),a=d.findIndex((function(e){return e===o.id})),u=U.arrayMove(Array.from(Array(t.length).keys()),i,a);h(U.arrayMove(d,i,a).map((function(e,t){return t>u[t]?"@"+e:e}))),n(U.arrayMove(t,i,a))}},children:(0,y.jsx)(U.SortableContext,{items:g||d,strategy:U.verticalListSortingStrategy,children:(0,y.jsx)(c.default,{style:ne.cellsList,children:t.map((function(e,t){var n=(g||d)[t];return(0,y.jsx)(ee,{code:n,item:e,renderCellContent:r},n||""+o(e))}))})})})},ne=_.default.create({cellsList:{paddingVertical:10,paddingHorizontal:5}});const re=function(e){var t=e.data,n=e.setData,r=e.getId,o=e.renderItem;return"android"===X.default.OS||"ios"===X.default.OS?(0,y.jsx)(W,{data:t,onDragEnd:function(e){var t=e.data;return n(t)},keyExtractor:function(e){return e.id.toString()},renderItem:function(e){var t=e.item,n=e.drag;e.isActive;return(0,y.jsx)(F,{children:(0,y.jsxs)(c.default,{style:{flexDirection:"row"},children:[(0,y.jsx)(g.default,{onLongPress:n,style:{width:40,justifyContent:"center",alignItems:"center"},children:(0,y.jsx)(Q.default,{name:"drag-handle",size:20,color:"#888"})}),(0,y.jsx)(c.default,{style:{flex:1},children:o(t)})]})})},contentContainerStyle:ne.cellsList}):(0,y.jsx)(te,{items:t,getId:r,onSortEnd:n,renderCellContent:o})};var oe=n(8397),ie=n(4426),ae=n(3390);const ue=function(e){var t=e.value,n=e.onChangeText,r=e.style,o=e.placeholder,a=e.autoCapitalize,l=void 0===a?"none":a,c=e.autoCorrect,d=void 0!==c&&c,s=e.minHeight,f=void 0===s?40:s,p=e.maxHeight,g=void 0===p?200:p,h=(0,i.useState)(f),v=(0,u.default)(h,2),x=v[0],m=v[1];return(0,y.jsx)(ae.default,{multiline:!0,value:t,onChangeText:n,onContentSizeChange:function(e){var t=e.nativeEvent.contentSize.height,n=Math.max(f,Math.min(t,g));m(n)},style:[r,{height:x,textAlignVertical:"top"}],scrollEnabled:x>=g,placeholder:o,autoCapitalize:l,autoCorrect:d})};var le=function(e){return e.IDLE="idle",e.RUNNING="running",e.COMPLETED="completed",e.ERROR="error",e}({}),ce={EDITOR:{executable:!1,init:function(e){return""},iconName:"edit",iconSize:18,light:"goldenrod",dark:"darkgoldenrod"},LINK:{executable:!0,init:function(e){return"https://"},iconName:"link",iconSize:20,light:"#4CAF50",dark:"#2E7D32"},MARKDOWN:{executable:!1,init:function(e){return"# Welcome to Jupyter Notebook in React Native\n\nThis is a basic implementation of Jupyter Notebook using React Native and TypeScript."},iconName:"text-fields",iconSize:20,light:"#2196F3",dark:"#1565C0"}},de=function(e){var t=function(t){return _.default.create(e(t))},n=t("light"),r=t("dark");return function(e){return"dark"===e?r:n}};function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const pe=i.memo((function(e){var t=e.theme,n=e.item,r=e.isSelected,o=e.heightRef,i=e.setCells,a=e.executeCell,u=e.setSelectedCellId,l=ye(t),d=he(t),s=function(e,t){i((function(n){return n.map((function(n){return n.id===e?fe(fe({},n),{},{content:t}):n}))}))};return(0,y.jsxs)(c.default,{style:[l.cellContainer,"EDITOR"===n.type&&{minHeight:o.current[n.id]},r&&l.selectedCell],onLayout:function(e){o.current[n.id]=e.nativeEvent.layout.height},children:[(0,y.jsxs)(c.default,{style:l.cellHandle,children:[ce[n.type].executable&&(0,y.jsx)(c.default,{style:l.executionCount,children:(0,y.jsx)(K.default,{style:l.executionCountText,children:n.executionCount?`[${n.executionCount}]`:"[ ]"})}),(0,y.jsx)(Q.default,{name:"drag-handle",size:20,color:"#888"})]}),(0,y.jsxs)(c.default,{style:l.cellContent,children:[(0,y.jsxs)(c.default,{style:l.cellToolbar,children:[(0,y.jsx)(g.default,{style:l.toolbarButton,onPress:function(){return u(n.id)},children:(0,y.jsx)(Q.default,{name:ce[n.type].iconName,size:ce[n.type].iconSize,color:"#2196F3"})}),(0,y.jsx)(g.default,{style:l.toolbarButton,onPress:function(){return a(n.id)},disabled:!ce[n.type].executable,children:(0,y.jsx)(Q.default,{name:"play-arrow",size:20,color:ce[n.type].executable?"#4CAF50":"#ccc"})}),(0,y.jsx)(g.default,{style:l.toolbarButton,onPress:function(){return e=n.id,void i((function(t){return t.filter((function(t){return t.id!==e}))}));var e},children:(0,y.jsx)(Q.default,{name:"delete",size:20,color:"#F44336"})})]}),(0,y.jsxs)(g.default,{activeOpacity:1,onPress:function(){return u(n.id)},style:l.cellInputContainer,children:[(0,y.jsxs)(c.default,{style:{display:"EDITOR"===n.type?"flex":"none"},children:[(0,y.jsx)(ie.EditorViewer,{theme:t,value:n.content,autoResize:!0,active:!r,onPress:function(){return u(n.id)}}),(0,y.jsx)(ie.Editor,{theme:t,value:n.content,autoResize:!0,active:r,setValue:"EDITOR"===n.type?function(e){return s(n.id,e)}:function(){}})]}),"LINK"===n.type&&(0,y.jsx)(ue,{style:l.codeInput,value:n.content,onChangeText:function(e){return s(n.id,e)},autoCapitalize:"none",autoCorrect:!1}),"MARKDOWN"===n.type&&(r?(0,y.jsx)(ue,{style:l.markdownInput,value:n.content,onChangeText:function(e){return s(n.id,e)},autoCapitalize:"none",autoCorrect:!1}):(0,y.jsx)(oe.default,{style:d,children:n.content}))]}),n.status===le.COMPLETED?(0,y.jsx)(y.Fragment,{children:ce[n.type].executable&&JSON.parse(n.output).map((function(e,t){return(0,y.jsx)(x,{link:e,isMobile:!1},t)}))}):n.status===le.ERROR&&(0,y.jsx)(c.default,{style:[l.outputContainer,l.errorOutput],children:(0,y.jsx)(K.default,{style:l.outputText,children:n.output})})]})]})}));var ge={light:{background:"#f8f8f8",text:"#111",codeText:"#333",codeBackground:"#f8f8f8",outerBackground:"#fff",border:"#e0e0e0",selectedBorder:"#3F51B5",error:"rgba(244, 67, 54, 0.1)",markdownHead:"#2C3E50",markdownCode:"#f5f5f5"},dark:{background:"#1E1E1E",text:"#E0E0E0",codeText:"#B0B0B0",codeBackground:"#2A2A2A",outerBackground:"#121212",border:"3A3A3A",selectedBorder:"#4A90E2",error:"rgba(244, 67, 54, 0.2)",markdownHead:"#A0B9D0",markdownCode:"#1E1E1E"}},ye=de((function(e){return{header:fe({backgroundColor:ge[e].background,flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:15},"web"!==X.default.OS&&{elevation:4}),title:{color:ge[e].text,fontSize:20,fontWeight:"bold"},headerButtonText:{color:ge[e].codeText,marginLeft:5,fontWeight:"500"},cellContainer:{flexDirection:"row",borderTopLeftRadius:6,borderBottomLeftRadius:6,backgroundColor:ge[e].background,overflow:"hidden",borderColor:ge[e].border,padding:1},selectedCell:{borderColor:ge[e].selectedBorder,borderWidth:2,padding:0},draggingCell:{opacity:.7,backgroundColor:ge[e].background},cellHandle:{width:40,backgroundColor:ge[e].codeBackground,alignItems:"center",paddingTop:15},cellContent:{flex:1,borderWidth:1,margin:10,marginVertical:5,borderColor:ge[e].border},cellToolbar:{flexDirection:"row",padding:5,paddingVertical:0,borderBottomColor:ge[e].border},codeInput:{fontFamily:"monospace",minHeight:40,color:ge[e].text,backgroundColor:ge[e].background},markdownInput:{minHeight:40,color:ge[e].text,backgroundColor:ge[e].background},outputContainer:{backgroundColor:ge[e].codeBackground,padding:10,borderTopWidth:1,borderTopColor:ge[e].border},errorOutput:{backgroundColor:ge[e].error},outputText:{fontFamily:"monospace",color:ge[e].codeText},headerButtons:{flexDirection:"row",alignItems:"center",paddingHorizontal:12,paddingVertical:6,borderRadius:4},executionCount:{alignItems:"center",marginBottom:10},toolbarButton:{padding:5,marginRight:10},cellInputContainer:{padding:0,paddingHorizontal:5},executionCountText:{color:"#888",fontSize:12}}})),he=de((function(e){return{body:{fontSize:14,color:ge[e].codeText},heading1:{fontSize:24,marginTop:10,marginBottom:10,fontWeight:"bold",color:ge[e].markdownHead},heading2:{fontSize:20,marginTop:10,marginBottom:10,fontWeight:"bold",color:ge[e].markdownHead},code_inline:{backgroundColor:ge[e].markdownCode,padding:2,borderRadius:3,fontFamily:"monospace"},code_block:{backgroundColor:ge[e].markdownCode,padding:10,borderRadius:3,fontFamily:"monospace"}}}));function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=_.default.create({container:{flex:1},addCellContainer:{flexDirection:"row",justifyContent:"center",padding:15,borderTopWidth:1,borderTopColor:"#888",zIndex:-1},addCellButton:{flexDirection:"row",alignItems:"center",paddingHorizontal:16,paddingVertical:8,borderRadius:4,marginHorizontal:5},addCellButtonText:{color:"#fff",marginLeft:5,fontWeight:"500"}});const be=function(e){var t=(0,d.useColorScheme)(),n=(0,d.useLangContext)().lang,r=e.cellsHistory,a=null==r?void 0:r.present.map((function(e){return r.cells[e]})),l=function(t){if(JSON.stringify(a)!==JSON.stringify(t)){var n=(null==r?void 0:r.cells)||{};t.forEach((function(e){n[e.id]=e})),e.setHistory({past:r?[].concat((0,D.default)(r.past),[r.present]):[],present:t.map((function(e){return e.id})),future:[],cells:n})}},s=function(e){return l(e(a))},f=(0,i.useState)(null),p=(0,u.default)(f,2),h=p[0],v=p[1],x=(0,i.useRef)({}),m=(0,i.useMemo)((function(){var e=a.map((function(e){return e.executionCount})).filter((function(e){return null!==e}));return e.length>0?e.sort((function(e,t){return t-e}))[0]+1:1}),[a]);(0,i.useEffect)((function(){e.cellRef.current={executeAllCells:function(){var e=(0,o.default)((function*(){for(var e of a)ce[e.type].executable&&(yield b(e.id))}));return function(){return e.apply(this,arguments)}}()}}),[a]);var b=function(){var e=(0,o.default)((function*(e){s((function(t){return t.map((function(t){return t.id===e?xe(xe({},t),{},{status:le.RUNNING}):t}))}));var t,n,r=a.find((function(t){return t.id===e}));if(r&&!1!==ce[r.type].executable)try{var o=yield(t=r.type,n=r.content,new Promise((function(e,r){try{"LINK"===t?e(E({query:n}).then((function(e){return JSON.stringify(e)}))):"MARKDOWN"===t?console.log("TEMP"):e("")}catch(o){r(`Error: ${o}`)}})));s((function(t){return t.map((function(t){return t.id===e?xe(xe({},t),{},{output:o,executionCount:m,status:le.COMPLETED}):t}))}))}catch(i){s((function(t){return t.map((function(t){return t.id===e?xe(xe({},t),{},{output:String(i),executionCount:m,status:le.ERROR}):t}))}))}}));return function(t){return e.apply(this,arguments)}}(),j=(0,i.useCallback)((function(e){var n=e.item;return(0,y.jsx)(pe,{theme:t,item:n,isSelected:h===n.id,heightRef:x,setCells:s,executeCell:b,setSelectedCellId:v})}),[h,a]);return(0,y.jsxs)(J.default,{style:me.container,children:[(0,y.jsx)(re,{data:a,setData:l,getId:function(e){return e.id},renderItem:j}),(0,y.jsxs)(c.default,{style:me.addCellContainer,children:[Object.entries(ce).map((function(e,r){var o=(0,u.default)(e,2),i=o[0],l=o[1],c={backgroundColor:l[t]};return(0,y.jsxs)(g.default,{style:[me.addCellButton,c],onPress:function(){return function(e){var t={id:Date.now().toString(),type:e,content:ce[e].init(a),output:"",executionCount:null,status:le.IDLE};s((function(e){return[].concat((0,D.default)(e),[t])}))}(i)},children:[(0,y.jsx)(Q.default,{name:l.iconName,size:l.iconSize,color:"#fff"}),(0,y.jsx)(K.default,{style:me.addCellButtonText,children:n(i)})]},r)})),(0,y.jsxs)(g.default,{style:[me.addCellButton,{backgroundColor:"gray"}],onPress:function(){return function(){if(r&&r.past.length>0){var t=r.past[r.past.length-1],n=r.past.slice(0,r.past.length-1);e.setHistory({past:n,present:t,future:[r.present].concat((0,D.default)(r.future)),cells:r.cells})}}()},children:[(0,y.jsx)(Q.default,{name:"undo",size:18,color:"#fff"}),(0,y.jsx)(K.default,{style:me.addCellButtonText,children:n("undo")})]},"undo"),(0,y.jsxs)(g.default,{style:[me.addCellButton,{backgroundColor:"gray"}],onPress:function(){return function(){if(r&&r.future.length>0){var t=r.future[0],n=r.future.slice(1);e.setHistory({past:[].concat((0,D.default)(r.past),[r.present]),present:t,future:n,cells:r.cells})}}()},children:[(0,y.jsx)(Q.default,{name:"redo",size:18,color:"#fff"}),(0,y.jsx)(K.default,{style:me.addCellButtonText,children:n("redo")})]},"redo")]})]})};var je=n(5209);function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Ce=(0,i.createContext)({opened:{},setOpened:function(){}}),Se=function(e){var t=(0,i.useState)(!1),n=(0,u.default)(t,2),a=n[0],l=n[1],c=(0,i.useState)({}),d=(0,u.default)(c,2),s=d[0],f=d[1],p=(0,m.useAuthContext)().auth,g=function(){var e=(0,o.default)((function*(){var e=yield je.default.getItem("opened");return e?JSON.parse(e):{}}));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){g().then((function(e){if(p.user){var t=e[`${p.user.id}`]||[];f(Object.fromEntries(t.map((function(e){return[`${e}`,{created:!1}]})))),l(!0)}}))}),[p]);var h=(0,i.useCallback)((function(e,t){var n,o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s);e(o),t?f(o):null!=(n=p.user)&&n.id&&g().then((function(e){p.user&&(e[`${p.user.id}`]=Object.keys(o).filter((function(e){return!o[e].created})).map((function(e){return parseInt(e,10)})),je.default.setItem("opened",JSON.stringify(e)).then((function(){f(o)})))}))}),[s]);return a?(0,y.jsx)(Ce.Provider,{value:{opened:s,setOpened:h},children:e.children}):(0,y.jsx)(y.Fragment,{})},we=function(){var e=(0,i.useContext)(Ce),t=e.opened,n=e.setOpened;return{openedIds:Object.entries(t).map((function(e){var t=(0,u.default)(e,2),n=t[0];return t[1].created?{created:!0,parentId:parseInt(n,10)}:{created:!1,id:parseInt(n,10)}})),addOpenedIds:function(e,t){n((function(n){n[`${e}`]={created:t}}),t)},deleteOpenedIds:function(e,t){n((function(t){delete t[`${e}`]}),t)}}};function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ie=n(205),ke=n(5589),Te=n(7687),De=n(5073),Ne=n(6579);function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Be=function(e){var t=(0,d.useLangContext)().lang,n=I(void 0,"NOTEV2"),r=I(void 0,"PAGE"===e.type?"PAGE":void 0),o=we().openedIds,i="NOTEV2"===e.type?n:o.map((function(e){var o,i;return e.created?{parentId:e.parentId,title:t("New Page")+`(${null==n||null==(o=n.find((function(t){return t.id===e.parentId})))?void 0:o.title})`}:{id:e.id,title:null==r||null==(i=r.find((function(t){return t.id===e.id})))?void 0:i.title}})),u="landscape"===(0,d.useResizeContext)()?5:8;return(0,y.jsxs)(Ie.default,{children:[(0,y.jsxs)(d.View,{style:{flexDirection:"row"},children:[(0,y.jsx)(ke.default,{style:{flex:1},selectable:!1,children:"NOTEV2"===e.type?t("Notes"):t("Open Editors")}),"NOTEV2"===e.type&&(0,y.jsx)(Te.default,{style:{position:"absolute",right:0},onPress:function(){return(0,a.navigate)("ContentListScreen",{type:"NOTEV2"})},children:(0,y.jsx)(De.default,{icon:"plus",style:{margin:u}})})]}),i&&i.map((function(t){return(0,y.jsx)(Ne.default,{left:function(t){return(0,y.jsx)(De.default,ze(ze({},t),{},{icon:"NOTEV2"===e.type?"notebook":"file-document"}))},title:t.title,onPress:function(){return(0,a.navigate)("NOTEV2"===e.type?"ContentListScreen":"NoteScreen",void 0!==t.id?{id:t.id}:{parentId:t.parentId})},style:{padding:u}},t.id||t.parentId)}))]})};var Le=function(){var e=(0,d.useColorScheme)();return(0,y.jsxs)(l.default,{style:{flex:1,backgroundColor:d.Colors[e].background},children:[(0,y.jsx)(Be,{type:"NOTEV2"}),(0,y.jsx)(Be,{type:"PAGE"})]})},Ae=function(){var e=(0,d.useColorScheme)();return(0,y.jsx)(l.default,{style:{flex:1,backgroundColor:d.Colors[e].background},children:(0,y.jsx)(a.ConfigSections,{})})};var He={HomeScreen:{title:"home",component:function(e){e.navigation,e.route;var t=(0,d.useLangContext)().lang,n=(0,d.useColorScheme)(),r=d.Colors[n].text,o=[{title:t("Contents"),component:Le,icon:(0,y.jsx)(De.default,{icon:"table-of-contents"}),headerRight:function(){return(0,y.jsx)(y.Fragment,{})}},{title:t("Config"),component:Ae,icon:(0,y.jsx)(De.default,{icon:"dots-horizontal"}),headerRight:function(){return(0,y.jsx)(y.Fragment,{})}}];return(0,y.jsx)(a.HomeSection,{tabViews:o,title:t("home"),children:(0,y.jsxs)(c.default,{style:{flexGrow:1,width:"80%",marginTop:72},children:[(0,y.jsx)(d.Text,{style:{fontSize:32,color:r},children:"feedynote"}),(0,y.jsx)(c.default,{style:{backgroundColor:d.Colors.borderColor,height:1,width:"100%"}}),(0,y.jsx)(c.default,{style:{height:24}}),(0,y.jsx)(a.ConfigSections,{})]})})},path:"home"},NoteScreen:{path:"notes",title:"notes",component:function(e){var t,n,r,f,p,g=e.navigation,h=e.route,v={created:void 0===(null==h||null==(t=h.params)?void 0:t.id),id:parseInt(null==h||null==(n=h.params)?void 0:n.id),parentId:void 0!==(null==h||null==(r=h.params)?void 0:r.parentId)?parseInt(null==h||null==(f=h.params)?void 0:f.parentId):void 0},x=(0,i.useRef)(),b=(0,d.useLangContext)().lang,O=(0,m.useAuthContext)().auth,C=we(),S=C.openedIds,w=C.addOpenedIds,P=C.deleteOpenedIds,E=(p=v.created?void 0:v.id,(0,s.useQuery)(["Content",p],(0,o.default)((function*(){return p?yield j(p):void 0}))).data),N=I(v.created?void 0:v.id),R=(0,i.useMemo)((function(){var e;return null==(e=v.created?[]:N)?void 0:e.map((function(e){return{id:`${e.id}`,type:e.type,content:e.title,output:e.description||"",executionCount:e.option.EXECUTION_COUNT?parseInt(e.option.EXECUTION_COUNT,10):null,status:e.option.EXECUTION_STATUS||"idle"}}))}),[N]),z=(0,i.useState)({}),B=(0,u.default)(z,2),L=B[0],A=B[1],H=v.created?v.parentId:v.id,V=L[H],M=function(e){var t=Ee({},L);e?t[H]=e:delete t[H],A(t)},W=null==V?void 0:V.present.map((function(e){return V.cells[e]})),F=k(),$=(0,i.useState)(),U=(0,u.default)($,2),G=U[0],J=U[1],_=(0,i.useState)(!1),K=(0,u.default)(_,2),Q=K[0],X=K[1],q=function(e,t){var n=(0,i.useMemo)((function(){return JSON.stringify(null==e?void 0:e.map((function(e){return Ee(Ee({},e),{},{id:void 0})})))}),[e]);return(0,i.useMemo)((function(){return void 0===t||n===JSON.stringify(null==t?void 0:t.map((function(e){return Ee(Ee({},e),{},{id:void 0})})))}),[n,t])}(R,W),Z=function(){if(O.user){var e,t=W?W.map((function(e,t){var n=(0,ie.toRaw)(e.content).replaceAll(/\r\n/g,"");return n.length>32&&(n=n.substring(0,30)+"..."),n})).join("\r\n"):"";return v.created?e=F.create({userId:O.user.id,parentId:v.parentId,type:"PAGE",order:0,title:G||"",description:t,option:{}}).then((function(e){return(0,a.navigate)("NoteScreen",{id:e}),e})):void 0!==E&&(e=F.update({id:E.id,updated:Ee(Ee({},E),{},{title:G||E.title,description:t})}).then((function(){return v.id}))),e}},Y=function(){var e=Z();null==e||e.then((function(e){var t,n=null==(t=O.user)?void 0:t.id,r=n&&W?W.map((function(t,r){return{userId:n,parentId:e,type:t.type,order:r,description:t.output,title:t.content,option:{EXECUTION_COUNT:null!==t.executionCount?`${t.executionCount}`:void 0,EXECUTION_STATUS:t.status}}})):[];return F.updateCells({created:r,deleted:{parentId:e}})}))};(0,i.useLayoutEffect)((function(){R&&(v.created?(X(!1),J(b("New Page")),w(v.parentId,!0),void 0===V&&M({past:[],present:[],future:[],cells:{}})):E&&(X(!1),J(E.title),w(E.id,!1),void 0===V&&M({past:[],present:R.map((function(e){return e.id})),future:[],cells:Object.fromEntries(R.map((function(e){return[e.id,e]})))})))}),[R,E]),(0,i.useLayoutEffect)((function(){(v.created||E)&&g.setOptions({title:q?G:`${G}*`,headerRight:function(){return(0,y.jsxs)(c.default,{style:{flexDirection:"row"},children:[!q&&(0,y.jsx)(d.CommonButton,{title:"\ud83d\udcbe",onPress:Y,style:{paddingTop:8,marginRight:10}}),(0,y.jsx)(d.CommonButton,{title:"\u270f\ufe0f",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return X(!0)}}),(0,y.jsx)(d.CommonButton,{title:"\u274c",onPress:ee,style:{paddingTop:8,marginRight:10}})]})},headerShown:!Q})}),[g,E,N,G,Q,q]);var ee=function(){P(H,v.created),M(void 0),function(){if(g.canGoBack())g.goBack();else{var e=void 0;if(S.length>0){var t=(0,D.default)(S.values()),n=t.findIndex((function(e){return v.created?e.parentId===v.parentId:e.id===(null==E?void 0:E.id)}));e=t[n>=0?n===t.length-1?n-1:n+1:t.length-1]}void 0!==e?g.navigate("NoteScreen",e.created?{parentId:e.parentId}:{id:e.id}):g.navigate("HomeScreen",{tab:1})}}()};return(0,y.jsx)(d.View,{style:{width:"100%",height:"100%"},children:(0,y.jsx)(l.default,{style:{flex:1},contentContainerStyle:{flexGrow:1},children:Q?(0,y.jsxs)(y.Fragment,{children:[void 0!==G&&(0,y.jsx)(T.default,{mode:"outlined",value:G,onChangeText:J,style:{borderRadius:20,margin:1}}),(0,y.jsx)(d.CommonButton,{title:b("save"),onPress:Z,style:{height:65,paddingVertical:20}}),(0,y.jsx)(d.CommonButton,{title:b("cancel"),onPress:function(){return X(!1)},style:{height:65,paddingVertical:20}}),E&&(0,y.jsx)(d.CommonButton,{title:b("delete"),textStyle:{color:"red"},style:{height:65,paddingVertical:20},onPress:function(){return F.delete(E.id).then((function(e){return ee()}))}})]}):void 0!==V&&(0,y.jsx)(be,{cellsHistory:V,setHistory:M,cellRef:x})})})}},ContentListScreen:{path:"contents",title:"contents",component:function(e){var t,n,r,o,s=e.navigation,f=e.route,p={created:void 0===(null==f||null==(t=f.params)?void 0:t.id),id:"*"===(null==f||null==(n=f.params)?void 0:n.id)?"*":parseInt(null==f||null==(r=f.params)?void 0:r.id),type:null==f||null==(o=f.params)?void 0:o.type},g=(0,d.useLangContext)().lang,h=(0,m.useAuthContext)().auth,v=I(0),x=k(),b=p.created||null==v?void 0:v.find((function(e){return e.id===p.id})),j=(0,i.useState)(),O=(0,u.default)(j,2),C=O[0],S=O[1],w=(0,i.useState)(!1),P=(0,u.default)(w,2),E=P[0],D=P[1],N=p.created?p.type:null==b?void 0:b.type,R=function(){s.canGoBack()?s.goBack():s.navigate("HomeScreen",{tab:1})},z={NOTEV2:g("New Note")},B=function(){D(!0)};(0,i.useLayoutEffect)((function(){p.created?(D(!1),S(z[p.type])):b&&(D(!1),S(b.title))}),[b,N]),(0,i.useLayoutEffect)((function(){p.created?s.setOptions({headerShown:!1}):s.setOptions({title:(null==b?void 0:b.title)||g("All Timelines"),headerRight:function(){return(0,y.jsxs)(c.default,{style:{flexDirection:"row"},children:["NOTEV2"===(null==b?void 0:b.type)&&(0,y.jsx)(d.CommonButton,{title:"\u2295",style:{height:40,paddingTop:8,marginRight:10},onPress:function(){return(0,a.navigate)("NoteScreen",{parentId:b.id})}}),b&&!p.created&&(0,y.jsx)(d.CommonButton,{title:"\u270f\ufe0f",style:{height:40,paddingTop:8,marginRight:10},onPress:B})]})},headerShown:!E})}),[s,b,N,E]);var L=p.created||E;return(0,y.jsx)(d.View,{style:{width:"100%",height:"100%",backgroundColor:"transparent"},children:L?(0,y.jsxs)(y.Fragment,{children:[void 0!==C&&(0,y.jsx)(T.default,{mode:"outlined",value:C,onChangeText:S,style:{borderRadius:20,margin:1}}),(0,y.jsx)(d.CommonButton,{title:g("save"),onPress:function(){var e;if(h.user&&void 0!==C&&(null==b?void 0:b.title)!==C&&void 0!==N){var t;if(p.created){var n=null==v?void 0:v.filter((function(e){return e.type==p.type}));t=x.create({userId:h.user.id,parentId:0,type:N,order:((null==n?void 0:n.length)||0)+1,title:C,option:{}}).then((function(e){(0,a.navigate)("ContentListScreen",{id:e})}))}else void 0!==b&&(t=x.update({id:b.id,updated:M(M({},b),{},{type:N,title:C})}));null==(e=t)||e.then((function(){D(!1)}))}else D(!1)},style:{height:65,paddingVertical:20}}),(0,y.jsx)(d.CommonButton,{title:g("cancel"),onPress:p.created?R:function(){return D(!1)},style:{height:65,paddingVertical:20}}),b&&(0,y.jsx)(d.CommonButton,{title:g("delete"),textStyle:{color:"red"},style:{height:65,paddingVertical:20},onPress:function(){return x.delete(b.id).then((function(e){return R()}))}})]}):(0,y.jsx)(l.default,{style:{flex:1},contentContainerStyle:{flexGrow:1},children:b&&(0,y.jsx)(H,{parentContent:b})})})}}};function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const We=function(){var e=(0,d.useLangContext)().lang;return(0,y.jsxs)(l.default,{style:{flex:1},children:[(0,y.jsx)(Ne.default,{left:function(e){return(0,y.jsx)(De.default,Me(Me({},e),{},{icon:"home"}))},title:e("Home"),onPress:function(){return(0,a.navigate)("HomeScreen")}}),(0,y.jsx)(Be,{type:"PAGE"}),(0,y.jsx)(Be,{type:"NOTEV2"})]})};var Fe=n(8610),$e=n(7650),Ue=n(910);function Ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ge(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _e=function(){var e=(0,o.default)((function*(){var e=yield Promise.all([n.e(928),n.e(973)]).then(n.bind(n,9928));return{main:He,login:a.login,prefixes:[e.makeUrl("/")],rootPath:"feedynote",documentTitle:{formatter:function(){return"feedynote"}},rootScreen:{main:"HomeScreen",login:"LoginScreen"},headerLeftIcon:(0,y.jsx)(De.default,{icon:"backburger",style:{left:-18,top:-14}}),headerRight:(0,y.jsx)(y.Fragment,{}),modals:[],drawer:(0,y.jsx)(We,{})}}));return function(){return e.apply(this,arguments)}}();const Ke=function(){var e=(0,d.useColorScheme)(),t="dark"==e?Fe.MD2DarkTheme:$e.MD2LightTheme,n=Je(Je({},t),{},{colors:Je(Je({},t.colors),{},{primary:d.Colors[e].text})}),r=i.lazy((function(){return _e().then((function(e){return{default:function(){return(0,y.jsx)(a.Navigation,{config:e})}}}))}));return(0,y.jsx)(Ue.default,{theme:n,children:(0,y.jsx)(Se,{children:(0,y.jsx)(i.Suspense,{fallback:(0,y.jsx)(y.Fragment,{}),children:(0,y.jsx)(r,{})})})})}}}]);
//# sourceMappingURL=66.02cd17cf.chunk.js.map