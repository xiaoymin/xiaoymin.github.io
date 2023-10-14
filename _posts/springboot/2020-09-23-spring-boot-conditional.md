---
layout: post
title: Spring Boot框架中如何优雅的注入实体Bean
categories: SpringBoot
description: Spring Boot框架中如何优雅的注入实体Bean
keywords: SpringBoot,Conditional
---

在`Spring Boot`框架中,注入实体`Bean`是几乎每一个Java程序员都能遇到的事情,因为`Spring Boot`采用约定优于配置的策略,去除了原来在`Spring MVC`中通过Xml进行注入的方式,全部通过Java Configuration的编码方式进行实体`Bean`的注入,

因此我们在开发中，对于外部组件、自己封装的业务SDK等等都需要开发者自行将实体Bean注入到`Spring`的容器中，然后通过注解在`Spring`的框架中方便的进行使用

那么,在`Spring Boot`框架中,我们在注入实体`Bean`时,如何优雅的进行注入呢?或者我们在注入实体`Bean`的同时,我们应该注意什么?

## 常规注入

常规注入很简单,通过使用`@Bean`注解即可完成简单的实体Bean注入，如下示例：

```java
@Configuration
public class AdminKernelConfig {
    @Bean
    public DynamicWechatRoute dynamicWechatRoute(){
        return new DynamicWechatRoute();
    }
}
```

在常规注入时,假如我们要注入的Bean是通过构造函数来创建的,此时主要有2中方式进行构造

通过`@Autowired`注解引入外部依赖Bean，然后传递进行构造，如下代码：

```java
@Configuration
public class AdminKernelConfig {
    @Autowired 
    Environment environment;
    
    @Bean
    public DynamicWechatRoute dynamicWechatRoute(){
        return new DynamicWechatRoute(environment);
    }
}
```

另外也可以通过参数传递直接引用，代码如下：

```java
@Configuration
public class AdminKernelConfig {
    
    @Bean
    public DynamicWechatRoute dynamicWechatRoute(Environment environment){
        return new DynamicWechatRoute(environment);
    }
}
```

## 配置注入

很多时候我们创建的实体类都是需要通过外部传参进行构造的，通过基础类型参数或者封装的实体Property类进行构造，一般外部参数是通过写在Spring Boot的配置中

通过`@Value`注解引入外部变量进行实体Bean构造,如下：

```java
@Configuration
public class AdminKernelConfig {
    
    @Value("${signKey}")
    String signKey;
    
    @Bean
    public DynamicWechatRoute dynamicWechatRoute(){
        return new DynamicWechatRoute(signKey);
    }
}
```

上面这种是很常规简单的做法,我们构造的实体类只需要一个基础String类型即可完成构造

但通常情况下,外部参数通常都很多,这种情况我们通常会单独写一个配置属性类进行封装，然后在实体类中通过该配置属性类进行参数构造，通过`@EnableConfigurationProperties`和`@ConfigurationProperties(prefix = "your.prefix")`这两个注解配合使用实现效果

`@ConfigurationProperties`注解作用于我们的配置属性类上,配置一个前缀属性即可,例如：

```java
@ConfigurationProperties(prefix = "test")
public class TestProperties {

    private String accessKeyId;

    private String accessKeySecret;
    //getter & setter

}
```

配上属性前缀`test`,此时我们可以在`application.yml`的配置文件中进行配置，代码如下：

```yml
test:
    accessKeyId: abc
    accessKeySecret: cdeeeeeeeeeeeee
```

配置好后,我们在我们的JavaConfiguration配置类即可进行引用注入,如下：

```java
@Configuration
@EnableConfigurationProperties(TestProperties.class)
public class AdminKernelConfig {
    
    @Bean
    public DynamicWechatRoute dynamicWechatRoute(TestProperties testProperties){
        return new DynamicWechatRoute(testProperties);
    }
    
}
```

这种方式的好处是避免我们在Config类中定义大量的注解`@Value`对属性进行引用，造成代码结构上混乱。

## 条件注入

条件注入作为Spring框架提供给开发者的高级特性而存在,开发者希望能针对某些特定的条件满足的情况下，才注入Bean到Spring的容器中,这种特性提供了很好的可扩展性。

针对条件注入,Spring提供了`@Conditional`注解来解决这个问题.先来看`@Conditional`注解的源码：

```java
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Conditional {

	/**
	 * All {@link Condition Conditions} that must {@linkplain Condition#matches match}
	 * in order for the component to be registered.
	 */
	Class<? extends Condition>[] value();

}
```

`@Condtional`注解提供了一个属性value,该属性声明了一个`Condition`的class，`Condition`是Spring提供的接口

源码：

```java
public interface Condition {

	/**
	 * Determine if the condition matches.
	 * @param context the condition context
	 * @param metadata metadata of the {@link org.springframework.core.type.AnnotationMetadata class}
	 * or {@link org.springframework.core.type.MethodMetadata method} being checked
	 * @return {@code true} if the condition matches and the component can be registered,
	 * or {@code false} to veto the annotated component's registration
	 */
	boolean matches(ConditionContext context, AnnotatedTypeMetadata metadata);
}

```

