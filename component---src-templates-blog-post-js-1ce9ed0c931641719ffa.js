(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{188:function(e,t,a){"use strict";a.r(t);a(17);var r=a(0),i=a.n(r),n=a(191),o=(a(200),a(204)),s=a(205),l=a.n(s),c=a(189),d=function(){var e=o.data,t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",{className:"PostFooterBody"},"Thank you very much for making it this far!",i.a.createElement("br",null),"For a quick comment, ",i.a.createElement("a",{href:"https://twitter.com/"+r.twitter,rel:"noopener noreferrer",target:"_blank"},"feel free to reach out to me on Twitter"),"."))},u=a(195),f=a(193);a(196),a(183);a.d(t,"pageQuery",function(){return p});var A=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,o=a.next,s=a.readingTime;return i.a.createElement(u.a,{location:this.props.location,title:t},i.a.createElement(f.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("h1",{style:{marginTop:Object(c.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1)})},e.frontmatter.date," • ",s.text," • by Loris Cro"),i.a.createElement("div",{className:"Description"},e.frontmatter.description),i.a.createElement("div",{className:"PostBody",style:{marginTop:Object(c.a)(1)},dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),i.a.createElement(d,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,o&&i.a.createElement(n.a,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},r}(i.a.Component),p=(t.default=A,"3654438753")},189:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(197),i=a.n(r),n=a(198),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,c=s.scale},190:function(e,t,a){var r;e.exports=(r=a(192))&&r.default||r},191:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(11),o=a.n(n),s=a(58),l=a.n(s);a.d(t,"a",function(){return l.a});a(190),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},192:function(e,t,a){"use strict";a.r(t);a(17);var r=a(0),i=a.n(r),n=a(11),o=a.n(n),s=a(82),l=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},193:function(e,t,a){"use strict";var r=a(194),i=a(0),n=a.n(i),o=a(11),s=a.n(o),l=a(196),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,s=r.data,l=(s.avatar,s.site),d=t||l.siteMetadata.description;return n.a.createElement(c.a,{defer:!1,htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+l.siteMetadata.social.twitter},{name:"twitter:author",content:"@"+l.siteMetadata.social.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:d},{name:"twitter:image",content:l.siteMetadata.siteUrl+"icons/icon-512x512.png"}].concat(i)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=d},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Loris Cro's Personal Blog",description:"A blog about computer science and design.",author:"Loris Cro",siteUrl:"https://kristoff.it/",social:{twitter:"croloris"}}}}}},195:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(189),o=a(191),s=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("title",null,"Twitter icon"),i.a.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}))},l=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i.a.createElement("title",null,"GitHub icon"),i.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))},c=(a(180),function(e){var t="/"===e.location.pathname?"navlink navlink-active":"navlink";return i.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginBottom:Object(n.a)(2.5)}},i.a.createElement("a",{className:"navlink",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/croloris"},i.a.createElement(s,null)),i.a.createElement(o.a,{to:"/",className:t},"Home"),i.a.createElement(o.a,{to:"/blog",className:"navlink",activeClassName:"navlink-active",partiallyActive:!0},"Blog"),i.a.createElement(o.a,{to:"/more",className:"navlink",activeClassName:"navlink-active"},"More"),i.a.createElement("a",{className:"navlink",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kristoff-it"},i.a.createElement(l,null)))});a(181);var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.location,a=e.children;return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(n.a)(24),padding:Object(n.a)(1.5)+" "+Object(n.a)(.75)}},i.a.createElement("header",null,i.a.createElement(c,{location:t})),i.a.createElement("main",null,a),i.a.createElement("footer",{style:{textAlign:"center",marginTop:Object(n.a)(2)}},i.a.createElement("small",null,i.a.createElement("i",null,"© ",(new Date).getFullYear()," - Loris Cro"))))},r}(i.a.Component);t.a=d},200:function(e,t,a){"use strict";a(203)("fixed",function(e){return function(){return e(this,"tt","","")}})},203:function(e,t,a){var r=a(6),i=a(8),n=a(36),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},204:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIEAQMF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/9oADAMBAAIQAxAAAAGM6em3pKKFaBjwEf/EAB0QAAICAQUAAAAAAAAAAAAAAAECAAMSBBETITP/2gAIAQEAAQUC1jNnRcURrspZaXbk3Ydi30yMDET/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8BgiK//8QAFhEBAQEAAAAAAAAAAAAAAAAAEAER/9oACAECAQE/AdIf/8QAHRAAAQQCAwAAAAAAAAAAAAAAAgABECERMRNRcf/aAAgBAQAGPwIQHSfkyXUW+lcF6maP/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBUWFxof/aAAgBAQABPyE6qIvGLgwkuFVoHqVvwEhseNy1xqfaguTC9Qahn//aAAwDAQACAAMAAAAQsDeA/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARQf/aAAgBAwEBPxATHbQki5YX/8QAGREAAwADAAAAAAAAAAAAAAAAAAERECEx/9oACAECAQE/EG1ps4WP/8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBUXGh/9oACAEBAAE/ELnNqaVNzwM3tydtJ69XB+owPFzkp4jh71lQgN0qs8vuET/rICCHGfXNZSDhT4zNBJn/2Q==",width:50,height:50,src:"/static/dd0cc4525e06ad5b5068d70a703ccbc6/9b664/profile-pic.jpg",srcSet:"/static/dd0cc4525e06ad5b5068d70a703ccbc6/9b664/profile-pic.jpg 1x,\n/static/dd0cc4525e06ad5b5068d70a703ccbc6/06a10/profile-pic.jpg 1.5x,\n/static/dd0cc4525e06ad5b5068d70a703ccbc6/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Loris Cro",social:{twitter:"croloris"}}}}}},205:function(e,t,a){"use strict";a(29),a(22),a(12),a(61),a(121),a(200);var r=a(16);t.__esModule=!0,t.default=void 0;var i,n=r(a(59)),o=r(a(63)),s=r(a(122)),l=r(a(123)),c=r(a(0)),d=r(a(11)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function y(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+c+o+s+a+r+t+n+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(C,(0,l.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},C=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,y=e.itemProp,S=e.loading,j=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:x?1:0,transition:N?"opacity "+h+"ms":"none"},s),L="boolean"==typeof m?"lightgray":m,O={transitionDelay:h+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},N&&O,s,f),Q={title:t,alt:this.state.isVisible?"":a,style:k,className:A};if(p){var T=p,M=T[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),L&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&O)}),M.base64&&c.default.createElement(R,{src:M.base64,spreadProps:Q,imageVariants:T,generateSources:w}),M.tracedSVG&&c.default.createElement(R,{src:M.tracedSVG,spreadProps:Q,imageVariants:T,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,E(T),c.default.createElement(C,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:S},M,{imageVariants:T}))}}))}if(g){var P=g,V=P[0],z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},n);return"inherit"===n.display&&delete z.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},L&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:L,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},N&&O)}),V.base64&&c.default.createElement(R,{src:V.base64,spreadProps:Q,imageVariants:P,generateSources:w}),V.tracedSVG&&c.default.createElement(R,{src:V.tracedSVG,spreadProps:Q,imageVariants:P,generateSources:v}),this.state.isVisible&&c.default.createElement("picture",null,E(P),c.default.createElement(C,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,l.default)({alt:a,title:t,loading:S},V,{imageVariants:P}))}}))}return null},t}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),I=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});x.propTypes={resolutions:N,sizes:I,fixed:d.default.oneOfType([N,d.default.arrayOf(N)]),fluid:d.default.oneOfType([I,d.default.arrayOf(I)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var L=x;t.default=L}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-1ce9ed0c931641719ffa.js.map