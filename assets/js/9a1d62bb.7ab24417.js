(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{254:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(388)),a={id:"sideMenu-disable",title:"Disable Open and Close gesture",sidebar_label:"Open and Close Gesture"},s={unversionedId:"docs/sideMenu-disable",id:"docs/sideMenu-disable",isDocsHomePage:!1,title:"Disable Open and Close gesture",description:"To open the side menu programmatically, you'll need to update the visible property of the side menu you'd like to open.",source:"@site/docs/docs/sideMenu-disable.mdx",slug:"/docs/sideMenu-disable",permalink:"/react-native-navigation/next/docs/sideMenu-disable",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/sideMenu-disable.mdx",version:"current",sidebar_label:"Open and Close Gesture"},u=[{value:"Open by pressing on the hamburger menu",id:"open-by-pressing-on-the-hamburger-menu",children:[]}],c={toc:u};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To open the side menu programmatically, you'll need to update the visible property of the side menu you'd like to open."),Object(i.b)("p",null,"The following snippet shows how to open the left side menu."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"Navigation.mergeOptions(componentId, {\n  sideMenu: {\n    left: {\n      visible: true,\n    },\n  },\n});\n")),Object(i.b)("h2",{id:"open-by-pressing-on-the-hamburger-menu"},"Open by pressing on the hamburger menu"),Object(i.b)("p",null,"The most common use case is to open the side menu by pressing the hamburger button in the TopBar. To achieve this, listen to the press event of the burger button, and open the side menu as shown above."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const React = require('react');\nconst Navigation = require('react-native-navigation');\nconst { View, Text } = require('react-native');\n\nclass SideMenuCenterScreen extends React.Component {\n  static options() {\n    return {\n      topBar: {\n        leftButtons: {\n          id: 'sideMenu',\n          icon: require('./menuIcon.png')\n        }\n      }\n    };\n  }\n\n  constructor(props) {\n    super(props);\n    Navigation.events().bindComponent(this);\n  }\n\n  render() {\n    return (\n      <View>\n        <Text>Click the hamburger icon to open the side menu</Text>\n      </View>\n    );\n  }\n\n  navigationButtonPressed({ buttonId }) {\n    if (buttonId === 'sideMenu') {\n      Navigation.mergeOptions(this, {\n        sideMenu: {\n          left: {\n            visible: true\n          }\n        }\n      });\n    }\n  }\n}\n")))}p.isMDXComponent=!0},388:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(t),b=r,m=l["".concat(a,".").concat(b)]||l[b]||d[b]||i;return t?o.a.createElement(m,s(s({ref:n},c),{},{components:t})):o.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);