---
layout: post
title: 基于Servlet体系的HTTP请求代理转发Spring Boot组件
categories: SpringBoot
description: 基于Servlet体系的HTTP请求代理转发Spring Boot组件
keywords: SpringBoot,Servlet转发,HTTP请求代理
---

## 背景概述

两个项目组原本都是各自负责两个产品线(**产品A**、**产品B**)，由于公司业务的发展，目前需要将两个产品合并成一个大产品(功能整合，部分做取舍,最终产出**产品C**)，前后端代码必然也需要整合，包括两个产品线的用户体系等。并且给出的**时间节点很紧张**。

目前两个产品线的区别点：

**产品A**

- 前端模块载体是微信小程序，没有H5、APP等需求，因此所采用的技术栈是原生写法，没有用到技术框架
- 服务端技术架构是单体架构，Spring Boot框架，管理后台框架采用的是Apache Shiro
- 前后端接口调用采用的是服务端`token`鉴权的方式交互
- 用户体系简单,小程序端没有会员等业务，仅涉及到微信openid，管理后台涉及权限菜单.
- 后端管理系统前端开发技术框架是React

**产品B**

- 前端模块载体多样，包括微信小程序、H5、APP等，因此采用的是多端统一框架，例如：union-app
- 服务端技术架构单体架构，Spring Boot框架
- 前后端接口调用采用的是服务端`token`鉴权的方式交互
- 用户体系复杂，有会员、优惠券等业务，管理后台涉及权限菜单
- 后端管理系统前端开发技术框架是Vue

**产品C**

- 载体是微信小程序，没有H5、APP等需求
- 产品A中的功能居多,产品B中的功能占用少部分

鉴于上面的背景，我们讨论接下来产品线合并的可能性

- 前端代码重写，虽说是产品线合并，但是原来两个产品线的功能点只是做整合，并没有太多新增的功能，因此原来的部分功能模块可以复用，采用原生写法，不用多端框架
- 后端用户体系复用产品B中的体系，基本控制菜单权限即可
- 考虑到时间紧迫，因此原本产品A\B两个产品线的已有的功能基本不动，只对新增模块的功能进行开发。
- 产品B的后端系统功能菜单、权限系统较A完善，因此作为产品C的管理后端进行复用，将产品A的后端功能全部移动到产品C中，由于两个产品线管理后台开发的技术栈不一样，因此产品C中的部分功能需要重写，将产品A的功能使用Vue的技术栈移到产品C中

### 游客端(小程序端)

针对产品C的小程序端，由于需要包含产品A中的某一核心功能，因此不太可能使用多端框架进行重写(PS:主要是领导给的时间不够)，因此采用的做法是直接在产品A的基础上衍生一个版本，最终将产品B中的部分功能，通过原生框架，最终在产品C中进行呈现。

因为小程序的接口调用方式是直连，通过发起`HTTPS`的接口请求即可,因此服务端接口逻辑不动，前端开发人员只需要和产品B的人员进行接口对接即可，最终接口调用流程示意图如下：

![](/assets/images/springboot/servlet-gateway/servlet-gateway.png)



### 管理端(PC端)

管理端则不同，由于是使用的产品B中的后台，因此产品A中的权限控制需要去除(例如登录后才能调用接口等限制),而产品A中的接口权限控制需要交给B来管，发送请求时需要校验当前请求的权限，校验通过后再转发给A，调用时序图如下：

![](/assets/images/springboot/servlet-gateway/servlet-gateway2.png)

上面这张图也是这个组件雏形，寄希望与通过该转发组件,通过提供不同的转发方式，封装转发HTTP请求的能力，达到直连服务的目的

>如果单纯从一个新产品C的角度出发，`ServiceA`中的服务接口代码应该合并到`ServiceB`，最终形成一个新的`ServiceC`，但是考虑到时间紧迫，所以代码层面的合并并没有形成，因此考虑直接将请求HTTP转发的方式，最终将任务完成。

## 程序设计

从需求背景出发，在程序设计上需要考虑的几个点：

