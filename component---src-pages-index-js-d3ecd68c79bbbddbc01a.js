(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{281:function(e,t,a){"use strict";a.r(t);var r=a(3),n=(a(0),a(71)),i=a(317),s=a(314),o=a.n(s),c=a(263),d=a(307),l=a(348),u=(a(323),a(261));a.d(t,"query",(function(){return v}));var f={name:"542elh",styles:"padding-top:10px;"},g={name:"1fre8bs",styles:"@media screen and (max-width:700px){padding:0 !important;}"},p={name:"h9j6vo",styles:"@media screen and (max-width:700px){padding:10px;}"},m={name:"1h7c8qc",styles:"@media screen and (max-width:700px){box-shadow:none;border-radius:20px;}"},h={name:"12s3p1i",styles:"padding:1rem 1rem;background:#fff;@media screen and (max-width:700px){border-radius:20px;}"},x={name:"nn640c",styles:"text-decoration:none;color:inherit;"},b={name:"1ejj13w",styles:"font-family:'Rubik','Pyidaungsu',sans-serif;"},v=(t.default=function(e){var t=e.data;return Object(r.a)(u.a,null,Object(r.a)(c.Helmet,{title:"MM Science | A Online Library website for Myanmar Education"}),Object(r.a)("div",null,Object(r.a)(d.a,{variant:"h6"},"Feature articles")),Object(r.a)(l.a,{container:!0,spacing:3,css:f},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return Object(r.a)(l.a,{item:!0,xs:12,sm:4,key:t.id,css:g},Object(r.a)("div",{className:"blog__post__items"},Object(r.a)("div",{css:p},Object(r.a)(o.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid,css:m})),Object(r.a)("div",{css:h},Object(r.a)(n.a,{to:t.fields.slug,css:x},Object(r.a)(d.a,{variant:"body1",css:b},t.frontmatter.title),Object(r.a)(d.a,{paragraph:!0,style:{margin:"0"}},t.excerpt)),Object(r.a)("div",{className:"article__label"},Object(r.a)(i.a,{color:"success"},t.frontmatter.tags)),Object(r.a)("span",{className:"article__meta"},t.frontmatter.date," · ",t.timeToRead," min read"))))}))))},"2205513086")},314:function(e,t,a){"use strict";a(9),a(8),a(6),a(58),a(115),a(192);var r=a(25);t.__esModule=!0,t.default=void 0;var n,i=r(a(116)),s=r(a(83)),o=r(a(191)),c=r(a(139)),d=r(a(0)),l=r(a(4)),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,x=h&&window.IntersectionObserver,b=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+d+s+o+a+r+t+i+n+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(L,(0,c.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},L=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,l=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:n},g,{onLoad:s,onError:l,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&x&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,l=e.placeholderStyle,f=void 0===l?{}:l,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,x=e.durationFadeIn,b=e.Tag,y=e.itemProp,j=e.loading,O=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,c.default)({opacity:R?1:0,transition:z?"opacity "+x+"ms":"none"},o),N="boolean"==typeof h?"lightgray":h,T={transitionDelay:x+"ms"},V=(0,c.default)({opacity:this.state.imgLoaded?0:1},z&&T,{},o,{},f),k={title:t,alt:this.state.isVisible?"":a,style:V,className:g};if(p){var M=p,A=M[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),N&&d.default.createElement(b,{title:t,style:(0,c.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&T)}),A.base64&&d.default.createElement(I,{src:A.base64,spreadProps:k,imageVariants:M,generateSources:w}),A.tracedSVG&&d.default.createElement(I,{src:A.tracedSVG,spreadProps:k,imageVariants:M,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(M),d.default.createElement(L,{alt:a,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:j,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,c.default)({alt:a,title:t,loading:j},A,{imageVariants:M}))}}))}if(m){var W=m,_=W[0],G=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},i);return"inherit"===i.display&&delete G.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},N&&d.default.createElement(b,{title:t,style:(0,c.default)({backgroundColor:N,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},z&&T)}),_.base64&&d.default.createElement(I,{src:_.base64,spreadProps:k,imageVariants:W,generateSources:w}),_.tracedSVG&&d.default.createElement(I,{src:_.tracedSVG,spreadProps:k,imageVariants:W,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(W),d.default.createElement(L,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:j,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,c.default)({alt:a,title:t,loading:j},_,{imageVariants:W}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),C=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});R.propTypes={resolutions:z,sizes:C,fixed:l.default.oneOfType([z,l.default.arrayOf(z)]),fluid:l.default.oneOfType([C,l.default.arrayOf(C)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var N=R;t.default=N},316:function(e,t,a){var r=a(330).Symbol;e.exports=r},317:function(e,t,a){"use strict";var r=a(1),n=a(51),i=a(0),s=a.n(i),o=a(4),c=a.n(o),d=a(260),l=a.n(d),u=a(262),f={color:c.a.string,pill:c.a.bool,tag:u.c,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},g=function(e){var t=e.className,a=e.cssModule,i=e.color,o=e.innerRef,c=e.pill,d=e.tag,f=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),g=Object(u.a)(l()(t,"badge","badge-"+i,!!c&&"badge-pill"),a);return f.href&&"span"===d&&(d="a"),s.a.createElement(d,Object(r.a)({},f,{className:g,ref:o}))};g.propTypes=f,g.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=g},318:function(e,t,a){var r=a(329);e.exports=function(e){return null==e?"":r(e)}},323:function(e,t,a){var r=a(324)((function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}));e.exports=r},324:function(e,t,a){a(20),a(114);var r=a(325),n=a(326),i=a(339),s=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(n(t).replace(s,"")),e,"")}}},325:function(e,t){e.exports=function(e,t,a,r){var n=-1,i=null==e?0:e.length;for(r&&i&&(a=e[++n]);++n<i;)a=t(a,e[n],n,e);return a}},326:function(e,t,a){a(20),a(114);var r=a(327),n=a(318),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,s=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=n(e))&&e.replace(i,r).replace(s,"")}},327:function(e,t,a){var r=a(328)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},328:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},329:function(e,t,a){a(31),a(35),a(6);var r=a(316),n=a(332),i=a(333),s=a(334),o=1/0,c=r?r.prototype:void 0,d=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return n(t,e)+"";if(s(t))return d?d.call(t):"";var a=t+"";return"0"==a&&1/t==-o?"-0":a}},330:function(e,t,a){var r=a(331),n="object"==typeof self&&self&&self.Object===Object&&self,i=r||n||Function("return this")();e.exports=i},331:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a(141))},332:function(e,t){e.exports=function(e,t){for(var a=-1,r=null==e?0:e.length,n=Array(r);++a<r;)n[a]=t(e[a],a,e);return n}},333:function(e,t,a){a(23);var r=Array.isArray;e.exports=r},334:function(e,t,a){var r=a(335),n=a(338),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||n(e)&&r(e)==i}},335:function(e,t,a){var r=a(316),n=a(336),i=a(337),s="[object Null]",o="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?o:s:c&&c in Object(e)?n(e):i(e)}},336:function(e,t,a){a(31),a(35),a(6);var r=a(316),n=Object.prototype,i=n.hasOwnProperty,s=n.toString,o=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,o),a=e[o];try{e[o]=void 0;var r=!0}catch(c){}var n=s.call(e);return r&&(t?e[o]=a:delete e[o]),n}},337:function(e,t,a){a(31),a(35),a(6);var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},338:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},339:function(e,t,a){a(72);var r=a(340),n=a(341),i=a(318),s=a(342);e.exports=function(e,t,a){return e=i(e),void 0===(t=a?void 0:t)?n(e)?s(e):r(e):e.match(t)||[]}},340:function(e,t,a){a(72);var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},341:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},342:function(e,t,a){a(72),a(114);var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+r+"]",i="\\d+",s="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+r+i+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",u="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+o+"|"+c+")",g="(?:"+u+"|"+c+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,l].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),h="(?:"+[s,d,l].join("|")+")"+m,x=RegExp([u+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,u,"$"].join("|")+")",g+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,u+f,"$"].join("|")+")",u+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",u+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,h].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},348:function(e,t,a){"use strict";a(9),a(8),a(6),a(52),a(20),a(19);var r=a(2),n=a(1),i=a(0),s=a.n(i),o=(a(4),a(5)),c=a(7),d=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var f=s.a.forwardRef((function(e,t){var a=e.alignContent,i=void 0===a?"stretch":a,c=e.alignItems,d=void 0===c?"stretch":c,l=e.classes,u=e.className,f=e.component,g=void 0===f?"div":f,p=e.container,m=void 0!==p&&p,h=e.direction,x=void 0===h?"row":h,b=e.item,v=void 0!==b&&b,y=e.justify,S=void 0===y?"flex-start":y,w=e.lg,j=void 0!==w&&w,O=e.md,E=void 0!==O&&O,I=e.sm,L=void 0!==I&&I,R=e.spacing,z=void 0===R?0:R,C=e.wrap,N=void 0===C?"wrap":C,T=e.xl,V=void 0!==T&&T,k=e.xs,M=void 0!==k&&k,A=e.zeroMinWidth,W=void 0!==A&&A,_=Object(r.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(o.a)(l.root,u,m&&[l.container,0!==z&&l["spacing-xs-".concat(String(z))]],v&&l.item,W&&l.zeroMinWidth,"row"!==x&&l["direction-xs-".concat(String(x))],"wrap"!==N&&l["wrap-xs-".concat(String(N))],"stretch"!==d&&l["align-items-xs-".concat(String(d))],"stretch"!==i&&l["align-content-xs-".concat(String(i))],"flex-start"!==S&&l["justify-xs-".concat(String(S))],!1!==M&&l["grid-xs-".concat(String(M))],!1!==L&&l["grid-sm-".concat(String(L))],!1!==E&&l["grid-md-".concat(String(E))],!1!==j&&l["grid-lg-".concat(String(j))],!1!==V&&l["grid-xl-".concat(String(V))]);return s.a.createElement(g,Object(n.a)({className:G,ref:t},_))}));var g=Object(c.a)((function(e){return Object(n.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return d.forEach((function(r){var n=e.spacing(r);0!==n&&(a["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(u(n,2)),width:"calc(100% + ".concat(u(n),")"),"& > $item":{padding:u(n,2)}})})),a}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var r={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var n="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:n,flexGrow:0,maxWidth:n}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(n.a)(e,r):e[t.breakpoints.up(a)]=r}(t,e,a),t}),{}))}),{name:"MuiGrid"})(f);t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-js-d3ecd68c79bbbddbc01a.js.map