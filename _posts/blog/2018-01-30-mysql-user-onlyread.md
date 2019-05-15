---
layout: post
title: mysql数据库只读用户创建
categories: 数据库
description: mysql数据库只读用户创建
keywords: mysql用户,数据库只读用户
---

登录mysql

```shell
[root@s91 ~]# mysql -u root -p1234
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 106959398
Server version: 10.1.25-MariaDB MariaDB Server

Copyright (c) 2000, 2017, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> show databases;
+------------------------------+
| Database                     |
+------------------------------+
| test         |
| mysql        |

```

创建用户

```shell
MariaDB [(none)]> create user test identified by 'test123';
Query OK, 0 rows affected (0.01 sec)

MariaDB [(none)]> 
```

授权

```shell
MariaDB [cloud-lishui_daping]> grant select on `cloud-test`.* to test@"%" identified by "test1234";
Query OK, 0 rows affected (0.02 sec)

MariaDB [cloud-lishui_daping]> 
```

特别注意是如果数据库 有`-`，需要用倒引号引起来，否则会报语法错误

