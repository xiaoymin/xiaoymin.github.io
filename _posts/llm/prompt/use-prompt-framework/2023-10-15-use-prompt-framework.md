---
layout: post
title: 用好大模型?这5种实用的Prompt框架你一定要看看!
description: 用好大模型?这5种实用的Prompt框架你一定要看看!
keywords:
- ChatGPT
- 大模型
- Prompt
- 如何构建Prompt
categories:
- 大模型
sidebar_position: 4
author: 八一菜刀
data: 2023年10月15日
---

## 前言

大模型正为我们带来前所未有的技术革新，而用好大模型也是有一定技巧的。

本文主要分享**5种**实用的`Prompt`对话提示框架，结合自己的实际需求，让你能够灵活使用大模型!

## 1.RTF框架

**RTF(Role-Task-Format)框架**是一个非常简单通用的Prompt提示框架，我们和任意大模型对话场景下都可以使用该规范进行改进输出

- **R-Role(角色)**：指定大模型担当固定角色(程序员、数据分析师、讲解员、记者等等)
- **T-Task(任务)**: 任务，告诉大模型需要为我们做的事情
- **F-Format(格式)**：大模型最终结果的返回格式(比如：表格、Markdown、英文等等)

主要优点：

- 简单、方便
- 指定Role角色，可以让大模型在当前的角色范围内回答知识，这在一些特定的领域中非常有效
- 指定Role角色也能让工程上检索知识能够确定边界范围，配合元数据所发挥的威力会更强
- 如果结合RAG知识内容检索，那么上下文回答的内容会让用户感觉更加是顺畅

**示例1**: **给出一份Python语言的学习清单**

> Role：指定大模型角色为Python布道师
>
> Task：Python语言的学习从基础到进阶清单列表
>
> Format： 以表格的形式返回

![图1-实用RTF框架](/assets/images/llm/use-prompt-framework/prompt-usecase1.png)

在实际工作的任务中，我通过优化Prompt工程，对于我们的产品改善，对于回答的内容改善也非常明显！
> 在我司给宁波天一阁开发的AI讲解产品中，我们提供和大模型对话的RAG产品，将天一阁的相关知识导入到系统，借助大模型进行讲解回答
>

对比以下两个Prompt的区别：

原Prompt：

```text
基于以下已知信息，简洁和专业的来回答天一阁相关的的问题。
如果无法从中得到答案，请说 "根据已知信息无法回答该问题" 或 "没有提供足够的相关信息"，不允许在答案中添加编造成分，答案请使用中文。
问题:
{}
已知内容:
{}
```

改进后的Prompt：

```text
你是宁波天一阁的历史研究员，基于以下已知信息，简洁和专业的来回答天一阁相关的的问题。
如果无法从中得到答案，请根据根据实际回答，不要臆测内容，否则请说 "根据已知信息无法回答该问题" 或 "没有提供足够的相关信息"，不允许在答案中添加编造成分，答案请使用中文。
问题:
{}
已知内容:
{}
```

改进后，大模型回答更加拟人化，如下图：

![图2-优化后的大模型Prompt](/assets/images/llm/use-prompt-framework/image.png)

## 2.思考链模式

通过这种模式来逐步改善大模型的推理能力，非常**适合一些复杂的任务处理**。

例如：

- 分析型或者逻辑推理型的任务
- 决策
- 解决问题(比如程序员根据错误日志找Bug)

而要使用这种模式，**只需要在末尾添加"让我们逐步思考"即可**。

![图3-逐步推理模式应用](/assets/images/llm/use-prompt-framework/prompt-step.png)

## 3. RISEN框架

- **R-Role**:大模型扮演的角色
- **I-Instructions**: 指示命令，和`Task-任务`差不多
- **S-Steps**: 步骤
- **E-End Goal**: 最终目标
- **N-Narrowing(Constraints)**: 缩小范围(约束条件)，和`RTF`框架中的`Format`有异曲同工之妙，一个是格式的约束，而这里的约束可以是任意方面，比如回答的内容(特定领域)、字数限制等等方面

