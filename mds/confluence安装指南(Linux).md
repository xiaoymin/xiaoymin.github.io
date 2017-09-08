# confluence 安装指南（Linux）


# 环境说明
1.服务器为centos，windos端需要一个ftp工具，把需要的东西拿到Linux下。
2.安装JDK1.8
 
# 需要的文件
- confluence的安装包
官网下载地址：[https://www.atlassian.com/software/confluence/download](https://www.atlassian.com/software/confluence/download "https://www.atlassian.com/software/confluence/download")
本次下载的版本是：***atlassian-confluence-6.3.2-x64.bin***
- MySQL连接驱动程序
这个下载渠道很多，可以通过maven仓库去下载
下载地址：[mysql-connector-java-6.0.6.jar](http://central.maven.org/maven2/mysql/mysql-connector-java/6.0.6/mysql-connector-java-6.0.6.jar "mysql-connector-java-6.0.6.jar")

# 安装

## 安装 JDK 1.8

Linux jdk的安装这里不再说明

## 安装mysql

- 下载

下载地址：http://dev.mysql.com/downloads/mysql/5.6.html#downloads
下载版本：我这里选择的5.6.33，通用版，linux下64位
直接下载：`wget  http://dev.mysql.com/get/Downloads/MySQL-5.6/mysql-5.6.33-linux-glibc2.5-x86_64.tar.gz`

- 解压

```shell
#解压
tar -zxvf mysql-5.6.33-linux-glibc2.5-x86_64.tar.gz
#复制解压后的mysql目录
cp -r mysql-5.6.33-linux-glibc2.5-x86_64 /usr/local/mysql
```
- 添加用户组和用户

```shell
#添加用户组
groupadd mysql
#添加用户mysql 到用户组mysql
useradd -g mysql mysql
```
- 安装

```shell
#切换到mysql主目录
cd /usr/local/mysql/
#创建mysql 数据文件夹
mkdir ./data/mysql
#授权
chown -R mysql:mysql ./
./scripts/mysql_install_db --user=mysql --datadir=/usr/local/mysql/data/mysql
cp support-files/mysql.server /etc/init.d/mysqld
chmod 755 /etc/init.d/mysqld
cp support-files/my-default.cnf /etc/my.cnf
#修改启动脚本
vi /etc/init.d/mysqld
 
#修改项：
basedir=/usr/local/mysql/
datadir=/usr/local/mysql/data/mysql
 
#启动服务
service mysqld start
 
#测试连接
./mysql/bin/mysql -uroot
 
#加入环境变量，编辑 /etc/profile，这样可以在任何地方用mysql命令了
export PATH=$PATH:/usr/local/mysql//bin<br>source /etc/profile
 
 
#启动mysql
service mysqld start
#关闭mysql
service mysqld stop
#查看运行状态
service mysqld status

```
- 加入环境变量

```shell
vim /etc/profile
export MYSQL_HOME=/usr/local/mysql
export PATH=$MYSQL_HOME/bin:$PATH
#执行profile
source /etc/profile
```

- 修改用户等选项

```shell
#登录
mysql -u root
use mysql;
select 'host' from user where user='root'; 
update user set host = '%' where user ='root';
#修改密码
update user set password=password('123456') where user='root';
flush privileges; 
```

## 创建数据库

两种方式，通过命令行创建、或者通过navicat 等连接工具创建，我是通过navicat工具创建的，也验证mysql连接可用

- 创建数据库名：confluence

#安装confluence5.8.10

- 修改增加可执行权限

```shell
mv atlassian-confluence-6.3.2-x64.bin confluence.bin
#增加可执行权限
chown u+x confluence.bin
```
- 安装

```shell
./confluence.bin
#根据提示操作安装

# 注意：在安装的过程中，如果你的默认目录被占用，端口8090被占用，会需要你自己设置端口号，这里安装是安装在/opt下，数据存放在/var目录下，用户目录在/home下，关于端口被占用的情况，一般是之前安装不成功，被无效的confluence用户占用了。可以使用lsof -i:8090查看是哪个进程占用了该端口，然后kill掉就OK了。如果不得不使用别的端口，记得在防火墙中开启该端口：iptables -I INPUT -p tcp -m state —state NEW -m tcp —dport xxxx -j ACCEPT
```

- 访问

浏览器访问：http://ip:8090/
回车后，进入安装界面，选择`install production`,然后直接跳过`add ones`，在出现serverID的时候，要保存复制

- 获取License Key

1、访问网址：http://id.atlassian.com
注册一个账号，也可以通过Google的Gmail账号登录（需要翻墙）

2、访问网址：[https://my.atlassian.com/](https://my.atlassian.com/ "https://my.atlassian.com/")
登录我的页面，点击页面上的`New Evaluation License ` 链接，填入刚才安装界面的`serverID`，新生成一个License Key

3、上面获取的License Key 只有一个月免费

- 配置数据库

1.选择mysql，点击external database
2.选择上面的JDBC
3.在出现的界面上url的最后加上解决中文乱码的&useUnicode=true&characterEncoding=utf8
4.输入用户名和密码，这里的数据库账户密码是之前创建的username和user code
5.点击next如果出现已经存在xxxx的错误是因为之前安装过，直接overwrite就OK。

 
# 关于破解confluence
a.停止Confluence服务器
/opt/atlassian/confluence/bin/stop-confluence.sh
b. 将数据库连接程序 mysql-connector-java-5.1.32-bin.jar 和汉化包：Confluence-5.8.10-language-pack-zh_CN.jar放在 atlassian\confluence\confluence\WEB-INF\lib 目录
c. 将 atlassian\confluence\confluence\WEB-INF\lib\atlassian-extras-decoder-v2-3.2.jar 拷贝到Windows上，重命名为atlassian-extras-2.4.jar

d. 执行confluence_keygen.jar，输入一些列账户名称邮箱这些信息，输入serverID,点击Patch，选择 atlassian-extras-2.4.jar，点击gen
e. 这时候就生成了需要的秘钥，复制下来保存。
f.将atlassian-extras-2.4.jar重命名为原来的atlassian-extras-decoder-v2-3.2.jar，放回linux下的原位。
f. 重新启动confluence
/opt/atlassian/confluence/bin/start-confluence.sh
g. 刷新浏览器，输入密钥，进入下一步
 
 
#恢复数据
这里等待三分钟初始化结束后，如果想要新的界面，就点击empty site，如果要恢复，就选择最下面的导入backup文件，直接从windows下导入，导入结束后会自动import，当到100%的时候，就可以start up啦。
 
 
说明：中间可能会有一些稀奇古怪的问题，可以将报错信息google，一般会找到解决办法。实在不行，建议全部卸载重来一遍。
 
ps -ef|grep java 看看进程，可能是启动用户有问题
kill 掉之前起来的
/opt/atlassian/confluence/bin/startup.sh 用这个启动
tail -f /var/atlassian/application-data/confluence/logs/atlassian-confluence.log看下日志

