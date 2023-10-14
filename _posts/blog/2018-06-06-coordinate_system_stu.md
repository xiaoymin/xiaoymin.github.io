---
layout: post
title: 地球坐标系,了解一下?
categories: Blog
description: 地球坐标系,了解一下?
keywords: 坐标系,WGS
---

## 大地坐标系(WGS-84)

WGS84:World Geodetic System 1984，是为[GPS全球定位系统](https://baike.baidu.com/item/GPS%E5%85%A8%E7%90%83%E5%AE%9A%E4%BD%8D%E7%B3%BB%E7%BB%9F)使用而建立的[坐标系统](https://baike.baidu.com/item/%E5%9D%90%E6%A0%87%E7%B3%BB%E7%BB%9F)。通过遍布世界的卫星观测站观测到的坐标建立，其初次WGS84的精度为1-2m，在1994年1月2号，通过10个观测站在GPS测量方法上改正，得到了WGS84（G730），G表示由GPS测量得到，730表示为GPS时间第730个周。1996年，National Imagery and Mapping Agency (NIMA) 为[美国国防部](https://baike.baidu.com/item/%E7%BE%8E%E5%9B%BD%E5%9B%BD%E9%98%B2%E9%83%A8) (U.S.Departemt of Defense, DoD)做了一个新的坐标系统。这样实现了新的WGS版本：WGS（G873）。其因为加入了USNO站和[北京站](https://baike.baidu.com/item/%E5%8C%97%E4%BA%AC%E7%AB%99)的改正，其东部方向加入了31-39cm 的改正。所有的其他坐标都有在1分米之内的修正。第三次精化：WGS84（G1150），于2002年1月20日启用。



用来表述地球上点的位置的一种地区坐标系统。它采用一个十分近似于地球自然形状的参考椭球作为描述和推算地面点位置和相互关系的基准面。一个大地坐标系统必须明确定义其三个坐标轴的方向和其中心的位置。通常人们用旋转椭球的短轴与某一规定的起始子午面分别平行干地球某时刻的平均自转轴和相应的真起始子午面来确定坐标轴的方向。若使参考椭球中心与地球平均质心重合，则定义和建立了地心大地坐标系。它是航天与远程武器和空间科学中各种定位测控测轨的依据。若椭球表面与一个或几个国家的局部大地水准面吻合最好，则建立了一个国家或区域的局部大地坐标系。大地坐标系中点的位置是以其大地坐标表示的，大地坐标均以椭球面的法线来定义。其中，过某点的椭球面法线与椭球赤道面的交角为大地纬度；包含该法线和大地子午面与起始大地子午面的二面角为该点的大地经度；沿法线至椭球面的距离为该点的大地高。大地纬度、大地经度和大地高分别用大写英文字母B、L、H表示。



***国内的互联网公司，都不会使用GPS坐标，因为这不符合国家政策。所以大家都会使用GCJ-02坐标系。***



## 火星坐标系(GCJ-02)

**GCJ-02**（俗称**火星坐标系**、**国测局坐标**，官方称**地形图非线性保密处理算法**[[14\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-cpc_chengming-14)）是一种基于[WGS-84](https://zh.wikipedia.org/wiki/WGS-84)制定的[大地测量系统](https://zh.wikipedia.org/wiki/%E5%A4%A7%E5%9C%B0%E6%B5%8B%E9%87%8F%E7%B3%BB%E7%BB%9F)，由中国[国测局](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%B5%8B%E7%BB%98%E5%B1%80)制定，[国家科学技术进步奖](https://zh.wikipedia.org/wiki/%E5%9B%BD%E5%AE%B6%E7%A7%91%E5%AD%A6%E6%8A%80%E6%9C%AF%E8%BF%9B%E6%AD%A5%E5%A5%96)一等奖得主[李成名](https://zh.wikipedia.org/wiki/%E6%9D%8E%E6%88%90%E5%90%8D)开发。[[15\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-great-leap-15)[[16\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-16)此坐标系所采用的混淆算法[[17\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-17)会在经纬度中加入看似随机的偏移，号称可以促进国家安全。[[13\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-caijun-13)[[18\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-18)

使用GCJ-02记录下的地点在GCJ-02的地图中会显示在正确的位置，然而换成WGS-84的地图或地点记录就可能造成100—700米不等的偏移。据测量，[[2\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-JIIDE13-2)Google.com的地图与真实坐标相差约50—500米，[[8\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-motherboard-8)[[a\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-19)而中国区的Google.cn地图则与卫星不带偏差。[[b\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-20)[雅虎地图](https://zh.wikipedia.org/wiki/%E9%9B%85%E8%99%8E%E5%9C%B0%E5%9C%96)显示的街道图也与卫星偏差不大。[[c\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-yahoo-map-21)MapQuest地图与众包测绘、不受限制的OpenStreetMap重合。[[d\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-22)

虽然GCJ-02坐标系统本身保密，但是目前已有C#[[19\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-leak-23)、C、Go、Java、JavaScript、PHP[[20\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-evil-gh-24)、Python[[21\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-25)、R[[13\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-caijun-13)、Ruby[[22\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-26)[[23\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-27)等多种语言的开源转换实现。这些实现似乎都基于某份泄露出的WGS到GCJ加偏代码实现。 [[24\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-28)除了直接获取加偏算法，也有人通过对谷歌中国地图与卫星间的偏移做[回归](https://zh.wikipedia.org/wiki/%E8%BF%B4%E6%AD%B8%E5%88%86%E6%9E%90)近似处理。[[25\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-guilbot-reg-29)Wu Yongzheng使用[傅里叶变换](https://zh.wikipedia.org/wiki/%E5%82%85%E9%87%8C%E5%8F%B6%E5%8F%98%E6%8D%A2)解出了与泄露代码类似的高频结构。[[26\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-wu-regression-30)

根据泄露代码注释[[19\]](https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E9%99%90%E5%88%B6#cite_note-leak-23)，GCJ-02在加偏时使用的是[SK-42参考系统](https://zh.wikipedia.org/w/index.php?title=SK-42%E5%8F%82%E8%80%83%E7%B3%BB%E7%BB%9F&action=edit&redlink=1)的椭球体参数。

## 百度坐标系(BD-09)

百度坐标对火星坐标系进行了一次加密,形成了百度坐标系.

目前使用百度坐标系的地图商:

- 百度Baidu地图



## 国家大地坐标(CGCS2000)

2000国家大地坐标系，是我国当前最新的国家大地坐标系，英文名称为China Geodetic Coordinate System 2000，英文缩写为[CGCS2000](https://baike.baidu.com/item/CGCS2000)。

2000国家大地坐标系的原点为包括[海洋](https://baike.baidu.com/item/%E6%B5%B7%E6%B4%8B/523)和[大气](https://baike.baidu.com/item/%E5%A4%A7%E6%B0%94/8378483)的整个地球的质量中心；2000国家大地坐标系的Z轴由原点指向历元2000.0的地球参考极的方向，该历元的指向由国际时间局给定的历元为1984.0的初始指向推算，定向的时间演化保证相对于地壳不产生残余的全球旋转，X轴由原点指向格林尼治参考子午线与地球赤道面（历元2000.0）的交点，Y轴与Z轴、X轴构成右手正交坐标系。采用广义相对论意义下的尺度。

国家大地坐标系是测制国家[基本比例尺地图](https://baike.baidu.com/item/%E5%9F%BA%E6%9C%AC%E6%AF%94%E4%BE%8B%E5%B0%BA%E5%9C%B0%E5%9B%BE)的基础。根据《[中华人民共和国测绘法](https://baike.baidu.com/item/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E6%B5%8B%E7%BB%98%E6%B3%95)》规定，中国建立全国统一的[大地坐标系统](https://baike.baidu.com/item/%E5%A4%A7%E5%9C%B0%E5%9D%90%E6%A0%87%E7%B3%BB%E7%BB%9F)。

建国以来，中国于上世纪50年代和80年代分别建立了1954年北京坐标系和[1980西安坐标系](https://baike.baidu.com/item/1980%E8%A5%BF%E5%AE%89%E5%9D%90%E6%A0%87%E7%B3%BB)，测制了各种[比例尺地形图](https://baike.baidu.com/item/%E6%AF%94%E4%BE%8B%E5%B0%BA%E5%9C%B0%E5%BD%A2%E5%9B%BE)，在国民经济、社会发展和科学研究中发挥了重要作用，限于当时的技术条件，中国大地坐标系基本上是依赖于传统技术手段实现的。54坐标系采用的是[克拉索夫斯基](https://baike.baidu.com/item/%E5%85%8B%E6%8B%89%E7%B4%A2%E5%A4%AB%E6%96%AF%E5%9F%BA)[椭球体](https://baike.baidu.com/item/%E6%A4%AD%E7%90%83%E4%BD%93)。该[椭球](https://baike.baidu.com/item/%E6%A4%AD%E7%90%83)在计算和定位的过程中，没有采用中国的数据，该系统在中国范围内符合得不好，不能满足高精度定位以及地球科学、空间科学和战略武器发展的需要。上世纪70年代，中国[大地测量](https://baike.baidu.com/item/%E5%A4%A7%E5%9C%B0%E6%B5%8B%E9%87%8F)工作者经过二十多年的艰巨努力，终于完成了全国一、二等[天文大地网](https://baike.baidu.com/item/%E5%A4%A9%E6%96%87%E5%A4%A7%E5%9C%B0%E7%BD%91)的布测。经过整体平差，采用1975年IUGG第十六届大会推荐的参考椭球参数，中国建立了[1980西安坐标系](https://baike.baidu.com/item/1980%E8%A5%BF%E5%AE%89%E5%9D%90%E6%A0%87%E7%B3%BB)，1980西安坐标系在中国经济建设、国防建设和科学研究中发挥了巨大作用。

随着社会的进步，国民经济建设、国防建设和社会发展、科学研究等对国家大地坐标系提出了新的要求，迫切需要采用原点位于地球质量中心的[坐标系统](https://baike.baidu.com/item/%E5%9D%90%E6%A0%87%E7%B3%BB%E7%BB%9F)（以下简称[地心坐标系](https://baike.baidu.com/item/%E5%9C%B0%E5%BF%83%E5%9D%90%E6%A0%87%E7%B3%BB)）作为国家大地坐标系。采用地心坐标系，有利于采用现代[空间技术](https://baike.baidu.com/item/%E7%A9%BA%E9%97%B4%E6%8A%80%E6%9C%AF)对坐标系进行维护和快速更新，测定高精度[大地控制点](https://baike.baidu.com/item/%E5%A4%A7%E5%9C%B0%E6%8E%A7%E5%88%B6%E7%82%B9)[三维坐标](https://baike.baidu.com/item/%E4%B8%89%E7%BB%B4%E5%9D%90%E6%A0%87)，并提高测图工作效率。

2008年3月，由国土资源部正式上报国务院《关于中国采用2000国家大地坐标系的请示》，并于2008年4月获得国务院批准。自2008年7月1日起，中国将全面启用2000国家大地坐标系，[国家测绘局](https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E6%B5%8B%E7%BB%98%E5%B1%80)授权组织实施。[1][ ]()



1954年北京坐标系和[1980西安坐标系](https://baike.baidu.com/item/1980%E8%A5%BF%E5%AE%89%E5%9D%90%E6%A0%87%E7%B3%BB)由于其成果受技术条件制约，精度偏低、无法满足新技术的要求。[空间技术](https://baike.baidu.com/item/%E7%A9%BA%E9%97%B4%E6%8A%80%E6%9C%AF)的发展成熟与广泛应用迫切要求国家提供高精度、[地心](https://baike.baidu.com/item/%E5%9C%B0%E5%BF%83)、动态、实用、统一的大地坐标系作为各项社会经济活动的基础性保障。从技术和应用方面来看，现行坐标系具有一定的局限性，已不适应发展的需要。主要表现在以下几点：

1.二维坐标系统。1980西安坐标系是经典大地测量成果的归算及其应用，它的表现形式为平面的二维坐标。用现行坐标系只能提供点位[平面坐标](https://baike.baidu.com/item/%E5%B9%B3%E9%9D%A2%E5%9D%90%E6%A0%87)，而且表示两点之间的距离精确度也比用现代手段测得的低10倍左右。高精度、三维与低精度、二维之间的矛盾是无法协调的。比如将[卫星导航技术](https://baike.baidu.com/item/%E5%8D%AB%E6%98%9F%E5%AF%BC%E8%88%AA%E6%8A%80%E6%9C%AF)获得的高精度的点的[三维坐标](https://baike.baidu.com/item/%E4%B8%89%E7%BB%B4%E5%9D%90%E6%A0%87)表示在现有地图上，不仅会造成点位信息的损失（[三维空间](https://baike.baidu.com/item/%E4%B8%89%E7%BB%B4%E7%A9%BA%E9%97%B4)信息只表示为二维平面位置），同时也将造成精度上的损失。

2.[参考椭球](https://baike.baidu.com/item/%E5%8F%82%E8%80%83%E6%A4%AD%E7%90%83)参数。随着科学技术的发展，国际上对参考椭球的参数已进行了多次更新和改善。1980西安坐标系所采用的IAG1975[椭球](https://baike.baidu.com/item/%E6%A4%AD%E7%90%83)，其长半轴要比国际公认的WGS84[椭球长半轴](https://baike.baidu.com/item/%E6%A4%AD%E7%90%83%E9%95%BF%E5%8D%8A%E8%BD%B4)的值大3米左右，而这可能引起地表长度误差达10倍左右。

3.随着经济建设的发展和科技的进步，维持非[地心坐标系](https://baike.baidu.com/item/%E5%9C%B0%E5%BF%83%E5%9D%90%E6%A0%87%E7%B3%BB)下的实际点位坐标不变的难度加大，维持非地心坐标系的技术也逐步被新技术所取代。

4.[椭球短半轴](https://baike.baidu.com/item/%E6%A4%AD%E7%90%83%E7%9F%AD%E5%8D%8A%E8%BD%B4)指向。1980西安坐标系采用指向JYD1968.0极原点，与国际上通用的地面坐标系如ITRS，或与GPS定位中采用的WGS84等椭球短轴的指向（BIH1984.0）不同。

天文大地控制网是现行坐标系的具体实现，也是国家[大地基准](https://baike.baidu.com/item/%E5%A4%A7%E5%9C%B0%E5%9F%BA%E5%87%86)服务于用户最根本最实际的途径。面对空间技术、[信息技术及其应用](https://baike.baidu.com/item/%E4%BF%A1%E6%81%AF%E6%8A%80%E6%9C%AF%E5%8F%8A%E5%85%B6%E5%BA%94%E7%94%A8)技术的迅猛发展和广泛普及，在创建数字地球、[数字中国](https://baike.baidu.com/item/%E6%95%B0%E5%AD%97%E4%B8%AD%E5%9B%BD)的过程中，需要一个以全球参考基准框架为背景的、全国统一的、协调一致的坐标系统来处理国家、区域、海洋与全球化的资源、环境、社会和信息等问题。单纯采用参心、[二维](https://baike.baidu.com/item/%E4%BA%8C%E7%BB%B4)、低精度、静态的大地坐标系统和相应的基础设施作为我国现行应用的测绘基准，必然会带来愈来愈多不协调问题，产生众多矛盾，制约高新技术的应用。

若仍采用现行的二维、非地心的坐标系，不仅制约了地理空间信息的精确表达和各种先进的空间技术的广泛应用，无法全面满足当今气象、地震、水利、交通等部门对高精度测绘[地理信息服务](https://baike.baidu.com/item/%E5%9C%B0%E7%90%86%E4%BF%A1%E6%81%AF%E6%9C%8D%E5%8A%A1)的要求，而且也不利于与国际上民航与海图的有效衔接，因此采用[地心坐标系](https://baike.baidu.com/item/%E5%9C%B0%E5%BF%83%E5%9D%90%E6%A0%87%E7%B3%BB)已势在必行。



# 地图厂商

## 百度地图

百度地图使用的是BD-09坐标系，即他自己的百度坐标系,在百度地图拾取的坐标都是BD-09坐标



## Google地图

Google地图国外使用的是WGS-84坐标系,国际标准

Google国内地图(.cn域名下)使用的是GCJ-02坐标系,即火星坐标



## 高德地图

高德地图(AMap)使用的是GCJ-02坐标系,即火星坐标



## 腾讯地图

使用的是GCJ-02坐标系,即火星坐标



## 天地图

天地图坐标全部统一为cgcs2000，国家大地坐标，在ArcGIS中的reproject打开想要转换的坐标系即可



# 转换工具

- [GitHub开源-**coordtransform**(提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换)](https://github.com/wandergis/coordtransform)
- [GPS坐标互转：WGS-84(GPS)、GCJ-02(Google地图)、BD-09(百度地图)](https://www.oschina.net/code/snippet_260395_39205)
- [wgs84, gcj02, bd09 三种坐标的互相转换](https://gist.github.com/jp1017/71bd0976287ce163c11a7cb963b04dd8)



# 参考文章

- [高德地图API-从零开始学高德JS API(六)--坐标转换](http://www.cnblogs.com/milkmap/p/3768379.html)
- [地图API-为何您的坐标不准?如何纠偏](http://www.cnblogs.com/milkmap/p/3627940.html)
- ​




