---
layout: page
title: 关于作者
description: 八一菜刀
keywords: 八一菜刀, 萧明
comments: true
menu: 关于
permalink: /about/
---

我是八一菜刀

遨游在知识的海洋,探索与发现奇妙的世界。

## 联系

{% for website in site.data.social %}
* {{ website.sitename }}：[@{{ website.name }}]({{ website.url }})
{% endfor %}

## 捐赠

如果本站相关内容对您有帮助，请作者喝杯咖啡吧！

<figure class="half">
    <img src="/images/website/pay_ali.jpg" width="300" style="margin-left: -40px;">
    <img src="/images/website/pay_wechat.jpg" width="300">
</figure>


## Skill Keywords

{% for category in site.data.skills %}
### {{ category.name }}
<div class="btn-inline">
{% for keyword in category.keywords %}
<button class="btn btn-outline" type="button">{{ keyword }}</button>
{% endfor %}
</div>
{% endfor %}
