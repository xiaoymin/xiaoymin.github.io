"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6748],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||r;return t?o.createElement(g,i(i({ref:n},p),{},{components:t})):o.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=t(87462),a=(t(67294),t(3905));const r={layout:"post",title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e94) \u6570\u636e\u6e90DataSource",categories:"mybatis",description:"mybatis \u6e90\u7801\u7cfb\u5217",keywords:["mybatis \u6e90\u7801\u7cfb\u5217,mybatis,\u6570\u636e\u6e90DataSource"]},i=void 0,l={unversionedId:"mybatis/2019-05-16-mybatis-5",id:"mybatis/2019-05-16-mybatis-5",title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e94) \u6570\u636e\u6e90DataSource",description:"mybatis \u6e90\u7801\u7cfb\u5217",source:"@site/programmer/blog/mybatis/2019-05-16-mybatis-5.md",sourceDirName:"mybatis",slug:"/mybatis/2019-05-16-mybatis-5",permalink:"/blog/mybatis/2019-05-16-mybatis-5",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/mybatis/2019-05-16-mybatis-5.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"mybatis \u6e90\u7801\u7cfb\u5217(\u4e94) \u6570\u636e\u6e90DataSource",categories:"mybatis",description:"mybatis \u6e90\u7801\u7cfb\u5217",keywords:["mybatis \u6e90\u7801\u7cfb\u5217,mybatis,\u6570\u636e\u6e90DataSource"]},sidebar:"tutorialSidebar",previous:{title:"mybatis \u6e90\u7801\u7cfb\u5217(\u56db) \u6570\u636e\u5e93\u9a71\u52a8Driver\u52a0\u8f7d\u65b9\u5f0f",permalink:"/blog/mybatis/2019-05-14-mybatis-4"},next:{title:"mybatis \u6e90\u7801\u7cfb\u5217(\u516d) \u8bbe\u8ba1\u6a21\u5f0f",permalink:"/blog/mybatis/2019-05-17-mybatis-6"}},c={},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u6570\u636e\u6e90\u5de5\u5382",id:"\u6570\u636e\u6e90\u5de5\u5382",level:2},{value:"UnpooledDataSourceFactory",id:"unpooleddatasourcefactory",level:3},{value:"UnpooledDataSource",id:"unpooleddatasource",level:4},{value:"PooledDataSourceFactory",id:"pooleddatasourcefactory",level:3},{value:"PooledDataSource",id:"pooleddatasource",level:4},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:5},{value:"\u6d41\u7a0b\u56fe",id:"\u6d41\u7a0b\u56fe",level:5},{value:"\u903b\u8f91",id:"\u903b\u8f91",level:5},{value:"JndiDataSourceFactory",id:"jndidatasourcefactory",level:3}],p={toc:u};function s(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u7b2c\u56db\u7ae0\u8282\u4e2d,\u6211\u4eec\u5206\u6790\u91cc\u6570\u636e\u5e93\u9a71\u52a8Driver\u7684\u52a0\u8f7d\u65b9\u5f0f,\u5176\u4e2d\u6709\u63d0\u5230mybatis\u7684\u6570\u636e\u6e90\uff0c\u6211\u4eec\u90fd\u77e5\u9053,Java\u4e2d\u7684SQL\u89c4\u8303",(0,a.kt)("inlineCode",{parentName:"p"},"java.sql.DataSource"),"\u662f\u4e00\u4e2a\u63a5\u53e3,\u800c\u6211\u4eec\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4e00\u822c\u90fd\u662f\u57fa\u4e8e\u6570\u636e\u5e93\u7684\u8fde\u63a5\u6c60\u6280\u672f\u6765\u83b7\u53d6\u6570\u636e\u5e93\u8fde\u63a5\u4ee5\u64cd\u4f5c\u6570\u636e\u5e93\u7684."),(0,a.kt)("p",null,"\u901a\u5e38\u4e3a\u6211\u4eec\u6240\u77e5\u7684\u4e3b\u6d41\u6570\u636e\u6e90\u4e3b\u8981\u6709\uff1adruid\u3001c3p0\u3001dbcp,HikariCP\u7b49\u7b49"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u90fd\u662f\u5e2e\u52a9\u6211\u4eec\u5b9e\u73b0\u7684\u5728\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u6280\u672f\u4e0a\u975e\u5e38\u597d\u7684\u6280\u672f\u4e2d\u95f4\u4ef6,\u6211\u4eec\u53ea\u9700\u8981\u5f15\u5165\u76f8\u5173\u7684Jar\u5305\u5373\u53ef\u5f15\u7528"),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("p",null,"\u800c\u8fd9\u4e00\u8282\u6211\u4eec\u4e3b\u8981\u7814\u7a76mybatis\u7ed9\u6211\u4eec\u63d0\u4f9b\u7684\u9ed8\u8ba4\u6570\u636e\u6e90"),(0,a.kt)("p",null,"mybatis\u4e2d\u7684\u6570\u636e\u6e90\u4e3b\u8981\u4f4d\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.ibatis.datasource"),"\u5305\u4e0b,\u4e3b\u8981\u6709\u4e09\u79cd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UnpooledDataSource"),"\uff1a\u975e\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u7684\u6570\u636e\u6e90,\u6bcf\u6b21\u83b7\u53d6\u6570\u636e\u5e93Connection\u5bf9\u8c61\u90fd\u4f1a\u521b\u5efa,\u4e0d\u4f1a\u4f7f\u7528\u6570\u636e\u5e93\u8fde\u63a5\u6c60"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PooledDataSource"),"\uff1a\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u6570\u636e\u6e90"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JndiDataSource"),":\u901a\u8fc7\u5bb9\u5668\u83b7\u53d6\u6570\u636e\u6e90")),(0,a.kt)("p",null,"\u5148\u6765\u770b\u6574\u4e2a\u7c7b\u56fe\u5173\u7cfb"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(65524).Z,width:"976",height:"917"})),(0,a.kt)("h2",{id:"\u6570\u636e\u6e90\u5de5\u5382"},"\u6570\u636e\u6e90\u5de5\u5382"),(0,a.kt)("p",null,"\u5148\u6765\u770bmybatis\u4e2d\u7684\u6570\u636e\u6e90\u5de5\u5382\u7236\u7c7b,",(0,a.kt)("inlineCode",{parentName:"p"},"DataSourceFactory.java")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * @author Clinton Begin\n */\npublic interface DataSourceFactory {\n\n  /***\n   * \u8bbe\u7f6e\u6570\u636e\u6e90\u5c5e\u6027\n   * @param props\n   */\n  void setProperties(Properties props);\n\n  /***\n   * \u83b7\u53d6\u5f53\u524d\u6570\u636e\u6e90\u5b9e\u4f8b\n   * @return\n   */\n  DataSource getDataSource();\n\n}\n")),(0,a.kt)("p",null,"\u6570\u636e\u6e90\u5de5\u5382\u4e2d\u4e3b\u8981\u63d0\u4f9b\u4e86\u4e24\u4e2a\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u6570\u636e\u6e90\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u6570\u636e\u6e90")),(0,a.kt)("p",null,"\u6709\u6b64\u4e24\u4e2a\u65b9\u6cd5,\u6211\u4eec\u6765\u770b\u5b83\u7684\u5177\u4f53\u5b9e\u73b0"),(0,a.kt)("h3",{id:"unpooleddatasourcefactory"},"UnpooledDataSourceFactory"),(0,a.kt)("p",null,"\u975e\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u7684\u6570\u636e\u6e90\u5de5\u5382\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"UnpooledDataSourceFactory.java")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\n/**\n * @author Clinton Begin\n */\npublic class UnpooledDataSourceFactory implements DataSourceFactory {\n\n  private static final String DRIVER_PROPERTY_PREFIX = "driver.";\n  private static final int DRIVER_PROPERTY_PREFIX_LENGTH = DRIVER_PROPERTY_PREFIX.length();\n\n  /****\n   * \u58f0\u660e\u6570\u636e\u6e90\n   */\n  protected DataSource dataSource;\n\n  /****\n   * \u6784\u9020\u51fd\u6570\n   */\n  public UnpooledDataSourceFactory() {\n    this.dataSource = new UnpooledDataSource();\n  }\n\n  @Override\n  public void setProperties(Properties properties) {\n    Properties driverProperties = new Properties();\n      //\u901a\u8fc7\u53cd\u5c04,\u83b7\u53d6dataSource\u7684\u5143\u6570\u636e\u5bf9\u8c61,\u6b64\u5904dataSource\u76ee\u6807\u662fUnpooledDataSource\n      //\u5173\u4e8e\u5143\u6570\u636e\u5bf9\u8c61,\u6211\u4eec\u5728\u540e\u9762\u7ae0\u8282\u7814\u7a76,\u6b64\u5904\u4e0d\u505a\u6df1\u7a76\n    MetaObject metaDataSource = SystemMetaObject.forObject(dataSource);\n    for (Object key : properties.keySet()) {\n      String propertyName = (String) key;\n      if (propertyName.startsWith(DRIVER_PROPERTY_PREFIX)) {\n        String value = properties.getProperty(propertyName);\n        driverProperties.setProperty(propertyName.substring(DRIVER_PROPERTY_PREFIX_LENGTH), value);\n      } else if (metaDataSource.hasSetter(propertyName)) {\n        String value = (String) properties.get(propertyName);\n        Object convertedValue = convertValue(metaDataSource, propertyName, value);\n        metaDataSource.setValue(propertyName, convertedValue);\n      } else {\n        throw new DataSourceException("Unknown DataSource property: " + propertyName);\n      }\n    }\n    if (driverProperties.size() > 0) {\n      metaDataSource.setValue("driverProperties", driverProperties);\n    }\n  }\n\n  @Override\n  public DataSource getDataSource() {\n    return dataSource;\n  }\n    //other...\n}\n')),(0,a.kt)("p",null,"\u4ece\u6570\u636e\u5de5\u5382\u7684\u6e90\u7801\u4e2d\u6211\u4eec\u770b\u5230,\u975e\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u7684\u6570\u636e\u6e90\u6700\u7ec8\u8fd4\u56de\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"UnpooledDataSource")),(0,a.kt)("p",null,"setProperties\u65b9\u6cd5\u7684\u4e3b\u8981\u903b\u8f91\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u58f0\u660e\u9a71\u52a8\u5c5e\u6027\u914d\u7f6e,\u4ece\u6e90\u914d\u7f6e\u4e2d\u8d4b\u503c\u9a71\u52a8\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u53cd\u5c04\u83b7\u53d6UnpooledDataSource\u7684\u5143\u6570\u636e\u5bf9\u8c61,\u5bf9\u9f50\u5c5e\u6027\u8fdb\u884c\u8d4b\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5173\u4e8emybatis\u7684\u5143\u6570\u636e\u5bf9\u8c61MetaObject\u6211\u4eec\u4e0d\u5728\u8fd9\u7ae0\u6df1\u7a76,\u53ea\u9700\u8981\u77e5\u9053\u8fd9\u4e48\u56de\u4e8b\u5373\u53ef,\u77e5\u9053\u4ed6\u7684\u4f5c\u7528(\u52a8\u6001\u6839\u636eProperties\u5bf9\u8c61\u8d4b\u503c\u76ee\u6807\u5bf9\u8c61UnpooledDataSource\u7684\u5c5e\u6027)")),(0,a.kt)("p",null,"\u6240\u4ee5\u901a\u8fc7\u6e90\u7801,\u6211\u4eec\u5728\u4f7f\u7528\u975e\u7ed1\u5b9a\u6570\u636e\u6e90\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//\u521b\u5efa\u6570\u636e\u6e90\u5de5\u5382\nUnpooledDataSourceFactory unpooledDataSourceFactory=new UnpooledDataSourceFactory();\nString driver="com.mysql.cj.jdbc.Driver";\nString url="jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf-8&allowMultiQueries=true";\nString username="root";\nString password="123456";\n//\u8d4b\u503cproperties\nProperties properties=new Properties();\nproperties.setProperty("driver",driver);\nproperties.setProperty("url",url);\nproperties.setProperty("username",username);\nproperties.setProperty("password",password);\nunpooledDataSourceFactory.setProperties(properties);\n//\u5982\u679c\u4f7f\u7528\u7684\u662fUnpooledDataSource\u6570\u636e\u6e90,\u5219\u4ee5\u4e0aproperties\u5c5e\u6027\u8d4b\u503c\u9700\u8981\u4f7f\u7528UnpooledDataSource\u7684\u5c5e\u6027\u503c\n//\u83b7\u53d6\u6570\u636e\u6e90\nDataSource dataSource=unpooledDataSourceFactory.getDataSource();\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u4ee3\u7801\u7684\u65b9\u5f0f,\u6211\u4eec\u5c31\u80fd\u62ff\u5230DataSource\u7684\u5b9e\u4f8b,\u4ece\u800c\u83b7\u53d6\u6570\u636e\u5e93\u8fde\u63a5Connection\u5bf9\u8c61"),(0,a.kt)("h4",{id:"unpooleddatasource"},"UnpooledDataSource"),(0,a.kt)("p",null,"\u6b64\u65f6,\u6211\u4eec\u6765\u770b",(0,a.kt)("inlineCode",{parentName:"p"},"UnpooledDataSource"),"\u7684\u5177\u4f53\u5b9e\u73b0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UnpooledDataSource"),"\u4e3b\u8981\u5305\u542b\u7684\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"driverClassLoader"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9a71\u52a8\u7c7b\u7684ClassLoader\u5b9e\u4f8b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"driverProperties"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9a71\u52a8\u7c7b\u7684\u5c5e\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"registeredDrivers"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6ce8\u518c\u9a71\u52a8\u7c7b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"driver"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u9a71\u52a8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"url"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u8fde\u63a5\u5730\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"password"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"autoCommit"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u63d0\u4ea4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"defaultTransactionIsolationLevel"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b")))),(0,a.kt)("p",null,"\u975e\u6570\u636e\u6c60\u7684\u83b7\u53d6\u6570\u636e\u5e93\u8fde\u63a5\u65b9\u5f0f\u5f88\u7b80\u5355,\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic Connection getConnection() throws SQLException {\n    return doGetConnection(username, password);\n}\n/***\n   * \u83b7\u53d6\u6570\u636e\u8fde\u63a5\u5bf9\u8c61\n   * @param properties\n   * @return\n   * @throws SQLException\n   */\nprivate Connection doGetConnection(Properties properties) throws SQLException {\n    //\u521d\u59cb\u5316Driver\u9a71\u52a8\n    initializeDriver();\n    //\u83b7\u53d6\u8fde\u63a5\n    Connection connection = DriverManager.getConnection(url, properties);\n    //\u914d\u7f6e\u8fde\u63a5\u5c5e\u6027,\u4e3b\u8981\u662f\u662f\u5426\u81ea\u52a8\u63d0\u4ea4\u548c\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\n    configureConnection(connection);\n    return connection;\n}\n/****\n   * \u914d\u7f6eConnection\u8fde\u63a5\u5bf9\u8c61\u7684\u5c5e\u6027\n   * @param conn\n   * @throws SQLException\n   */\nprivate void configureConnection(Connection conn) throws SQLException {\n    //\u662f\u5426\u81ea\u52a8\u63d0\u4ea4\n    if (autoCommit != null && autoCommit != conn.getAutoCommit()) {\n        conn.setAutoCommit(autoCommit);\n    }\n    //\u8bbe\u7f6e\u4e8b\u52a1\u7ea7\u522b\n    if (defaultTransactionIsolationLevel != null) {\n        conn.setTransactionIsolation(defaultTransactionIsolationLevel);\n    }\n}\n")),(0,a.kt)("p",null,"\u83b7\u53d6\u6570\u636e\u5e93\u8fde\u63a5",(0,a.kt)("inlineCode",{parentName:"p"},"Connection"),"\u5bf9\u8c61\u7684\u65b9\u5f0f\u662f\u6bcf\u6b21\u90fd\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"DriverManager"),"\u6765\u83b7\u53d6\u8fde\u63a5,\u4e0d\u505a\u8fde\u63a5\u6c60\u3001\u7f13\u5b58\u7b49\u5904\u7406."),(0,a.kt)("h3",{id:"pooleddatasourcefactory"},"PooledDataSourceFactory"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u7a0b\u5e8f\u7c7b\u56fe,\u6211\u4eec\u5176\u5b9e\u5df2\u7ecf\u77e5\u9053,PooledDataSourceFactory\u5176\u5b9e\u662f\u7ee7\u627f\u81eaUnPooledDataSourceFactory"),(0,a.kt)("p",null,"\u6765\u770b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class PooledDataSourceFactory extends UnpooledDataSourceFactory {\n\n  public PooledDataSourceFactory() {\n      //dataSource\u6570\u636e\u6e90\u6b64\u5904\u4e3aPooledDataSource\n    this.dataSource = new PooledDataSource();\n  }\n\n}\n")),(0,a.kt)("h4",{id:"pooleddatasource"},"PooledDataSource"),(0,a.kt)("h5",{id:"\u6e90\u7801"},"\u6e90\u7801"),(0,a.kt)("p",null,"\u6765\u770b\u4f7f\u7528\u8fde\u63a5\u6c60\u7684\u6570\u636e\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\n/**\n * \u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\uff0c\u540c\u6b65\uff0c\u7ebf\u7a0b\u5b89\u5168\u7684\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u3002\n *\n * @author Clinton Begin\n */\npublic class PooledDataSource implements DataSource {\n\n  private static final Log log = LogFactory.getLog(PooledDataSource.class);\n\n  /***\n   * \u8fde\u63a5\u6c60\u72b6\u6001\n   */\n  private final PoolState state = new PoolState(this);\n\n  private final UnpooledDataSource dataSource;\n\n  // OPTIONAL CONFIGURATION FIELDS\n  /***\n   * \u8fde\u63a5\u6c60\u6d3b\u52a8\u6700\u5927\u8fde\u63a5\u6570\n   */\n  protected int poolMaximumActiveConnections = 10;\n  /***\n   * \u8fde\u63a5\u6c60\u6700\u5927\u7a7a\u95f2\u8fde\u63a5\u6570\u91cf\n   */\n  protected int poolMaximumIdleConnections = 5;\n  /***\n   * \u6700\u5927checkout\u65f6\u95f4,\u9ed8\u8ba420\u79d2\n   */\n  protected int poolMaximumCheckoutTime = 20000;\n  /***\n   * \u7b49\u5f85\u65f6\u95f4\n   */\n  protected int poolTimeToWait = 20000;\n  /***\n   * \u8fde\u63a5\u6c60\u672c\u5730\u6700\u5927\u6b7b\u7684\u8fde\u63a5\u5dee\u503c\n   */\n  protected int poolMaximumLocalBadConnectionTolerance = 3;\n  protected String poolPingQuery = "NO PING QUERY SET";\n  /***\n   * \u662f\u5426\u542f\u7528ping\u64cd\u4f5c\n   */\n  protected boolean poolPingEnabled;\n\n  protected int poolPingConnectionsNotUsedFor;\n\n  /***\n   * \u8fde\u63a5\u6267\u884c\u7c7b\u522b\u4ee3\u7801\n   */\n  private int expectedConnectionTypeCode;\n\n  public PooledDataSource() {\n    dataSource = new UnpooledDataSource();\n  }\n\n  public PooledDataSource(UnpooledDataSource dataSource) {\n    this.dataSource = dataSource;\n  }\n    //other\n}\n')),(0,a.kt)("p",null,"\u4ece\u6e90\u7801\u4e2d\u6211\u4eec\u770b\u5230\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u6c60\u6570\u636e\u6e90\u4e2d\u4ee5UnPooledDataSource\u4e3a\u57fa\u7840,\u6784\u9020\u51fd\u6570\u4f20\u5165\u7684\u4e5f\u662f\u975e\u8fde\u63a5\u6c60\u6570\u636e\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e86\u8fde\u63a5\u6c60\u7684\u76f8\u5173\u57fa\u7840\u5c5e\u6027,\u4e3b\u8981\u5305\u542b\u6d3b\u52a8\u8fde\u63a5\u6570\u3001\u7a7a\u95f2\u8fde\u63a5\u6570\u3001\u7b49\u5f85\u65f6\u95f4\u7b49\u5f85")),(0,a.kt)("p",null,"\u6765\u770b\u8fde\u63a5\u6c60\u83b7\u53d6\u6570\u636e\u6e90\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/***\n   * \u83b7\u53d6\u6570\u636e\u5e93\u8fde\u63a5\n   * @return\n   * @throws SQLException\n   */\n@Override\npublic Connection getConnection() throws SQLException {\n    return popConnection(dataSource.getUsername(), dataSource.getPassword()).getProxyConnection();\n}\n\n/***\n* \u83b7\u53d6\u8fde\u63a5\u6c60\u7684\u4ee3\u7406\u8fde\u63a5\u5bf9\u8c61PooledConnection\n*\n*/\nprivate PooledConnection popConnection(String username, String password) throws SQLException {\n    boolean countedWait = false;\n    PooledConnection conn = null;\n    long t = System.currentTimeMillis();\n    int localBadConnectionCount = 0;\n\n    while (conn == null) {\n      synchronized (state) {\n        //\u7a7a\u9591\u8fde\u63a5\u4e0d\u4e3a\u7a7a\n        if (!state.idleConnections.isEmpty()) {\n          // Pool has available connection\n          //\u7a7a\u7a7a\u95f2\u8fde\u63a5\u96c6\u5408\u4e2d\u83b7\u53d6\u4e00\u4e2a\u8fde\u63a5,\u5e76\u79fb\u9664\u7a7a\u95f2\u8fde\u63a5\u96c6\u5408\n          conn = state.idleConnections.remove(0);\n          if (log.isDebugEnabled()) {\n            log.debug("Checked out connection " + conn.getRealHashCode() + " from pool.");\n          }\n        } else {\n          //\u7a7a\u95f2\u8fde\u63a5\u96c6\u5408\u6570\u4e3a\u7a7a\n          // Pool does not have available connection\n          if (state.activeConnections.size() < poolMaximumActiveConnections) {\n            //\u6fc0\u6d3b\u8fde\u63a5\u6570\u5c0f\u4e8e\u6700\u5927\u6d3b\u52a8\u8fde\u63a5\u6570,\u5219\u521b\u5efa\u4e00\u4e2a\u8fde\u63a5(\u4eceDataSource\u6570\u636e\u6e90\u4e2d\u83b7\u53d6\u4e00\u4e2a\u65b0\u7684\u8fde\u63a5)\n            // Can create new connection\n            conn = new PooledConnection(dataSource.getConnection(), this);\n            if (log.isDebugEnabled()) {\n              log.debug("Created connection " + conn.getRealHashCode() + ".");\n            }\n          } else {\n            //\u65e0\u6cd5\u521b\u5efa\u65b0\u7684\u6570\u636e\u5e93\u8fde\u63a5\n            // Cannot create new connection\n            PooledConnection oldestActiveConnection = state.activeConnections.get(0);\n            long longestCheckoutTime = oldestActiveConnection.getCheckoutTime();\n            //\u5f53\u524d\u8fde\u63a5\u7684\u68c0\u67e5\u65f6\u95f4\u5927\u4e8e\u8fde\u63a5\u6c60\u9ed8\u8ba4check\u65f6\u95f4\n            if (longestCheckoutTime > poolMaximumCheckoutTime) {\n              // Can claim overdue connection\n              //\u5f53\u524d\u8fde\u63a5\u4e3a\u903e\u671f\u8fde\u63a5\n\n              //\u903e\u671f\u8fde\u63a5\u6570\u91cf+1\n              state.claimedOverdueConnectionCount++;\n              //\u7d2f\u8ba1\u8fde\u63a5\u65f6\u95f4++\n              state.accumulatedCheckoutTimeOfOverdueConnections += longestCheckoutTime;\n              //\u7d2f\u8ba1check\u65f6\u95f4++\n              state.accumulatedCheckoutTime += longestCheckoutTime;\n              //\u628a\u5f53\u524d\u8fde\u63a5\u6570\u4ece\u6d3b\u52a8\u8fde\u63a5\u96c6\u5408\u4e2d\u79fb\u9664\n              state.activeConnections.remove(oldestActiveConnection);\n              //\u5224\u65ad\u662f\u5426\u975e\u81ea\u52a8\u63d0\u4ea4\n              if (!oldestActiveConnection.getRealConnection().getAutoCommit()) {\n                try {\n                  //\u5982\u679c\u5f53\u524d\u6570\u636e\u5e93\u8fde\u63a5\u4e0d\u662f\u81ea\u52a8\u63d0\u4ea4,\u5219\u56de\u6eda\u4e8b\u52a1\n                  oldestActiveConnection.getRealConnection().rollback();\n                } catch (SQLException e) {\n                  /*\n                     Just log a message for debug and continue to execute the following\n                     statement like nothing happend.\n                     Wrap the bad connection with a new PooledConnection, this will help\n                     to not intterupt current executing thread and give current thread a\n                     chance to join the next competion for another valid/good database\n                     connection. At the end of this loop, bad {@link @conn} will be set as null.\n                   */\n                  log.debug("Bad connection. Could not roll back");\n                }  \n              }\n\n              conn = new PooledConnection(oldestActiveConnection.getRealConnection(), this);\n              conn.setCreatedTimestamp(oldestActiveConnection.getCreatedTimestamp());\n              conn.setLastUsedTimestamp(oldestActiveConnection.getLastUsedTimestamp());\n              //\u8001\u7684\u8fde\u63a5\u7f6e\u4e3a\u4e0d\u53ef\u7528\n              oldestActiveConnection.invalidate();\n              if (log.isDebugEnabled()) {\n                log.debug("Claimed overdue connection " + conn.getRealHashCode() + ".");\n              }\n            } else {\n              //\u7b49\u5f85\n              // Must wait\n              try {\n                if (!countedWait) {\n                  //\u7b49\u5f85\u6570\u91cf+1\n                  state.hadToWaitCount++;\n                  //\u7b49\u5f85\u6807\u5fd7\u4f4d\u7f6e\u4e3atrue\n                  countedWait = true;\n                }\n                if (log.isDebugEnabled()) {\n                  log.debug("Waiting as long as " + poolTimeToWait + " milliseconds for connection.");\n                }\n                long wt = System.currentTimeMillis();\n                //object\u7684wait\u65b9\u6cd5\n                state.wait(poolTimeToWait);\n                //\u7d2f\u8ba1\u7b49\u5f85\u65f6\u95f4\n                state.accumulatedWaitTime += System.currentTimeMillis() - wt;\n              } catch (InterruptedException e) {\n                break;\n              }\n            }\n          }\n        }\n        if (conn != null) {\n          // ping to server and check the connection is valid or not\n          if (conn.isValid()) {\n            //\u5f53\u524dPoolConnection\u5bf9\u8c61\u8fde\u63a5\u53ef\u7528\n            //\u5224\u65ad\u771f\u5b9eConnection\u662f\u5426\u81ea\u52a8\u63d0\u4ea4,\u5982\u679c\u4e3afalse,\u5219\u56de\u6eda\u5f53\u524d\u4e8b\u52a1.\n            if (!conn.getRealConnection().getAutoCommit()) {\n              conn.getRealConnection().rollback();\n            }\n            //\u8bbe\u7f6e\u5f53\u524d\u8fde\u63a5hash\n            conn.setConnectionTypeCode(assembleConnectionTypeCode(dataSource.getUrl(), username, password));\n            conn.setCheckoutTimestamp(System.currentTimeMillis());\n            conn.setLastUsedTimestamp(System.currentTimeMillis());\n            //\u6dfb\u52a0\u5230\u6d3b\u52a8\u8fde\u63a5\u96c6\u5408\u4e2d\n            state.activeConnections.add(conn);\n            //\u8bf7\u6c42\u6570+1\n            state.requestCount++;\n            //\u7d2f\u8ba1\u8bf7\u6c42\u65f6\u95f4\n            state.accumulatedRequestTime += System.currentTimeMillis() - t;\n          } else {\n            if (log.isDebugEnabled()) {\n              log.debug("A bad connection (" + conn.getRealHashCode() + ") was returned from the pool, getting another connection.");\n            }\n            state.badConnectionCount++;\n            localBadConnectionCount++;\n            conn = null;\n            if (localBadConnectionCount > (poolMaximumIdleConnections + poolMaximumLocalBadConnectionTolerance)) {\n              if (log.isDebugEnabled()) {\n                log.debug("PooledDataSource: Could not get a good connection to the database.");\n              }\n              throw new SQLException("PooledDataSource: Could not get a good connection to the database.");\n            }\n          }\n        }\n      }\n\n    }\n\n    if (conn == null) {\n      if (log.isDebugEnabled()) {\n        log.debug("PooledDataSource: Unknown severe error condition.  The connection pool returned a null connection.");\n      }\n      throw new SQLException("PooledDataSource: Unknown severe error condition.  The connection pool returned a null connection.");\n    }\n\n    return conn;\n  }\n')),(0,a.kt)("h5",{id:"\u6d41\u7a0b\u56fe"},"\u6d41\u7a0b\u56fe"),(0,a.kt)("p",null,"\u901a\u8fc7\u83b7\u53d6\u6b64\u94fe\u63a5\u7684\u65b9\u5f0f,\u6574\u7406\u6d41\u7a0b\u56fe\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(12282).Z,width:"1289",height:"840"})),(0,a.kt)("h5",{id:"\u903b\u8f91"},"\u903b\u8f91"),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u83b7\u53d6\u8fde\u63a5\u5bf9\u8c61\u7684\u4ee3\u7801\u4e2d,\u7a0b\u5e8f\u6267\u884c\u903b\u8f91\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u83b7\u53d6\u7684\u4ee3\u7406\u6570\u636e\u5e93\u8fde\u63a5PooledConnection,\u8be5\u5bf9\u8c61\u901a\u8fc7\u7ef4\u62a4\u771f\u662fConnection,\u5e76\u901a\u8fc7JDK\u7684\u52a8\u6001\u4ee3\u7406\u4ea7\u751f\u771f\u5b9e\u7684\u6570\u636e\u5e93Connection\u8fde\u63a5\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u5faa\u73af\u83b7\u53d6PooledConnection\uff0c\u77e5\u9053\u83b7\u53d6\u5f97\u5230\u4e3a\u6b62"),(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u62ff\u5230\u8fde\u63a5\u6c60\u72b6\u6001\u9501\uff0c\u5224\u65ad\u7a7a\u95f2\u8fde\u63a5\u6c60\u662f\u5426\u4e3a\u7a7a\uff0c\u5982\u679c\u4e0d\u4e3a\u7a7a,\u83b7\u53d6\u7b2c\u4e00\u4e2a\u7a7a\u95f2\u8fde\u63a5(\u540c\u65f6remove\u4ece\u7a7a\u95f2\u6c60\u96c6\u5408\u4e2dremove\u7b2c\u4e00\u4e2a),\u5e76\u8fd4\u56de"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u7a7a\u95f2\u8fde\u63a5\u6c60\u4e3a\u7a7a,\u5224\u65ad\u5f53\u524d\u6fc0\u6d3b\u8fde\u63a5\u6c60\u5927\u5c0f\u662f\u5426\u5c0f\u4e8e\u8fde\u63a5\u6c60\u6700\u5927\u8fde\u63a5\u6570,\u5982\u679c\u5c0f\u4e8e\u5219new\u4e00\u4e2a\u65b0\u7684PooledConnection\u4ee3\u7406\u8fde\u63a5\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8fde\u63a5\u6c60\u6700\u5927\u8fde\u63a5\u6570\u5df2\u6ee1,\u83b7\u53d6\u7b2c\u4e00\u4e2a\u8fde\u63a5\u6c60\u4ee3\u7406\u5bf9\u8c61,\u5224\u65ad\u8be5\u4ee3\u7406\u5bf9\u8c61\u662f\u5426\u9884\u671f(\u8fde\u63a5\u6c60\u9884\u671f\u65f6\u95f4\u9ed8\u8ba420\u79d2),\u5982\u679c\u5f53\u524d\u8fde\u63a5\u5df2\u9884\u671f,\u4ece\u6d3b\u52a8\u8fde\u63a5\u6c60\u4e2d\u79fb\u9664\u8be5\u8fde\u63a5,\u56de\u6eda\u5f53\u524d\u8fde\u63a5\u4e8b\u52a1\uff0c\u4f7f\u7528\u5f53\u524d\u4ee3\u7406\u5bf9\u8c61\u7684Connection\uff0c\u4f5c\u4e3a\u521b\u5efa\u65b0\u7684PooledConnection\u5bf9\u8c61\u7684\u53c2\u6570\uff0c\u8001\u7684\u8fde\u63a5\u7f6e\u4e3a\u4e0d\u53ef\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u7b2c\u4e00\u4e2a\u6c60\u5bf9\u8c61\u5e76\u672a\u9884\u671f,\u5219\u7b49\u5f85\uff0c\u6839\u636e\u8fde\u63a5\u6c60\u7684\u7b49\u5f85\u65f6\u95f4\u8fdb\u884c\u7b49\u5f85"),(0,a.kt)("li",{parentName:"ul"},"\u62ff\u5230PooledConnection\u5bf9\u8c61\u540e,\u5bf9\u5f53\u524d\u8fde\u63a5\u5224\u65ad\u662f\u5426\u6709\u6548,\u6709\u6548\u7684\u65b9\u6cd5\u9a8c\u8bc1\u4e3b\u8981\u5305\u62ec\u5f53\u524d\u8fde\u63a5\u662f\u5426\u5173\u95ed\uff0c\u5982\u679c\u53ea\u60f3query\u64cd\u4f5c,\u5e76\u6267\u884c,\u6267\u884c\u62ff\u5230\u7ed3\u679c\u5219\u5f53\u524d\u8fde\u63a5\u4e3a\u53ef\u7528\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"\u62ff\u5230\u771f\u5b9eConnection\u5bf9\u8c61,\u5224\u65ad\u662f\u5426\u81ea\u52a8\u63d0\u4ea4,\u5982\u679c\u4e3afalse,\u5219\u56de\u6eda\u5f53\u524dConnection\u7684\u4e8b\u52a1\uff0c\u6700\u540e\u5c06\u8be5\u8fde\u63a5\u52a0\u5165\u5230\u8fde\u63a5\u6c60\u6d3b\u52a8\u8fde\u63a5\u96c6\u5408\u4e2d\u8fd4\u56de"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u5f97\u5230PooledConnection\u540e\uff0c\u56e0\u4e3a\u6700\u7ec8\u8981\u8fd4\u56de\u7684\u662fConnection\u5bf9\u8c61,\u968f\u610f\u8c03\u7528\u6c60\u4ee3\u7406\u8fde\u63a5\u7684getProxyConnect()\u65b9\u6cd5\u83b7\u53d6\u4ee3\u7406\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u4ee3\u7406\u5bf9\u8c61\u65f6,\u9996\u5148\u5224\u65ad\u5f53\u524dConnection\u7684\u65b9\u6cd5\uff0c\u5982\u679c\u662f\u8c03\u7528close()\u65b9\u6cd5,\u5219\u9996\u5148\u4f1a\u8fdb\u5165\u91ca\u653e\u8fde\u63a5\u7684\u903b\u8f91\uff0c\u4ece\u5f53\u524d\u6d3b\u52a8\u8fde\u63a5\u6c60\u4e2d\u79fb\u9664\u8be5\u5bf9\u8c61,\u5224\u65ad\u7a7a\u95f2\u6c60\u7a7a\u95f4\u8db3\u591f,\u5982\u679c\u53ef\u7528,\u52a0\u5165\u7a7a\u95f2\u8fde\u63a5\u6c60,\u8c03\u7528notifyAll(),\u5524\u9192wait\u7ebf\u7a0b,\u5982\u679c\u7a7a\u95f2\u8fde\u63a5\u6c60\u5df2\u6ee1,\u5219\u771f\u5b9e\u8c03\u7528Connection\u7684close()\u65b9\u6cd5,\u5e76\u5728\u4e4b\u524d\u56de\u6eda\u4e8b\u52a1,\u5173\u95ed\u8be5\u8fde\u63a5")),(0,a.kt)("h3",{id:"jndidatasourcefactory"},"JndiDataSourceFactory"),(0,a.kt)("p",null,"\u5173\u4e8eJndi\u6570\u636e\u6e90,\u5de5\u4f5c\u4e2d\u51e0\u4e4e\u6ca1\u6709\u7528\u5230\u8fc7,\u5370\u8c61\u4e2d\u662f\u901a\u8fc7J2EE\u5bb9\u5668\u6765\u521b\u5efa\u6570\u636e\u6e90,\u4e3a\u6b64\u6211\u8fd8\u662f\u7279\u5730\u641c\u7d22\u5b66\u4e60\u8bb0\u5f55\u4e00\u4e0b"),(0,a.kt)("p",null,"\u9996\u5148,\u4ec0\u4e48\u662fJNDI\uff1f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"JNDI(Java Naming and Directory Interface)\u662fJava\u6280\u672f\u4e2d\u6307\u5b9a\u7684API\uff0c\u5b83\u4e3a\u4f7f\u7528Java\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u547d\u540d\u548c\u76ee\u5f55\u529f\u80fd.\u5b83\u4e13\u4e3a\u4f7f\u7528Java\u5bf9\u8c61\u6a21\u578b\u7684Java\u5e73\u53f0\u800c\u8bbe\u8ba1\u3002\u4f7f\u7528JNDI\uff0c\u57fa\u4e8eJava\u6280\u672f\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5b58\u50a8\u548c\u68c0\u7d22\u4efb\u4f55\u7c7b\u578b\u7684\u547d\u540dJava\u5bf9\u8c61,\u6b64\u5916\uff0cJNDI\u8fd8\u63d0\u4f9b\u4e86\u6267\u884c\u6807\u51c6\u76ee\u5f55\u64cd\u4f5c\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982\u5c06\u5c5e\u6027\u4e0e\u5bf9\u8c61\u76f8\u5173\u8054\u4ee5\u53ca\u4f7f\u7528\u5176\u5c5e\u6027\u641c\u7d22\u5bf9\u8c61"),(0,a.kt)("p",{parentName:"blockquote"},"JNDI\u4e5f\u662f\u72ec\u7acb\u4e8e\u4efb\u4f55\u7279\u5b9a\u547d\u540d\u6216\u76ee\u5f55\u670d\u52a1\u5b9e\u73b0\u800c\u5b9a\u4e49\u7684,\u5b83\u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u4f7f\u7528\u901a\u7528API\u8bbf\u95ee\u4e0d\u540c\u7684\uff0c\u53ef\u80fd\u662f\u591a\u4e2a\u547d\u540d\u548c\u76ee\u5f55\u670d\u52a1,\u53ef\u4ee5\u5728\u6b64\u901a\u7528API\u540e\u9762\u65e0\u7f1d\u63d2\u5165\u4e0d\u540c\u7684\u547d\u540d\u548c\u76ee\u5f55\u670d\u52a1\u63d0\u4f9b\u7a0b\u5e8f\u3002\u8fd9\u4f7f\u57fa\u4e8eJava\u6280\u672f\u7684\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u5229\u7528\u5404\u79cd\u73b0\u6709\u547d\u540d\u548c\u76ee\u5f55\u670d\u52a1\u4e2d\u7684\u4fe1\u606f,\u4f8b\u5982LDAP\uff0cNDS\uff0cDNS\u548cNIS\uff08YP\uff09\uff0c\u4ee5\u53ca\u4f7f\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u4e0e\u4f20\u7edf\u8f6f\u4ef6\u548c\u7cfb\u7edf\u5171\u5b58"),(0,a.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528JNDI\u4f5c\u4e3a\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u6784\u5efa\u65b0\u7684\u529f\u80fd\u5f3a\u5927\u4e14\u53ef\u79fb\u690d\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u4e0d\u4ec5\u53ef\u4ee5\u5229\u7528Java\u7684\u5bf9\u8c61\u6a21\u578b\uff0c\u800c\u4e14\u8fd8\u53ef\u4ee5\u4e0e\u90e8\u7f72\u5b83\u4eec\u7684\u73af\u5883\u826f\u597d\u96c6\u6210\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u901a\u8fc7\u5728\u7f51\u7edc\u8303\u56f4\u5185\u5171\u4eab\u6709\u5173\u7528\u6237\uff0c\u673a\u5668\uff0c\u7f51\u7edc\uff0c\u670d\u52a1\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u5404\u79cd\u4fe1\u606f\uff0cJNDI\u5728Intranet\u548cInternet\u4e2d\u53d1\u6325\u7740\u81f3\u5173\u91cd\u8981\u7684\u4f5c\u7528")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/java/index-jsp-137536.html"},"\u5b98\u7f51\u89e3\u91ca"),",\u6211\u4eec\u77e5\u9053Jndi\u662fJava\u4e3a\u6211\u4eec\u63d0\u4f9b\u7684\u6807\u51c6\u7684Api,\u7528\u4e8e\u63d0\u4f9b\u547d\u540d\u6216\u76ee\u5f55\u670d\u52a1"),(0,a.kt)("p",null,"\u8fd9\u5c31\u597d\u6bd4\u6211\u4eec\u5c06\u6211\u4eec\u7684\u6570\u636e\u6e90\u5199\u5728\u5916\u90e8\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u540c\u7b49\u9053\u7406,\u6211\u4eec\u5728Jndi\u914d\u7f6e\u4e86\u4e00\u4e2a\u6570\u636e\u6e90,\u547d\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"com/mybatis/prodDataSource"),",\u800c\u5f00\u53d1\u65e0\u9700\u8981\u77e5\u9053\u8be5\u6570\u636e\u6e90\u5730\u5740\uff0c\u7528\u6237\u540d\u5bc6\u7801\u7b49\uff0c\u751a\u81f3\u8fde\u63a5\u6c60\u4e5f\u4e0d\u7528\u5173\u5fc3,\u53ea\u9700\u8981\u4f7f\u7528Jndi\u63d0\u4f9b\u7684api,\u5c31\u80fd\u521d\u59cb\u5316\u62ff\u5230\u6570\u636e\u6e90\u7684Connection\u8fde\u63a5,\u8fdb\u884c\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u597d\u5904\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u5728\u4e0d\u540c\u7684\u73af\u5883(dev\u3001prod)\u4e2d\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684JNDI\u547d\u540d,\u8fd9\u6837\u5728\u90e8\u7f72\u65f6,\u4e0d\u7528\u4e3a\u4e86\u73af\u5883\u7684\u4e0d\u540c,\u800c\u53d8\u66f4\u76f8\u5173\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u6700\u5c0f\u5316\u9700\u8981\u77e5\u9053\u8bbf\u95ee\u751f\u4ea7\u6570\u636e\u5e93\u7684\u51ed\u636e\u7684\u4eba\u6570\u3002\u53ea\u6709Java EE\u5e94\u7528\u670d\u52a1\u5668\u9700\u8981\u77e5\u9053\u60a8\u662f\u5426\u4f7f\u7528JNDI")),(0,a.kt)("p",null,"\u5f53\u7136,\u968f\u7740Spring Boot\u5e94\u7528\u6846\u67b6\u7ed9\u6211\u4eec\u63d0\u4f9b\u7684\u5404\u73af\u5883\u90e8\u7f72\u7684\u7b56\u7565,\u76ee\u524dJndi\u8fd9\u4e9b\u6280\u672f\u5df2\u7ecf\u5f88\u5c11\u6709\u4eba\u4f7f\u7528\u4e86."))}s.isMDXComponent=!0},65524:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/DataSource-91fb410b26deddce90f9fad5ee443cda.png"},12282:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/PooledDataSource-388c0b9ba4ab6d0e7cc23b2013540128.png"}}]);