(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{279:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return f}));var n=a(3),r=(a(0),a(71)),i=a(263),o=a(261),s=a(320),l=a(317),c=a(314),u=a.n(c),d=(a(138),{name:"nn640c",styles:"text-decoration:none;color:inherit;"});t.default=function(e){var t=e.data;return Object(n.a)(o.a,null,Object(n.a)(i.Helmet,{title:t.site.siteMetadata.title}),Object(n.a)("h4",null,t.allMarkdownRemark.totalCount," posts"),Object(n.a)("div",{className:"reading_type_style"},Object(n.a)(s.a,{type:"shortest time to read"})),Object(n.a)("div",{className:"row"},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return Object(n.a)("div",{className:"col-md-4 wiki__article",key:t.id},Object(n.a)("div",{className:"blog__post__list"},Object(n.a)(u.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid,className:"content__image"}),Object(n.a)("div",{className:"content__spaces"},Object(n.a)(r.a,{to:t.fields.slug,css:d},Object(n.a)("h5",{className:"content__header"},t.frontmatter.title)),t.frontmatter.tags.length>1?Object(n.a)(l.a,{color:"success"},t.frontmatter.tags.join(" ")):Object(n.a)(l.a,{color:"success"},t.frontmatter.tags)," ",Object(n.a)("br",null),Object(n.a)("span",{className:"article__meta"},t.frontmatter.date," · ",t.timeToRead," min read"))))}))))};var f="3814583940"},314:function(e,t,a){"use strict";a(9),a(8),a(6),a(58),a(115),a(192);var n=a(25);t.__esModule=!0,t.default=void 0;var r,i=n(a(116)),o=n(a(83)),s=n(a(191)),l=n(a(139)),c=n(a(0)),u=n(a(4)),d=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=d(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),c.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function O(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function w(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var S=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+o+s+a+n+t+i+r+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=c.default.createElement(x,(0,l.default)({src:t},r));return a.length>1?c.default.createElement("picture",null,n(a),i):i},x=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));x.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=S(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,O=e.itemProp,w=e.loading,S=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:R?1:0,transition:k?"opacity "+b+"ms":"none"},s),I="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&N,{},s,{},f),P={title:t,alt:this.state.isVisible?"":a,style:M,className:p};if(g){var T=g,H=T[0];return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),I&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&N)}),H.base64&&c.default.createElement(L,{src:H.base64,spreadProps:P,imageVariants:T,generateSources:j}),H.tracedSVG&&c.default.createElement(L,{src:H.tracedSVG,spreadProps:P,imageVariants:T,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(T),c.default.createElement(x,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:w,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:w},H,{imageVariants:T}))}}))}if(m){var D=m,V=D[0],_=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete _.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},I&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},k&&N)}),V.base64&&c.default.createElement(L,{src:V.base64,spreadProps:P,imageVariants:D,generateSources:j}),V.tracedSVG&&c.default.createElement(L,{src:V.tracedSVG,spreadProps:P,imageVariants:D,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(D),c.default.createElement(x,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,loading:w,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:w},V,{imageVariants:D}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),z=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});R.propTypes={resolutions:k,sizes:z,fixed:u.default.oneOfType([k,u.default.arrayOf(k)]),fluid:u.default.oneOfType([z,u.default.arrayOf(z)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var I=R;t.default=I},317:function(e,t,a){"use strict";var n=a(1),r=a(51),i=a(0),o=a.n(i),s=a(4),l=a.n(s),c=a(260),u=a.n(c),d=a(262),f={color:l.a.string,pill:l.a.bool,tag:d.c,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),children:l.a.node,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,i=e.color,s=e.innerRef,l=e.pill,c=e.tag,f=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.a)(u()(t,"badge","badge-"+i,!!l&&"badge-pill"),a);return f.href&&"span"===c&&(c="a"),o.a.createElement(c,Object(n.a)({},f,{className:p,ref:s}))};p.propTypes=f,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},319:function(e,t,a){"use strict";a(36);var n=a(25);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(74)).default)(r.default.createElement("path",{d:"M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"}),"FormatLineSpacing");t.default=i},320:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r),o=a(308),s=(a(18),a(1)),l=a(2),c=(a(4),a(5)),u=a(7),d=a(16),f=a.n(d),p=a(142),g=a(48),m=a(143),h=a(12),b=a(312),v=a(313),y=a(73),O=a(55),E=a(17);function j(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var w={entering:{opacity:1,transform:j(1)},entered:{opacity:1,transform:"none"}},S=i.a.forwardRef((function(e,t){var a=e.children,n=e.in,r=e.onEnter,o=e.onExit,c=e.style,u=e.timeout,d=void 0===u?"auto":u,f=Object(l.a)(e,["children","in","onEnter","onExit","style","timeout"]),p=i.a.useRef(),g=i.a.useRef(),m=Object(E.c)(a.ref,t),h=Object(y.a)();return i.a.useEffect((function(){return function(){clearTimeout(p.current)}}),[]),i.a.createElement(v.a,Object(s.a)({appear:!0,in:n,onEnter:function(e,t){Object(O.b)(e);var a,n=Object(O.a)({style:c,timeout:d},{mode:"enter"}),i=n.duration,o=n.delay;"auto"===d?(a=h.transitions.getAutoHeightDuration(e.clientHeight),g.current=a):a=i,e.style.transition=[h.transitions.create("opacity",{duration:a,delay:o}),h.transitions.create("transform",{duration:.666*a,delay:o})].join(","),r&&r(e,t)},onExit:function(e){var t,a=Object(O.a)({style:c,timeout:d},{mode:"exit"}),n=a.duration,r=a.delay;"auto"===d?(t=h.transitions.getAutoHeightDuration(e.clientHeight),g.current=t):t=n,e.style.transition=[h.transitions.create("opacity",{duration:t,delay:r}),h.transitions.create("transform",{duration:.666*t,delay:r||.333*t})].join(","),e.style.opacity="0",e.style.transform=j(.75),o&&o(e)},addEndListener:function(e,t){"auto"===d&&(p.current=setTimeout(t,g.current||0))},timeout:"auto"===d?null:d},f),(function(e,t){return i.a.cloneElement(a,Object(s.a)({style:Object(s.a)({opacity:0,transform:j(.75),visibility:"exited"!==e||n?void 0:"hidden"},w[e],{},c,{},a.props.style),ref:m},t))}))}));S.muiSupportAuto=!0;var C=S,L=a(305);function x(e,t){var a=0;return"number"==typeof t?a=t:"center"===t?a=e.height/2:"bottom"===t&&(a=e.height),a}function R(e,t){var a=0;return"number"==typeof t?a=t:"center"===t?a=e.width/2:"right"===t&&(a=e.width),a}function k(e){return[e.horizontal,e.vertical].map((function(e){return"number"==typeof e?"".concat(e,"px"):e})).join(" ")}function z(e){return"function"==typeof e?e():e}var I=i.a.forwardRef((function(e,t){var a=e.action,n=e.anchorEl,r=e.anchorOrigin,o=void 0===r?{vertical:"top",horizontal:"left"}:r,u=e.anchorPosition,d=e.anchorReference,v=void 0===d?"anchorEl":d,y=e.children,O=e.classes,E=e.container,j=e.elevation,w=void 0===j?8:j,S=e.getContentAnchorEl,I=e.marginThreshold,N=void 0===I?16:I,M=e.ModalClasses,P=e.onEnter,T=e.onEntered,H=e.onEntering,D=e.onExit,V=e.onExited,_=e.onExiting,F=e.open,W=e.PaperProps,A=void 0===W?{}:W,G=e.transformOrigin,q=void 0===G?{vertical:"top",horizontal:"left"}:G,K=e.TransitionComponent,B=void 0===K?C:K,U=e.transitionDuration,J=void 0===U?"auto":U,X=e.TransitionProps,Y=void 0===X?{}:X,Q=Object(l.a)(e,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","container","elevation","getContentAnchorEl","marginThreshold","ModalClasses","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),Z=i.a.useRef(),$=i.a.useCallback((function(e){if("anchorPosition"===v)return u;var t=z(n),a=(t instanceof Object(m.a)(t).Element?t:Object(g.a)(Z.current).body).getBoundingClientRect(),r=0===e?o.vertical:"center";return{top:a.top+x(a,r),left:a.left+R(a,o.horizontal)}}),[n,o.horizontal,o.vertical,u,v]),ee=i.a.useCallback((function(e){var t=0;if(S&&"anchorEl"===v){var a=S(e);if(a&&e.contains(a)){var n=function(e,t){for(var a=t,n=0;a&&a!==e;)n+=(a=a.parentNode).scrollTop;return n}(e,a);t=a.offsetTop+a.clientHeight/2-n||0}0}return t}),[o.vertical,v,S]),te=i.a.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:x(e,q.vertical)+t,horizontal:R(e,q.horizontal)}}),[q.horizontal,q.vertical]),ae=i.a.useCallback((function(e){var t=ee(e),a={width:e.offsetWidth,height:e.offsetHeight},r=te(a,t);if("none"===v)return{top:null,left:null,transformOrigin:k(r)};var i=$(t),o=i.top-r.vertical,s=i.left-r.horizontal,l=o+a.height,c=s+a.width,u=Object(m.a)(z(n)),d=u.innerHeight-N,f=u.innerWidth-N;if(o<N){var p=o-N;o-=p,r.vertical+=p}else if(l>d){var g=l-d;o-=g,r.vertical+=g}if(s<N){var h=s-N;s-=h,r.horizontal+=h}else if(c>f){var b=c-f;s-=b,r.horizontal+=b}return{top:"".concat(o,"px"),left:"".concat(s,"px"),transformOrigin:k(r)}}),[n,v,$,ee,te,N]),ne=i.a.useCallback((function(e){var t=ae(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}),[ae]),re=i.a.useCallback((function(e){Z.current=f.a.findDOMNode(e)}),[]),ie=i.a.useMemo((function(){if(F)return Object(p.a)((function(){ne(Z.current)}))}),[F,ne]);i.a.useImperativeHandle(a,(function(){return F?{updatePosition:ie}:null}),[F,ie]),i.a.useEffect((function(){if(ie)return window.addEventListener("resize",ie),function(){window.removeEventListener("resize",ie),ie.clear()}}),[ie]);var oe=J;"auto"!==J||B.muiSupportAuto||(oe=void 0);var se=E||(n?Object(g.a)(z(n)).body:void 0);return i.a.createElement(b.a,Object(s.a)({classes:M,container:se,open:F,ref:t,BackdropProps:{invisible:!0}},Q),i.a.createElement(B,Object(s.a)({appear:!0,in:F,onEnter:P,onEntered:T,onExit:D,onExited:V,onExiting:_,timeout:oe},Y,{onEntering:Object(h.b)((function(e,t){H&&H(e,t),ne(e)}),Y.onEntering)}),i.a.createElement(L.a,Object(s.a)({elevation:w,ref:re},A,{className:Object(c.a)(O.paper,A.className)}),y)))})),N=Object(u.a)({paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(I),M=(a(11),a(9),a(8),a(6),a(99),a(309)),P=a(144);function T(e,t,a){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:a?null:e.firstChild}function H(e,t,a){return e===t?a?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:a?null:e.lastChild}function D(e,t){if(void 0===t)return!0;var a=e.innerText;return void 0===a&&(a=e.textContent),void 0!==a&&(0!==(a=a.trim().toLowerCase()).length&&(t.repeating?a[0]===t.keys[0]:0===a.indexOf(t.keys.join(""))))}function V(e,t,a,n,r){for(var i=!1,o=n(e,t,!!t&&a);o;){if(o===e.firstChild){if(i)return!1;i=!0}if(o.hasAttribute("tabindex")&&!o.disabled&&"true"!==o.getAttribute("aria-disabled")&&D(o,r))return o.focus(),!0;o=n(e,o,a)}return!1}var _="undefined"==typeof window?i.a.useEffect:i.a.useLayoutEffect,F=i.a.forwardRef((function(e,t){var a=e.actions,n=e.autoFocus,r=void 0!==n&&n,o=e.className,c=e.onKeyDown,u=e.disableListWrap,d=void 0!==u&&u,p=Object(l.a)(e,["actions","autoFocus","className","onKeyDown","disableListWrap"]),m=i.a.useRef(null),h=i.a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});_((function(){r&&m.current.focus()}),[r]),i.a.useImperativeHandle(a,(function(){return{adjustStyleForScrollbar:function(e,t){var a=!m.current.style.width;if(e.clientHeight<m.current.clientHeight&&a){var n="".concat(Object(P.a)(!0),"px");m.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=n,m.current.style.width="calc(100% + ".concat(n,")")}return m.current}}}),[]);var b=i.a.useCallback((function(e){m.current=f.a.findDOMNode(e)}),[]),v=Object(E.c)(b,t);return i.a.createElement(M.a,Object(s.a)({role:"menu",ref:v,className:o,onKeyDown:function(e){var t=m.current,a=e.key,n=Object(g.a)(t).activeElement;if("ArrowDown"===a)e.preventDefault(),V(t,n,d,T);else if("ArrowUp"===a)e.preventDefault(),V(t,n,d,H);else if("Home"===a)e.preventDefault(),V(t,null,d,T);else if("End"===a)e.preventDefault(),V(t,null,d,H);else if(1===a.length){var r=h.current,i=a.toLowerCase(),o=performance.now();r.keys.length>0&&(o-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&i!==r.keys[0]&&(r.repeating=!1)),r.lastTime=o,r.keys.push(i);var s=n&&!r.repeating&&D(n,r);r.previousKeyMatched&&(s||V(t,n,!1,T,r))?e.preventDefault():r.previousKeyMatched=!1}c&&c(e)},tabIndex:r?0:-1},p))})),W={vertical:"top",horizontal:"right"},A={vertical:"top",horizontal:"left"},G=i.a.forwardRef((function(e,t){var a=e.autoFocus,n=e.children,r=e.classes,o=e.disableAutoFocusItem,u=void 0!==o&&o,d=e.MenuListProps,p=void 0===d?{}:d,g=e.onClose,m=e.onEntering,h=e.open,b=e.PaperProps,v=void 0===b?{}:b,O=e.PopoverClasses,j=e.transitionDuration,w=void 0===j?"auto":j,S=e.variant,C=void 0===S?"selectedMenu":S,L=Object(l.a)(e,["autoFocus","children","classes","disableAutoFocusItem","MenuListProps","onClose","onEntering","open","PaperProps","PopoverClasses","transitionDuration","variant"]),x=Object(y.a)(),R=(void 0!==a?a:!u)&&h,k=i.a.useRef(null),z=i.a.useRef(null),I=i.a.useRef(null),M=null,P=null,T=i.a.Children.map(n,(function(e,t){if(!i.a.isValidElement(e))return null;null===M&&(M=t);var a=null;return"menu"!==C&&null===P&&e.props.selected&&!e.props.disabled?(P=t,a={},R&&(a.autoFocus=!0),void 0===e.props.tabIndex&&(a.tabIndex=0),a.ref=function(t){I.current=f.a.findDOMNode(t),Object(E.b)(e.ref,t)}):t===M&&(a={ref:function(t){z.current=f.a.findDOMNode(t),Object(E.b)(e.ref,t)}}),null!==a?i.a.cloneElement(e,a):e}));return i.a.createElement(N,Object(s.a)({getContentAnchorEl:function(){return I.current||z.current},classes:O,onClose:g,onEntering:function(e,t){k.current&&k.current.adjustStyleForScrollbar(e,x),m&&m(e,t)},anchorOrigin:"rtl"===x.direction?W:A,transformOrigin:"rtl"===x.direction?W:A,PaperProps:Object(s.a)({},v,{classes:Object(s.a)({},v.classes,{root:r.paper})}),open:h,ref:t,transitionDuration:w},L),i.a.createElement(F,Object(s.a)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),g&&g(e,"tabKeyDown"))},actions:k,autoFocus:R&&null===P},p,{className:Object(c.a)(r.list,p.className)}),T))})),q=Object(u.a)({paper:{maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"},list:{outline:0}},{name:"MuiMenu"})(G),K=a(310),B=i.a.forwardRef((function(e,t){var a,n=e.classes,r=e.className,o=e.component,u=void 0===o?"li":o,d=e.disableGutters,f=void 0!==d&&d,p=e.role,g=void 0===p?"menuitem":p,m=e.selected,h=e.tabIndex,b=Object(l.a)(e,["classes","className","component","disableGutters","role","selected","tabIndex"]);return e.disabled||(a=void 0!==h?h:-1),i.a.createElement(K.a,Object(s.a)({button:!0,role:g,tabIndex:a,component:u,selected:m,disableGutters:f,classes:{dense:n.dense},className:Object(c.a)(n.root,r,m&&n.selected,!f&&n.gutters),ref:t},b))})),U=Object(u.a)((function(e){return{root:Object(s.a)({},e.typography.subtitle1,{minHeight:48,paddingTop:4,paddingBottom:4,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"}),gutters:{paddingLeft:16,paddingRight:16},selected:{},dense:{minHeight:"auto"}}}),{name:"MuiMenuItem"})(B),J=a(319),X=a.n(J),Y=a(71);function Q(){var e=i.a.useState(null),t=e[0],a=e[1],r=function(){a(null)};return Object(n.a)("div",null,Object(n.a)(o.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},variant:"contained",color:"primary"},Object(n.a)(X.a,null)),Object(n.a)(q,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:r},Object(n.a)(U,{onClick:r},Object(n.a)(Y.a,{to:"/wiki/"},"feed")),Object(n.a)(U,{onClick:r},Object(n.a)(Y.a,{to:"/wiki/new"},"Recently published")),Object(n.a)(U,{onClick:r},Object(n.a)(Y.a,{to:"/wiki/short-story"},"Shortest time to read"))))}a.d(t,"a",(function(){return Q}))}}]);
//# sourceMappingURL=component---src-pages-wiki-short-story-js-167e0c2cbbc4e928627b.js.map