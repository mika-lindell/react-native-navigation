(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{329:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(388)),i=n(392),c=n(393),l={id:"root",title:"Root",sidebar_label:"Root"},s={unversionedId:"api/root",id:"api/root",isDocsHomePage:!1,title:"Root",description:"setRoot()",source:"@site/docs/api/api-root.mdx",slug:"/api/root",permalink:"/react-native-navigation/next/api/root",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/api/api-root.mdx",version:"current",sidebar_label:"Root",sidebar:"api",previous:{title:"Component",permalink:"/react-native-navigation/next/api/component"},next:{title:"Stack",permalink:"/react-native-navigation/next/api/stack"}},u=[{value:"<code>setRoot()</code>",id:"setroot",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setroot"},Object(o.b)("inlineCode",{parentName:"h2"},"setRoot()")),Object(o.b)("p",null,"Used to set the UI of the application. Read more about the root hierarchy level in the ",Object(o.b)("a",{parentName:"p",href:"../docs/root"},"docs section"),"."),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"layout"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"/react-native-navigation/next/api/layout-layout"},"Layout")),Object(o.b)("td",{parentName:"tr",align:null},"Any type of layout. ",Object(o.b)("a",{parentName:"td",href:"/react-native-navigation/next/api/layout-bottomTabs"},"BottomTabs"),", ",Object(o.b)("a",{parentName:"td",href:"/react-native-navigation/next/api/layout-stack"},"Stack"),", ",Object(o.b)("a",{parentName:"td",href:"/react-native-navigation/next/api/layout-sideMenu"},"SideMenu"),", ",Object(o.b)("a",{parentName:"td",href:"/react-native-navigation/next/api/layout-component"},"Component"))))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)(i.a,{defaultValue:"stack",values:[{label:"With Stack layout",value:"stack"},{label:"With BottomTabs layout",value:"bottomTabs"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"stack",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.setRoot({\n  root: {\n    stack: {\n      children: [{\n        component: {\n          name: 'example.FirstTabScreen',\n          passProps: {\n            text: 'This is tab 1'\n          }\n        }\n      }],\n      options: {\n        bottomTab: {\n          text: 'Tab 1',\n          icon: require('../images/one.png'),\n          testID: 'FIRST_TAB_BAR_BUTTON'\n        }\n      }\n    }\n  }\n});\n"))),Object(o.b)(c.a,{value:"bottomTabs",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.setRoot({\n  root: {\n    bottomTabs: {\n      children: [{\n        stack: {\n          children: [{\n            component: {\n              name: 'example.FirstTabScreen',\n              passProps: {\n                text: 'This is tab 1'\n              }\n            }\n          }],\n          options: {\n            bottomTab: {\n              text: 'Tab 1',\n              icon: require('../images/one.png'),\n              testID: 'FIRST_TAB_BAR_BUTTON'\n            }\n          }\n        }\n      },\n      {\n        component: {\n          name: 'navigation.playground.TextScreen',\n          passProps: {\n            text: 'This is tab 2'\n          },\n          options: {\n            bottomTab: {\n              text: 'Tab 2',\n              icon: require('../images/two.png'),\n              testID: 'SECOND_TAB_BAR_BUTTON'\n            }\n          }\n        }\n      }]\n    }\n  }\n});\n")))))}p.isMDXComponent=!0},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},389:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},390:function(e,t,n){"use strict";var a=n(0),r=n(391);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},391:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},392:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(390),i=n(389),c=n(56),l=n.n(c);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,O=Object(a.useState)(c),y=O[0],g=O[1],h=a.Children.toArray(e.children),j=[];if(null!=p){var T=f[p];null!=T&&T!==y&&b.some((function(e){return e.value===T}))&&g(T)}var x=function(e){var t=e.target,n=j.indexOf(t),a=h[n].props.value;g(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,o,i,c,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;n=j[a]||j[0];break;case s:var r=j.indexOf(e.target)-1;n=j[r]||j[j.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:N,onFocus:x,onClick:x},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},393:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);