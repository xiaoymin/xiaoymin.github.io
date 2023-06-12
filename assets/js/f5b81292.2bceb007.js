"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=g(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var g=2;g<i;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var r=n(87462),o=(n(67294),n(3905));const i={layout:"post",title:"springfox \u6e90\u7801\u5206\u6790(\u5341\u4e03) Swagger2\u63a5\u53e3\u6587\u6863\u793a\u4f8b\u63a5\u53e3api-docs",categories:"springfox",description:"springfox \u6e90\u7801\u7cfb\u5217",keywords:["springfox \u6e90\u7801\u7cfb\u5217","springfox-swagger"]},a=void 0,p={unversionedId:"springfox/2019-06-01-springfox-17",id:"springfox/2019-06-01-springfox-17",title:"springfox \u6e90\u7801\u5206\u6790(\u5341\u4e03) Swagger2\u63a5\u53e3\u6587\u6863\u793a\u4f8b\u63a5\u53e3api-docs",description:"springfox \u6e90\u7801\u7cfb\u5217",source:"@site/programmer/blog/springfox/2019-06-01-springfox-17.md",sourceDirName:"springfox",slug:"/springfox/2019-06-01-springfox-17",permalink:"/blog/springfox/2019-06-01-springfox-17",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/springfox/2019-06-01-springfox-17.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"springfox \u6e90\u7801\u5206\u6790(\u5341\u4e03) Swagger2\u63a5\u53e3\u6587\u6863\u793a\u4f8b\u63a5\u53e3api-docs",categories:"springfox",description:"springfox \u6e90\u7801\u7cfb\u5217",keywords:["springfox \u6e90\u7801\u7cfb\u5217","springfox-swagger"]},sidebar:"tutorialSidebar",previous:{title:"springfox \u6e90\u7801\u5206\u6790(\u5341\u516d) \u5206\u7ec4\u63a5\u53e3swagger-resouces",permalink:"/blog/springfox/2019-06-01-springfox-16"},next:{title:"springfox \u6e90\u7801\u5206\u6790(\u5341\u516b) \u81ea\u5b9a\u4e49\u6269\u5c55\u5b9e\u73b0\u5206\u7ec4\u7684\u6392\u5e8f",permalink:"/blog/springfox/2019-06-02-springfox-18"}},s={},g=[],c={toc:g};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u524d\u9762\u5df2\u7ecf\u83b7\u53d6\u5f97\u5230\u4e86swagger\u7684\u5206\u7ec4\u63a5\u53e3\u4fe1\u606f\u4e86,\u63a5\u4e0b\u6765\u5c31\u662f\u6839\u636e\u5206\u7ec4\u540d\u79f0\u83b7\u53d6\u6bcf\u4e2a\u5206\u7ec4\u7684Swagger\u8d44\u6e90\u8be6\u7ec6\u4fe1\u606f,\u5728springfox\u4e2d\u63d0\u4f9b\u4e86/v2/api-docs\u63a5\u53e3\u6765\u8fdb\u884c\u83b7\u53d6"),(0,o.kt)("p",null,"\u6765\u770b\u63a5\u53e3\u7684\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Controller\n@ApiIgnore\npublic class Swagger2Controller {\n\n  public static final String DEFAULT_URL = "/v2/api-docs";\n  private static final Logger LOGGER = LoggerFactory.getLogger(Swagger2Controller.class);\n  private static final String HAL_MEDIA_TYPE = "application/hal+json";\n\n  private final String hostNameOverride;\n  private final DocumentationCache documentationCache;\n  private final ServiceModelToSwagger2Mapper mapper;\n  private final JsonSerializer jsonSerializer;\n\n  @Autowired\n  public Swagger2Controller(\n      Environment environment,\n      DocumentationCache documentationCache,\n      ServiceModelToSwagger2Mapper mapper,\n      JsonSerializer jsonSerializer) {\n\n    this.hostNameOverride =\n        environment.getProperty(\n            "springfox.documentation.swagger.v2.host",\n            "DEFAULT");\n    this.documentationCache = documentationCache;\n    this.mapper = mapper;\n    this.jsonSerializer = jsonSerializer;\n  }\n\n  @RequestMapping(\n      value = DEFAULT_URL,\n      method = RequestMethod.GET,\n      produces = { APPLICATION_JSON_VALUE, HAL_MEDIA_TYPE })\n  @PropertySourcedMapping(\n      value = "${springfox.documentation.swagger.v2.path}",\n      propertyKey = "springfox.documentation.swagger.v2.path")\n  @ResponseBody\n  public ResponseEntity<Json> getDocumentation(\n      @RequestParam(value = "group", required = false) String swaggerGroup,\n      HttpServletRequest servletRequest) {\n\n    String groupName = Optional.fromNullable(swaggerGroup).or(Docket.DEFAULT_GROUP_NAME);\n    Documentation documentation = documentationCache.documentationByGroup(groupName);\n    if (documentation == null) {\n      LOGGER.warn("Unable to find specification for group {}", groupName);\n      return new ResponseEntity<Json>(HttpStatus.NOT_FOUND);\n    }\n    Swagger swagger = mapper.mapDocumentation(documentation);\n    UriComponents uriComponents = componentsFrom(servletRequest, swagger.getBasePath());\n    swagger.basePath(Strings.isNullOrEmpty(uriComponents.getPath()) ? "/" : uriComponents.getPath());\n    if (isNullOrEmpty(swagger.getHost())) {\n      swagger.host(hostName(uriComponents));\n    }\n    return new ResponseEntity<Json>(jsonSerializer.toJson(swagger), HttpStatus.OK);\n  }\n\n  private String hostName(UriComponents uriComponents) {\n    if ("DEFAULT".equals(hostNameOverride)) {\n      String host = uriComponents.getHost();\n      int port = uriComponents.getPort();\n      if (port > -1) {\n        return String.format("%s:%d", host, port);\n      }\n      return host;\n    }\n    return hostNameOverride;\n  }\n}\n\n')),(0,o.kt)("p",null,"\u8be5\u63a5\u53e3\u4e3b\u8981\u903b\u8f91\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f20\u5165groupName\u5206\u7ec4\u540d\u79f0\u53c2\u6570,\u4ece\u6587\u6863\u7f13\u5b58\u5bf9\u8c61\u4e2d\u83b7\u53d6Documentation\u6587\u6863\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7mapper\u63d0\u4f9b\u7684\u65b9\u6cd5,\u5c06Documentation\u5bf9\u8c61\u8f6c\u6362\u4e3a\u6807\u51c6\u7684Swagger\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"JSON\u54cd\u5e94\u8f93\u51fa")),(0,o.kt)("p",null,"Swagger\u7684\u6807\u51c6\u5bf9\u8c61\u4e3b\u8981\u5305\u542b\u4fe1\u606f\u6211\u4eec\u5728\u524d\u9762\u4e5f\u4ecb\u7ecd\u8fc7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class Swagger {\n    protected String swagger = "2.0";\n    protected Info info;\n    protected String host;\n    protected String basePath;\n    protected List<Tag> tags;\n    protected List<Scheme> schemes;\n    protected List<String> consumes;\n    protected List<String> produces;\n    protected List<SecurityRequirement> security;\n    protected Map<String, Path> paths;\n    protected Map<String, SecuritySchemeDefinition> securityDefinitions;\n    protected Map<String, Model> definitions;\n    protected Map<String, Parameter> parameters;\n    protected Map<String, Response> responses;\n    protected ExternalDocs externalDocs;\n    protected Map<String, Object> vendorExtensions;\n}\n')),(0,o.kt)("p",null,"\u6700\u7ec8\u5728ui\u7aef\u62ff\u5230Swagger\u7684\u5c5e\u6027\u4fe1\u606f\u8fdb\u884c\u63a5\u53e3\u7684\u4fe1\u606f\u6e32\u67d3,\u5f00\u53d1\u4eba\u5458\u5373\u53ef\u8fdb\u884c\u63a5\u53e3\u7684\u67e5\u770b\u548c\u8c03\u8bd5."))}l.isMDXComponent=!0}}]);