该框架主要适合：

- 撰写具有特定约束的任务(例如博客文章)
- 有明确指导方针的任务（例如商业计划）

示例：

![图4-RISEN框架示例](/assets/images/llm/use-prompt-framework/use-prompt-risen.png)

## 4.RODES框架

- R-Role: 角色
- O - Objective: 目标
- D - Details: 详细的细节
- E - Examples: 示例
- S - Sense Check: 感官检查

示例：

![图5-RODES框架示例](/assets/images/llm/use-prompt-framework/use-prompt-rodes.png)

## 5.密度链模式

密度链模式`Prompt`是Salesforce、麻省理工学院和哥伦比亚大学的研究人员推出的一种新提示，它非常的高效,使用递归来创建越来越好的输出的提示，与普通提示生成的 GPT-4 摘要相比，它生成的摘要更加密集且更适合人们理解。

> 这种模式在RAG工程中非常实用，想想看你的客户上传的文档知识库(PDF/WORD)都是长篇的步骤性的文档,而在RAG召回送给大模型的Context上下文又受限于大模型的Token限制,为了更好的回答用户提问的问题，对于上传的知识库做密度链模式的摘要总结，然后索引整个文章内容召回是非常有必要的，最终能够非常精准的回答用户的问题。

适合：

- 总结
- 改进您最喜欢的提示
- 通过递归生成可用的长格式内容

密度链模式的`Prompt`如下：

![图6-Chain of Density(Cod)prompt](/assets/images/llm/use-prompt-framework/prompt-chain-density.png)

```text

文章: {ARTICLE}

您将为上述文章生成越来越简洁、实体密集的摘要。


重复以下2个步骤5次：

- 步骤1:从文章中识别出先前生成的摘要中缺少的 1-3 个信息实体（以“;”分隔）。
- 步骤2:写一个新的、长度相同的、更密集的摘要，其中涵盖先前摘要中的每个实体和细节以及缺失的内容实体。

缺少的实体是:

- **相关的:**与主要故事相关，
- **具体的:**描述具体而简洁（5个字或更少），
- **新颖的:**不在之前的摘要中
- **务实的:**存在于文章中
- **任何地方:** 位于文章中的任何位置

**指南:**

- 第一个摘要应该较长（4-5句，约80个词），但非常不具体，除了标记为缺失的实体外，几乎没有包含其他信息。使用过度冗长的语言和填充词（例如，“本文讨论”）以达到约80个词。
- 让每个词都有意义：重新撰写前一个摘要以改善流畅性，并为额外的实体腾出空间。
- 利用融合、压缩和删除诸如“文章讨论”的无信息短语，腾出空间。
- 摘要应变得非常密集而简洁，但又是自包含的，例如，不需要阅读文章就能容易理解。
- 缺失的实体可以出现在新摘要的任何位置。
- 永远不要删除前一个摘要中的实体。如果无法腾出空间，就添加更少的新实体。

请记住，对于每个摘要都使用相同数量的词。

以JSON格式回答。JSON应该是一个字典列表（长度为5），其中键是“Missing_Entities”和“Denser_Summary”。

```

关于密度链模式的Prompt论文可以参考：[https://arxiv.org/pdf/2309.04269.pdf](https://arxiv.org/pdf/2309.04269.pdf)

或者微信公众号回复"cod"获取文件

## 总结

`Prompt`对话提示框架在大模型领域中是非常重要的一环,不管你是在直接使用大模型，还是在做RAG领域的产品开发,`Prompt`的重要程度都是无可替代的。

希望大家能根据本文列出的这5种`Prompt`框架进行举一反三，多多实践～~

对于`Prompt`工程技术细节，可以阅读员外的这两篇文章:

- [一文讲清楚实用Prompt工程](https://www.luxiangdong.com/2023/08/08/prompt/)
- [高级prompt工程讲解](https://www.luxiangdong.com/2023/08/08/advprompt/)