(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(388)),i=(n(392),n(393),{id:"component",title:"Component",sidebar_label:"Component"}),c={unversionedId:"api/component",id:"version-6.12.2/api/component",isDocsHomePage:!1,title:"Component",description:"registerComponent",source:"@site/versioned_docs/version-6.12.2/api/api-component.mdx",slug:"/api/component",permalink:"/react-native-navigation/6.12.2/api/component",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/api/api-component.mdx",version:"6.12.2",sidebar_label:"Component",sidebar:"version-6.12.2/api",next:{title:"Root",permalink:"/react-native-navigation/6.12.2/api/root"}},l=[{value:"<code>registerComponent</code>",id:"registercomponent",children:[]},{value:"<code>setLazyComponentRegistrator</code>",id:"setlazycomponentregistrator",children:[]},{value:"<code>updateProps</code>",id:"updateprops",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"registercomponent"},Object(o.b)("inlineCode",{parentName:"h2"},"registerComponent")),Object(o.b)("p",null,"Every screen component in your app must be registered with a unique name. The component itself is a traditional React component extending ",Object(o.b)("inlineCode",{parentName:"p"},"React.Component")," or ",Object(o.b)("inlineCode",{parentName:"p"},"React.PureComponent"),". It can also be a HOC to provide context (or a Redux store) or a functional component. Similar to React Native's ",Object(o.b)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent"),"."),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"componentName"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Unique component name - not to be confused with ",Object(o.b)("strong",{parentName:"td"},"componentId"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"componentProvider"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Function"),Object(o.b)("td",{parentName:"tr",align:null},"Anonymous function that returns the React component to register, ",Object(o.b)("strong",{parentName:"td"},"OR")," the component wrapped with Providers")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"concreteComponentProvider"),Object(o.b)("td",{parentName:"tr",align:null},"No"),Object(o.b)("td",{parentName:"tr",align:null},"Function"),Object(o.b)("td",{parentName:"tr",align:null},"Anonymous function that returns the concrete React component. If your component is wrapped with Providers, this must be an instance of the concrete component.")))),Object(o.b)("h4",{id:"examples"},"Examples"),Object(o.b)("h5",{id:"registering-a-component"},"Registering a component"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => WelcomeScreen);\n")),Object(o.b)("h5",{id:"registering-a-component-wrapped-with-providers"},"Registering a component wrapped with Providers"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Provider } from 'react-redux';\nconst store = createStore();\n\nNavigation.registerComponent(`navigation.playground.MyScreen`, () => (props) =>\n  <Provider store={store}>\n    <MyScreen {...props} />\n  </Provider>,\n  () => MyScreen)\n);\n")),Object(o.b)("h2",{id:"setlazycomponentregistrator"},Object(o.b)("inlineCode",{parentName:"h2"},"setLazyComponentRegistrator")),Object(o.b)("p",null,"Pass a function that will allow you to register a component lazily. When encountering an unknown component name, this function will be called, giving you a chance to register the component before an error is thrown."),Object(o.b)("h4",{id:"parameters-1"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"lazyRegistratorFn"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"(lazyComponentRequest: string"),Object(o.b)("td",{parentName:"tr",align:null},"number) => void")))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.setLazyComponentRegistrator((componentName) => {\n  if (componentName === 'navigation.playground.LazyScreen') {\n    Navigation.registerComponent(Screens.LazilyRegisteredScreen, () => LazyScreen);\n  }\n});\n")),Object(o.b)("h2",{id:"updateprops"},Object(o.b)("inlineCode",{parentName:"h2"},"updateProps")),Object(o.b)("p",null,"Update props of a component registered with ",Object(o.b)("a",{parentName:"p",href:"#registercomponent"},"registerComponent"),". Updating props triggers the component lifecycle methods related to ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/react-component.html#updating"},"updating"),"."),Object(o.b)("h4",{id:"parameters-2"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Required"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"componentId"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"Unique component id")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"options"),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"object"),Object(o.b)("td",{parentName:"tr",align:null},"props object to pass to the component")))),Object(o.b)("h4",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.updateProps('MY_COMPONENT', {\n  // props to pass to the component\n};\n")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"updateProps")," is called with a componentId. This is the same unique id components have in props. Don't confuse it with the ",Object(o.b)("inlineCode",{parentName:"p"},"componentName")," we use when registering components with ",Object(o.b)("a",{parentName:"p",href:"#registerComponent"},"Navigation.registerComponent"),"."))))}b.isMDXComponent=!0},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},389:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},390:function(e,t,n){"use strict";var a=n(0),r=n(391);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},391:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},392:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(390),i=n(389),c=n(56),l=n.n(c);var p=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,s=e.values,m=e.groupId,u=e.className,d=Object(o.a)(),g=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(a.useState)(c),h=j[0],v=j[1],f=a.Children.toArray(e.children),N=[];if(null!=m){var y=g[m];null!=y&&y!==h&&s.some((function(e){return e.value===y}))&&v(y)}var w=function(e){var t=e.target,n=N.indexOf(t),a=f[n].props.value;v(a),null!=m&&(O(m,a),setTimeout((function(){var e,n,a,r,o,i,c,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,p=i.innerWidth,n>=0&&o<=p&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case b:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case p:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},u)},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(f.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},393:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);