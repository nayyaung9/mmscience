(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{277:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return y}));var n=a(3),r=(a(0),a(71)),i=a(263),o=a(261),s=a(320),l=a(317),c=a(314),d=a.n(c),u=(a(138),a(307)),f=a(348),p={name:"1fre8bs",styles:"@media screen and (max-width:700px){padding:0 !important;}"},g={name:"h9j6vo",styles:"@media screen and (max-width:700px){padding:10px;}"},m={name:"1h7c8qc",styles:"@media screen and (max-width:700px){box-shadow:none;border-radius:20px;}"},h={name:"12s3p1i",styles:"padding:1rem 1rem;background:#fff;@media screen and (max-width:700px){border-radius:20px;}"},b={name:"nn640c",styles:"text-decoration:none;color:inherit;"},v={name:"1ejj13w",styles:"font-family:'Rubik','Pyidaungsu',sans-serif;"};t.default=function(e){var t=e.data;return Object(n.a)(o.a,null,Object(n.a)(i.Helmet,{title:t.site.siteMetadata.title}),Object(n.a)("div",{className:"reading_type_style"},Object(n.a)(s.a,{type:"select reading style"})),Object(n.a)(f.a,{container:!0,spacing:3},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return Object(n.a)(f.a,{item:!0,xs:12,sm:4,key:t.id,css:p},Object(n.a)("div",{className:"blog__post__items"},Object(n.a)("div",{css:g},Object(n.a)(d.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid,css:m})),Object(n.a)("div",{css:h},Object(n.a)(r.a,{to:t.fields.slug,css:b},Object(n.a)(u.a,{variant:"body2",css:v},t.frontmatter.title),Object(n.a)(u.a,{paragraph:!0,style:{margin:"0"}},t.excerpt)),Object(n.a)("div",{className:"article__label"},Object(n.a)(l.a,{color:"success"},t.frontmatter.tags)),Object(n.a)("span",{className:"article__meta"},t.frontmatter.date," · ",t.timeToRead," min read"))))}))))};var y="3986637496"},314:function(e,t,a){"use strict";a(9),a(8),a(6),a(58),a(115),a(192);var n=a(25);t.__esModule=!0,t.default=void 0;var r,i=n(a(116)),o=n(a(83)),s=n(a(191)),l=n(a(139)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),c.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function j(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var E=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},S=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+c+o+s+a+n+t+i+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=c.default.createElement(L,(0,l.default)({src:t},r));return a.length>1?c.default.createElement("picture",null,n(a),i):i},L=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,x=e.itemProp,j=e.loading,E=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:R?1:0,transition:k?"opacity "+b+"ms":"none"},s),I="boolean"==typeof h?"lightgray":h,M={transitionDelay:b+"ms"},N=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&M,{},s,{},f),P={title:t,alt:this.state.isVisible?"":a,style:N,className:p};if(g){var T=g,D=T[0];return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),I&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&M)}),D.base64&&c.default.createElement(C,{src:D.base64,spreadProps:P,imageVariants:T,generateSources:w}),D.tracedSVG&&c.default.createElement(C,{src:D.tracedSVG,spreadProps:P,imageVariants:T,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,y(T),c.default.createElement(L,{alt:a,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:j,draggable:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,l.default)({alt:a,title:t,loading:j},D,{imageVariants:T}))}}))}if(m){var H=m,W=H[0],V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete V.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},I&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},k&&M)}),W.base64&&c.default.createElement(C,{src:W.base64,spreadProps:P,imageVariants:H,generateSources:w}),W.tracedSVG&&c.default.createElement(C,{src:W.tracedSVG,spreadProps:P,imageVariants:H,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,y(H),c.default.createElement(L,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:j,draggable:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,l.default)({alt:a,title:t,loading:j},W,{imageVariants:H}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),z=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:k,sizes:z,fixed:d.default.oneOfType([k,d.default.arrayOf(k)]),fluid:d.default.oneOfType([z,d.default.arrayOf(z)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var I=R;t.default=I},317:function(e,t,a){"use strict";var n=a(1),r=a(51),i=a(0),o=a.n(i),s=a(4),l=a.n(s),c=a(260),d=a.n(c),u=a(262),f={color:l.a.string,pill:l.a.bool,tag:u.c,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),children:l.a.node,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,i=e.color,s=e.innerRef,l=e.pill,c=e.tag,f=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(u.a)(d()(t,"badge","badge-"+i,!!l&&"badge-pill"),a);return f.href&&"span"===c&&(c="a"),o.a.createElement(c,Object(n.a)({},f,{className:p,ref:s}))};p.propTypes=f,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},319:function(e,t,a){"use strict";a(36);var n=a(25);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=(0,n(a(74)).default)(r.default.createElement("path",{d:"M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"}),"FormatLineSpacing");t.default=i},320:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r),o=a(308),s=(a(18),a(1)),l=a(2),c=(a(4),a(5)),d=a(7),u=a(16),f=a.n(u),p=a(142),g=a(48),m=a(143),h=a(12),b=a(312),v=a(313),y=a(73),x=a(55),O=a(17);function w(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var j={entering:{opacity:1,transform:w(1)},entered:{opacity:1,transform:"none"}},E=i.a.forwardRef((function(e,t){var a=e.children,n=e.in,r=e.onEnter,o=e.onExit,c=e.style,d=e.timeout,u=void 0===d?"auto":d,f=Object(l.a)(e,["children","in","onEnter","onExit","style","timeout"]),p=i.a.useRef(),g=i.a.useRef(),m=Object(O.c)(a.ref,t),h=Object(y.a)();return i.a.useEffect((function(){return function(){clearTimeout(p.current)}}),[]),i.a.createElement(v.a,Object(s.a)({appear:!0,in:n,onEnter:function(e,t){Object(x.b)(e);var a,n=Object(x.a)({style:c,timeout:u},{mode:"enter"}),i=n.duration,o=n.delay;"auto"===u?(a=h.transitions.getAutoHeightDuration(e.clientHeight),g.current=a):a=i,e.style.transition=[h.transitions.create("opacity",{duration:a,delay:o}),h.transitions.create("transform",{duration:.666*a,delay:o})].join(","),r&&r(e,t)},onExit:function(e){var t,a=Object(x.a)({style:c,timeout:u},{mode:"exit"}),n=a.duration,r=a.delay;"auto"===u?(t=h.transitions.getAutoHeightDuration(e.clientHeight),g.current=t):t=n,e.style.transition=[h.transitions.create("opacity",{duration:t,delay:r}),h.transitions.create("transform",{duration:.666*t,delay:r||.333*t})].join(","),e.style.opacity="0",e.style.transform=w(.75),o&&o(e)},addEndListener:function(e,t){"auto"===u&&(p.current=setTimeout(t,g.current||0))},timeout:"auto"===u?null:u},f),(function(e,t){return i.a.cloneElement(a,Object(s.a)({style:Object(s.a)({opacity:0,transform:w(.75),visibility:"exited"!==e||n?void 0:"hidden"},j[e],{},c,{},a.props.style),ref:m},t))}))}));E.muiSupportAuto=!0;var S=E,C=a(305);function L(e,t){var a=0;return"number"==typeof t?a=t:"center"===t?a=e.height/2:"bottom"===t&&(a=e.height),a}function R(e,t){var a=0;return"number"==typeof t?a=t:"center"===t?a=e.width/2:"right"===t&&(a=e.width),a}function k(e){return[e.horizontal,e.vertical].map((function(e){return"number"==typeof e?"".concat(e,"px"):e})).join(" ")}function z(e){return"function"==typeof e?e():e}var I=i.a.forwardRef((function(e,t){var a=e.action,n=e.anchorEl,r=e.anchorOrigin,o=void 0===r?{vertical:"top",horizontal:"left"}:r,d=e.anchorPosition,u=e.anchorReference,v=void 0===u?"anchorEl":u,y=e.children,x=e.classes,O=e.container,w=e.elevation,j=void 0===w?8:w,E=e.getContentAnchorEl,I=e.marginThreshold,M=void 0===I?16:I,N=e.ModalClasses,P=e.onEnter,T=e.onEntered,D=e.onEntering,H=e.onExit,W=e.onExited,V=e.onExiting,_=e.open,F=e.PaperProps,G=void 0===F?{}:F,A=e.transformOrigin,B=void 0===A?{vertical:"top",horizontal:"left"}:A,q=e.TransitionComponent,K=void 0===q?S:q,U=e.transitionDuration,J=void 0===U?"auto":U,X=e.TransitionProps,Y=void 0===X?{}:X,$=Object(l.a)(e,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","container","elevation","getContentAnchorEl","marginThreshold","ModalClasses","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),Q=i.a.useRef(),Z=i.a.useCallback((function(e){if("anchorPosition"===v)return d;var t=z(n),a=(t instanceof Object(m.a)(t).Element?t:Object(g.a)(Q.current).body).getBoundingClientRect(),r=0===e?o.vertical:"center";return{top:a.top+L(a,r),left:a.left+R(a,o.horizontal)}}),[n,o.horizontal,o.vertical,d,v]),ee=i.a.useCallback((function(e){var t=0;if(E&&"anchorEl"===v){var a=E(e);if(a&&e.contains(a)){var n=function(e,t){for(var a=t,n=0;a&&a!==e;)n+=(a=a.parentNode).scrollTop;return n}(e,a);t=a.offsetTop+a.clientHeight/2-n||0}0}return t}),[o.vertical,v,E]),te=i.a.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:L(e,B.vertical)+t,horizontal:R(e,B.horizontal)}}),[B.horizontal,B.vertical]),ae=i.a.useCallback((function(e){var t=ee(e),a={width:e.offsetWidth,height:e.offsetHeight},r=te(a,t);if("none"===v)return{top:null,left:null,transformOrigin:k(r)};var i=Z(t),o=i.top-r.vertical,s=i.left-r.horizontal,l=o+a.height,c=s+a.width,d=Object(m.a)(z(n)),u=d.innerHeight-M,f=d.innerWidth-M;if(o<M){var p=o-M;o-=p,r.vertical+=p}else if(l>u){var g=l-u;o-=g,r.vertical+=g}if(s<M){var h=s-M;s-=h,r.horizontal+=h}else if(c>f){var b=c-f;s-=b,r.horizontal+=b}return{top:"".concat(o,"px"),left:"".concat(s,"px"),transformOrigin:k(r)}}),[n,v,Z,ee,te,M]),ne=i.a.useCallback((function(e){var t=ae(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}),[ae]),re=i.a.useCallback((function(e){Q.current=f.a.findDOMNode(e)}),[]),ie=i.a.useMemo((function(){if(_)return Object(p.a)((function(){ne(Q.current)}))}),[_,ne]);i.a.useImperativeHandle(a,(function(){return _?{updatePosition:ie}:null}),[_,ie]),i.a.useEffect((function(){if(ie)return window.addEventListener("resize",ie),function(){window.removeEventListener("resize",ie),ie.clear()}}),[ie]);var oe=J;"auto"!==J||K.muiSupportAuto||(oe=void 0);var se=O||(n?Object(g.a)(z(n)).body:void 0);return i.a.createElement(b.a,Object(s.a)({classes:N,container:se,open:_,ref:t,BackdropProps:{invisible:!0}},$),i.a.createElement(K,Object(s.a)({appear:!0,in:_,onEnter:P,onEntered:T,onExit:H,onExited:W,onExiting:V,timeout:oe},Y,{onEntering:Object(h.b)((function(e,t){D&&D(e,t),ne(e)}),Y.onEntering)}),i.a.createElement(C.a,Object(s.a)({elevation:j,ref:re},G,{className:Object(c.a)(x.paper,G.className)}),y)))})),M=Object(d.a)({paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(I),N=(a(11),a(9),a(8),a(6),a(99),a(309)),P=a(144);function T(e,t,a){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:a?null:e.firstChild}function D(e,t,a){return e===t?a?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:a?null:e.lastChild}function H(e,t){if(void 0===t)return!0;var a=e.innerText;return void 0===a&&(a=e.textContent),void 0!==a&&(0!==(a=a.trim().toLowerCase()).length&&(t.repeating?a[0]===t.keys[0]:0===a.indexOf(t.keys.join(""))))}function W(e,t,a,n,r){for(var i=!1,o=n(e,t,!!t&&a);o;){if(o===e.firstChild){if(i)return!1;i=!0}if(o.hasAttribute("tabindex")&&!o.disabled&&"true"!==o.getAttribute("aria-disabled")&&H(o,r))return o.focus(),!0;o=n(e,o,a)}return!1}var V="undefined"==typeof window?i.a.useEffect:i.a.useLayoutEffect,_=i.a.forwardRef((function(e,t){var a=e.actions,n=e.autoFocus,r=void 0!==n&&n,o=e.className,c=e.onKeyDown,d=e.disableListWrap,u=void 0!==d&&d,p=Object(l.a)(e,["actions","autoFocus","className","onKeyDown","disableListWrap"]),m=i.a.useRef(null),h=i.a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});V((function(){r&&m.current.focus()}),[r]),i.a.useImperativeHandle(a,(function(){return{adjustStyleForScrollbar:function(e,t){var a=!m.current.style.width;if(e.clientHeight<m.current.clientHeight&&a){var n="".concat(Object(P.a)(!0),"px");m.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=n,m.current.style.width="calc(100% + ".concat(n,")")}return m.current}}}),[]);var b=i.a.useCallback((function(e){m.current=f.a.findDOMNode(e)}),[]),v=Object(O.c)(b,t);return i.a.createElement(N.a,Object(s.a)({role:"menu",ref:v,className:o,onKeyDown:function(e){var t=m.current,a=e.key,n=Object(g.a)(t).activeElement;if("ArrowDown"===a)e.preventDefault(),W(t,n,u,T);else if("ArrowUp"===a)e.preventDefault(),W(t,n,u,D);else if("Home"===a)e.preventDefault(),W(t,null,u,T);else if("End"===a)e.preventDefault(),W(t,null,u,D);else if(1===a.length){var r=h.current,i=a.toLowerCase(),o=performance.now();r.keys.length>0&&(o-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&i!==r.keys[0]&&(r.repeating=!1)),r.lastTime=o,r.keys.push(i);var s=n&&!r.repeating&&H(n,r);r.previousKeyMatched&&(s||W(t,n,!1,T,r))?e.preventDefault():r.previousKeyMatched=!1}c&&c(e)},tabIndex:r?0:-1},p))})),F={vertical:"top",horizontal:"right"},G={vertical:"top",horizontal:"left"},A=i.a.forwardRef((function(e,t){var a=e.autoFocus,n=e.children,r=e.classes,o=e.disableAutoFocusItem,d=void 0!==o&&o,u=e.MenuListProps,p=void 0===u?{}:u,g=e.onClose,m=e.onEntering,h=e.open,b=e.PaperProps,v=void 0===b?{}:b,x=e.PopoverClasses,w=e.transitionDuration,j=void 0===w?"auto":w,E=e.variant,S=void 0===E?"selectedMenu":E,C=Object(l.a)(e,["autoFocus","children","classes","disableAutoFocusItem","MenuListProps","onClose","onEntering","open","PaperProps","PopoverClasses","transitionDuration","variant"]),L=Object(y.a)(),R=(void 0!==a?a:!d)&&h,k=i.a.useRef(null),z=i.a.useRef(null),I=i.a.useRef(null),N=null,P=null,T=i.a.Children.map(n,(function(e,t){if(!i.a.isValidElement(e))return null;null===N&&(N=t);var a=null;return"menu"!==S&&null===P&&e.props.selected&&!e.props.disabled?(P=t,a={},R&&(a.autoFocus=!0),void 0===e.props.tabIndex&&(a.tabIndex=0),a.ref=function(t){I.current=f.a.findDOMNode(t),Object(O.b)(e.ref,t)}):t===N&&(a={ref:function(t){z.current=f.a.findDOMNode(t),Object(O.b)(e.ref,t)}}),null!==a?i.a.cloneElement(e,a):e}));return i.a.createElement(M,Object(s.a)({getContentAnchorEl:function(){return I.current||z.current},classes:x,onClose:g,onEntering:function(e,t){k.current&&k.current.adjustStyleForScrollbar(e,L),m&&m(e,t)},anchorOrigin:"rtl"===L.direction?F:G,transformOrigin:"rtl"===L.direction?F:G,PaperProps:Object(s.a)({},v,{classes:Object(s.a)({},v.classes,{root:r.paper})}),open:h,ref:t,transitionDuration:j},C),i.a.createElement(_,Object(s.a)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),g&&g(e,"tabKeyDown"))},actions:k,autoFocus:R&&null===P},p,{className:Object(c.a)(r.list,p.className)}),T))})),B=Object(d.a)({paper:{maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"},list:{outline:0}},{name:"MuiMenu"})(A),q=a(310),K=i.a.forwardRef((function(e,t){var a,n=e.classes,r=e.className,o=e.component,d=void 0===o?"li":o,u=e.disableGutters,f=void 0!==u&&u,p=e.role,g=void 0===p?"menuitem":p,m=e.selected,h=e.tabIndex,b=Object(l.a)(e,["classes","className","component","disableGutters","role","selected","tabIndex"]);return e.disabled||(a=void 0!==h?h:-1),i.a.createElement(q.a,Object(s.a)({button:!0,role:g,tabIndex:a,component:d,selected:m,disableGutters:f,classes:{dense:n.dense},className:Object(c.a)(n.root,r,m&&n.selected,!f&&n.gutters),ref:t},b))})),U=Object(d.a)((function(e){return{root:Object(s.a)({},e.typography.subtitle1,{minHeight:48,paddingTop:4,paddingBottom:4,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"}),gutters:{paddingLeft:16,paddingRight:16},selected:{},dense:{minHeight:"auto"}}}),{name:"MuiMenuItem"})(K),J=a(319),X=a.n(J),Y=a(71);function $(){var e=i.a.useState(null),t=e[0],a=e[1],r=function(){a(null)};return Object(n.a)("div",null,Object(n.a)(o.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},variant:"contained",color:"primary"},Object(n.a)(X.a,null)),Object(n.a)(B,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:r},Object(n.a)(U,{onClick:r},Object(n.a)(Y.a,{to:"/wiki/"},"feed")),Object(n.a)(U,{onClick:r},Object(n.a)(Y.a,{to:"/wiki/new"},"Recently published")),Object(n.a)(U,{onClick:r},Object(n.a)(Y.a,{to:"/wiki/short-story"},"Shortest time to read"))))}a.d(t,"a",(function(){return $}))},348:function(e,t,a){"use strict";a(9),a(8),a(6),a(52),a(20),a(19);var n=a(2),r=a(1),i=a(0),o=a.n(i),s=(a(4),a(5)),l=a(7),c=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var f=o.a.forwardRef((function(e,t){var a=e.alignContent,i=void 0===a?"stretch":a,l=e.alignItems,c=void 0===l?"stretch":l,d=e.classes,u=e.className,f=e.component,p=void 0===f?"div":f,g=e.container,m=void 0!==g&&g,h=e.direction,b=void 0===h?"row":h,v=e.item,y=void 0!==v&&v,x=e.justify,O=void 0===x?"flex-start":x,w=e.lg,j=void 0!==w&&w,E=e.md,S=void 0!==E&&E,C=e.sm,L=void 0!==C&&C,R=e.spacing,k=void 0===R?0:R,z=e.wrap,I=void 0===z?"wrap":z,M=e.xl,N=void 0!==M&&M,P=e.xs,T=void 0!==P&&P,D=e.zeroMinWidth,H=void 0!==D&&D,W=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),V=Object(s.a)(d.root,u,m&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],y&&d.item,H&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==c&&d["align-items-xs-".concat(String(c))],"stretch"!==i&&d["align-content-xs-".concat(String(i))],"flex-start"!==O&&d["justify-xs-".concat(String(O))],!1!==T&&d["grid-xs-".concat(String(T))],!1!==L&&d["grid-sm-".concat(String(L))],!1!==S&&d["grid-md-".concat(String(S))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==N&&d["grid-xl-".concat(String(N))]);return o.a.createElement(p,Object(r.a)({className:V,ref:t},W))}));var p=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return c.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),a}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};d.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(f);t.a=p}}]);
//# sourceMappingURL=component---src-pages-wiki-js-7fd674fdf34491b17ec6.js.map