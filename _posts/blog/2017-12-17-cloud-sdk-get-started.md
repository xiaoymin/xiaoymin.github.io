---
layout: post
title: 云数据中心sdk快速入门
categories: Blog
description: 云数据中心sdk快速入门
keywords: 数据中心、cloud-sdk
---



公司目前开发基础技术架构是：`Spring`、`Spring Boot`、`lishicloud-sdk`

其中`Spring`、`Spring Boot`都是目前网上流行的开源框架

`lishicloud-sdk`是公司针对云数据中心(cdc)开发工具包,封装了云数据中心所有的接口api操作

## 架构说明

spring、Spring Boot都是网上开源框架,自行搜索学习,这里不再叙述

lishicloud-sdk是云数据中心(cdc)提供数据CRUD操作,详细请参考`《lishicloud-sdk开发指南v0.4.9.pdf》`

## 快速开始

首先,我们基础架构是Spring,我们通常说的松耦合操作,需要使用到Spring的容器

因为sdk是开发工具包,所以sdk提供给我们的工具类,我们需要通过Spring 的容器bean注入达到目的

sdk提供的核心工具类`com.lishiots.cloud.sdk.client.CloudQueryRunner`

在Spring Xml时代,需要通过在spring 的Xml配置文件中注入,例如：

```xml
<!--云数据中心基本信息-->
 <bean id="cloudConnection" class="com.lishiots.cloud.sdk.basic.CloudBasicConnection">
     <property name="url" value="y.lishiots.com" />
     <property name="port" value="80" />
     <property name="userName" value="xx" />
     <property name="password" value="appsecret" />
 </bean>
 <!--注入连接池管理类-->
 <bean id="cloudPoolingConnectionManager" class="com.lishiots.cloud.sdk.basic.CloudPoolingConnectionManager">
     <property name="connection" ref="cloudConnection"></property>
 </bean>
 <bean id="cloudDataSource" class="com.lishiots.cloud.sdk.basic.CloudBasicDataSource">
     <property name="cloudPoolingConnectionManager" ref="cloudPoolingConnectionManager"></property>
 </bean>
 <!--注入CloudQueryRunner实例-->
 <bean id="run" class="com.lishiots.cloud.sdk.client.CloudQueryRunner">
     <property name="dataSource" ref="cloudDataSource" />
 </bean>
```

在Spring Boot中会有所差别,`@Configuration`标注这是一个配置类,通过`@Bean`注解来达到注入bean的目的,如下:

```java
@Configuration
public class CdcConfiguration {

    @Value(value = "${cdc.host}")
    private String host;
    @Value(value = "${cdc.port}")
    private Integer port;
    @Value(value = "${cdc.appid}")
    private String appid;
    @Value(value = "${cdc.appsecret}")
    private String appsecret;


    @Bean(value = "cloudQueryRunner")
    public CloudQueryRunner cloudQueryRunner(){
        CloudBasicConnection cloudBasicConnection=new CloudBasicConnection();
        LogbackLogger.info("host:"+host+",port:"+port+",appid:"+appid+",appsecret:"+appsecret);
        cloudBasicConnection.setUrl(host);
        cloudBasicConnection.setPort(port);
        //appid & appsecret
        cloudBasicConnection.setUserName(appid);
        cloudBasicConnection.setPassword(appsecret);
        //创建连接池管理类
        LogbackLogger.info("create cloudPoolingConnectionManager...");
        CloudPoolingConnectionManager cloudPoolingConnectionManager=new CloudPoolingConnectionManager();
        cloudPoolingConnectionManager.setConnection(cloudBasicConnection);
        //创建数据源
        LogbackLogger.info("create cloudBasicDataSource...");
        CloudBasicDataSource cloudBasicDataSource=new CloudBasicDataSource();
        cloudBasicDataSource.setCloudPoolingConnectionManager(cloudPoolingConnectionManager);
        //创建查询runner
        LogbackLogger.info("create cloudQueryRunner...");
        CloudQueryRunner runner=new CloudQueryRunner();
        runner.setDataSource(cloudBasicDataSource);
        return runner;
    }
}
```

通过以上操作,我们可以通过`@Autowired`自动注入实例,如下：

```java
@Service
public class CommonServiceImpl implements CommonService {

    @Autowired
    private CloudQueryRunner cloudQueryRunner;

    @Override
    public <T> List<T> queryAllData(Class<T> clzss,String resourceName, RequestExample requestExample) {
        boolean flag=true;
        int current_page=1;
        int page_size=requestExample.getPageSize();
        List<T> commonStats= Lists.newArrayList();
        do {
            Pagination<T> flowPagination=cloudQueryRunner.queryListByExample(clzss,resourceName,requestExample);
            if (flowPagination!=null&&flowPagination.getCount()>0){
                //计算总页数
                //部位
                System.out.println("common。");
                int totalPage=(flowPagination.getCount()+page_size-1)/page_size;
                if (current_page<totalPage){
                    current_page++;
                }else{
                    flag=false;
                }
                requestExample.setCurrentPage(current_page);
                commonStats.addAll(flowPagination.getData());
            }else{
                flag=false;
            }
        }while (flag);
        return commonStats;
    }
}  
```

