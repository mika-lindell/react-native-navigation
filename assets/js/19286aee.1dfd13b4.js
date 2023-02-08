(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),b=(n(0),n(548)),l=["components"],o={id:"options-fab",title:"Fab",sidebar_label:"Fab"},i={unversionedId:"api/options-fab",id:"version-6.12.2/api/options-fab",isDocsHomePage:!1,title:"Fab",description:"Controls the FAB button styling on Android.",source:"@site/versioned_docs/version-6.12.2/api/options-fab.mdx",slug:"/api/options-fab",permalink:"/react-native-navigation/6.12.2/api/options-fab",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/api/options-fab.mdx",version:"6.12.2",sidebar_label:"Fab"},c=[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>iconColor</code>",id:"iconcolor",children:[]},{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>clickColor</code>",id:"clickcolor",children:[]},{value:"<code>rippleColor</code>",id:"ripplecolor",children:[]},{value:"<code>visible</code>",id:"visible",children:[]},{value:"<code>alignHorizontally</code>",id:"alignhorizontally",children:[]},{value:"<code>hideOnScroll</code>",id:"hideonscroll",children:[]},{value:"<code>size</code>",id:"size",children:[]}],d={toc:c},p="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,l);return Object(b.b)(p,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Controls the FAB button styling on Android."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  fab: {\n    id: 'id',\n    icon: require('path-to-fab-icon'),\n    backgroundColor: 'coral',\n    actions: [\n      {\n        id: 'id2',\n        icon: require('path-to-fab-icon-2),\n      }\n    ]\n  },\n};\n")),Object(b.b)("h3",{id:"id"},Object(b.b)("inlineCode",{parentName:"h3"},"id")),Object(b.b)("p",null,"Button id for reference press event."),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",{parentName:"div",className:"admonition-heading"},Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",{parentName:"h5",className:"admonition-icon"},Object(b.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(b.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),Object(b.b)("div",{parentName:"div",className:"admonition-content"},Object(b.b)("p",{parentName:"div"},"This option is mandatory when you are initiating the FAB button. However you do not need to pass in ",Object(b.b)("inlineCode",{parentName:"p"},"id")," when updating the Fab button options with ",Object(b.b)("inlineCode",{parentName:"p"},"Navigation.mergeOptions"),"."))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h3",{id:"icon"},Object(b.b)("inlineCode",{parentName:"h3"},"icon")),Object(b.b)("p",null,"Change the default back button icon."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h3",{id:"iconcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"iconColor")),Object(b.b)("p",null,"Change the icon color of the FAB button."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"color"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h3",{id:"backgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(b.b)("p",null,"Change the background color of the FAB button."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"color"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h3",{id:"clickcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"clickColor")),Object(b.b)("p",null,"Change the on-clicked background color of the FAB button."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"color"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h3",{id:"ripplecolor"},Object(b.b)("inlineCode",{parentName:"h3"},"rippleColor")),Object(b.b)("p",null,"Change the ripple color of the FAB button."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"color"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h3",{id:"visible"},Object(b.b)("inlineCode",{parentName:"h3"},"visible")),Object(b.b)("p",null,"Show or hide the FAB button."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h3",{id:"alignhorizontally"},Object(b.b)("inlineCode",{parentName:"h3"},"alignHorizontally")),Object(b.b)("p",null,"Set the horizontal position of the FAB button on the screen."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"'left' or 'right'"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h3",{id:"hideonscroll"},Object(b.b)("inlineCode",{parentName:"h3"},"hideOnScroll")),Object(b.b)("p",null,"Hide the FAB button on scroll."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("h3",{id:"size"},Object(b.b)("inlineCode",{parentName:"h3"},"size")),Object(b.b)("p",null,"Set the size of the FAB button."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"'mini' or 'regular'"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))))}u.isMDXComponent=!0},548:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||O[u]||b;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<b;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);