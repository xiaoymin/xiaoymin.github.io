---
layout: post
title: 跨语言跨平台聚合 OpenAPI 文档从来没有这么简单过
categories: Blog
description: 跨语言跨平台聚合 OpenAPI 文档从来没有这么简单过
keywords: Knife4j,Knife4jAggregation,OpenAPI
---

Knife4j一直致力于将目前的Ui提供给更多的平台或者别的语言使用而努力，经过这么长时间的发展，Knife4j提供的轻量级聚合中间件终于诞生了，自`2.0.8`版本开始，Knife4j提供了`knife4j-aggregation-spring-boot-starter`组件，该组件是一个基于Spring Boot系统的starter，他提供了以下几种能力：

- 最轻量级、最简单、最方便的聚合OpenApi规范的中间件
- 让所有的基于Spring Boot的Web体系拥有了轻松聚合OpenApi的能力
- 提供4种模式供开发者选择
    - 基于本地静态JSON文件的方式聚合OpenAPI
    - 基于云端HTTP接口的方式聚合
    - 基于Eureka注册中心的方式聚合
    - 基于Nacos注册中心的方式聚合
- 基于该starter发布了Docker镜像，跨平台与语言让开发者基于此Docker镜像轻松进行聚合OpenAPI规范 
- 完美兼容所有Spring Boot版本，没有兼容性问题
- 开发者可以彻底放弃基于Zuul、Spring Cloud Gateway等复杂的聚合方式
- 兼容OpenAPI2规范以及OpenAPI3规范

本文主要介绍5种模式来使用Knife4j提供的聚合组件进行OpenAPI文档的聚合

- Disk本地文件模式
- Cloud云端接口模式
- Eureka注册中心
- Nacos注册中心
- Docker镜像跨语言

## Disk模式
基于Disk模式聚合是最简单的，开发者只需要在Spring Boot的项目中存在OpenAPI规范的JSON文件即可进行聚合

完整代码请参考[knife4j-aggregation-disk-demo](https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-aggregation-disk-demo)

主要步骤如下：

