(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{267:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var r=a(3),i=(a(0),a(98)),s=a(314),n=a(262),o=a(311),l=a.n(o),d=a(260),c=a(324),u=a.n(c),f=(a(137),{name:"7hyyom",styles:"box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.25rem;cursor:pointer;margin-bottom:20px;background-color:#fff;"}),g={name:"nn640c",styles:"text-decoration:none;color:inherit;"};t.default=function(e){var t=e.data,a=t.markdownRemark,o=a.frontmatter.featuredImage.childImageSharp.fluid;return Object(r.a)(d.a,null,Object(r.a)(n.Helmet,{title:"MM Science | "+a.frontmatter.title}),Object(r.a)("div",{className:"row"},Object(r.a)("div",{className:"col-md-2"}),Object(r.a)("div",{className:"col-md-8 singal_content"},Object(r.a)("div",{className:"article"},Object(r.a)(l.a,{fluid:o,loading:"lazy"}),Object(r.a)("div",{className:"article__content"},Object(r.a)("h2",null,a.frontmatter.title),Object(r.a)("div",{className:"article_role_play"},Object(r.a)("div",{className:"article_owner"},Object(r.a)("img",{src:u.a,alt:"Nay Yaung Lin Lakk",className:"author__pic"})),Object(r.a)("div",{className:"article__profile"},Object(r.a)("span",{className:"article__name"},"MM Science"),Object(r.a)("div",null,Object(r.a)("span",{className:"article__meta"},a.frontmatter.date," · ",a.timeToRead," min read")))),Object(r.a)("div",{dangerouslySetInnerHTML:{__html:a.html}})))),Object(r.a)("div",{className:"col-md-2"})),Object(r.a)("div",{className:"other_stories"},Object(r.a)("div",{className:"row"},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return Object(r.a)("div",{className:"col-md-4",key:t.id},Object(r.a)("div",{css:f},Object(r.a)(l.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid,className:"content__image"}),Object(r.a)("div",{className:"content__spaces"},Object(r.a)(i.a,{to:t.fields.slug,css:g},Object(r.a)("h5",{className:"content__header"},t.frontmatter.title)),t.frontmatter.tags.length>1?Object(r.a)(s.a,{color:"success"},t.frontmatter.tags.join(" ")):Object(r.a)(s.a,{color:"success"},t.frontmatter.tags)," ",Object(r.a)("br",null),Object(r.a)("span",{className:"article__meta"},t.frontmatter.date," · ",t.timeToRead," min read"))))})))))};var m="181823322"},311:function(e,t,a){"use strict";a(10),a(8),a(6),a(56),a(114),a(312);var r=a(25);t.__esModule=!0,t.default=void 0;var i,s=r(a(115)),n=r(a(82)),o=r(a(191)),l=r(a(138)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),m=function(e){var t=u(e),a=f(t);return g[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),d.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var E=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+n+o+a+r+t+s+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=d.default.createElement(I,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),s):s},I=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},g,{onLoad:n,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var _=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,E=e.draggable,_=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:_?1:0,transition:R?"opacity "+b+"ms":"none"},o),V="boolean"==typeof h?"lightgray":h,k={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&k,{},o,{},f),x={title:t,alt:this.state.isVisible?"":a,style:T,className:g};if(m){var C=m,M=C[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),V&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&k)}),M.base64&&d.default.createElement(N,{src:M.base64,spreadProps:x,imageVariants:C,generateSources:j}),M.tracedSVG&&d.default.createElement(N,{src:M.tracedSVG,spreadProps:x,imageVariants:C,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,v(C),d.default.createElement(I,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:w},M,{imageVariants:C}))}}))}if(p){var P=p,q=P[0],W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},s);return"inherit"===s.display&&delete W.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},V&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:V,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},R&&k)}),q.base64&&d.default.createElement(N,{src:q.base64,spreadProps:x,imageVariants:P,generateSources:j}),q.tracedSVG&&d.default.createElement(N,{src:q.tracedSVG,spreadProps:x,imageVariants:P,generateSources:O}),this.state.isVisible&&d.default.createElement("picture",null,v(P),d.default.createElement(I,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:E})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:w},q,{imageVariants:P}))}}))}return null},t}(d.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});_.propTypes={resolutions:R,sizes:z,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=_;t.default=V},312:function(e,t,a){"use strict";a(139)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},314:function(e,t,a){"use strict";var r=a(1),i=a(50),s=a(0),n=a.n(s),o=a(4),l=a.n(o),d=a(259),c=a.n(d),u=a(261),f={color:l.a.string,pill:l.a.bool,tag:u.c,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),children:l.a.node,className:l.a.string,cssModule:l.a.object},g=function(e){var t=e.className,a=e.cssModule,s=e.color,o=e.innerRef,l=e.pill,d=e.tag,f=Object(i.a)(e,["className","cssModule","color","innerRef","pill","tag"]),g=Object(u.a)(c()(t,"badge","badge-"+s,!!l&&"badge-pill"),a);return f.href&&"span"===d&&(d="a"),n.a.createElement(d,Object(r.a)({},f,{className:g,ref:o}))};g.propTypes=f,g.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=g},324:function(e,t,a){e.exports=a.p+"static/mmscience-ea23dc361d86b9af96a0a6e5d4a916f2.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d173be4bae65dcf13736.js.map