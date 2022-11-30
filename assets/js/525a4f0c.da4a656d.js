(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(548)),l=["components"],b={id:"options-background",title:"Background Options",sidebar_label:"Background"},c={unversionedId:"api/options-background",id:"version-7.30.3/api/options-background",isDocsHomePage:!1,title:"Background Options",description:"Controls the top bar background styling.",source:"@site/versioned_docs/version-7.30.3/api/options-background.mdx",slug:"/api/options-background",permalink:"/react-native-navigation/api/options-background",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.30.3/api/options-background.mdx",version:"7.30.3",sidebar_label:"Background",sidebar:"version-7.30.3/api",previous:{title:"Subtitle Options",permalink:"/react-native-navigation/api/options-subtitle"},next:{title:"Back Button Options",permalink:"/react-native-navigation/api/options-backButton"}},i=[{value:"<code>color</code>",id:"color",children:[]},{value:"<code>component</code>",id:"component",children:[]},{value:"<code>clipToBounds</code>",id:"cliptobounds",children:[]},{value:"<code>translucent</code>",id:"translucent",children:[]},{value:"<code>blur</code>",id:"blur",children:[]}],p={toc:i};function u(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Controls the top bar background styling."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  topBar: {\n    background: {}\n  }\n};\n")),Object(o.b)("h3",{id:"color"},Object(o.b)("inlineCode",{parentName:"h3"},"color")),Object(o.b)("p",null,"Set the background color. Ignored if a component is specified."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Color"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"Both")))),Object(o.b)("h3",{id:"component"},Object(o.b)("inlineCode",{parentName:"h3"},"component")),Object(o.b)("p",null,"Set a react ",Object(o.b)("a",{parentName:"p",href:"/react-native-navigation/api/layout-component"},"component")," as the background. Useful when you need to show a gradient as background, for instance."),Object(o.b)("p",null,"On Android, setting an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," to the Component will prevent the component from being recreated each time it's used by a screen. The component will be created once and whenever possible it will be reused."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/react-native-navigation/api/layout-component"},"Component")),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"Both")))),Object(o.b)("h3",{id:"cliptobounds"},Object(o.b)("inlineCode",{parentName:"h3"},"clipToBounds")),Object(o.b)("p",null,"Clip the top bar background to bounds if set to true."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"iOS")))),Object(o.b)("h3",{id:"translucent"},Object(o.b)("inlineCode",{parentName:"h3"},"translucent")),Object(o.b)("p",null,"Allows the NavBar to be translucent (blurred)."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"iOS")))),Object(o.b)("h3",{id:"blur"},Object(o.b)("inlineCode",{parentName:"h3"},"blur")),Object(o.b)("p",null,"Enable background blur."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Platform"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"iOS")))))}u.isMDXComponent=!0},548:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,O=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(O,b(b({ref:t},i),{},{components:n})):r.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);