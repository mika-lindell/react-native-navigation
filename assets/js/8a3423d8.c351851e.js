(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{310:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return f}));var a=n(3),i=n(7),o=(n(0),n(548)),r=n(552),s=n(553),l=n(554),c=["components"],d={id:"modal",title:"Modal",sidebar_label:"Modal"},u={unversionedId:"docs/modal",id:"version-6.12.2/docs/modal",isDocsHomePage:!1,title:"Modal",description:"In human-centered design, when we speak about a modal (or modality), we often refer to a set of techniques, aimed at bringing user attention to a specific event / screen / action / etc. Those often require user input. A pop-up on a website, a file deletion confirmation dialogue on your computer, or an alert asking you to enable location service on your phone - these can all be considered modals.",source:"@site/versioned_docs/version-6.12.2/docs/docs-modal.mdx",slug:"/docs/modal",permalink:"/react-native-navigation/6.12.2/docs/modal",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-6.12.2/docs/docs-modal.mdx",version:"6.12.2",sidebar_label:"Modal",sidebar:"version-6.12.2/docs",previous:{title:"Root",permalink:"/react-native-navigation/6.12.2/docs/root"},next:{title:"Overlay",permalink:"/react-native-navigation/6.12.2/docs/overlay"}},b=[{value:"Presenting modals",id:"presenting-modals",children:[]},{value:"Adding a dismiss button",id:"adding-a-dismiss-button",children:[]},{value:"Transparent modals",id:"transparent-modals",children:[]},{value:"Preventing a Modal from being dismissed",id:"preventing-a-modal-from-being-dismissed",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}]},{value:"Presentation Style",id:"presentation-style",children:[]}],p={toc:b},m="wrapper";function f(e){var t=e.components,n=Object(i.a)(e,c);return Object(o.b)(m,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In human-centered design, when we speak about a modal (or modality), we often refer to a set of techniques, aimed at bringing user attention to a specific event / screen / action / etc. Those often require user input. A pop-up on a website, a file deletion confirmation dialogue on your computer, or an alert asking you to enable location service on your phone - these can all be considered modals."),Object(o.b)("p",null,"A modal is a term used in native iOS world (",Object(o.b)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/modality/"},"full description here"),"), while on Android, ",Object(o.b)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/dialogs"},"dialogs")," are often used to create similar or identical behavior, alongside other techniques."),Object(o.b)("h2",{id:"presenting-modals"},"Presenting modals"),Object(o.b)("p",null,"Modal can be displayed by invoking the ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.showModal()")," command, as shown in the example below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"Navigation.showModal({\n  stack: {\n    children: [\n      {\n        component: {\n          name: 'MODAL_SCREEN',\n          options: {\n            topBar: {\n              title: {\n                text: 'Modal',\n              },\n            },\n          },\n        },\n      },\n    ],\n  },\n});\n")),Object(o.b)("p",null,"Here's how the Modal looks on both platforms."),Object(o.b)(r.a,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Android",value:"android"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"ios",mdxType:"TabItem"},Object(o.b)("img",{width:"40%",src:Object(l.a)("img/modal_ios.gif")})),Object(o.b)(s.a,{value:"android",mdxType:"TabItem"},Object(o.b)("img",{width:"40%",src:Object(l.a)("img/modal_android.gif")}))),Object(o.b)("h2",{id:"adding-a-dismiss-button"},"Adding a dismiss button"),Object(o.b)("p",null,"Modals should always have a dismiss button, on left-to-right devices it's typically placed as a left button in the TopBar."),Object(o.b)("p",null,"After we've added our dismiss button, we need to dismiss the modal when the button is pressed."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"For the LeftButton to be visible, the screen must be displayed in a Stack."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"class ModalScreen extends React.Component {\n  // Set a dismiss button in static options\n  static options() {\n    return {\n      topBar: {\n        leftButtons: {\n          id: 'dismiss',\n          icon: require('./dismiss.png'),\n        },\n      },\n    };\n  }\n\n  constructor(props) {\n    super(props);\n    // Register to events\n    Navigation.events().bindComponent(this);\n  }\n\n  // Handle the button press event and dismiss the modal if needed\n  navigationButtonPressed({ buttonId }) {\n    if (buttonId === 'dismiss') {\n      Navigation.dismissModal(this.props.componentId);\n    }\n  }\n}\n")),Object(o.b)("h2",{id:"transparent-modals"},"Transparent modals"),Object(o.b)("p",null,"Showing transparent modals is a nice technique to increase immersiveness while keeping the user in the same context.\nWhen a modal is displayed the content behind it (either root or modal) is removed from hierarchy. While this behavior improves performance, it's undesired when\nshowing transparent modals as we need to see the content behind it."),Object(o.b)("p",null,"To configure this behaviour, we'll need to change the ",Object(o.b)("inlineCode",{parentName:"p"},"modalPresentationStyle")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"overCurrentContext")," and change the layout background color to ",Object(o.b)("inlineCode",{parentName:"p"},"'transparent'"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  modalPresentationStyle: 'overCurrentContext',\n  layout: {\n    backgroundColor: 'transparent'\n  }\n}\n")),Object(o.b)("h2",{id:"preventing-a-modal-from-being-dismissed"},"Preventing a Modal from being dismissed"),Object(o.b)("p",null,"Preventing a modal from being dismissed is done differently for each platform. While preventing the user from dismissing the modal is possible,\nthe modal could still be dismissed programmatically by calling ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.dismissModal()")),Object(o.b)("p",null,"If the modal has a dismiss button, of course you'll need to handle it your self and avoid calling ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.dismissModal()"),"\nwhen the button is pressed."),Object(o.b)("h3",{id:"android"},"Android"),Object(o.b)("p",null,"On Android, modals can be dismissed with the hardware back button. You can handle the back press your self by\nadding a ",Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/backhandler"},"BackHandler")),Object(o.b)("h3",{id:"ios"},"iOS"),Object(o.b)("p",null,"While iOS devices don't have a hardware back button, PageSheet modals can be dismissed by swipe gesture\nfrom the top of the screen. To disable it, set ",Object(o.b)("a",{parentName:"p",href:"#"},"swipeToDismiss")," option to false."),Object(o.b)("h2",{id:"presentation-style"},"Presentation Style"),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"/react-native-navigation/api/options-root#modalpresentationstyle"},"presentation style")," determines the look and feel of a screen displayed as modal."))}f.isMDXComponent=!0},548:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(r,".").concat(b)]||u[b]||p[b]||o;return n?i.a.createElement(m,s(s({ref:t},c),{},{components:n})):i.a.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[b]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},549:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},550:function(e,t,n){"use strict";var a=n(0),i=n(551);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},551:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},552:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(550),r=n(549),s=n(55),l=n.n(s);var c={left:37,right:39};t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,u=e.groupId,b=e.className,p=Object(o.a)(),m=p.tabGroupChoices,f=p.setTabGroupChoices,h=Object(a.useState)(s),v=h[0],g=h[1],O=a.Children.toArray(e.children),y=[];if(null!=u){var j=m[u];null!=j&&j!==v&&d.some((function(e){return e.value===j}))&&g(j)}var w=function(e){var t=e.target,n=y.indexOf(t),a=O[n].props.value;g(a),null!=u&&(f(u,a),setTimeout((function(){var e,n,a,i,o,r,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,o=e.right,r=window,s=r.innerHeight,c=r.innerWidth,n>=0&&o<=c&&i<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case c.right:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case c.left:var i=y.indexOf(e.target)-1;n=y[i]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:N,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},553:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},554:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var a=n(16),i=n(555);function o(){var e=Object(a.default)().siteConfig,t=void 0===e?{}:e,n=t.baseUrl,o=void 0===n?"/":n,r=t.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,r=o.forcePrependBaseUrl,s=void 0!==r&&r,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(r,o,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},555:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);