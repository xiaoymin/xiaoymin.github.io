---
layout: post
title: swagger-bootstrap-ui详解
categories: Blog
description: swagger-bootstrap-ui详解
keywords: swagger-bootstrap-ui,swagger
---

## 项目背景

大概是在2017年4月份,我们团队整个开发方式都决定使用前后端分离的方式来合作开发,前后端分离当时整个技术方案也是由我来负责整理，探索，如何让整个团队更高效的开发，完成自己的本职工作.从一开始的jsonp，到后面nginx反向代理，这里面我也收获了很多东西，也写了一些相关的博客总结，

但最让人头疼的还是前后端如何针对接口来对接，当时找了很多解决方案，一开始使用的是叫[apidocs](http://apidocjs.com/)的，有些类似于写java的注释，使用起来还是不错的，不过没有在线生成的，文档写完后需要单独命令来生成一个文档，挺麻烦，后来就放弃了

最终就考虑使用swagger来做文档的这块，但swagger大家都知道，swagger的ui虽然能把文档说清楚，但是不怎么好用，可能不适合我们国人的眼光吧，至少我是这么认为的，所以当时也就想看看swagger的生成方式，swagger-bootstrap-ui就因此诞生了

这里谈谈swagger，虽然很多人喷他，不好用，基于注解，代码入侵很强，等等 很多原因。但总体来看，swagger发展至今，包括在各个语言，nodeJs、.net、java、php等等，它可以说是一个有些接口规范的东西，从开始，到一步步规范，其实是一个很艰难的过程，任何事物，都不是尽善尽美的，swagger也是一样，至少它给这么多语言提供了一种文档生成的解决方案，其价值就远超它本身的缺点

在Java里面，是springfox实现了swagger的接口方式，其他语言也类似.

鄙人一直觉得如果前面有人开发出来这个东西，而且用户范围，稳定性都相对较高的情况下，这个东西一定是有他的意义存在的，站在巨人的肩膀上，做正确的事，一直是我认为符合实际情况的,起码你不用自己填坑，因为，做开源，一个想法在当时，可能比较新颖，关注度很高，但是我想，大部分人都逃离不了惰性，缺少的是持之以恒，特别是在中国，很多开源其实都是个人在做（包括我自己的这个swagger-bootstrap-ui），意识上，相对国外还是比较薄弱的,而且还有精力，锲而不舍，任重而道远矣~！

所以，swagger-bootstrap-ui仅仅只是一个ui包，里面不包括任何Java代码，基于swagger，希望为swagger的生态发展做一份贡献。

swagger-bootstrap-ui开源至今也有一年4月有余了，为自己一直坚持下来打call，也会一直坚持下去，继续维护它，东西虽小,但坚持下去总会有收获.

## 详细说明

接下来会从各个不同的方面说一下swagger-bootstrap-ui

### 界面风格

使用过swagger-bootstrap-ui的朋友应该都知道，它是基于左右菜单式的布局方式,这和目前大部分后台管理系统有些类似，使用这种风格的原因,我想应该是更符合国人的操作习惯吧.

相比较swagger-ui的上下依次铺开的结构，我想这种方式更适合接口对接人员.

![](/images/wiki/swagger-bootstrap-ui/des.png)

### 功能说明

swagger-bootstrap-ui在原有UI的基础上,扩展了一些功能，主要包括：离线文档(markdown)、全局参数、检索、主页介绍

#### 核心功能

核心功能主要通过两块，一是文档说明，二是调试，使用的bootstrap的标签页来切分展示

![](/images/wiki/swagger-bootstrap-ui/sm.png)

![](/images/wiki/swagger-bootstrap-ui/debug.png)

#### 扩展功能

swagger-bootstrap-ui在原有的文档说明、在线调试的基础上,扩展了一些功能，方便接口对接人调试使用

##### 离线文档(markdown)

通过swagger响应的接口文档，动态自动生成一份markdwon的接口文档说明，开发者可以保存后，使用其他的markdown转换软件，转换成pdf、word、html等离线文件，发送给别人

![](/images/wiki/swagger-bootstrap-ui/md.png)

##### 搜索

右上角的搜索按钮，可以输入关键字进行模糊搜索，搜索范围包括：简介、方法类型、接口名称、接口描述、tags等多种不同维度搜索，帮助你快速定位到接口的文档说明

![](search.png)

##### 全局参数设置

该功能是在还没有支持全局参数时临时配置的功能，如果后端swagger有配置全局参数，该功能可以无视

#####  Authorize 

Authorize 功能是后端配置类似JWT等权限配置而设置的,可以全局配置token等参数

![](/images/wiki/swagger-bootstrap-ui/auth.png)

## 代码说明

希望这份代码说明能帮助更多的人理解swagger

### swagger接口说明

在说swagger-bootstrap-ui的代码之前,先看swagger提供的2个接口，swagger-bootstrap-ui包也是根据这2个接口来动态生成文档的

分组接口：`/swagger-resources`

详情实例接口：`/v2/api-docs`

#### swagger分组

swagger的分组接口是用过后端配置不同的扫描包，将后端的接口，按配置的扫描包基础属性响应给前端，看看分组接口响应的json内容：

```json
[
    {
        "name": "分组接口",
        "url": "/v2/api-docs?group=分组接口",
        "swaggerVersion": "2.0",
        "location": "/v2/api-docs?group=分组接口"
    },
    {
        "name": "默认接口",
        "url": "/v2/api-docs?group=默认接口",
        "swaggerVersion": "2.0",
        "location": "/v2/api-docs?group=默认接口"
    }
]
```

在springfox-swagger有些较低的版本中，并没有location属性，高版本会有该属性

| 属性           | 说明                    |
| -------------- | ----------------------- |
| name           | 分组名称                |
| url            | 接口url                 |
| swaggerVersion | 版本号                  |
| location       | 接口location，同url属性 |

分组的后端Java配置代码如下：

```java
@Bean(value = "defaultApi")
public Docket defaultApi() {
    ParameterBuilder parameterBuilder=new ParameterBuilder();
    List<Parameter> parameters= Lists.newArrayList();
    parameterBuilder.name("token").description("token令牌").modelRef(new ModelRef("String"))
        .parameterType("header").defaultValue("abc")
        .required(true).build();
    parameters.add(parameterBuilder.build());

    return new Docket(DocumentationType.SWAGGER_2)
        .apiInfo(apiInfo())
        .groupName("默认接口")
        .select()
        .apis(RequestHandlerSelectors.basePackage("com.swagger.bootstrap.ui.demo.controller"))
        .paths(PathSelectors.any())
        .build().globalOperationParameters(parameters)
        .securityContexts(Lists.newArrayList(securityContext(),securityContext1())).securitySchemes(Lists.<SecurityScheme>newArrayList(apiKey(),apiKey1()));
}
@Bean(value = "groupRestApi")
public Docket groupRestApi() {
    return new Docket(DocumentationType.SWAGGER_2)
        .apiInfo(groupApiInfo())
        .groupName("分组接口")
        .select()
        .apis(RequestHandlerSelectors.basePackage("com.swagger.bootstrap.ui.demo.group"))
        .paths(PathSelectors.any())
        .build().securityContexts(Lists.newArrayList(securityContext(),securityContext1())).securitySchemes(Lists.<SecurityScheme>newArrayList(apiKey(),apiKey1()));
}
```

以上详细配置可参考码云[swagger-bootstrap-ui-demo](https://gitee.com/xiaoym/swagger-bootstrap-ui-demo)在线[SwaggerConfiguration.java](https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/blob/master/swagger-bootstrap-ui-demo/src/main/java/com/swagger/bootstrap/ui/demo/config/SwaggerConfiguration.java)

此处groupName即分组名称，basePackage即我们写的接口基础package包路径.

#### 详情实例接口

详情实例接口是根据分组名称,动态获取该组下配置的basePackage所有的接口描述信息

响应json如下：

![](/images/wiki/swagger-bootstrap-ui/apidef.png)


| 属性                | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| info                | 定义的该分组一些基础信息,包括标题、简介、联系人等            |
| tags                | 该属性是分组属性，与后端的@Api注解对应                       |
| paths               | 接口示例数组，每个实例包含了接口的入参、出参、响应码等基础信息 |
| securityDefinitions | 权限配置验证，一般JWT等配置的权限配置会在该节点属性出现      |
| definitions         | 该属性定义了所有响应的类属性说明                             |

### swagger-bootstrap-ui说明

有了以上swagger的两个接口，就可以根据这2个接口来生成页面了，这里有一个前提，为什么可以根据这个来生成，因为swagger给出的两个接口地址是固定的，所以写这套UI也能得到通用.

swagger-bootstrap-ui主要使用到的前端技术栈主要包括：

| 属性         | 说明                                                |
| ------------ | --------------------------------------------------- |
| jquery       | [http://jquery.com/](http://jquery.com/)                                  |
| bootstrap    | [http://getbootstrap.com](http://getbootstrap.com/) |
| layer        | [http://layer.layui.com/](http://layer.layui.com/)                             |
| jsonviews    | [https://github.com/yesmeck/jquery-jsonview](https://github.com/yesmeck/jquery-jsonview)          |
| clipboard    | [https://github.com/zenorocha/clipboard.js](https://github.com/zenorocha/clipboard.js)           |
| axios.min.js | [https://github.com/axios/axios](https://github.com/axios/axios)                      |
| marked       | [https://github.com/markedjs/marked](https://github.com/markedjs/marked)                  |
| art-template | [https://github.com/aui/art-template](https://github.com/aui/art-template)                 |


这里主要说一些swagger-bootstrap-ui的一些思路，源码的话大家可以去[码云](https://gitee.com/xiaoym/swagger-bootstrap-ui)或者[GitHub](https://github.com/xiaoymin/Swagger-Bootstrap-UI)上去看

1、构建SwaggerBootstrapUi主对象，类似Java后端面向对象的方式来写，定义一些基础属性,这样也方便后期扩展

```javascript
var SwaggerBootstrapUi=function () {
    //swagger请求api地址
    this.url="swagger-resources";
    //文档id
    this.docId="content";
    //tabid
    this.tabId="tabUl";
    this.tabContentId="tabContent";
    this.searchEleId="spanSearch";
    this.searchTxtEleId="searchTxt";
    this.menuId="menu";
    this.searchMenuId="searchMenu";
    //实例分组
    this.instances=new Array();
    //当前分组实例
    this.currentInstance=null;
    //动态tab
    this.globalTabId="sbu-dynamic-tab";
    this.globalTabs=new Array();
    this.tabsLiContent=null;
    this.tabsPostProcessors=null;
}
```

包括swagger的响应的属性，也重新在js中定义函数，使用面向对象的方式来操作

![](/images/wiki/swagger-bootstrap-ui/sbudef.png)

2、初始化工作，sbu的入口即main方法,类似于SpringBoot的main方法，读源码的朋友可以从这个方法进入

```javascript
/***
     * swagger-bootstrap-ui的main方法,初始化文档所有功能,类似于SpringBoot的main方法
     */
SwaggerBootstrapUi.prototype.main=function () {
    var that=this;
    that.initWindowWidthAndHeight();

    that.windowResize();
    //加载分组接口
    that.analysisGroup();
    //创建分组元素
    that.createGroupElement();
    //搜索
    that.searchEvents();

}
```

3、数据和页面分离，使用art-template模板渲染,这样保持js的独立性

## FAQ

### SpringBoot访问doc.html页面404

默认情况下并不需要添加此配置即可访问

很多朋友在使用SpringBoot集成swagger-bootstrap-ui后，都无法访问doc.html界面，此时，你可能需要实现SpringBoot的`WebMvcConfigurer`接口，添加相关的ResourceHandler,代码如下：

```java
@SpringBootApplication
public class SwaggerBootstrapUiDemoApplication  implements WebMvcConfigurer{

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("doc.html").addResourceLocations("classpath*:/META-INF/resources/");
		registry.addResourceHandler("/webjars/**").addResourceLocations("classpath*:/META-INF/resources/webjars/");
	}
}
```

同理，在使用SpringMvc或者shiro等权限框架时，如果页面无法访问，配置doc.html属性即可

### 离线文档markdown格式错乱

即使文档格式错乱，但是在相关markdown转换软件中依然是可以正常使用的，该功能使用art-template来渲染，多少会出现一些空格、换行之类的问题

markdown软件推荐使用[Typora](https://www.typora.io/),我一直在用，相当好用，适合不会排版word的程序员们

![](/images/wiki/swagger-bootstrap-ui/tp.png)





### 使用该UI后后端报错，官方的不报错？

该UI仅仅只是UI包，里面不包含任何Java后端代码，你自己想想这个东西为何会让后端代码报错?

后端的问题需要具体分析，和本UI包无任何关系.

## 总结

写下这篇说明，也是希望更多的朋友少些疑惑，swagger在Java后端里面使用不难，甚至可以说简单，希望本篇文章能帮助到你

最后贴一下软件的仓库地址，哈哈~~~

码云：[https://gitee.com/xiaoym/swagger-bootstrap-ui](https://gitee.com/xiaoym/swagger-bootstrap-ui)

GitHub:[https://github.com/xiaoymin/Swagger-Bootstrap-UI](https://github.com/xiaoymin/Swagger-Bootstrap-UI)

在线效果体验：[http://swagger-bootstrap-ui.xiaominfo.com/doc.html](http://swagger-bootstrap-ui.xiaominfo.com/doc.html)

还没有给swagger-bootstrap-ui点赞的朋友，赶紧去点个赞吧~~~
