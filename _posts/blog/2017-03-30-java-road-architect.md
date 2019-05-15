---
layout: post
title: Java架构师之路
categories: Java
description: Java架构师之路
keywords: Java,架构师
---

# Java架构师之路

## 入门（1~3年）

1. 目标：参与简单的项目开发。
2. 技能：

o   掌握 Java。经典的《Java核心技术：卷1 基础知识》(或者《Java 编程思想》)必看，跳过其中的图形和 applet 章节。习惯查阅 Java API Doc。为了保证代码的质量，《Effective Java》、《Clean Code》和《重构》也需要至少通读一遍。

o   熟悉 Linux 开发环境和bash shell。Linux 是我们的开发和部署环境，你最好尽快熟练它。Linux 的基本使用可以通过《鸟哥的Linux私房菜：基础学习篇（第三版）》学习，开发 bash shell 脚本可以参考《Linux Shell脚本攻略》。

o   掌握开发工具

§ 熟练使用一种 IDE。IntellijIDEA或者 Eclipse 都可以，推荐使用前者。至少熟悉常用的快捷键，会 debug(包括远程 debug)项目。

§ 熟悉一种编辑器。比如 Vim/Emacs/Sublime Text，至少学会搜索/替换/代码补全。

o   掌握 JDK 以外的常用类库和工具包。JDK 原生 API 在很多场景下使用并不方便。你需要掌握社区贡献的优秀类库和工具包，比如 apache commons、google guava 等，具体可以翻阅 [服务端技术选型 ](https://link.zhihu.com/?target=http%3A//xielong.me/2015/04/17/%25E6%259C%258D%25E5%258A%25A1%25E7%25AB%25AF%25E6%258A%2580%25E6%259C%25AF%25E9%2580%2589%25E5%259E%258B/)的Utility篇。

o   掌握 Web 开发框架。我们使用Spring(或Rose) + Ibatis(或Jade) 开发 web 服务，你需要熟练掌握它们。

o   学习代码规范。我们大致上遵循 oracle 的 Java 语言编码规范，你可以先阅读并熟悉它。Code Formatting 文件在 git@xxx/coding-standard.git，在编写代码之前，请把它导入到IDE 中。另外，确认 IDE 已经安装 Findbugs 和 CheckStyle 插件。

o   熟悉开发流程。我们的开发流程大致如下：功能开发->单元测试->功能测试->Code Review->集成测试->发布。确保你熟悉其中的每个环节。

o   其他。需要熟练使用版本控制工具 Git（阅读：《Git 权威指南》），以及项目构建工具 Maven（阅读：《Maven 实战》）。另外，在这个阶段可以尝试 TDD 开发。

## 进阶（3-5年）

·目标：独立负责某个服务端项目。

·技能：

o   掌握 web 开发最佳实践，掌握Restful API 设计，理解 Spring 原理。推荐阅读《Spring揭秘》。掌握项目分层、子模块划分。推荐阅读：《J2EE 核心模式》。

o   掌握 web 架构设计。包括Http 反向代理，数据缓存，负载均衡，水平扩展和垂直扩展。推荐阅读：《分布式 Java 应用：基础与实践》。

o   掌握关系型数据库。包括设计 MySQL 表结构，根据业务特点分表分库，基于执行计划的 SQL 分析优化，以及数据库容量规划。推荐阅读：《MySQL 必知必会》、《高性能 MySQL》。

o   了解 NoSQL。我们大规模使用Hadoop、HBase、Hive，同时部分项目使用 Redis、Storm。你需要学会这些工具最基本的使用。

o   学习 web 安全知识。了解web 前端安全问题。设计安全 web 服务，包括加解密、防伪造、防重放攻击等。

o   掌握 Http (推荐阅读：《图解Http》、《http权威指南》)、Thrift 等协议。

o   掌握服务容量规划，性能调优，可靠性保证，以及故障处理。学习容量规划和性能调优知识，梳理业务监控点，熟练使用我们的监控报警系统。推荐阅读：《深入理解 Java 虚拟机》。

o   其他。设计模式：从项目中学习，有时间可以看看《深入浅出设计模式》、《JDK 里的设计模式》。学习Java Socket 编程与多线程知识，可以看看《Java 并发编程实战》，并翻翻并发编程网的文章。

## 深入（5年以后-）

·目标：分布式系统和中间件开发。

·构建知识体系：《大型网站系统与 Java 中间件实践》、《大型网站技术架构：核心原理与案例分析》。

·原理与设计：《大规模存储式系统》、《UNIX 网络编程 卷1:套接字联网 API》、《HowTomcat Works》。

·学习开源项目：Apache Thrift、Zipkin、Netty、Rose、Jade、淘宝 RPC 系统 Dubbo等。分析项目中的设计思路。比如，同样是RPC框架，Finagle和 Dubbo 有什么异同。

·其他。根据参与的项目加深学习吧。比如，如果需要写 DSL，可以读一下《领域特定语言》，对 Redis 感兴趣推荐读一下：《Redis 设计与实现》。有两本书，无论做什么项目，都推荐读：《Unix 编程艺术》、《UNIX 环境高级编程(第3版)》。

 