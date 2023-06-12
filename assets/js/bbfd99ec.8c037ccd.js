"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,f=g["".concat(s,".").concat(d)]||g[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},41739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={layout:"post",title:"springfox \u6e90\u7801\u5206\u6790(\u5341\u4e8c) \u904d\u5386\u63a5\u53e3\u83b7\u53d6ApiDescription\u96c6\u5408",categories:"springfox",description:"springfox \u6e90\u7801\u7cfb\u5217",keywords:["springfox \u6e90\u7801\u7cfb\u5217","springfox-swagger"]},a=void 0,p={unversionedId:"springfox/2019-05-28-springfox-12",id:"springfox/2019-05-28-springfox-12",title:"springfox \u6e90\u7801\u5206\u6790(\u5341\u4e8c) \u904d\u5386\u63a5\u53e3\u83b7\u53d6ApiDescription\u96c6\u5408",description:"springfox \u6e90\u7801\u7cfb\u5217",source:"@site/programmer/blog/springfox/2019-05-28-springfox-12.md",sourceDirName:"springfox",slug:"/springfox/2019-05-28-springfox-12",permalink:"/blog/springfox/2019-05-28-springfox-12",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/springfox/2019-05-28-springfox-12.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"springfox \u6e90\u7801\u5206\u6790(\u5341\u4e8c) \u904d\u5386\u63a5\u53e3\u83b7\u53d6ApiDescription\u96c6\u5408",categories:"springfox",description:"springfox \u6e90\u7801\u7cfb\u5217",keywords:["springfox \u6e90\u7801\u7cfb\u5217","springfox-swagger"]},sidebar:"tutorialSidebar",previous:{title:"springfox \u6e90\u7801\u5206\u6790(\u5341\u4e00) \u81ea\u5b9a\u4e49\u6dfb\u52a0Swagger Models\u529f\u80fd\u5b9e\u73b0",permalink:"/blog/springfox/2019-05-27-springfox-11"},next:{title:"springfox \u6e90\u7801\u5206\u6790(\u5341\u4e09) \u81ea\u5b9a\u4e49\u6269\u5c55\u5b9e\u73b0\u63a5\u53e3\u7684\u6392\u5e8f",permalink:"/blog/springfox/2019-05-29-springfox-13"}},s={},l=[{value:"\u57fa\u7840\u4fe1\u606f",id:"\u57fa\u7840\u4fe1\u606f",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ApiDescription\u662fspringfox\u63d0\u4f9b\u7684\u63a5\u53e3\u63cf\u8ff0\u4fe1\u606f\u7c7b,\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"springfox \u6e90\u7801\u5206\u6790(\u5341) \u904d\u5386\u63a5\u53e3\u83b7\u53d6Model\u5bf9\u8c61"),"\u4e2d\u6211\u4eec\u62ff\u5230\u4e86\u63a5\u53e3\u7684\u7c7b\u578bModel\u96c6\u5408\u4fe1\u606f\uff0c\u4f46\u9664\u4e86Model\u4fe1\u606f,\u63a5\u53e3\u8fd8\u6709\u66f4\u591a\u7684\u4fe1\u606f"),(0,o.kt)("h2",{id:"\u57fa\u7840\u4fe1\u606f"},"\u57fa\u7840\u4fe1\u606f"),(0,o.kt)("p",null,"\u4e3b\u8981\u5305\u62ec\uff1a\u63a5\u53e3\u8def\u5f84\u3001consumes\u3001produces\u3001\u53c2\u6570\u3001\u8bf7\u6c42\u7c7b\u578b\u3001\u63cf\u8ff0\u3001\u8bf4\u660e\u3001\u54cd\u5e94\u72b6\u6001\u7801\u3001\u662f\u5426\u8fc7\u65f6\u3001\u6269\u5c55\u4fe1\u606f\u3001\u5206\u7ec4"),(0,o.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u7684\u63a5\u53e3\u53ef\u4ee5\u8fd0\u884c\u591a\u4e2a\u8bf7\u6c42\u7c7b\u578b\u7684\u5b58\u5728,\u6240\u4ee5\u4ee5\u4e0a\u4fe1\u606f\u5728springfox\u662f\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Operation"),"\u6765\u58f0\u660e\u7684"),(0,o.kt)("p",null,"\u5148\u6765\u770b",(0,o.kt)("inlineCode",{parentName:"p"},"ApiDescription"),"\u7684\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class ApiDescription {\n  //\u5206\u7ec4\u540d\u79f0\n  private final String groupName;\n  //\u8def\u5f84\n  private final String path;\n  //\u63cf\u8ff0\n  private final String description;\n  //\u64cd\u4f5c\u4fe1\u606f\u96c6\u5408\n  //\u4e00\u4e2a\u63a5\u53e3\u6709\u53ef\u80fd\u5b58\u5728\u591a\u4e2a\u8bf7\u6c42\u65b9\u6cd5\u7c7b\u578b,\u5373\uff1aGET\u3001POST\u3001PUT\u3001DELETE\u7b49,\u6240\u4ee5\u8fd9\u91cc\u4e5f\u662f1\uff1aN\u7684\u6620\u5c04\u5173\u7cfb\n  private final List<Operation> operations;\n  //\u662f\u5426\u9690\u85cf\n  private final Boolean hidden;\n    //getter and setters....\n}\n")),(0,o.kt)("p",null,"\u5728\u4ee3\u7801\u6ce8\u91ca\u4e2d,\u6211\u4e5f\u505a\u4e86\u8bf4\u660e"),(0,o.kt)("p",null,"\u56e0\u4e3a\u4e00\u4e2a\u63a5\u53e3\u6709\u53ef\u80fd\u5b58\u5728\u591a\u4e2a\u8bf7\u6c42\u65b9\u6cd5\u7c7b\u578b,\u5373\uff1aGET\u3001POST\u3001PUT\u3001DELETE\u7b49,\u6240\u4ee5\u8fd9\u91cc\u4e5f\u662f1\uff1aN\u7684\u6620\u5c04\u5173\u7cfb\uff0c\u5373\u5b58\u5728\u591a\u4e2aOperation\u96c6\u5408"),(0,o.kt)("p",null,"Operation\u7684\u5c5e\u6027"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class Operation {\n  //\u8bf7\u6c42\u63a5\u53e3\n  private final HttpMethod method;\n  //\u63a5\u53e3\u540d\u79f0\n  private final String summary;\n  //\u63a5\u53e3\u63cf\u8ff0\u4fe1\u606f\n  private final String notes;\n  private final ModelReference responseModel;\n  //\u552f\u4e00id\n  private final String uniqueId;\n  private final int position;\n  //tags\n  private final Set<String> tags;\n  private final Set<String> produces;\n  private final Set<String> consumes;\n  private final Set<String> protocol;\n  //\u662f\u5426\u9690\u85cf\n  private final boolean isHidden;\n  private final Map<String, List<AuthorizationScope>> securityReferences;\n  //\u53c2\u6570\n  private final List<Parameter> parameters;\n  //\u72b6\u6001\u7801\n  private final Set<ResponseMessage> responseMessages;\n  //\u662f\u5426\u8fc7\u65f6\n  private final String deprecated;\n  //\u6269\u5c55\u4fe1\u606f\n  private final List<VendorExtension> vendorExtensions;\n\n  //setter and getter..   \n}\n")),(0,o.kt)("p",null,"\u5728Operation\u4e2d\u58f0\u660e\u7684\u5c5e\u6027\u4e2d\u5c31\u662f\u6211\u4eec\u4e0a\u9762\u4ecb\u7ecd\u7684\u63a5\u53e3\u76f8\u5173\u4fe1\u606f."),(0,o.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u4e86\u63a5\u53e3\u7684\u4ecb\u7ecd\u4fe1\u606f,\u6b64\u65f6,\u6765\u770bspringfox\u5982\u4f55\u5904\u7406\uff0c\u5c06\u63a5\u53e3\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u6700\u7ec8\u521d\u59cb\u5316\u8f6c\u6362\u4e3aApiDescription"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApiDescriptionReader.read"),"\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/***\n * \u83b7\u53d6ApiDescription\u63a5\u53e3\u96c6\u5408\u4fe1\u606f\n * @param outerContext\n * @return\n */\npublic List<ApiDescription> read(RequestMappingContext outerContext) {\n  PatternsRequestCondition patternsCondition = outerContext.getPatternsCondition();\n  ApiSelector selector = outerContext.getDocumentationContext().getApiSelector();\n\n  List<ApiDescription> apiDescriptionList = newArrayList();\n  for (String path : matchingPaths(selector, patternsCondition)) {\n    String methodName = outerContext.getName();\n    try {\n      RequestMappingContext operationContext = outerContext.copyPatternUsing(path);\n    //\u6839\u636e\u63a5\u53e3\u4e0a\u4e0b\u6587\u83b7\u53d6Operation\u96c6\u5408\n      List<Operation> operations = operationReader.read(operationContext);\n      if (operations.size() > 0) {\n        operationContext.apiDescriptionBuilder()\n            .groupName(outerContext.getGroupName())\n            .operations(operations)\n            .pathDecorator(pluginsManager.decorator(new PathContext(outerContext, from(operations).first())))\n            .path(path)\n            .description(methodName)\n            .hidden(false);\n        ApiDescription apiDescription = operationContext.apiDescriptionBuilder().build();\n        lookup.add(outerContext.key(), apiDescription);\n        apiDescriptionList.add(apiDescription);\n      }\n    } catch (Error e) {\n      String contentMsg = "Skipping process path[" + path + "], method[" + methodName + "] as it has an error.";\n      log.error(contentMsg, e);\n    }\n  }\n  return apiDescriptionList;\n}\n')),(0,o.kt)("p",null,"\u6838\u5fc3\u64cd\u4f5c\u662f\u901a\u8fc7operationReader.read\u64cd\u4f5c,\u83b7\u53d6Operation\u96c6\u5408"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public List<Operation> read(RequestMappingContext outerContext) {\n\n    List<Operation> operations = newArrayList();\n        \n    Set<RequestMethod> requestMethods = outerContext.getMethodsCondition();\n    Set<RequestMethod> supportedMethods = supportedMethods(requestMethods);\n\n    //Setup response message list\n    Integer currentCount = 0;\n    //\u904d\u5386\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u63a5\u53e3\u7c7b\u578b\n    for (RequestMethod httpRequestMethod : supportedMethods) {\n      OperationContext operationContext = new OperationContext(new OperationBuilder(nameGenerator),\n          httpRequestMethod,\n          outerContext,\n          currentCount);\n        //\u8c03\u7528OperationPlugin\u63d2\u4ef6\uff0c\u6784\u9020Operation\u5bf9\u8c61\n      Operation operation = pluginsManager.operation(operationContext);\n        //\u6dfb\u52a0\n      if (!operation.isHidden()) {\n        operations.add(operation);\n        currentCount++;\n      }\n    }\n    Collections.sort(operations, outerContext.operationOrdering());\n\n    return operations;\n  }\n")),(0,o.kt)("p",null,"\u4e3b\u8981\u7684\u903b\u8f91\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u63a5\u53e3\u7c7b\u578b,\u5305\u62ecGET|POST\u3001PUT\u3001DELETE\u7b49"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8c03\u7528OperationPlugin\u7684\u63d2\u4ef6\u5bf9Operation\u4e2d\u7684\u6bcf\u4e2a\u5c5e\u6027\u8fdb\u884c\u8d4b\u503c\u64cd\u4f5c,\u5305\u62ec\u53c2\u6570\u7c7b\u578b\u3001\u63cf\u8ff0\u3001\u54cd\u5e94\u72b6\u6001\u7801\u7b49\u7b49\u4fe1\u606f")),(0,o.kt)("p",null,"OperationPlugin\u63d2\u4ef6\u5305\u542b\u4e86\u591a\u4e2a\u5b9e\u73b0\u7c7b\u578b\uff0c\u8fd9\u4e2a\u53ef\u4ee5\u53c2\u8003\u524d\u9762\u4ecb\u7ecd\u7684",(0,o.kt)("a",{parentName:"p",href:"/2019/05/23/springfox-5/"},"springfox \u6e90\u7801\u5206\u6790(\u4e94) web\u914d\u7f6e\u7c7bPlugin\u63d2\u4ef6\u7684\u4f7f\u7528")),(0,o.kt)("p",null,"\u65e2\u7136Operation\u63d0\u4f9b\u4e86\u6269\u5c55\u53c2\u6570,\u90a3\u4e48\u6211\u4eec\u540e\u9762\u662f\u53ef\u4ee5\u8fdb\u884c\u6dfb\u52a0\u81ea\u5b9a\u4e49\u6269\u5c55\u7684"),(0,o.kt)("p",null,"\u4e0b\u4e00\u7bc7\u4f1a\u4ecb\u7ecd\u5982\u4f55\u6dfb\u52a0springfox\u7684\u63a5\u53e3\u6269\u5c55\u5b57\u6bb5."))}c.isMDXComponent=!0}}]);