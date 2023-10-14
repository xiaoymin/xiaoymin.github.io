---
layout: post
title: Spring Boot自定义starter必知必会条件
categories: Spring Boot
description: 自定义Spring Boot框架starter组件
keywords: Spring Boot,starter,自定义starter
---

## 前言

在目前的Spring Boot框架中,不管是Spring Boot官方还是非官方,都提供了非常多的starter系列组件,助力开发者在企业应用中的开发,提升研发人员的工作效率,Spring Boot框架提出的约定大于配置的规则，确实帮助开发者简化了以前Spring MVC时代的很多繁杂的配置。让开发者用起来也是非常爽的。

尽管Spring Boot或者一些开源组件已经帮助我们提供了非常多的starter组件，在满足日常的开发中,已经完全没有问题了。但有时候因为需求的可变性，导致企业架构也会随着调整，那么在Spring Boot框架中，官方或开源的第三方starter肯定不能满足企业内部研发人员的要求，这时候就需要开发者自定义企业内部的starter了。

企业或个人自定义Spring Boot的starter组件主要从哪些方面来入手呢，或者什么时候需要自定义starter组件？我个人认为主要有以下几个方面：

- 规范企业内部编码流程，统一各个技术中间件的代码规范
- 减少不同类型中间件的使用成本，提升研发人员的研发工作效率
- 减少冗余代码的使用，统一封装，统一管理。
- 屏蔽中间件底层细节，暴露配置属性及方法，减少学习使用成本
- 可能还有更多？

本篇博客结合自身的开发经验以及目前Spring Boot如何配置元数据的官方介绍文档进行结合，进行综合阐述。

Spring Boot官方元数据文档地址：[https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-configuration-metadata.html](https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-configuration-metadata.html)

封装Spring Boot的starter范围可以是一组规范的业务方法，也可以是通用的中间件底层。开发者通过封装，一定程度上也能起到规范企业编码的作用,同时也能组合复用公共业务逻辑。

那么我们在自定义Spring Boot框架的starter组件时,我们需要准备什么呢？

我认为主要包含以下几个方面：

- 自定义starter的作用
- 命名规范
- 理解Maven或者Gradle依赖包管理的jar包引用传递机制
- 理解Spring Boot框架中基于Java代码的Configuration配置
- 理解Spring Boot框架自动装载的过程
- 学会利用Spring Boot提供的`@Conditional`系列条件注入充分发挥Spring Boot的优点
- 学会如何配置自定义starter组件时对外的属性注释配置，可以参考[官方文档](https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-configuration-metadata.html)

## 自定义starter的作用

我们在自定义starter组件之前，开发者首先需要想清楚，这个starter组件能带来什么，简化开发？或者复用组件的封装供其他同事使用，不写重复代码等等，这些都是需要思考清楚的。

自定义starter的场景很多，例如：

- 项目中发送短信对接了不同的云服务商，那么可以封装一个短信的starter，屏蔽对接的细节，开发者只需要配置相应的厂商配置信息就可以使用该服务商发送短信了
- OSS存储对接不同的云服务商，例如阿里云、七牛云、腾讯云等等
- 企业内部中间件封装使用，简化开发配置
- more...

根据笔者的经验,我认为自定义的starter的作用无外乎以下几个方面：

- 充分利用Spring的特性，容器/依赖注入特性，将核心的类组件注入容器中,方便开发者通过注入直接获取拿来使用
- 通过属性初始化中间件的流程，屏蔽具体的细节
- ....

## starter命名规范

根据Spring Boot的官方要求，如果是开发者指定第三方的starter组件，那么命名规范是`yourname-spring-boot-starter`

