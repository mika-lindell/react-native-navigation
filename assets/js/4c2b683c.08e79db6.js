(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),l=(a(0),a(388)),b={id:"options-imageResource",title:"Image Resource",sidebar_label:"Image Resource"},c={unversionedId:"api/options-imageResource",id:"version-7.11.2/api/options-imageResource",isDocsHomePage:!1,title:"Image Resource",description:"ImageResource",source:"@site/versioned_docs/version-7.11.2/api/options-imageResource.mdx",slug:"/api/options-imageResource",permalink:"/react-native-navigation/api/options-imageResource",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.11.2/api/options-imageResource.mdx",version:"7.11.2",sidebar_label:"Image Resource"},o=[{value:"<code>ImageResource</code>",id:"imageresource",children:[]},{value:"<code>ImageSystemSource</code>",id:"imagesystemsource",children:[{value:"<code>system</code>",id:"system",children:[]},{value:"<code>fallback</code>",id:"fallback",children:[]}]},{value:"<code>FallbackSource</code>",id:"fallbacksource",children:[{value:"<code>ImageRequireSource</code>",id:"imagerequiresource",children:[]},{value:"<code>string</code>",id:"string",children:[]}]}],i={toc:o};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"imageresource"},Object(l.b)("inlineCode",{parentName:"h2"},"ImageResource")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  topBar: {\n    leftButtons: [\n        icon: require('./backButton.png')\n    ]\n  },\n};\n")),Object(l.b)("p",null,"The following icon types are available:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ImageRequireSource"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#imagesystemresource"},"ImageSystemSource")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"iOS")))),Object(l.b)("h2",{id:"imagesystemsource"},Object(l.b)("inlineCode",{parentName:"h2"},"ImageSystemSource")),Object(l.b)("h3",{id:"system"},Object(l.b)("inlineCode",{parentName:"h3"},"system")),Object(l.b)("p",null,"You can use platform specific system icons for ",Object(l.b)("a",{parentName:"p",href:"https://developer.apple.com/sf-symbols/"},"iOS only"),"."),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  topBar: {\n    leftButtons: [\n        icon: {\n            system: 'calendar',\n            fallback: require('./calendar.png')\n        }\n    ]\n  },\n};\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"iOS 13+")))),Object(l.b)("h3",{id:"fallback"},Object(l.b)("inlineCode",{parentName:"h3"},"fallback")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"#fallbacksource"},"FallbackSource")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"iOS 13+")))),Object(l.b)("h2",{id:"fallbacksource"},Object(l.b)("inlineCode",{parentName:"h2"},"FallbackSource")),Object(l.b)("p",null,"For iOS, SF Symbols is available only for iOS 13 and later. For iOS 12 and earlier you should use a fallback icon."),Object(l.b)("h3",{id:"imagerequiresource"},Object(l.b)("inlineCode",{parentName:"h3"},"ImageRequireSource")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))),Object(l.b)("h3",{id:"string"},Object(l.b)("inlineCode",{parentName:"h3"},"string")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Both")))))}u.isMDXComponent=!0},388:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,s=p["".concat(b,".").concat(d)]||p[d]||m[d]||l;return a?r.a.createElement(s,c(c({ref:t},i),{},{components:a})):r.a.createElement(s,c({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);