1、创建Spring Boot项目，引入[Knife4jAggregation](https://xiaoym.gitee.io/knife4j/documentation/knife4jAggregation.html)的依赖包，完整pom文件如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.0</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-aggregation-disk-demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>knife4j-aggregation-disk-demo</name>
    <description>通过基于Spring Boot的工程聚合任意微服务接口文档</description>

    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>knife4j-aggregation-spring-boot-starter</artifactId>
            <version>2.0.8</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>

```

2、配置yml配置文件，如下：

```yml
server:
  port: 19081
knife4j:
  enableAggregation: true
  disk:
    enable: true
    routes:
      - name: 用户
        location: classpath:openapi/user.json
```
工程目录如下图：

![](https://xiaoym.gitee.io/knife4j/assert/aggregation/disk.png)

3、启动项目，访问doc.html进行查看，效果图如下

![](https://xiaoym.gitee.io/knife4j/assert/aggregation/disk-ui.png)

## Cloud模式聚合OpenAPI文档


Cloud(云端)模式和[Disk模式](https://xiaoym.gitee.io/knife4j/action/aggregation-disk.html)大同小异，主要的区别是获取OpenAPI规范的方式换成了基于HTTP接口而已


完整代码请参考[knife4j-aggregation-cloud-demo](https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-aggregation-cloud-demo)

本次Cloud聚合以Knife4j目前部署的线上demo为例，本地聚合在线的OpenAPI，并且可以本地调试，[Knife4jAggregation](../documentation/knife4jAggregation.md)组件会自动帮助我们转发

任意取目前Knife4j的线上demo两个OpenAPI规范接口地址：

- [http://knife4j.xiaominfo.com/v2/api-docs?group=2.X版本](http://knife4j.xiaominfo.com/v2/api-docs?group=2.X%E7%89%88%E6%9C%AC)
- [http://knife4j.xiaominfo.com/v2/api-docs?group=3.默认接口](http://knife4j.xiaominfo.com/v2/api-docs?group=3.%E9%BB%98%E8%AE%A4%E6%8E%A5%E5%8F%A3)



主要步骤如下：

1、创建Spring Boot项目，引入[Knife4jAggregation](../documentation/knife4jAggregation.md)的依赖包，完整pom文件如下：


```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.0</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-aggregation-disk-demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>knife4j-aggregation-disk-demo</name>
    <description>通过基于Spring Boot的工程聚合任意微服务接口文档</description>

    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>knife4j-aggregation-spring-boot-starter</artifactId>
            <version>2.0.8</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>

```

2、配置yml配置文件，如下：

```yml
server:
  port: 19081
knife4j:
  enableAggregation: true
  cloud:
    enable: true
    routes:
      - name: 测试分组1
        uri: knife4j.xiaominfo.com
        location: /v2/api-docs?group=2.X版本
      - name: 测试分组2
        uri: knife4j.xiaominfo.com
        location: /v2/api-docs?group=3.默认接口
```

3、启动项目，访问doc.html进行查看，效果图如下：

聚合效果：
![](https://xiaoym.gitee.io/knife4j/assert/aggregation/cloud1.png)

在线调试：
![](https://xiaoym.gitee.io/knife4j/assert/aggregation/cloud.png)

## Eureka注册中心聚合OpenAPI文档


从Eureka注册中心进行聚合的模式和[Cloud模式](aggregation-cloud.md)大同小异，主要的区别是通过`serviceName`来替代了真实的目标服务地址，而是从Eureka注册中心进行动态获取


完整代码请参考[knife4j-aggregation-eureka-demo](https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-aggregation-eureka-demo)

先来看整个工程的目录：

![](https://xiaoym.gitee.io/knife4j/assert/aggregation/eureka.png)

工程目录说明如下：

|工程|说明|
|---|---|
|service-server|Eureka注册中心|
|service-user|一个非常简单的用户服务，包含用户接口|
|service-order|一个非常简单的订单服务，包含订单接口|
|service-doc|聚合文档工程，也是一个Spring Boot工程，不过需要注意的是基于web的，而非webflux|


Eureka注册中心以及service-user、order等都非常简单，按照注册中心、用户服务、订单服务依次进行启动即可

此时，我们访问Eureka的主页，最终能看到我们的注册中心存在两个服务，如下图：


![](https://xiaoym.gitee.io/knife4j/assert/aggregation/eureka1.png)


那么，我们的目标是什么呢？从Eureka注册中心直接进行聚合，也就是将用户服务、订单服务的OpenAPI文档聚合在一起进行展示

主要步骤如下：

1、在`service-doc`工程引入`knife4j-aggregation-spring-boot-starter`依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.xiaominfo.swagger</groupId>
        <artifactId>knife4j-aggregation-eureka-demo</artifactId>
        <version>1.0</version>
        <relativePath>../pom.xml</relativePath> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.xiaominfo.swagger</groupId>
    <artifactId>service-doc</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>service-doc</name>
    <description>Eureka聚合</description>

    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>knife4j-aggregation-spring-boot-starter</artifactId>
            <version>2.0.8</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>

```

2、配置yml配置文件，如下：

```yml
server:
  port: 10909
knife4j:
  enableAggregation: true
  eureka:
    enable: true
    serviceUrl: http://localhost:10000/eureka/
    routes:
      - name: 订单服务
        serviceName: service-order
        location: /v2/api-docs?group=default
        servicePath: /order
      - name: 用户体系
        serviceName: service-user
        location: /aub/v2/api-docs?group=default
        servicePath: /
```

3、启动项目，访问doc.html进行查看，效果图如下：

聚合效果：
![](https://xiaoym.gitee.io/knife4j/assert/aggregation/eureka2.png)

在线调试：
![](https://xiaoym.gitee.io/knife4j/assert/aggregation/eureka3.png)


只需要简单的配置，就轻松的将Eureka注册中心的各个服务进行了聚合，是不是比Spring Cloud Gateway、Zuul更加简单和轻量呢？

关于Eureka的更多配置需要开发者参考[文档](https://xiaoym.gitee.io/knife4j/documentation/knife4jAggregation.html)

## Nacos注册中心聚合OpenAPI文档

Nacos的配置和[Eureka](https://xiaoym.gitee.io/knife4j/action/aggregation-eureka.html)几乎一模一样，唯一不同的区别是在yml进行配置的时候，使用的是`knife4j.nacos`开头，其他基本都是一样


关于Nacos的更多配置需要开发者参考[文档](https://xiaoym.gitee.io/knife4j/documentation/knife4jAggregation.html)

## 基于Knife4j的Docker镜像快速聚合OpenAPI


在前面的实战文章中，更多的是面向Java开发者，通过Spring Boot框架，快速聚合OpenAPI文档。

那么其他语言能否也能这么方便的使用Knife4j呢？

答案是肯定的，Knife4j为了让其他语言非常方便的使用Knife4j来渲染聚合OpenAPI文档，在DockerHub中推送了[Knife4j的镜像](https://hub.docker.com/repository/docker/xiaoymin/knife4j)，

镜像地址：[https://hub.docker.com/repository/docker/xiaoymin/knife4j](https://hub.docker.com/repository/docker/xiaoymin/knife4j)

如果你的本机或者服务器安装了Docker，那么利用Knife4j的镜像来聚合OpenAPI将会非常方便

首先需要将镜像从DockerHub拉到本地，命令如下：
```shell
docker pull xiaoymin/knife4j:latest
```
如果pull速度比较慢的话，开发者可以配置镜像源(`/etc/docker/daemon.json`)
```json
{
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://3laho3y3.mirror.aliyuncs.com",
    "https://mirror.ccs.tencentyun.com"
  ]
}
```
镜像下载到本地机器后，下面将详细介绍如何通过Knife4j的镜像实现上面文章介绍的4中不同方式的聚合OpenAPI文档

## 镜像说明

Knife4j的镜像是一个基于Spring Boot框架开发的Web项目，对外默认端口`8888`

源码地址：[https://gitee.com/xiaoym/knife4j/tree/v2/knife4j-aggregation-docker](https://gitee.com/xiaoym/knife4j/tree/v2/knife4j-aggregation-docker)

```dockerfile
FROM openjdk:8-jdk-alpine
LABEL version="2.0"
LABEL released-date=2020/11/25
LABEL author="xiaoymin@foxmail.com"
LABEL description="Knife4jAggregation OpenAPI,RunAnyWhere!!!"
MAINTAINER xiaoymin
RUN mkdir /app
# Disk模式数据挂载目录
RUN mkdir /app/data
ADD src/main/resources/application.yml /app/app.yml
ADD target/knife4j-aggregation-docker-1.0.jar /app/app.jar
ENTRYPOINT ["java","-jar","-Djava.security.egd=file:/dev/./urandom","-Duser.timezone=Asia/Shanghai","/app/app.jar","--spring.config.location=/app/app.yml"]
#EXPOSE 8888:
```


从Knife4j的Dockerfile文件中，我们可以看到为Knife4j的应用创建了一个`/app`目录和`/app/data`目录，用来存放jar文件和yml配置文件，该目录是通过外部文件与Docker容器进行挂载关联的关键。


### Disk模式

Disk模式主要是从本地聚合OpenAPI规范，那么如何利用Knife4j的容器进行渲染呢？这里就要用到我们刚刚上面说的文件挂载


第一步：在服务器(宿主机)上创建相关目录，例如：`/home/openapi`

我们在该目录下主要存放两种类型的文件目录，1种是Knife4j镜像文件需要的yml配置文件，第二种是存放OpenAPI的规范JSON,目录结构如下：

```shell
[root@izbpc3 openapi]# pwd
/home/openapi
[root@izbpc3 openapi]# ll
total 8
-rw-r--r-- 1 root root  241 Nov 25 19:42 app.yml
drwxr-xr-x 2 root root 4096 Nov 25 19:41 data
[root@izbpc3 openapi]# cd data
[root@izbpc3 data]# ll
total 256
-rw-r--r-- 1 root root  21448 Nov 25 19:41 open-api.json
-rw-r--r-- 1 root root 237303 Nov 25 19:41 openapi.json
```

Disk模式我们主要需要做的是修改app.yml配置文件中的配置，指定Knife4j的镜像从本地加载指定的openapi.json，通过界面显示

`app.yml`配置修改如下：
```yml
server:
  port: 8888
knife4j:
  enableAggregation: true
  disk:
    enable: true
    routes:
      - name: 用户AAAAAAAAAAA
        location: /app/data/open-api.json
      - name: 用户BBBBBBBBBBBB
        location: /app/data/openapi.json
```

这里需要注意的是

1、location我们使用的是容器的目录`/app`,我们最终创建容器的时候会将宿主机的目录(`/home/openapi/data`)挂载给容器，达到文件共享的目的

2、在`app.yml`配置中指定的端口是容器的端口，Knife4j默认端口8888，如果开发者使用该配置并且修改了端口，那么需要在端口映射的时候也相应的进行修改


第二步：启动Knife4j容器查看效果

通过Docker命令创建容器，命令如下：
```shell
[root@izbx23 app]# docker run -itd --name myopenapi -p 18002:8888 -v /home/openapi/app.yml:/app/app.yml -v /home/openapi/data:/app/data xiaoymin/knife4j
3f0ed4cde46dd8a625e0338bc8cb1688059c7169447bda5681a34d93e2ba7c3e
[root@izbx23 app]# docker ps 
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
e678bccd4d66        xiaoymin/knife4j    "java -jar -Djava.se…"   3 seconds ago       Up 2 seconds        0.0.0.0:18002->8888/tcp   myopenapi
```
- --name命令是指定一个别名
- -p代表端口映射 18002是宿主机端口号，8888是容器的端口号，
- -v参数则是将本地目录挂载和容器共享,此处主要挂载两个文件，一个是app.yml配置文件，一个是openapi.json文件

此时，我们通过端口号进行访问：`http://localhost:18002/doc.html`

效果图如下：

![](https://xiaoym.gitee.io/knife4j/assert/aggregation/docker-disk.png)


容器创建成功后，我们可以访问容器的文件系统，通过命令如下：

```shell
[root@izbx23 conf.d]# docker exec -it myopenapi sh
/ # ls
app    bin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var
/ # cd app
/app # ls
app.jar  app.yml  data
/app # cd data
/app/data # ls
open-api.json  openapi.json
/app/data # 
```

我们在容器中的文件系统中`/app/data`目录中，其实可以看到，这个目录中的文件和我们通过创建容器时-v参数挂载的目录文件是一致的。

### Cloud模式

Cloud模式就相对简单多了，我们只需要修改当前的app.yml配置文件即可，然后创建容器时进行覆盖即可

任意取目前Knife4j的线上demo两个OpenAPI规范接口地址：

- [http://knife4j.xiaominfo.com/v2/api-docs?group=2.X版本](http://knife4j.xiaominfo.com/v2/api-docs?group=2.X%E7%89%88%E6%9C%AC)
- [http://knife4j.xiaominfo.com/v2/api-docs?group=3.默认接口](http://knife4j.xiaominfo.com/v2/api-docs?group=3.%E9%BB%98%E8%AE%A4%E6%8E%A5%E5%8F%A3)

配置yml配置文件，如下：

```yml
server:
  port: 8888
knife4j:
  enableAggregation: true
  cloud:
    enable: true
    routes:
      - name: cloud1
        uri: knife4j.xiaominfo.com
        location: /v2/api-docs?group=2.X版本
      - name: cloud2
        uri: knife4j.xiaominfo.com
        location: /v2/api-docs?group=3.默认接口
```

通过Docker命令创建容器，命令如下：
```shell

[root@izbx23 openapi]# docker run -itd --name cloudapi -p 18002:8888 -v /home/openapi/app.yml:/app/app.yml xiaoymin/knife4j
6b81844e0c605704eef3ffcb207e090a1139a9fbc8dcf0a43efdcb60f41d327c

[root@izbx23 openapi]# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
6b81844e0c60        xiaoymin/knife4j    "java -jar -Djava.se…"   4 seconds ago       Up 3 seconds        0.0.0.0:18002->8888/tcp   cloudapi
```
- --name命令是指定一个别名(`cloudapi`)
- -p代表端口映射 18002是宿主机端口号，8888是容器的端口号，
- -v参数则是将本地目录挂载和容器共享,此处只需要覆盖app.yml配置文件即可，因为我们的OpenAPI数据来源于HTTP接口

此时，我们通过端口号进行访问：`http://localhost:18002/doc.html`

效果图如下：

![](https://xiaoym.gitee.io/knife4j/assert/aggregation/docker-cloud.png)

### 注册中心(Eureka && Nacos)

至于从注册中心(Eureka && Nacos)进行OpenAPI的聚合和Cloud模式下一样，开发者只需要修改app.yml配置文件，然后通过-v参数进行挂载覆盖文件即可。更多的配置需要参考聚合组件的文档参数[详细介绍文档](https://xiaoym.gitee.io/knife4j/documentation/knife4jAggregation.html)



