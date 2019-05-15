---
layout: post
title: 跨域请求,关于后端session会话丢失的解决办法
categories: Blog
description: 目前使用前后端分离的模式开发，后端提供跨域接口、前端jsonp调用，绑定数据，但是在该站点下有个人中心模块存在的情况下，服务端的session会话会被跨域请求覆盖改掉
keywords: 前后端分离,Jsonp,跨域，Session
---

目前使用前后端分离的模式开发，后端提供跨域接口、前端jsonp调用，绑定数据，但是在该站点下有个人中心模块存在的情况下，服务端的session会话会被跨域请求覆盖改掉

大家都知道tomcat使用cookie中jsessionid来区分客户端session会话

跨域请求接口恰恰有时候响应回来回改变该站点下的jsessionid值，导致服务器每次判断都是一个新的会话

以网站个人中心模块来说，每一个跨域jsonp请求，都会Response 一个cookie值，SET-COOKIE:JSESSIONID=XXXX,如下图：

![img](/images/blog/back-session-jsonp/613480-20161126132206971-116447523.jpg)

再看服务端，前端刷新一次也没，后端服务会话id都不是同一个sessionid，所有后端所有的请求都是未登录，这就导致前端发送的请求，后端无法拿到当前个人用户信息

![img](/images/blog/back-session-jsonp/613480-20161126132215659-1584803997.jpg) 

目前服务端部署都采用tomcat，所以修改办法是在conf/context.xml文件中，设置sessionId的cookieName别名，不和默认的jsessionid一直，如下：

![img](/images/blog/back-session-jsonp/613480-20161126132227534-436863016.jpg)

最终修改好后，再看服务器的cookie值，服务端使用session取的cookie值是刚刚设置的别名cookie值SHGJSESSIONID,所以不受跨域接口影响

![img](/images/blog/back-session-jsonp/613480-20161126132237190-1256360380.jpg)

最终服务端请求的session会话能保证是同一个，所以也能取到当前登录的个人信息

 ![img](/images/blog/back-session-jsonp/613480-20161126132245768-165100936.jpg)

更多tomcat参数设置值请参考  [tomcat-context参数值](http://tomcat.apache.org/tomcat-7.0-doc/config/context.html#Defining_a_context)