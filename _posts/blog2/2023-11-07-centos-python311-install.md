---
layout: post
title: Python3.11在CentOS7环境下的安装指定OpenSSL
description: Python3.11在CentOS7环境下的安装指定OpenSSL
keywords:
- Python3
- Centos7
- OpenSSL
categories:
- Blog
- Python
sidebar_position: 4
author: 八一菜刀
data: 2023年11月17日
---

如果你是在CentOS7 上面源码安装Python3.11版本，你可能会碰到和我一样的问题，那就是OpenSSL模块太低了。

在源码编译安装时，如果没有指定OpenSSL那么在使用时会出现一些异常，解决方案：

1、更新yum软件包

```shell
yum update
yum install openssl-devel bzip2-devel libffi-devel
```

2、下载最新的OpenSSL源码，解压并编译

```py
cd /usr/src
wget https://ftp.openssl.org/source/openssl-1.1.1q.tar.gz --no-check-certificate
```

解压OpenSSL包并安装

```shell
# 解压
tar -xzvf openssl-1.1.1q.tar.gz
cd openssl-1.1.1q
# 编译
./config --prefix=/usr --openssldir=/etc/ssl --libdir=lib no-shared zlib-dynamic
make
# 安装
make install
```

3、验证版本

```shell
> openssl version
OpenSSL 1.1.1q  5 Jul 2022
> which openssl
/usr/bin/openssl
```

4、下载Python的源码包，解压并安装

```shell
## 解压
tar -xzf Python-3.11.6.tgz
cd Python-3.11.6
# 编译（指定python3的目录和openssl模块）
./configure --prefix=/mnt/python/python3 --with-openssl=/usr
# 安装
sudo make
sudo make install
```

5、生成软链
> 系统中可能已经存在python3的命令，删除重新命名即可

在上面我们指定安装目录在`/mnt/python/python3`下,所以可以直接创建软链

```shell
sudo ln -s /mnt/python/python3/bin/python3.11 /usr/bin/python3
```

## References

- [Installing SSL package with PIP requires SSL package to be already installed](https://stackoverflow.com/questions/73407527/installing-ssl-package-with-pip-requires-ssl-package-to-be-already-installed)
