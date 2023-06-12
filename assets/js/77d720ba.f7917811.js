"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6223],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return r?t.createElement(m,a(a({ref:n},c),{},{components:r})):t.createElement(m,a({ref:n},c))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92127:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const i={layout:"post",title:"springfox \u6e90\u7801\u5206\u6790(\u516d) web\u914d\u7f6e\u7c7b\u626b\u63cf\u5305\u4f5c\u7528\u63a2\u7d22",categories:"springfox",description:"springfox \u6e90\u7801\u7cfb\u5217",keywords:["springfox \u6e90\u7801\u7cfb\u5217","springfox-swagger"]},a=void 0,p={unversionedId:"springfox/2019-05-23-springfox-6",id:"springfox/2019-05-23-springfox-6",title:"springfox \u6e90\u7801\u5206\u6790(\u516d) web\u914d\u7f6e\u7c7b\u626b\u63cf\u5305\u4f5c\u7528\u63a2\u7d22",description:"springfox \u6e90\u7801\u7cfb\u5217",source:"@site/programmer/blog/springfox/2019-05-23-springfox-6.md",sourceDirName:"springfox",slug:"/springfox/2019-05-23-springfox-6",permalink:"/blog/springfox/2019-05-23-springfox-6",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/springfox/2019-05-23-springfox-6.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"springfox \u6e90\u7801\u5206\u6790(\u516d) web\u914d\u7f6e\u7c7b\u626b\u63cf\u5305\u4f5c\u7528\u63a2\u7d22",categories:"springfox",description:"springfox \u6e90\u7801\u7cfb\u5217",keywords:["springfox \u6e90\u7801\u7cfb\u5217","springfox-swagger"]},sidebar:"tutorialSidebar",previous:{title:"springfox \u6e90\u7801\u5206\u6790(\u4e94) web\u914d\u7f6e\u7c7bPlugin\u63d2\u4ef6\u7684\u4f7f\u7528",permalink:"/blog/springfox/2019-05-23-springfox-5"},next:{title:"springfox \u6e90\u7801\u5206\u6790(\u4e03) \u6587\u6863\u521d\u59cb\u5316",permalink:"/blog/springfox/2019-05-23-springfox-7"}},s={},l=[],c={toc:l};function g(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u65f6\u95f4\uff1a2019-5-23 18:46:50"),(0,o.kt)("p",null,"\u5730\u70b9\uff1a\u5bb6\u4e2d"),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u4e0a\u4e00\u7bc7\u4e2d,\u77e5\u9053\u4e86springfox\u4e00\u7cfb\u5217Plugin\u63a5\u53e3\u7684\u5b9e\u73b0\u3001\u4f5c\u7528"),(0,o.kt)("p",null,"\u800c\u6b64\u65f6,\u6211\u4eec\u8054\u60f3\u5230springfox\u4e3a\u6211\u4eec\u63d0\u4f9b\u7684Configuration\u914d\u7f6e\u7c7b\u4e2d\u4f7f\u7528\u4e86\u5305\u8def\u5f84\u626b\u63cf"),(0,o.kt)("p",null,"\u5148\u6765\u770b",(0,o.kt)("inlineCode",{parentName:"p"},"OperationBuilderPlugin"),"\u7684\u5b9e\u73b0\u7c7b\u4e4b\u4e00",(0,o.kt)("inlineCode",{parentName:"p"},"OperationDeprecatedReader"),"\u7684\u4ee3\u7801"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"OperationDeprecatedReader.java")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"package springfox.documentation.spring.web.readers.operation;\n\nimport com.google.common.base.Optional;\nimport org.springframework.core.Ordered;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.stereotype.Component;\nimport springfox.documentation.spi.DocumentationType;\nimport springfox.documentation.spi.service.OperationBuilderPlugin;\nimport springfox.documentation.spi.service.contexts.OperationContext;\n\n@Component\n@Order(Ordered.HIGHEST_PRECEDENCE)\npublic class OperationDeprecatedReader implements OperationBuilderPlugin {\n  @Override\n  public void apply(OperationContext context) {\n    Optional<Deprecated> annotation = context.findAnnotation(Deprecated.class);\n    context.operationBuilder().deprecated(String.valueOf(annotation.isPresent()));\n  }\n\n  @Override\n  public boolean supports(DocumentationType delimiter) {\n    return true;\n  }\n}\n\n")),(0,o.kt)("p",null,"\u8fd9\u662f\u9488\u5bf9operation\u4e2d\u63a5\u53e3\u662f\u5426\u8fc7\u65f6\u8fdb\u884c\u5904\u7406\u7684\u5b9e\u73b0\u7c7b"),(0,o.kt)("p",null,"\u5b9e\u73b0\u7c7b\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"springfox.documentation.spring.web.readers.operation"),"\u5305\u4e0b,\u5e76\u4e14\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"@Component"),"\u6ce8\u89e3\u8fdb\u884cbean\u7684\u5b9e\u4f8b\u6ce8\u5165"),(0,o.kt)("p",null,"\u6b64\u65f6,\u6211\u4eec\u56de\u8fc7\u5934\u6765\u770b",(0,o.kt)("inlineCode",{parentName:"p"},"SpringfoxWebMvcConfiguration"),"\u7684\u6e90\u7801\uff0c\u6e90\u7801\u4e2d\u914d\u7f6e\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"springfox.documentation.spring.web.readers.operation"),"\u626b\u63cf\u8def\u5f84"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@Import({ ModelsConfiguration.class })\n@ComponentScan(basePackages = {\n    "springfox.documentation.spring.web.scanners",\n    "springfox.documentation.spring.web.readers.operation",\n    "springfox.documentation.spring.web.readers.parameter",\n    "springfox.documentation.spring.web.plugins",\n    "springfox.documentation.spring.web.paths"\n})\n@EnablePluginRegistries({ DocumentationPlugin.class,\n    ApiListingBuilderPlugin.class,\n    OperationBuilderPlugin.class,\n    ParameterBuilderPlugin.class,\n    ExpandedParameterBuilderPlugin.class,\n    ResourceGroupingStrategy.class,\n    OperationModelsProviderPlugin.class,\n    DefaultsProviderPlugin.class,\n    PathDecorator.class,\n    ApiListingScannerPlugin.class\n})\npublic class SpringfoxWebMvcConfiguration {\n    //more..\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@ComponentScan"),"\u6ce8\u89e3\u6b64\u65f6\u914d\u7f6e\u4e865\u4e2a\u5305\u8def\u5f84\uff0c\u5206\u522b\u662f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"springfox.documentation.spring.web.scanners"),(0,o.kt)("li",{parentName:"ul"},"springfox.documentation.spring.web.readers.operation"),(0,o.kt)("li",{parentName:"ul"},"springfox.documentation.spring.web.readers.parameter"),(0,o.kt)("li",{parentName:"ul"},"springfox.documentation.spring.web.plugins"),(0,o.kt)("li",{parentName:"ul"},"springfox.documentation.spring.web.paths")),(0,o.kt)("p",null,"\u6e90\u7801\u770b\u5230\u8fd9\u91cc,\u6211\u4eec\u5e94\u8be5\u660e\u767d,\u5305\u62ecPlugin\u7684\u63a5\u53e3\u5b9e\u73b0\u7c7b,\u90fd\u4f1a\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"@ComponentScan"),"\u914d\u7f6e\u7684\u626b\u63cf\u5305\u8def\u5f84\u4e00\u5e76\u5168\u90e8\u6ce8\u5165\u5230Spring\u5bb9\u5668\u4e2d"),(0,o.kt)("p",null,"\u800c\u6211\u4eec\u53ea\u9700\u8981\u5728\u6211\u4eec\u7684springfox\u5176\u4ed6\u4ee3\u7801\u4e2d\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"@Autowired"),"\u4f9d\u8d56\u6ce8\u5165\u5373\u53ef\u8fdb\u884c\u76f8\u5e94\u7684\u5b9e\u4f53bean\u4f7f\u7528"))}g.isMDXComponent=!0}}]);