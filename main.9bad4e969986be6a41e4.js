(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e){e.exports=JSON.parse('{"title":"React Boyard: react starter kit"}')},46:function(e){e.exports=JSON.parse('{"title":"React Boyard: kit de demarrage React"}')},86:function(e,t,n){"use strict";n.r(t);var r=n(37),a=n.n(r),o=n(0),i=n.n(o),c=n(17),l=n.n(c),u=n(18),s=n(2),d=n(50),p=n(10),f=n(39),g=n(5),m=n.n(g);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={counterValue:1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_COUNTER":return b({},e,{counterValue:e.counterValue+1});case"DECREMENT_COUNTER":return b({},e,{counterValue:e.counterValue-1});case"RESET_COUNTER":return E;default:return e}},O={data:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_QUOTE_SUCCESS":case"GET_QUOTES_SUCCESS":return{data:t.payload};case"RESET_QUOTES":return O;default:return e}},y=Object(p.c)({counter:w,quotes:v}),x=n(40),_=n.n(x),j=n(25),C=n(14),N=n(44),S=n(45),M=n(46);j.a.use(N.a).use(C.a).init({resources:{en:{translation:S},fr:{translation:M}},ns:"translation",fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});j.a;var T=n(8),k=n.n(T),R="#192231",D="#985E6D",I="#98878F",L="#888BA0",P="#636883",U=s.c.div.withConfig({displayName:"Menu__MenuContainer",componentId:"wjbjv7-0"})(["display:flex;"]),q=Object(s.c)(u.b).withConfig({displayName:"Menu__MenuItem",componentId:"wjbjv7-1"})(["margin:8px;font-size:24px;cursor:pointer;text-decoration:none;color:",";&.selected{color:",";font-weight:500;border-bottom:1px solid ",";}&:hover{font-weight:700;color:",";}"],I,D,D,D),Q=function(){return i.a.createElement(U,null,i.a.createElement(q,{to:"/hooks",activeClassName:"selected"},"Hooks"),i.a.createElement(q,{to:"/redux",activeClassName:"selected"},"Redux"),i.a.createElement(q,{to:"/others",activeClassName:"selected"},"Others"))},W=s.c.div.withConfig({displayName:"LanguageSelector__SelectorContainer",componentId:"sc-68q3i8-0"})(["display:flex;flex-direction:row;padding:8px;font-size:18px;line-height:18px;color:white;"]),V=s.c.div.withConfig({displayName:"LanguageSelector__Language",componentId:"sc-68q3i8-1"})(["margin:4px;font-weight:400;cursor:pointer;color:",";:hover{font-weight:700;}"],(function(e){return e.selected?P:L})),B=function(){var e=Object(C.b)().i18n;return i.a.createElement(W,null,i.a.createElement(V,{onClick:function(){return e.changeLanguage("fr")},selected:"fr"===e.language},"FR"),"|",i.a.createElement(V,{onClick:function(){return e.changeLanguage("en")},selected:"en"===e.language},"EN"))},H=n(11),F=s.c.div.withConfig({displayName:"HeaderBar__HeaderBarContainer",componentId:"oxncv8-0"})(["width:calc(100% - 32px);height:64px;background-color:",";display:flex;align-items:center;justify-content:space-between;padding:16px;flex-direction:",";"],R,(function(e){return e.isMobile?"row-reverse":"row"})),J=s.c.div.withConfig({displayName:"HeaderBar__PageName",componentId:"oxncv8-1"})(["font-size:32px;font-weight:700;color:",";"],D),X=s.c.div.withConfig({displayName:"HeaderBar__MenusContainer",componentId:"oxncv8-2"})(["display:flex;flex-direction:row;"]),z=function(e){var t=e.title,n=Object(C.b)().t,r={isDesktopOrLaptop:Object(H.useMediaQuery)({query:"(min-device-width: 1224px)"}),isTabletOrMobile:Object(H.useMediaQuery)({query:"(max-width: 1224px)"}),isMobile:Object(H.useMediaQuery)({query:"(max-width: 767px)"}),Desktop:function(e){var t=e.children;return Object(H.useMediaQuery)({minWidth:1224})?t:null},Tablet:function(e){var t=e.children;return Object(H.useMediaQuery)({minWidth:768,maxWidth:1224})?t:null},Mobile:function(e){var t=e.children;return Object(H.useMediaQuery)({maxWidth:767})?t:null},Default:function(e){var t=e.children;return Object(H.useMediaQuery)({minWidth:768})?t:null}},a=r.Desktop,o=r.isMobile;return i.a.createElement(F,{isMobile:o},i.a.createElement(J,null,n(t)),i.a.createElement(X,null,i.a.createElement(Q,null),i.a.createElement(a,null,i.a.createElement(B,null))))};z.propTypes={title:k.a.string.isRequired};var A=z,G=s.c.div.withConfig({displayName:"HomePage__PageContainer",componentId:"sc-15gg50f-0"})(["width:100%;height:100%;background-color:white;color:black;margin:12px;"]),K=function(){return i.a.createElement(G,null,i.a.createElement(A,{title:"title"}),"Testttttt")};function Y(){var e=a()(["\n\thtml, body, #root, #root>div {\n\theight: 100%;\n\twidth:100%;\n\tmargin: 0 ;\n\tfont-family: ",";\n}\n"]);return Y=function(){return e},e}var Z=_.a.create({baseURL:"https://thesimpsonsquoteapi.glitch.me/quotes"}),$=Object(p.e)(y,Object(p.d)(Object(p.a)(f.a.withExtraArgument(Z)),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),ee=Object(s.b)(Y(),(function(e){return e.theme.fontFamily}));l.a.render(i.a.createElement((function(){return i.a.createElement(d.a,{store:$},i.a.createElement(u.a,{basename:"/react-boyard"},i.a.createElement(s.a,{theme:{fontFamily:"'Oxygen', 'Lato', sans-serif"}},i.a.createElement(K,null),i.a.createElement(ee,null))))}),null),document.querySelector("#root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./sw.js").then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW registration failed: ",e)}))}))}},[[86,1,2]]]);
//# sourceMappingURL=main.9bad4e969986be6a41e4.js.map