从源码可以得知,`@Conditional`注解可以作用于类、方法，只要提供的Condition全部满足的情况下,才会将实体Bean注入到所有的容器中.

如果`@Conditional`作用于拥有`@Configuration`注解的类上,那么该类下的所有Bean的创建注入都需要满足`@Conditional`注解的条件才可以注入

如果`@Conditional`作用于方法上,那么该方法需要注入Bean时,只有满足了条件的情况下才会注入.

Spring Boot为我们提供了很多默认的`Condition`实现类,通过默认提供的Condition基本可以满足我们的日常需求,如果不满足,开发者可自定义Condtion的实现开发自己的装载Bean需求。

接下来,先看Spring Boot为我们提供的默认Condition实现,包路径：`org.springframework.boot.autoconfigure.condition`，

常用应用程序使用注解，主要包含以下:

| 注解                        | 说明                                            |
| --------------------------- | ----------------------------------------------- |
| `@ConditionalOnProperty`    | 根据特定的属性进行条件注入                      |
| `@ConditionalOnExpression`  | 根据SPEL表达式组合复杂情况,满足的情况下条件注入 |
| `@ConditionalOnBean`        | 根据容器中存在外部某个实体Bean的情况下条件注入  |
| `@ConditionalOnMissingBean` | 容器中不存在某个实体Bean的情况下条件注入        |
| `@ConditionalOnResource`    | 资源文件存在的情况下载进行条件注入              |

### 常用注解

以下关于`@Conditional`注解的是Spring Boot提供给开发者可以在应用程序中使用的注解。

#### @ConditionalOnProperty

`@ConditionalOnProperty`注解是Spring Boot框架中最常用的条件注解,它允许根据特定的环境属性有条件的进行Bean注入.

示例代码如下：

```java
@Configuration
@ConditionalOnProperty(value="knife4j.enabled", havingValue = "true",matchIfMissing = true)
public class Knife4jModule {
 //more..
}
```

在上面的代码示例中,仅当`knife4j.enabled`的属性为`true`时，才会加载`Knife4jModule`这个配置模块，如果开发者根本没有配置这个属性,由于我们将`matchIfMissing`定义为`true`，因此程序启动时仍将加载该模块。

#### @ConditionalOnExpression

如果我们需要基于多个属性的条件进行组合才能创建Bean,那么我们可以使用`@ConditionalOnExpression`注解

示例代码如下：

```java
@Configuration
@ConditionalOnExpression(value="${knife4j.enabled:true} and ${knife4j.basic.enabled:true}")
public class Knife4jModule {
 //more..
}
```