### 增加

数据新增操作,提供对象即可,对象包含的字段必须是数据库表字段存在的字段，不能多、可以少(除必填字段)

```java
JSONObject jsonObject = new JSONObject();
jsonObject.put("modu_rq_url", rqUrl);
jsonObject.put("modu_img_url", imgUrl);
jsonObject.put("modu_url", moduUrl);
jsonObject.put("modu_name", moduName);
jsonObject.put("modu_plate_id", pid);
//这里可以是jsonobject、也可以是对象实例
RestMessage message = cloudQueryRunner.insert("modu", jsonObject);
//数据新增，返回新增记录主键id
//通过对象.getId()获取
System.out.println(message.getId())
```

### 批量新增

类似新增操作，只是把对象放入集合中

```java
List list=new ArrayList();
JSONObject jsonObject = new JSONObject();
jsonObject.put("modu_rq_url", rqUrl);
jsonObject.put("modu_img_url", imgUrl);
jsonObject.put("modu_url", moduUrl);
jsonObject.put("modu_name", moduName);
jsonObject.put("modu_plate_id", pid);
//加入结合数组
list.add(jsonObject);
//这里可以是jsonobject、也可以是对象实例,调用insertBatch方法
RestMessage message = cloudQueryRunner.insertBatch("modu", list);
//数据批量新增，返回批量新增记录主键id，逗号分隔 ，多条记录,如：id1,id2,id3...
//通过对象.getId()获取
System.out.println(message.getId())
```

###编辑

数据编辑操作,除更新字段,需要添加pkid主键字段,非id,这是云数据中心规定字段

```java
JSONObject jsonObject = new JSONObject();
jsonObject.put("modu_rq_url", rqUrl);
jsonObject.put("modu_img_url", imgUrl);
jsonObject.put("modu_url", moduUrl);
jsonObject.put("modu_name", moduName);
jsonObject.put("modu_plate_id", pid);
//更新id
jsonObject.put("pkid", pkid);
//这里可以是jsonobject、也可以是对象实例
RestMessage message = cloudQueryRunner.update("modu", jsonObject);
//数据编辑，返回编辑记录主键id
//通过对象.getId()获取
System.out.println(message.getId())
```

### 批量编辑

和编辑类似

```java
List list=new ArrayList();
JSONObject jsonObject = new JSONObject();
jsonObject.put("modu_rq_url", rqUrl);
jsonObject.put("modu_img_url", imgUrl);
jsonObject.put("modu_url", moduUrl);
jsonObject.put("modu_name", moduName);
jsonObject.put("modu_plate_id", pid);
//更新id
jsonObject.put("pkid", pkid);
list.add(jsonObject);
//这里可以是jsonobject、也可以是对象实例,调用updateBatch方法
RestMessage message = cloudQueryRunner.updateBatch("modu", list);
//数据批量编辑，返回批量编辑记录主键id，逗号分隔 ，多条记录,如：id1,id2,id3...
//通过对象.getId()获取
System.out.println(message.getId())
```

### 删除

```java
RestMessage message = cloudQueryRunner.delete("modu", pkid);
//数据删除，返回删除记录主键id
//通过对象.getId()获取
System.out.println(message.getId())
```

### 批量删除

```java
//传入多个id数组
RestMessage message = cloudQueryRunner.delete("modu", pkid,pkid1,pkid3...);
//数据删除，返回删除记录主键id
//通过对象.getId()获取
System.out.println(message.getId())
```

### 查询

除了云数据中心支持的nativeSQL查询数据，云数据中心还提供了多功能语法查询,同时也推荐开发者使用该方式查询数据，因为nativeSQL涉及到安全性等方面，云数据中心针对nativeSQL的接口以后可能会做调整，封闭也有可能.

```java
//requestExample对象
RequestExample requestExample=new RequestExample(10,1);
requestExample.addRelations(new Relation("scenic_info","scenic_info","id","scenic_id"));
requestExample.addSort("create_time","desc");
RequestExample.Criteria criteria=requestExample.create();
criteria.getMust().add(requestExample.createParam().addFuzzy("title","test"));
System.out.println(new Gson().toJson(requestExample));
//使用queryBuilder查询表user_info数据
Pagination<Map<String, Object>> pagination=cloudQueryRunner.queryListByExample("member_info",requestExample);
//遍历user_info数据
for (Map<String, Object> map:pagination.getData()){
    //do something
}

```

Sdk主要针对云数据中心给出的多功能查询结构体，封装了RequestExample对象，所有多功能查询，包括表关联查询，单表查询都可以使用该对象

云数据中心查询结构体如下：

