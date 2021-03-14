(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{234:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(388)),i=n(392),c=n(393),s=n(394),u={id:"third-party-mobx",title:"MobX",sidebar_label:"MobX"},l={unversionedId:"docs/third-party-mobx",id:"docs/third-party-mobx",isDocsHomePage:!1,title:"MobX",description:"MobX is one of the most popular state management libraries used by applications sized from small to large.",source:"@site/docs/docs/third-party-mobx.mdx",slug:"/docs/third-party-mobx",permalink:"/react-native-navigation/next/docs/third-party-mobx",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/third-party-mobx.mdx",version:"current",sidebar_label:"MobX",sidebar:"docs",previous:{title:"TypeScript",permalink:"/react-native-navigation/next/docs/third-party-typescript"},next:{title:"React Context API",permalink:"/react-native-navigation/next/docs/third-party-react-context"}},b=[{value:"Sharing a store between multiple screens",id:"sharing-a-store-between-multiple-screens",children:[{value:"Step 1 - Create a Counter store",id:"step-1---create-a-counter-store",children:[]},{value:"Step 2 - Consuming the store",id:"step-2---consuming-the-store",children:[]}]},{value:"How to use MobX persistent data",id:"how-to-use-mobx-persistent-data",children:[]}],m={toc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"MobX is one of the most popular state management libraries used by applications sized from small to large.\nWith the introduction of the new React Context API, MobX can now be very easily integrated in React Native Navigation\nprojects."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"With the introduction of the new Context API, there is no need to use ",Object(a.b)("inlineCode",{parentName:"p"},"Provider")," pattern with MobX and you\ncan now just use the React Context API."),Object(a.b)("p",{parentName:"div"},"Also the example uses ",Object(a.b)("inlineCode",{parentName:"p"},"mobx-react-lite")," but you can use the normal ",Object(a.b)("inlineCode",{parentName:"p"},"mobx-react"),"."))),Object(a.b)("h2",{id:"sharing-a-store-between-multiple-screens"},"Sharing a store between multiple screens"),Object(a.b)("p",null,"In the example below we will be creating a small Counter app. We will learn how to integrate Mobx with React-Native-Navigation and demonstrate how updating the store from one component, triggers renders in other components connected to the same store."),Object(a.b)("p",null,"Once you finish implementing the example, your screen should look similar to this:"),Object(a.b)("img",{width:"30%",src:Object(s.a)("/img/mobx_counter.png")}),Object(a.b)("h3",{id:"step-1---create-a-counter-store"},"Step 1 - Create a Counter store"),Object(a.b)("p",null,"Let's first create a counter store using MobX. Our store has a single ",Object(a.b)("inlineCode",{parentName:"p"},"count")," object and two methods to increment and decrement it."),Object(a.b)(i.a,{defaultValue:"makeObservable",values:[{label:"MakeObservable",value:"makeObservable"},{label:"Decorator",value:"decorator"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"makeObservable",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-mobx/counter-store.tsx",file:"./third-party-mobx/counter-store.tsx"},"// counter.store.js\nimport React from 'react';\nimport { makeObservable, action, observable } from 'mobx';\n\nclass CounterStore {\n  count = 0;\n\n  constructor() {\n    makeObservable(this, {\n      count: observable,\n      increment: action.bound,\n      decrement: action.bound\n    })\n  }\n\n  increment() {\n    this.count += 1;\n  }\n\n  decrement() {\n    this.count -= 1;\n  }\n}\n\n// Instantiate the counter store.\nconst counterStore = new CounterStore();\n// Create a React Context with the counter store instance.\nexport const CounterStoreContext = React.createContext(counterStore);\nexport const useCounterStore = () => React.useContext(CounterStoreContext)\n"))),Object(a.b)(c.a,{value:"decorator",mdxType:"TabItem"},Object(a.b)("p",null,"  From ",Object(a.b)("inlineCode",{parentName:"p"},"mobx@6.0.0")," decorators have become an opt-in feature. To enable decorators for ",Object(a.b)("inlineCode",{parentName:"p"},"mobx"),", follow the ",Object(a.b)("a",{parentName:"p",href:"https://mobx.js.org/enabling-decorators.html"},"official guide"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-mobx/counter-store-decorator.tsx",file:"./third-party-mobx/counter-store-decorator.tsx"},"// counter.store.js\nimport React from 'react';\nimport { observable, action, makeObservable } from 'mobx';\n\nclass CounterStore {\n  @observable count = 0;\n\n  constructor() {\n    makeObservable(this)\n  }\n\n  @action.bound\n  increment() {\n    this.count += 1;\n  }\n\n  @action.bound\n  decrement() {\n    this.count -= 1;\n  }\n}\n\n// Instantiate the counter store.\nconst counterStore = new CounterStore();\n\n// Create a React Context with the counter store instance.\nexport const CounterStoreContext = React.createContext(counterStore);\nexport const useCounterStore = () => React.useContext(CounterStoreContext)\n")))),Object(a.b)("h3",{id:"step-2---consuming-the-store"},"Step 2 - Consuming the store"),Object(a.b)("p",null,"You can consume the Counter store in any React components using ",Object(a.b)("inlineCode",{parentName:"p"},"useCounterStore")," hook or ",Object(a.b)("inlineCode",{parentName:"p"},"React.useContext")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-mobx/counter-screen.tsx",file:"./third-party-mobx/counter-screen.tsx"},"// CounterScreen.js\nimport React, { useContext } from 'react';\nimport { Button, Text, View } from 'react-native';\nimport { Navigation } from 'react-native-navigation'\nimport { observer } from 'mobx-react-lite';\n\nimport { useCounterStore, CounterStoreContext } from './counter.store';\n\nexport const CounterScreen = observer(({ componentId }) => {\n  const { count, increment, decrement } = useCounterStore(); // OR useContext(CounterStoreContext)\n\n  const navigateToNextScreen = () => {\n    Navigation.push(componentId, {\n      component: {\n        name: 'NextScreen'\n      }\n    })\n  }\n\n  return (\n    <Root>\n      <Text>{`Clicked ${count} times!`}</Text>\n      <Button title=\"Increment\" onPress={increment} />\n      <Button title=\"Decrement\" onPress={decrement} />\n      <Button title=\"Push\" onPress={navigateToNextScreen} />\n    </Root>\n  );\n});\n")),Object(a.b)("h2",{id:"how-to-use-mobx-persistent-data"},"How to use MobX persistent data"),Object(a.b)("p",null,"Often the app will require a persistent data solution and with MobX you can use ",Object(a.b)("a",{parentName:"p",href:"https://github.com/pinqy520/mobx-persist"},Object(a.b)("inlineCode",{parentName:"a"},"mobx-react-persist")),".\nIt only takes few extra steps to integrate the library. "),Object(a.b)("p",null,"Also the integration assumes that you are using the decorator pattern for ",Object(a.b)("inlineCode",{parentName:"p"},"mobx"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx",metastring:"file=./third-party-mobx/persistent-data.tsx",file:"./third-party-mobx/persistent-data.tsx"},"//counter.store.js\nimport React from 'react';\nimport { makeObservable, observable, action } from 'mobx';\nimport { persist } from 'mobx-persist'; // add this.\n\nclass CounterStore {\n  constructor() {\n    makeObservable(this)\n  }\n  \n  @persist @observable count = 0; // count is now persistent.\n\n\n  @action.bound\n  increment() {\n    this.count += 1;\n  }\n\n  @action.bound\n  decrement() {\n    this.count -= 1;\n  }\n}\n\nexport const counterStore = new CounterStore(); // You need to export the counterStore instance.\nexport const CounterStoreContext = React.createContext(counterStore);\nexport const useCounterStore = () => React.useContext(CounterStoreContext)\n\n// index.js\nimport { Navigation } from 'react-native-navigation';\nimport AsyncStorage from '@react-native-community/async-storage';\nimport { create } from 'mobx-persist';\nimport { counterStore } from './counter.store'; // import the counter store instance.\n\n// Create a store hydration function.\nasync function hydrateStores() {\n  const hydrate = create({ storage: AsyncStorage });\n  await hydrate('CounterStore', counterStore);\n}\n\nNavigation.events().registerAppLaunchedListener(() => {\n  hydrateStores().then(() => {\n    // ...register screens and start the app.\n  });\n});\n")))}p.isMDXComponent=!0},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),p=r,d=b["".concat(i,".").concat(p)]||b[p]||m[p]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},389:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},390:function(e,t,n){"use strict";var r=n(0),o=n(391);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},391:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},392:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(390),i=n(389),c=n(56),s=n.n(c);var u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,m=e.groupId,p=e.className,d=Object(a.a)(),f=d.tabGroupChoices,h=d.setTabGroupChoices,v=Object(r.useState)(c),x=v[0],g=v[1],O=r.Children.toArray(e.children),y=[];if(null!=m){var j=f[m];null!=j&&j!==x&&b.some((function(e){return e.value===j}))&&g(j)}var C=function(e){var t=e.target,n=y.indexOf(t),r=O[n].props.value;g(r),null!=m&&(h(m,r),setTimeout((function(){var e,n,r,o,a,i,c,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case l:var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case u:var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":x===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:C,onClick:C},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}},393:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},394:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(16),o=n(395);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},395:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);