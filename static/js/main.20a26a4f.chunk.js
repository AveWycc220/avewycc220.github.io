(this["webpackJsonpdata-art"]=this["webpackJsonpdata-art"]||[]).push([[0],{26:function(e,t,r){},27:function(e,t,r){},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var a,n=r(1),i=r.n(n),s=r(6),c=r.n(s),o=r(3),l=r(7),u=r(2),d={searchResult:[],searchParameters:{value:"",page:0},isLoading:!1,isLoadingNewPage:!1,searchValue:"",error:"",found:0,shown:0,page:0,selected:{},toReadBookCount:0,readBookCount:0,toReadList:[],search:!1,mainInformation:!1,smallDeviceBreakpoint:1100};!function(e){e.SEARCH="SEARCH",e.SET_LOADING="SET_LOADING",e.NEW_PAGE="NEW_PAGE",e.SET_VALUE="SET_VALUE",e.SET_NEW_PAGE_LOADING="SET_NEW_PAGE_LOADING",e.ERROR="ERROR",e.SET_FOUND="SET_FOUND",e.SET_SHOWN="SET_SHOWN",e.SET_PAGE="SET_PAGE",e.SET_SELECTED="SET_SELECTED",e.SET_TO_READ_BOOK_COUNT="SET_TO_READ_BOOK_COUNT",e.SET_READ_BOOK_COUNT="SET_READ_BOOK_COUNT",e.SET_TO_READ_LIST="SET_TO_READ_LIST",e.SET_SEARCH="SET_SEARCH",e.SET_MAIN_INFORMATION="SET_MAIN_INFORMATION"}(a||(a={}));var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SEARCH:return Object(u.a)(Object(u.a)({},e),{},{searchResult:t.value,shown:0});case a.SET_LOADING:return Object(u.a)(Object(u.a)({},e),{},{isLoading:t.value});case a.SET_NEW_PAGE_LOADING:return Object(u.a)(Object(u.a)({},e),{},{isLoadingNewPage:t.value});case a.NEW_PAGE:return Object(u.a)(Object(u.a)({},e),{},{searchResult:e.searchResult.concat(t.value)});case a.SET_VALUE:return Object(u.a)(Object(u.a)({},e),{},{searchValue:t.value});case a.ERROR:return Object(u.a)(Object(u.a)({},e),{},{error:t.value});case a.SET_FOUND:return Object(u.a)(Object(u.a)({},e),{},{found:t.value});case a.SET_SHOWN:return Object(u.a)(Object(u.a)({},e),{},{shown:e.shown+t.value});case a.SET_PAGE:return Object(u.a)(Object(u.a)({},e),{},{page:t.value});case a.SET_SELECTED:return Object(u.a)(Object(u.a)({},e),{},{selected:t.value});case a.SET_TO_READ_BOOK_COUNT:return Object(u.a)(Object(u.a)({},e),{},{toReadBookCount:t.value});case a.SET_READ_BOOK_COUNT:return Object(u.a)(Object(u.a)({},e),{},{readBookCount:t.value});case a.SET_TO_READ_LIST:return Object(u.a)(Object(u.a)({},e),{},{toReadList:t.value});case a.SET_SEARCH:return Object(u.a)(Object(u.a)({},e),{},{search:t.value});case a.SET_MAIN_INFORMATION:return Object(u.a)(Object(u.a)({},e),{},{mainInformation:t.value});default:return e}},m=Object(l.b)(h,d),f=r(8),b=r(9),j=new(function(){function e(t){Object(f.a)(this,e),this.store=void 0,this.localStorage=void 0,this.store=t||void 0,this.localStorage=window.localStorage,null===this.getItemsFromStorage()&&this.localStorage.setItem("items",JSON.stringify([])),this.getItems()}return Object(b.a)(e,[{key:"getItems",value:function(){var e=JSON.parse(this.getItemsFromStorage());return this.store&&this.updateStore(e),e||[]}},{key:"addItem",value:function(e){var t=JSON.parse(this.getItemsFromStorage());return"status"in e&&(0===t.filter((function(t){return t.keyItem===e.keyItem})).length&&(t.push(e),this.store&&this.updateStore(t),this.localStorage.setItem("items",JSON.stringify(t)),!0))}},{key:"changeStatus",value:function(e){var t=JSON.parse(this.getItemsFromStorage());t=t.map((function(t){if(t.keyItem===e){var r=Object.assign(t);return r.status=!0,r}return t})),this.updateStore(t),this.localStorage.setItem("items",JSON.stringify(t))}},{key:"removeItem",value:function(e){var t=JSON.parse(this.getItemsFromStorage());t=t.filter((function(t){return t.keyItem!==e})),this.store&&this.updateStore(t),this.localStorage.setItem("items",JSON.stringify(t))}},{key:"getItemsFromStorage",value:function(){return this.localStorage.getItem("items")}},{key:"updateStore",value:function(e){var t;this.setCounts(e),null===(t=this.store)||void 0===t||t.dispatch({type:a.SET_TO_READ_LIST,value:e})}},{key:"setCounts",value:function(e){var t,r,n=this.store?null===e||void 0===e?void 0:e.filter((function(e){return e.status})):null;null===(t=this.store)||void 0===t||t.dispatch({type:a.SET_TO_READ_BOOK_COUNT,value:e.length-n.length}),null===(r=this.store)||void 0===r||r.dispatch({type:a.SET_READ_BOOK_COUNT,value:n.length})}}]),e}())(m),O=(r(26),r(27),r(0)),v=function(e){var t=e.children,r=e.color;return Object(O.jsx)("button",Object(u.a)(Object(u.a)({className:"button-ui button-ui_".concat(r),type:"submit"},e),{},{children:t}))},p=function(e,t){return!(e.width<t)},E=r(10);function g(){var e=Object(n.useState)({width:0,height:0}),t=Object(E.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){function e(){a({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),r}var _,y,x,S,N,T,k,w,I,R,A,C,L,D,B,F=Object(o.b)((function(e){return{selected:e.selected,mainInformation:e.mainInformation,smallDeviceBreakpoint:e.smallDeviceBreakpoint}}),(function(e){return{setMainInformation:function(t){return e({type:a.SET_MAIN_INFORMATION,value:t})},setSearch:function(t){return e({type:a.SET_SEARCH,value:t})}}}))((function(e){var t=e.selected,r=e.mainInformation,a=e.smallDeviceBreakpoint,n=e.setSearch,i=e.setMainInformation,s=t.title,c=t.subtitle,o=t.language,l=t.has_fullText,u=t.first_publish_year,d=t.publish_year,h=g(),m=p(h,a),f=function(){return t.status=!1,n(!1),i(!1),j.addItem(t)},b=function(){n(!0),i(!1)},E=function(){n(!1),i(!1)};return m||r?Object(O.jsx)("main",{className:"main-information",children:Boolean(s)?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"main-information__title",children:s}),Object(O.jsx)("div",{className:"main-information__subtitle",children:c}),Object(O.jsxs)("div",{className:"main-information__languages",children:["Languages available: ",null===o||void 0===o?void 0:o.join(", ")]}),Object(O.jsxs)("div",{className:"main-information__has-fullText",children:["Full text available: ",l?"Yes":"No"]}),Object(O.jsxs)("div",{className:"main-information__first-publish-year",children:["First publish year: ",u]}),Object(O.jsxs)("div",{className:"main-information__publish-year",children:["Years published: ",null===d||void 0===d?void 0:d.join(", ")]}),Object(O.jsxs)("div",{className:"main-information__button",children:[Object(O.jsx)(v,{color:"black",onClick:f,children:"Add book to Read List"}),m?Object(O.jsx)(O.Fragment,{}):Object(O.jsx)(v,{color:"black",onClick:b,children:"Back to Search"}),m?Object(O.jsx)(O.Fragment,{}):Object(O.jsx)(v,{color:"black",onClick:E,children:"Back to ToReadList"})]})]}):Object(O.jsx)(O.Fragment,{})}):Object(O.jsx)(O.Fragment,{})})),P=r(4),G=r.n(P),H=r(5),M=(r(30),function(e){var t=e.type;return Object(O.jsx)("input",Object(u.a)({className:"input-ui",type:t},e))}),U=(r(31),function(){function e(t,r){Object(f.a)(this,e),this.url="",this.store=void 0,this.controllers=void 0,this.url=t,this.store=r||void 0,this.controllers=[]}return Object(b.a)(e,[{key:"search",value:function(){var e=Object(H.a)(G.a.mark((function e(t,r){var n,i,s,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,1===r&&(this.abort(),null===(n=this.store)||void 0===n||n.dispatch({type:a.SET_SELECTED,value:{}}),(null===(i=this.store)||void 0===i?void 0:i.getState().isLoadingNewPage)&&this.store.dispatch({type:a.SET_NEW_PAGE_LOADING,value:!1})),e.next=4,this.makeFetchWithController(t,r);case 4:if((s=e.sent).ok){e.next=7;break}throw new Error("ServerError ".concat(s.status," ").concat(s.statusText,". Try again."));case 7:return e.next=9,s.json();case 9:return(c=e.sent).docs=W(c.docs),this.dispatchNewItems(c,t,r),e.abrupt("return",c.docs);case 15:return e.prev=15,e.t0=e.catch(0),"AbortError"!==e.t0.name&&this.dispatchError(e.t0),e.abrupt("return",e.t0);case 19:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"abort",value:function(){this.controllers=this.controllers.map((function(e){null===e||void 0===e||e.abort()})).filter((function(e){return Boolean(e)}))}},{key:"makeFetchWithController",value:function(){var e=Object(H.a)(G.a.mark((function e(t,r){var a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new AbortController,this.controllers.push(a),e.abrupt("return",fetch("".concat(this.url,"?q=").concat(t,"&page=").concat(r),{signal:a.signal}));case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"dispatchError",value:function(e){this.store&&this.store.dispatch({type:a.ERROR,value:e.message})}},{key:"dispatchNewItems",value:function(e,t,r){var n,i,s,c,o,l,u,d;(null===(n=this.store)||void 0===n||n.dispatch({type:a.SET_VALUE,value:t}),1===r)?(null===(o=this.store)||void 0===o||o.dispatch({type:a.SEARCH,value:e.docs}),null===(l=this.store)||void 0===l||l.dispatch({type:a.SET_FOUND,value:e.numFound})):(null===(u=this.store)||void 0===u||u.dispatch({type:a.NEW_PAGE,value:e.docs}),null===(d=this.store)||void 0===d||d.dispatch({type:a.SET_NEW_PAGE_LOADING,value:!1}));0===e.docs.length?null===(i=this.store)||void 0===i||i.dispatch({type:a.SET_PAGE,value:0}):null===(s=this.store)||void 0===s||s.dispatch({type:a.SET_PAGE,value:r}),null===(c=this.store)||void 0===c||c.dispatch({type:a.SET_SHOWN,value:e.docs.length})}}]),e}()),W=function(e){return e.map((function(e){var t=Object(u.a)({keyItem:e.key},e);return delete t.key,t}))},J=new U("".concat("https://openlibrary.org/search.json"),m),V=Object(o.b)((function(e){return{smallDeviceBreakpoint:e.smallDeviceBreakpoint}}),(function(e){return{setLoading:function(t){return e({type:a.SET_LOADING,value:t})},setValue:function(t){return e({type:a.SET_VALUE,value:t})},setSearch:function(t){return e({type:a.SET_SEARCH,value:t})}}}))((function(e){var t=e.smallDeviceBreakpoint,r=g(),a=!p(r,t),n=i.a.useState(""),s=Object(E.a)(n,2),c=s[0],o=s[1],l=function(){var t=Object(H.a)(G.a.mark((function t(r){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setLoading(!0),e.setValue(c),r.preventDefault(),t.next=5,J.search(c,1);case 5:e.setLoading(!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("form",{className:"search-form",children:[Object(O.jsx)(M,{type:"text",placeholder:"Search",name:"search",onInput:function(e){return function(e){return o(e.target.value)}(e)}}),Object(O.jsx)(v,{color:"yellow",onClick:function(e){return l(e)},children:"Go!"}),a?Object(O.jsx)(v,{color:"yellow",onClick:function(t){return e.setSearch(!1)},children:"Back to ToReadList"}):Object(O.jsx)(O.Fragment,{})]})}));r(32);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function z(e,t){var r=e.title,a=e.titleId,i=Y(e,["title","titleId"]);return n.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"rgb(255, 255, 255)",display:"block",shapeRendering:"auto"},width:"384px",height:"384px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":a},i),r?n.createElement("title",{id:a},r):null,_||(_=n.createElement("g",{transform:"rotate(0 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9333333333333333s",repeatCount:"indefinite"})))),y||(y=n.createElement("g",{transform:"rotate(24 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8666666666666667s",repeatCount:"indefinite"})))),x||(x=n.createElement("g",{transform:"rotate(48 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8s",repeatCount:"indefinite"})))),S||(S=n.createElement("g",{transform:"rotate(72 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.7333333333333333s",repeatCount:"indefinite"})))),N||(N=n.createElement("g",{transform:"rotate(96 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})))),T||(T=n.createElement("g",{transform:"rotate(120 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6s",repeatCount:"indefinite"})))),k||(k=n.createElement("g",{transform:"rotate(144 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5333333333333333s",repeatCount:"indefinite"})))),w||(w=n.createElement("g",{transform:"rotate(168 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4666666666666667s",repeatCount:"indefinite"})))),I||(I=n.createElement("g",{transform:"rotate(192 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4s",repeatCount:"indefinite"})))),R||(R=n.createElement("g",{transform:"rotate(216 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})))),A||(A=n.createElement("g",{transform:"rotate(240 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.26666666666666666s",repeatCount:"indefinite"})))),C||(C=n.createElement("g",{transform:"rotate(264 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.2s",repeatCount:"indefinite"})))),L||(L=n.createElement("g",{transform:"rotate(288 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.13333333333333333s",repeatCount:"indefinite"})))),D||(D=n.createElement("g",{transform:"rotate(312 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.06666666666666667s",repeatCount:"indefinite"})))),B||(B=n.createElement("g",{transform:"rotate(336 50 50)"},n.createElement("rect",{x:49.5,y:19.5,rx:.5,ry:3.5,width:1,height:7,fill:"#000000"},n.createElement("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})))))}var q=n.forwardRef(z),X=(r.p,r(33),function(){return Object(O.jsx)("div",{className:"loader-ui",children:Object(O.jsx)(q,{})})}),Q=(r(34),Object(o.b)((function(e){return{searchResult:e.searchResult}}),(function(e){return{setSelected:function(t){return e({type:a.SET_SELECTED,value:t})},setMainInformation:function(t){return e({type:a.SET_MAIN_INFORMATION,value:t})},setSearch:function(t){return e({type:a.SET_SEARCH,value:t})}}}))((function(e){var t=e.title,r=e.subtitle,a=e.language,n=e.keyItem,i=e.searchResult,s=e.setSelected,c=e.setMainInformation,o=e.setSearch,l=function(){var e=i.find((function(e){return e.keyItem===n}));e.keyItem=e.keyItem,e?(s(e),c(!0),o(!1)):s({})};return Object(O.jsxs)("section",{className:"search-result__item",onClick:l,role:"button",onKeyPress:l,tabIndex:0,children:[Object(O.jsxs)("div",{className:"search-result__title",children:[t," ",a?"[".concat(a.join(", "),"]"):Object(O.jsx)(O.Fragment,{})]}),Object(O.jsx)("div",{className:"search-result__subtitle",children:r})]})}))),Z=(r(35),function(e){var t=e.message;return Object(O.jsx)("div",{className:"error-ui",children:t})}),$=Object(o.b)((function(e){return{searchResult:e.searchResult,isLoading:e.isLoading,value:e.searchValue,isLoadingNewPage:e.isLoadingNewPage,error:e.error,found:e.found,page:e.page}}),(function(e){return{setNewPageLoading:function(t){return e({type:a.SET_NEW_PAGE_LOADING,value:t})}}}))((function(e){var t=e.searchResult,r=e.isLoading,a=e.value,i=e.setNewPageLoading,s=e.isLoadingNewPage,c=e.error,o=e.found,l=e.page,d=Object(n.useRef)(null),h=function(){var e=Object(H.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===d.current||s||!(100*l<o)||r){e.next=5;break}if(!((t=d.current).scrollTop+t.clientHeight>=t.scrollHeight-4200)){e.next=5;break}return i(!0),e.next=5,J.search(a,l+1);case 5:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("section",{ref:d,className:r||c?"search-result search-result_center":"search-result",onScroll:h,children:[r?Object(O.jsx)(X,{}):t.map((function(e){return Object(n.createElement)(Q,Object(u.a)(Object(u.a)({},e),{},{key:e.keyItem}))})),s?Object(O.jsx)("div",{className:"new-page-loading",children:"Loading..."}):Object(O.jsx)(O.Fragment,{}),c?Object(O.jsx)(Z,{message:c}):null]})})),ee=(r(36),Object(o.b)((function(e){return{found:e.found,shown:e.shown,page:e.page}}))((function(e){var t=e.found,r=e.shown,a=e.page;return Object(O.jsxs)("footer",{className:"search-footer",children:[Object(O.jsxs)("div",{className:"search-footer__found",children:["Found: ",t]}),Object(O.jsxs)("div",{className:"search-footer__shown",children:["Shown: ",r]}),Object(O.jsxs)("div",{className:"search-footer__page",children:["Page: ",a]})]})}))),te=(r(37),Object(o.b)((function(e){return{search:e.search,smallDeviceBreakpoint:e.smallDeviceBreakpoint}}))((function(e){var t=e.search,r=e.smallDeviceBreakpoint,a=g();return p(a,r)||t?Object(O.jsxs)("aside",{className:"search-container",children:[Object(O.jsx)(V,{}),Object(O.jsx)($,{}),Object(O.jsx)(ee,{})]}):Object(O.jsx)(O.Fragment,{})}))),re=(r(38),r(39),Object(o.b)((function(e){return{toReadBookCount:e.toReadBookCount,readBookCount:e.readBookCount,smallDeviceBreakpoint:e.smallDeviceBreakpoint}}),(function(e){return{setSearch:function(t){return e({type:a.SET_SEARCH,value:t})}}}))((function(e){var t=e.toReadBookCount,r=e.readBookCount,a=e.smallDeviceBreakpoint,n=e.setSearch,i=g(),s=Object(O.jsx)("div",{className:"to-read-list-header__btn-search",children:Object(O.jsx)(v,{color:"yellow",onClick:function(e){return n(!0)},children:"Search"})});return Object(O.jsxs)("header",{className:"to-read-list-header",children:[Object(O.jsx)("div",{className:"to-read-list-header__title",children:"To Read List"}),Object(O.jsxs)("div",{className:"to-read-list-header__info",children:[Object(O.jsxs)("div",{className:"to-read-list-header__to-read-book-count",children:[t," books"]}),Object(O.jsxs)("div",{className:"to-read-list-header__read-book-count",children:[r," read"]})]}),p(i,a)?Object(O.jsx)(O.Fragment,{}):s]})}))),ae=(r(40),function(e){var t=e.title,r=e.subtitle,a=e.language,n=e.keyItem,i=e.author_name,s=e.status,c=Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"to-read-list-item__title",children:[t," ",a?"(".concat(a.join(", "),")"):Object(O.jsx)(O.Fragment,{})]}),Object(O.jsx)("div",{className:"to-read-list-item__subtitle",children:r}),Object(O.jsxs)("div",{className:"to-read-list-item__author",children:["Author:\xa0",i]})]}),o=Object(O.jsxs)("div",{className:"to-read-list-item__button",children:[Object(O.jsx)(v,{color:"black",onClick:function(e){return t=n,j.changeStatus(t);var t},children:"Make as read"}),Object(O.jsx)(v,{color:"black",onClick:function(e){return t=n,j.removeItem(t);var t},children:"Remove from list"})]}),l=Object(O.jsxs)("div",{className:"to-read-list-item",children:[Object(O.jsx)("div",{className:"to-read-list-item__info",children:c}),s?Object(O.jsx)(O.Fragment,{}):o]},n);return s?Object(O.jsx)("div",{className:"to-read-list-item to-read-list-item_read",children:c},n):l}),ne=Object(o.b)((function(e){return{toReadList:e.toReadList,search:e.search,mainInformation:e.mainInformation,smallDeviceBreakpoint:e.smallDeviceBreakpoint}}))((function(e){var t=e.toReadList,r=e.smallDeviceBreakpoint,a=e.search,n=e.mainInformation,i=g();return p(i,r)||!a&&!n?Object(O.jsxs)("section",{className:"to-read-list",children:[Object(O.jsx)(re,{}),Object(O.jsx)("section",{className:"to-read-list-container",children:t?t.map((function(e){return Object(O.jsx)(ae,Object(u.a)({},e),e.keyItem)})):Object(O.jsx)(O.Fragment,{})})]}):Object(O.jsx)(O.Fragment,{})})),ie=(r(41),function(){return Object(O.jsx)(o.a,{store:m,children:Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(te,{}),Object(O.jsx)(F,{}),Object(O.jsx)(ne,{})]})})});c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(ie,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.20a26a4f.chunk.js.map