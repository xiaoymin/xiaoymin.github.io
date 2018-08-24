---
layout: post
title: 论js闭包的重要性
categories: JavaScript
description: 论js闭包的重要性
keywords: js,Javascript,闭包
---

很久没写博客了,今天发现了一个很有意思的问题,写下来分享一下

话不多说,贴前端代码:

 前端一个很简单的ajax提交代码,对不对?通过getMoney()函数 得到一个值,然后发送给后台,注意,该函数是不包含在$()代码块里面的

 后台代码：

 也是很简单的,只是响应用户的发送数据,代码如下：

OK,万事具备,页面走起!!

页面点击发送

![img](/images/blog/js-closure/071704374536164.jpg)

看后台：

![img](/images/blog/js-closure/071705149213951.jpg)

 

貌似没错,后台如愿得到我们要的数据

只是,如果有些捣蛋鬼喜欢捣蛋呢?比如我用火狐的firefox注入一个getMoney()方法

![img](/images/blog/js-closure/071708035626897.jpg)

好吧,我注入了一个和页面上相同的函数getMoney(),居然返回100000.太坏了..

OK,让我们在点击发送后台按钮,看看是什么情况呢?

![img](/images/blog/js-closure/071709315318989.jpg)

天呐.......居然真给变了...

好吧,再看看我们的服务端,是不是也会随波逐流呢?

![img](/images/blog/js-closure/071711072182789.jpg)

我已经无语了,这别个捣蛋鬼岂不是能随便传送数据...

不然,如果页面修改一下呢?代码如下：


注意,这次我的getMoney()函数写在$()这个里面去了

OK,我们在刷新页面,做相同的操作,注入一个getMoney

![img](/images/blog/js-closure/071714314849352.jpg)

很奇怪呢,居然没有变化,不放心,再看看后台：

![img](/images/blog/js-closure/071715343906533.jpg)

也没有变化,是不是很有意思呢?

呵呵,各位有什么看法呢?畅所欲言哦