(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{287:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),b=(n(0),n(388)),l={id:"options-button",title:"Button Options",sidebar_label:"Button"},i={unversionedId:"api/options-button",id:"version-6.12.2/api/options-button",isDocsHomePage:!1,title:"Button Options",description:"`js",source:"@site/versioned_docs/version-6.12.2/api/options-button.mdx",slug:"/api/options-button",permalink:"/react-native-navigation/6.12.2/api/options-button",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/api/options-button.mdx",version:"6.12.2",sidebar_label:"Button",sidebar:"version-6.12.2/api",previous:{title:"Back Button Options",permalink:"/react-native-navigation/6.12.2/api/options-backButton"},next:{title:"IconInsets Options",permalink:"/react-native-navigation/6.12.2/api/options-iconInsets"}},o=[{value:"<code>allCaps</code>",id:"allcaps",children:[]},{value:"<code>fontSize</code>",id:"fontsize",children:[]},{value:"<code>id</code>",id:"id",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>text</code>",id:"text",children:[]},{value:"<code>showAsAction</code>",id:"showasaction",children:[]},{value:"<code>component</code>",id:"component",children:[]},{value:"<code>iconInsets</code>",id:"iconinsets",children:[]},{value:"<code>systemItem</code>",id:"systemitem",children:[]}],c={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  topBar: {\n    leftButtons: [\n      {\n        id: 'id',\n        text: 'Button',\n      },\n    ],\n  },\n};\n")),Object(b.b)("h3",{id:"allcaps"},Object(b.b)("inlineCode",{parentName:"h3"},"allCaps")),Object(b.b)("p",null,"This option will set whether characters are all capitalized or not."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android"),Object(b.b)("td",{parentName:"tr",align:null},"true")))),Object(b.b)("h3",{id:"fontsize"},Object(b.b)("inlineCode",{parentName:"h3"},"fontSize")),Object(b.b)("p",null,"If the button has text, this option is used to set font size in DP."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h3",{id:"id"},Object(b.b)("inlineCode",{parentName:"h3"},"id")),Object(b.b)("p",null,"Buttons are identified by their id property. When a button is clicked, a buttonPress event is emitted to js, containing the id of the clicked button."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"Yes"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h3",{id:"icon"},Object(b.b)("inlineCode",{parentName:"h3"},"icon")),Object(b.b)("p",null,"Button icon. If the button is pushed to the overflow menu, the button ",Object(b.b)("a",{parentName:"p",href:"#text"},"text")," is used instead."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h3",{id:"text"},Object(b.b)("inlineCode",{parentName:"h3"},"text")),Object(b.b)("p",null,"Button text. Ignored if an icon is specified, unless the button is displayed in the overflow menu."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h3",{id:"showasaction"},Object(b.b)("inlineCode",{parentName:"h3"},"showAsAction")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum('always', 'never', 'withText', 'ifRoom')"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Android")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"ifRoom")," - Only add button to the TopBar if there is room for it, otherwise add it to the overflow menu."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"never")," - Never place this button in the TopBar. Instead, list the button in the overflow menu."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"always")," - Always place this button in the app bar.")),Object(b.b)("h3",{id:"component"},Object(b.b)("inlineCode",{parentName:"h3"},"component")),Object(b.b)("p",null,"Set a react ",Object(b.b)("a",{parentName:"p",href:"/react-native-navigation/6.12.2/api/layout-component"},"component")," as this button's view which will be displayed instead of the regular view."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/react-native-navigation/6.12.2/api/layout-component"},"Component")),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Both")))),Object(b.b)("h3",{id:"iconinsets"},Object(b.b)("inlineCode",{parentName:"h3"},"iconInsets")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/react-native-navigation/6.12.2/api/options-iconInsets"},"IconInsets")," are applied to the icon to translate its original position on the screen."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"IconInsets"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"iOS")))),Object(b.b)("h3",{id:"systemitem"},Object(b.b)("inlineCode",{parentName:"h3"},"systemItem")),Object(b.b)("p",null,"System icon; ignored if an ",Object(b.b)("a",{parentName:"p",href:"#icon-number"},"icon")," is specified. For more information, see ",Object(b.b)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/system-icons/"},"apple's guidelines"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum('done', 'cancel', 'edit', 'save', 'add', 'flexibleSpace', 'fixedSpace', 'compose', 'reply', 'action', 'organize', 'bookmarks', 'search', 'refresh', 'stop', 'camera', 'trash', 'play', 'pause', 'rewind', 'fastForward', 'undo', 'redo')"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"iOS")))))}p.isMDXComponent=!0},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,s=d["".concat(l,".").concat(m)]||d[m]||u[m]||b;return n?r.a.createElement(s,i(i({ref:t},c),{},{components:n})):r.a.createElement(s,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<b;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);