- 上游服务接收到的固定请求头，或者请求参数，比如多租户系统需要接收一个租户的请求header，因此转发组件需要有配置固定header的能力，以便在实际转发过程中发送到下游服务，方便系统扩展
- 需要提供权限验证的接口，不同的权限框架可能验证方式不同，有些系统是`Shiro`，或者`Spring Security`,或者自研，因此在最终权限校验时，考虑到和系统的兼容性，对于下游的转发服务接口，需要提供和系统兼容的验证接口，不可打破原系统的稳定性
- 转发的方式支持类别，考虑到系统的健壮性，需要提供不同的转发类别支撑

由于是基于Servlet体系，因此对于接口的请求，需要做一层拦截判断，以验证当前的请求是否是需要转发到下游服务，核心过滤器如下：

```java
public class ServletGatewayRouteProxyFilter implements Filter {
    //执行器对象
    private final RouteDispatcher routeDispatcher;
    //权限对象
    private final ServletGatewayAuthentication servletGatewayAuthentication;
    Logger logger= LoggerFactory.getLogger(ServletGatewayRouteProxyFilter.class);

    /**
     * 狗仔ProxyHttpFilter 对象实例
     * @param routeDispatcher 执行器对象
     * @param servletGatewayAuthentication 权限校验对象
     */
    public ServletGatewayRouteProxyFilter(RouteDispatcher routeDispatcher, ServletGatewayAuthentication servletGatewayAuthentication) {
        this.routeDispatcher = routeDispatcher;
        this.servletGatewayAuthentication = servletGatewayAuthentication;
    }
 
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request= (HttpServletRequest) servletRequest;
        HttpServletResponse response=(HttpServletResponse) servletResponse;
        //根据程序配置方式，截取当前请求是否符合转发请求
        Optional<ServiceRoute> serviceRouteOptional=routeDispatcher.assertServletRequest(request);
        if (serviceRouteOptional.isPresent()){
            logger.info("转发目标服务，地址:{}",request.getRequestURI());
            if (servletGatewayAuthentication.required()){
                if (servletGatewayAuthentication.auth(servletRequest,servletResponse)){
                    routeDispatcher.execute(request,response,serviceRouteOptional.get());
                }else{
                    servletGatewayAuthentication.failedHandle(servletRequest,servletResponse);
                }
            }else{
                routeDispatcher.execute(request,response,serviceRouteOptional.get());
            }
        }else{
            //不符合，继续执行
            filterChain.doFilter(servletRequest,servletResponse);
        }
    }
 	
    //other code...

}

```

对于当前的`HttpServletRequest`信息做判断，获取当前请求的`ServiceRoute`对象，以此来判断请求是否需要转发

`ServiceRoute`对象主要包含下游转发服务的HTTP地址、端口号、固定Header信息

```java
public class ServiceRoute {

    /**
     * 转发模式
     */
    private RouteModeEnum mode;
    /**
     * 匹配值
     */
    private String value;

    /**
     * 转发目标地址，例如：http://192.179.0.1:8999
     */
    private String uri;

    /**
     * 发送请求头
     */
    private Map<String,String> headers;
    //getter and setter
}
```

而`ServiceRoute`是最终交给开发者配置的信息，转发请求方式，判断逻辑如下：

```java
/**
* 校验当前路由规则是否符合
* @param serviceRoute 路由实例
* @param servletRequest 请求对象
* @return 是否符合规则
*/
protected boolean checkRoute(ServiceRoute serviceRoute,HttpServletRequest servletRequest){
    boolean flag=false;
    if (serviceRoute!=null){
        switch (serviceRoute.getMode()){
            //基于请求头
            case ROUTE_MODE_HEADER:
                String value=servletRequest.getHeader(ROUTE_MODE_HEADER_NAME);
                flag=StrUtil.equalsIgnoreCase(value,serviceRoute.getValue());
                break;
            //基于URI的前缀匹配
            case ROUTE_MODE_PREFIX:
                flag=servletRequest.getRequestURI().startsWith(serviceRoute.getValue());
                break;
            //基于URI的后缀匹配
            case ROUTE_MODE_SUFFIX:
                flag=servletRequest.getRequestURI().endsWith(serviceRoute.getValue());
                break;

        }
    }
    return flag;
}
```

针对权限的设计，在`ServletGatewayRouteProxyFilter`中，提供了`ServletGatewayAuthentication`接口，该接口设计如下：

