(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(548)),i=["components"],l={id:"options-overlay-attach",title:"Overlay Attach (Tooltips)",sidebar_label:"Overlay (Tooltips)"},c={unversionedId:"api/options-overlay-attach",id:"version-7.25.4/api/options-overlay-attach",isDocsHomePage:!1,title:"Overlay Attach (Tooltips)",description:"Controls overlay attach options",source:"@site/versioned_docs/version-7.25.4/api/options-overlay-attach.mdx",slug:"/api/options-overlay-attach",permalink:"/react-native-navigation/7.25.4/api/options-overlay-attach",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.25.4/api/options-overlay-attach.mdx",version:"7.25.4",sidebar_label:"Overlay (Tooltips)",sidebar:"version-7.25.4/api",previous:{title:"Overlay",permalink:"/react-native-navigation/7.25.4/api/options-overlay"},next:{title:"Side Menu Options",permalink:"/react-native-navigation/7.25.4/api/options-sideMenu"}},b=[{value:"<code>layoutId</code>",id:"layoutid",children:[]},{value:"<code>anchor.id</code>",id:"anchorid",children:[]},{value:"<code>anchor.gravity</code>",id:"anchorgravity",children:[]}],p={toc:b},u="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)(u,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Controls overlay attach options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const options = {\n  overlay: {\n    attach: {\n        layoutId: "someLayout",\n        anchor: {\n          id: "bottomTab1",\n          gravity: \'top\',\n        },\n    },\n  }\n}\n')),Object(o.b)("h3",{id:"layoutid"},Object(o.b)("inlineCode",{parentName:"h3"},"layoutId")),Object(o.b)("p",null,"Layout id in which the wanted tooltip (attached overlay) will be shown, for example pass bottomTabs id to have the\noverlay shown at bottom tabs level."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Both")))),Object(o.b)("h3",{id:"anchorid"},Object(o.b)("inlineCode",{parentName:"h3"},"anchor.id")),Object(o.b)("p",null,"The id of the RNN view to have the overlay anchored to."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Both")))),Object(o.b)("h3",{id:"anchorgravity"},Object(o.b)("inlineCode",{parentName:"h3"},"anchor.gravity")),Object(o.b)("p",null,"A side on which the overlay will be anchored."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"enum('top','left','right','bottom')"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Both")))))}d.isMDXComponent=!0},548:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);