通过Spring提供的[SPEL](https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#expressions)表达式组合多个表达式的复杂情况，仅到表达式中满足条件时，才会加载`Knife4jModule`这个配置模块

#### @ConditionalOnBean

通常情况下,我们希望只有在某一个Bean可用的情况下,我们在加载配置注入我们的实体Bean

示例代码如下：

```java
@Configuration
@ConditionalOnBean(SwaggerModule.class)
public class Knife4jModule {
 //more..
}
```

在加载`Knife4jModule`之前,我们需要`SwaggerModel`的实体Bean在Spring的容器中存在可用时,才加载该配置

#### @ConditionalOnMissingBean

`@ConditionalOnMissingBean`和`@ConditionalOnBean`意思正好相反,只有在Spring的容器中不存在该实体Bean时才进行条件注入

示例代码如下：

```java
@Configuration
public class OnMissingBeanModule {

  @Bean
  @ConditionalOnMissingBean
  public DataSource dataSource() {
    return new InMemoryDataSource();
  }
}
```

一般该注解作用于实体Bean本身,从上面的示例中,只有在Spring容器中不存在`DataSource`的实例Bean时,才进行加载条件注入Bean.

#### @ConditionalOnResource

根据某些资源的情况下载加载Bean的情况,可以使用`@ConditionalOnResource`注解

示例代码如下：

```java
@Configuration
@ConditionalOnResource(resources = "/logback.xml")
public class LogbackModule {
  //...
}
```

`LogbackModule`模块仅当`logback.xml`资源文件在当前环境中存在的情况下才加载.

通过这种方式,我们可以根据找到自己模块的配置后才进行实体Bean的创建.

### 不常用注解

虽然Spring Boot提供了很多默认的`@Conditional`的注解扩展实现,但是并不是所有的扩展实现都是提供给开发者来使用的,有些则是提供给框架内部进行使用的.

#### @ConditionOnClass

仅当某个类在类路径上时才加载Bean

```java
@Configuration
@ConditionalOnClass(name = "this.clazz.does.not.Exist")
public class OnClassModule {
	//  ...
}
```

#### @ConditionalOnMissingClass

仅当某个类不在类路径上时才加载Bean

```java
@Configuration
@ConditionalOnMissingClass(value = "this.clazz.does.not.Exist")
public class OnMissingClassModule {
  //...
}
```

#### @ConditionalOnJndi

仅当通过JNDI可以使用某些资源时才加载Bean

```java
@Configuration
@ConditionalOnJndi("java:comp/env/foo")
public class OnJndiModule {
  //...
}

```

#### @ConditionalOnJava

仅当在java某个版本时才加载Bean

```java
@Configuration
@ConditionalOnJava(JavaVersion.EIGHT)
public class OnJavaModule {
  //...
}
```

### 自定义

通过上面的不常用注解,我们其实可以发现,针对各种条件下才能对Bean进行注入的实在太多,这种情况下,当我们的程序需要在某种情况下才能注入Bean时,Spring肯定不能满足,此时就需要自定义条件注入Condition

简单的自定义实现

> 目前假设有需求,我们在创建某个实体Bean时,需要根据配置文件的某一个String属性进行对比,只有在Bean上给定的目标值和配置文件中给定的属性值相等的情况下才注入该Bean

通过上面的需求,我们首先需要定义Condition接口的实现，代码如下

```java
public class ConditionOnKeyApply implements Condition {
    @Override
    public boolean matches(ConditionContext conditionContext, AnnotatedTypeMetadata annotatedTypeMetadata) {
        Map<String, Object> multiValueMap=annotatedTypeMetadata.getAnnotationAttributes(ConditionOnKey.class.getName());
        //获取property
        String propertyValue=Objects.toString(multiValueMap.get("property"),"");
        //获取目标值
        String targetValue=Objects.toString(multiValueMap.get("targetValue"),"");
        if (StrUtil.isNotBlank(propertyValue)&&StrUtil.isNotBlank(targetValue)){
            //都不为空的情况下
            Environment environment=conditionContext.getEnvironment();
            //从配置环境中获取值
            String sourceValue=environment.getProperty(propertyValue);
            System.out.println("环境值:"+sourceValue+",目标值:"+targetValue);
            // 进行比对
            return StrUtil.equalsIgnoreCase(sourceValue,targetValue);
        }
        return false;
    }
}
```

定义我们自定义的注解`@ConditionOnKey`，代码如下：

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE,ElementType.METHOD})
@Documented
//指定Conditional的实现类
@Conditional(value = ConditionOnKeyApply.class)
public @interface ConditionOnKey {
    /**
     * 获取某个属性的env值
     * @return
     */
    String property();

    /**
     * 目标值
     * @return
     */
    String targetValue() default "true";
}
```

在JavaConfiguration中进行注入

```java
@Configuration
public class ConditionKeyConfig {


    @Bean
    @ConditionOnKey(property = "key",targetValue = "test")
    public ConditionKeyModel conditionKeyModel(){
        return new ConditionKeyModel();
    }
}
```

从注入的代码中,如果我们在`application.yml`配置文件中配置一个属性为`key`，值为`test`的情况下，`ConditionKeyModel`这个实体会注入Spring容器中,否则不会进行注入.

```yml
key: test
```

## 外部导入

通常我们在使用第三方技术组件时,只需要简单的在Spring Boot的启动类上加入`@Enablexxx`等这类注解，既可以帮我们快速集成第三方的技术能力。

这种方式我们在自己封装时也可以使用,通常`@Enablexx`注解使用的是`@Import`注解来导入一个java configuration的配置文件类进行实现

看一个Swagger的示例，一般我们在使用swagger的时候通常使用`@EnableSwagger2`来使用，如下代码：

```java
@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
    
}
```

`@EnableSwagger2`的注解源码如下：

```java
@Retention(value = java.lang.annotation.RetentionPolicy.RUNTIME)
@Target(value = { java.lang.annotation.ElementType.TYPE })
@Documented
@Import({Swagger2DocumentationConfiguration.class})
public @interface EnableSwagger2 {
    
}
```

注解上除了标注该注解的作用目标以及`Retention`，还使用了`@Import`注解将`Swagger2DocumentationConfiguration`类进行了导入，来看源码：

```java
@Configuration
@Import({ SpringfoxWebMvcConfiguration.class, SwaggerCommonConfiguration.class })
@ComponentScan(basePackages = {
    "springfox.documentation.swagger2.mappers"
})
@ConditionalOnWebApplication
public class Swagger2DocumentationConfiguration {
  @Bean
  public JacksonModuleRegistrar swagger2Module() {
    return new Swagger2JacksonModule();
  }

  @Bean
  public HandlerMapping swagger2ControllerMapping(
      Environment environment,
      DocumentationCache documentationCache,
      ServiceModelToSwagger2Mapper mapper,
      JsonSerializer jsonSerializer) {
    return new PropertySourcedRequestMappingHandlerMapping(
        environment,
        new Swagger2Controller(environment, documentationCache, mapper, jsonSerializer));
  }
}
```

源码中是一个Configuration类，然后通过上面我们说的最简单的常规注入了2个实体Bean

一般这种方式我们可以在封装自己的组件时进行使用,通过提供一个`@Enable`系列的注解，方便外部人员使用和记忆.