# swagger-bootstrap-ui发布到Maven中央仓库

# 准备工作

## 注册Sonatype帐号

地址：[https://issues.sonatype.org/secure/Dashboard.jspa](https://issues.sonatype.org/secure/Dashboard.jspa)

该账户是作为maven全局配置settings.xml文件中server节点需要使用到，账户名称不能是中文（我第一次注册就是注册了个中文，结果坑了好几天….）

此外，Sonatype 还提供了一个名为 OSS 的系统：[https://oss.sonatype.org](https://oss.sonatype.org/)

我们上传成功后需要在该oss系统上close、发布组件

## 创建一个JIRA ticket

创建一个发布组件的请求issue,需要管理员审核通过该issue,你才有权限上传组件,如下图:







![create issue request](issue.png)

这里注意点：

- project选择：Community Support - Open Source Project Repository Hosting (OSSRH)
- issue Type 选择：New Project
- groupId:因为我的项目是托管在`GITHUB`上的，所以这里我的groupid是`com.github.xiaoymin`,如果你有自己的域名，可以填写你自己的groupid



## 等待审批

一般需要1~2天时间，需要耐心等待,审批通过后会发邮件通知，此外，在自己提交的 Issue 下面会看到 Sonatype 工作人员的回复。

当看到如下回复时，表示已经审核通过,你可以上传组件了：

![success issue](issue2.png)



# 使用GnuPG生成密钥

如果是 Windows 操作系统，需要下载 [Gpg4win](http://gpg4win.org/) 软件来生成密钥对

安装 GPG 软件后，打开命令行窗口，依次做以下操作：

1.查看是否安装成功

```shell
gpg --version
```

2.生成秘钥

```shell
gpg --gen-key
```

此时需要输入姓名、邮箱等字段，其它字段可使用默认值，此外，还需要输入一个 Passphase，相当于一个密钥库的密码，这个密码需要记住，因为后面会用到。

3.查看密码

```shell
gpg --list-keys
```

输出如下信息：

```shell
C:/Users/xiaoymin/AppData/Roaming/gnupg/pubring.gpg
---------------------------------------------------
pub   2048R/525E4513 2017-08-31
uid       [ultimate] xiaoym <xiaoymin@foxmail.com>
sub   2048R/3DC9A187 2017-08-31
```

可见这里的公钥的 ID 是：525E4513，很明显是一个 16 进制的数字，马上就会用到。

4.将公钥发布到 PGP 密钥服务器

```shell
gpg --keyserver hkp://pool.sks-keyservers.net --send-keys 525E4513
# 后面这个也需要执行,发布到ubuntu服务器上
gpg --keyserver hkp://keyserver.ubuntu.com --send-keys 525E4513
```

此后，可使用本地的私钥来对上传构件进行数字签名，而下载该构件的用户可通过上传的公钥来验证签名，也就是说，大家可以验证这个构件是否由本人上传的，因为有可能该构件被坏人给篡改了。

5.查询公钥是否发布成功

```shell
gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 525E4513
```

实际上就是从 key server 上通过公钥 ID 来接收公钥，此外，也可以到 sks-keyservers.net 上通过公钥 ID 去查询。

以上操作就算完成了密钥生成工作.

# 修改maven配置文件

需要修改的maven配置文件包括`setting.xml`和项目的`pom.xml`

1.setting.xml

```xml
<!-- lang: xml -->
<settings>

    ...

    <servers>
        <server>
            <id>oss</id>
            <username>用户名</username>
            <password>密码</password>
        </server>
    </servers>

    ...

</settings>
```

使用自己注册的 Sonatype 账号的用户名与密码来配置以上 server 信息。

2.pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  ...
  <groupId>com.github.xiaoymin</groupId>
  <artifactId>swagger-bootstrap-ui</artifactId>
  <version>1.5</version>
  <name>swagger-bootstrap-ui</name>
  <description>Swagger-Bootstrap-UI is the front of the UI Swagger implementation, using jQuery+bootstrap implementation, the purpose is to replace the default UI Swagger implementation of the Swagger-UI, so that the document is more friendly...</description>
  <url>https://git.oschina.net/xiaoym/swagger-bootstrap-ui</url>
  <developers>
    <developer>
      <id>xiaoym</id>
      <name>肖玉民</name>
      <email>xiaoymin@foxmail.com</email>
      <roles>
        <role>Java Development Engineer</role>
      </roles>
      <timezone>2017-4-17 18:05:10</timezone>
    </developer>
  </developers>
  <licenses>
    <license>
      <name>The Apache Software License, Version 2.0</name>
      <url>http://www.apache.org/licenses/LICENSE-2.0.txt</url>
    </license>
  </licenses>
  <scm>
    <connection>scm:git@git.oschina.net:xiaoym/swagger-bootstrap-ui.git</connection>
    <developerConnection>scm:git@git.oschina.net:xiaoym/swagger-bootstrap-ui.git</developerConnection>
    <url>git@git.oschina.net:xiaoym/swagger-bootstrap-ui.git</url>
  </scm>
  <distributionManagement>
    <snapshotRepository>
      <id>oss</id>
      <url>https://oss.sonatype.org/content/repositories/snapshots/</url>
    </snapshotRepository>
    <repository>
      <id>oss</id>
      <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>
    </repository>
  </distributionManagement>
  
  <profiles>
    <profile>
      <id>release</id>
      <build>
        <plugins>
          <!-- Source -->
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-source-plugin</artifactId>
            <version>2.2.1</version>
            <executions>
              <execution>
                <phase>package</phase>
                <goals>
                  <goal>jar-no-fork</goal>
                </goals>
              </execution>
            </executions>
          </plugin>
          <!-- Javadoc -->
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-javadoc-plugin</artifactId>
            <version>2.9.1</version>
            <executions>
              <execution>
                <phase>package</phase>
                <goals>
                  <goal>jar</goal>
                </goals>
              </execution>
            </executions>
          </plugin>
          <!-- GPG -->
          <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-gpg-plugin</artifactId>
            <version>1.6</version>
            <executions>
              <execution>
                <phase>verify</phase>
                <goals>
                  <goal>sign</goal>
                </goals>
              </execution>
            </executions>
          </plugin>
        </plugins>
      </build>
      <distributionManagement>
        <!-- 这里的id oss需要和setting.xml里面server节点配置的id一致-->
        <snapshotRepository>
          <id>oss</id>
          <url>https://oss.sonatype.org/content/repositories/snapshots/</url>
        </snapshotRepository>
        <repository>
          <id>oss</id>
          <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>
        </repository>
      </distributionManagement>
    </profile>
  </profiles>
  
</project>
```

*注意*：以上 pom.xml 必须包括：name、description、url、licenses、developers、scm 等基本信息，此外，使用了 Maven 的 profile 功能，只有在 release 的时候，创建源码包、创建文档包、使用 GPG 进行数字签名。此外，snapshotRepository 与 repository 中的 id 一定要与 setting.xml 中 server 的 id 保持一致.

# 上传构件到 OSS 中

执行上传命令,这里我是新开cmd窗口执行

```shell
mvn clean deploy -P release
```

当执行以上 Maven 命令时，会自动弹出一个对话框，需要输入上面提到的 Passphase，它就是通过 GPG 密钥对的密码，只有自己才知道。随后会看到大量的 upload 信息，而且速度比较慢，经常会 timeout，需要反复尝试。

注意：此时上传的构件并未正式发布到中央仓库中，只是部署到 OSS 中了，下面才是真正的发布。



在执行这一步时可能碰到的错误：

1、报401错误，如下：

```shell
[DEBUG] Using connector BasicRepositoryConnector with priority 0.0 for https://oss.sonatype.org/service/local/staging/deploy/maven2/
Uploading: https://oss.sonatype.org/service/local/staging/deploy/maven2/com/github/xiaoymin/swagger-bootstrap-ui/1.5/swagger-bootstrap-ui-1.5.jar
Uploading: https://oss.sonatype.org/service/local/staging/deploy/maven2/com/github/xiaoymin/swagger-bootstrap-ui/1.5/swagger-bootstrap-ui-1.5.pom
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 10.190 s
[INFO] Finished at: 2017-08-31T17:17:58+08:00
[INFO] Final Memory: 16M/155M
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-deploy-plugin:2.7:deploy (default-deploy) on project swagger-bootstrap-ui: Failed to deploy artifacts: Could not transfer artifact com.github.xiaoymin:swagger-bootstrap-ui:jar:1.5 from/to oss (https://oss.sonatype.org/service/local/staging/deploy/maven2/): Failed to transfer file: https://oss.sonatype.org/service/local/staging/deploy/maven2/com/github/xiaoymin/swagger-bootstrap-ui/1.5/swagger-bootstrap-ui-1.5.jar. Return code is: 401, ReasonPhrase: Unauthorized. -> [Help 1]
```

碰到这种情况有几种情况

首先，确认使用的oss账号 、密码是否正确，这是最关键的

其次，有可能使用该命令时，使用的全局配置setting.xml路径不对(比如我，因为我的配置文件是放在D盘目录下，结果在cmd窗口执行上传命令，命令中maven使用的却是默认配置，在C盘符下，所以修改c盘符下的setting.xml文件，添加server节点即可)

可以使用`-X`命令调试执行,例如：

```shell
mvn clean deploy -P release -X
```

可以看到maven的详细打印日志,方便我们找出错误，

当出现如下`build success`时，恭喜你,距离成功又进了一步

```shell
Uploaded: https://oss.sonatype.org/service/local/staging/deploy/maven2/com/github/xiaoymin/swagger-bootstrap-ui/1.5/swagger-bootstrap-ui-1.5-sources.jar.asc (484 B at 1.3 KB/sec)
Uploading: https://oss.sonatype.org/service/local/staging/deploy/maven2/com/github/xiaoymin/swagger-bootstrap-ui/1.5/swagger-bootstrap-ui-1.5-sources.jar.asc
Uploaded: https://oss.sonatype.org/service/local/staging/deploy/maven2/com/github/xiaoymin/swagger-bootstrap-ui/1.5/swagger-bootstrap-ui-1.5-sources.jar.asc (484 B at 1.4 KB/sec)
[INFO] ------------------------------------------------------------------------                                         [INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 51.276 s
[INFO] Finished at: 2017-09-01T10:17:38+08:00
[INFO] Final Memory: 19M/156M
[INFO] ------------------------------------------------------------------------
```

# 在 OSS 中发布构件

登录oss系统：https://oss.sonatype.org/

在 OSS 中，使用自己的 Sonatype 账号登录后，可在 Staging Repositories 中查看刚才已上传的构件，这些构件目前是放在 Staging 仓库中，可进行模糊查询，快速定位到自己的构件。此时，该构件的状态为 Open，需要勾选它，然后点击 Close 按钮。

接下来系统会自动验证该构件是否满足指定要求，当验证完毕后，状态会变为 Closed，最后，点击 Release 按钮来发布该构件。

这里close最有可能碰到的错误就是签名错误:`Failed: Signature Validation`

解决方法：

1.首先保证自己的秘钥上传到服务器,可以在http://pool.sks-keyservers.net/查询自己上传的秘钥结果

也可以再上传一次

```shell
gpg --keyserver hkp://pool.sks-keyservers.net --send-keys 525E4513
gpg --keyserver hkp://keyserver.ubuntu.com --send-keys 525E4513
```

2.在上传构建oss步骤中，没有使用` -P release`参数，比如使用如下命令：

```shell
mvn clean deploy 
```

使用该命令可以上传成功,但是我们的文件没有签名,其实我们本地生成的文件也可以签名验证的

例如：

```shell
D:\Users\xiaoymin\.m2\repository\com\github\xiaoymin\swagger-bootstrap-ui\1.5>gpg2 --verify swagger-bootstrap-ui-1.5.jar.asc
gpg: assuming signed data in 'swagger-bootstrap-ui-1.5.jar'
gpg: Signature made 09/01/17 10:17:05 中国标准时间 using RSA key ID 525E4513
gpg: Good signature from "xiaoym <xiaoymin@foxmail.com>" [ultimate]

D:\Users\xiaoymin\.m2\repository\com\github\xiaoymin\swagger-bootstrap-ui\1.5>gpg2 --verify swagger-bootstrap-ui-1.5.pom.asc
gpg: assuming signed data in 'swagger-bootstrap-ui-1.5.pom'
gpg: Signature made 09/01/17 10:17:05 中国标准时间 using RSA key ID 525E4513
gpg: Good signature from "xiaoym <xiaoymin@foxmail.com>" [ultimate]

D:\Users\xiaoymin\.m2\repository\com\github\xiaoymin\swagger-bootstrap-ui\1.5>gpg2 --verify swagger-bootstrap-ui-1.5-sources.jar.asc
gpg: assuming signed data in 'swagger-bootstrap-ui-1.5-sources.jar'
gpg: Signature made 09/01/17 10:17:05 中国标准时间 using RSA key ID 525E4513
gpg: Good signature from "xiaoym <xiaoymin@foxmail.com>" [ultimate]
```

最后出现`Good signature from ...`这个信息的时候,那说明我们的文件是签名验证成功的，反之，会出现`Bad signature from ...`这点需要注意

# 通知 Sonatype 构件已成功发布

需要在曾经创建的 Issue 下面回复一条“构件已成功发布”的评论，这是为了通知 Sonatype 的工作人员为需要发布的构件做审批，发布后会关闭该 Issue。

# 等待构件审批通过

没错，还是要等，也许又是 1 ~ 2 天。同样，当审批通过后，将会收到邮件通知。

# 从中央仓库中搜索构件

最后，就可以到中央仓库中搜索到自己发布的构件了！

> 中央仓库搜索网站：[http://search.maven.org/](http://search.maven.org/)

最后，想说一句：*第一次都是很痛的，以后就舒服了*。没错，只有第一次发布才如此痛苦，以后 deploy 的构件会自动部发布到中央仓库，无需再这样折腾了。

# 参考文章

- [将 Smart 构件发布到 Maven 中央仓库](https://my.oschina.net/huangyong/blog/226738)


- [Working with PGP Signatures](http://central.sonatype.org/pages/working-with-pgp-signatures.html)
- [No public key: Key with id: (XXXXX) was not able to be located (oss.sonatype.org)](https://stackoverflow.com/questions/19462617/no-public-key-key-with-id-xxxxx-was-not-able-to-be-located-oss-sonatype-org)
- [Android Studio使用Gradle上传AAR至Maven](http://2dxgujun.com/post/2015/02/11/Publish-AAR-to-Maven-Central-with-Gradle.html)
- [Maven Sonatype Nexus return 401](http://www.trinea.cn/dev-tools/maven-sonatype-nexus-return-401-which-settings-xml-maven-is-using/)


