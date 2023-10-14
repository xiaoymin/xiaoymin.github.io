---
layout: post
title: Spring Boot框架中针对数据文件模板的下载总结
categories: SpringBoot
description: Spring Boot框架中针对数据文件模板的下载总结
keywords: SpringBoot,文件下载
---

## 1.前言

在我们的日常开发中，经常会碰到注入导入Excel数据到系统中的需求，而在导入Excel数据时，一般的业务系统都会提供数据的Excel模板，只有提交的Excel数据满足业务系统要求的模板时，数据才能够正常的导入系统中。因此针对这种需求，一般我们会在系统中提供一个Excel模板的下载按钮，业务人员在使用时，可以先下载Excel模板，然后按照模板中的格式将数据填充，即可导入成功。本文主要总结目前在开发这类需求时碰到的问题。

## 2.解决方案

从需求上来看，目前有大致三种解决方案，针对数据文件的模板下载，分别是：

- 模板文件直接存放在前端，作为静态资源，前端直接可以发送请求进行下载
- 模板文件存服务器磁盘，提供接口下载
- 模板文件存储在项目jar包中，提供接口下载

### 2.1 作为静态资源直接下载

第一种方式是最简单的，将数据文件直接作为静态资源放在前端目录，前端通过请求即可进行下载

### 2.2 模板文件存储在服务器，提供接口下载

第二种也是我们经常使用的方法，开发人员将模板文件放在服务器中的某个目录下，通过在代码中配置存储目录的方式，并且提供下载接口，当前端发起接口请求时，服务端根据请求将文件写入到响应流中

示例代码如下：

```java
@Value("${templateFile}")
String downloadFilePath;

@GetMapping("/download")
public void downloadExcel(HttpServletResponse response){
    logger.info("下载Excel模板");
    try {
        File file=new File(downloadFilePath);
        ServletUtil.write(response,file);
    } catch (IOException e) {
        logger.error(e.getMessage(),e);
    }
}
```

因为文件存储在磁盘中，并且通过Spring提供的`@Value`注解将文件的位置在配置文件中进行配置，因此文件对象我们可以直接通过`new File`的方式直接获取到文件，最终调用工具类`ServletUtil`将该文件写入到`HttpServletResponse`的流中去，实现下载的目录

### 2.3 模板文件存在在jar中，提供接口下载

通过上面的两种下载方式，我们基本已经能实现文件的下载，满足业务的需要，但有时候我也会思考，是否把数据模板文件直接放在Spring Boot的jar中，这种方式的优势：

- 防止模板文件存储在磁盘时被误删的操作发送
- 如果程序部署需要迁移服务器，能有效避免下载接口的容错，忘记迁移模板文件等情况会导致程序异常
- 和程序代码存储在一起更加完整

基于上面的优势，因此，针对数据模板文件，我认为应该和项目直接放在一起，这样对于程序部署等都是非常有利的。

一般，在Spring Boot的开发框架中，我们可以在`resources`目录下建立文件夹，然后将相应的数据文件放入目录中，再提供接口读取该文件进行下载

目录结构如下：

```properties
|---project
|--------src/main/java
|--------src/main/resources
|------------data
# 模板文件
|--------------template.xlsx
```

因为我们将文件放在了`resources`目录下，此时如果要读取该文件，我们需要利用到Spring提供的[`ClassPathResource`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/io/ClassPathResource.html)类进行读取，调用代码如下：

```java
ClassPathResource classPathResource=new ClassPathResource("data/tag_data_template.xlsx");
```

此时，我们的下载接口代码如下：

```java
@GetMapping("/download")
public void downloadExcel(HttpServletResponse response){
    logger.info("下载Excel模板");
    ClassPathResource classPathResource=new ClassPathResource("data/template.xlsx");
    try {
        //创建临时文件
        File file=File.createTempFile("template",".xlsx");
        //从当前resources目录下的文件流拷贝到File中
        FileUtils.copyInputStreamToFile(classPathResource.getInputStream(),file);
        logger.info("fileName:{}",file.getName());
        //将临时文件写出到流中
        ServletUtil.write(response,file);
    } catch (IOException e) {
        logger.error(e.getMessage(),e);
    }
}
```

这里会有1个疑问点，就是我们既然已经使用了Spring提供的[`ClassPathResource`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/io/ClassPathResource.html)进行读取文件，而该类通过继承[AbstractFileResolvingResource](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/io/AbstractFileResolvingResource.html)也提供了`getFile`方法获取File对象，为何不直接调用?

比如下载的接口代码改成这样：

```java
@GetMapping("/download")
public void downloadExcel(HttpServletResponse response){
    logger.info("下载Excel模板");
    ClassPathResource classPathResource=new ClassPathResource("data/template.xlsx");
    try {
        //直接获取文件
        File file=classPathResource.getFile();
        //将临时文件写出到流中
        ServletUtil.write(response,file);
    } catch (IOException e) {
        logger.error(e.getMessage(),e);
    }
}
```

通过源码来分析

