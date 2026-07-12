---
title: "使用Claude修改Knife4j中的issues"
description: "使用Claude修改Knife4j中的issues"
pubDatetime: 2023-07-15T00:00:00+08:00
tags:
  - "Knife4j"
keywords:
  - "claude修改代码"
canonicalURL: "https://www.xiaominfo.com/2023/07/15/knife4j-use-claude-fixed-issue/"
---

本文和Knife4j使用无关，主要分享作者在解决Knife4j的issues过程中如何通过Claude.Ai快速解决问题

关联Issues：
- ✅ [能否出个swagger转ts的插件,在文档管理中多一个,导出ts,想帮我的下游减轻工作量](https://gitee.com/xiaoym/knife4j/issues/I6T78E)
- ✅ [https://github.com/xiaoymin/knife4j/issues/568](https://github.com/xiaoymin/knife4j/issues/568)


📹 视频地址：[https://www.bilibili.com/video/BV1mm4y1E7iV/?vd_source=ef34098d916a578698508a43063099ac](https://www.bilibili.com/video/BV1mm4y1E7iV/?vd_source=ef34098d916a578698508a43063099ac)
<iframe src="//player.bilibili.com/player.html?aid=700889944&bvid=BV19h4y1j7y9&cid=1197294840&page=1&high_quality=1&danmaku=0" allowfullscreen="allowfullscreen" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>


## 🌋 背景

在上面的issues中，有用户提到在目前的Knife4j的界面中，对于生成的Script代码(主要是TypeScript)，对于实体类部分，缺失属性定义，于是需要解决

主要的问题点：

- ❓ Knife4j的Script功能来源于[PR](https://github.com/xiaoymin/knife4j/pull/489)
- ❓ 代码中使用了[babel/generator](https://babel.dev/docs/babel-generator),而我对该组件并不熟悉


## 🔥 解决过程

### 传统方案

1、首先，我直接定位到函数的源码，查看源码，看是否有属性直接能够使用，部分源码：

```typescript
export interface TSPropertySignatureBuilder {
    (key: K.ExpressionKind, typeAnnotation?: K.TSTypeAnnotationKind | null, optional?: boolean): namedTypes.TSPropertySignature;
    from(params: {
        comments?: K.CommentKind[] | null;
        computed?: boolean;
        initializer?: K.ExpressionKind | null;
        key: K.ExpressionKind;
        loc?: K.SourceLocationKind | null;
        optional?: boolean;
        readonly?: boolean;
        typeAnnotation?: K.TSTypeAnnotationKind | null;
    }): namedTypes.TSPropertySignature;
}

```

![图1.t.tsPropertySignature函数源码](/images/blog/use-claude-fixed-issues/source-property.jpg)


在源码中，有`comments`属性，在没有查看官网文档的情况下，我姑且一试,直接给`comments`赋值，看直接传递是否奏效,结果并未不满意。



2、这种情况下只能去去看了[babel/generator](https://babel.dev/docs/babel-generator)的官方文档了，去翻看部分函数的doc文档参数，希望能够快速找到能够为生成的interface的属性标注comment的方法


但我并没有找到我所需要的，能够为生成的properties增加注释的方法


## 💯 求助AI

想到之前在网上看到[Claude2](https://claude.ai/)已经发布，支持100k的上下文并且免费，因此决定试试看

1、首先我将Knife4j中整段js函数作为附件进行了上传，并且构建了Prompt，如下图：

![图2.Claude2中的Prompt](/images/blog/use-claude-fixed-issues/js-fun.jpg)

Claude2也给出了答案，但好像并不是我想要的，如下图：

![图3.Claude2中回答](/images/blog/use-claude-fixed-issues/Claude-a1.png)


2、于是我在继续追问，因为知道具体的函数所执行的位置，所以直接问函数中的某一个方法，看看Claude2是否能够定位问题

![图4.Claude2中回答](/images/blog/use-claude-fixed-issues/Claude-a2.png)

这一次，Claude2好像理解了我的意图，并定位出了问题所在，我根据提示，在代码中进行了修改，代码修改如下：

```typescript
export function getInterfaceBody(props, openOptional) {
  return props.map(p => {
    let ta = t.tsTypeAnnotation(getTsType(p, getBaseType(p.type), openOptional), p.description);
    let key = t.identifier(p.name);
    let pro = t.tsPropertySignature(
      key,
      ta,
      openOptional ? !p.require : false,
    )
    // 增加注释
    pro.leadingComments = [{
      type: "CommentBlock",
      value: `${p.description} `
    }]
    return pro;
  })
}

```


此时在界面中，再次刷新界面，Knife4j的Scirpt中，每一个定义的interface都有了comment，如下图：

![图5.Knife4j中Script功能](/images/blog/use-claude-fixed-issues/show.jpg)