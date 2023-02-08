(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),l=(a(0),a(548)),i=["components"],o={id:"modal",title:"Modal",sidebar_label:"Modal"},b={unversionedId:"api/modal",id:"version-7.31.1/api/modal",isDocsHomePage:!1,title:"Modal",description:"showModal()",source:"@site/versioned_docs/version-7.31.1/api/api-modal.mdx",slug:"/api/modal",permalink:"/react-native-navigation/api/modal",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.31.1/api/api-modal.mdx",version:"7.31.1",sidebar_label:"Modal",sidebar:"version-7.31.1/api",previous:{title:"Stack",permalink:"/react-native-navigation/api/stack"},next:{title:"Overlay",permalink:"/react-native-navigation/api/overlay"}},c=[{value:"<code>showModal()</code>",id:"showmodal",children:[]},{value:"<code>dismissModal()</code>",id:"dismissmodal",children:[]},{value:"<code>dismissAllModals()</code>",id:"dismissallmodals",children:[]}],p={toc:c},d="wrapper";function s(e){var t=e.components,a=Object(r.a)(e,i);return Object(l.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"showmodal"},Object(l.b)("inlineCode",{parentName:"h2"},"showModal()")),Object(l.b)("p",null,"Show a screen as a modal."),Object(l.b)("h4",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"layout"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/api/layout-layout"},"Layout")),Object(l.b)("td",{parentName:"tr",align:null},"Any type of layout. ",Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/api/layout-bottomTabs"},"BottomTabs"),", ",Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/api/layout-stack"},"Stack"),", ",Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/api/layout-sideMenu"},"SideMenu"),", ",Object(l.b)("a",{parentName:"td",href:"/react-native-navigation/api/layout-component"},"Component"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"Navigation.showModal({\n  stack: {\n    children: [{\n      component: {\n        name: 'example.ModalScreen',\n        passProps: {\n          text: 'stack with one child'\n        },\n        options: {\n          topBar: {\n            title: {\n              text: 'Modal'\n            }\n          }\n        }\n      }\n    }]\n  }\n});\n")),Object(l.b)("h2",{id:"dismissmodal"},Object(l.b)("inlineCode",{parentName:"h2"},"dismissModal()")),Object(l.b)("p",null,"Dismiss the current modal."),Object(l.b)("h4",{id:"parameters-1"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"componentId"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Any component id presented in the modal")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mergeOptions"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Options"),Object(l.b)("td",{parentName:"tr",align:null},"Options to be merged before dismissing the Modal.")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"Navigation.dismissModal(this.props.componentId);\n")),Object(l.b)("h2",{id:"dismissallmodals"},Object(l.b)("inlineCode",{parentName:"h2"},"dismissAllModals()")),Object(l.b)("p",null,"Dismiss all current modals at the same time."),Object(l.b)("h4",{id:"parameters-2"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mergeOptions"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Options"),Object(l.b)("td",{parentName:"tr",align:null},"Options to be merged before dismissing all modals.")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"Navigation.dismissAllModals();\n")))}s.isMDXComponent=!0},548:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,u=d["".concat(i,".").concat(s)]||d[s]||m[s]||l;return a?r.a.createElement(u,o(o({ref:t},c),{},{components:a})):r.a.createElement(u,o({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);