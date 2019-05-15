---
layout: post
title: 在Linux操作系统上部署VUE开发的node应用
categories: Linux
description: 在Linux操作系统上部署VUE开发的node应用
keywords: Linux,nodejs,vue
---


## Linux 服务器

```shell
CentOS Linux release 7.3.1611 (Core) 
```

## 配置node环境

查看node是否安装

```she
[root@localhost ~]# node
bash: node: 未找到命令...
```

从以上命令看出,node环境没有安装,需要安装node基础环境

首先去node[官网](https://nodejs.org/en/)下载node的安装包

英文官网访问太慢可以访问[中文官网](http://nodejs.cn/)

阿里云镜像：https://npm.taobao.org/mirrors/node/

本次下载的node版本是：`node-v6.11.3-linux-x64.tar.xz`

**解压**

```shell
# 解压
[root@localhost ~]# tar -xvf node-v6.11.3-linux-x64.tar.xz
[root@localhost ~]# mv node-v6.11.3-linux-x64 /usr/local/node
## 配置环境变量
[root@localhost ~]# vim /etc/profile

[root@localhost ~]# node
```

**配置环境变量**

```shell
[root@localhost ~]# vim /etc/profile

export NODE_HOME=/usr/local/node
export PATH=$NODE_HOME/bin:$PATH
[root@localhost local]# source /etc/profile
[root@localhost local]# node -v
v6.11.3 
```

## 部署

该项目是依赖nuxt开发,参考文章：[nuxt commands章节](https://zh.nuxtjs.org/guide/commands)

官网说明中可以在项目中的package.json文件中查看

package.json配置文件如下：

```json
{
  "name": "off",
  "version": "1.0.0",
  "description": "off",
  "author": "jzc",
  "private": true,
   "config": {
        "nuxt": {
            "host": "127.0.0.1",
            "port": "18010"
        }
    },
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate",
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
    "precommit": "npm run lint"
  },
  "dependencies": {
    "animejs": "^2.2.0",
    "less": "^2.7.3",
    "less-loader": "^4.0.5",
    "nuxt": "^1.0.0",
    "vue-awesome-swiper": "^3.1.2"
  },
  "devDependencies": {
    "babel-eslint": "^8.2.1",
    "eslint": "^4.15.0",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-vue": "^4.0.0"
  }
}
```

先执行build操作

```shell
[root@localhost ~] npm run build

> off@1.0.0 build /mnt/lishi/website
> nuxt build

  ████████████████████ 100% 

Build completed in 14.168s




 WARNING  Compiled with 1 warnings                                                                                                                                                     10:50:26

 warning  

asset size limit: The following asset(s) exceed the recommended size limit (300 kB).
This can impact web performance.
Assets: 
  img/banner.c8fa5d3.png (679 kB)
  img/cs.7924e8d.png (816 kB)
  img/video.f81e697.png (356 kB)
  img/OTS.426eca7.png (475 kB)
  img/bender.0761e66.png (639 kB)
  img/introduce.7c0f1a1.png (421 kB)
  img/control.f36ce27.png (479 kB)

Hash: 711ed163bda0e68a99b7
Version: webpack 3.10.0
Time: 14173ms
                                            Asset       Size  Chunks                    Chunk Names
                          img/ambient.f5922ac.png    2.62 kB          [emitted]         
             img/administration_hover.875f478.png    2.58 kB          [emitted]         
                        img/zhengshu4.9846a5d.png    26.7 kB          [emitted]         
                       img/experience.9e12d2c.png    1.47 kB          [emitted]         
                           img/ticket.978864e.png     1.3 kB          [emitted]         
                          img/service.a5b3c65.png    1.83 kB          [emitted]         
                          img/iPhoneX.248a9cc.png    23.5 kB          [emitted]         
                      img/jingguanjia.8afc7c3.png    3.45 kB          [emitted]         
                 img/contentServiceBg.c9eb329.png     233 kB          [emitted]         
                          img/tourist.5a236ea.png    3.16 kB          [emitted]         
                        img/zhengshu3.07ef39a.png    37.1 kB          [emitted]         
                       img/youguanjia.09f7ff1.png    2.89 kB          [emitted]         
                img/emergencyHandling.900bb3c.png    1.37 kB          [emitted]         
                                img/b.d3ce94c.jpg    39.1 kB          [emitted]         
                 img/experience_hover.58b2c47.png    1.47 kB          [emitted]         
                       img/parkingLot.8c62aba.png    2.25 kB          [emitted]         
                        img/marketing.1fb5e28.png    1.77 kB          [emitted]         
                             img/roam.9faa35b.png    2.91 kB          [emitted]         
                         img/evaluate.ea2bdeb.png    2.18 kB          [emitted]         
                           img/QRCode.0a50fbd.png    11.5 kB          [emitted]         
                     img/scenicSpotBg.a5b307c.png     184 kB          [emitted]         
                       img/government.d086f44.png    1.78 kB          [emitted]         
                              img/web.315c435.png    3.28 kB          [emitted]         
                                img/c.238373a.jpg    20.7 kB          [emitted]         
                           img/server.41de726.png    2.15 kB          [emitted]         
                   img/serviceContent.5d5f7c6.png    2.29 kB          [emitted]         
                          img/levelBg.0562974.png    4.65 kB          [emitted]         
                       img/enterprise.56dae04.png    3.22 kB          [emitted]         
                 img/evaluationSystem.730526f.png    3.46 kB          [emitted]         
                         img/shujujia.bb08350.png    3.01 kB          [emitted]         
                        img/keepWatch.c55759f.png    1.91 kB          [emitted]         
                     img/server_hover.fdef7a3.png    2.31 kB          [emitted]         
                           img/banner.c8fa5d3.png     679 kB          [emitted]  [big]  
                               img/cs.7924e8d.png     816 kB          [emitted]  [big]  
                            img/video.f81e697.png     356 kB          [emitted]  [big]  
                        img/zhengshu2.4a19c1d.png    10.7 kB          [emitted]         
                                img/a.2ba6f0c.jpg    26.4 kB          [emitted]         
                     img/scenicSpotBg.9804948.png    4.74 kB          [emitted]         
                        img/marketing.35166b4.png    1.21 kB          [emitted]         
                          img/monitor.8af33d3.png    2.65 kB          [emitted]         
                           img/WeChat.896ae2d.png    2.36 kB          [emitted]         
                             img/Wifi.f7571ea.png    2.61 kB          [emitted]         
                   img/administration.fc3f856.png    2.52 kB          [emitted]         
                        img/broadcast.3372863.png     2.3 kB          [emitted]         
                  img/onlineRetailers.2b9a700.png    2.22 kB          [emitted]         
                        img/marketing.ae28534.png    2.59 kB          [emitted]         
                      img/body2-item3.3b33ea4.png    3.44 kB          [emitted]         
                        img/zhengshu5.907473c.png    47.8 kB          [emitted]         
                      img/body2-item1.cffdfb7.png    3.49 kB          [emitted]         
                      img/body2-item2.8b4ef31.png    3.66 kB          [emitted]         
                              img/OTS.426eca7.png     475 kB          [emitted]  [big]  
                       img/recreation.417f692.png    3.04 kB          [emitted]         
                             img/logo.ae9fae7.png    10.1 kB          [emitted]         
                          img/release.f878c29.png     2.5 kB          [emitted]         
                           img/bender.0761e66.png     639 kB          [emitted]  [big]  
                       img/enterprise.b12daef.png    2.11 kB          [emitted]         
                      img/marketingBg.0831255.png     2.6 kB          [emitted]         
                            img/level.c7b1a8d.png    3.84 kB          [emitted]         
                               img/VR.e0368e4.png    2.08 kB          [emitted]         
                        img/zhengshu1.4a19c1d.png    10.7 kB          [emitted]         
                        img/introduce.7c0f1a1.png     421 kB          [emitted]  [big]  
                          img/control.f36ce27.png     479 kB          [emitted]  [big]  
                       img/scenicSpot.775e2d1.png    4.05 kB          [emitted]         
                       img/body3-back.d346a0b.png     270 kB          [emitted]         
               img/vehiclesAndVessels.28c0194.png    2.41 kB          [emitted]         
                       img/streetLamp.27a4c2e.png    2.06 kB          [emitted]         
                         img/analysis.3d36965.png    2.16 kB          [emitted]         
                          img/support.18f87fd.png    1.68 kB          [emitted]         
                  img/onlineRetailers.94150fa.png    1.74 kB          [emitted]         
                     img/enterpriseBg.4d6b672.png    4.81 kB          [emitted]         
                            img/voice.aeb96b7.png    1.56 kB          [emitted]         
                  img/marketing_hover.a87ef11.png    3.12 kB          [emitted]         
                         img/serverBg.95d78c4.png     213 kB          [emitted]         
pages/product/jingguanjia.6d096988929c96b79c84.js    36.3 kB       0  [emitted]         pages/product/jingguanjia
      pages/aboutUS/index.b87dc531e556bf7861ed.js    45.4 kB       1  [emitted]         pages/aboutUS/index
 pages/product/youguanjia.8b2dc5016946854c880d.js    19.9 kB       2  [emitted]         pages/product/youguanjia
              pages/index.cfc2a9df7c5b2fea91db.js    38.1 kB       3  [emitted]         pages/index
   pages/product/shujujia.88e3f673ff804d0569bd.js    19.5 kB       4  [emitted]         pages/product/shujujia
         pages/News/index.cc009a13f2a811d4f9c5.js    32.6 kB       5  [emitted]         pages/News/index
          layouts/default.7dd836b9fa5dbc88593f.js    1.41 kB       6  [emitted]         layouts/default
                   vendor.258d4bae08c591e6eccc.js     284 kB       7  [emitted]         vendor
                      app.b0507b107754ae5b2939.js    29.8 kB       8  [emitted]         app
                 manifest.711ed163bda0e68a99b7.js    1.79 kB       9  [emitted]         manifest
                                         LICENSES  697 bytes          [emitted]         
 + 3 hidden assets

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (300 kB).
This can impact web performance.
Assets: 
  img/banner.c8fa5d3.png (679 kB)
  img/cs.7924e8d.png (816 kB)
  img/video.f81e697.png (356 kB)
  img/OTS.426eca7.png (475 kB)
  img/bender.0761e66.png (639 kB)
  img/introduce.7c0f1a1.png (421 kB)
  img/control.f36ce27.png (479 kB)
Hash: a096aa98f9ed65c1ec48
Version: webpack 3.10.0
Time: 2641ms
             Asset    Size  Chunks             Chunk Names
server-bundle.json  507 kB          [emitted]
```

最终后台启动

```shell
[root@localhost ~] npm run start &
> off@1.0.0 start /mnt/lishi/website
> nuxt start


 OPEN  http://iZbp10yas4kb5a9dudjbw2Z:18010


```

## 其他

node程序最终启动成功,可以通过ps命令查找进程

```shell
[root@localhost ~] ps -ef|grep node
lishi    10155 10145  0 11:19 pts/1    00:00:03 node /mnt/project/website/node_modules/.bin/nuxt start
root     13134 10274  0 13:43 pts/1    00:00:00 grep --color=auto node
[root@localhost ~] 

```

通过端口查找：

```shell
[root@localhost ~] netstat -anp|grep 8083
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:8083            0.0.0.0:*               LISTEN      27562/java          
[root@localhost ~] netstat -anp|grep 18010
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 127.0.0.1:18010         0.0.0.0:*               LISTEN      10155/node          
lishi@iZbp10yas4kb5a9dudjbw2Z:/usr/local/nginx/conf/vhost> 

```

通过上面列出来的进程信息,18010端口是node开启的服务器,8083是后台Java开启的tomcat服务

比较之后，会发现一个是127.0.0.1，一个是0.0.0.0

重点说明 0.0.0.0 是对外开放，通过服务域名、ip可以访问的端口

 127.0.0.1 只能对本机 localhost访问，也是保护此端口安全性



所以最终node启用的服务 最后我只能改由nginx代理才能出去，这个怎么解决尚未有解决方案





## pm2

*pm2* 是一个带有负载均衡功能的Node应用的进程管理器.当你要把你的独立代码利用全部的服务器上的所有CPU,并保证进程永远都活着,0秒的重载, *PM2*是完美的

PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。

### 安装

```shell
lishi@iZbp10yas4kb5a9dudjbw2Z:/mnt/lishi/website> npm install -g pm2
/usr/local/node-v9.0.0/bin/pm2 -> /usr/local/node-v9.0.0/lib/node_modules/pm2/bin/pm2
/usr/local/node-v9.0.0/bin/pm2-dev -> /usr/local/node-v9.0.0/lib/node_modules/pm2/bin/pm2-dev
/usr/local/node-v9.0.0/bin/pm2-docker -> /usr/local/node-v9.0.0/lib/node_modules/pm2/bin/pm2-docker
/usr/local/node-v9.0.0/bin/pm2-runtime -> /usr/local/node-v9.0.0/lib/node_modules/pm2/bin/pm2-runtime
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.1.3 (node_modules/pm2/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ pm2@2.9.3
added 252 packages in 119.179s
lishi@iZbp10yas4kb5a9dudjbw2Z:/mnt/lishi/website> pm2 list

>>>> In-memory PM2 is out-of-date, do:
>>>> $ pm2 update
In memory PM2 version: 2.7.0
Local PM2 version: 2.9.3

┌──────────┬────┬──────┬─────┬────────┬─────────┬────────┬─────┬─────┬──────┬──────────┐
│ App name │ id │ mode │ pid │ status │ restart │ uptime │ cpu │ mem │ user │ watching │
└──────────┴────┴──────┴─────┴────────┴─────────┴────────┴─────┴─────┴──────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app

```



nuxt.js的项目启动命令，先执行`npm run build`,在执行`npm run start`,pm2也支持参数的传递，也有大神说pm2启动nuxt只需要执行`pm2 start npm -- run start`,到目前为止，表示项目没有这样启动成功过。

所以我们要知道`package.json`这个文件，当我们执行`npm run dev`的时候，其实使用npm去启动了`./node_modules/nuxt/bin/nuxt`这个文件。当我们cd到我们的项目目录之后，我们最终可以执行如下命令来启动：

```shell
pm2 start ./node_modules/nuxt/bin/nuxt -- start
```

以上命令启动是默认端口3000，如果我们要自定义端口 需要执行参数

```shell
lishi@iZbp10yas4kb5a9dudjbw2Z:/mnt/lishi/website> netstat -anp|grep nux
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 127.0.0.1:3000          0.0.0.0:*               LISTEN      3804/nuxt           
```

查看帮助文档：

```shell
lishi@iZbp10yas4kb5a9dudjbw2Z:/mnt/lishi/website> ./node_modules/nuxt/bin/nuxt --help

    Description
      Starts the application in development mode (hot-code reloading, error
      reporting, etc)
    Usage
      $ nuxt dev <dir> -p <port number> -H <hostname>
    Options
      --port, -p          A port number on which to start the application
      --hostname, -H      Hostname on which to start the application
      --spa               Launch in SPA mode
      --universal         Launch in Universal mode (default)
      --config-file, -c   Path to Nuxt.js config file (default: nuxt.config.js)
      --help, -h          Displays this message
  

```

