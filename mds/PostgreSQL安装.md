# PostgreSQL安装 

## 下载

本次教程记录postgresql安装过程

下载二进制文件：https://www.enterprisedb.com/download-postgresql-binaries

下载版本：**\*Version 9.6.5***

系统：win10 64位

## 解压

本次解压目录是`D:\Users\xiaoymin\Bin\pgsql`

## 初始化

开cmd管理员窗口

执行命令：

```shell
initdb --pgdata=D:\Users\xiaoymin\Bin\pgsql\data --encoding=UTF8 --locale=C
```

输出：

```shell
D:\Users\xiaoymin\Bin\pgsql\bin>initdb --pgdata=D:\Users\xiaoymin\Bin\pgsql\data --encoding=UTF8 --locale=C
属于此数据库系统的文件宿主为用户 "xiaoymin".
此用户也必须为服务器进程的宿主.
数据库簇将使用本地化语言 "C"进行初始化.
缺省的文本搜索配置将会被设置到"english"

禁止为数据页生成校验和.

创建目录 D:/Users/xiaoymin/Bin/pgsql/data ... 成功
正在创建子目录 ... 成功
选择默认最大联接数 (max_connections) ... 100
选择默认共享缓冲区大小 (shared_buffers) ... 128MB
选择动态共享内存实现 ......windows
创建配置文件 ... 成功
正在运行自举脚本 ...成功
正在执行自举后初始化 ...成功
同步数据到磁盘...成功

警告:为本地连接启动了 "trust" 认证.
你可以通过编辑 pg_hba.conf 更改或你下次
行 initdb 时使用 -A或者--auth-local和--auth-host选项.

成功。您现在可以用下面的命令开启数据库服务器：

    "pg_ctl" -D "D:\Users\xiaoymin\Bin\pgsql\data" -l logfile start
```



具体参数命令,可以使用--help展现：

```shell
D:\Users\xiaoymin\Bin\pgsql\bin>initdb --help
initdb 初始化一个 PostgreSQL 数据库簇.

使用方法:
  initdb [选项]... [DATADIR]

选项:
  -A, --auth=METHOD         本地连接的默认认证方法
      --auth-host=METHOD   本地的TCP/IP连接的默认认证方法
      --auth-local=METHOD   本地socket连接的默认认证方法
  -D, --pgdata=DATADIR      当前数据库簇的位置
  -E, --encoding=ENCODING   为新数据库设置默认编码
      --locale=LOCALE      为新数据库设置默认语言环境
  --lc-collate, --lc-ctype, --lc-messages=LOCALE
  --lc-monetary, --lc-numeric, --lc-time=LOCALE
                            为新的数据库簇在各自的目录中分别
                   设定缺省语言环境（默认使用环境变
                   量)
  --no-locale               等同于 --locale=C
  --pwfile=文件名           对于新的超级用户从文件读取口令
  -T, --text-search-config=CFG
                   缺省的文本搜索配置
  -U, --username=NAME       数据库超级用户名
  -W, --pwprompt            对于新的超级用户提示输入口令
  -X, --xlogdir=XLOGDIR          当前事务日志目录的位置

非普通使用选项:
  -d, --debug               产生大量的除错信息
 -k, --data-checksums    使用数据页产生效验和
  -L DIRECTORY              输入文件的位置
  -n, --noclean             出错后不清理
  -N, --nosync             不用等待变化安全写入磁盘
  -s, --show                显示内部设置
  -S, --sync-only          只同步数据目录

其它选项:
  -V, --version             输出版本信息, 然后退出
  -?, --help                显示此帮助, 然后退出

如果没有指定数据目录, 将使用环境变量 PGDATA

报告错误至 <pgql-bugs@postgresql.org>.
```

## 注册windows服务

执行命令:

```shell
D:\Users\xiaoymin\Bin\pgsql\bin>pg_ctl.exe register -D D:\Users\xiaoymin\Bin\pgsql\data -N PgSQL
```

## 启动服务

```shell
D:\Users\xiaoymin\Bin\pgsql\bin>net start PgSQL
PgSQL 服务正在启动 .
PgSQL 服务已经启动成功。
```

