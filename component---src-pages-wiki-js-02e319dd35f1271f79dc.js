(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return M}));var a=n(2),r=n(0),i=n.n(r),o=n(53),c=n(276),l=n(275),s=n(336),u=n(328),d=n(277),f=n.n(d),p=(n(145),n(326)),m=n(322),b=n(327),h={name:"16wyxn5",styles:"background:rgb(72,191,131);padding:20px;color:#fff;padding:100px 0 40px 0;text-align:center;"},v={name:"csejxh",styles:"@media screen and (max-width:700px){padding:0 !important;margin-bottom:20px !important;}"},g={name:"h9j6vo",styles:"@media screen and (max-width:700px){padding:10px;}"},O={name:"1h7c8qc",styles:"@media screen and (max-width:700px){box-shadow:none;border-radius:20px;}"},j={name:"pduman",styles:"padding:.25rem 1rem 1rem 1rem;background:#fff;@media screen and (max-width:700px){border-radius:20px;}"},y={name:"lfdij9",styles:"display:flex;flex-direction:row;margin:10px auto;"},x={name:"13k6hhg",styles:"width:40px;height:40px;border-radius:100%;"},w={name:"1qhmto6",styles:"margin-left:12px;"},E={name:"i0hz4x",styles:"font-weight:700px;"},k={name:"nn640c",styles:"text-decoration:none;color:inherit;"},C={name:"in3yi3",styles:"font-weight:bold;"};t.default=function(e){var t=e.data;return Object(a.a)(i.a.Fragment,null,Object(a.a)("div",{css:h},Object(a.a)(m.a,{variant:"h6"},"MM Science ",Object(a.a)("br",null),"wiki ( ကဏ္ဍစုံစာမျက်နှာ )")),Object(a.a)(p.a,{maxWidth:"md",style:{margin:"30px auto"}},Object(a.a)(b.a,{container:!0,spacing:3},Object(a.a)(b.a,{item:!0,xs:6,sm:6},Object(a.a)(s.a,null)),Object(a.a)(b.a,{item:!0,xs:6,sm:6,style:{textAlign:"right",fontWeight:"bold"}},Object(a.a)(m.a,{variant:"h6"},t.allMarkdownRemark.totalCount," articles")))),Object(a.a)(l.a,null,Object(a.a)("main",null,Object(a.a)(c.Helmet,{title:t.site.siteMetadata.title}),Object(a.a)(b.a,{container:!0,spacing:3,direction:"row",justify:"center",alignItems:"stretch"},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return Object(a.a)(b.a,{item:!0,xs:12,sm:4,key:t.id,css:v},Object(a.a)("div",{className:"blog__post__items",style:{height:"100%"}},Object(a.a)("div",{css:g},Object(a.a)(f.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid,css:O})),Object(a.a)("div",{css:j},Object(a.a)("div",{css:y},Object(a.a)("div",{className:"article_owner"},Object(a.a)("img",{src:t.frontmatter.authorPic.childImageSharp.fluid.src,alt:t.frontmatter.author,css:x})),Object(a.a)("div",{css:w},Object(a.a)("span",{css:E},t.frontmatter.author),Object(a.a)("div",null,Object(a.a)("span",{className:"article__meta"},t.frontmatter.date," · ",t.timeToRead," min read")))),Object(a.a)(o.Link,{to:t.fields.slug,css:k},Object(a.a)(m.a,{variant:"body1",css:C},t.frontmatter.title)),Object(a.a)("div",{className:"article__label"},Object(a.a)(u.a,{color:"success"},t.frontmatter.tags)))))}))))))};var M="2354861331"},336:function(e,t,n){"use strict";var a=n(2),r=n(0),i=n.n(r),o=n(323),c=(n(22),n(1)),l=n(4),s=(n(3),n(5)),u=n(7),d=n(20),f=n.n(d),p=n(149),m=n(49),b=n(150),h=n(13),v=n(330),g=n(331),O=n(75),j=n(59),y=n(21);function x(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var w={entering:{opacity:1,transform:x(1)},entered:{opacity:1,transform:"none"}},E=i.a.forwardRef((function(e,t){var n=e.children,a=e.in,r=e.onEnter,o=e.onExit,s=e.style,u=e.timeout,d=void 0===u?"auto":u,f=Object(l.a)(e,["children","in","onEnter","onExit","style","timeout"]),p=i.a.useRef(),m=i.a.useRef(),b=Object(y.c)(n.ref,t),h=Object(O.a)();return i.a.useEffect((function(){return function(){clearTimeout(p.current)}}),[]),i.a.createElement(g.a,Object(c.a)({appear:!0,in:a,onEnter:function(e,t){Object(j.b)(e);var n,a=Object(j.a)({style:s,timeout:d},{mode:"enter"}),i=a.duration,o=a.delay;"auto"===d?(n=h.transitions.getAutoHeightDuration(e.clientHeight),m.current=n):n=i,e.style.transition=[h.transitions.create("opacity",{duration:n,delay:o}),h.transitions.create("transform",{duration:.666*n,delay:o})].join(","),r&&r(e,t)},onExit:function(e){var t,n=Object(j.a)({style:s,timeout:d},{mode:"exit"}),a=n.duration,r=n.delay;"auto"===d?(t=h.transitions.getAutoHeightDuration(e.clientHeight),m.current=t):t=a,e.style.transition=[h.transitions.create("opacity",{duration:t,delay:r}),h.transitions.create("transform",{duration:.666*t,delay:r||.333*t})].join(","),e.style.opacity="0",e.style.transform=x(.75),o&&o(e)},addEndListener:function(e,t){"auto"===d&&(p.current=setTimeout(t,m.current||0))},timeout:"auto"===d?null:d},f),(function(e,t){return i.a.cloneElement(n,Object(c.a)({style:Object(c.a)({opacity:0,transform:x(.75),visibility:"exited"!==e||a?void 0:"hidden"},w[e],{},s,{},n.props.style),ref:b},t))}))}));E.muiSupportAuto=!0;var k=E,C=n(320);function M(e,t){var n=0;return"number"==typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function D(e,t){var n=0;return"number"==typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function P(e){return[e.horizontal,e.vertical].map((function(e){return"number"==typeof e?"".concat(e,"px"):e})).join(" ")}function R(e){return"function"==typeof e?e():e}var N=i.a.forwardRef((function(e,t){var n=e.action,a=e.anchorEl,r=e.anchorOrigin,o=void 0===r?{vertical:"top",horizontal:"left"}:r,u=e.anchorPosition,d=e.anchorReference,g=void 0===d?"anchorEl":d,O=e.children,j=e.classes,y=e.container,x=e.elevation,w=void 0===x?8:x,E=e.getContentAnchorEl,N=e.marginThreshold,H=void 0===N?16:N,S=e.ModalClasses,T=e.onEnter,z=e.onEntered,L=e.onEntering,I=e.onExit,A=e.onExited,F=e.onExiting,W=e.open,K=e.PaperProps,_=void 0===K?{}:K,B=e.transformOrigin,q=void 0===B?{vertical:"top",horizontal:"left"}:B,G=e.TransitionComponent,J=void 0===G?k:G,U=e.transitionDuration,V=void 0===U?"auto":U,X=e.TransitionProps,Y=void 0===X?{}:X,Q=Object(l.a)(e,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","container","elevation","getContentAnchorEl","marginThreshold","ModalClasses","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),Z=i.a.useRef(),$=i.a.useCallback((function(e){if("anchorPosition"===g)return u;var t=R(a),n=(t instanceof Object(b.a)(t).Element?t:Object(m.a)(Z.current).body).getBoundingClientRect(),r=0===e?o.vertical:"center";return{top:n.top+M(n,r),left:n.left+D(n,o.horizontal)}}),[a,o.horizontal,o.vertical,u,g]),ee=i.a.useCallback((function(e){var t=0;if(E&&"anchorEl"===g){var n=E(e);if(n&&e.contains(n)){var a=function(e,t){for(var n=t,a=0;n&&n!==e;)a+=(n=n.parentNode).scrollTop;return a}(e,n);t=n.offsetTop+n.clientHeight/2-a||0}0}return t}),[o.vertical,g,E]),te=i.a.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:M(e,q.vertical)+t,horizontal:D(e,q.horizontal)}}),[q.horizontal,q.vertical]),ne=i.a.useCallback((function(e){var t=ee(e),n={width:e.offsetWidth,height:e.offsetHeight},r=te(n,t);if("none"===g)return{top:null,left:null,transformOrigin:P(r)};var i=$(t),o=i.top-r.vertical,c=i.left-r.horizontal,l=o+n.height,s=c+n.width,u=Object(b.a)(R(a)),d=u.innerHeight-H,f=u.innerWidth-H;if(o<H){var p=o-H;o-=p,r.vertical+=p}else if(l>d){var m=l-d;o-=m,r.vertical+=m}if(c<H){var h=c-H;c-=h,r.horizontal+=h}else if(s>f){var v=s-f;c-=v,r.horizontal+=v}return{top:"".concat(o,"px"),left:"".concat(c,"px"),transformOrigin:P(r)}}),[a,g,$,ee,te,H]),ae=i.a.useCallback((function(e){var t=ne(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}),[ne]),re=i.a.useCallback((function(e){Z.current=f.a.findDOMNode(e)}),[]),ie=i.a.useMemo((function(){if(W)return Object(p.a)((function(){ae(Z.current)}))}),[W,ae]);i.a.useImperativeHandle(n,(function(){return W?{updatePosition:ie}:null}),[W,ie]),i.a.useEffect((function(){if(ie)return window.addEventListener("resize",ie),function(){window.removeEventListener("resize",ie),ie.clear()}}),[ie]);var oe=V;"auto"!==V||J.muiSupportAuto||(oe=void 0);var ce=y||(a?Object(m.a)(R(a)).body:void 0);return i.a.createElement(v.a,Object(c.a)({classes:S,container:ce,open:W,ref:t,BackdropProps:{invisible:!0}},Q),i.a.createElement(J,Object(c.a)({appear:!0,in:W,onEnter:T,onEntered:z,onExit:I,onExited:A,onExiting:F,timeout:oe},Y,{onEntering:Object(h.b)((function(e,t){L&&L(e,t),ae(e)}),Y.onEntering)}),i.a.createElement(C.a,Object(c.a)({elevation:w,ref:re},_,{className:Object(s.a)(j.paper,_.className)}),O)))})),H=Object(u.a)({paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(N),S=(n(12),n(9),n(8),n(6),n(101),n(324)),T=n(151);function z(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function L(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function I(e,t){if(void 0===t)return!0;var n=e.innerText;return void 0===n&&(n=e.textContent),void 0!==n&&(0!==(n=n.trim().toLowerCase()).length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join(""))))}function A(e,t,n,a,r){for(var i=!1,o=a(e,t,!!t&&n);o;){if(o===e.firstChild){if(i)return!1;i=!0}if(o.hasAttribute("tabindex")&&!o.disabled&&"true"!==o.getAttribute("aria-disabled")&&I(o,r))return o.focus(),!0;o=a(e,o,n)}return!1}var F="undefined"==typeof window?i.a.useEffect:i.a.useLayoutEffect,W=i.a.forwardRef((function(e,t){var n=e.actions,a=e.autoFocus,r=void 0!==a&&a,o=e.className,s=e.onKeyDown,u=e.disableListWrap,d=void 0!==u&&u,p=Object(l.a)(e,["actions","autoFocus","className","onKeyDown","disableListWrap"]),b=i.a.useRef(null),h=i.a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});F((function(){r&&b.current.focus()}),[r]),i.a.useImperativeHandle(n,(function(){return{adjustStyleForScrollbar:function(e,t){var n=!b.current.style.width;if(e.clientHeight<b.current.clientHeight&&n){var a="".concat(Object(T.a)(!0),"px");b.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=a,b.current.style.width="calc(100% + ".concat(a,")")}return b.current}}}),[]);var v=i.a.useCallback((function(e){b.current=f.a.findDOMNode(e)}),[]),g=Object(y.c)(v,t);return i.a.createElement(S.a,Object(c.a)({role:"menu",ref:g,className:o,onKeyDown:function(e){var t=b.current,n=e.key,a=Object(m.a)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),A(t,a,d,z);else if("ArrowUp"===n)e.preventDefault(),A(t,a,d,L);else if("Home"===n)e.preventDefault(),A(t,null,d,z);else if("End"===n)e.preventDefault(),A(t,null,d,L);else if(1===n.length){var r=h.current,i=n.toLowerCase(),o=performance.now();r.keys.length>0&&(o-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&i!==r.keys[0]&&(r.repeating=!1)),r.lastTime=o,r.keys.push(i);var c=a&&!r.repeating&&I(a,r);r.previousKeyMatched&&(c||A(t,a,!1,z,r))?e.preventDefault():r.previousKeyMatched=!1}s&&s(e)},tabIndex:r?0:-1},p))})),K={vertical:"top",horizontal:"right"},_={vertical:"top",horizontal:"left"},B=i.a.forwardRef((function(e,t){var n=e.autoFocus,a=e.children,r=e.classes,o=e.disableAutoFocusItem,u=void 0!==o&&o,d=e.MenuListProps,p=void 0===d?{}:d,m=e.onClose,b=e.onEntering,h=e.open,v=e.PaperProps,g=void 0===v?{}:v,j=e.PopoverClasses,x=e.transitionDuration,w=void 0===x?"auto":x,E=e.variant,k=void 0===E?"selectedMenu":E,C=Object(l.a)(e,["autoFocus","children","classes","disableAutoFocusItem","MenuListProps","onClose","onEntering","open","PaperProps","PopoverClasses","transitionDuration","variant"]),M=Object(O.a)(),D=(void 0!==n?n:!u)&&h,P=i.a.useRef(null),R=i.a.useRef(null),N=i.a.useRef(null),S=null,T=null,z=i.a.Children.map(a,(function(e,t){if(!i.a.isValidElement(e))return null;null===S&&(S=t);var n=null;return"menu"!==k&&null===T&&e.props.selected&&!e.props.disabled?(T=t,n={},D&&(n.autoFocus=!0),void 0===e.props.tabIndex&&(n.tabIndex=0),n.ref=function(t){N.current=f.a.findDOMNode(t),Object(y.b)(e.ref,t)}):t===S&&(n={ref:function(t){R.current=f.a.findDOMNode(t),Object(y.b)(e.ref,t)}}),null!==n?i.a.cloneElement(e,n):e}));return i.a.createElement(H,Object(c.a)({getContentAnchorEl:function(){return N.current||R.current},classes:j,onClose:m,onEntering:function(e,t){P.current&&P.current.adjustStyleForScrollbar(e,M),b&&b(e,t)},anchorOrigin:"rtl"===M.direction?K:_,transformOrigin:"rtl"===M.direction?K:_,PaperProps:Object(c.a)({},g,{classes:Object(c.a)({},g.classes,{root:r.paper})}),open:h,ref:t,transitionDuration:w},C),i.a.createElement(W,Object(c.a)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),m&&m(e,"tabKeyDown"))},actions:P,autoFocus:D&&null===T},p,{className:Object(s.a)(r.list,p.className)}),z))})),q=Object(u.a)({paper:{maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"},list:{outline:0}},{name:"MuiMenu"})(B),G=n(325),J=i.a.forwardRef((function(e,t){var n,a=e.classes,r=e.className,o=e.component,u=void 0===o?"li":o,d=e.disableGutters,f=void 0!==d&&d,p=e.role,m=void 0===p?"menuitem":p,b=e.selected,h=e.tabIndex,v=Object(l.a)(e,["classes","className","component","disableGutters","role","selected","tabIndex"]);return e.disabled||(n=void 0!==h?h:-1),i.a.createElement(G.a,Object(c.a)({button:!0,role:m,tabIndex:n,component:u,selected:b,disableGutters:f,classes:{dense:a.dense},className:Object(s.a)(a.root,r,b&&a.selected,!f&&a.gutters),ref:t},v))})),U=Object(u.a)((function(e){return{root:Object(c.a)({},e.typography.subtitle1,{minHeight:48,paddingTop:4,paddingBottom:4,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"}),gutters:{paddingLeft:16,paddingRight:16},selected:{},dense:{minHeight:"auto"}}}),{name:"MuiMenuItem"})(J),V=n(53);function X(){var e=i.a.useState(null),t=e[0],n=e[1],r=function(){n(null)};return Object(a.a)("div",null,Object(a.a)(o.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},variant:"contained",color:"inherit",fullWidth:!0},"select type"),Object(a.a)(q,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:r},Object(a.a)(U,{onClick:r},Object(a.a)(V.Link,{to:"/wiki/"},"feed")),Object(a.a)(U,{onClick:r},Object(a.a)(V.Link,{to:"/wiki/new/"},"Recently published")),Object(a.a)(U,{onClick:r},Object(a.a)(V.Link,{to:"/wiki/short-story/"},"Shortest time to read"))))}n.d(t,"a",(function(){return X}))}}]);
//# sourceMappingURL=component---src-pages-wiki-js-02e319dd35f1271f79dc.js.map