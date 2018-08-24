---
layout: post
title: node.js应用Linux安装部署
categories: NodeJs
description: node.js应用Linux安装部署
keywords: nodejs安装
---

## 目的

在Linux服务器部署node应用参考文档

## 部署

### 下载

首先去node.js官网下载node的安装包，官网地址：<https://nodejs.org/en/download/>

，下载tar.gz源码格式包

![img](/images/blog/nodejs-install-linux/clip_image002.jpg)

### 环境

node的安装需要依赖gcc、g++等底层命令,安装node.js的新版本对gcc等命令的版本要求也不一样，这里v6.10.2所依赖的gcc 需要v4.8以上，低于这个版本安装不成功

![img](/images/blog/nodejs-install-linux/clip_image004.jpg)

### 安装

执行以下命令,如果出现命令不存在的错误,需要安装或更新相关系统命令，然后再执行.

```shell
tar -xvf node-v6.10.1.tar.gz

./configure

make && make install
```

### 配置环境变量

按照上面默认安装,一般node.js会产生两个主要命令，命令默认在/usr/local/bin目录下，如果该目录配置在/etc/profile，则无需配置

node：node.js的核心命令，运行js的node服务

npm：node.js依赖包安装命令,node的第三方依赖都可以通过npm来安装

配置方法：

```shell
vim /etc/profile
```

追加node的环境

```shell
export PATH=/usr/local/bin:$PATH
```

profile生效

```shell
source /etc/profile
```

### 验证

在终端指向命令,验证node是否安装成功,返回表示安装成功，提示node命令不存在则是环境变量配置不正确

```shell
node -v
```



![img](/images/blog/nodejs-install-linux/clip_image005.png)

 

### 安装淘宝镜像

因为npm安装命令连接的是国外服务器，我们使用npm安装node的依赖时候速度可能会非常慢,所以使用国内淘宝提供的cnpm来代替

参考文档：<https://npm.taobao.org/>

安装命令：

```shell
npm install -g cnpm--registry=https://registry.npm.taobao.org
```

### 安装pm2

PM2 是一个带有负载均衡功能的 Node 应用的进程管理器。

当你要把你的独立代码利用全部的服务器上的所有 CPU，并保证进程永远都活着，0 秒的重载， PM2 是完美的。它非常适合 IaaS 结构，但不要把它用于 PaaS 方案（随后将开发 Paas 的解决方案）。

备注：

- SaaS、PaaS 和 IaaS 是云服务模式
- SaaS 软件即服务，例如 Google 的 Gmail 邮箱服务，面向应用型用户
- PaaS 平台即服务，例如 Google 的 GAE，面向开发型用户
- IaaS 基础架构即服务，例如亚马逊的 AWS，IaaS 对于不知道新推出的应用程序/网站会有多成功的创业公司来说非常有用

这里推荐使用pm2 启动node.js应用服务,相对于node本身命令,稳定,适合在服务器上部署

参考文档：<http://pm2.keymetrics.io/docs/usage/quick-start/>

安装

```
cnpm install -g pm2
```

### 启动服务

一般node.js应用在Linux部署是不部署node_modules文件夹的，在线安装依赖，每个node.js应用都有package.json文件，该文件保存了node应用所依赖的各个组件，切到该目录执行命令cnpm install

该命令执行后会自动安装依赖组件,并生成node_modules文件夹

使用pm2来启动命令

![img](/images/blog/nodejs-install-linux/clip_image009.jpg)

 

node的端口一般都会在启动js里面配置,可以使用vim命令对端口进行修改

### nginx配置

node.js相当于java的服务，是类似于APP端的客户端程序，目前Java所承担的是接口服务的角色,所以不需要对外公开服务，只需要公开node的服务即可

![img](/images/blog/nodejs-install-linux/clip_image011.jpg)