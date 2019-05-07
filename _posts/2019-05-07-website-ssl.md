---
layout: post
title: 免费给网站配置SSL证书(https)
categories: Blog
description: 免费给网站配置SSL证书(https)
keywords: swagger-bootstrap-ui,swagger,ssl
---
这几天一直在看小程序的开发指南,其中读到小程序调用的RESTful Api接口的网站都必须是`HTTPS`的,为了后面学习小程序开发先给我的swagger-bootstrap-ui的文档地址配置一个SSL证书.就权当练习吧.

## 证书申请

关于SSL证书的申请,网上提供了很多教程,包括免费的等等,但其实都过于复杂,直接通过阿里云就可以免费申请SSL的证书

### 证书购买

步骤：登录阿里云控制台-> SSL证书 -> 购买证书

![](/images/blog/ssl/s2.png)
![](/images/blog/ssl/s3.png)
![](/images/blog/ssl/s4.png)
![](/images/blog/ssl/s5.png)


### 证书签发

免费的证书购买成功后,在证书控制台,未签发控制台上会看到证书,点击**申请**,填写相关信息

![](/images/blog/ssl/s6.png)

填写域名相关信息

![](/images/blog/ssl/s7.png)

点击下一步,验证，提交审核等操作即可

![](/images/blog/ssl/s8.png)

![](/images/blog/ssl/s9.png)

### 证书下载

在证书签发动作完成后,等大概几分钟,在已签发中可以看到我们的站点签发信息,点击下载,下载我们当前站点的SSL证书

![](/images/blog/ssl/s10.png)

## Nginx 配置SSL

### 安装

nginx的安装很简单,可以通过yum安装,如下

```shell
yum install nginx
```

通过命令启动nginx

```shell
service nginx start
```

### 配置

将我们下载的文件上传的服务器,主要包括两个文件(key和pem)

配置我们的nginx,如下：

```shell
server {
        listen       80;
        server_name  doc.xiaominfo.com;
        # http默认重定向到https
        return    301 https://$server_name$request_uri;

}
server{
        listen 443 ssl;
        server_name  doc.xiaominfo.com;
        # 证书目录
        ssl_certificate  /mnt/ssl/doc/doc.xiaominfo.com.pem;
        ssl_certificate_key /mnt/ssl/doc/doc.xiaominfo.com.key;
        
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_prefer_server_ciphers on;
        client_max_body_size 100m;
        location / {
            root /mnt/application/swagger-bootstrap-ui-doc;
        }

}
```

大功告成~~~！！！