```java
public interface ServletGatewayAuthentication {

    /**
     * 权限校验
     * @param request 请求request对象
     * @param response 响应对象
     * @return 是否权限校验通过
     */
    boolean auth(ServletRequest request, ServletResponse response);

    /**
     * 权限校验失败后的处理逻辑
     * @param request 请求对象
     * @param response 响应对象
     */
    void failedHandle(ServletRequest request, ServletResponse response);

    /**
     * 是否需要鉴权，默认true
     * @return 是否需要鉴权
     */
    default boolean required(){return true;}
}
```

主要包含三个接口：

- `auth`:权限验证，返回布尔值，该接口方法主要是兼容系统中的权限，对于当前的请求，可以方便的做出权限判断，交由开发者实现
- `failedHandle`:如果权限验证失败，最终响应信息给前端，开发者实现
- `required`:是否需要鉴权的标志，默认是true，代表需要鉴权

**最后**再来看代理请求的执行逻辑(`RouteDispatcher.java#execute()`方法)，部分核心代码如下：

```java
public void execute(HttpServletRequest request, HttpServletResponse response,ServiceRoute serviceRoute){
    try{
        //构建请求对象
        RouteRequestContext routeContext=new RouteRequestContext();
        //请求对象赋值
        this.buildContext(routeContext,request,serviceRoute);
        //发送请求
        RouteResponse routeResponse=routeExecutor.executor(routeContext);
        //响应结果
        writeResponseHeader(routeResponse,response);
        writeBody(routeResponse,response);
    }catch (Exception e){
        logger.error("has Error:{}",e.getMessage());
        logger.error(e.getMessage(),e);
        //write Default
        writeDefault(request,response,e.getMessage());
    }
}
```

针对请求上下文的赋值，主要是接收当前请求的请求参数以及请求头，并且根据`ServiceRoute`路由基础信息，进行基础赋值，代码如下：

```java
/**
 * 构建路由的请求上下文
 * @param routeRequestContext 请求上下文对象
 * @param request 请求
 * @param serviceRoute 路由实例
 * @throws IOException IO异常
 */
protected void buildContext(RouteRequestContext routeRequestContext,HttpServletRequest request,ServiceRoute serviceRoute) throws IOException {
    //String uri="http://knife4j.xiaominfo.com";
    String uri=serviceRoute.getUri();
    if (StrUtil.isBlank(uri)){
        throw new RuntimeException("Uri is Empty");
    }
    String host=URI.create(uri).getHost();
    String fromUri=request.getRequestURI();
    StringBuilder requestUrlBuilder=new StringBuilder();
    requestUrlBuilder.append(uri);
    //判断当前聚合项目的contextPath
    if (StrUtil.isNotBlank(this.rootPath)&&!StrUtil.equals(this.rootPath,ROUTE_BASE_PATH)){
        fromUri=fromUri.replaceFirst(this.rootPath,"");
    }
    if (serviceRoute.getMode()== RouteModeEnum.ROUTE_MODE_PREFIX){
        //前缀转发，替换
        fromUri=fromUri.replaceFirst(serviceRoute.getValue(),"/");
    }
    if (!StrUtil.startWith(fromUri,"/")){
        requestUrlBuilder.append("/");
    }
    requestUrlBuilder.append(fromUri);
    //String requestUrl=uri+fromUri;
    String requestUrl=requestUrlBuilder.toString();
    logger.info("目标请求Url:{},请求类型:{},Host:{}",requestUrl,request.getMethod(),host);
    routeRequestContext.setOriginalUri(fromUri);
    routeRequestContext.setUrl(requestUrl);
    routeRequestContext.setMethod(request.getMethod());
    Enumeration<String> enumeration=request.getHeaderNames();
    while (enumeration.hasMoreElements()){
        String key=enumeration.nextElement();
        String value=request.getHeader(key);
        if (!ignoreHeaders.contains(key.toLowerCase())){
            routeRequestContext.addHeader(key,value);
        }
    }
    //是否有默认Header需要发送
    if (CollectionUtil.isNotEmpty(serviceRoute.getHeaders())){
        for (Map.Entry<String,String> entry:serviceRoute.getHeaders().entrySet()){
            routeRequestContext.addHeader(entry.getKey(),entry.getValue());
        }
    }
    routeRequestContext.addHeader("Host",host);
    Enumeration<String> params=request.getParameterNames();
    while (params.hasMoreElements()){
        String name=params.nextElement();
        String value=request.getParameter(name);
        //logger.info("param-name:{},value:{}",name,value);
        routeRequestContext.addParam(name,value);
    }
    routeRequestContext.setRequestContent(request.getInputStream());
}
```