```java
//AbstractFileResolvingResource.getFile
@Override
public File getFile() throws IOException {
    URL url = getURL();
    if (url.getProtocol().startsWith(ResourceUtils.URL_PROTOCOL_VFS)) {
        return VfsResourceDelegate.getResource(url).getFile();
    }
    return ResourceUtils.getFile(url, getDescription());
}

//ResourceUtils
/** URL protocol for a file in the file system: "file". */
public static final String URL_PROTOCOL_FILE = "file";
//ResourceUtils.getFile
public static File getFile(URL resourceUrl, String description) throws FileNotFoundException {
    Assert.notNull(resourceUrl, "Resource URL must not be null");
    if (!URL_PROTOCOL_FILE.equals(resourceUrl.getProtocol())) {
        throw new FileNotFoundException(
            description + " cannot be resolved to absolute file path " +
            "because it does not reside in the file system: " + resourceUrl);
    }
    try {
        return new File(toURI(resourceUrl).getSchemeSpecificPart());
    }
    catch (URISyntaxException ex) {
        // Fallback for URLs that are not valid URIs (should hardly ever happen).
        return new File(resourceUrl.getFile());
    }
}
```

在最终的`ResourceUtils.getFile`方法获取File对象时，Spring会对当前URL对象的协议进行判断,如果文件的协议不是`file`，则会抛出异常，提示

```properties
 class path resource [data/tag_data_template.xlsx] cannot be resolved to absolute file path because it does not reside in the file system: jar:file:/home/app.jar/BOOT-INF/classes!/data/template.xlsx
```

大致的意思就是该文件不在文件系统中，既然Spring不允许这么干，那么我们只能通过获取该文件的输入流的方式，将流写到临时文件中去，最终将该临时文件写出。

```java
//FileUtils.copyInputStreamToFile方法
//commons-io 包中提供的方法
public static void copyInputStreamToFile(InputStream source, File destination) throws IOException {
    try {
        FileOutputStream output = openOutputStream(destination);
        try {
            IOUtils.copy(source, output);
            output.close(); // don't swallow close Exception if copy completes normally
        } finally {
            IOUtils.closeQuietly(output);
        }
    } finally {
        IOUtils.closeQuietly(source);
    }
}
```

以上的操作完成后，我们可能还会碰到部署时，代码还是会抛异常的问题，说文件找不到，这种情况一般会和我们项目的maven打包配置有关，我们需要在项目的maven配置中将模板文件也一起打包进去，例如增加配置如下：

```xml
<resources>
    <resource>
        <directory>src/main/resources</directory>
        <includes>
		   <!--包含data目录下的所有文件一起打包-->
            <include>**/data/**</include>
        </includes>
        <filtering>false</filtering>
    </resource>
</resources>
```

至此，就大功告成了！！！

## 3.附录

### 3.1 `ServletUtil.write`方法

[`ServletUtil`](https://hutool.cn/docs/#/extra/Servlet%E5%B7%A5%E5%85%B7-ServletUtil)工具类是引用的开源项目[Hutool](https://github.com/looly/hutool)中的一个关于Servlet的工具类封装.

`write`方法提供了将文件写入到流中的封装，来看具体的源码：

> 封装了我们工作中基础的写出流的操作，我们在代码中也可以通过调用此方法简化我们的代码。

```java
/** 默认缓存大小 8192*/
public static final int DEFAULT_BUFFER_SIZE = 2 << 12;
/**
 * 返回文件给客户端
 * 
 * @param response 响应对象{@link HttpServletResponse}
 * @param file 写出的文件对象
 * @since 4.1.15
*/
public static void write(HttpServletResponse response, File file) {
    final String fileName = file.getName();
    //根据文件名称获取文件的响应类型，如果没有则默认application/octet-stream
    final String contentType = ObjectUtil.defaultIfNull(FileUtil.getMimeType(fileName),"application/octet-stream");
    BufferedInputStream in = null;
    try {
        in = FileUtil.getInputStream(file);
        //再次调用，写出Header等信息
        write(response, in, contentType, fileName);
    } finally {
        IoUtil.close(in);
    }
}

/**
 * 返回数据给客户端
 * 
 * @param response 响应对象{@link HttpServletResponse}
 * @param in 需要返回客户端的内容
 * @param contentType 返回的类型
 * @param fileName 文件名
 * @since 4.1.15
*/
public static void write(HttpServletResponse response, InputStream in, String contentType, String fileName) {
    final String charset = ObjectUtil.defaultIfNull(response.getCharacterEncoding(), CharsetUtil.UTF_8);
    response.setHeader("Content-Disposition", StrUtil.format("attachment;filename={}", URLUtil.encode(fileName, charset)));
    response.setContentType(contentType);
    //写出
    write(response, in);
}

/**
 * 返回数据给客户端
 * 
 * @param response 响应对象{@link HttpServletResponse}
 * @param in 需要返回客户端的内容
*/
public static void write(HttpServletResponse response, InputStream in) {
	write(response, in, IoUtil.DEFAULT_BUFFER_SIZE);
}

/**
 * 返回数据给客户端
 * 
 * @param response 响应对象{@link HttpServletResponse}
 * @param in 需要返回客户端的内容
 * @param bufferSize 缓存大小
*/
public static void write(HttpServletResponse response, InputStream in, int bufferSize) {
    ServletOutputStream out = null;
    try {
        out = response.getOutputStream();
        IoUtil.copy(in, out, bufferSize);
    } catch (IOException e) {
        throw new UtilException(e);
    } finally {
        IoUtil.close(out);
        IoUtil.close(in);
    }
}
```

