"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1491],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var A=n.createContext({}),f=function(e){var t=n.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=f(e.components);return n.createElement(A.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,A=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=f(r),v=a,u=g["".concat(A,".").concat(v)]||g[v]||c[v]||l;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var o={};for(var A in t)hasOwnProperty.call(t,A)&&(o[A]=t[A]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var f=2;f<l;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},75671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>A,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>f});var n=r(87462),a=(r(67294),r(3905));const l={layout:"post",title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c18\u7bc7 JavaScript\u811a\u672c\u7ec4\u4ef6\u4f7f\u7528\u793a\u4f8b",categories:"Kettle\u5b9e\u6218",description:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c18\u7bc7 JavaScript\u811a\u672c\u7ec4\u4ef6\u4f7f\u7528\u793a\u4f8b",keywords:["Kettle\u5b9e\u6218","Kettlle\u5b9e\u6218100\u7bc7","Kettle in Action","Kettle","Kettle Javascript\u811a\u672c\u7ec4\u4ef6"]},i=void 0,o={unversionedId:"kettle/2019-08-15-kettle-18",id:"kettle/2019-08-15-kettle-18",title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c18\u7bc7 JavaScript\u811a\u672c\u7ec4\u4ef6\u4f7f\u7528\u793a\u4f8b",description:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c18\u7bc7 JavaScript\u811a\u672c\u7ec4\u4ef6\u4f7f\u7528\u793a\u4f8b",source:"@site/programmer/blog/kettle/2019-08-15-kettle-18.md",sourceDirName:"kettle",slug:"/kettle/2019-08-15-kettle-18",permalink:"/blog/kettle/2019-08-15-kettle-18",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/kettle/2019-08-15-kettle-18.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c18\u7bc7 JavaScript\u811a\u672c\u7ec4\u4ef6\u4f7f\u7528\u793a\u4f8b",categories:"Kettle\u5b9e\u6218",description:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c18\u7bc7 JavaScript\u811a\u672c\u7ec4\u4ef6\u4f7f\u7528\u793a\u4f8b",keywords:["Kettle\u5b9e\u6218","Kettlle\u5b9e\u6218100\u7bc7","Kettle in Action","Kettle","Kettle Javascript\u811a\u672c\u7ec4\u4ef6"]},sidebar:"tutorialSidebar",previous:{title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c17\u7bc7 JSONPath\u7ec4\u4ef6\u4ecb\u7ecd\u8bf4\u660e",permalink:"/blog/kettle/2019-08-14-kettle-17"},next:{title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c19\u7bc7 \u8f6c\u6362\u6838\u5fc3\u5bf9\u8c61Microsoft Excel\u8f93\u51fa\u7ec4\u4ef6",permalink:"/blog/kettle/2019-08-15-kettle-19"}},A={},f=[{value:"JavaScript\u5185\u7f6e\u5bf9\u8c61",id:"javascript\u5185\u7f6e\u5bf9\u8c61",level:2},{value:"\u83b7\u53d6\u8bbf\u95ee\u53d8\u91cf",id:"\u83b7\u53d6\u8bbf\u95ee\u53d8\u91cf",level:2}],p={toc:f};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"javascript\u5185\u7f6e\u5bf9\u8c61"},"JavaScript\u5185\u7f6e\u5bf9\u8c61"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728JavaScript\u811a\u672c\u4e2d\u4f7f\u7528\u5185\u90e8API\u5bf9\u8c61"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"TransformationName")),"\uff1a\u8f6c\u6362\u540d\u79f0")),(0,a.kt)("h2",{id:"\u83b7\u53d6\u8bbf\u95ee\u53d8\u91cf"},"\u83b7\u53d6\u8bbf\u95ee\u53d8\u91cf"),(0,a.kt)("p",null,"\u8f6c\u6362\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(66978).Z,width:"353",height:"135"})),(0,a.kt)("p",null,"JavaScript\u7684\u811a\u672c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\nvar v1 = getVariable("VAR1", "");\nvar v2 = getVariable("java.io.tmpdir", "");\n\nvar subject="\u81ea\u5b9a\u4e49\u65e5\u5fd7\u8f93\u51fa";\n//\u5b9e\u4f8b\u5316\u65e5\u5fd7channel\u5bf9\u8c61\nvar log= new org.pentaho.di.core.logging.LogChannel(subject);\n//\u65e5\u5fd7\u8f93\u51fa\nlog.logMinimal("v1:"+v1+",v2:"+v2);\n\n')),(0,a.kt)("p",null,"\u5728\u751f\u6210\u8bb0\u5f55\u4e2d\u6211\u4eec\u5b9a\u4e49\u4e86\u9650\u5236\u6570\u636e\u4e3a10\u6761,\u8fd0\u884c\u540e\u63a7\u5236\u53f0\u8f93\u51fa\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(17078).Z,width:"655",height:"311"})))}c.isMDXComponent=!0},66978:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},17078:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kia-JsCp-2-40acbf41d603b2a4fdb54f5ff5d05c5a.png"}}]);