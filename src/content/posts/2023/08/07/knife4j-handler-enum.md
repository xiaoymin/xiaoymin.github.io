---
title: "枚举烦恼终结!在Knife4j文档中如何优雅的处理枚举类型的展示及调试问题"
description: "枚举烦恼终结!在Knife4j文档中如何优雅的处理枚举类型的展示及调试问题"
pubDatetime: 2023-08-07T00:00:00+08:00
tags:
  - "Knife4j"
keywords:
  - "枚举处理"
  - "knife4j枚举展示"
  - "knife4j枚举调试"
  - "knife4j枚举"
canonicalURL: "https://www.xiaominfo.com/2023/08/07/knife4j-handler-enum/"
---

本文主要介绍在Knife4j中如何处理枚举，主要包含两个方面：

- 通过技术手段，将枚举的value值以及描述在文档界面进行呈现，完善接口信息展示
- 能通过Knife4j的调试功能针对枚举参数快速调试。

关联Issues：

- ✅ [枚举类参数value和desc的注释](https://github.com/xiaoymin/knife4j/issues/605)
- ✅ [4.1.0版本下，枚举类@ToString方法自定义可用值和@JsonValue注解不兼容](https://gitee.com/xiaoym/knife4j/issues/I7EKIL#note_20334444)
- ......

🏖️ 本文仓库：[knife4j-handler-enum](https://github.com/xiaoymin/knife4j-demo/tree/master/knife4j-handler-enum)

## 需求场景分析

通常我们在定义枚举时，不管是简单的枚举定义，或者枚举类中包含多种属性，在Swagger或者springdoc的界面中，都只能通过枚举的`name`属性进行展示，

例如如下枚举类:

```javascript
@AllArgsConstructor
@Getter
public enum CourseType {

    MATH(1,"数学"),
    ENGLISH(2,"英语"),
    CHINESE(3,"语文"),
    COMPUTER(4,"计算机");

    /**
     * 课程编码
     */
    final int code;
    /**
     * 课程标签
     */
    final String label;

}

```

最终在文档页面展示效果如下图：

![图1.Knife4j中常规枚举展示效果](/images/blog/handler-enum/enum-common.jpg)

:::danger 问题

这种效果可能无法满足我们的要求，主要是我们提供给外部调用我们的接口文档的开发者，如果我们的枚举`name`属性定义的通俗易懂，那么是没有问题，如果有其他的场景定义，那么只通过`name`属性是很难达到文档解释清楚的

对于文档中，开发者可能更希望将枚举说代表的`label`意义在文档中进行展示，这对于接口对接人员可以一目了然清楚枚举的最终定义和说明

:::

## 解决方案

对于枚举类型展示明细的`description`,最简单的方案就是重写枚举类的`toString`方法，开发者可以将枚举的字典定义以及description描述信息统一在该方法中进行重写输出

示例代码如下：

```javascript
@AllArgsConstructor
@Getter
public enum CourseType {

    MATH(1,"数学"),
    ENGLISH(2,"英语"),
    CHINESE(3,"语文"),
    COMPUTER(4,"计算机");

    /**
     * 课程编码
     */
    final int code;
    /**
     * 课程标签
     */
    final String label;

    @Override
    public String toString() {
        return this.name()+":"+this.label;
    }
}
```

我们通过重写`toString`方法，将枚举的`name`属性和`label`属性进行拼接，label属性一般将我们该枚举说要展示的意思描述清楚，知道该枚举类说代表的意思。

在Ui中最终效果展示如下：

![图2.Knife4j中枚举重写toString展示效果](/images/blog/handler-enum/enum-json.jpg)

我们虽然解决了文档展示问题，但是又会带来新的问题,如果我们的请求是form的情况下，在调试时，枚举类型参数选择下拉框，枚举类参数下拉框的值也会随之变成value - desc，导致传参异常：

报错信息（数据绑定异常）：

```log
2023-08-07T20:04:35.640+08:00  WARN 40180 --- [io-19001-exec-8] .w.s.m.s.DefaultHandlerExceptionResolver : Resolved [org.springframework.web.bind.MethodArgumentNotValidException: Validation failed for argument [0] in public org.springframework.http.ResponseEntity<com.xiaominfo.knife4j.core.CourseInfo> com.xiaominfo.knife4j.rest.EnumRestController.form(com.xiaominfo.knife4j.core.CourseInfo): [Field error in object 'courseInfo' on field 'courseType': rejected value [2]; codes [typeMismatch.courseInfo.courseType,typeMismatch.courseType,typeMismatch.com.xiaominfo.knife4j.core.CourseType,typeMismatch]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [courseInfo.courseType,courseType]; arguments []; default message [courseType]]; default message [Failed to convert property value of type 'java.lang.String' to required type 'com.xiaominfo.knife4j.core.CourseType' for property 'courseType'; Failed to convert from type [java.lang.String] to type [@io.swagger.v3.oas.annotations.media.Schema com.xiaominfo.knife4j.core.CourseType] for value [2]]] ]

```

如[issues:枚举类参数value和desc的注释](https://github.com/xiaoymin/knife4j/issues/605)中反馈的一样
> ⚠️ 该问题在swagger2规范下会复现，openapi3存在解析问题，但是调试问题依然存在

![图3.Knife4j中枚举调试下拉框](/images/blog/handler-enum/enum-form.png)

那么，如何解决调试问题呢?

## 数据调试

我们在解决这样的场景时，需要要考虑到两种不同接口在Spring Boot框架中的参数赋值情况，主要是：

- `application/x-www-form-urlencoded`:基于表单请求的方式，Spring Boot框架针对提交的请求参数主要通过`WebDataBinder`组件实现提交参数的数据转换、绑定、格式化等处理操作
- `application/json`:而对于JSON提交的接口参数，对于数据的转换这主要依赖于数据的反序列化

这两种方式对于springdoc-openapi处理也是一样，会存在不同的差异，开发者需要分开进行处理。

接下来就针对这这两种不同的接口场景，对于枚举类型展示明细的`description`提供不同的处理方案

### 表单请求

针对表单请求，我们需要为`WebDataBinder`组件单独提供枚举类的数据绑定逻辑，通过实现`PropertyEditorSupport`接口，并且在Spring Boot框架中Controller增强为`WebDataBinder`初始化不同枚举类的数据绑定。

考虑到在实际项目中的通用解决方案(为每个枚举提供数据绑定解析),抽象一个通用接口

```javascript
public interface CommonFormEnumParser<T extends Enum<T>> {

    /**
     * Realize the instantiation of the enumeration according to the input input
     * @param input input character
     * @return enumeration instance
     */
    T fromValue(String input);
}


```

我们在枚举类中实现该接口，提供根据外部数据进行枚举实例对象转换的方法，如下：

```javascript
@Slf4j
@AllArgsConstructor
@Getter
public enum CourseType implements CommonFormEnumParser<CourseType> {

    MATH(1,"数学"),
    ENGLISH(2,"英语"),
    CHINESE(3,"语文"),
    COMPUTER(4,"计算机");

    /**
     * 课程编码
     */
    final int code;
    /**
     * 课程标签
     */
    final String label;

    @Override
    public String toString() {
        return this.name()+":"+this.label;
    }

    @Override
    public CourseType fromValue(String input) {
        log.info("input:{}",input);
        for (CourseType courseType : CourseType. values()) {
            // 根据规则自定义实现
            if (input.startsWith(Objects.toString(courseType))||input.equalsIgnoreCase(courseType.name())) {
                return courseType;
            }
        }
        throw new IllegalArgumentException("Invalid CourseType value: " + input);
    }
}

```

根据反射class创建一个默认的PropertyEditorSupport实现，代码如下：

```javascript
@AllArgsConstructor
public class GenericEnumPropertySupport <T extends Enum<T>> extends PropertyEditorSupport {
    final Class<T> enumClass;

    @Override
    public void setAsText(String text) throws IllegalArgumentException {
        if (enumClass.isEnum()){
            //必须是枚举
            if (CommonFormEnumParser.class.isAssignableFrom(enumClass)){
                T[] values=enumClass.getEnumConstants();
                if (values!=null&&values.length>0){
                    // 因为都实现了CommonFormEnumParser接口，随便取一个枚举元素都行
                    CommonFormEnumParser<T> one= (CommonFormEnumParser<T>) values[0];
                    setValue(one.fromValue(text));
                }
            }
        }
    }
}

```

最后通过Spring框架提供的Advice增强注入到框架中，实现@InitBinder绑定逻辑

```javascript
@RestControllerAdvice
public class GlobalRestAdvice {

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        //这里可以做成scan扫描包的方式，扫描所有枚举类，然后分批注入，或者其他的方式也行，看自己项目的规则
        binder.registerCustomEditor(CourseType.class,new GenericEnumPropertySupport<>(CourseType.class));
    }

}
```

由于我们自定义了枚举的初始化数据绑定方法，逻辑是：`名称相等或者和name匹配`

```javascript
if (input.startsWith(Objects.toString(courseType))||input.equalsIgnoreCase(courseType.name())) {
    return courseType;
}
```

此时，我们在form表单接口提交请求时，对于枚举的类型，就可以参考常规的方案，提交枚举的name进行调试，如下图：

![图4.Knife4j中枚举调试form](/images/blog/handler-enum/enum-form-debug.jpg)

### JSON请求

而对于JSON的请求，就简单很多，我们在上面提过，JSON的数据绑定是在Spring Boot框架中是通过反序列化进行处理。

以框架中用jackson为例，首先需要更改枚举类的toString方法，通过@JsonValue注解将枚举的属性值列出来，以便文档展示，其次，反序列化时，提供反序列化的规则。

代码如下：

```javascript
@Slf4j
public class CourseTypeDeserializer   extends JsonDeserializer<CourseType> {
    @Override
    public CourseType deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
        log.info("des....");
        String input = jsonParser.getValueAsString();
        log.info("value:{}",input);
        for (CourseType courseType : CourseType.values()) {
            // 根据规则自定义实现
            if (input.startsWith(Objects.toString(courseType))||input.equalsIgnoreCase(courseType.name())) {
                return courseType;
            }
        }
        throw new IllegalArgumentException("Invalid CourseType value: " + input);
    }
}
```

并且在枚举类中通过注解`@JsonDeserialize`强指定反序列化规则

```javascript
@Slf4j
@AllArgsConstructor
@Getter
@JsonDeserialize(using = CourseTypeDeserializer.class)
public enum CourseType implements CommonFormEnumParser<CourseType> {

    //others...
}

```

## 总结

以上就是针对枚举在Knife4j中通过文档展示以及Debug调试的通用方案分享，对于代码中枚举的反序列化以及通过`WebDataBinder`组件进行数据绑定的操作，本文只是提供了一个思路方案，开发者可以在本文基础上进行扩展优化

例如对于所有枚举类的`scan`扫描class的方式，批量在`WebDataBinder`组件中进行添加，等等，希望本文能给开发者提供一个思路，开发者根据此内容举一反三，处理自己在实际项目中碰到的问题。

您有更多的想法或者建议，可以关注公众号"八一菜刀"，参与Knife4j的交流群进行沟通反馈，谢谢
