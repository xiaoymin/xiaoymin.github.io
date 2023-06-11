"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9678],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),m=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(a),k=n,s=u["".concat(i,".").concat(k)]||u[k]||g[k]||l;return a?r.createElement(s,p(p({ref:e},d),{},{components:a})):r.createElement(s,p({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},78186:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={layout:"post",title:"\u6280\u672f\u67b6\u6784\u6574\u7406",categories:"Java",description:"\u6280\u672f\u67b6\u6784\u6574\u7406",keywords:["Spring Boot"]},p=void 0,o={unversionedId:"operate/2017-05-08-company-platform",id:"operate/2017-05-08-company-platform",title:"\u6280\u672f\u67b6\u6784\u6574\u7406",description:"\u6280\u672f\u67b6\u6784\u6574\u7406",source:"@site/programmer/blog/operate/2017-05-08-company-platform.md",sourceDirName:"operate",slug:"/operate/2017-05-08-company-platform",permalink:"/blog/operate/2017-05-08-company-platform",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/operate/2017-05-08-company-platform.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"\u6280\u672f\u67b6\u6784\u6574\u7406",categories:"Java",description:"\u6280\u672f\u67b6\u6784\u6574\u7406",keywords:["Spring Boot"]},sidebar:"tutorialSidebar",previous:{title:"Java\u67b6\u6784\u5e08\u4e4b\u8def",permalink:"/blog/operate/2017-03-30-java-road-architect"},next:{title:"confluence \u5b89\u88c5\u6307\u5357(Linux)",permalink:"/blog/operate/2017-09-01-confluence-linux-install-guide"}},i={},m=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5f00\u53d1\u8bed\u8a00",id:"\u5f00\u53d1\u8bed\u8a00",level:2},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",level:2},{value:"\u540e\u7aef\u6280\u672f",id:"\u540e\u7aef\u6280\u672f",level:2},{value:"\u524d\u7aef\u6280\u672f",id:"\u524d\u7aef\u6280\u672f",level:2}],d={toc:m};function g(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.kt)("p",null,"\u57fa\u4e8eSpring Boot+Cloud-SDK\u5206\u5e03\u5f0f\u654f\u6377\u5f00\u53d1\u7cfb\u7edf\u67b6\u6784\uff0c\u63d0\u4f9b\u6574\u5957\u516c\u5171\u5fae\u670d\u52a1\u670d\u52a1\u6a21\u5757\uff1a\u5185\u5bb9\u7ba1\u7406\u3001\u652f\u4ed8\u4e2d\u5fc3\u3001UC\u8ba4\u8bc1\u4e2d\u5fc3\u3001\u7528\u6237\u7ba1\u7406\u3001\u5fae\u4fe1\u5e73\u53f0\u3001\u5b58\u50a8\u7cfb\u7edf\u3001\u914d\u7f6e\u4e2d\u5fc3\u3001\u65e5\u5fd7\u5206\u6790\u3001\u4efb\u52a1\u548c\u901a\u77e5\u7b49\uff0c\u6253\u9020\u5168\u65b9\u4f4dJ2EE\u4f01\u4e1a\u7ea7\u5f00\u53d1\u89e3\u51b3\u65b9\u6848"),(0,n.kt)("h2",{id:"\u5f00\u53d1\u8bed\u8a00"},"\u5f00\u53d1\u8bed\u8a00"),(0,n.kt)("p",null,"Java"),(0,n.kt)("p",null,"JDK 1.7+"),(0,n.kt)("h2",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),(0,n.kt)("p",null,"\u4e91\u6570\u636e\u4e2d\u5fc3"),(0,n.kt)("h2",{id:"\u540e\u7aef\u6280\u672f"},"\u540e\u7aef\u6280\u672f"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u6280\u672f")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u540d\u79f0")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u5b98\u7f51")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Spring  Framework"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5bb9\u5668"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://projects.spring.io/spring-framework/"},"http://projects.spring.io/spring-framework/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SpringMVC"),(0,n.kt)("td",{parentName:"tr",align:null},"MVC\u6846\u67b6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#mvc"},"http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#mvc"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Spring Boot"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5fae\u670d\u52a1\u6846\u67b6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://projects.spring.io/spring-boot/"},"http://projects.spring.io/spring-boot/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Apache Shiro"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b89\u5168\u6846\u67b6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://shiro.apache.org/"},"http://shiro.apache.org/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Spring session"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5206\u5e03\u5f0fSession\u7ba1\u7406"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://projects.spring.io/spring-session/"},"http://projects.spring.io/spring-session/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cloud-sdk"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e91\u6570\u636e\u4e2d\u5fc3sdk\u5de5\u5177\u5305"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.lishiots.com/"},"http://www.lishiots.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cloud-wx-kernel"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5fae\u4fe1\u6838\u5fc3\u5de5\u5177\u5305"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.lishiots.com/"},"http://www.lishiots.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Thymeleaf"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6a21\u677f\u5f15\u64ce"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.thymeleaf.org/"},"http://www.thymeleaf.org/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Redis"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5206\u5e03\u5f0f\u7f13\u5b58\u6570\u636e\u5e93"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://redis.io/"},"https://redis.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Quartz"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4f5c\u4e1a\u8c03\u5ea6\u6846\u67b6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.quartz-scheduler.org/"},"http://www.quartz-scheduler.org/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ehcache"),(0,n.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7a0b\u5185\u7f13\u5b58\u6846\u67b6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.ehcache.org/"},"http://www.ehcache.org/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Log4J"),(0,n.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u7ec4\u4ef6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://logging.apache.org/log4j/1.2/"},"http://logging.apache.org/log4j/1.2/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Swagger2"),(0,n.kt)("td",{parentName:"tr",align:null},"\u63a5\u53e3\u6d4b\u8bd5\u6846\u67b6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://swagger.io/"},"http://swagger.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Maven"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u6784\u5efa\u7ba1\u7406"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://maven.apache.org/"},"http://maven.apache.org/"))))),(0,n.kt)("h2",{id:"\u524d\u7aef\u6280\u672f"},"\u524d\u7aef\u6280\u672f"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u6280\u672f")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u540d\u79f0")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"\u5b98\u7f51")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jQuery"),(0,n.kt)("td",{parentName:"tr",align:null},"\u51fd\u5f0f\u5e93"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://jquery.com/"},"http://jquery.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bootstrap"),(0,n.kt)("td",{parentName:"tr",align:null},"\u524d\u7aef\u6846\u67b6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://getbootstrap.com/"},"http://getbootstrap.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bootstrap-table"),(0,n.kt)("td",{parentName:"tr",align:null},"Bootstrap\u6570\u636e\u8868\u683c"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://bootstrap-table.wenzhixin.net.cn/"},"http://bootstrap-table.wenzhixin.net.cn/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Font-awesome"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5b57\u4f53\u56fe\u6807"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://fontawesome.io/"},"http://fontawesome.io/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Waves"),(0,n.kt)("td",{parentName:"tr",align:null},"\u70b9\u51fb\u6548\u679c\u63d2\u4ef6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/fians/Waves"},"https://github.com/fians/Waves"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"zTree"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6811\u63d2\u4ef6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.treejs.cn/v3/"},"http://www.treejs.cn/v3/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Select2"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u6846\u63d2\u4ef6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/select2/select2"},"https://github.com/select2/select2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Layer"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5f39\u51fa\u7a97\u53e3\u63d2\u4ef6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://layer.layui.com/"},"http://layer.layui.com/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Editor.md"),(0,n.kt)("td",{parentName:"tr",align:null},"Markdown\u7f16\u8f91\u5668"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/pandao/editor.md"},"https://github.com/pandao/editor.md"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Express"),(0,n.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8eNode.js \u5e73\u53f0,\u5feb\u901f\u3001\u5f00\u653e\u3001\u6781\u7b80\u7684 web \u5f00\u53d1\u6846\u67b6"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.expressjs.com.cn/"},"http://www.expressjs.com.cn/"))))))}g.isMDXComponent=!0}}]);