"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||l;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const l={layout:"post",title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c24\u7bc7 \u65e5\u5fd7\u62a5\u8868\u8f93\u51fa",categories:"Kettle\u5b9e\u6218",description:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c24\u7bc7 \u65e5\u5fd7\u62a5\u8868\u8f93\u51fa",keywords:["Kettle\u5b9e\u6218","Kettlle\u5b9e\u6218100\u7bc7","Kettle in Action","Kettle","Kettle \u751f\u4ea7\u73af\u5883\u90e8\u7f72Pentaho"]},a=void 0,i={unversionedId:"kettle/2019-08-19-kettle-24",id:"kettle/2019-08-19-kettle-24",title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c24\u7bc7 \u65e5\u5fd7\u62a5\u8868\u8f93\u51fa",description:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c24\u7bc7 \u65e5\u5fd7\u62a5\u8868\u8f93\u51fa",source:"@site/programmer/blog/kettle/2019-08-19-kettle-24.md",sourceDirName:"kettle",slug:"/kettle/2019-08-19-kettle-24",permalink:"/blog/kettle/2019-08-19-kettle-24",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/kettle/2019-08-19-kettle-24.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c24\u7bc7 \u65e5\u5fd7\u62a5\u8868\u8f93\u51fa",categories:"Kettle\u5b9e\u6218",description:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c24\u7bc7 \u65e5\u5fd7\u62a5\u8868\u8f93\u51fa",keywords:["Kettle\u5b9e\u6218","Kettlle\u5b9e\u6218100\u7bc7","Kettle in Action","Kettle","Kettle \u751f\u4ea7\u73af\u5883\u90e8\u7f72Pentaho"]},sidebar:"tutorialSidebar",previous:{title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c23\u7bc7 \u547d\u4ee4\u884c\u4ecb\u7ecd\u4f7f\u7528",permalink:"/blog/kettle/2019-08-18-kettle-23"},next:{title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c25\u7bc7 \u4f5c\u4e1a\u6838\u5fc3\u5bf9\u8c61\u8bbe\u7f6e\u53d8\u91cf\u7ec4\u4ef6",permalink:"/blog/kettle/2019-08-20-kettle-25"}},c={},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5f85\u7eed..."))}s.isMDXComponent=!0}}]);