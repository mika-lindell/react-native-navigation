(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{378:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(548)),l=["components"],o={id:"layout-splitView",title:"SplitView",sidebar_label:"SplitView"},c={unversionedId:"api/layout-splitView",id:"version-7.7.0/api/layout-splitView",isDocsHomePage:!1,title:"SplitView",description:"A container view controller implementing a master-detail interface. See UISplitViewController docs.",source:"@site/versioned_docs/version-7.7.0/api/layout-splitView.mdx",slug:"/api/layout-splitView",permalink:"/react-native-navigation/7.7.0/api/layout-splitView",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.7.0/api/layout-splitView.mdx",version:"7.7.0",sidebar_label:"SplitView",sidebar:"version-7.7.0/api",previous:{title:"Side Menu",permalink:"/react-native-navigation/7.7.0/api/layout-sideMenu"},next:{title:"Options Commands",permalink:"/react-native-navigation/7.7.0/api/options-api"}},b=[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>master</code>",id:"master",children:[]},{value:"<code>detail</code>",id:"detail",children:[]},{value:"<code>options</code>",id:"options",children:[]}],p={toc:b},d="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,l);return Object(i.b)(d,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A container view controller implementing a master-detail interface. See ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uisplitviewcontroller"},"UISplitViewController docs"),".\nCurrently implemented only in iOS."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"{\n  id: 'PROFILE_TAB',\n  master: {\n    component: {\n      id: 'MASTER_SCREEN',\n      name: 'MasterScreen'\n    }\n  },\n  detail: {\n    component: {\n      id: 'DETAIL_SCREEN',\n      name: 'DetailScreen'\n    }\n  }\n}\n")),Object(i.b)("h2",{id:"id"},Object(i.b)("inlineCode",{parentName:"h2"},"id")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"Unique id used to interact with the view via the Navigation api, usually ",Object(i.b)("inlineCode",{parentName:"td"},"Navigation.mergeOptions")," which accepts the componentId as it's first argument.")))),Object(i.b)("h2",{id:"master"},Object(i.b)("inlineCode",{parentName:"h2"},"master")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/react-native-navigation/7.7.0/api/layout-layout"},"Layout")),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"Set master layout (the smaller screen, sidebar)")))),Object(i.b)("h2",{id:"detail"},Object(i.b)("inlineCode",{parentName:"h2"},"detail")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/react-native-navigation/7.7.0/api/layout-layout"},"Layout")),Object(i.b)("td",{parentName:"tr",align:null},"YES"),Object(i.b)("td",{parentName:"tr",align:null},"Set detail layout (the larger screen, flexes)")))),Object(i.b)("h2",{id:"options"},Object(i.b)("inlineCode",{parentName:"h2"},"options")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"/react-native-navigation/7.7.0/api/options-root"},"Options")),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"dynamic options which will apply to all screens")))))}u.isMDXComponent=!0},548:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,s=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?r.a.createElement(s,o(o({ref:t},b),{},{components:n})):r.a.createElement(s,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);