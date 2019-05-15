---
layout: post
title: 在Spring Boot中使用swagger-bootstrap-ui
categories: Spring
description: 在Spring Boot中使用swagger-bootstrap-ui
keywords: swagger-bootstrap-ui
---


swagger-bootstrap-ui是基于swagger接口api实现的一套UI,因swagger原生ui是上下结构的，在浏览接口时不是很清晰,所以，swagger-bootstrap-ui是基于左右菜单风格的方式,适用与我们在开发后台系统左右结构这种风格类似,方便与接口浏览

GITHUB:[https://github.com/xiaoymin/Swagger-Bootstrap-UI](https://github.com/xiaoymin/Swagger-Bootstrap-UI)

码云:[https://gitee.com/xiaoym/swagger-bootstrap-ui](https://gitee.com/xiaoym/swagger-bootstrap-ui)


欢迎大家Watch,Fork,Star

界面预览：
![](/images/blog/swagger-bootstarp-ui-with-spring-boot/preview.jpg)

## 引入swagger

在pom.xml文件中引入swagger以及ui的jar包依赖

```xml
<dependency>
  <groupId>io.springfox</groupId>
  <artifactId>springfox-swagger2</artifactId>
  <version>2.7.0</version>
</dependency>
<!--引入ui包-->
<dependency>
  <groupId>com.github.xiaoymin</groupId>
  <artifactId>swagger-bootstrap-ui</artifactId>
  <version>1.7</version>
</dependency>
```

### 配置configuration
配置swagger的启用配置文件，关键注解@EnableSwagger2

一下配置是支持接口分组的配置，如果没有分组配置,只需要创建一个Docket即可

```java
@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .groupName("资源管理")
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.lishiots.dc.baseinfo.ctl"))
                .paths(PathSelectors.any())
                .build();
    }
    @Bean
    public Docket createMonitorRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .groupName("实时监测")
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.lishiots.dc.monitor.ctl"))
                .paths(PathSelectors.any())
                .build();
    }
    @Bean
    public Docket createActivitiRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .groupName("工作流引擎")
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.lishiots.dc.activiti.ctl"))
                .paths(PathSelectors.any())
                .build();
    }

    @Bean
    public Docket createBaseRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .groupName("kernel模块")
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.lishiots.dc.kernel.ctl"))
                .paths(PathSelectors.any())
                .build();
    }

    @Bean
    public Docket createComplaintRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .groupName("投诉管理")
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.lishiots.dc.complaint.ctl"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("swagger RESTful APIs")
                .description("swagger RESTful APIs")
                .termsOfServiceUrl("http://www.test.com/")
                .contact("xiaoymin@foxmail.com")
                .version("1.0")
                .build();
    }
}
```

### Controller层使用swagger注解

ctl代码层：

```java
@Api(tags = "banner管理")
@RestController
@RequestMapping("/api/bannerInfo")
public class BannerCtl {
    @Autowired
    private BannerInfoService service;
    
    @PostMapping("/query")
    @ApiOperation(value = "查询banner",notes = "查询banner")
    public Pagination<BannerInfo> bannerInfoQuery(){
        Pagination<BannerInfo> pagination = service.bannerInfoQuery();
        return pagination;
    }
}
```

## 接口访问

在浏览器输入：`http://${host}:${port}/doc.html`