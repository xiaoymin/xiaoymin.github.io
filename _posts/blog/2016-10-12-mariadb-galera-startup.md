---
layout: post
title: MariaDB Galera集群启动
categories: 数据库
description: MariaDB Galera集群启动
keywords: mariadb集群,MariaDb Galera
---


系统：CentOS7_x86_64 

1.安装 

安装可以遵循官网的方法，在`/etc/yum.repos.d`写一个MariaDB.repo. 

repo的内容如下： 

```text
# MariaDB 10.1 CentOSrepository list - created 2016-05-06 05:30 UTC 

#http://mariadb.org/mariadb/repositories/ 

[mariadb] 

name = MariaDB 

baseurl =http://yum.mariadb.org/10.1/centos7-amd64 

gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB

gpgcheck=1 
```

具体可以到这里获得：<https://downloads.mariadb.org/mariadb/repositories/#mirror=neusoft>

然后执行： 

```shell
sudo yum install MariaDB-server MariaDB-client
```

这里说明一点，因为我使用的是10.1的版本，从这个版本开始，mariadb已经默认自带galera了，所以无需另外安装。

2.系统和网络配置

配置主要分为： 

selinux设置：修改`/etc/selinux/config`，改成disabled; 

iptables设置：如果嫌麻烦就直接关闭防火墙，不然那要开放 3306，4567，4568，4444四个端口。 


3.配置文件

主要是配置`/etc/my.cnf.d/server.cnf`
```shell

[galera]

# Mandatory settings

wsrep_on=ON

wsrep_provider=/usr/lib64/galera/libgalera_smm.so

wsrep_cluster_address=gcomm://open11,open134,open246

binlog_format=row

default_storage_engine=InnoDB

innodb_autoinc_lock_mode=2

```

还有就是配置用户和组，然后chown相应的文件

```shell
groupadd mariadb

useradd -g mariadb mariadb

chown -R  mariadb:mariadb  /var/data/mysql
```

------

4.启动

第一台启动的时候：

```shell
mysqld --wsrep-new-cluster
```

其他机器启动：

```shell
mysqld --wsrep_cluster_address=gcomm://s91,s71,s240

mysqld --wsrep_cluster_address=gcomm://sv203,sv204,sv205
```

5.MariaDB Galera Cluster 参数

使用

```sql
SHOW VARIABLES LIKE 'wsrep%'
```

以下是特别的几个：

```sql
SHOW GLOBAL STATUS LIKE ‘wsrep_cluster_state_uuid’;
```

查看集群的UUID

```sql
show global status like 'wsrep_cluster_status';

primary-

non-Primary

```

