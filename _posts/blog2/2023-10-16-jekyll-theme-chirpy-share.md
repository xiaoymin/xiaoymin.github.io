---
layout: post
title: 超赞的博客主题分享，值得一看
description: 超赞的博客主题分享，值得一看
keywords:
- jekyll博客
- jekyll主题
categories:
- Blog
sidebar_position: 4
author: 八一菜刀
data: 2023年10月16日
---

最近在学习RAG、[大模型](/categories/大模型/)等领域方面的技术，想在学习的过程中做总结性的输出，因此就想把自己之前弄的博客重新整理一番,主要有几个原因:

- 博客网页无法适配移动端(非常重要的一个特性)
- 主题有些腻了,想换个新主题
- GitHub Pages <-> 博客 <-> 微信公众号 整体链路的文章编写发布顺畅的诉求

后来，就基于自己的想法，整理的了要重新整理博客的需求，列了一个思维导图，如下图:

![图1-博客需求整理](/images/blog2/jekyll-theme-share/blog_build.png)

主要从以下几个方面考虑：

## 1.基础框架

肯定是基于目前已经开放流行的博客框架进行改造,这样能够快速的搭建完成,而且无需考虑页面布局的情况

这里列的大部分我都是用过

- [VuePress](https://vuepress.vuejs.org/zh/guide/): Vue 驱动的静态网站生成器,在很早给[Knife4j](https://doc.xiaominfo.com/v2/)写开源的技术文档时就使用的这个
- [VitePress](https://vitepress.dev/): 在Vite框架出来后,基于Vite生态下的静态网页生成器，是一个非常棒的组件，速度飞快，当这次我并没有选择这个。原因后面会说明
- [Hexo](https://hexo.io/zh-cn/) :快速、简洁且高效的博客框架,也是很早的一个框架，主题样式非常的多，[员外的网站](https://www.luxiangdong.com/)就使用了这个框架
- [Docusaurus](https://docusaurus.io/): 基于React技术栈的一个静态网站生成器，同样非常的优秀，目前[Knife4j](https://doc.xiaominfo.com/)的开源技术文档用这个编写
- 👉 [Jekyll](https://jekyllrb.com/) : 基于Ruby语言编写的老牌博客框架，本期的主角

这里选择[Jekyll](https://jekyllrb.com/) 主要原因有几个：

- 之前的博客就是用[Jekyll](https://jekyllrb.com/) 来写的，而迁移博客是一项比较繁杂的任务，不想浪费太多的时间
- 博客网站我觉得**最重要的是在于作者的坚持输出**，主题只要功能满足要求即可，不必追求太花哨的功能

## 2.首页内容

第二个方面考虑的因素是首页的内容，像[VuePress](https://vuepress.vuejs.org/zh/guide/)和[VitePress](https://vitepress.dev/)默认的首页内容其实是非常简洁的，我觉得更适合产品的展示，不适合博客，当然你也可以花时间改造，或者选择一个很棒的主题进行替换，这里主要是时间不够，就没有选择这个，并非所他们不好。而我所考虑的是：

- 首页的内容要主题鲜明，详细阐述整个站点内容
- 多篇文章则分页，博客必须全部在首页展示，不跳转到二级页面
- 尽可能多的展示内容，**首页的资源是非常宝贵的**

以下就是该博客的首页，非常符合我的诉求

![图2-博客首页](/images/blog2/jekyll-theme-share/blog_index.png)

## 3.基本功能

接下来就是考虑博客框架一个基础的功能，这里从个人的诉求，列了以下的要求：

### 3.1 **适配移动端**

**移动端时代，这是一个非常重要的特性**，有时候在发公众号文章时可以在底部配置原文链接，对于读者来说可以无差别阅读

![图3-移动端适配](/images/blog2/jekyll-theme-share/blog_mobile.png)

### 3.2 **站内搜索**

可以提供站内搜索的功能，不管是构建本地博客索引还是使用外部的实现，例如《[Final.激活Knife4j官网的文档搜索功能](/posts/knife4j-document-active-search/)》提到的[algolia](https://www.algolia.com/)都是可以的

![图4-站内搜索](/images/blog2/jekyll-theme-share/blog_search.png)

### 3.3 **归档功能**

不管是分类还是日期归档，都是必须的功能

- 分类归档：能够给读者一个快速索引，查看感兴趣的内容
- 日期归档: 根据最新日期查看更新的篇幅,同时也是对作者的一个鞭策，非常实用

![图5-归档](/images/blog2/jekyll-theme-share/blog_arch.png)
![图6-归档1](/images/blog2/jekyll-theme-share/blog_arch1.png)

### 3.4 **评论功能**

评论算是一个个人诉求吧,并非强制，当然如果有默认提供那更好，本站点基于[giscus](https://giscus.app/zh-CN)实现
![图7-评论](/images/blog2/jekyll-theme-share/blog_comment.png)

### 3.5 **文章分享**

快速分享到各大社交平台，非常实用的功能

![图7-分享](/images/blog2/jekyll-theme-share/blog_share.jpg)

### 3.6 **站点统计**

该功能我想目前各个框架都支持，使用百度统计或者Google Analytics应该都非常方便

### 3.7 **RSS**

根据个人喜好提供

![图8-评论](/images/blog2/jekyll-theme-share/blog_feed.jpg)

## 4. 博客大纲

个人的博客，我觉得整体的大纲内容不必太多，只需要关注写作内容即可，能够将写作内容能够快速的索引到并且给读者一个清晰的结构，就可以了

所以我的博客大纲主要是四个： **主页**、**标签**、**归档**、**关于**

## 5.总结

本站的博客基于[Jekyll](https://jekyllrb.com/)的[chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)主题实现，该主题满足了博主的所有诉求，非常棒，希望你也能够喜欢!!!

本站源码：[https://github.com/xiaoymin/xiaoymin.github.io](https://github.com/xiaoymin/xiaoymin.github.io)

博客首页：[https://www.xiaominfo.com/](https://www.xiaominfo.com/)

主题地址: [https://github.com/cotes2020/jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)
