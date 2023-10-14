---
layout: post
title: 前后端分离方案探索
categories: Blog
description: 前后端分离方案探索
keywords: 前后端分离,Jsonp,nginx
---

## 背景

目前我们组开发的所有官网咨询类项目，开发方式全部是采用调用后端Java RestfulApi接口，然后ajax渲染页面,这种开发方式就功能而言，是没有任何问题的，但在SEO这方面，ajax不是很友好，又因为是官网这种性质的网站，SEO无可避免的会被提及，所以目前考虑的技术方案是既要保证在满足解决SEO的大前提下，又不会破坏我们目前的开发方式，对我们开发模式影响降到最低,发挥前后端开发人员的开发效率

## 解决方案

在希望前后端开发模式变动很小的前提下，引入nodejs技术，前端负责URL Design，并写路由控制，原来ajax异步调用的方式，多加一层MVC层中的C层代码，访问方式变成同步访问

前端的同学们现在要开始学习nodejs了！！！

以后官网的开发基本都会走这种开发模式，wap、微信类还是可以继续保留老的方式，不走nodejs

## 示例

![](/images/blog/back-front-explore/1.png)

## 技术架构

设计架构图如下：

![](/images/blog/back-front-explore/2.png)

Nginx：web服务器

Node1: 前端nodejs应用服务器，通过nginx负载均衡，可以代理多台nodejs应用

Java Restful Api:Java后端接口服务器，前端nodejs调用接口获取数据

Redis：后期用到，所有session会话存入session，前端获取用户资料不在从Java接口获取，而是直接调用Redis获取当前会话值，Java后端提供接口供node接口调用将用户session值存入Redis数据库中

## 技术参考

下面几篇博客很有参考意义,大家可以看下

1.[图解基于Node.js实现前后端分离](http://web.jobbole.com/85886/)

2.[前后端分离的思考与实践（一）](http://blog.jobbole.com/65513/?repeat=w3tc)

3.[前后端分离的思考与实践（二）](http://blog.jobbole.com/65534/?repeat=w3tc)

4.[前后端分离的思考与实践（三）](http://blog.jobbole.com/65541/)

5.[前后端分离的思考与实践（四）](http://blog.jobbole.com/71661/?repeat=w3tc)

6.[前后端分离的思考与实践（五）](http://blog.jobbole.com/71665/?repeat=w3tc)

7.[关于大型网站技术演进的思考（十四）--网站静态化处理—前后端分离—上（6）](http://www.cnblogs.com/sharpxiajun/p/4300441.html)

8.[关于大型网站技术演进的思考（十五）--网站静态化处理—前后端分离—中（7）](http://www.cnblogs.com/sharpxiajun/p/4304526.html)

9.[关于大型网站技术演进的思考（十六）--网站静态化处理—前后端分离—下（8）](http://www.cnblogs.com/sharpxiajun/p/4307203.html)

10.[关于大型网站技术演进的思考（十七）--网站静态化处理—满足静态化的前后端分离（9）](http://www.cnblogs.com/sharpxiajun/p/4307739.html)

 