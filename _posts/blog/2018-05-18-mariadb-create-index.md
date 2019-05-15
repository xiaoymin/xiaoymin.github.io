---
layout: post
title: Mariadb创建索引
categories: 数据库
description: Mariadb创建索引
keywords: mariadb索引,数据库索引
---

英文原文地址：[创建索引](https://mariadb.com/kb/en/library/create-index/)

## 创建索引

### 语法

```sql
CREATE [OR REPLACE] [ONLINE|OFFLINE] [UNIQUE|FULLTEXT|SPATIAL] INDEX 
  [IF NOT EXISTS] index_name
    [index_type]
    ON tbl_name (index_col_name,...)
    [WAIT n | NOWAIT]
    [index_option]
    [algorithm_option | lock_option] ...

index_col_name:
    col_name [(length)] [ASC | DESC]

index_type:
    USING {BTREE | HASH | RTREE}

index_option:
    KEY_BLOCK_SIZE [=] value
  | index_type
  | WITH PARSER parser_name
  | COMMENT 'string'

algorithm_option:
    ALGORITHM [=] {DEFAULT|INPLACE|COPY}

lock_option:
    LOCK [=] {DEFAULT|NONE|SHARED|EXCLUSIVE}
```

### 描述

创建索引映射到ALTAL TABLE语句以创建索引。参阅[Alter Table](https://mariadb.com/kb/en/library/alter-table/)表。创建索引不能用于创建主键；而是使用ALTER TABLE语法代替。

如果另外一个数据库连接正在使用该表,则该表元数据锁是激活的,该连接所执行的语句需要等待指导该锁释放,对非事务性表也是如此.

另一个快捷方式，[删除索引](https://mariadb.com/kb/en/library/drop-index/)，允许移除索引。

对于用作索引名称的有效标识符，请参见[标识符名称](https://mariadb.com/kb/en/library/identifier-names/)

```text
注意，KEYAB块大小在创建索引中被忽略，尽管它包含在StEdio CREATE表的输出中。
```

**MariaDb 10.0**

`ONLINE` and `OFFLINE` 从句已经被移除,不在支持

**MariaDb 5.5**

注释“字符串”索引选项允许多达1024个字符的注释。

**MariaDb 5.3**

语句支持[进度报告](https://mariadb.com/kb/en/library/progress-reporting/)

#### 唯一/全文/空间索引

请参见[唯一索引](https://mariadb.com/kb/en/getting-started-with-indexes/#unique-index)、[空间索引](https://mariadb.com/kb/en/spatial-index/)和[全文索引](https://mariadb.com/kb/en/full-text-indexes/)的详细信息。

#### 索引类型

有关每个存储引擎的允许索引类型的详细信息，请参见[存储引擎索引类型](https://mariadb.com/kb/en/storage-engine-index-types/)。

#### OR REPLACE

**MariaDb 10.1.4**

`OR REPLACE`从句添加支持

如果使用了该索引，并且该索引已经存在，而不是返回一个错误，那么现有索引将被删除，并由新定义的索引代替。

#### IF NOT EXISTS

如果使用`IF NOT EXISTS`语句创建索引,则只会在该索引不存在的情况才创建该索引,如果该索引存在,将会触发警告.

#### WAIT/NOWAIT

设置锁等待超时。参考[WAIT AND NOWAIT](https://mariadb.com/kb/en/wait-and-nowait/)。

### 示例

创建一个唯一索引：

```sql
CREATE UNIQUE INDEX HomePhone ON Employees(Home_Phone);
```

OR REPLACE 和IF NOT EXISTS ：

```sql
CREATE INDEX xi ON xx5 (x);
Query OK, 0 rows affected (0.03 sec)

CREATE INDEX xi ON xx5 (x);
ERROR 1061 (42000): Duplicate key name 'xi'

CREATE OR REPLACE INDEX xi ON xx5 (x);
Query OK, 0 rows affected (0.03 sec)

CREATE INDEX IF NOT EXISTS xi ON xx5 (x);
Query OK, 0 rows affected, 1 warning (0.00 sec)

SHOW WARNINGS;
+-------+------+-------------------------+
| Level | Code | Message                 |
+-------+------+-------------------------+
| Note  | 1061 | Duplicate key name 'xi' |
+-------+------+-------------------------+
```

### 另外参阅

- [标识符名称](https://mariadb.com/kb/en/identifier-names/) 
- [开始使用索引](https://mariadb.com/kb/en/getting-started-with-indexes/) 
- [什么是索引?](https://mariadb.com/kb/en/what-is-an-index/) 
- [修改表](https://mariadb.com/kb/en/alter-table/) 
- [删除索引](https://mariadb.com/kb/en/drop-index/) 
- [空间索引](https://mariadb.com/kb/en/spatial-index/) 
- [全文索引](https://mariadb.com/kb/en/full-text-indexes/)

## 使用场景

在目前开发的丽水实时客流量大屏系统中,针对高速卡口车流数据报表,接口响应速度异常缓慢,接口初次使用`Chrome`浏览器的`Network`查看是16s的响应时间

![](/images/blog/mariadb-create-index/1.png)

查看到该接口`api/carSourceTopFive `

查看Java代码逻辑，Java代码如下：

```java
public List<HighwayCarInfo> queryCurrentAllCarInfoByHour(String time, String stationName) {
        List<HighwayCarInfo> highwayCarInfoList=Lists.newArrayList();
        Map params=Maps.newHashMap();
        if (StringUtils.isNotBlank(time)){
            params.put("time",time);
        }
        if(StringUtils.isNotBlank(stationName)){
            params.put("siteName",stationName);
        }
        boolean lastRecord=true;
        int current_page=1;
        int page_size=1000;
        do{
            Pagination<HighwayCarInfo> mapPagination=cloudQueryRunner.queryListByExample(HighwayCarInfo.class,"highway_car_info",params,current_page,page_size);
            if(mapPagination!=null&&mapPagination.getCount()>0){
                if(mapPagination.getData().size()<page_size){
                    lastRecord=false;
                }else{
                    current_page++;
                }
                highwayCarInfoList.addAll(mapPagination.getData());
            }else{
                lastRecord=false;
            }
        }while (lastRecord);
        return highwayCarInfoList;
    }
```

最终得出结果是查询`highway_car_info`表，使用time及siteName两个字段进行匹配查询

得到调试SQL，在数据库中执行

```SQL
select * from resource_lishui_lishui_daping_highway_car_info where time='2018051814'
```

etc....查询耗时10s。。

最终对表`highway_car_info`的time字段创建索引

使用explain语句查看SQL的执行计划

```sql
explain select * from resource_lishui_lishui_daping_highway_car_info where time='2018051814'
```

得到结果：

| id   | select_type | table                                          | type | possible_keys    | key              | key_len | ref   | rows | Extra                 |
| ---- | ----------- | ---------------------------------------------- | ---- | ---------------- | ---------------- | ------- | ----- | ---- | --------------------- |
| 1    | SIMPLE      | resource_lishui_lishui_daping_highway_car_info | ref  | IDX_HIGYWAY_TIME | IDX_HIGYWAY_TIME | 768     | const | 1151 | Using index condition |


