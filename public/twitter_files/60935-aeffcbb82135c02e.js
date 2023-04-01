"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60935],{954860:function(e,o,t){t.d(o,{Z:function(){return w}});var r=t(957379),c=t(25778),n=t(295649),a=t(481936),i=t(91243),s=t(696138),l=t.n(s),d=t(74968),m=t.n(d),h=t(827378),u=t(653578),f=t(435255),v=t(844405),g=t(439333),S=t(824246),y="mode",p="color-scheme",C="data-color-scheme";function k(e){if("system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Z(e,o){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?o("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?o("dark"):void 0}function x(e,o){var t;try{(t=localStorage.getItem(e)||void 0)||localStorage.setItem(e,o)}catch(e){}return t||o}var b=["colorSchemes","components","generateCssVars","cssVarPrefix"];function w(e){var o=e.theme,t=void 0===o?{}:o,s=e.attribute,d=void 0===s?C:s,w=e.modeStorageKey,M=void 0===w?y:w,E=e.colorSchemeStorageKey,I=void 0===E?p:E,j=e.defaultMode,K=void 0===j?"light":j,V=e.defaultColorScheme,W=e.disableTransitionOnChange,L=void 0!==W&&W,P=e.resolveTheme,D=e.excludeVariablesFromRoot;t.colorSchemes&&("string"!=typeof V||t.colorSchemes[V])&&("object"!=typeof V||t.colorSchemes[null==V?void 0:V.light])&&("object"!=typeof V||t.colorSchemes[null==V?void 0:V.dark])||console.error("MUI: `".concat(V,"` does not exist in `theme.colorSchemes`."));var N=h.createContext(void 0),T="string"==typeof V?V:V.light,_="string"==typeof V?V:V.dark;return{CssVarsProvider:function(e){var o,i,s,C,w,E,j,W,T,_,A,F,O,R,q,z,G,H,U,$,B,J,Q=e.children,X=e.theme,Y=void 0===X?t:X,ee=e.modeStorageKey,eo=e.colorSchemeStorageKey,et=e.attribute,er=void 0===et?d:et,ec=e.defaultMode,en=void 0===ec?K:ec,ea=e.defaultColorScheme,ei=void 0===ea?V:ea,es=e.disableTransitionOnChange,el=void 0===es?L:es,ed=e.storageWindow,em=void 0===ed?window:ed,eh=e.documentNode,eu=void 0===eh?"undefined"==typeof document?void 0:document:eh,ef=e.colorSchemeNode,ev=void 0===ef?"undefined"==typeof document?void 0:document.documentElement:ef,eg=e.colorSchemeSelector,eS=void 0===eg?":root":eg,ey=e.disableNestedContext,ep=e.disableStyleSheetGeneration,eC=h.useRef(!1),ek=(0,v.Z)(),eZ=h.useContext(N),ex=!!eZ&&!(void 0!==ey&&ey),eb=Y.colorSchemes,ew=void 0===eb?{}:eb,eM=Y.components,eE=Y.generateCssVars,eI=void 0===eE?function(){return{vars:{},css:{}}}:eE,ej=Y.cssVarPrefix,eK=(0,a.Z)(Y,b),eV=l()(ew),eW="string"==typeof ei?ei:ei.light,eL="string"==typeof ei?ei:ei.dark,eP=(s=void 0===(i=(o={supportedColorSchemes:eV,defaultLightColorScheme:eW,defaultDarkColorScheme:eL,modeStorageKey:void 0===ee?M:ee,colorSchemeStorageKey:void 0===eo?I:eo,defaultMode:en,storageWindow:em}).defaultMode)?"light":i,C=o.defaultLightColorScheme,w=o.defaultDarkColorScheme,E=o.supportedColorSchemes,W=void 0===(j=o.modeStorageKey)?y:j,_=void 0===(T=o.colorSchemeStorageKey)?p:T,F=void 0===(A=o.storageWindow)?window:A,O=(void 0===E?[]:E).join(","),R=h.useState(function(){var e=x(W,s),o=x("".concat(_,"-light"),C),t=x("".concat(_,"-dark"),w);return{mode:e,systemMode:k(e),lightColorScheme:o,darkColorScheme:t}}),z=(q=(0,c.Z)(R,2))[0],G=q[1],H=Z(z,function(e){return"light"===e?z.lightColorScheme:"dark"===e?z.darkColorScheme:void 0}),U=h.useCallback(function(e){G(function(o){if(e===o.mode)return o;var t=e||s;try{localStorage.setItem(W,t)}catch(e){}return(0,n.Z)((0,n.Z)({},o),{},{mode:t,systemMode:k(t)})})},[W,s]),$=h.useCallback(function(e){e?"string"==typeof e?e&&!O.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):G(function(o){var t=(0,n.Z)({},o);return Z(o,function(o){try{localStorage.setItem("".concat(_,"-").concat(o),e)}catch(e){}"light"===o&&(t.lightColorScheme=e),"dark"===o&&(t.darkColorScheme=e)}),t}):G(function(o){var t=(0,n.Z)({},o),r=null===e.light?C:e.light,c=null===e.dark?w:e.dark;if(r){if(O.includes(r)){t.lightColorScheme=r;try{localStorage.setItem("".concat(_,"-light"),r)}catch(e){}}else console.error("`".concat(r,"` does not exist in `theme.colorSchemes`."))}if(c){if(O.includes(c)){t.darkColorScheme=c;try{localStorage.setItem("".concat(_,"-dark"),c)}catch(e){}}else console.error("`".concat(c,"` does not exist in `theme.colorSchemes`."))}return t}):G(function(e){try{localStorage.setItem("".concat(_,"-light"),C),localStorage.setItem("".concat(_,"-dark"),w)}catch(e){}return(0,n.Z)((0,n.Z)({},e),{},{lightColorScheme:C,darkColorScheme:w})})},[O,_,C,w]),B=h.useCallback(function(e){"system"===z.mode&&G(function(o){return(0,n.Z)((0,n.Z)({},o),{},{systemMode:null!=e&&e.matches?"dark":"light"})})},[z.mode]),(J=h.useRef(B)).current=B,h.useEffect(function(){var e=function(){return J.current.apply(J,arguments)},o=window.matchMedia("(prefers-color-scheme: dark)");return o.addListener(e),e(o),function(){return o.removeListener(e)}},[]),h.useEffect(function(){var e=function(e){var o=e.newValue;"string"==typeof e.key&&e.key.startsWith(_)&&(!o||O.match(o))&&(e.key.endsWith("light")&&$({light:o}),e.key.endsWith("dark")&&$({dark:o})),e.key===W&&(!o||["light","dark","system"].includes(o))&&U(o||s)};if(F)return F.addEventListener("storage",e),function(){return F.removeEventListener("storage",e)}},[$,U,W,_,O,s,F]),(0,n.Z)((0,n.Z)({},z),{},{colorScheme:H,setMode:U,setColorScheme:$})),eD=eP.mode,eN=eP.setMode,eT=eP.systemMode,e_=eP.lightColorScheme,eA=eP.darkColorScheme,eF=eP.colorScheme,eO=eP.setColorScheme,eR=eD,eq=eF;ex&&(eR=eZ.mode,eq=eZ.colorScheme);var ez=eR||("system"===en?K:en),eG=eq||("dark"===ez?eL:eW),eH=eI(),eU=eH.css,e$=eH.vars,eB=(0,n.Z)((0,n.Z)({},eK),{},{components:void 0===eM?{}:eM,colorSchemes:ew,cssVarPrefix:ej,vars:e$,getColorSchemeSelector:function(e){return"[".concat(er,'="').concat(e,'"] &')}}),eJ={},eQ={};m()(ew).forEach(function(e){var o=(0,c.Z)(e,2),t=o[0],r=o[1],a=eI(t),i=a.css,s=a.vars;if(eB.vars=(0,u.Z)(eB.vars,s),t===eG&&(l()(r).forEach(function(e){r[e]&&"object"==typeof r[e]?eB[e]=(0,n.Z)((0,n.Z)({},eB[e]),r[e]):eB[e]=r[e]}),eB.palette&&(eB.palette.colorScheme=t)),t===("string"==typeof ei?ei:"dark"===en?ei.dark:ei.light)){if(D){var d={};D(ej).forEach(function(e){d[e]=i[e],delete i[e]}),eJ["[".concat(er,'="').concat(t,'"]')]=d}eJ["".concat(eS,", [").concat(er,'="').concat(t,'"]')]=i}else eQ["".concat(":root"===eS?"":eS,"[").concat(er,'="').concat(t,'"]')]=i}),eB.vars=(0,u.Z)(eB.vars,e$),h.useEffect(function(){eq&&ev&&ev.setAttribute(er,eq)},[eq,er,ev]),h.useEffect(function(){var e;if(el&&eC.current&&eu){var o=eu.createElement("style");o.appendChild(eu.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),eu.head.appendChild(o),window.getComputedStyle(eu.body),e=setTimeout(function(){eu.head.removeChild(o)},1)}return function(){clearTimeout(e)}},[eq,el,eu]),h.useEffect(function(){return eC.current=!0,function(){eC.current=!1}},[]);var eX=h.useMemo(function(){return{mode:eR,systemMode:eT,setMode:eN,lightColorScheme:e_,darkColorScheme:eA,colorScheme:eq,setColorScheme:eO,allColorSchemes:eV}},[eV,eq,eA,e_,eR,eO,eN,eT]),eY=!0;(void 0!==ep&&ep||ex&&(null==ek?void 0:ek.cssVarPrefix)===ej)&&(eY=!1);var e0=(0,S.jsxs)(h.Fragment,{children:[eY&&(0,S.jsxs)(h.Fragment,{children:[(0,S.jsx)(f.Z,{styles:(0,r.Z)({},eS,eU)}),(0,S.jsx)(f.Z,{styles:eJ}),(0,S.jsx)(f.Z,{styles:eQ})]}),(0,S.jsx)(g.Z,{theme:P?P(eB):eB,children:Q})]});return ex?e0:(0,S.jsx)(N.Provider,{value:eX,children:e0})},useColorScheme:function(){var e=h.useContext(N);if(!e)throw Error((0,i.Z)(19));return e},getInitColorSchemeScript:function(e){var o,t,r,c,a,i,s,l,m,h,u;return t=(o=(0,n.Z)({attribute:d,colorSchemeStorageKey:I,defaultMode:K,defaultLightColorScheme:T,defaultDarkColorScheme:_,modeStorageKey:M},e)||{}).defaultMode,c=void 0===(r=o.defaultLightColorScheme)?"light":r,i=void 0===(a=o.defaultDarkColorScheme)?"dark":a,s=o.modeStorageKey,m=void 0===(l=o.colorSchemeStorageKey)?p:l,h=o.attribute,u=o.colorSchemeNode,(0,S.jsx)("script",{dangerouslySetInnerHTML:{__html:"(function() { try {\n        var mode = localStorage.getItem('".concat(void 0===s?y:s,"') || '").concat(void 0===t?"light":t,"';\n        var cssColorScheme = mode;\n        var colorScheme = '';\n        if (mode === 'system') {\n          // handle system mode\n          var mql = window.matchMedia('(prefers-color-scheme: dark)');\n          if (mql.matches) {\n            cssColorScheme = 'dark';\n            colorScheme = localStorage.getItem('").concat(m,"-dark') || '").concat(i,"';\n          } else {\n            cssColorScheme = 'light';\n            colorScheme = localStorage.getItem('").concat(m,"-light') || '").concat(c,"';\n          }\n        }\n        if (mode === 'light') {\n          colorScheme = localStorage.getItem('").concat(m,"-light') || '").concat(c,"';\n        }\n        if (mode === 'dark') {\n          colorScheme = localStorage.getItem('").concat(m,"-dark') || '").concat(i,"';\n        }\n        if (colorScheme) {\n          ").concat(void 0===u?"document.documentElement":u,".setAttribute('").concat(void 0===h?C:h,"', colorScheme);\n        }\n      } catch (e) {} })();")}},"mui-color-scheme-init")}}}},724766:function(e,o,t){t.d(o,{Z:function(){return c}});var r=t(823315);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";function o(){for(var t=arguments.length,c=Array(t),n=0;n<t;n++)c[n]=arguments[n];if(!c.length)return"";var a=c[0];return"string"!=typeof a||a.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?", ".concat(a):", var(--".concat(e?"".concat(e,"-"):"").concat(a).concat(o.apply(void 0,(0,r.Z)(c.slice(1))),")")}return function(t){for(var r=arguments.length,c=Array(r>1?r-1:0),n=1;n<r;n++)c[n-1]=arguments[n];return"var(--".concat(e?"".concat(e,"-"):"").concat(t).concat(o.apply(void 0,c),")")}}},142629:function(e,o,t){t.d(o,{ZP:function(){return v}});var r=t(957379),c=t(993080),n=t(823315),a=t(25778),i=t(374338),s=t.n(i),l=t(74968),d=t.n(l),m=t(696138),h=t.n(m),u=function(e,o,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],c=e;o.forEach(function(e,n){n===o.length-1?s()(c)?c[Number(e)]=t:c&&"object"==typeof c&&(c[e]=t):c&&"object"==typeof c&&(c[e]||(c[e]=r.includes(e)?[]:{}),c=c[e])})},f=function(e,o,t){!function e(r){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];d()(r).forEach(function(r){var l=(0,a.Z)(r,2),d=l[0],m=l[1];t&&(!t||t([].concat((0,n.Z)(c),[d])))||null==m||("object"==typeof m&&h()(m).length>0?e(m,[].concat((0,n.Z)(c),[d]),s()(m)?[].concat((0,n.Z)(i),[d]):i):o([].concat((0,n.Z)(c),[d]),m,i))})}(e)};function v(e,o){var t=o||{},n=t.prefix,a=t.shouldSkipGeneratingVar,i={},s={},l={};return f(e,function(e,o,t){if(("string"==typeof o||"number"==typeof o)&&(!a||!a(e,o))){var d="--".concat(n?"".concat(n,"-"):"").concat(e.join("-"));(0,c.Z)(i,(0,r.Z)({},d,"number"==typeof o?["lineHeight","fontWeight","opacity","zIndex"].some(function(o){return e.includes(o)})||e[e.length-1].toLowerCase().indexOf("opacity")>=0?o:"".concat(o,"px"):o)),u(s,e,"var(".concat(d,")"),t),u(l,e,"var(".concat(d,", ").concat(o,")"),t)}},function(e){return"vars"===e[0]}),{css:i,vars:s,varsWithDefaults:l}}},701869:function(e,o,t){var r=t(25778),c=t(481936),n=t(74968),a=t.n(n),i=t(653578),s=t(142629),l=["colorSchemes","components"],d=["light"];o.Z=function(e,o){var t=e.colorSchemes,n=void 0===t?{}:t,m=(e.components,(0,c.Z)(e,l)),h=(0,s.ZP)(m,o),u=h.vars,f=h.css,v=h.varsWithDefaults,g={},S=n.light,y=(0,c.Z)(n,d);if(a()(y||{}).forEach(function(e){var t=(0,r.Z)(e,2),c=t[0],n=t[1],a=(0,s.ZP)(n,o),l=a.vars,d=a.css,m=a.varsWithDefaults;v=(0,i.Z)(v,m),g[c]={css:d,vars:l}}),S){var p=(0,s.ZP)(S,o),C=p.css,k=p.vars,Z=p.varsWithDefaults;v=(0,i.Z)(v,Z),g.light={css:C,vars:k}}return{vars:v,generateCssVars:function(e){return e?g[e]:{css:f,vars:u}}}}}}]);