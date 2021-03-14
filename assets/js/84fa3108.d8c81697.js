(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{225:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return s})),t.d(e,"toc",(function(){return l})),t.d(e,"default",(function(){return p}));var o=t(3),i=t(7),a=(t(0),t(388)),r=t(394),c={id:"advanced-navigation",title:"Advanced navigation",sidebar_label:"Advanced navigation"},s={unversionedId:"docs/advanced-navigation",id:"docs/advanced-navigation",isDocsHomePage:!1,title:"Advanced navigation",description:"Tab navigation",source:"@site/docs/docs/docs-advanced-navigation.mdx",slug:"/docs/advanced-navigation",permalink:"/react-native-navigation/next/docs/advanced-navigation",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/docs-advanced-navigation.mdx",version:"current",sidebar_label:"Advanced navigation",sidebar:"docs",previous:{title:"Basic navigation",permalink:"/react-native-navigation/next/docs/basic-navigation"},next:{title:"Screen Lifecycle",permalink:"/react-native-navigation/next/docs/screen-lifecycle"}},l=[{value:"Tab navigation",id:"tab-navigation",children:[]},{value:"Replacing the root",id:"replacing-the-root",children:[]},{value:"Conditional roots",id:"conditional-roots",children:[]}],u={toc:l};function p(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tab-navigation"},"Tab navigation"),Object(a.b)("p",null,"As mobile applications become bigger and more complex, they usually end up containing multiple primary high-level destinations, which are logically independent from one another. The ",Object(a.b)("inlineCode",{parentName:"p"},"BottomTabs")," layout is often used when an app contains three to five top-level destinations which should be accessible from anywhere in the app."),Object(a.b)("p",null,"Lets return to the example code from the previous section (",Object(a.b)("a",{parentName:"p",href:"basic-navigation"},"Basic navigation"),") and see how we can convert it to a tab-based application. We'll use the BottomTabs layout to display tabs at the bottom of the screen. Similarly to ",Object(a.b)("inlineCode",{parentName:"p"},"Stack")," layout, The BottomTabs layout also contains a ",Object(a.b)("inlineCode",{parentName:"p"},"children")," property where each child will be displayed in a tab."),Object(a.b)("p",null,"Lets change our code to the following and reload the app."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { View, Text, Button, StyleSheet } from 'react-native';\nimport { Navigation } from 'react-native-navigation';\n\nconst HomeScreen = (props) => {\n  return (\n    <View style={styles.root}>\n      <Text>Hello React Native Navigation \ud83d\udc4b</Text>\n\n      <Button\n        title='Push Settings Screen'\n        color='#710ce3'\n        onPress={() => Navigation.push(props.componentId, {\n          component: {\n            name: 'Settings'\n          }\n        })} />\n    </View>\n  );\n};\nHomeScreen.options = {\n  topBar: {\n    title: {\n      text: 'Home'\n    }\n  },\n  bottomTab: {\n    text: 'Home'\n  }\n};\n\nconst SettingsScreen = () => {\n  return (\n    <View style={styles.root}>\n      <Text>Settings Screen</Text>\n    </View>\n  );\n}\nSettingsScreen.options = {\n  topBar: {\n    title: {\n      text: 'Settings'\n    }\n  },\n  bottomTab: {\n    text: 'Settings'\n  }\n}\n\nNavigation.registerComponent('Home', () => HomeScreen);\nNavigation.registerComponent('Settings', () => SettingsScreen);\n\nNavigation.setDefaultOptions({\n  statusBar: {\n    backgroundColor: '#4d089a'\n  },\n  topBar: {\n    title: {\n      color: 'white'\n    },\n    backButton: {\n      color: 'white'\n    },\n    background: {\n      color: '#4d089a'\n    }\n  },\n  bottomTab: {\n    fontSize: 14,\n    selectedFontSize: 14\n  }\n});\n\nNavigation.events().registerAppLaunchedListener(async () => {\n  Navigation.setRoot({\n    root: {\n      bottomTabs: {\n        children: [\n          {\n            stack: {\n              children: [\n                {\n                  component: {\n                    name: 'Home'\n                  }\n                },\n              ]\n            }\n          },\n          {\n            stack: {\n              children: [\n                {\n                  component: {\n                    name: 'Settings'\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    }\n  });\n});\n\nconst styles = StyleSheet.create({\n  root: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    backgroundColor: 'whitesmoke'\n  }\n});\n")),Object(a.b)("p",null,"Now our app has two tabs at the bottom of the screen and our users can easily navigate between them."),Object(a.b)("img",{width:"40%",src:Object(r.a)("img/stack4.png")}),Object(a.b)("h2",{id:"replacing-the-root"},"Replacing the root"),Object(a.b)("p",null,"Up until now, we've discussed how to navigate within the same layout structure. We'll now learn how to replace the entire layout structure to display a new Root. A real life example for this use case would be, for instance, if you need to switch from a login screen to the app's main root. Replacing the root fits this use case since we'd like to discard the previous root (login root) entirely when switching to the main root."),Object(a.b)("p",null,"To demonstrate this, we'll make the following changes to our code:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Add a login screen with a login button."),Object(a.b)("li",{parentName:"ol"},"When the button is clicked, we will switch to the main root."),Object(a.b)("li",{parentName:"ol"},"Replace our current root with the login screen. We'll also extract both roots to variables to improve code readability.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"const LoginScreen = () => {\n  return (\n    <View style={styles.root}>\n      <Button\n        title='Login'\n        color='#710ce3'\n        onPress={() => Navigation.setRoot(mainRoot)}\n      />\n    </View>\n  );\n};\n\nconst HomeScreen = (props) => {\n  return (\n    <View style={styles.root}>\n      <Text>Hello React Native Navigation \ud83d\udc4b</Text>\n\n      <Button\n        title='Push Settings Screen'\n        color='#710ce3'\n        onPress={() => Navigation.push(props.componentId, {\n          component: {\n            name: 'Settings'\n          }\n        })} />\n    </View>\n  );\n};\nHomeScreen.options = {\n  topBar: {\n    title: {\n      text: 'Home'\n    }\n  },\n  bottomTab: {\n    text: 'Home'\n  }\n};\n\nconst SettingsScreen = () => {\n  return (\n    <View style={styles.root}>\n      <Text>Settings Screen</Text>\n    </View>\n  );\n}\nSettingsScreen.options = {\n  topBar: {\n    title: {\n      text: 'Settings'\n    }\n  },\n  bottomTab: {\n    text: 'Settings'\n  }\n}\n\nNavigation.registerComponent('Login', () => LoginScreen);\nNavigation.registerComponent('Home', () => HomeScreen);\nNavigation.registerComponent('Settings', () => SettingsScreen);\n\nconst mainRoot = {\n  root: {\n    bottomTabs: {\n      children: [\n        {\n          stack: {\n            children: [\n              {\n                component: {\n                  name: 'Home'\n                }\n              },\n            ]\n          }\n        },\n        {\n          stack: {\n            children: [\n              {\n                component: {\n                  name: 'Settings'\n                }\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n};\nconst loginRoot = {\n  root: {\n    component: {\n      name: 'Login'\n    }\n  }\n};\n\n\nNavigation.setDefaultOptions({\n  statusBar: {\n    backgroundColor: '#4d089a'\n  },\n  topBar: {\n    title: {\n      color: 'white'\n    },\n    backButton: {\n      color: 'white'\n    },\n    background: {\n      color: '#4d089a'\n    }\n  },\n  bottomTab: {\n    fontSize: 14,\n    selectedFontSize: 14\n  }\n});\nNavigation.events().registerAppLaunchedListener(async () => {\n  Navigation.setRoot(loginRoot);\n});\n\nconst styles = StyleSheet.create({\n  root: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    backgroundColor: 'whitesmoke'\n  }\n});\n")),Object(a.b)("h2",{id:"conditional-roots"},"Conditional roots"),Object(a.b)("p",null,"Now that our initial root is the Login root, we're facing a new problem - how do we show the Login root only to users that are not logged in? Since our initial root is determined in the ",Object(a.b)("inlineCode",{parentName:"p"},"registerAppLaunchedListener")," callback, we'll check if a user is logged in there and set the appropriate root accordingly."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"Navigation.events().registerAppLaunchedListener(async () => {\n  Navigation.setRoot(isLoggedIn() ? mainRoot : loginRoot);\n});\n\nfunction isLoggedIn() {\n  // TODO: your business logic goes here\n}\n")))}p.isMDXComponent=!0},388:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return b}));var o=t(0),i=t.n(o);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=i.a.createContext({}),u=function(n){var e=i.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p=function(n){var e=u(n.components);return i.a.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.a.createElement(i.a.Fragment,{},e)}},g=i.a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,r=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),p=u(t),g=o,b=p["".concat(r,".").concat(g)]||p[g]||d[g]||a;return t?i.a.createElement(b,c(c({ref:e},l),{},{components:t})):i.a.createElement(b,c({ref:e},l))}));function b(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,r=new Array(a);r[0]=g;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:o,r[1]=c;for(var l=2;l<a;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},394:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"a",(function(){return r}));var o=t(16),i=t(395);function a(){var n=Object(o.default)().siteConfig,e=(n=void 0===n?{}:n).baseUrl,t=void 0===e?"/":e,a=n.url;return{withBaseUrl:function(n,e){return function(n,e,t,o){var a=void 0===o?{}:o,r=a.forcePrependBaseUrl,c=void 0!==r&&r,s=a.absolute,l=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(c)return e+t;var u=t.startsWith(e)?t:e+t.replace(/^\//,"");return l?n+u:u}(a,t,n,e)}}}function r(n,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(n,e)}},395:function(n,e,t){"use strict";function o(n){return!0===/^(\w*:|\/\/)/.test(n)}function i(n){return void 0!==n&&!o(n)}t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return i}))}}]);