(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return m});var n=a(0),r=a.n(n),i=a(87),o=a(199),l=a(197),c=a(196);var s=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return r.a.createElement(o.a,{location:this.props.location,title:e},r.a.createElement(l.a,{title:"Blog Index"}),r.a.createElement("h1",null,"Blog Posts"),a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return r.a.createElement("div",{key:e.fields.slug},r.a.createElement("h3",{style:{marginBottom:Object(c.a)(.25)}},r.a.createElement(i.Link,{style:{boxShadow:"none"},to:e.fields.slug},a)),r.a.createElement("small",null,e.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},n}(r.a.Component);e.default=s;var m="1998389265"},196:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return s});var n=a(201),r=a.n(n),i=a(202),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new r.a(o.a);var c=l.rhythm,s=l.scale},197:function(t,e,a){"use strict";var n=a(198),r=a(0),i=a.n(r),o=a(3),l=a.n(o),c=a(200),s=a.n(c);function m(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,l=n.data,c=(l.avatar,l.site),m=e||c.siteMetadata.description;return i.a.createElement(s.a,{defer:!1,htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"og:image",content:c.siteMetadata.siteUrl+"icons/icon-512x512.png"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+c.siteMetadata.social.twitter},{name:"twitter:author",content:"@"+c.siteMetadata.social.twitter},{name:"twitter:title",content:o},{name:"twitter:description",content:m},{name:"twitter:image",content:c.siteMetadata.siteUrl+"icons/icon-512x512.png"}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},e.a=m},198:function(t){t.exports={data:{site:{siteMetadata:{title:"Loris Cro's Personal Blog",description:"A blog about computer science and design.",author:"Loris Cro",siteUrl:"https://kristoff.it/",social:{twitter:"croloris"}}}}}},199:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(196),o=a(87),l=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("title",null,"Twitter icon"),r.a.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}))},c=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("title",null,"GitHub icon"),r.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))},s=(a(187),function(t){var e="/"===t.location.pathname?"navlink navlink-active":"navlink";return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",marginBottom:Object(i.a)(2.5)}},r.a.createElement("a",{className:"navlink",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/croloris"},r.a.createElement(l,null)),r.a.createElement(o.Link,{to:"/",className:e},"Home"),r.a.createElement(o.Link,{to:"/blog",className:"navlink",activeClassName:"navlink-active",partiallyActive:!0},"Blog"),r.a.createElement(o.Link,{to:"/more",className:"navlink",activeClassName:"navlink-active"},"More"),r.a.createElement("a",{className:"navlink",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kristoff-it"},r.a.createElement(c,null)))});a(188);var m=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props,e=t.location,a=t.children;return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(24),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},r.a.createElement("header",null,r.a.createElement(s,{location:e})),r.a.createElement("main",null,a),r.a.createElement("footer",{style:{textAlign:"center",marginTop:Object(i.a)(2)}},r.a.createElement("small",null,r.a.createElement("i",null,"© ",(new Date).getFullYear()," - Loris Cro"))))},n}(r.a.Component);e.a=m}}]);
//# sourceMappingURL=component---src-pages-blog-js-01ad96d39c8cebfc4420.js.map