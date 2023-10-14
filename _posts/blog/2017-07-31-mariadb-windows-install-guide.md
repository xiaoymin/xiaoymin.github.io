---
layout: post
title: MariaDB 安装指南(windows)
categories: 数据库
description: MariaDB 安装指南(windows)
keywords: mariadb安装
---

## 下载

首先去MariaDB官网[下载](https://downloads.mariadb.org/ "下载"),本次教程使用的版本是`mariadb-10.2.7-winx64`


## 配置

将下载好的mariadb解压到安装目录，例如我的目录是`D:/Users/xiaoymin/Bin/mariadb`

- 选择配置文件(例如my-large.ini)

然后找到my-large，my-medium，my-small，三个文件，根据你的电脑的 配置进行选择，我这里选择的是my-large文件。

``` shell
[client]
port	= 3306
socket	= /tmp/mysql.sock


```

- 添加basedir、datadir、charset：

```shell
[mysqld]
port	= 3306
socket	= /tmp/mysql.sock

## 添加basedir、datadir、charset
basedir=D:/Users/xiaoymin/Bin/mariadb
datadir=D:/Users/xiaoymin/Bin/mariadb/data
character_set_server=utf8

```


-  加上WinMySQLAdmin：

```shell
[mysqlhotcopy]
interactive-timeout
## 加上WinMySQLAdmin
[WinMySQLAdmin]   
Server=E:\Softwear\mariadb-10.0.10-winx64\bin\mysqld.exe
```

- 保存以上配置
将以上配置文件另存保存至mariadb目录，如：`D:/Users/xiaoymin/Bin/mariadb/my.ini`

# 安装

配置完成后，安装mariadb服务，这里需要注意的是命令行**需要以管理员方式运行**
```shell
# 首先cd到mariadb的bin目录
cd D:/Users/xiaoymin/Bin/mariadb/bin
#安装服务
mysqld.exe --install MariaDB
# 启动服务
net start MariaDB
```

# 登录

启动mariadb后，可以登录系统，修改密码等操作
```shell
mysql -u root -p
enter
show databases;
#选择mysql数据库
use mysql;
#查询user表
 select host ,user,password from user；
#修改mysql 用户root的登录密码
update user set password=password('新密码') where User="root" ;
#刷新
flush privileges;
```

# 其他

一般安装不成功，多少与my.ini配置不对，可以通过SC命令删除服务，然后重复安装
```shell
# 删除mariadb服务
sc delete MariaDB
```


