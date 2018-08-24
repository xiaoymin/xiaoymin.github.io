---
layout: post
title: Lucene(7.3.1)学习笔记-Document类源码解析
categories: Java
description: Lucene(7.3.1)学习笔记-Document类源码解析
keywords: Lucene,搜索引擎
---

本笔记针对Lucene版本为7.3.1

## 介绍

Document对象是Lucene中搜索和索引的最小单元,一个文档对象，包含多个属性字段集合列表，每个字段对象都包含名称及字段值.

Documet类图结构

![](/images/blog/lucene_document_source/Document.png)

Document类实现了Iterable接口，接收`IndexableField`泛型类型

每个Document对象维护一个fields集合列表，Java代码如下：

```java
private final List<IndexableField> fields = new ArrayList<>();
```

## 构造函数

```java
/** Constructs a new document with no fields. */
public Document() {}
```

## 方法

| 返回类型      | 方法 | 描述                                       |
| -------------------------- | ------------------------------------------|------------------ |
| `void`                     | `add(IndexableField field)`|添加字段到文档中.                 |
| `void`                     | `clear()`|清除文档中所有字段.               |
| `String`                   | `get(String name)`|返回字段string值，如果字段拥有相同的name，则返回最先添加的字段，否则返回null. |
| `BytesRef`                 | `getBinaryValue(String name)`|返回最先添加的字段name二进制值. |
| `BytesRef[]`               | `getBinaryValues(String name)`|返回字段name的二进制值数组. |
| `IndexableField`           | `getField(String name)`|返回字段. |
| `List<IndexableField>`     | `getFields()`|返回只读字段List集合. |
| `IndexableField[]`         | `getFields(String name)`|返回name匹配的字段数组. |
| `String[]`                 | `getValues(String name)`|返回name匹配的字段值数组. |
| `Iterator<IndexableField>` | `iterator()`                                                 ||
| `void`                     | `removeField(String name)`|移除第一个匹配name的字段. |
| `void`                     | `removeFields(String name)`|移除所有name匹配的字段. |
| `String`                   | `toString()`|打印文档字段列表. |

## IndexableField

索引的单个字段，该类是接口，主要包括方法：名称、索引类型、等

类图如下：

![](/images/blog/lucene_document_source/TextField.png)

子类实现:

* TextField
* StringField
* IntPoint
* LongPoint
* FloatPoint
* DoublePoint
* SortedDocValuesField
* SortedSetDocValuesField
* NumericDocValuesField
* SortedNumericDocValuesField
* StoredField