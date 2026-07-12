---
title: "生产环境如何屏蔽Knife4j、Swagger等Ui资源和接口"
description: "生产环境如何屏蔽Knife4j等Ui资源"
pubDatetime: 2023-07-19T00:00:00+08:00
tags:
  - "Knife4j"
keywords:
  - "knife4j"
  - "屏蔽swagger"
  - "屏蔽knife4j"
canonicalURL: "https://www.xiaominfo.com/2023/07/19/knife4j-production-forbidden-ui/"
---

本文主要介绍在 Spring Boot 应用中,如何在生产环境屏蔽Knife4j及相关Swagger资源

关联Issues：

- ✅ [开启生产环境,屏蔽所有资源接口](https://gitee.com/xiaoym/knife4j/issues/I67JDM)
- ✅ [生产环境屏蔽bug](https://gitee.com/xiaoym/knife4j/issues/I4XDYE)
- ✅ [3.0.2 配置生产环境屏蔽后，依然可以访问部分接口](https://gitee.com/xiaoym/knife4j/issues/I2810R)
- ✅ [yml格式 屏蔽Swagger所有资源，不生效](https://gitee.com/xiaoym/knife4j/issues/IYSZE)
- ✅ [生产环境swagger-ui屏蔽](https://gitee.com/xiaoym/knife4j/issues/IP1HK)
- ✅ [开启生产环境,屏蔽Swagger所有资源接口 建议](https://gitee.com/xiaoym/knife4j/issues/ISBVR)
- ✅ [生产环境屏蔽配置&2.0.9版本问题](https://gitee.com/xiaoym/knife4j/issues/I4Z2Z6)
- ✅ [4.1.0 basic 验证， 任意请求都会导致请求通过，从而导致doc.html 不提示验证](https://github.com/xiaoymin/knife4j/issues/578)
- ✅ [springcloud 生产环境无法关闭](https://github.com/xiaoymin/knife4j/issues/338)
- ......

🏖️ 本文仓库：[knife4j-forbidden-api](https://github.com/xiaoymin/knife4j-demo/tree/master/knife4j-forbidden-api)

从仓库的issues中不难发现，该需求确确实实存在，虽然在Knife4j之前的版本，并没有提供屏蔽资源相关的配置，但也有很多开发者提了建议

这在之后的版本迭代中,Knife4j主要提供了[Basic验证](/docs/features/accessControl#352-访问页面加权控制)和[Production暴力屏蔽](/docs/features/accessControl)的手段，这些都是基于实际需求场景出发来做的,生产环境屏蔽接口描述也是为了保护应用程序安全的一种手段。

本文主要站在实际需求以及业务场景的角度，去分析如何在生产环境进行屏蔽接口

从issues中，我们屏蔽的场景主要发生在：

- ✅ 单体Spring Boot应用屏蔽接口和静态ui资源
- ✅ 微服务Spring Cloud、Spring Cloud Gateway网关场景下屏蔽接口和静态资源

屏蔽的手段主要包括以下几种(欢迎补充):

- 🌱 基于Spring Boot框架提供的`@Conditional`条件控制相关`@Bean`的生效
- ⛔ 基于Servlet体系下的Filter过滤器进行拦截屏蔽
- ⛰️ 基于Gateway网关体系下的Filter过滤器进行拦截屏蔽
- 💀 基于Maven项目的jar排除机制从根源解决问题
- 💣 基于生产环境Nginx、Ingress等控制请求路径处理

## 1.目的

通过开发者提出的issues，屏蔽的目的及提供Basic验证的方案来分析，我觉得主要有以下几点：

- 🔐 生产环境上线的系统，屏蔽接口描述性规范，对于生产系统是一种**安全保护机制**
- 🔐 Basic方案更希望的是能够上线后也保留接口，解决生产环境出问题时便于调试定位问题，当Basic能起到一定的安全防护作用

## 2.解决方案

### 2.1 🌱 基于Spring Boot框架提供的`@Conditional`条件控制相关`@Bean`的生效

在Spring Boot开发框架中，提供了一种条件注入的机制注解`@Conditional`,顾名思义就是可以指定我们的代码在特定环境才生效。

开发者在写第三方的starter的包时，是一种经常使用的手段。有关`@Conditional`注解等条件注入的说明，可以参考我之前分享的一篇Blog[《Spring Boot框架中如何优雅的注入实体Bean》](https://www.xiaominfo.com/blog/springboot/2020-09-23-spring-boot-conditional)

我们的需求场景是：在生产环境中能够屏蔽部分接口以及Ui资源，那么我们是否可以结合`@Conditional`注解以及`@Profile`注解来实现不同环境的`@Bean`加载机制呢？

答案当然是可以的,考虑到在Spring Boot环境中大部分的中间件都提供了配置化,类似`enable`属性来开启加载配置，这里可以使用`spring.profiles`通过配置进行区分

简单的例子：我们对于Knife4j的配置文件有两个，分别对应dev环境和prod环境

配置文件如下：

- 开发环境(dev)

```yml title="application-dev.yml"
knife4j:
  enable: true
  ## other properties.......

```

- 生产环境(prod)

```yml title="application-prod.yml"
knife4j:
  enable: false
  ## other properties.......

```


在这种情况下，我们程序在启动时，只需要通过设定Spring Boot应用的`Profiles`，就可以实现我们的接口无法访问，如果我们指定`prod`环境，那么访问文档时，会出现接口404的情况~

**总结：**这种情况是对于Java后端应用的`Configuration`类级别的控制，通过Spring Boot框架提供的`@Conditional`注解来达到条件注入及部分代码可配置生效的目的

虽然界面可访问，但是对于接口的规范描述并没有作用。


### 2.2 ⛔ 基于Servlet体系下的Filter过滤器进行拦截屏蔽

基于Servlet体系下的Filter过滤器进行拦截屏蔽是一种拦截机制，主要利用了Servlet规范下的Filter机制，对所有的请求资源进行拦截，开发者可以对所有涉及到Knife4j、Swagger资源的请求都进行拦截屏蔽

场景的资源拦截地址可以参考文档[《访问权限控制》](/docs/features/accessControl)

我们知道了要屏蔽的资源，以及Filter机制，此时，开发者即可以自己实现Filter代码，并将其注入到Spring Boot的应用框架中接口

在Knife4j提供的[`ProductionSecurityFilter.java`](https://gitee.com/xiaoym/knife4j/blob/dev/knife4j/knife4j-openapi2-spring-boot-starter/src/main/java/com/github/xiaoymin/knife4j/spring/filter/ProductionSecurityFilter.java) 如下：

```javascript
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
    HttpServletRequest httpServletRequest = (HttpServletRequest) request;
    if (production) {
        String uri = httpServletRequest.getRequestURI();
        // 匹配判断uri地址是否我们需要屏蔽的资源
        if (!match(uri)) {
            chain.doFilter(request, response);
        } else {
            HttpServletResponse resp = (HttpServletResponse) response;
            resp.setStatus(customCode);
            resp.sendError(customCode, "You do not have permission to access this page");
        }
    } else {
        chain.doFilter(request, response);
    }
}   
```


### 2.3 ⛰️ 基于Gateway网关体系下的Filter过滤器进行拦截屏蔽

基于Gateway网关体系下的Filter过滤器进行拦截屏蔽和Servlet体系下的Filter进行拦截是同一种思想，因为Spring Cloud Gateway是基于Netty驱动设计实现，但思想方法是同一种

无非是使用Spring Cloud Gateway提供的Filter接口，自定义实现match后屏蔽过滤

可以参考Knife4j代码中的[`WebFluxSecurityBasicAuthFilter.java`](https://gitee.com/xiaoym/knife4j/blob/dev/knife4j/knife4j-gateway-spring-boot-starter/src/main/java/com/github/xiaoymin/knife4j/spring/gateway/filter/basic/WebFluxSecurityBasicAuthFilter.java)




### 2.4 💀 基于Maven项目的jar排除机制从根源解决问题

该方法也是利用Maven项目提供的Profiles机制，我们在项目打包构建的时候，可以对一些不需要的jar包进行exclusion排除，比如Knife4j的ui包或者swagger官方ui包，这种jar包都是webjar类型，里面全部是静态资源

`Maven`的`Profiles`是一种配置管理机制，允许你根据不同的环境或条件设置和激活不同的构建配置。可以使用Profiles来定义一组插件、依赖项和构建选项，这些选项在特定的构建环境中生效

如果我们想在生产环境无需访问提供外部入口，那么我们在打包构建的时候可以直接排除即可

基于这种思想，我们可以考虑在项目的`pom.xml`中配置Maven的Profiles，配置如下：

```xml
<profiles>
    <profile>
        <id>dev</id>
        <activation>
            <!-- 激活条件为"dev"系统属性存在 -->
            <property>
                <name>env</name>
                <value>dev</value>
            </property>
        </activation>
    </profile>
    <profile>
        <id>prod</id>
        <activation>
            <!-- 激活条件为"prod"环境变量存在 -->
            <property>
                <name>env</name>
                <value>prod</value>
            </property>
        </activation>
        <dependencies>
            <dependency>
                <groupId>com.github.xiaoymin</groupId>
                <artifactId>knife4j-openapi3-spring-boot-starter</artifactId>
                <exclusions>
                    <exclusion>
                        <groupId>com.github.xiaoymin</groupId>
                        <artifactId>knife4j-openapi3-ui</artifactId>
                    </exclusion>
                    <exclusion>
                        <groupId>org.webjars</groupId>
                        <artifactId>swagger-ui</artifactId>
                    </exclusion>
                </exclusions>

            </dependency>
        </dependencies>
    </profile>
</profiles>

```

在上面的配置中，主要作用如下：

- ✅ 声明了两个Profile类型，id分别为`dev`、`prod`
- ✅ 配置了两种Profile类型的激活条件，通过环境变量名称来进行区分
- ✅ 在`prod`类型下面，我们配置的引用jar的`exclusions`规则，该Profile类型下会排除`knife4j-openapi3-ui`、`swagger-ui`这两个jar包，而这两个包分别是Knife4j和swagger官网提供的Ui资源包

此时，当我们在项目构建打包时，我们就可以通过传入变量，进行构建，排除相关的jar包，命令如下：

```shell
mvn clean package -Pprod
```

### 2.5 💣 基于生产环境Nginx、Ingress等控制请求路径处理


上面2.1~2.4提供的方案都是通过代码或者工程上进行配置以达到目的，如果我们的服务已经上线，不管是Nginx或者在Kubernetes集群环境中，都可以通过Nginx、Ingress等代理服务器进行配置拦截处理

也不失为一种处理方式。

在Nginx中，我们只需要配置拦截资源接口，配置如下：

```shell

location /doc.html {
    return 403;  # 返回 403 状态码表示禁止访问
}

location /swagger-ui.html {
    return 403;  # 返回 403 状态码表示禁止访问
}

// 其他路由接口及资源

```

而在Kubernetes集群环境中，可以通过使用Ingress控制请求,配置示例如下：

```yml

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
    - http:
        paths:
        # 转发doc.html到error-service,可以在该服务中定义一个错误页面或返回适当的错误码
          - path: /doc.html
            pathType: Prefix
            backend:
              service:
                name: error-service
                port:
                  number: 80
```

## 3.总结

本文从工程、代码等多方角度给大家提供了一种解决思路方案，希望能对大家有所帮助。