## 使用指南

`servlet-gateway-spring-boot-starter`组件是一组基于Servlet体系的业务转发HTTP组件,主要目的是在现有Spring Boot 框架的基础上，添加基于Filter过滤器的转发能力,丰富框架的业务能力。


目前支持三种模式：

- `ROUTE_MODE_HEADER`:基于请求头的转发
- `ROUTE_MODE_PREFIX`:基于请求Uri的请求前缀匹配转发
- `ROUTE_MODE_SUFFIX`:基于请求URI的后缀匹配转发规则

使用方法，在Spring Boot的框架中，pom.xml中引入当前组件，代码如下：

```xml
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>servlet-gateway-spring-boot-starter</artifactId>
    <version>1.0</version>
</dependency>
```

在Spring Boot框架的`application.yml`配置文件中进行配置，示例如下：
```yaml
server:
  servlet:
    gateway:
      enable: true
       cloud:
         enable: true
         # Routes节点，可以配置多个
         routes:
           - mode: ROUTE_MODE_PREFIX
           	 # 将所有以/abb开头的请求接口全部转发到uri中的目标服务
             value: /abb/
             uri: http://knife4j.xiaominfo.com
             # 配置发送默认请求头(可选配置)
             headers:
               code: TESS
```

针对代理请求鉴权功能,该组件提供了`ServletGatewayAuthentication`接口,对于接入该组件的项目需要实现该接口，并且注入到 Spring 的容器中
```java
public interface ServletGatewayAuthentication {

    /**
     * 权限校验
     * @param request 请求request对象
     * @param response 响应对象
     * @return 是否权限校验通过
     */
    boolean auth(ServletRequest request, ServletResponse response);

    /**
     * 权限校验失败后的处理逻辑
     * @param request 请求对象
     * @param response 响应对象
     */
    void failedHandle(ServletRequest request, ServletResponse response);

    /**
     * 是否需要鉴权，默认true
     * @return 是否需要鉴权
     */
    default boolean required(){return true;}
}
```

以下是一个项目中通过Shiro控制权限的例子，对于代理的请求，需要验证当前的请求是否已经登录过
```java
public class AideShiroAuthentication implements ServletGatewayAuthentication {

    private final OtsWebSessionManager otsWebSessionManager;
    private final RedisTemplate redisTemplate;

    Logger logger= LoggerFactory.getLogger(AideShiroAuthentication.class);

    public AideShiroAuthentication(OtsWebSessionManager otsWebSessionManager, RedisTemplate redisTemplate) {
        this.otsWebSessionManager = otsWebSessionManager;
        this.redisTemplate = redisTemplate;
    }


    @Override
    public boolean auth(ServletRequest request, ServletResponse response) {
        Serializable sessionId = otsWebSessionManager.getShiroSessionId(request, response);
        if (sessionId!=null){
            Object object= redisTemplate.opsForValue().get(MyRedisSessionDao.PREFIX + sessionId.toString());
            if (object!=null){
                Session session = (Session)object;
                return session!=null&&session.getId()!=null;
            }
        }
        return false;
    }

    @Override
    public void failedHandle(ServletRequest request, ServletResponse response) {
        logger.info("权限校验失败");
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json; charset=utf-8");
        RestResult<String> result = new RestResult<>();
        result.setErrCode(BusinessErrorCode.NO_CURRENT_LOGIN_USER.getCode());
        result.setData(BusinessErrorCode.NO_CURRENT_LOGIN_USER.getMessage());

        try (PrintWriter out = response.getWriter()) {
            out.append(JSON.toJSONString(result));
        } catch (IOException e2) {
            return;
        }
    }
}
```
通过自定义权限接口后，需要注入到Spring的容器中(**注意**：需要添加`@Primary`注解)，代码如下：
```java
@Configuration
public class AuthConfig {

    @Bean
    @Primary
    public AideShiroAuthentication aideServletGatewayAuthentication(@Autowired OtsWebSessionManager otsWebSessionManager,@Autowired RedisTemplate redisTemplate){
        return new AideShiroAuthentication(otsWebSessionManager,redisTemplate);
    }
}

```

