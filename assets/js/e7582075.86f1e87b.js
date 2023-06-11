"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6157],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),y=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=y(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=y(r),m=i,u=g["".concat(o,".").concat(m)]||g[m]||p[m]||n;return r?a.createElement(u,s(s({ref:t},c),{},{components:r})):a.createElement(u,s({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var y=2;y<n;y++)s[y]=r[y];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},83080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>y});var a=r(87462),i=(r(67294),r(3905));const n={layout:"post",title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e8c) \u914d\u7f6e\u7c7bConfiguration",categories:"mybatis",description:"mybatis \u6e90\u7801\u7cfb\u5217",keywords:["mybatis \u6e90\u7801\u7cfb\u5217,mybatis"]},s=void 0,l={unversionedId:"mybatis/2019-05-12-mybatis-2",id:"mybatis/2019-05-12-mybatis-2",title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e8c) \u914d\u7f6e\u7c7bConfiguration",description:"mybatis \u6e90\u7801\u7cfb\u5217",source:"@site/programmer/blog/mybatis/2019-05-12-mybatis-2.md",sourceDirName:"mybatis",slug:"/mybatis/2019-05-12-mybatis-2",permalink:"/blog/mybatis/2019-05-12-mybatis-2",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/mybatis/2019-05-12-mybatis-2.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e8c) \u914d\u7f6e\u7c7bConfiguration",categories:"mybatis",description:"mybatis \u6e90\u7801\u7cfb\u5217",keywords:["mybatis \u6e90\u7801\u7cfb\u5217,mybatis"]},sidebar:"tutorialSidebar",previous:{title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e00) \u521d\u59cb\u5316",permalink:"/blog/mybatis/2019-05-11-mybatis-1"},next:{title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e09) \u914d\u7f6e\u4e4b\u73af\u5883\u53d8\u91cfEnvironment",permalink:"/blog/mybatis/2019-05-13-mybatis-3"}},o={},y=[{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:2},{value:"\u7a7a\u6784\u9020",id:"\u7a7a\u6784\u9020",level:3},{value:"\u6839\u636eEnvironment",id:"\u6839\u636eenvironment",level:3}],c={toc:y};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6211\u4eec\u5728\u7b2c\u4e00\u7ae0\u521d\u59cb\u5316\u4e2d\u77e5\u9053\u4e86mybatis\u7684\u6838\u5fc3\u914d\u7f6e\u7c7b\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.ibatis.session.Configuration.java")),(0,i.kt)("p",null,"\u5148\u6765\u770bConfiguration.java\u7684\u7c7b\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(27569).Z,width:"569",height:"1221"})),(0,i.kt)("p",null,"\u770b\u5230\u7c7b\u56fe,\u77ac\u95f4\u5c31\u61f5\u903c\u4e86,\u8fd9\u5c5e\u6027\u4e5f\u592a\u591a\u4e86\u5427....."),(0,i.kt)("p",null,"\u4e0d\u8fc7\u60f3\u5230mybatis\u7684\u529f\u80fd\u5982\u6b64\u5f3a\u5927,\u90a3\u5982\u6b64\u591a\u7684\u5c5e\u6027\u4e5f\u662f\u53ef\u4ee5\u7406\u89e3\u7684\uff0c\u6211\u4f1a\u9010\u4e00\u63a2\u7d22."),(0,i.kt)("h2",{id:"\u6784\u9020\u51fd\u6570"},"\u6784\u9020\u51fd\u6570"),(0,i.kt)("p",null,"\u901a\u8fc7\u7c7b\u56fe\u6211\u4eec\u53d1\u73b0,Configuration\u4e3b\u8981\u63d0\u4f9b\u4e86\u4e24\u4e2a\u6784\u9020\u51fd\u6570\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7a7a\u6784\u9020,\u4e0d\u4f20\u4efb\u610f\u53c2\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u6839\u636eEnvironment\u73af\u5883\u53d8\u91cf\u6765\u6784\u9020")),(0,i.kt)("h3",{id:"\u7a7a\u6784\u9020"},"\u7a7a\u6784\u9020"),(0,i.kt)("p",null,"\u5148\u6765\u770b\u7a7a\u6784\u9020\u7684\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/***\n   * \u7a7a\u6784\u9020,\u521d\u59cb\u5316mybatis\u7684\u76f8\u5173\u5904\u7406\u7c7b\u65b9\u6cd5\n   */\n  public Configuration() {\n    typeAliasRegistry.registerAlias("JDBC", JdbcTransactionFactory.class);\n    typeAliasRegistry.registerAlias("MANAGED", ManagedTransactionFactory.class);\n\n    typeAliasRegistry.registerAlias("JNDI", JndiDataSourceFactory.class);\n    typeAliasRegistry.registerAlias("POOLED", PooledDataSourceFactory.class);\n    typeAliasRegistry.registerAlias("UNPOOLED", UnpooledDataSourceFactory.class);\n\n    typeAliasRegistry.registerAlias("PERPETUAL", PerpetualCache.class);\n    typeAliasRegistry.registerAlias("FIFO", FifoCache.class);\n    typeAliasRegistry.registerAlias("LRU", LruCache.class);\n    typeAliasRegistry.registerAlias("SOFT", SoftCache.class);\n    typeAliasRegistry.registerAlias("WEAK", WeakCache.class);\n\n    typeAliasRegistry.registerAlias("DB_VENDOR", VendorDatabaseIdProvider.class);\n\n    typeAliasRegistry.registerAlias("XML", XMLLanguageDriver.class);\n    typeAliasRegistry.registerAlias("RAW", RawLanguageDriver.class);\n\n    typeAliasRegistry.registerAlias("SLF4J", Slf4jImpl.class);\n    typeAliasRegistry.registerAlias("COMMONS_LOGGING", JakartaCommonsLoggingImpl.class);\n    typeAliasRegistry.registerAlias("LOG4J", Log4jImpl.class);\n    typeAliasRegistry.registerAlias("LOG4J2", Log4j2Impl.class);\n    typeAliasRegistry.registerAlias("JDK_LOGGING", Jdk14LoggingImpl.class);\n    typeAliasRegistry.registerAlias("STDOUT_LOGGING", StdOutImpl.class);\n    typeAliasRegistry.registerAlias("NO_LOGGING", NoLoggingImpl.class);\n\n    typeAliasRegistry.registerAlias("CGLIB", CglibProxyFactory.class);\n    typeAliasRegistry.registerAlias("JAVASSIST", JavassistProxyFactory.class);\n\n    languageRegistry.setDefaultDriverClass(XMLLanguageDriver.class);\n    languageRegistry.register(RawLanguageDriver.class);\n  }\n')),(0,i.kt)("p",null,"\u7a7a\u6784\u9020\u4e2d\u6ce8\u518c\u4e86\u5927\u91cf\u5185\u7f6e\u7684mybatis\u6838\u5fc3\u903b\u8f91\u5904\u7406\u7c7b\uff0c\u8fd9\u4e9b\u7c7b\u7684\u4f5c\u7528\u6211\u4eec\u4f1a\u5728\u540e\u9762\u7ae0\u8282\u9010\u4e00\u7814\u7a76,\u8fd9\u91cc\u4e0d\u505a\u8bf4\u660e"),(0,i.kt)("h3",{id:"\u6839\u636eenvironment"},"\u6839\u636eEnvironment"),(0,i.kt)("p",null,"\u6765\u770b\u6784\u9020\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/***\n   * \u6839\u636e\u73af\u5883\u53c2\u6570\u6784\u9020\n   * @param environment\n   */\n  public Configuration(Environment environment) {\n    this();\n    this.environment = environment;\n  }\n")),(0,i.kt)("p",null,"\u9996\u5148\u8c03\u7528\u7a7a\u6784\u9020,\u5176\u6b21,\u8d4b\u503cEnvironment\u5c5e\u6027"),(0,i.kt)("p",null,"\u5982\u679c\u4e0d\u770b\u5176\u4e2d\u5177\u4f53\u7684\u5c5e\u6027\uff0c\u4ece\u76ee\u6807\u4e24\u4e2a\u6784\u9020\u51fd\u6570\u6765\u770b,Configuration\u914d\u7f6e\u7c7b\u4f3c\u4e4e\u4e5f\u662f\u5f88\u7b80\u5355\u7684."),(0,i.kt)("p",null,"\u5173\u4e8eConfiguration\u7684\u5c5e\u6027,\u6211\u4eec\u4f1a\u5728\u540e\u9762\u9010\u4e00\u7814\u7a76\u653b\u7834."))}p.isMDXComponent=!0},27569:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Configuration-45fb33d9d910fcf3e5818e1fe3d29cbc.png"}}]);