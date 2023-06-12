"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2016],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,y=c["".concat(m,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={layout:"post",title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e09) \u914d\u7f6e\u4e4b\u73af\u5883\u53d8\u91cfEnvironment",categories:"mybatis",description:"mybatis \u6e90\u7801\u7cfb\u5217",keywords:["mybatis \u6e90\u7801\u7cfb\u5217,mybatis"]},o=void 0,l={unversionedId:"mybatis/2019-05-13-mybatis-3",id:"mybatis/2019-05-13-mybatis-3",title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e09) \u914d\u7f6e\u4e4b\u73af\u5883\u53d8\u91cfEnvironment",description:"mybatis \u6e90\u7801\u7cfb\u5217",source:"@site/programmer/blog/mybatis/2019-05-13-mybatis-3.md",sourceDirName:"mybatis",slug:"/mybatis/2019-05-13-mybatis-3",permalink:"/blog/mybatis/2019-05-13-mybatis-3",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/mybatis/2019-05-13-mybatis-3.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e09) \u914d\u7f6e\u4e4b\u73af\u5883\u53d8\u91cfEnvironment",categories:"mybatis",description:"mybatis \u6e90\u7801\u7cfb\u5217",keywords:["mybatis \u6e90\u7801\u7cfb\u5217,mybatis"]},sidebar:"tutorialSidebar",previous:{title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e8c) \u914d\u7f6e\u7c7bConfiguration",permalink:"/blog/mybatis/2019-05-12-mybatis-2"},next:{title:"mybatis \u6e90\u7801\u7cfb\u5217(\u56db) \u6570\u636e\u5e93\u9a71\u52a8Driver\u52a0\u8f7d\u65b9\u5f0f",permalink:"/blog/mybatis/2019-05-14-mybatis-4"}},m={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7c7b\u56fe",id:"\u7c7b\u56fe",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u4e8eXml",id:"\u57fa\u4e8exml",level:3},{value:"\u57fa\u4e8eJava Bean\u7684\u65b9\u5f0f",id:"\u57fa\u4e8ejava-bean\u7684\u65b9\u5f0f",level:3}],p={toc:s};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u901a\u8fc7\u521d\u59cb\u5316\u7684\u7ae0\u8282,\u6211\u4eec\u77e5\u9053\u4e86mybatis\u7684\u6838\u5fc3\u914d\u7f6e\u7c7bConfiguration\uff0c\u90a3\u4e48,\u63a5\u4e0b\u6765\u6211\u4eec\u9010\u4e00\u67e5\u770b\u8be5\u914d\u7f6e\u7684\u5c5e\u6027"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u672c\u7ae0\u4e3b\u8981\u662f\u67e5\u770bEnvironment\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration.java"),"\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * @author Clinton Begin\n */\npublic class Configuration {\n\n  /***\n   * \u73af\u5883\n   * \u4e00\u822c\u5728\u7a0b\u5e8f\u5f00\u53d1\u548c\u4e0a\u7ebf\u90e8\u7f72\u65f6,\u6570\u636e\u6e90\u4f1a\u6709\u6240\u4e0d\u540c,\u4f8b\u5982:dev(\u5f00\u53d1),prod(\u751f\u4ea7)\n   * \u6240\u4ee5\u6211\u4eec\u5728\u4e0d\u540c\u7684\u73af\u5883\u4e2d,\u9700\u8981\u6784\u5efa\u4e0d\u540c\u7684environment\u5bf9\u8c61\n   */\n  protected Environment environment;\n    //other field\n    \n   /***\n   * \u6839\u636e\u73af\u5883\u53c2\u6570\u6784\u9020\n   * @param environment\n   */\n  public Configuration(Environment environment) {\n    this();\n    this.environment = environment;\n  }\n}\n")),(0,a.kt)("p",null,"\u5176\u4e2d\u5728Configuration\u7684\u6784\u9020\u51fd\u6570\u4e2d,\u5c31\u6709\u901a\u8fc7Environment\u6765\u6784\u5efa\u5bf9\u8c61\u5b9e\u4f8b\u7684\u6784\u9020\u65b9\u6cd5."),(0,a.kt)("p",null,"\u6240\u4ee5,\u672c\u7ae0\u8282\u5f00\u59cb\u6765\u7814\u7a76Environment\u7684\u8be6\u7ec6\u5c5e\u6027\u5b57\u6bb5"),(0,a.kt)("h2",{id:"\u7c7b\u56fe"},"\u7c7b\u56fe"),(0,a.kt)("p",null,"\u7814\u7a76\u6bcf\u4e2a\u7c7b\u4e4b\u524d,\u6211\u4eec\u5148\u6765\u770b\u8be5\u7c7b\u7684\u76f8\u5173\u7c7b\u56fe\u5c5e\u6027"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(27654).Z,width:"552",height:"377"})),(0,a.kt)("p",null,"\u4ece\u7c7b\u56fe\u4e2d,\u6211\u4eec\u5f97\u77e5Environment\u6709\u4e09\u4e2a\u5c5e\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id:\u5f53\u524d\u73af\u5883\u53d8\u91cf\u7684id\uff0c\u4f8b\u5982dev\u3001prod\u7b49\u7b49"),(0,a.kt)("li",{parentName:"ul"},"transactionFactory:\u5f53\u524d\u73af\u5883\u4e2d\u7684\u4e8b\u52a1\u7ba1\u7406\u5668"),(0,a.kt)("li",{parentName:"ul"},"dataSource:\u5f53\u524d\u73af\u5883\u4e2d\u7684\u6570\u636e\u6e90")),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u770b\u5b8c\u4e86\u7c7b\u56fe,\u6211\u4eec\u5728\u6765\u770b\u73af\u5883\u53d8\u91cf\u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u4e3b\u8981\u6709\u4e24\u79cd\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8eXml\u7684\u914d\u7f6e\u65b9\u5f0f,\u914d\u7f6eEnvironment\u7684xml\u8282\u70b9\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8eJava Bean\u7684\u65b9\u5f0f\u624b\u52a8\u521b\u5efa")),(0,a.kt)("h3",{id:"\u57fa\u4e8exml"},"\u57fa\u4e8eXml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<environments default="development">\n    <environment id="development">\n        <transactionManager type="JDBC"/>\n        <dataSource type="POOLED">\n            <property name="driver" value="com.mysql.cj.jdbc.Driver"/>\n            <property name="url" value="jdbc:mysql://localhost:3306/test?useUnicode=true&amp;characterEncoding=utf-8&amp;allowMultiQueries=true"/>\n            <property name="username" value="root"/>\n            <property name="password" value="123456"/>\n        </dataSource>\n    </environment>\n</environments>\n')),(0,a.kt)("h3",{id:"\u57fa\u4e8ejava-bean\u7684\u65b9\u5f0f"},"\u57fa\u4e8eJava Bean\u7684\u65b9\u5f0f"),(0,a.kt)("p",null,"\u65e2\u7136\u6211\u4eec\u901a\u8fc7\u7c7b\u56fe\u77e5\u9053\u7684Environment\u7684\u76f8\u5173\u5c5e\u6027\u548c\u6784\u9020\u65b9\u6cd5,\u90a3\u4e48\u901a\u8fc7Java\u7684\u65b9\u5f0f\u4e5f\u662f\u5f88\u7b80\u5355,\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"")))}u.isMDXComponent=!0},27654:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Environment-77dfc00757d8f29b4ed6fcd117d8d77d.png"}}]);