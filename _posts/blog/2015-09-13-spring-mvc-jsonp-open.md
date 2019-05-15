---
layout: post
title: 个人开源作品：Spring MVC 关于jsonp跨域处理
categories: 开源
description: 个人开源作品：Spring MVC 关于jsonp跨域处理
keywords: jsonp
---


1、新建JsonpAdvice控制器增强继承org.springframework.web.servlet.mvc.method.annotation.AbstractJsonpResponseBodyAdvice类

```java
 package com.drore.jsonp.advice;

  import org.springframework.web.bind.annotation.ControllerAdvice;
  import org.springframework.web.servlet.mvc.method.annotation.AbstractJsonpResponseBodyAdvice;

  @ControllerAdvice
  public class JsonpAdvice extends AbstractJsonpResponseBodyAdvice{
  	public JsonpAdvice() {
  		super("callback","jsonp");
  	}
  }
```

2、所有controller类使用@RestController注解

```java
package com.drore.jsonp.controller;
  
  import java.util.ArrayList;
  import java.util.HashMap;
  import java.util.List;
  import java.util.Map;
  
  import org.springframework.web.bind.annotation.RequestMapping;
  import org.springframework.web.bind.annotation.RestController;
  
  @RestController
  public class HomeController {

  
  	@RequestMapping(value="/render.json")
  	public List<Map<String, Object>> render(){
  		List<Map<String, Object>> list=new ArrayList<Map<String,Object>>();
  		for (int i = 0; i < 10; i++) {
  			Map<String, Object> map=new HashMap<String, Object>();
  			map.put("userName", "张三"+i);
  			map.put("sex", "男");
  			map.put("phone", "1598723212"+i);
  			list.add(map);
  		}
  		return list;
  	}
  }
```
3、jQuery跨域调用：

```javascript
 $.ajax({
  	url:'http://localhost:9090/render.json',
  	dataType:'jsonp',
  	success:function(data){
  		console.log(data)
  	}
  })

  //返回json数据
  jQuery162036356921307742596_1442105501105([
      {
          "phone": "15987232120",
          "sex": "男",
          "userName": "张三0"
      },
     //......
  ]);
```



**相关链接**

- jsonp 的详细介绍：[点击查看](https://gitee.com/xiaoym/jsonp)
- jsonp 的下载地址：[点击下载](https://gitee.com/xiaoym/jsonp/releases)
