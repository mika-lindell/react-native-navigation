/*! For license information please see 2.1799c581.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{390:function(e,t,a){"use strict";var n=a(0),r=a(391);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},391:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},401:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(389),i=a(399),s=a(394),u=a(23),d=a(396);function f(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),b=Object(s.a)(c),v=Object(s.a)(t),p=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{href:m?p:l}:Object.assign({isNavLink:!0,activeClassName:f,to:b},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(v)}}:null),h),u)}function m(e){var t,a=e.items,i=e.position,s=e.className,u=Object(r.a)(e,["items","position","className"]),d=Object(c.useRef)(null),m=Object(c.useRef)(null),h=Object(c.useState)(!1),b=h[0],v=h[1];Object(c.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]);var p=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return a?o.a.createElement("div",{ref:d,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":b})},o.a.createElement(f,Object(n.a)({className:p(s)},u,{onClick:u.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!b))}}),null!==(t=u.children)&&void 0!==t?t:u.label),o.a.createElement("ul",{ref:m,className:"dropdown__menu"},a.map((function(e,t){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:t},o.a.createElement(f,Object(n.a)({onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var n=d.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:p(c,!0)},l)))})))):o.a.createElement(f,Object(n.a)({className:p(s)},u))}function h(e){var t,a,i,s=e.items,m=e.className,h=(e.position,Object(r.a)(e,["items","className","position"])),b=Object(c.useRef)(null),v=Object(u.useLocation)().pathname,p=Object(c.useState)((function(){var e;return null===(e=!(null!=s&&s.some((function(e){return Object(d.isSamePath)(e.to,v)}))))||void 0===e||e})),g=p[0],O=p[1],E=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(f,Object(n.a)({className:E(m)},h)));var j=null!==(t=b.current)&&void 0!==t&&t.scrollHeight?(null===(a=b.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":g})},o.a.createElement(f,Object(n.a)({role:"button",className:E(m,!0)},h,{onClick:function(e){e.preventDefault(),O((function(e){return!e}))}}),null!==(i=h.children)&&void 0!==i?i:h.label),o.a.createElement("ul",{className:"menu__list",ref:b,style:{height:g?void 0:j}},s.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(f,Object(n.a)({activeClassName:"menu__link--active",className:E(a)},c,{onClick:h.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,["mobile"]),c=a?h:m;return o.a.createElement(c,n)}},402:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(389),o=a(397),l=a(23),i=a(58),s=a.n(i);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var d=function(){var e=Object(n.useRef)(null),t=Object(l.useLocation)();return Object(n.useEffect)((function(){t.hash||u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:s.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(o.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},f=a(396),m=a(390),h=a(59),b=a.n(h);var v=function(){var e,t=Object(m.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,l=Object(f.useThemeConfig)().announcementBar;if(!l)return null;var i=l.content,s=l.backgroundColor,u=l.textColor,d=l.isCloseable;return!i||d&&a?null:r.a.createElement("div",{className:b.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},r.a.createElement("div",{className:Object(c.a)(b.a.announcementBarContent,(e={},e[b.a.announcementBarCloseable]=d,e)),dangerouslySetInnerHTML:{__html:i}}),d?r.a.createElement("button",{type:"button",className:b.a.announcementBarClose,onClick:n,"aria-label":Object(o.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},p=a(3),g=a(7),O=a(28),E=a(16),j=a(394),k=a(399),y=a(24),C=a(417);function w(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var _=a(418);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function L(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var I="Ctrl";var D=r.a.forwardRef((function(e,t){var a=e.translations,c=void 0===a?{}:a,o=L(e,["translations"]),l=c.buttonText,i=void 0===l?"Search":l,s=c.buttonAriaLabel,u=void 0===s?"Search":s,d=S(Object(n.useState)(null),2),f=d[0],m=d[1];return Object(n.useEffect)((function(){"undefined"!=typeof navigator&&m(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":I)}),[]),r.a.createElement("button",N({type:"button",className:"DocSearch DocSearch-Button","aria-label":u},o,{ref:t}),r.a.createElement("span",{className:"DocSearch-Button-Container"},r.a.createElement(_.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},i)),null!==f&&r.a.createElement("span",{className:"DocSearch-Button-Keys"},r.a.createElement("span",{className:"DocSearch-Button-Key"},f===I?r.a.createElement(w,null):f),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K")))})),P=a(398);function A(){var e=function(){var e=Object(E.default)().i18n,t=Object(P.useAllDocsData)(),a=Object(P.useActivePluginAndVersion)(),n=Object(f.useDocsPreferredVersionByPluginId)(),r=[f.DEFAULT_SEARCH_TAG].concat(Object.keys(t).map((function(e){var r,c,o=(null==a||null===(r=a.activePlugin)||void 0===r?void 0:r.pluginId)===e?a.activeVersion:void 0,l=n[e],i=t[e].versions.find((function(e){return e.isLast})),s=null!==(c=null!=o?o:l)&&void 0!==c?c:i;return Object(f.docVersionSearchTag)(e,s.name)})));return{locale:e.currentLocale,tags:r}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var B=null;function x(e){var t=e.hit,a=e.children;return r.a.createElement(k.a,{to:t.url},a)}function M(e){var t=e.state,a=e.onClose,n=Object(C.a)().generateSearchPageLink;return r.a.createElement(k.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function R(e){var t,c,i=e.contextualSearch,s=Object(g.a)(e,["contextualSearch"]),u=Object(E.default)().siteMetadata,d=A(),f=null!==(t=null===(c=s.searchParameters)||void 0===c?void 0:c.facetFilters)&&void 0!==t?t:[],m=i?[].concat(d,f):f,h=Object.assign({},s.searchParameters,{facetFilters:m}),b=Object(j.b)().withBaseUrl,v=Object(l.useHistory)(),k=Object(n.useRef)(null),C=Object(n.useRef)(null),w=Object(n.useState)(!1),_=w[0],N=w[1],S=Object(n.useState)(null),T=S[0],L=S[1],I=Object(n.useCallback)((function(){return B?Promise.resolve():Promise.all([a.e(315).then(a.bind(null,502)),Promise.all([a.e(0),a.e(316)]).then(a.bind(null,501)),a.e(0).then(a.t.bind(null,387,7))]).then((function(e){var t=e[0].DocSearchModal;B=t}))}),[]),P=Object(n.useCallback)((function(){I().then((function(){k.current=document.createElement("div"),document.body.insertBefore(k.current,document.body.firstChild),N(!0)}))}),[I,N]),R=Object(n.useCallback)((function(){N(!1),k.current.remove()}),[N]),V=Object(n.useCallback)((function(e){I().then((function(){N(!0),L(e.key)}))}),[I,N,L]),U=Object(n.useRef)({navigate:function(e){var t=e.itemUrl;v.push(t)}}).current,F=Object(n.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:b(""+t.pathname+t.hash)})}))})).current,H=Object(n.useMemo)((function(){return function(e){return r.a.createElement(M,Object(p.a)({},e,{onClose:R}))}}),[R]),X=Object(n.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",u.docusaurusVersion),e}),[u.docusaurusVersion]);!function(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,c=e.onInput,o=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,a=t.tagName;return t.isContentEditable||"INPUT"===a||"SELECT"===a||"TEXTAREA"===a}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?n():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||a()),o&&o.current===document.activeElement&&c&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&c(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,c,o])}({isOpen:_,onOpen:P,onClose:R,onInput:V,searchButtonRef:C});var K=Object(o.b)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+s.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),r.a.createElement(D,{onTouchStart:I,onFocus:I,onMouseOver:I,onClick:P,ref:C,translations:{buttonText:K,buttonAriaLabel:K}}),_&&Object(O.createPortal)(r.a.createElement(B,Object(p.a)({onClose:R,initialScrollY:window.scrollY,initialQuery:T,navigator:U,transformItems:F,hitComponent:x,resultsFooterComponent:H,transformSearchClient:X},s,{searchParameters:h})),k.current))}var V=function(){var e=Object(E.default)().siteConfig;return r.a.createElement(R,e.themeConfig.algolia)},U=a(445),F=a.n(U),H=a(60),X=a.n(H),K=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(X.a.toggle,X.a.dark),style:a},t)},z=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(X.a.toggle,X.a.light),style:a},t)},q=function(e){var t=Object(f.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(E.default)().isClient;return r.a.createElement(F.a,Object(p.a)({disabled:!l,icons:{checked:r.a.createElement(K,{icon:a,style:n}),unchecked:r.a.createElement(z,{icon:c,style:o})}},e))},G=a(408),Y=a(420),W=function(e){var t=Object(l.useLocation)(),a=Object(n.useState)(e),r=a[0],c=a[1],o=Object(n.useRef)(!1),i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),f=d[0],m=d[1],h=Object(n.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return Object(Y.a)((function(t){var a=t.scrollY;if(e)if(a<f)c(!0);else{if(o.current)return o.current=!1,c(!1),void u(a);s&&0===a&&c(!0);var n=document.documentElement.scrollHeight-f,r=window.innerHeight;s&&a>=s?c(!1):a+r<n&&c(!0),u(a)}}),[s,f,o]),Object(n.useEffect)((function(){e&&s&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:h,isNavbarVisible:r}},Q=a(421),J=a(422),Z=a(401),$=function(e){var t=e.width,a=void 0===t?20:t,n=e.height,c=void 0===n?20:n,o=Object(g.a)(e,["width","height"]);return r.a.createElement("svg",Object(p.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:a,height:c},o),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function ee(e){var t=e.mobile,a=e.dropdownItemsBefore,n=e.dropdownItemsAfter,c=Object(g.a)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),o=Object(E.default)().i18n,l=o.currentLocale,i=o.locales,s=o.localeConfigs,u=Object(f.useAlternatePageUtils)();function d(e){return s[e].label}var m=i.map((function(e){var t="pathname://"+u.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":""}})),h=[].concat(a,m,n),b=t?"Languages":d(l);return r.a.createElement(Z.a,Object(p.a)({},c,{href:"#",mobile:t,label:r.a.createElement("span",null,r.a.createElement($,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,b)),items:h}))}var te=a(61),ae=a.n(te);function ne(e){return e.mobile?null:r.a.createElement("div",{className:ae.a.searchWrapper},r.a.createElement(V,null))}var re={default:function(){return Z.a},localeDropdown:function(){return ee},search:function(){return ne},docsVersion:function(){return a(450).default},docsVersionDropdown:function(){return a(451).default},doc:function(){return a(452).default}};function ce(e){var t=e.type,a=Object(g.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=re[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var oe=a(423),le=a(425),ie=a(63),se=a.n(ie),ue="right";var de=function(){var e,t=Object(f.useThemeConfig)(),a=t.navbar,o=a.items,l=a.hideOnScroll,i=a.style,s=t.colorMode.disableSwitch,u=Object(n.useState)(!1),d=u[0],m=u[1],h=Object(G.a)(),b=h.isDarkTheme,v=h.setLightTheme,g=h.setDarkTheme,O=W(l),E=O.navbarRef,j=O.isNavbarVisible;Object(Q.a)(d);var k=Object(n.useCallback)((function(){m(!0)}),[m]),y=Object(n.useCallback)((function(){m(!1)}),[m]),C=Object(n.useCallback)((function(e){return e.target.checked?g():v()}),[v,g]),w=Object(J.a)();Object(n.useEffect)((function(){w===J.b.desktop&&m(!1)}),[w]);var _=o.some((function(e){return"search"===e.type})),N=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:ue)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:ue)}))}}(o),S=N.leftItems,T=N.rightItems;return r.a.createElement("nav",{ref:E,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":d},e[se.a.navbarHideable]=l,e[se.a.navbarHidden]=l&&!j,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:k,onKeyDown:k},r.a.createElement(le.a,null)),r.a.createElement(oe.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),S.map((function(e,t){return r.a.createElement(ce,Object(p.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},T.map((function(e,t){return r.a.createElement(ce,Object(p.a)({},e,{key:t}))})),!s&&r.a.createElement(q,{className:se.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:b,onChange:C}),!_&&r.a.createElement(V,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(oe.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:y}),!s&&d&&r.a.createElement(q,{"aria-label":"Dark mode toggle in sidebar",checked:b,onChange:C})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.a.createElement(ce,Object(p.a)({mobile:!0},e,{onClick:y,key:t}))})))))))},fe=a(64),me=a.n(fe),he=a(424);function be(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(g.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(j.a)(t),i=Object(j.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(k.a,Object(p.a)({className:"footer__link-item"},a?{href:c?i:a}:{to:l},o),n)}var ve=function(e){var t=e.sources,a=e.alt;return r.a.createElement(he.a,{className:"footer__logo",alt:a,sources:t})};var pe=function(){var e=Object(f.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,s={light:Object(j.a)(i.src),dark:Object(j.a)(i.srcDark||i.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(be,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement(k.a,{href:i.href,className:me.a.footerLogoLink},r.a.createElement(ve,{alt:i.alt,sources:s})):r.a.createElement(ve,{alt:i.alt,sources:s})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},ge=a(8),Oe="light",Ee="dark",je=function(e){return e===Ee?Ee:Oe},ke=function(){return ge.a.canUseDOM?je(document.documentElement.getAttribute("data-theme")):Oe},ye=function(e){try{localStorage.setItem("theme",je(e))}catch(t){console.error(t)}},Ce=function(){var e=Object(f.useThemeConfig)().colorMode,t=e.disableSwitch,a=e.respectPrefersColorScheme,r=Object(n.useState)(ke),c=r[0],o=r[1],l=Object(n.useCallback)((function(){o(Oe),ye(Oe)}),[]),i=Object(n.useCallback)((function(){o(Ee),ye(Ee)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",je(c))}),[c]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&o(je(e))}catch(a){console.error(a)}}),[o]),Object(n.useEffect)((function(){t&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?Ee:Oe)}))}),[]),{isDarkTheme:c===Ee,setLightTheme:l,setDarkTheme:i}},we=a(419);var _e=function(e){var t=Ce(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(we.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},Ne="docusaurus.tab.",Se=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(Ne))e[n.substring(Ne.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},Te="docusaurus.announcement.dismiss",Le="docusaurus.announcement.id",Ie=function(){var e=Object(f.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){localStorage.setItem(Te,"true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(Le);"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;localStorage.setItem(Le,t),n&&localStorage.setItem(Te,"false"),(n||"false"===localStorage.getItem(Te))&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},De=a(391);var Pe=function(e){var t=Se(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=Ie(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(De.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function Ae(e){var t=e.children;return r.a.createElement(_e,null,r.a.createElement(Pe,null,r.a.createElement(f.DocsPreferredVersionContextProvider,null,t)))}function Be(e){var t=e.locale,a=e.version,n=e.tag,c=t;return r.a.createElement(y.a,null,c&&r.a.createElement("meta",{name:"docsearch:language",content:c}),a&&r.a.createElement("meta",{name:"docsearch:version",content:a}),n&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:n}))}var xe=a(426);function Me(){var e=Object(E.default)().i18n,t=e.defaultLocale,a=e.locales,n=Object(f.useAlternatePageUtils)();return r.a.createElement(y.a,null,a.map((function(e){return r.a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.a.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Re(e){var t=e.permalink,a=Object(E.default)().siteConfig.url,n=function(){var e=Object(E.default)().siteConfig.url,t=Object(l.useLocation)().pathname;return e+Object(j.a)(t)}(),c=t?""+a+t:n;return r.a.createElement(y.a,null,r.a.createElement("meta",{property:"og:url",content:c}),r.a.createElement("link",{rel:"canonical",href:c}))}function Ve(e){var t=Object(E.default)(),a=t.siteConfig,n=t.i18n,c=n.currentLocale,o=n.localeConfigs,l=a.favicon,i=a.themeConfig,s=i.image,u=i.metadatas,d=e.title,m=e.description,h=e.image,b=e.keywords,v=e.searchMetadatas,g=Object(j.a)(l),O=c,k=o[c].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("html",{lang:O,dir:k}),l&&r.a.createElement("link",{rel:"shortcut icon",href:g})),r.a.createElement(xe.a,{title:d,description:m,keywords:b,image:h||s}),r.a.createElement(Re,null),r.a.createElement(Me,null),r.a.createElement(Be,Object(p.a)({tag:f.DEFAULT_SEARCH_TAG,locale:c},v)),r.a.createElement(y.a,null,u.map((function(e,t){return r.a.createElement("meta",Object(p.a)({key:"metadata_"+t},e))}))))}a(65);var Ue=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(66);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return Ue(),r.a.createElement(Ae,null,r.a.createElement(Ve,e),r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(de,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(pe,null))}},408:function(e,t,a){"use strict";var n=a(0),r=a(419);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},417:function(e,t,a){"use strict";var n=a(23),r=a(8),c=a(16);t.a=function(){var e=Object(n.useHistory)(),t=Object(n.useLocation)(),a=Object(c.default)().siteConfig,o=(a=void 0===a?{}:a).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},418:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},419:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},420:function(e,t,a){"use strict";var n=a(0),r=a(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",l,e),function(){return window.removeEventListener("scroll",l,e)}}),t),r}},421:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},422:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(0),r=a(8),c={desktop:"desktop",mobile:"mobile"};t.a=function(){var e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}var a=Object(n.useState)(t),o=a[0],l=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){l(t())}}),[]),o}},423:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(399),i=a(424),s=a(394),u=a(16),d=a(396);t.a=function(e){var t=Object(u.default)().isClient,a=Object(d.useThemeConfig)().navbar,c=a.title,f=a.logo,m=void 0===f?{src:""}:f,h=e.imageClassName,b=e.titleClassName,v=Object(r.a)(e,["imageClassName","titleClassName"]),p=Object(s.a)(m.href||"/"),g={light:Object(s.a)(m.src),dark:Object(s.a)(m.srcDark||m.src)};return o.a.createElement(l.a,Object(n.a)({to:p},v,m.target&&{target:m.target}),m.src&&o.a.createElement(i.a,{key:t,className:h,sources:g,alt:m.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:b},c))}},424:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(389),i=a(16),s=a(408),u=a(62),d=a.n(u);t.a=function(e){var t=Object(i.default)().isClient,a=Object(s.a)().isDarkTheme,c=e.sources,u=e.className,f=e.alt,m=void 0===f?"":f,h=Object(r.a)(e,["sources","className","alt"]),b=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,b.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:m,className:Object(l.a)(d.a.themedImage,d.a["themedImage--"+e],u)},h))})))}},425:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c);t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,l=void 0===c?30:c,i=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:i,width:a,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},445:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=f(c),l=f(a(446)),i=f(a(1)),s=f(a(447)),u=f(a(448)),d=a(449);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},446:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},447:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},448:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},449:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},450:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(401),i=a(398),s=a(396);function u(e){var t,a=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]),f=Object(i.useActiveVersion)(u),m=Object(s.useDocsPreferredVersion)(u).preferredVersion,h=Object(i.useLatestVersion)(u),b=null!==(t=null!=f?f:m)&&void 0!==t?t:h,v=null!=a?a:b.label,p=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.a.createElement(l.a,Object(n.a)({},d,{label:v,to:p}))}},451:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(401),i=a(398),s=a(396),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,a,c=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,m=e.dropdownItemsBefore,h=e.dropdownItemsAfter,b=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),v=Object(i.useActiveDocContext)(d),p=Object(i.useVersions)(d),g=Object(i.useLatestVersion)(d),O=Object(s.useDocsPreferredVersion)(d),E=O.preferredVersion,j=O.savePreferredVersionName;var k=null!==(t=null!==(a=v.activeVersion)&&void 0!==a?a:E)&&void 0!==t?t:g,y=c?"Versions":k.label,C=c?void 0:u(k).path;return o.a.createElement(l.a,Object(n.a)({},b,{mobile:c,label:y,to:C,items:function(){var e=p.map((function(e){var t=(null==v?void 0:v.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==v?void 0:v.activeVersion)},onClick:function(){j(e.name)}}})),t=[].concat(m,e,h);if(!(t.length<=1))return t}(),isActive:f?function(){return!1}:void 0}))}},452:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(401),i=a(398),s=a(389),u=a(396);function d(e){var t,a,c=e.docId,d=e.activeSidebarClassName,f=e.label,m=e.docsPluginId,h=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),b=Object(i.useActiveDocContext)(m),v=b.activeVersion,p=b.activeDoc,g=Object(u.useDocsPreferredVersion)(m).preferredVersion,O=Object(i.useLatestVersion)(m),E=null!==(t=null!=v?v:g)&&void 0!==t?t:O,j=E.docs.find((function(e){return e.id===c}));if(!j)throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+E.name+".\nAvailable docIds=\n- "+E.docs.join("\n- "));return o.a.createElement(l.a,Object(n.a)({exact:!0},h,{className:Object(s.a)(h.className,(a={},a[d]=p&&p.sidebar===j.sidebar,a)),label:null!=f?f:j.id,to:j.path}))}}}]);