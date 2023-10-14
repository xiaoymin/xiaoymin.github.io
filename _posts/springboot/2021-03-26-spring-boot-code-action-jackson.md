---
layout: post
title: Spring Boot框架中使用Jackson的处理总结
categories: SpringBoot
description: Spring Boot框架中使用Jackson的处理总结
keywords: SpringBoot,Jackson
---

## 1.前言

通常我们在使用Spring Boot框架时，如果没有特别指定接口的序列化类型，则会使用Spring Boot框架默认集成的Jackson框架进行处理，通过Jackson框架将服务端响应的数据序列化成JSON格式的数据。

本文主要针对在Spring Boot框架中使用Jackson进行处理的经验进行总结，同时也结合在实际开发场景中碰到的问题以及解决方案进行陈述。

本文涉及到的源码地址：[https://gitee.com/dt_research_institute/code-in-action](https://gitee.com/dt_research_institute/code-in-action)

> PS:目前市面上针对JSON序列化的框架很多,比较出名的就是[Jackson](https://github.com/FasterXML/jackson)、[Gson](https://github.com/google/gson)、[FastJson](https://github.com/alibaba/fastjson)。如果开发者对序列化框架没有特别的要求的情况下，个人建议是直接使用Spring Boot框架默认集成的Jackson，**没有必要**进行更换。

## 2.统一序列化时间格式

在我们的接口中，针对时间类型的字段序列化是最常见的需求之一，一般前后端开发人员会针对时间字段统一进行约束，这样有助于在编码开发时，统一编码规范。

在Spring Boot框架中，如果使用Jackson处理框架，并且没有任何配置的情况下，Jackson针对不同时间类型字段，序列化的格式也会不尽相同。

先来看一个简单示例，`User.java`实体类编码如下：

```java
public class User {

    private String name;

    private Integer age;

    private LocalDateTime birthday;

    private Date studyDate;

    private LocalDate workDate;
    
    private Calendar firstWorkDate;
    
    public static User buildOne(){
        User user=new User();
        LocalDateTime now=LocalDateTime.now();
        user.setWorkDate(now.plusYears(25).toLocalDate());
        user.setStudyDate(Date.from(now.plusYears(5).atZone(ZoneId.systemDefault()).toInstant()));
        user.setName("姓名-"+RandomUtil.randomString(5));
        user.setAge(RandomUtil.randomInt(0,100));
        user.setBirthday(now);
        user.setFirstWorkDate(Calendar.getInstance());
        return user;
    }
    
    //getter and setter...
}
```

接口代码层也很简单，返回一个User的实体对象即可，代码如下：

```java
@RestController
public class UserApplication {


    @GetMapping("/queryOne")
    public ResponseEntity<User> queryOne(){
        return ResponseEntity.ok(User.buildOne());
    }
}
```

如果我们对框架代码没有任何的配置，此时我们通过调用接口`/queryOne`，拿到的返回结果数据如下图：

![image-20210312085839202](/assets/images/springboot/code-action-jackson/image-20210312085839202.png)

Jackson序列化框架针对四个不同的时间类型字段，序列化处理的操作是不同的，如果我们对时间字段有格式化的要求时，我们应该如何处理呢？

### 2.1 通过`@JsonFormat`注解

最直接也是最简单的一种方式，是我们通过使用Jackson提供的`@JsonFormat`注解，对需要格式化处理的时间字段进行标注，在`@JsonFormat`注解中写上我们的时间格式化字符，`User.java`代码如下：

```java
public class User {

    private String name;

    private Integer age;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime birthday;

    private Date studyDate;

    private LocalDate workDate;

    private Calendar firstWorkDate;
    //getter and setter...
}
```

此时，我们再通过调用接口，拿到的返回结果如下图：

![image-20210312090417967](/assets/images/springboot/code-action-jackson/image-20210312090417967.png)

通过对`birthday`字段标注`@JsonFormat`注解，最终Jackson框架会将该字段序列化为我们标注的格式类型。

### 2.2 配置全局`application.yml`

通过`@JsonFormat`注解的方式虽然能解决问题，但是我们在实际的开发当中，涉及到的时间字段会非常多，如果全部都用注解的方式对项目中的时间字段进行标注，那开发的工作量也会很大，并且多团队一起协同编码时，难免会存在遗漏的情况，因此，`@JsonFormat`注解只适用于针对特定的接口，特定的场景下，对序列化响应的时间字段进行约束，而在全局的角度来看，开发者应该考虑通过在`application.yml`配置文件中进行全局配置

针对Spring Boot框架中Jackson的全局配置，我们在`application.yml`进行配置时，IDEA等编辑器会给出相应的提示，包含的属性如下图：

![image-20210312092003557](/assets/images/springboot/code-action-jackson/image-20210312092003557.png)

开发者可以通过`org.springframework.boot.autoconfigure.jackson.JacksonProperties.java`查看所有配置的源码信息

| 配置属性      | 说明                                       |
| ------------- | ------------------------------------------ |
| `date-format` | 日期字段格式化，例如:`yyyy-MM-dd HH:mm:ss` |

针对日期字段的格式化处理，我们只需要使用`date-format`属性进行配置即可，`application.yml`配置如下：

```yml
spring:
  jackson:
    date-format: yyyy-MM-dd HH:mm:ss
```

当然，如果有必要的话，还需要配置`time-zone`时区属性，不过该属性不配置的情况下，Jackson会使用系统默认时区。

我们从Spring Boot的源码中可以看到对Jackson的时间处理逻辑,`JacksonAutoConfiguration.java`中部分代码如下：

```java
private void configureDateFormat(Jackson2ObjectMapperBuilder builder) {
    // We support a fully qualified class name extending DateFormat or a date
    // pattern string value
    String dateFormat = this.jacksonProperties.getDateFormat();
    if (dateFormat != null) {
        try {
            Class<?> dateFormatClass = ClassUtils.forName(dateFormat, null);
            builder.dateFormat((DateFormat) BeanUtils.instantiateClass(dateFormatClass));
        }
        catch (ClassNotFoundException ex) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat(dateFormat);
            // Since Jackson 2.6.3 we always need to set a TimeZone (see
            // gh-4170). If none in our properties fallback to the Jackson's
            // default
            TimeZone timeZone = this.jacksonProperties.getTimeZone();
            if (timeZone == null) {
                timeZone = new ObjectMapper().getSerializationConfig().getTimeZone();
            }
            simpleDateFormat.setTimeZone(timeZone);
            builder.dateFormat(simpleDateFormat);
        }
    }
}
```

从上面的代码中，我们可以看到的处理逻辑：

- 从yml配置文件中拿到`dateFormat`属性字段
- 首先通过`ClassUtils.forName`方法来判断开发者配置的是否是格式化类，如果配置的是格式化类，则直接配置`dateFormat`属性
- 类找不到的情况下,捕获`ClassNotFoundException`异常，默认使用JDK自带的`SimpleDateFormat`类进行初始化

最终，我们在`application.yml`配置文件中配置了全局的Jackson针对日期处理的格式化信息，此时我们再看`/queryOne`接口响应的内容是什么情况呢？如下图：

![image-20210312094014588](/assets/images/springboot/code-action-jackson/image-20210312094014588.png)

从图中我们可以发现，除了`LocalDate`类型的字段，包含时分秒类型的日期类型：`LocalDateTime`、`Date`、`Calendar`全部按照我们的要求将日期序列化成了`yyyy-MM-dd HH:mm:ss`格式，达到了我们的要求。

## 3.Jackson在Spring Boot框架中的配置选项

在上面的时间字段序列化处理，我们已经知道了如何配置，那么在Spring Boot的框架中，针对Jackson的各个配置项主要包含哪些呢？我们通过IDEA的提示可以看到，配置如下图：

![image-20210312092003557](/assets/images/springboot/code-action-jackson/image-20210312092003557.png)

在上面的12个属性中，每个属性的配置都会对Jackson产生不同的效果，接下来，我们逐一详解每个属性配置的作用

### 3.1 date-format日期格式化

`date-format`在前面我们已经知道了该属性的作用，主要是针对日期字段的格式化

### 3.2 time-zone时区

`time-zone`字段也是和日期字段类型，使用不同的时区,最终日期类型字段响应的结果会不一样

时区的表示方法有两种：

- 指定时区的名称，例如：`Asia/Shanghai`,`America/Los_Angeles`
- 通过格林威治平时`GMT`针对时分秒做`+`或者`-`自定义操作

通过指定时区的名称，假设我们指定当前的项目是`America/Los_Angeles`，那么接口响应的数据是什么效果呢?

> PS:时区名称如果不是很清楚的话，一般在Linux服务器的`/usr/share/zoneinfo`目录可以进行查看，如下图：
>
> ![image-20210312131802521](/assets/images/springboot/code-action-jackson/image-20210312131802521.png)

`application.yml`:

```yml
spring:
  jackson:
    date-format: yyyy-MM-dd HH:mm:ss
    time-zone: America/Los_Angeles
```

效果图如下：

![image-20210312130547087](/assets/images/springboot/code-action-jackson/image-20210312130547087.png)

我们在结合代码来分析：

```java
//User.java
public static User buildOne(){
    User user=new User();
    LocalDateTime now=LocalDateTime.now();
    user.setWorkDate(now.plusYears(25).toLocalDate());
    user.setStudyDate(Date.from(now.plusYears(5).atZone(ZoneId.systemDefault()).toInstant()));
    user.setName("姓名-"+RandomUtil.randomString(5));
    user.setAge(RandomUtil.randomInt(0,100));
    user.setBirthday(now);
    user.setFirstWorkDate(Calendar.getInstance());
    return user;
}
```

由于洛杉矶时区与上海时区相差16个小时，因此，Jackson框架针对日期的序列化时，分别做了不同类型的处理，但我们也能看出差别

- `LocalDateTime`、`LocalDate`类型的字段，Jackson的时区设置不会对该字段产生影响(因为这两个日期类型自带时区属性)
- `Date`、`Calendar`类型的字段受Jackson序列化框架的时区设置影响

另外一种方式是通过格林威治平时(GMT)做加减法，主要有两种格式支持：

- `GMT+HHMM`或者`GMT-HHMM`或者`GMT+H`:其中HH代表的是小时数，MM代表的是分钟数，取值范围是0-9,例如我们常见的GMT+8代表东八区，也就是北京时间
- `GMT+HH:MM`或者`GMT-HH:MM`:其中HH代表的是小时数，MM代表的是分钟数，取值范围是0-9，和上面意思差不多

可以自己写测试代码进行测试，示例如下：

```java
public class TimeTest {
    public static void main(String[] args) {
        LocalDateTime localDateTime=LocalDateTime.now();
        DateTimeFormatter dateTimeFormatter=DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        System.out.println(localDateTime.format(dateTimeFormatter));
        System.out.println(LocalDateTime.now(ZoneId.of("GMT+0901")).format(dateTimeFormatter));
        System.out.println(LocalDateTime.now(ZoneId.of("GMT+09:01")).format(dateTimeFormatter));
    }
}
```

### 3.3 locale本地化

JSON序列化时Locale的变量设置

### 3.4 visibility访问级别

Jackson支持从私有字段中读取值,但是默认情况下不这样做,如果我们的项目中存在不同的序列化反序列化需求，那么我们可以在配置文件中对`visibility`进行配置

我们将上面`User.java`代码中的name属性的get方法修饰符从`public`变更为`private`,其他字段保持不变

代码如下：

```java
public class User {

    private String name;

    private Integer age;
    private Date nowDate;

    private LocalDateTime birthday;

    private Date studyDate;

    private LocalDate workDate;

    private Calendar firstWorkDate;

    //getter方法修饰符从public修改为private
    private String getName() {
        return name;
    }
    //other setter and getter
}
```

此时，我们通过调用`/queryOne`接口响应结果如下：

![image-20210314191124147](/assets/images/springboot/code-action-jackson/image-20210314191124147.png)

从结果中我们可以看到，由于我们将name属性的`getter`方法设置为了`private`，因此jackson在序列化时，没有拿到该字段

此时，我们再修改`application.yml`的配置，如下：

```yml
spring:
  jackson:
    visibility:
      getter: any
```

我们通过将`getter`设置为`any`级别的类型，再调用`/queryOne`接口，响应结果如下：

![image-20210314191405490](/assets/images/springboot/code-action-jackson/image-20210314191405490.png)



从图中可以看出，jackson序列化结果中又出现了name属性，这代表即使name字段的属性和`getter`方法都是`private`，但是jackson还是获取到了该成员变量的值，并且进行了序列化处理。

通过设置`visibility`属性即可达到上面的效果。开发者根据自己的需要自行进行选择。

### 3.5 property-naming-strategy属性命名策略

通常比较常见的我们针对java代码中的实体类属性一般都是[驼峰命名法(Camel-Case)](https://baike.baidu.com/item/%E9%AA%86%E9%A9%BC%E5%91%BD%E5%90%8D%E6%B3%95/7794053?fromtitle=%E9%A9%BC%E5%B3%B0%E5%91%BD%E5%90%8D%E6%B3%95&fromid=7560610&fr=aladdin)，但是Jackson序列化框架也提供了更多的序列化策略，而`property-naming-strategy`就是配置该属性的。

先来看Spring Boot框架如何配置jackson的命名策略

`JacksonAutoConfiguration.java`

```java
private void configurePropertyNamingStrategyField(Jackson2ObjectMapperBuilder builder, String fieldName) {
    // Find the field (this way we automatically support new constants
    // that may be added by Jackson in the future)
    Field field = ReflectionUtils.findField(PropertyNamingStrategy.class, fieldName,
                                            PropertyNamingStrategy.class);
    Assert.notNull(field, () -> "Constant named '" + fieldName + "' not found on "
                   + PropertyNamingStrategy.class.getName());
    try {
        builder.propertyNamingStrategy((PropertyNamingStrategy) field.get(null));
    }
    catch (Exception ex) {
        throw new IllegalStateException(ex);
    }
}
```

通过反射，直接获取`PropertyNamingStrategy`类中的成员变量的值

`PropertyNamingStrategy`定义了Jackson(`2.11.4`)框架中的命名策略常量成员变量

```java
package com.fasterxml.jackson.databind;

//other import

public class PropertyNamingStrategy // NOTE: was abstract until 2.7
    implements java.io.Serializable
{
    /**
     * Naming convention used in languages like C, where words are in lower-case
     * letters, separated by underscores.
     * See {@link SnakeCaseStrategy} for details.
     *
     * @since 2.7 (was formerly called {@link #CAMEL_CASE_TO_LOWER_CASE_WITH_UNDERSCORES})
     */
    public static final PropertyNamingStrategy SNAKE_CASE = new SnakeCaseStrategy();

    /**
     * Naming convention used in languages like Pascal, where words are capitalized
     * and no separator is used between words.
     * See {@link PascalCaseStrategy} for details.
     *
     * @since 2.7 (was formerly called {@link #PASCAL_CASE_TO_CAMEL_CASE})
     */
    public static final PropertyNamingStrategy UPPER_CAMEL_CASE = new UpperCamelCaseStrategy();

    /**
     * Naming convention used in Java, where words other than first are capitalized
     * and no separator is used between words. Since this is the native Java naming convention,
     * naming strategy will not do any transformation between names in data (JSON) and
     * POJOS.
     *
     * @since 2.7 (was formerly called {@link #PASCAL_CASE_TO_CAMEL_CASE})
     */
    public static final PropertyNamingStrategy LOWER_CAMEL_CASE = new PropertyNamingStrategy();
    
    /**
     * Naming convention in which all words of the logical name are in lower case, and
     * no separator is used between words.
     * See {@link LowerCaseStrategy} for details.
     * 
     * @since 2.4
     */
    public static final PropertyNamingStrategy LOWER_CASE = new LowerCaseStrategy();

    /**
     * Naming convention used in languages like Lisp, where words are in lower-case
     * letters, separated by hyphens.
     * See {@link KebabCaseStrategy} for details.
     * 
     * @since 2.7
     */
    public static final PropertyNamingStrategy KEBAB_CASE = new KebabCaseStrategy();

    /**
     * Naming convention widely used as configuration properties name, where words are in
     * lower-case letters, separated by dots.
     * See {@link LowerDotCaseStrategy} for details.
     *
     * @since 2.10
     */
    public static final PropertyNamingStrategy LOWER_DOT_CASE = new LowerDotCaseStrategy();
    
    //others...
}
```

从源码中我们可以看到，有六种策略供我们进行配置，配置示例如下：

```yml
spring:
  jackson:
    date-format: yyyy-MM-dd HH:mm:ss
    locale: zh_CN
    time-zone: GMT+8
    visibility:
      getter: any
    property-naming-strategy: LOWER_CAMEL_CASE
```

**SNAKE_CASE**

`SNAKE_CASE`主要包含的规则,详见[SnakeCaseStrategy](https://www.javadoc.io/doc/com.fasterxml.jackson.core/jackson-databind/latest/com/fasterxml/jackson/databind/PropertyNamingStrategy.SnakeCaseStrategy.html)：

- java属性名称中所有大写的字符都会转换为两个字符，下划线和该字符的小写形式，例如`userName`会转换为`user_name`,对于连续性的大写字符，近第一个进行下划线转换，后面的大小字符则是小写，例如`theWWW`会转换为`the_www`
- 对于首字母大写的情况，近转成小写，例如:`Results`会转换为`results`，并不会转换为`_results`
- 针对属性中已经包含下划线的情况，仅做小写转换处理
- 下划线出现在首位的情况下，会被去除处理，例如属性名：`_user`会被转换为`user`

真实效果如下图：

![image-20210315125556270](/assets/images/springboot/code-action-jackson/image-20210315125556270.png)

**UPPER_CAMEL_CASE**

`UPPER_CAMEL_CASE`顾名思义，驼峰命名法的规则，只是首字母会转换为大写，详见[UpperCamelCaseStrategy](https://www.javadoc.io/doc/com.fasterxml.jackson.core/jackson-databind/latest/com/fasterxml/jackson/databind/PropertyNamingStrategy.UpperCamelCaseStrategy.html)

真实效果图如下：

![image-20210315131430536](/assets/images/springboot/code-action-jackson/image-20210315131430536.png)

**LOWER_CAMEL_CASE**

`LOWER_CAMEL_CASE`效果和`UPPER_CAMEL_CASE`正好相反，其首字母会变成小写，详见[LowerCamelCaseStrategy](https://www.javadoc.io/doc/com.fasterxml.jackson.core/jackson-databind/latest/com/fasterxml/jackson/databind/PropertyNamingStrategies.LowerCamelCaseStrategy.html)

效果图如下：

![image-20210315131729151](/assets/images/springboot/code-action-jackson/image-20210315131729151.png)

**LOWER_CASE**

`LOWER_CASE`从命名来看很明显，将属性名 全部转为小写，详见[LowerCaseStrategy](https://www.javadoc.io/doc/com.fasterxml.jackson.core/jackson-databind/latest/com/fasterxml/jackson/databind/PropertyNamingStrategy.LowerCaseStrategy.html)

**KEBAB_CASE**

`KEBAB_CASE`策略和`SNAKE_CASE`规则类似，只是下划线变成了横线`-`,详见[KebabCaseStrategy](https://www.javadoc.io/doc/com.fasterxml.jackson.core/jackson-databind/latest/com/fasterxml/jackson/databind/PropertyNamingStrategy.KebabCaseStrategy.html)

效果图如下：

![image-20210315132557384](/assets/images/springboot/code-action-jackson/image-20210315132557384.png)

**LOWER_DOT_CASE**

`LOWER_DOT_CASE`策略和`KEBAB_CASE`规则相似，只是由横线变成了点`.`，详见[LowerDotCaseStrategy](https://www.javadoc.io/doc/com.fasterxml.jackson.core/jackson-databind/latest/com/fasterxml/jackson/databind/PropertyNamingStrategy.LowerDotCaseStrategy.html)

效果图如下：

![image-20210315132720262](/assets/images/springboot/code-action-jackson/image-20210315132720262.png)

**总结**：看了上面这么多属性名称的策略，其实每一种类型只是不同的场景下才需要，如果上面jackson给定的默认策略名称无法满足，我们从源码中也能看到，通过自定义实现类，也能满足企业的个性化需求，非常方便。

### 3.6 mapper通用功能开关配置

`mapper`属性是一个Map类型，主要是针对`MapperFeature`定义开关属性，是否启用这些特性

```java
/**
* Jackson general purpose on/off features.
*/
private final Map<MapperFeature, Boolean> mapper = new EnumMap<>(MapperFeature.class);
```

在`MapperFeature.java`中，我们可以跟踪源码来看：

```java
/**
 * Enumeration that defines simple on/off features to set
 * for {@link ObjectMapper}, and accessible (but not changeable)
 * via {@link ObjectReader} and {@link ObjectWriter} (as well as
 * through various convenience methods through context objects).
 *<p>
 * Note that in addition to being only mutable via {@link ObjectMapper},
 * changes only take effect when done <b>before any serialization or
 * deserialization</b> calls -- that is, caller must follow
 * "configure-then-use" pattern.
 */
public enum MapperFeature implements ConfigFeature
{
    //.......
}
```

`MapperFeature`是一个枚举类型，对当前jackson的一些特性通过枚举变量的方式来定义开关属性，也是方便使用者来使用的。

主要包含以下枚举变量：

- `USE_ANNOTATIONS`:
- `USE_GETTERS_AS_SETTERS`
- `PROPAGATE_TRANSIENT_MARKER`
- `AUTO_DETECT_CREATORS`
- `AUTO_DETECT_FIELDS`
- `AUTO_DETECT_GETTERS`
- `AUTO_DETECT_IS_GETTERS`
- `AUTO_DETECT_SETTERS`
- `REQUIRE_SETTERS_FOR_GETTERS`
- `ALLOW_FINAL_FIELDS_AS_MUTATORS`
- `INFER_PROPERTY_MUTATORS`
- `INFER_CREATOR_FROM_CONSTRUCTOR_PROPERTIES`
- `CAN_OVERRIDE_ACCESS_MODIFIERS`
- `OVERRIDE_PUBLIC_ACCESS_MODIFIERS`
- `USE_STATIC_TYPING`
- `USE_BASE_TYPE_AS_DEFAULT_IMPL`
- `DEFAULT_VIEW_INCLUSION`
- `SORT_PROPERTIES_ALPHABETICALLY`
- `ACCEPT_CASE_INSENSITIVE_PROPERTIES`
- `ACCEPT_CASE_INSENSITIVE_ENUMS`
- `ACCEPT_CASE_INSENSITIVE_VALUES`
- `USE_WRAPPER_NAME_AS_PROPERTY_NAME`
- `USE_STD_BEAN_NAMING`
- `ALLOW_EXPLICIT_PROPERTY_RENAMING`
- `ALLOW_COERCION_OF_SCALARS`
- `IGNORE_DUPLICATE_MODULE_REGISTRATIONS`
- `IGNORE_MERGE_FOR_UNMERGEABLE`
- `BLOCK_UNSAFE_POLYMORPHIC_BASE_TYPES`

### 3.7 serialization序列化特性开关配置

`serialization`属性同`mapper`类似，也是一个Map类型的属性

```java
/**
* Jackson on/off features that affect the way Java objects are serialized.
*/
private final Map<SerializationFeature, Boolean> serialization = new EnumMap<>(SerializationFeature.class);
```



### 3.8 deserialization反序列化开关配置

`deserialization`反序列化配置

```java
/**
* Jackson on/off features that affect the way Java objects are deserialized.
 */
private final Map<DeserializationFeature, Boolean> deserialization = new EnumMap<>(DeserializationFeature.class);
```

### 3.9 parser配置

### 3.10 generator配置

### 3.11 defaultPropertyInclusion序列化包含的属性配置

该属性是一个枚举配置，主要包含：

- `ALWAYS`:顾名思义，始终包含，和属性的值无关
- `NON_NULL`:值非空的属性才会包含属性
- `NON_ABSENT`:值非空的属性，或者`Optional`类型的属性非空
- `NON_EMPTY`: 空值的属性不包含
- `NON_DEFAULT`：不使用jackson的默认规则对该字段进行序列化,详见[示例](https://www.logicbig.com/tutorials/misc/jackson/json-include-non-default.html)
- `CUSTOM`:自定义规则
- `USE_DEFAULTS`:配置使用该规则的属性字段，将会优先使用class上的注解规则，否则会使用全局的序列化规则，详见[示例](https://www.logicbig.com/tutorials/misc/jackson/json-include-use-defaults.html)

`CUSTOM`自定义规则是需要开发者在属性字段上使用`@JsonInclude`注解，并且指定`valueFilter`属性，该属性需要传递一个`Class`，示例如下：

```java
//User.java
//指定value级别是CUSTOM
@JsonInclude(value = JsonInclude.Include.CUSTOM, valueFilter = StringFilter.class)
private String name;
```

`StringFilter`则是判断非空的依据，该依据由开发者自己定义，返回`true`将会被排除，`false`则不会排除，示例如下：

```java
//自定义非空判断规则
public class StringFilter {
    @Override
    public boolean equals(Object other) {
        if (other == null) {
            // Filter null's.
            return true;
        }

        // Filter "custom_string".
        return "custom_string".equals(other);
    }
}
```

## 4.Spring Boot针对Jackson的约定配置做的事情

在前面的文章中，我们已经详细的了解了Jackson在Spring Boot框架中的各个配置项，那么Spring Boot针对Jackson框架在约定配置时会做哪些事情呢?

在Spring Boot的`spring-boot-autoconfigure-x.x.jar`包中，我们可以看到Spring Boot框架针对jackson的处理源码，如下图：

![image-20210320122535467](/assets/images/springboot/code-action-jackson/image-20210320122535467.png)

主要包含三个类：

- JacksonProperties:Spring Boot框架提供jackson的配置属性类，即开发者在`application.yml`配置文件中的配置项属性
- JacksonAutoConfiguration:Jackson的默认注入配置类
- Jackson2ObjectMapperBuilderCustomizer:自定义用于注入jackson的配置辅助接口

核心类是`JacksonAutoConfiguration.java`,该类是Spring Boot框架将Jackson相关实体Bean注入Spring容器的关键配置类。其主要作用：

- 注入Jackson的`ObjectMapper`实体Bean到Spring容器中
- 注入`ParameterNamesModule`实体Bean到Spring容器中
- 注入`Jackson2ObjectMapperBuilder`实体Bean
- 注入`JsonComponentModule`实体Bean
- 注入`StandardJackson2ObjectMapperBuilderCustomizer`实体Bean，该类是上面`Jackson2ObjectMapperBuilderCustomizer`的实现类，主要用于接收`JacksonProperties`属性，将Jackson的外部配置属性接收，然后最终执行`customize`方法，构建`ObjectMapper`所需要的`Jackson2ObjectMapperBuilder`属性，最终为`ObjectMapper`属性赋值准备

源码如下：

```java
@Configuration(proxyBeanMethods = false)
@ConditionalOnClass(ObjectMapper.class)
public class JacksonAutoConfiguration {

	private static final Map<?, Boolean> FEATURE_DEFAULTS;

	static {
		Map<Object, Boolean> featureDefaults = new HashMap<>();
		featureDefaults.put(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
		featureDefaults.put(SerializationFeature.WRITE_DURATIONS_AS_TIMESTAMPS, false);
		FEATURE_DEFAULTS = Collections.unmodifiableMap(featureDefaults);
	}

	@Bean
	public JsonComponentModule jsonComponentModule() {
		return new JsonComponentModule();
	}

	@Configuration(proxyBeanMethods = false)
	@ConditionalOnClass(Jackson2ObjectMapperBuilder.class)
	static class JacksonObjectMapperConfiguration {

		@Bean
		@Primary
		@ConditionalOnMissingBean
		ObjectMapper jacksonObjectMapper(Jackson2ObjectMapperBuilder builder) {
			return builder.createXmlMapper(false).build();
		}

	}

	@Configuration(proxyBeanMethods = false)
	@ConditionalOnClass(ParameterNamesModule.class)
	static class ParameterNamesModuleConfiguration {

		@Bean
		@ConditionalOnMissingBean
		ParameterNamesModule parameterNamesModule() {
			return new ParameterNamesModule(JsonCreator.Mode.DEFAULT);
		}

	}

	@Configuration(proxyBeanMethods = false)
	@ConditionalOnClass(Jackson2ObjectMapperBuilder.class)
	static class JacksonObjectMapperBuilderConfiguration {

		@Bean
		@Scope("prototype")
		@ConditionalOnMissingBean
		Jackson2ObjectMapperBuilder jacksonObjectMapperBuilder(ApplicationContext applicationContext,
				List<Jackson2ObjectMapperBuilderCustomizer> customizers) {
			Jackson2ObjectMapperBuilder builder = new Jackson2ObjectMapperBuilder();
			builder.applicationContext(applicationContext);
			customize(builder, customizers);
			return builder;
		}

		private void customize(Jackson2ObjectMapperBuilder builder,
				List<Jackson2ObjectMapperBuilderCustomizer> customizers) {
			for (Jackson2ObjectMapperBuilderCustomizer customizer : customizers) {
				customizer.customize(builder);
			}
		}

	}
    @Configuration(proxyBeanMethods = false)
	@ConditionalOnClass(Jackson2ObjectMapperBuilder.class)
	@EnableConfigurationProperties(JacksonProperties.class)
	static class Jackson2ObjectMapperBuilderCustomizerConfiguration {

		@Bean
		StandardJackson2ObjectMapperBuilderCustomizer standardJacksonObjectMapperBuilderCustomizer(
				ApplicationContext applicationContext, JacksonProperties jacksonProperties) {
			return new StandardJackson2ObjectMapperBuilderCustomizer(applicationContext, jacksonProperties);
		}

		static final class StandardJackson2ObjectMapperBuilderCustomizer
				implements Jackson2ObjectMapperBuilderCustomizer, Ordered {

			private final ApplicationContext applicationContext;

			private final JacksonProperties jacksonProperties;

			StandardJackson2ObjectMapperBuilderCustomizer(ApplicationContext applicationContext,
					JacksonProperties jacksonProperties) {
				this.applicationContext = applicationContext;
				this.jacksonProperties = jacksonProperties;
			}

			@Override
			public int getOrder() {
				return 0;
			}

			@Override
			public void customize(Jackson2ObjectMapperBuilder builder) {

				if (this.jacksonProperties.getDefaultPropertyInclusion() != null) {
					builder.serializationInclusion(this.jacksonProperties.getDefaultPropertyInclusion());
				}
				if (this.jacksonProperties.getTimeZone() != null) {
					builder.timeZone(this.jacksonProperties.getTimeZone());
				}
				configureFeatures(builder, FEATURE_DEFAULTS);
				configureVisibility(builder, this.jacksonProperties.getVisibility());
				configureFeatures(builder, this.jacksonProperties.getDeserialization());
				configureFeatures(builder, this.jacksonProperties.getSerialization());
				configureFeatures(builder, this.jacksonProperties.getMapper());
				configureFeatures(builder, this.jacksonProperties.getParser());
				configureFeatures(builder, this.jacksonProperties.getGenerator());
				configureDateFormat(builder);
				configurePropertyNamingStrategy(builder);
				configureModules(builder);
				configureLocale(builder);
			}

			//more configure methods...
	}
}
```

**总结**：通过一系列的方法，最终构造一个生产级别可用的`ObjectMapper`对象，供在Spring Boot框架中对Java对象实现序列化与反序列化操作。

## 5.Jackson常见注解使用示例

> **备注**：本小结内容来源[https://www.baeldung.com/jackson-annotations](https://www.baeldung.com/jackson-annotations),如果工作中对于jackson的注解使用较少的情况下，可以看看该篇文章，是一个非常好的补充。

### 5.1 序列化

#### 5.1.1 @JsonAnyGetter

`@JsonAnyGetter`注解运行可以灵活的使用`Map`类型的作为属性字段

实体类如下：

```java
public class ExtendableBean {

    public String name;
    private Map<String, String> properties;

    @JsonAnyGetter
    public Map<String, String> getProperties() {
        return properties;
    }

    public ExtendableBean(String name) {
        this.name = name;
        this.properties=new HashMap<String, String>();
    }


    public void add(String key,String value){
        this.properties.put(key,value);
    }
}
```

通过序列化该实体Bean，我们将会得到`Map`属性中的所有`Key`作为属性值，测试序列化代码如下：

```java
@Test
public void whenSerializingUsingJsonAnyGetter_thenCorrect()
  throws JsonProcessingException {
 
    ExtendableBean bean = new ExtendableBean("My bean");
    bean.add("attr1", "val1");
    bean.add("attr2", "val2");

    String result = new ObjectMapper().writeValueAsString(bean);
 
    assertThat(result, containsString("attr1"));
    assertThat(result, containsString("val1"));
}
```

最终输出结果如下：

```json
{
    "name":"My bean",
    "attr2":"val2",
    "attr1":"val1"
}
```

如果不使用`@JsonAnyGetter`注解，那么最终序列化结果将会在`properties`属性下面，结果如下：

```json
{
    "name": "My bean",
    "properties": {
        "attr2": "val2",
        "attr1": "val1"
    }
}
```

#### 5.1.2 @JsonGetter

`@JsonGetter`注解是一个替代`@JsonProperty`的注解，可以将一个方法标注为`getter`方法

例如下面的示例中，我们通过注解`@JsonGetter`将方法`getTheName()`作为属性`name`的`getter`方法

```java
public class MyBean {
    public int id;
    private String name;

    @JsonGetter("name")
    public String getTheName() {
        return name;
    }
}
```

#### 5.1.3 @JsonPropertyOrder

可以通过使用`@JsonPropertyOrder`注解来指定属性的序列化顺序

实体bean定义如下：

```java
@JsonPropertyOrder({ "name", "id" })
public class MyBean {
    public int id;
    public String name;
}
```

最终序列化结果为：

```json
{
    "name":"My bean",
    "id":1
}
```

也可以通过`@JsonPropertyOrder(alphabetic=true)`来指定按照字母排序，那么响应结果将是：

```json
{
    "id":1,
    "name":"My bean"
}
```

#### 5.1.4 @JsonRawValue

`@JsonRawValue`注解可以指定字符串属性类为json，如下代码：

```java
public class RawBean {
    public String name;

    @JsonRawValue
    public String json;
}
```

创建`RawBean`的示例，给属性`json`赋值,代码如下：

```java
 RawBean bean = new RawBean("My bean", "{\"attr\":false}");

String result = new ObjectMapper().writeValueAsString(bean);
```

最终序列化结果如下：

```json
{
    "name":"My bean",
    "json":{
        "attr":false
    }
}
```

#### 5.1.5 @JsonValue

`@JsonValue`注解主要用于序列化整个实例对象的单个方法，例如，在一个枚举类中，`@JsonValue`注解进行标注，代码如下：

```java
public enum  TypeEnumWithValue {
    TYPE1(1, "Type A"), TYPE2(2, "Type 2");

    private Integer id;
    private String name;

    TypeEnumWithValue(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    @JsonValue
    public String getName() {
        return name;
    }
}
```

测试代码如下：

```java
String enumAsString = new ObjectMapper()
                .writeValueAsString(TypeEnumWithValue.TYPE1);
System.out.println(enumAsString);
```

最终通过序列化代码得到的结果将是：

```text
"Type A"
```

#### 5.1.6 @JsonRootName

`@JsonRootName`注解旨在给当前序列化的实体对象加一层包裹对象。

举例如下：

```java
//RootUser.java
public class RootUser {

    private String name;
    private String title;

    public RootUser(String name, String title) {
        this.name = name;
        this.title = title;
    }
    
 	//getter and setters  
}
```

在上面的实体类中，正常情况下，如果要序列号`RootUser`对象，其结果格式为：

```json
{
    "name": "name1",
    "title": "title1"
}
```

在`RootUser`加上`@JsonRootName`注解后，该类改动如下：

```java
//RootUser.java
@JsonRootName(value = "root")
public class RootUser {

    private String name;
    private String title;

    public RootUser(String name, String title) {
        this.name = name;
        this.title = title;
    }
    
 	//getter and setters  
}
```

启用`ObjectMapper`对象的`WRAP_ROOT_VALUE`特性，测试代码如下：

```java
ObjectMapper objectMapper=new ObjectMapper();
objectMapper.enable(SerializationFeature.WRAP_ROOT_VALUE);
String result=objectMapper.writeValueAsString(new RootUser("name1","title1"));
```

最终序列化JSON结果如下：

```json
{
    "root": {
        "name": "name1",
        "title": "title1"
    }
}
```

#### 5.1.7 @JsonSerialize

`@JsonSerialize`注解允许开发者自定义序列化实现,来看代码实现

```java
public class EventWithSerializer {
    public String name;

    @JsonSerialize(using = CustomDateSerializer.class)
    public Date eventDate;
    
    public Date publishDate;
    
    //getter and setter...
}
```

在上面的代码中，针对`eventDate`字段，我们通过使用`@JsonSerialize`注解，自定义了一个序列化实现类`CustomDateSerializer`,该类实现如下：

```java
//CustomDateSerializer.java
public class CustomDateSerializer extends StdSerializer<Date> {

    private static SimpleDateFormat formatter 
      = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");

    public CustomDateSerializer() { 
        this(null); 
    } 

    public CustomDateSerializer(Class<Date> t) {
        super(t); 
    }

    @Override
    public void serialize(
      Date value, JsonGenerator gen, SerializerProvider arg2) 
      throws IOException, JsonProcessingException {
        gen.writeString(formatter.format(value));
    }
}
```

最终序列化的结果格式如下：

```json
{
    "name": "名称",
    "eventDate": "24-03-2021 06:14:32",
    "publishDate": 1616580872574
}
```

从结果我们可以得知，针对某个特定的字段序列化的方式，我们可以完全自定义，非常的方便。

### 5.2 反序列化

#### 5.2.1 @JsonCreator

`@JsonCreator`配合`@JsonProperty`注解能到达在反序列化实体对象时，指定不变更属性名称的效果

例如有如下JSON:

```json
{
    "id":1,
    "theName":"My bean"
}
```

在实体类中，我们没有属性名称是`theName`，但我们想把`theName`属性反序列化时赋值给`name`，此时实体类对象结构如下：

```java
public class BeanWithCreator {
    public int id;
    public String name;

    @JsonCreator
    public BeanWithCreator(
      @JsonProperty("id") int id, 
      @JsonProperty("theName") String name) {
        this.id = id;
        this.name = name;
    }
}
```

在`BeanWithCreator`的构造函数中添加`@JsonCreator`注解，并且配合`@JsonProperty`注解进行属性指向，最终反序列化代码如下：

```java
@Test
public void whenDeserializingUsingJsonCreator_thenCorrect()
  throws IOException {
 
    String json = "{\"id\":1,\"theName\":\"My bean\"}";

    BeanWithCreator bean = new ObjectMapper()
      .readerFor(BeanWithCreator.class)
      .readValue(json);
    assertEquals("My bean", bean.name);
}
```

#### 5.2.2 @JacksonInject

`@JacksonInject`注解可以指定反序列化对象时，属性值不从来源JSON获取，而从`injection`中获取

实体类如下：

```java
public class BeanWithInject {
    @JacksonInject
    public int id;
    
    public String name;
}
```

反序列化代码

```java
@Test
public void whenDeserializingUsingJsonInject_thenCorrect()
  throws IOException {
 
    String json = "{\"name\":\"My bean\"}";
    
    InjectableValues inject = new InjectableValues.Std()
      .addValue(int.class, 1);
    BeanWithInject bean = new ObjectMapper().reader(inject)
      .forType(BeanWithInject.class)
      .readValue(json);
    
    assertEquals("My bean", bean.name);
    assertEquals(1, bean.id);
}
```

#### 5.2.3 @JsonAnySetter

`@JsonAnySetter`和`@JsonAnyGetter`注解意思一致，只不过是针对序列化与反序列化而言，`@JsonAnySetter`注解可以将来源JSON最终转化为`Map`类型的属性结构

实体代码如下：

```java
public class ExtendableBean {
    public String name;
    private Map<String, String> properties;

    @JsonAnySetter
    public void add(String key, String value) {
        properties.put(key, value);
    }
}
```

JSON源如下：

```json
{
    "name":"My bean",
    "attr2":"val2",
    "attr1":"val1"
}
```

通过`@JsonAnySetter`的注解标注，最终`attr1`及`attr2`的值将会添加到`properties`的Map对象中

示例代码如下：

```java
@Test
public void whenDeserializingUsingJsonAnySetter_thenCorrect()
  throws IOException {
    String json
      = "{\"name\":\"My bean\",\"attr2\":\"val2\",\"attr1\":\"val1\"}";

    ExtendableBean bean = new ObjectMapper()
      .readerFor(ExtendableBean.class)
      .readValue(json);
    
    assertEquals("My bean", bean.name);
    assertEquals("val2", bean.getProperties().get("attr2"));
}
```

#### 5.2.4 @JsonSetter

`@JsonSetter`注解是`@JsonProperty`的替代注解，用于标注该方法为`setter`方法

当我们需要读取一些JSON数据时，但是目标实体类与该数据不完全匹配是，该注解是非常有用的。

示例代码如下：

```java
public class MyBean {
    public int id;
    private String name;

    @JsonSetter("name")
    public void setTheName(String name) {
        this.name = name;
    }
}
```

通过指定`setTheName`作为属性`name`的`setter`方法，反序列化时可以达到最终效果

示例如下：

```java
@Test
public void whenDeserializingUsingJsonSetter_thenCorrect()
  throws IOException {
 
    String json = "{\"id\":1,\"name\":\"My bean\"}";

    MyBean bean = new ObjectMapper()
      .readerFor(MyBean.class)
      .readValue(json);
    assertEquals("My bean", bean.getTheName());
}
```

#### 5.2.5 @JsonDeserialize

`@JsonDeserialize`注解和序列化注解`@JsonSerialize`的效果是一致的，作用与反序列化时，针对特定的字段，存在差异化的发序列化效果

```java
public class EventWithSerializer {
    public String name;

    @JsonDeserialize(using = CustomDateDeserializer.class)
    public Date eventDate;
}
```

`CustomDateDeserializer`代码如下：

```java
public class CustomDateDeserializer
  extends StdDeserializer<Date> {

    private static SimpleDateFormat formatter
      = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");

    public CustomDateDeserializer() { 
        this(null); 
    } 

    public CustomDateDeserializer(Class<?> vc) { 
        super(vc); 
    }

    @Override
    public Date deserialize(
      JsonParser jsonparser, DeserializationContext context) 
      throws IOException {
        
        String date = jsonparser.getText();
        try {
            return formatter.parse(date);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }
}
```

最终，反序列化JSON，时，得到`eventDate`字段，测试代码如下：

```java
@Test
public void whenDeserializingUsingJsonDeserialize_thenCorrect()
  throws IOException {
 
    String json
      = "{"name":"party","eventDate":"20-12-2014 02:30:00"}";

    SimpleDateFormat df
      = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
    EventWithSerializer event = new ObjectMapper()
      .readerFor(EventWithSerializer.class)
      .readValue(json);
    
    assertEquals(
      "20-12-2014 02:30:00", df.format(event.eventDate));
}
```

#### 5.2.6 @JsonAlias

`@JsonAlias`注解作用于可以指定一个别名与JSON数据中的字段进行对于，最终反序列化时，能将该值最终反序列化时赋值给对象

实体如下：

```java
public class AliasBean {
    @JsonAlias({ "fName", "f_name" })
    private String firstName;   
    private String lastName;
}
```

上面的代码中，`firstName`字段通过`@JsonAlias`注解指定了两个别名字段，意思是反序列化时可以从JSON中读取`fName`或者`f_name`的值赋值到`firstName`中

测试代码如下：

```java
@Test
public void whenDeserializingUsingJsonAlias_thenCorrect() throws IOException {
    String json = "{\"fName\": \"John\", \"lastName\": \"Green\"}";
    AliasBean aliasBean = new ObjectMapper().readerFor(AliasBean.class).readValue(json);
    assertEquals("John", aliasBean.getFirstName());
}
```

### 5.3 属性注解

#### 5.3.1 @JsonIgnoreProperties

使用`@JsonIgnoreProperties`注解作用于class级别中可以达到在序列化时忽略一个或多个字段的效果

实体代码如下：

```java
@JsonIgnoreProperties({ "id" })
public class BeanWithIgnore {
    public int id;
    public String name;
}
```

最终在序列化`BeanWithIgnore`实体对象时，字段`id`将会被忽略

#### 5.3.2 @JsonIgnore

`@JsonIgnore`注解作用与属性级别中，在序列化时可以忽略该字段

实体代码如下：

```java
public class BeanWithIgnore {
    @JsonIgnore
    public int id;

    public String name;
}
```

最终在序列化`BeanWithIgnore`实体对象时，字段`id`将会被忽略

#### 5.3.3 @JsonIgnoreType

`@JsonIgnoreType`指定忽略类型属性

```java
public class User {
    public int id;
    public Name name;

    @JsonIgnoreType
    public static class Name {
        public String firstName;
        public String lastName;
    }
}
```

在上面的示例中，类型`Name`将会被忽略

#### 5.3.4 @JsonInclude

使用`@JsonInclude`注解可以排除属性值中包含`empty/null/default`的属性

```java
@JsonInclude(Include.NON_NULL)
public class MyBean {
    public int id;
    public String name;
}
```

在`MyBean`中使用了`Include.NON_NULL`则代表该实体对象序列化时不会包含空值

#### 5.3.5 @JsonAutoDetect

`@JsonAutoDetect`可以覆盖实体对象属性中的默认可见级别，比如私有属性可见与不可见

实体对象如下：

```java
public class PrivateBean {
    private int id;
    private String name;

    public PrivateBean(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
```

在`PrivateBean`中，没有给属性字段`id`、`name`设置公共的`getter`方法，此时，如果我们如果直接对该实体对象进行序列化时，jackson会提示错误

```log
Exception in thread "main" com.fasterxml.jackson.databind.exc.InvalidDefinitionException: No serializer found for class com.xiaoymin.boot.action.jackson.model.PrivateBean and no properties discovered to create BeanSerializer (to avoid exception, disable SerializationFeature.FAIL_ON_EMPTY_BEANS)
```

我们修改`PrivateBean`中的代码，增加`@JsonAutoDetect`注解，代码如下：

```java
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class PrivateBean {
    private int id;
    private String name;

    public PrivateBean(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
```

此时，在序列化该实体对象，将会得到响应结果

```java
PrivateBean bean = new PrivateBean(1, "My bean");
String result = new ObjectMapper().writeValueAsString(bean);
System.out.println(result);
```

### 5.4 常规注解

#### 5.4.1 @JsonProperty

我们可以添加`@JsonProperty`批注以在JSON中指示属性名称。

当实体对象中没有标准的`getter/setter`方法时，我们可以使用该注解进行指定属性名称已方便jackson框架进行序列化/反序列化

```java
public class MyBean {
    public int id;
    private String name;

    @JsonProperty("name")
    public void setTheName(String name) {
        this.name = name;
    }

    @JsonProperty("name")
    public String getTheName() {
        return name;
    }
}
```

#### 5.4.2 @JsonFormat

针对日期字段可以通过使用`@JsonFormat`注解进行格式化输出

```java
public class EventWithFormat {
    public String name;

    @JsonFormat(
      shape = JsonFormat.Shape.STRING,
      pattern = "dd-MM-yyyy hh:mm:ss")
    public Date eventDate;
}
```

#### 5.4.3 @JsonUnwrapped

`@JsonUnwrapped`注解可以指定jackson框架在序列化/反序列化时是否需要对该字段进行`wrapped`操作

示例代码：

```java
public class UnwrappedUser {
    public int id;

    @JsonUnwrapped
    public Name name;
    
    //getter and setter...

    public static class Name {
        public String firstName;
        public String lastName;
        //getter and setter
    }
}
```

通过注解`@JsonUnwrapped`标注`name`属性，最终序列化该对象时，会和正常情况下有所区别

```java
UnwrappedUser.Name name = new UnwrappedUser.Name("John", "Doe");
UnwrappedUser user = new UnwrappedUser(1, name);

String result = new ObjectMapper().writeValueAsString(user);
```

我们得到的结果如下：

```json
{
    "id": 1,
    "firstName": "John",
    "lastName": "Doe"
}
```

#### 5.4.4 @JsonView

通过`View`的方式来指定序列化/反序列化时是否包含属性

示例代码如下：

`View`定义

```java
public class Views {
    public static class Public {}
    public static class Internal extends Public {}
}
```

实体代码：

```java
public class Item {
    @JsonView(Views.Public.class)
    public int id;

    @JsonView(Views.Public.class)
    public String itemName;

    @JsonView(Views.Internal.class)
    public String ownerName;
    //getter and setter..

}
```

最终序列化代码示例：

```java
Item item = new Item(2, "book", "John");

String result = new ObjectMapper().writerWithView(Views.Public.class).writeValueAsString(item);
System.out.println(result);
```

最终序列化结果输出：

```json
{"id":2,"itemName":"book"}
```

## 
