---
layout: post
title: Linux部署规范
categories: Linux
description: Linux部署规范
keywords: linux部署
---

# 前言

目前我们组主要以官网、微信、wap、app居多，目前前端大多使用路由相关的技术框架，例如backbone、vue等，通过ajax调用后端接口，实现页面交互，所以所有的访问url连接都是前端的规范地址，开发阶段已经实现了前后端分离，但目前在部署方面，还没有真正实现，以前的部署都是只部署一台tomcat，前端html页面后端接口部署在一起，这样会存在多种弊端，在后期如果要做负载的情况下，不易扩展，后端更新接口不方便，有可能会对前端的代码有影响

## 目的

真正实现前后端分离，前端界面、后端接口通过该套程序规范，达到分离效果

## 结构图

![](/images/blog/deploy-standard-linux/clip_image001.png)

访问者访问前端提供的url，所有的静态（html、css、jpg等）文件通过nginx直接处理，响应给用户，调用接口部分，通过nginx配置接口反向代理地址，后端接口可以做负载，缓解一台服务器压力，提高程序响应速度，这样做的好处：

1、 nginx在静态文件的处理能力上和tomcat不是同一个级别的，1000个并发完全不是问题，tomcat默认使用socket处理，高并发的情况下会造成io阻塞，线程一直等待 

2、 方便后端接口做负载，提高程序并发、吞吐量

## 部署组件

1.Nginx1.9.5 以上

2.Tomcat8以上

### nginx说明

Nginx主要是提供给前端部署静态文件使用，**前端以后所有的访问路径不在部署在tomcat服务器里面**，通过静态目录的方式直接访问html，附上nginx服务器配置

![](/images/blog/deploy-standard-linux/clip_image002.png) 

上图中细红线框部分是linux上静态目录，前端所有文件全部放在该目录下，命名规则/home/drore/kaifayizu/${project_name}

这里首先要查看服务器硬盘情况，有时候可能不是home目录，在linxu使用dh -f命令查看服务器硬盘情况，如下图：

![](/images/blog/deploy-standard-linux/clip_image003.png)

根据avail空闲硬盘情况，决定在哪个目录建立drore/kaifayizu/${project_name}目录

在nginx配置那种图中，粗红框部分是我们后端的接口反向代理地址，该接口可以部署在和nginx同一台机器，也可以是别个机器

所以最终我们所有的接口访问地址是和前端的访问url保持一致的，都是通过nginx反向代理的，这点非常重要，这种模式可以让我们抛弃jsonp跨域模式

**更多的nginx配置参数情况请自己百度学习**

### Tomcat8

​       为什么使用tomcat8？主要是考虑tomcat8是支持nio的方式的，是一种io非阻塞的处理方式，能提高接口性能，只是需要我们修改tomcat中的server.xml配置文件，以后所有的部署配置文件都必须修改如下方式：

1、 修改默认方式，改成nio（org.apache.coyote.http11.Http11Nio2Protocol）的方式，并且加encoding参数为utf-8

 ![](/images/blog/deploy-standard-linux/clip_image004.png)

2、 修改自动解压包文件等参数为false

 ![](/images/blog/deploy-standard-linux/clip_image005.png)

 

目前主要是以上这2点，以后有新的参数配置提升程序性能等会后续补上