拿[Knife4j](https://xiaoym.gitee.io/knife4j/)举例说明如下：

```xml
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-spring-boot-starter</artifactId>
    <!--在引用时请在maven中央仓库搜索2.X最新版本号-->
    <version>2.0.8</version>
</dependency>
```

而Spring Boot官方维护发布的starter名称规范则是：`spring-boot-starter-name`

例如我们引用最多的web组件，引用maven配置如下：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

## jar包引用传递依赖机制

这是自定义封装Spring Boot的starter的前提条件，Gradle笔者并未使用过，这里仅以Maven为例进行阐述说明！

通常我们在封装一个SDK的jar包时，该jar包可能需要引用到第三方的jar包作为依赖包来辅助我们完成对该jar包的封装，但是我们在引用的时候是有讲究的。

针对Spring Boot的自定义starter说到底也是一个jar包，既然是jar包必然会用到第三方的jar(ps:全部都是你写的代码除外)，那么我们应该如何明确在starter中的jar包的依赖传递，我认为主要有以下方面：

- 作为第三方组件使用jar包时，明确第三方组件的版本
- 作为编译期间的包，需要修改默认的scope范围值，仅仅在编译期间生效，最终打包后引用不传递
- 自定义封装starter必须引用Spring Boot官方提供的

在定义Spring Boot的第三方starter时，主要用到Maven管理jar包中的两种依赖隔离方式(均可以使用)，分别如下：

- 明确使用`<optional>true></optional>`属性来强指定jar包不传递
- 使用`<scope>provided</scope>`仅仅在编译期间有效，jar包依赖性不传递

一般我们在自定义Spring Boot的starter组件时，都需要引用Spring Boot提供给开发者的依赖包，如下：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-autoconfigure</artifactId>
    <version>2.3.0.RELEASE</version>
    <scope>provided</scope>
</dependency>
```

当然，你也可以使用`optional`模式，如下：

```xml
 <dependency>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-autoconfigure</artifactId>
     <version>2.3.0.RELEASE</version>
     <optional>true</optional>
</dependency>
```

## Java代码方式的Configuration

基于Java编码的方式配置Spring的Bean已经成了目前的主流，这主要也是得益于Spring Boot框架的流行！

在Spring MVC框架流行的时候，开发人员一般都是通过配置XML文件来注入实体Bean的

而通过java编码的方式注入Bean的前提是`@Configuration`注解加在一个配置Java实体类上即可，示例如下：

```java
@Configuration
public class MyAutoConfiguration{
    
    //do others...
    
}
```

## Spring Boot框架的自动装载

对于Spring Boot框架自定义的starter组件来说，提供的使用方式而言，我认为目前主要有3种方式，这个主要看封装starter组件的作者如何开放来定

### 手工`@Import`导入

第一种情况：使用者使用`@Import`注解将封装的starter组件的Java编码Configuration配置文件进行导入

假设目前封装的一个简单的Configuration配置如下：

```java
@Configuration
public class DemoAuthConfiguration {

    @Bean
    public DemoClient demoClient(){
        return new DemoClient();
    }

}
```

开发者通过`DemoAutoConfiguration.java`向Spring的容器中注入了一个`DemoClient`的实体Bean,由于隶属于不同的package包路径，自定义的starter组件包路径是：`com.demo.spring`

而开发者的项目主目录包路径是：`com.test`,所以Spring Boot框架默认是不会加载该配置的，此时，如果开发者要在Spring的容器中获取`DemoClient`的实体Bean应该怎么办呢？使用者应该在自己的主配置中使用`@Import`注解将该配置导入进来交给Spring容器初始化时进行创建，示例如下：

```java
@Import(DemoAutoConfiguration.class)
@SpringBootApplication
public class DemoDemoApplication {
    
    public static void main(String[] args){
        SpringApplication.run(DemoDemoApplication.class, args);
    }
}
```

### 提供便于记忆的注解`@EnableXXX`

`@Enablexxx`系列注解相信开发者并不陌生，比如我们要使用Spring Boot的定时任务功能，我们会在启动入口引入`@EnableScheduling`注解，我们使用Springfox的Swagger组件，我们会引入`@EnableSwagger2`注解

其实这种方式只是为了让开发者能够更加方便的记忆，一个`@Enablexxx`系列注解，其所代表的功能特点也基本符合该starter组件，是在上面手工通过`@Import`注解的升级版本。

毕竟`Enable`单词所代表的含义是**启用**,这有利于开发者记忆

继续通过上面第一种的示例进行改在，此时，我们可以提供`@EnableDemoClient`注解，代码示例如下：

```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Import(DemoAutoConfiguration.class)
public @interface EnableDemoClient {

}
```

大家应该也看到了，我们在该`@EnableDemoClient`注解中，使用了`@Import`注解的方式导入了`DemoAutoConfiguration`配置

此时，我们在项目中可以使用`@EnableDemoClient`注解了，代码示例如下：

```java
@EnableDemoClient
@SpringBootApplication
public class DemoDemoApplication {
    
    public static void main(String[] args){
        SpringApplication.run(DemoDemoApplication.class, args);
    }
}
```

当然，`@Enable`这种注解作用不仅仅局限于此，还可以在该注解上定义外部的配置属性，通过配置该注解的方式达到最终初始化的目的。

### 自动装载

自动装载是Spring Boot的一重大特点，开发者通过配置文件的方式即可默认加载第三方的starter配置，非常的方便，是上面两种方式的升级版

在之前的基础上，如果开发者希望在Maven的pom.xml工程中引入了该组件，就可以使用`DemoClient`类，那么此时我们应该怎么做呢？

我们需要在工程中创建`spring.factories`文件，文件目录：`src/resources/META-INF/spring.factories`

在`spring.factories`文件中,配置开发者自定义的configuration类，如下：

```properties
org.springframework.boot.autoconfigure.EnableAutoConfiguration=com.demo.spring.DemoAutoConfiguration
```

配置好后，此时再打包我们自定义的starter组件，Spring Boot框架默认会自动装载该配置类，我们在业务代码中也就可以直接使用了

我们可以在`SpringApplication.java`源码中看到Spring Boot初始化获取该类列表的过程

```java
private <T> Collection<T> getSpringFactoriesInstances(Class<T> type, Class<?>[] parameterTypes, Object... args) {
		ClassLoader classLoader = getClassLoader();
		// Use names and ensure unique to protect against duplicates
		Set<String> names = new LinkedHashSet<>(SpringFactoriesLoader.loadFactoryNames(type, classLoader));
		List<T> instances = createSpringFactoriesInstances(type, parameterTypes, classLoader, args, names);
		AnnotationAwareOrderComparator.sort(instances);
		return instances;
}
```

上述方法中的`SpringFactoriesLoader.loadFactoryNames`方法如下：

```java
public static List<String> loadFactoryNames(Class<?> factoryType, @Nullable ClassLoader classLoader) {
		String factoryTypeName = factoryType.getName();
		return loadSpringFactories(classLoader).getOrDefault(factoryTypeName, Collections.emptyList());
}

private static Map<String, List<String>> loadSpringFactories(@Nullable ClassLoader classLoader) {
    MultiValueMap<String, String> result = cache.get(classLoader);
    if (result != null) {
        return result;
    }

    try {
        //加载META-INF/spring.factories配置，创建MultiValueMap集合放到该集合中
        Enumeration<URL> urls = (classLoader != null ?
                                 classLoader.getResources(FACTORIES_RESOURCE_LOCATION) :
                                 ClassLoader.getSystemResources(FACTORIES_RESOURCE_LOCATION));
        result = new LinkedMultiValueMap<>();
        while (urls.hasMoreElements()) {
            URL url = urls.nextElement();
            UrlResource resource = new UrlResource(url);
            Properties properties = PropertiesLoaderUtils.loadProperties(resource);
            for (Map.Entry<?, ?> entry : properties.entrySet()) {
                String factoryTypeName = ((String) entry.getKey()).trim();
                for (String factoryImplementationName : StringUtils.commaDelimitedListToStringArray((String) entry.getValue())) {
                    result.add(factoryTypeName, factoryImplementationName.trim());
                }
            }
        }
        cache.put(classLoader, result);
        return result;
    }
    catch (IOException ex) {
        throw new IllegalArgumentException("Unable to load factories from location [" +
                                           FACTORIES_RESOURCE_LOCATION + "]", ex);
    }
}
```

## 充分利用Spring Boot提供的`@Conditional`条件注入组件

通过上面的文章介绍，为Spring Boot框架制定一个简单的starter组件相信已经不在话下。但是，这才仅仅开始而已。

在上面介绍的自动装载过程中，开发者是否会存在疑问？

> 当我们在pom.xml引入我们自定义的starter组件后,Spring Boot框架默认会将该组件直接注入到Spring的容器中，这种方式虽然在使用上并没有什么问题，但当我们封装给第三方使用时,这种方式往往会存在冲突，假设开发者自定义的starter组件中包含了向容器中注入Filter等过滤器,那么该过滤器直接生效,会全范围影响整个应用程序.这在实际开发中是不允许的！
>
> 那么应该怎么办呢?此时，我们就需要充分利用Spring Boot框架为开发者提供的`@Conditional`系列条件注入了

条件注入顾名思义,就是只有使用者满足了组件规定的条件时，组件才会向Spring容器中进行注入Bean或者初始化的操作.这种方式也是将选择权直接交给使用者进行选择，减少非必要的组件冲突，是在Spring Boot自定义starter组件中必不可少的一环。

条件注入通常也配合属性类一起来进行使用,提供配置属性选项也是方便使用者在Spring Boot的配置文件`application.yml`或者`application.properties`进行配置开启操作，例如我们常见的配置操作如下：

```yml
server:
  port: 18568
  servlet:
    context-path: /test
```

为Spring Boot的程序指定启动端口号和`context-path`属性.

我们继续以上面示例中的`DemoClient`为例进行阐述

> 假设我们的`DemoClient`是对接外部API接口的封装组件，该组件规定访问外部API时需要提供`appid`和`secret`,根据appid及secret获取token，最后根据token才能调用API获取接口数据，

那么,此时，我们的`DemoClient`的部分模拟接口代码可能会如下面示例：

```java
public class DemoClient {
    private final String appid;
    private final String secret;

    public DemoClient(String appid, String secret) {
        this.appid = appid;
        this.secret = secret;
    }

    /**
     * 获取资源
     * @return
     */
    public String listResources(){
        //获取token
        String token=getToken();
        //根据Token请求数据
        return UUID.randomUUID().toString();
    }

    private String getToken() {
        //根据appid & secret获取第三方API接口token
        return null;
    }
}

```

在上面的代码示例中，如果开发者要使用`DemoClient`的方法调用第三方的接口资源，那么需要传递`appid`及`secret`参数才能构造实体类，又考虑到我们需要利用Spring Boot的条件注入，只有开发者配置了开启操作，才能在Spring容器中使用`DemoClient`的方法。

那么此时，我们可以给该starter组件抽象一个`DemoProperties`的外部配置类来交给使用者在配置文件中进行配置开启操作，代码示例如下：

```java
@ConfigurationProperties(prefix = "demo")
public class DemoProperties {
    /**
     * 是否启用
     */
    private boolean enable=false;
    
    private String appid;
    private String secret;
    
    //getter and setter...
}
```

在配置类属性中，我们使用到了`@ConfigurationProperties`注解，并配置了`prefix`前缀参数,配置前缀也是自定义starter组件中所必须的，这约束了命名空间。一般是结合自身的业务以及starter组件所代表的功能含义进行命名`prefix`,有助于开发使用者记忆。

此时，我们的`DemoAutoConfiguration.java`配置类进行了调整，代码如下：

```java
@Configuration
@EnableConfigurationProperties(DemoProperties.class)
@ConditionalOnProperty(name = "demo.enable",havingValue = "true")
public class DemoAutoConfiguration {

    @Bean
    public DemoClient demoClient(DemoProperties demoProperties){
        return new DemoClient(demoProperties.getAppid(), demoProperties.getSecret());
    }

}
```

和上面的配置类进行比较不难发现,此处我们又多用了两个注解：

- `@EnableConfigurationProperties`:该注解是我们自定义指定Proerpty实体类时，必须启用的注解，和实体类中的`@ConfigurationProperties`注解配合一起使用
- `@ConditionalOnProperty`:Spring Boot框架中条件注入的一种，代码根据配置的属性进行条件判断注入，此处我们配置了只有当`demo.enable=true`时，`DemoAutoConfiguration`配置类才会加载，向Spring容器中注入`DemoClient`的实体Bean

当自定义starter组件封装到这一步时，基本已经快完结了，开发者可以通过在Spring Boot的配置文件中进行配置，来开启是否使用`DemoClient`组件

```yml
demo:
  # 通过配置该属性的true 或者false ，来开启组件的使用
  enable: true
  appid: xxx
  secret: xxxx
```

## 属性元数据配置

通过上面的配置，我们已经能够自定义一个Spring Boot框架的starter组件了，但是对于使用者来说，封装该starter组件的开发者还尚有最后一步需要完成，那就是给属性类提供元数据注释，提供元数据注释也是为了让使用者在配置`application.yml`属性时，通过IDEA等编辑器能够给出提示，这对使用者而已是大有裨益的，因为每一个属性都会有相应的注释供开发者进行参考。例如Knife4j组件提供的元数据注释如下图：

![](https://oscimg.oschina.net/oscnet/up-91e85f9a3926723e50f6b05ae548d76b291.png)

那么我们在制定starter组件时，如何给属性类提供元数据注释呢？目前主要有两种方式：

### 引入`spring-boot-configuration-processor`自动注释

我们可以在自定义是starter组件中引入该组件，依赖如下：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <version>2.3.0.RELEASE</version>
    <optional>true</optional>
</dependency>
```

引入该组件后，此时，我们只需要在我们的Java属性类中给每一个属性使用标准的javadoc进行注释即可，如下：

```java
@ConfigurationProperties(prefix = "demo")
public class DemoProperties {
    /**
     * 是否启用
     */
    private boolean enable=false;

    /**
     * 第三方appid
     */
    private String appid;
    /**
     * 第三方secret
     */
    private String secret;
    
    //getter and setter...
}
```

最终在使用时，就会出现提示，如下图：

![](/assets/images/springboot/self/authMetaData.png)

这种方式如果属性类不是太多的情况下，开发者可以使用，很方便

### 手工编写`spring-configuration-meatadata.json`文件

`spring-boot-configuration-processor`组件最终在打包生成starter的jar包时，也是帮助我们自动生成了`spring-configuration-metadata.json`文件,该文件和上面提到的`spring.factories`是同级目录

手工编写`spring-configuration-metadata.json`也是我推荐的方式，因为不仅仅是每个属性的注释，有时候我们还可以用更多的属性配置以便使用者使用。

结果如下：

```json
{
  "groups": [
    {
      "name": "demo",
      "type": "com.demo.spring.DemoProperties",
      "sourceType": "com.demo.spring.DemoProperties"
    }
  ],
  "properties": [
    {
      "name": "demo.appid",
      "type": "java.lang.String",
      "description": "第三方appid",
      "sourceType": "com.demo.spring.DemoProperties"
    },
    {
      "name": "demo.enable",
      "type": "java.lang.Boolean",
      "description": "是否启用",
      "sourceType": "com.demo.spring.DemoProperties",
      "defaultValue": false
    },
    {
      "name": "demo.secret",
      "type": "java.lang.String",
      "description": "第三方secret",
      "sourceType": "com.demo.spring.DemoProperties"
    }
  ],
  "hints": []
}
```

我们主要使用到的属性有3个：`groups`、`properties`、`hints`

**groups**

字面意思分组，按我的理解即当我们使用的实体时，配置的`prefix`即代表该group，例如上面我们为`DemoProperties`配置了prefix的前缀是`demo`,那么分组这里可以设置为`demo`,当然如果`DemoProperties`类中包含的属性是一个第三方类，假设如下：

```java
public class DemoProperties{
    
    private OtherProperties other;
}
```

那么我们可以在groups属性中配置一个名为`demo.other`的分组名称

其包含的属性如下：

| 属性名称     | 类型   | 说明                                                         |
| ------------ | ------ | ------------------------------------------------------------ |
| name         | String | 分组名称，可以理解为`prefix`                                 |
| type         | String | 组数据类名                                                   |
| description  | String | 分组简单的描述，可以省略                                     |
| sourceType   | String | 组数据源类名,同type，如果源类型未知，可以忽略该属性          |
| sourceMethod | String | 组方法的名称，（例如，带`@ConfigurationProperties`注解的`@Bean`方法的名称）。 如果源方法未知，则可以省略。 |

**properties**

顾名思义，就是我们实体类每个属性的配置，有多少属性需要添加元数据注释说明，就需要在该数组下全部添加，需要注意的是配置name时需要配置全路径，例如：`demo.enable`等

其包含的属性如下：

| 属性名称     | 类型        | 说明                   |
| ------------ | ----------- | ---------------------- |
| name         | String      | 属性名称               |
| type         | String      | 属性类型               |
| description  | String      | 属性的简介说明         |
| sourceType   | String      | 该属性归属于那个类型   |
| defaultValue | Object      | 该属性默认值           |
| deprecation  | Deprecation | 用于指定该属性是否过时 |

过时选项`Deprecation`包含以下几个属性：

| 名称        | 类型   | 说明                                                         |
| ----------- | ------ | ------------------------------------------------------------ |
| level       | String | 过时的级别,可以指定`warning`或者`error`,当指定为`warning`时，代表该属性还可用，而指定`error`则代表彻底废弃 |
| reason      | String | 原因                                                         |
| replacement | String | 替换属性                                                     |

**hints**

针对该属性，我的理解是类似于Java中的枚举，只不过是给每一个属性的值配置一个说明，方便使用者在配置的时候能够按照规定的值进行正确配置

例如上面我们的示例：`demo.enable`属性，该属性类型为Boolean类型，要配置也只有两种值(true或者false)

那么我们可以给该值配置一个hints进行说明，示例如下：

```json
"hints": [
    {
      "name": "demo.enable",
      "values":[
        {
          "value": true,
          "description": "启用DemoClient组件"
        },
        {
          "value": false,
          "description": "禁用DemoClient组件"
        }
      ]
    }
]
```

当我们进行这样的配置后，最终使用者在使用时就会出现如下图所示的提示:
![](/assets/images/springboot/self/metaHints.png)

这对使用该starter组件的开发者来说，每个属性都有相应的说明，是非常方便的

hints主要包含的属性如下：

| 名称      | 类型            | 说明                   |
| --------- | --------------- | ---------------------- |
| name      | String          | 属性名称               |
| values    | ValueHint[]     | 一个ValueHint的数组    |
| providers | ValueProvider[] | 一个ValueProvinder数组 |

ValueHint是对其提供的值进行注释说明，其属性如下:

| 名称        | 类型   | 说明           |
| ----------- | ------ | -------------- |
| value       | Object | 属性对应的值   |
| description | String | 该值的描述信息 |

ValueProvider包含属性：

| 名称       | 类型        | 说明                       |
| ---------- | ----------- | -------------------------- |
| name       | String      | 属性名称                   |
| parameters | JSON Object | 提供程序支持的其他参数类型 |

在上面我提过，hints类似于枚举，这映射到ValueHint属性，当我们配置了hints属性中的`values`时而不提供`providers`属性时，如果开发者最终在使用时，只能配置ValueHint中定义的值，否则配置其他值时会在IDEA编辑器中就会爆红出错

还是以上面的示例，假设我们给appid配置hint值，如下：

```json
"hints": [
    {
      "name": "demo.appid",
      "values":[
        {
          "value": "test1",
          "description": "测试appid1"
        },
        {
          "value": "test2",
          "description": "测试appid2"
        }
      ]
    }
]
```

那么我们在使用组件时，在`application.yml`配置文件中配置其他值时，idea会提示错误，如下图：

![](/assets/images/springboot/self/metaHints1.png)

此时，`providers`属性就可以排上用场了

修改上面的配置如下：

```json
"hints": [
    {
      "name": "demo.appid",
      "values":[
        {
          "value": "test1",
          "description": "测试appid1"
        },
        {
          "value": "test2",
          "description": "测试appid2"
        }
      ],
      "providers":[
        {
          "name":"any"
        }
      ]
    }
]
```

我们可以配置providers为`any`,这样说明开发者除了可以配置`test1`、`test2`外，当配置其他值时，也是允许的

针对`providers`中的name属性，主要有以下类别供选择：

| Name                    | Description                                                  |
| :---------------------- | :----------------------------------------------------------- |
| `any`                   | Permits any additional value to be provided.                 |
| `class-reference`       | Auto-completes the classes available in the project. Usually constrained by a base class that is specified by the `target` parameter. |
| `handle-as`             | Handles the property as if it were defined by the type defined by the mandatory `target` parameter. |
| `logger-name`           | Auto-completes valid logger names and [logger groups](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-custom-log-groups). Typically, package and class names available in the current project can be auto-completed as well as defined groups. |
| `spring-bean-reference` | Auto-completes the available bean names in the current project. Usually constrained by a base class that is specified by the `target` parameter. |
| `spring-profile-name`   | Auto-completes the available Spring profile names in the project. |

## 附录

- [Spring Boot框架中如何优雅的注入实体Bean](/2020/09/23/spring-boot-conditional/)
- [Spring Boot Configuration Metadata Document](https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-configuration-metadata.html)

