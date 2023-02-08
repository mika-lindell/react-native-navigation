(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{548:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var c=b.a.createContext({}),p=function(e){var t=b.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return b.a.createElement(c.Provider,{value:t},e.children)},m="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(l,".").concat(m)]||d[m]||O[m]||r;return a?b.a.createElement(u,o(o({ref:t},c),{},{components:a})):b.a.createElement(u,o({ref:t},c))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),b=a(7),r=(a(0),a(548)),l=["components"],o={id:"options-root",title:"The options object",sidebar_label:"Options object"},i={unversionedId:"api/options-root",id:"version-7.31.1/api/options-root",isDocsHomePage:!1,title:"The options object",description:"`js",source:"@site/versioned_docs/version-7.31.1/api/options-root.mdx",slug:"/api/options-root",permalink:"/react-native-navigation/api/options-root",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.31.1/api/options-root.mdx",version:"7.31.1",sidebar_label:"Options object",sidebar:"version-7.31.1/api",previous:{title:"Options Commands",permalink:"/react-native-navigation/api/options-api"},next:{title:"Bottom Tabs Options",permalink:"/react-native-navigation/api/options-bottomTabs"}},c=[{value:"<code>bottomTab</code>",id:"bottomtab",children:[]},{value:"<code>bottomTabs</code>",id:"bottomtabs",children:[]},{value:"<code>topBar</code>",id:"topbar",children:[]},{value:"<code>statusBar</code>",id:"statusbar",children:[]},{value:"<code>layout</code>",id:"layout",children:[]},{value:"<code>sideMenu</code>",id:"sidemenu",children:[]},{value:"<code>overlay</code>",id:"overlay",children:[]},{value:"<code>animations</code>",id:"animations",children:[]},{value:"<code>modal</code>",id:"modal",children:[]},{value:"<code>preview</code>",id:"preview",children:[]},{value:"<code>splitView</code>",id:"splitview",children:[]},{value:"<code>fab</code>",id:"fab",children:[]},{value:"<code>modalPresentationStyle</code>",id:"modalpresentationstyle",children:[]},{value:"<code>modalTransitionStyle</code>",id:"modaltransitionstyle",children:[]},{value:"<code>popGesture</code>",id:"popgesture",children:[]},{value:"<code>backgroundImage</code>",id:"backgroundimage",children:[]},{value:"<code>rootBackgroundImage</code>",id:"rootbackgroundimage",children:[]},{value:"<code>blurOnUnmount</code>",id:"bluronunmount",children:[]},{value:"<code>navigationBar</code>",id:"navigationbar",children:[]}],p={toc:c},d="wrapper";function m(e){var t=e.components,a=Object(b.a)(e,l);return Object(r.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const options = {\n  bottomTab,\n  bottomTabs,\n  topBar,\n  layout,\n  sideMenu,\n  overlay,\n  modal,\n  preview,\n  navigationBar\n};\n")),Object(r.b)("h2",{id:"bottomtab"},Object(r.b)("inlineCode",{parentName:"h2"},"bottomTab")),Object(r.b)("p",null,"Controls the bottom tab icon, font, color, and more."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-bottomTab"},"BottomTabOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h2",{id:"bottomtabs"},Object(r.b)("inlineCode",{parentName:"h2"},"bottomTabs")),Object(r.b)("p",null,"Controls the bottom tabs container."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-bottomTabs"},"BottomTabsOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h2",{id:"topbar"},Object(r.b)("inlineCode",{parentName:"h2"},"topBar")),Object(r.b)("p",null,"Controls the Stack top bar styling."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-stack"},"TopBarOptions")),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:null},"No")))),Object(r.b)("h2",{id:"statusbar"},Object(r.b)("inlineCode",{parentName:"h2"},"statusBar")),Object(r.b)("p",null,"Controls the system status bar styling."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-statusBar"},"StatusBarOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h2",{id:"layout"},Object(r.b)("inlineCode",{parentName:"h2"},"layout")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-layout"},"LayoutOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h2",{id:"sidemenu"},Object(r.b)("inlineCode",{parentName:"h2"},"sideMenu")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-sideMenu"},"SideMenuOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h2",{id:"overlay"},Object(r.b)("inlineCode",{parentName:"h2"},"overlay")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-overlay"},"OverlayOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h2",{id:"animations"},Object(r.b)("inlineCode",{parentName:"h2"},"animations")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-animations"},"AnimationsOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h2",{id:"modal"},Object(r.b)("inlineCode",{parentName:"h2"},"modal")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-modal"},"ModalOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h2",{id:"preview"},Object(r.b)("inlineCode",{parentName:"h2"},"preview")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-preview"},"PreviewOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"iOS")))),Object(r.b)("h2",{id:"splitview"},Object(r.b)("inlineCode",{parentName:"h2"},"splitView")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-splitView"},"SplitViewOptions")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"iOS")))),Object(r.b)("h2",{id:"fab"},Object(r.b)("inlineCode",{parentName:"h2"},"fab")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"/react-native-navigation/api/options-fab"},"Fab")),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Android")))),Object(r.b)("h2",{id:"modalpresentationstyle"},Object(r.b)("inlineCode",{parentName:"h2"},"modalPresentationStyle")),Object(r.b)("p",null,"Configure the presentation style of the modal."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"enum('formSheet', 'pageSheet', 'fullScreen', 'overFullScreen', 'overCurrentContext', 'popOver', 'none')"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h4",{id:"styles-supported-on-both-platforms"},"Styles supported on both platforms"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"overCurrentContext")," - Display the modal and do not remove previous content when the show animation ends."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"none")," - default system presentation style")),Object(r.b)("h4",{id:"styles-supported-only-on-ios"},"Styles supported only on iOS"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"fullScreen")," - The view covers the underlying content completely."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pageSheet")," - partially cover the underlying content."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"formSheet")," - display content centered in the screen."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"overFullScreen")," - display the modal in full screen mode and do not remove previous content when the show animation ends."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"popOver")," - Center content on screen and dim the content behind it.")),Object(r.b)("p",null,"The default presentation style is different on each platform."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"iOS"),Object(r.b)("th",{parentName:"tr",align:null},"Android"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("ul",null,Object(r.b)("li",null,"iOS 12 and below - ",Object(r.b)("inlineCode",{parentName:"td"},"fullScreen")),Object(r.b)("li",null,"iOS 13 and above - ",Object(r.b)("inlineCode",{parentName:"td"},"pageSheet")))),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"fullScreen"))))),Object(r.b)("h2",{id:"modaltransitionstyle"},Object(r.b)("inlineCode",{parentName:"h2"},"modalTransitionStyle")),Object(r.b)("p",null,"Configure the transition style of the modal."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"enum('coverVertical', 'crossDissolve', 'flipHorizontal', 'partialCurl')"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Both")))),Object(r.b)("h2",{id:"popgesture"},Object(r.b)("inlineCode",{parentName:"h2"},"popGesture")),Object(r.b)("p",null,"Enable or disable swipe back to pop gesture."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"iOS")))),Object(r.b)("h2",{id:"backgroundimage"},Object(r.b)("inlineCode",{parentName:"h2"},"backgroundImage")),Object(r.b)("p",null,"Background image of the screen."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Image"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"iOS")))),Object(r.b)("h2",{id:"rootbackgroundimage"},Object(r.b)("inlineCode",{parentName:"h2"},"rootBackgroundImage")),Object(r.b)("p",null,"Background image for the Navigation View."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Image"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Android")))),Object(r.b)("h2",{id:"bluronunmount"},Object(r.b)("inlineCode",{parentName:"h2"},"blurOnUnmount")),Object(r.b)("p",null,"Enable or disable automaticall blur of the focused input, dismissing keyboard on unmount."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"),Object(r.b)("th",{parentName:"tr",align:null},"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Android"),Object(r.b)("td",{parentName:"tr",align:null},"false")))),Object(r.b)("h2",{id:"navigationbar"},Object(r.b)("inlineCode",{parentName:"h2"},"navigationBar")),Object(r.b)("p",null,"Enable or disable automaticall blur of the focused input, dismissing keyboard on unmount."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Required"),Object(r.b)("th",{parentName:"tr",align:null},"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"boolean"),Object(r.b)("td",{parentName:"tr",align:null},"No"),Object(r.b)("td",{parentName:"tr",align:null},"Android")))))}m.isMDXComponent=!0}}]);