```json
{
    "page_size": 10,
    "current_page": 1,
    "display_fields": "id",
    "query": {
        "must_not": [],
        "should": [],
        "must": [
            {
                "prefix": {},
                "term": {},
                "fuzzy": {
                    "title": "test"
                },
                "range": {}
            }
        ]
    },
    "sort": {
        "create_time": "desc"
    },
    "rel": [
        {
            "rel_type": "o2o",
            "rel_res_name": "scenic_info",
            "rel_res_alias": "scenic_info",
            "rel_res_field": "id",
            "rel_symbol": "=",
            "on_field": "scenic_id",
            "where": {
                "must": [],
                "mustNot": [],
                "should": []
            }
        }
    ]
}

```

主要包含以下属性：

* query:该属性是条件查询属性，包含必须有、必须没有、应该三大子属性，同时每个子属性又包含模糊、匹配、前缀匹配、区间这四种匹配模式供开发者调用
* sort:该属性是排序字段，是一个map对象，添加字段的排序属性，云数据中心会按排序好的字段顺序给出数据
* rel：该属性是关联查询属性，详细介绍请参考[关联查询](#_关联查询)章节
* current_page:当前页面

* page_size:页码大小
* display_fields: 可选择的返回资源属性,不填则返回所有属性

如上面的JSON体中，"[fuzzy]()":{"title":"test"}就是一个判断式，它代表的是title的模糊匹配test值。

除了fuzzy外，还有另外三个条件判断式的匹配方式(MATCH)，下面我们简单介绍一下。

* term : 完全匹配;
* prefix : 前缀匹配;
* fuzzy : 模糊匹配;
* range : 范围匹配。

must/must_not/should为三个查询判断模式,

* must: 必须满足的判断模式。must里面的条件判断式越多，结果越精确。
* must_not：必须不包含(排除)的判断模式。只要满足must_not下的条件判断式的结果都不会被返回。
* should：该模式的主要用途是查询满足多个条件的其中一个或多个的情况。所以，should下的条件判断式必须大于等于两个。

如何需要输入多个相同键，不同值的参数？

因为JSON主要是用键值对来绑定数据的，所以相同的键在同一个{body}里面是不能同时存在的，这和Java中的Map、C#中的Dictionary类似一样。

所以需要在一个查询里面有多个相同键的情况，可以将相同键分装在两个不同的{body}中。

例如： 我们要查询 所有不包含北京和上海的酒店，那可以使用

```json
{
    "must_not": [
        {
            "prefix": {
                "hotel_cn_name": "北京"
            }
        },
        {
            "prefix": {
                "hotel_cn_name": "上海"
            }
        }
    ]
}
```

should的注意点

should表示的是满足多个条件里面的一个或多个即可，所以should的条件判断式至少要有两个。 但是这里需要特别主要的是，如果判断式的键是一样的，则必须这样写

```json
{
    "should": [
        {
            "prefix": {
                "hotel_cn_name": "北京"
            }
        },
        {
            "prefix": {
                "hotel_cn_name": "上海"
            }
        }
    ]
}

```

但是如果判断式键不一样，那么如下这样也算是两个判断式:

```json
{
    "should": [
        {
            "prefix": {
                "hotel_cn_name": "北京",
                "hotel_name": "h"
            }
        }
    ]
}

```

**RequestExample**

在前面多功能查询三个章节中，都详细的阐述了云数据中心对于多功能查询的结构，那么我们要如何使用它呢？

在我们sdk中，sdk提供了RequestExample对象，开发者可以轻松使用该对象构建查询结构体，查询我们想要的结果.

```java
//创建requestExample对象,传入页码,当前页
RequestExample requestExample=new RequestExample(10,1);
//如果有排序需求,desc,asc
requestExample.addSort("create_time","desc");
//条件判断
RequestExample.Criteria criteria=requestExample.create();
//必须满足
//完全匹配
criteria.getMust().add(requestExample.createParam().addTerm("key","value"));
//模糊匹配
criteria.getMust().add(requestExample.createParam().addFuzzy("key","value"));
//前缀匹配
criteria.getMust().add(requestExample.createParam().addPrefix("key","value"));
//范围
//gt:大于
//lt：小于
//gte:大于等于
//lte:小于等于
//ne:不等于
//eq:等于
//例如查询create_time大于2017-01-01 00:00:00
Map gt=new HashMap();
gt.put("gt","2017-01-01 00:00:00");
criteria.getMust().add(requestExample.createParam().addRange("create_time",gt));

//类似不满足、应该满足
//criteria.getMustNot().add()
//criteria.getShould().add()


//如果有表关联查询,以下语句创建关联语句
//创建表关联
//例如查询门票信息表中,所属景点关联信息
//门票表中存在景点id字段scenic_id
Relation relation=new Relation("scenic_info","scenic_info","id","scenic_id");
requestExample.addRelations(relation);
//......
```
