(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{268:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return S}));var i=a(3),r=(a(0),a(71)),n=a(317),s=a(263),o=a(314),l=a.n(o),c=a(348),d=a(307),u=a(261),f=a(349),g=a.n(f),p=(a(138),{name:"542elh",styles:"padding-top:10px;"}),m={name:"1fre8bs",styles:"@media screen and (max-width:700px){padding:0 !important;}"},h={name:"h9j6vo",styles:"@media screen and (max-width:700px){padding:10px;}"},b={name:"1h7c8qc",styles:"@media screen and (max-width:700px){box-shadow:none;border-radius:20px;}"},v={name:"12s3p1i",styles:"padding:1rem 1rem;background:#fff;@media screen and (max-width:700px){border-radius:20px;}"},y={name:"nn640c",styles:"text-decoration:none;color:inherit;"},x={name:"1ejj13w",styles:"font-family:'Rubik','Pyidaungsu',sans-serif;"};t.default=function(e){var t=e.data,a=t.markdownRemark,o=a.frontmatter.featuredImage.childImageSharp.fluid;return Object(i.a)(u.a,null,Object(i.a)(s.Helmet,{title:"MM Science | "+a.frontmatter.title}),Object(i.a)("div",{className:"row"},Object(i.a)("div",{className:"col-md-2"}),Object(i.a)("div",{className:"col-md-8 singal_content"},Object(i.a)("div",{className:"article"},Object(i.a)(l.a,{fluid:o,loading:"lazy"}),Object(i.a)("div",{className:"article__content"},Object(i.a)("h2",null,a.frontmatter.title),Object(i.a)("div",{className:"article_role_play"},Object(i.a)("div",{className:"article_owner"},Object(i.a)("img",{src:g.a,alt:"Nay Yaung Lin Lakk",className:"author__pic"})),Object(i.a)("div",{className:"article__profile"},Object(i.a)("span",{className:"article__name"},"MM Science"),Object(i.a)("div",null,Object(i.a)("span",{className:"article__meta"},a.frontmatter.date," · ",a.timeToRead," min read")))),Object(i.a)("div",{dangerouslySetInnerHTML:{__html:a.html}})))),Object(i.a)("div",{className:"col-md-2"})),Object(i.a)(d.a,{variant:"body2"},"Awesome articles"),Object(i.a)("div",{className:"other_stories"},Object(i.a)(c.a,{container:!0,spacing:3,css:p},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return Object(i.a)(c.a,{item:!0,xs:12,sm:4,key:t.id,css:m},Object(i.a)("div",{className:"blog__post__items"},Object(i.a)("div",{css:h},Object(i.a)(l.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid,css:b})),Object(i.a)("div",{css:v},Object(i.a)(r.a,{to:t.fields.slug,css:y},Object(i.a)(d.a,{variant:"body2",css:x},t.frontmatter.title),Object(i.a)(d.a,{paragraph:!0,style:{margin:"0"}},t.excerpt)),Object(i.a)("div",{className:"article__label"},Object(i.a)(n.a,{color:"success"},t.frontmatter.tags)),Object(i.a)("span",{className:"article__meta"},t.frontmatter.date," · ",t.timeToRead," min read"))))})))))};var S="181823322"},314:function(e,t,a){"use strict";a(9),a(8),a(6),a(58),a(115),a(192);var i=a(25);t.__esModule=!0,t.default=void 0;var r,n=i(a(116)),s=i(a(83)),o=i(a(191)),l=i(a(139)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),c.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function j(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+c+s+o+a+i+t+n+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=c.default.createElement(L,(0,l.default)({src:t},r));return a.length>1?c.default.createElement("picture",null,i(a),n):n},L=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,x=e.itemProp,j=e.loading,O=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,l.default)({opacity:N?1:0,transition:R?"opacity "+b+"ms":"none"},o),C="boolean"==typeof h?"lightgray":h,z={transitionDelay:b+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&z,{},o,{},f),M={title:t,alt:this.state.isVisible?"":a,style:k,className:g};if(p){var V=p,W=V[0];return c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),C&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&z)}),W.base64&&c.default.createElement(I,{src:W.base64,spreadProps:M,imageVariants:V,generateSources:w}),W.tracedSVG&&c.default.createElement(I,{src:W.tracedSVG,spreadProps:M,imageVariants:V,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(V),c.default.createElement(L,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:j,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:a,title:t,loading:j},W,{imageVariants:V}))}}))}if(m){var T=m,P=T[0],G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete G.display,c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},C&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:C,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},R&&z)}),P.base64&&c.default.createElement(I,{src:P.base64,spreadProps:M,imageVariants:T,generateSources:w}),P.tracedSVG&&c.default.createElement(I,{src:P.tracedSVG,spreadProps:M,imageVariants:T,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,y(T),c.default.createElement(L,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:j,draggable:O})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:a,title:t,loading:j},P,{imageVariants:T}))}}))}return null},t}(c.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),_=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});N.propTypes={resolutions:R,sizes:_,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([_,d.default.arrayOf(_)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var C=N;t.default=C},317:function(e,t,a){"use strict";var i=a(1),r=a(51),n=a(0),s=a.n(n),o=a(4),l=a.n(o),c=a(260),d=a.n(c),u=a(262),f={color:l.a.string,pill:l.a.bool,tag:u.c,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),children:l.a.node,className:l.a.string,cssModule:l.a.object},g=function(e){var t=e.className,a=e.cssModule,n=e.color,o=e.innerRef,l=e.pill,c=e.tag,f=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),g=Object(u.a)(d()(t,"badge","badge-"+n,!!l&&"badge-pill"),a);return f.href&&"span"===c&&(c="a"),s.a.createElement(c,Object(i.a)({},f,{className:g,ref:o}))};g.propTypes=f,g.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=g},348:function(e,t,a){"use strict";a(9),a(8),a(6),a(52),a(20),a(19);var i=a(2),r=a(1),n=a(0),s=a.n(n),o=(a(4),a(5)),l=a(7),c=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var f=s.a.forwardRef((function(e,t){var a=e.alignContent,n=void 0===a?"stretch":a,l=e.alignItems,c=void 0===l?"stretch":l,d=e.classes,u=e.className,f=e.component,g=void 0===f?"div":f,p=e.container,m=void 0!==p&&p,h=e.direction,b=void 0===h?"row":h,v=e.item,y=void 0!==v&&v,x=e.justify,S=void 0===x?"flex-start":x,w=e.lg,j=void 0!==w&&w,O=e.md,E=void 0!==O&&O,I=e.sm,L=void 0!==I&&I,N=e.spacing,R=void 0===N?0:N,_=e.wrap,C=void 0===_?"wrap":_,z=e.xl,k=void 0!==z&&z,M=e.xs,V=void 0!==M&&M,W=e.zeroMinWidth,T=void 0!==W&&W,P=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(o.a)(d.root,u,m&&[d.container,0!==R&&d["spacing-xs-".concat(String(R))]],y&&d.item,T&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==C&&d["wrap-xs-".concat(String(C))],"stretch"!==c&&d["align-items-xs-".concat(String(c))],"stretch"!==n&&d["align-content-xs-".concat(String(n))],"flex-start"!==S&&d["justify-xs-".concat(String(S))],!1!==V&&d["grid-xs-".concat(String(V))],!1!==L&&d["grid-sm-".concat(String(L))],!1!==E&&d["grid-md-".concat(String(E))],!1!==j&&d["grid-lg-".concat(String(j))],!1!==k&&d["grid-xl-".concat(String(k))]);return s.a.createElement(g,Object(r.a)({className:G,ref:t},P))}));var g=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return c.forEach((function(i){var r=e.spacing(i);0!==r&&(a["spacing-".concat(t,"-").concat(i)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),a}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var i={};d.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,i):e[t.breakpoints.up(a)]=i}(t,e,a),t}),{}))}),{name:"MuiGrid"})(f);t.a=g},349:function(e,t,a){e.exports=a.p+"static/mmscience-ea23dc361d86b9af96a0a6e5d4a916f2.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ed0f55cc709d9d1c4dd2.js.map