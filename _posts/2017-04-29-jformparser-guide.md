---
layout: post
title: Jformparser 开发指南
categories: 开源
description: Jformparser 开发指南
keywords: Jformparser
---

## 简介

根据json结构,生成页面,达到解放后端开发人员的目的,降低后端对前端开发要求,后端专心开发后台接口等服务程序, 前期以表单元素为主,后期会增加更多页面元素的支持,敬请期待

**JFormParser依赖**:目前主要依赖bootstrap css框架、jQuery两大流行核心组件,设计之初想法是降低对各个插件的依赖耦合度,构造的 页面元素使用其他插件也能达到多样化可替换,使得页面效果更加丰富

码云地址：[JFormParser](https://gitee.com/xiaoym/JFormParser)

JFormParser元素

- editor(富文本插件),富文本插件原打算使用百度的ueditor插件,因公司购买富文本插件强制需要使用,所以这里 使用ewebeditor插件,使用该插件需要依赖服务器环境,并且部署上线需要授权,否则无法使用.
- text(基本文本框):文本域,文本域是很强大的一种表单元素,JFormParser目前只要支持以下几种数据类型的文本域
  - normal:常规文本域,无任务效果
  - email:只支持邮件形式的文本输入,会自检非其他格式数据
  - number:整数文本域,只支持输入整数,会自检非其他格式数据
  - decimal:小数文本域
  - datetime:日期类型,目前使用的插件是My97DatePicker日期插件,所以依赖WdatePicker.js文件
- textarea(多行文本域):多行文本域
- select(下拉框):下拉框元素,下拉框涉及数据初始化的原因,所以插件提供了remote_url属性通过后台加载数据初始化
- panel(面板):面板组件,是一个容器组件
- grid(表格):表格组件,这里的表格无任何特殊意义,仅仅只是为了页面布局,同panel一样,也是容器组件
- checkboxGroup:复选框组组件
- radioGroup:单选框组组件
- button:按钮(普通按钮、提交按钮、返回按钮、、、、等)
- buttonGroup:按钮组,是一个容器组件,包含按钮的组合,
- datagrid:表格展示组件,依赖元数据查询组件
- fileupload:文件上传
- images:图集上传组件
- bMap：地图拾取经纬度坐标组件，依赖于百度js地图(http://lbsyun.baidu.com/index.php?title=jspopular)



## 页面template

页面template主要是模板页，更多的是提供布局功能,现在主要包含两个模板

### 列表页模板list

list模板页面主要是用于展现数据列表页

![列表页](/images/blog/jformparser-guide/list.jpg)

#### 模板结构

```javascript
{
  "component_name":"scenic_form",
  "component_title":"景区form",
  "template_type":"list",
  "navs_title":"景区标准化管理 > 景区管理 > 景区列表",
  "navs":[{"title":"景区标准化管理","icon":"","url":""},{"title":"景区管理","icon":""},{"title":"景区列表","icon":""}],
  "resource_name":"scenic_info",
  "submit_url":"/cms/template/submit.htm",
  "childrens":[{
    "element_type":"panel",
    "element_title":"景区查询",
    "whether_header":false,
    "whether_border":false,
    "container":true,
    "childrens":[
      {
        "element_type":"datagrid",
        "element_title":"景区查询",
        "is_remote":true,
        "is_operate":true,
        "operate_title":"操作",
        "operate_buttons":[
          {"element_type":"button","type":"edit","element_title":"编辑","remote_url":"/cms/template/template_form.htm","params":{"url":"/json/baotou/scenic/scenic_form.json"}},
          {"element_type":"button","type":"delete","element_title":"图片","remote_url":"/cms/template/delete.htm"},
          {"element_type":"button","type":"delete","element_title":"视频","remote_url":"/cms/template/delete.htm"},
          {"element_type":"button","type":"delete","element_title":"音频","remote_url":"/cms/template/delete.htm"},
          {"element_type":"button","type":"delete","element_title":"删除","remote_url":"/cms/template/delete.htm"}],
        "pagination":true,
        "remote_url":"/cms/template/get_remote_list.htm",
        "columns":[
		{"field":"title","title":"景区名称"},
		{"field":"level","title":"景区等级"},
		{"field":"lawyer","title":"法人代表"},
		{"field":"person_liable","title":"负责人"},
		{"field":"phone","title":"手机号码"},
		{"field":"tel","title":"电话"},
		{"field":"fax","title":"传真"},
		{"field":"approve_date","title":"批准时间"},
		{"field":"approve_date","title":"地理位置"}],
        "childrens":[
          {
            "element_type":"text",
            "element_title":"景区名称",
            "meta_column":"title",
            "is_query":true,
            "direction":"left",
            "width":"100%"
          },{
            "element_type":"text",
            "element_title":"景区等级",
            "meta_column":"level",
            "is_query":true,
            "direction":"left",
            "width":"100%"
          },{
            "element_type":"button",
            "element_title":"查询",
            "type":"query",
            "remote_url":"/cms/template/get_remote_list.htm",
            "params": {
              "params": "{resource_name: scenic_info}"
            }
          },{
            "element_type":"buttonGroup",
            "element_title":"操作按钮组",
            "align":"left",
            "childrens":[
              {"element_type":"button","type":"link","element_title":"新增景区","remote_url":"/cms/template/template_form.htm","params":{"url":"/json/baotou/scenic/scenic_form.json"}},
              {"element_type":"button","type":"link","element_title":"删除","remote_url":"/cms/template/template_form.htm","params":{"url":"/json/baotou/scenic/scenic_form.json"}},
              {"element_type":"button","type":"link","element_title":"导入","remote_url":"/cms/template/template_form.htm","params":{"url":"/json/baotou/scenic/scenic_form.json"}},
              {"element_type":"button","type":"link","element_title":"导出","remote_url":"/cms/template/template_form.htm","params":{"url":"/json/baotou/scenic/scenic_form.json"}}
            ]
          }
        ]
      }
    ]
  }
  ]
}
```

#### 属性

| 字段              | 类型      | 说明                                       | 是否必填 | 默认值  | 其他   |
| --------------- | ------- | ---------------------------------------- | ---- | ---- | ---- |
| component_name  | string  | temp页面组件名称                               | 是    | 无    |      |
| component_title | string  | temp页面组件title                            | 是    | 无    |      |
| template_type   | string  | temp页面类型，目前2中，分别为：list、form              | 是    | 无    |      |
| navs_title      | string  | 导航栏                                      | 是    | 无    |      |
| navs            | Array   | 导航栏,属性见[导航栏](https://xiaoymin.github.io/JFormParser-doc/plugins/navs) | 是    | 无    |      |
| resource_name   | string  | 展示元数据数据表名                                | 是    | 无    |      |
| submit_url      | string  | 根据template_type类型不同有不同的意义，list为获取数据地址，form为提交表单地址 | 是    | 无    |      |
| container       | boolean | 是否容器组件                                   | 否    | true |      |
| childrens       | Array   | 地图子组件，这里必包含2个经纬度文本域组件                    | 是    | 无    |      |

导航栏属性

| 字段    | 类型     | 说明     | 是否必填 | 默认值  | 其他   |
| ----- | ------ | ------ | ---- | ---- | ---- |
| title | string | 导航栏名称  | 是    | 无    |      |
| icon  | string | 图标     | 否    | 无    |      |
| url   | string | 导航栏url | 否    | 无    |      |

### 表单页模板form

form模板页面主要是构建表单页面

![](/images/blog/jformparser-guide/form.jpg)

#### *结构*

```javas
{
  "component_name":"trips_form",
  "component_title":"行程form",
  "template_type":"form",
  "navs_title":"信息管理 > 行程管理 > 行程维护",
  "navs":[{"title":"信息管理","icon":"","url":""},{"title":"行程管理","icon":""},{"title":"行程维护","icon":""}],
  "resource_name":"trips_info",
  "submit_url":"/cms/template/submit.htm",
  "init_url":"/cms/template/get_form_data.htm",
  "childrens":[
    {
      "element_type":"panel",
      "element_title":"基础信息",
      "container":true,
      "childrens":[
        {
          "element_type":"grid",
          "cols":3,
          "rows":"3",
          "childrens":[{
            "element_type":"text",
            "element_title":"行程名称",
            "meta_column":"title",
            "is_required":true
          },{
            "element_type":"select",
            "element_title":"行程类型",
            "is_required":true,
            "meta_column":"type",
            "is_fk":true,
            "fk_resource_name":"scenic_spot_info",
            "fk_meta_column":"id",
            "fk_meta_column_show":"title",
            "data":[
              {"text":"交通","value":"jt"},
              {"text":"会议","value":"hy"},
              {"text":"入住","value":"rz"},
              {"text":"用餐","value":"yc"},
              {"text":"考察","value":"kc"}
            ],
            "is_remote":false,
            "remote_url":""
          },{
            "element_type":"text",
            "element_title":"开始时间",
            "meta_column":"start_time",
            "is_required":true
          },{
            "element_type":"checkboxGroup",
            "element_title":"参与小组",
            "is_required":true,
            "meta_column":"team_infos",
            "fk_resource_name":"team_info",
            "fk_meta_column":"id",
            "fk_meta_column_show":"name",
            "is_remote":true,
            "width":"100%",
            "remote_url":"/cms/template/get_remote_data.htm"
          }]
        }
      ]
    },{
      "element_type":"panel",
      "element_title":"详情",
      "container":true,
      "childrens":[
        {
          "element_type":"editor",
          "meta_column":"intro",
          "width":"400px",
          "height":"300px"
        }
      ]
    },{
      "element_type":"buttonGroup",
      "element_title":"",
      "align":"center",
      "childrens":[
        {"element_type":"button","type":"submit","element_title":"提交","remote_url":"/cms/template/submit.htm","width":"80px","action_url":"/cms/template/template_list.htm","params":{"url":"/json/shengsi/trips/trips_list.json"}},
        {"element_type":"button","type":"link","element_title":"返回","remote_url":"/cms/template/template_list.htm","params":{"url":"/json/shengsi/trips/trips_list.json"},"width":"80px"}
      ]
    }
  ]
}
```

#### 属性

| 字段              | 类型      | 说明                                       | 是否必填 | 默认值  | 其他   |
| --------------- | ------- | ---------------------------------------- | ---- | ---- | ---- |
| component_name  | string  | temp页面组件名称                               | 是    | 无    |      |
| component_title | string  | temp页面组件title                            | 是    | 无    |      |
| template_type   | string  | temp页面类型，目前2中，分别为：list、form              | 是    | 无    |      |
| navs_title      | string  | 导航栏                                      | 是    | 无    |      |
| navs            | Array   | 导航栏,属性见[导航栏](https://xiaoymin.github.io/JFormParser-doc/plugins/navs) | 是    | 无    |      |
| resource_name   | string  | 展示元数据数据表名                                | 是    | 无    |      |
| submit_url      | string  | 根据template_type类型不同有不同的意义，list为获取数据地址，form为提交表单地址 | 是    | 无    |      |
| container       | boolean | 是否容器组件                                   | 否    | true |      |
| childrens       | Array   | 地图子组件，这里必包含2个经纬度文本域组件                    | 是    | 无    |      |

导航栏属性

| 字段    | 类型     | 说明     | 是否必填 | 默认值  | 其他   |
| ----- | ------ | ------ | ---- | ---- | ---- |
| title | string | 导航栏名称  | 是    | 无    |      |
| icon  | string | 图标     | 否    | 无    |      |
| url   | string | 导航栏url | 否    | 无    |      |

## 容器组件

容器组件，顾名思义

### 面板panel

Panel组件是一个bootstrap风格的panel容器组件,使用该插件主要是为了表单页面布局，页面看上去更像一个整体，有整体性，页面美观

![](/images/blog/jformparser-guide/panel.jpg)

#### 结构

```javascript
{
	"element_type":"panel",
	"element_title":"资源信息",
	"container":true,
	"childrens":[...]
}
```

#### 属性

| 字段             | 类型      | 说明                                    | 是否必填 | 默认值  | 其他   |
| -------------- | ------- | ------------------------------------- | ---- | ---- | ---- |
| element_type   | string  | 组件类型                                  | 是    | 无    |      |
| element_title  | string  | 组件title                               | 是    | 无    |      |
| whether_header | boolean | 是否有header头                            | 否    | true |      |
| whether_border | boolean | 面板是否有边框                               | 否    | true |      |
| width          | string  | 地图初始宽度,可以是百分比，可以是像素值，例如：100% 或者400px; | 否    | 无    |      |
| height         | string  | 地图初始高度                                | 否    | 无    |      |
| container      | boolean | 是否容器组件                                | 否    | true |      |
| childrens      | Array   | 容器子组件集合，可包含任何其他组件                     | 否    | 无    |      |

### 表格grid

Grid组件是一个类似表格组件，包含几行几列等属性，不过这里不同于表格table，这里只是一个页面展示组件，用于页面布局，没有任何实际作用，同panel一样，是容器组件

![](/images/blog/jformparser-guide/grid.jpg)

#### 结构

```javas
{
	"element_type":"grid",
	"element_title":"表格组件",
	"cols":3,
    "rows":"4",
	"container":true,
	"childrens":[...]
}
```

#### 属性

| 字段            | 类型      | 说明                | 是否必填 | 默认值  | 其他   |
| ------------- | ------- | ----------------- | ---- | ---- | ---- |
| element_type  | string  | 组件类型              | 是    | 无    |      |
| element_title | string  | 组件title           | 是    | 无    |      |
| cols          | number  | 表格列               | 是    | 1    |      |
| rows          | number  | 表格行               | 是    | 1    |      |
| container     | boolean | 是否容器组件            | 否    | true |      |
| childrens     | Array   | 容器子组件集合，可包含任何其他组件 | 否    | 无    |      |

### 地图组件bMap

bmap组件是百度地图组件，地图组件必有两个子元素,都是文本域组件 经度、纬度两个字段

![](/images/blog/jformparser-guide/bmap.jpg)

#### 结构

```javascript
{
        "element_type":"bMap",
        "id":"bmap",
        "center":"包头",
        "dragging":true,
        "scrollwheelzoom":true,
        "doubleclickzoom":true,
        "width":"100%",
        "height":"450px",
        "element_title":"位置信息",
        "container":true,
        "childrens":[{
          "element_type":"text",
          "element_title":"经度",
          "meta_column":"baidu_x",
          "map_element":true,
          "point":"lng",
          "width":"40%",
          "float":"left",
          "marginRight":"10px",
          "is_required":false
        },{
          "element_type":"text",
          "element_title":"纬度",
          "meta_column":"baidu_y",
          "map_element":true,
          "point":"lat",
          "width":"40%",
          "float":"left",
          "is_required":false
        }]
}
```

#### 属性

| 字段              | 类型      | 说明                                    | 是否必填 | 默认值   | 其他   |
| --------------- | ------- | ------------------------------------- | ---- | ----- | ---- |
| element_type    | string  | 组件类型                                  | 是    | 无     |      |
| element_title   | string  | 组件title                               | 是    | 无     |      |
| id              | string  | 地图组件唯一id编号                            | 是    | 无     |      |
| center          | string  | 地图初始中央显示位置，eg:包头                      | 是    | 无     |      |
| dragging        | boolean | 地图是否允许拖动                              | 否    | false |      |
| scrollwheelzoom | boolean | 地图是否允许缩放                              | 否    | false |      |
| doubleclickzoom | boolean | 地图是否允许鼠标双击缩放层级                        | 否    | true  |      |
| width           | string  | 地图初始宽度,可以是百分比，可以是像素值，例如：100% 或者400px; | 是    | 无     |      |
| height          | string  | 地图初始高度                                | 是    | 无     |      |
| container       | boolean | 是否容器组件                                | 否    | true  |      |
| childrens       | Array   | 地图子组件，这里必包含2个经纬度文本域组件                 | 是    | 无     |      |

### 数据表格datagrid

Datagrid组件是列表table展示数据组件

![](/images/blog/jformparser-guide/datagrid.jpg)

#### 结构

```javas
{
        "element_type":"datagrid",
        "element_title":"交通查询",
        "is_remote":true,
        "is_operate":true,
        "operate_title":"操作",
        "operate_buttons":[
          {"type":"edit","element_type":"button","element_title":"编辑","remote_url":"/cms/template/template_form.htm","params":{"url":"/json/baotou/traffic/traffic_form.json"}},
          {"type":"delete","element_type":"button","element_title":"删除","remote_url":"/cms/template/delete.htm"}],
        "pagination":true,
        "remote_url":"/cms/template/get_remote_list.htm",
        "columns":[
          {"field":"start_name","title":"出发城市"},
          {"field":"end_name","title":"到达城市"},
          {"field":"name","title":"航班号"},
          {"field":"first_time","title":"离港"},
          {"field":"last_time","title":"到港"},
          {"field":"type","title":"所属交通","rel_column":true,"rel_resource_name":"traffic_type"}],
        "childrens":[
          {
            "element_type":"text",
            "element_title":"出发城市",
            "meta_column":"start_name",
            "is_query":true,
            "direction":"left",
            "width":"100%"
          }, {
            "element_type":"text",
            "element_title":"到达城市",
            "meta_column":"end_name",
            "is_query":true,
            "direction":"left",
            "width":"100%"
          },{
            "element_type":"select",
            "element_title":"所属交通",
            "is_required":true,
            "meta_column":"traffic_id",
            "is_fk":true,
            "fk_resource_name":"traffic_type",
            "fk_meta_column":"id",
            "fk_meta_column_show":"type",
            "is_remote":true,
            "rules":"is_email",
            "message":"",
            "remote_url":"/cms/template/get_remote_data.htm"
          },{
            "element_type":"button",
            "element_title":"查询",
            "type":"query"
          },{
            "element_type":"buttonGroup",
            "element_title":"操作按钮组",
            "align":"left",
            "childrens":[
              {"element_type":"button","type":"link","element_title":"添加班次","remote_url":"/cms/template/template_form.htm","params":{"url":"/json/baotou/traffic/traffic_form.json"}}
            ]
          }
        ]
}

```

#### 属性

| 字段              | 类型      | 说明                                       | 是否必填 | 默认值   | 其他   |
| --------------- | ------- | ---------------------------------------- | ---- | ----- | ---- |
| element_type    | string  | 组件类型                                     | 是    | 无     |      |
| element_title   | string  | 组件title                                  | 是    | 无     |      |
| is_remote       | boolean | 是否远程ajax加载数据,如果为false，data本地数据源字段必填，否则无数据展示 | 是    | false |      |
| remote_url      | string  | 远程ajax加载数据url地址                          | 是    | 无     |      |
| is_operate      | boolean | 是否包含操作栏                                  | 是    | true  |      |
| operate_title   | string  | 操作栏抬头title                               | 是    | true  |      |
| operate_buttons | Array   | 操作栏按钮集合，列如编辑、删除等等，具体按钮明细属性请参考[button按钮](https://xiaoymin.github.io/JFormParser-doc/plugins/button.html) | 是    | true  |      |
| pagination      | boolean | 是否分页                                     | 是    | false |      |
| data            | Array   | local数据源,和column列数据一一格式对应,例如：`[{"start_name":"北京","end_name":"杭州","name":"T2XDD","first_time":"8:00","last_time":"17:00","type":"飞机"}...]` | 否    | true  |      |
| columns         | Array   | 列集合明细,具体属性请参考[column属性](https://xiaoymin.github.io/JFormParser-doc/plugins/datagrid.html#column) | 是    | 无     |      |
| container       | boolean | 是否容器组件                                   | 否    | true  |      |
| childrens       | Array   | 容器子组件集合，可包含任何其他组件，这里datagrid包含的子组件仅仅是查询框组件 | 否    | 无     |      |

#### column属性

| 字段                | 类型      | 说明                                       | 是否必填 | 默认值   | 其他   |
| ----------------- | ------- | ---------------------------------------- | ---- | ----- | ---- |
| field             | string  | 字段名称                                     | 是    | 无     |      |
| title             | string  | 显示列title                                 | 是    | 无     |      |
| rel_column        | boolean | 是否多表关联查询，表关联查询情况，且列上需要展示关联表字段的时候，该字段为true，值为关联表字段 | 否    | false |      |
| rel_resource_name | string  | 外联表资源名称                                  | 否    | 无     |      |

## 基础表单组件

###  富文本框editor

editor组件是一个富文本组件，这里使用的公司购买的ewebeditor插件，修改了ewebeditor部分源码，后台上传的资源全部上传到云数据中心

![](/images/blog/jformparser-guide/editor.jpg)

#### 结构

```javascript
{
          "element_type":"editor",
          "element_title":"详情",
          "meta_column":"detail_intro",
          "width":"400px",
          "is_required":true,
          "height":"300px"
}
```

#### 属性

| 字段            | 类型      | 说明                                    | 是否必填 | 默认值   | 其他   |
| ------------- | ------- | ------------------------------------- | ---- | ----- | ---- |
| element_type  | string  | 组件类型                                  | 是    | 无     |      |
| element_title | string  | 组件title                               | 是    | 无     |      |
| meta_column   | string  | 表单name字段，元数据字段                        | 是    | 无     |      |
| is_required   | boolean | 是否必输项                                 | 否    | false |      |
| width         | string  | 地图初始宽度,可以是百分比，可以是像素值，例如：100% 或者400px; | 是    | 无     |      |
| height        | string  | 地图初始高度                                | 是    | 无     |      |

### 文本域text

text普通文本域组件，提供各种数据格式的支持，包括（整数、小数、身份证、时间）等等

![](/images/blog/jformparser-guide/text.jpg)

#### 结构

```javascript
{
            "element_type":"text",
            "element_title":"资讯时间",
            "data_type":"datetime",
            "formatter":"yyyy-MM-dd",
            "is_required":true,
            "meta_column":"scenic_time"
}
```

#### 属性

| 字段            | 类型      | 说明                                       | 是否必填 | 默认值        | 其他   |
| ------------- | ------- | ---------------------------------------- | ---- | ---------- | ---- |
| element_type  | string  | 组件类型                                     | 是    | 无          |      |
| element_title | string  | 组件title                                  | 是    | 无          |      |
| meta_column   | string  | 表单name字段，元数据字段                           | 是    | 无          |      |
| is_required   | boolean | 是否必输项                                    | 否    | false      |      |
| width         | string  | 地图初始宽度,可以是百分比，可以是像素值，例如：100% 或者400px;    | 否    | 无          |      |
| defaultValue  | string  | 默认值                                      | 否    | 无          |      |
| float         | string  | float位置：left、right                       | 否    | 无          |      |
| marginRight   | string  | 右间距，例如10px;                              | 否    | 无          |      |
| data_type     | string  | 数据类型，分为["normal","email","number","decimal","datetime","card"..普通文本、邮箱、整数、小数、身份证] | 否    | normal     |      |
| formatter     | string  | 数据类型为日期时，该值启用                            | 否    | yyyy-MM-dd |      |
| map_element   | boolean | 是否是地图经纬度元素，配合父元素为bmap类型使用                | 否    | false      |      |
| point         | string  | 如果为地图经纬度元素，该值必填，值(lng、lat)经度、纬度，配合父元素为bmap类型使用 | 否    | 无          |      |
| is_query      | boolean | 是否为查询元素                                  | 否    | false      |      |

### 多行文本textarea

textarea多行文本域组件

![](/images/blog/jformparser-guide/textarea.jpg)

#### 结构

```javascript
{
            "element_type":"textarea",
            "element_title":"简介",
            "is_required":true,
            "meta_column":"intro",
            "width":"100%"
}
```

#### 属性

| 字段            | 类型      | 说明                                    | 是否必填 | 默认值   | 其他   |
| ------------- | ------- | ------------------------------------- | ---- | ----- | ---- |
| element_type  | string  | 组件类型                                  | 是    | 无     |      |
| element_title | string  | 组件title                               | 是    | 无     |      |
| meta_column   | string  | 表单name字段，元数据字段                        | 是    | 无     |      |
| is_required   | boolean | 是否必输项                                 | 否    | false |      |
| width         | string  | 地图初始宽度,可以是百分比，可以是像素值，例如：100% 或者400px; | 否    | 无     |      |
| defaultValue  | string  | 默认值                                   | 否    | 无     |      |

### 下拉框select

select下拉框组件，可以根据url远程加载数据，也可以是local 数据

![](/images/blog/jformparser-guide/select.jpg)

#### 结构

```javascript
{
            "element_type":"select",
            "element_title":"所属景区",
            "is_required":true,
            "meta_column":"scenic_id",
            "is_fk":true,
			"width":"100%",
            "fk_resource_name":"scenic_info",
            "fk_meta_column":"id",
            "fk_meta_column_show":"title",
            "is_remote":true,
            "rules":"is_email",
            "message":"",
            "remote_url":"/cms/template/get_remote_data.htm",
			"data":[
            {"text":"AAAAA","value":"5A"},
            {"text":"AAAA","value":"4A"},
            {"text":"AAA","value":"3A"},
            {"text":"AA","value":"2A"}
          ]
}
```

#### 属性

|                     |         |                                          |      |       |      |
| ------------------- | ------- | ---------------------------------------- | ---- | ----- | ---- |
| 字段                  | 类型      | 说明                                       | 是否必填 | 默认值   | 其他   |
| element_type        | string  | 组件类型                                     | 是    | 无     |      |
| element_title       | string  | 组件title                                  | 是    | 无     |      |
| is_remote           | boolean | 是否远程ajax加载数据,如果为false，data本地数据源字段必填，否则无数据展示 | 是    | false |      |
| remote_url          | string  | 远程ajax加载数据url地址                          | 是    | 无     |      |
| is_fk               | boolean | 是否关联表查询获取数据                              | 否    | false |      |
| fk_resource_name    | string  | 关联表名                                     | 否    | 无     |      |
| fk_meta_column      | string  | 关联列字段                                    | 否    | 无     |      |
| fk_meta_column_show | string  | 关联显示列字段                                  | 否    | 无     |      |
| data                | Array   | local数据源，text：文本、value：值`[            {"text":"AAAAA","value":"5A"},            {"text":"AAAA","value":"4A"},            {"text":"AAA","value":"3A"},            {"text":"AA","value":"2A"}          ] ` | 否    | true  |      |

### 复选框checkboxGroup

checkboxGroup复选框组件，这里是复选框组，支持远程获取字典项

![](/images/blog/jformparser-guide/checkboxGroup.jpg)

#### 结构

```javascript
{
            "element_type":"checkboxGroup",
            "element_title":"参与小组",
            "is_required":true,
            "meta_column":"scenic_id",
            "is_fk":true,
			"width":"100%",
            "fk_resource_name":"scenic_info",
            "fk_meta_column":"id",
            "fk_meta_column_show":"title",
            "is_remote":true,
            "rules":"is_email",
            "message":"",
            "remote_url":"/cms/template/get_remote_data.htm",
			"data":[
            {"text":"AAAAA","value":"5A"},
            {"text":"AAAA","value":"4A"},
            {"text":"AAA","value":"3A"},
            {"text":"AA","value":"2A"}
          ]
}
```

#### 属性

| 字段                  | 类型      | 说明                                       | 是否必填 | 默认值   | 其他   |
| ------------------- | ------- | ---------------------------------------- | ---- | ----- | ---- |
| element_type        | string  | 组件类型                                     | 是    | 无     |      |
| element_title       | string  | 组件title                                  | 是    | 无     |      |
| meta_column         | string  | 表单name字段，元数据字段                           | 是    | 无     |      |
| is_required         | boolean | 是否必输项                                    | 否    | false |      |
| is_remote           | boolean | 是否远程ajax加载数据,如果为false，data本地数据源字段必填，否则无数据展示 | 是    | false |      |
| remote_url          | string  | 远程ajax加载数据url地址                          | 是    | 无     |      |
| is_fk               | boolean | 是否关联表查询获取数据                              | 否    | false |      |
| fk_resource_name    | string  | 关联表名                                     | 否    | 无     |      |
| fk_meta_column      | string  | 关联列字段                                    | 否    | 无     |      |
| fk_meta_column_show | string  | 关联显示列字段                                  | 否    | 无     |      |
| data                | Array   | local数据源，text：文本、value：值`[            {"text":"AAAAA","value":"5A"},            {"text":"AAAA","value":"4A"},            {"text":"AAA","value":"3A"},            {"text":"AA","value":"2A"}          ]` | 否    | true  |      |

### 单选框radioGroup

radioGroup下拉框组件，可以根据url远程加载数据，也可以是local 数据

![](/images/blog/jformparser-guide/radioGroup.jpg)

#### 结构

```javascript
{
            "element_type":"radioGroup",
            "element_title":"景区级别",
            "is_required":true,
            "meta_column":"scenic_id",
            "is_fk":true,
			"width":"100%",
            "fk_resource_name":"scenic_info",
            "fk_meta_column":"id",
            "fk_meta_column_show":"title",
            "is_remote":false,
            "rules":"is_email",
            "message":"",
            "remote_url":"/cms/template/get_remote_data.htm",
			"data":[
            {"text":"AAAAA","value":"5A"},
            {"text":"AAAA","value":"4A"},
            {"text":"AAA","value":"3A"},
            {"text":"AA","value":"2A"}
          ]
}
```

#### 属性

| 字段                  | 类型      | 说明                                       | 是否必填 | 默认值   | 其他   |
| ------------------- | ------- | ---------------------------------------- | ---- | ----- | ---- |
| element_type        | string  | 组件类型                                     | 是    | 无     |      |
| element_title       | string  | 组件title                                  | 是    | 无     |      |
| meta_column         | string  | 表单name字段，元数据字段                           | 是    | 无     |      |
| is_required         | boolean | 是否必输项                                    | 否    | false |      |
| is_remote           | boolean | 是否远程ajax加载数据,如果为false，data本地数据源字段必填，否则无数据展示 | 是    | false |      |
| remote_url          | string  | 远程ajax加载数据url地址                          | 是    | 无     |      |
| is_fk               | boolean | 是否关联表查询获取数据                              | 否    | false |      |
| fk_resource_name    | string  | 关联表名                                     | 否    | 无     |      |
| fk_meta_column      | string  | 关联列字段                                    | 否    | 无     |      |
| fk_meta_column_show | string  | 关联显示列字段                                  | 否    | 无     |      |
| data                | Array   | local数据源，text：文本、value：值`[            {"text":"AAAAA","value":"5A"},            {"text":"AAAA","value":"4A"},            {"text":"AAA","value":"3A"},            {"text":"AA","value":"2A"}          ]` | 否    | true  |      |

## 自定义组件

### 素材上传fileupload

fileupload上传组件，可以上传图片（可预览）、音频等素材

![](/images/blog/jformparser-guide/fileupload.jpg)

#### 结构

```javascript
{
        "element_type":"fileupload",
        "element_title":"交通主图",
        "meta_column":"logo_image"
}
```

#### 属性

| 字段            | 类型      | 说明             | 是否必填 | 默认值   | 其他   |
| ------------- | ------- | -------------- | ---- | ----- | ---- |
| element_type  | string  | 组件类型           | 是    | 无     |      |
| element_title | string  | 组件title        | 是    | 无     |      |
| meta_column   | string  | 表单name字段，元数据字段 | 是    | 无     |      |
| is_required   | boolean | 是否必输项          | 否    | false |      |

### 图集images

Images图集组件，该组件和后台CMS绑定,需要一张素材表cms_material_info

![](/images/blog/jformparser-guide/images.jpg)

#### 结构

```javascript
{
          "element_type":"images",
          "id":"scenic_images",
          "is_required":true,
          "is_fk_resource":true,
          "fk_resource_name":"cms_material_info",
          "service":"materialService",
          "remote_url":"/cms/images/get_remote_data.htm",
          "width":"400px",
          "height":"300px"
}
```

#### 属性

| 字段            | 类型      | 说明                                    | 是否必填 | 默认值   | 其他   |
| ------------- | ------- | ------------------------------------- | ---- | ----- | ---- |
| element_type  | string  | 组件类型                                  | 是    | 无     |      |
| element_title | string  | 组件title                               | 是    | 无     |      |
| meta_column   | string  | 表单name字段，元数据字段                        | 是    | 无     |      |
| id            | string  | 图集id                                  | 是    | 无     |      |
| service       | string  | 后台service业务名称                         | 是    | 无     |      |
| remote_url    | string  | 图集初始化url                              | 是    | 无     |      |
| width         | string  | 地图初始宽度,可以是百分比，可以是像素值，例如：100% 或者400px; | 否    | 无     |      |
| height        | string  | 图集高度                                  | 是    | 无     |      |
| is_required   | boolean | 是否必输项                                 | 否    | false |      |

## 其他

### 按钮button

![](/images/blog/jformparser-guide/button.jpg)

#### 结构

```javascript

{
	"element_type":"button",
	"type":"submit",
	"element_title":"提交",
	"remote_url":"/cms/template/submit.htm",
	"width":"80px",
	"action_url":"/cms/template/template_list.htm",
	"params":{"url":"/json/shengsi/scenic/scenic_list.json"}
}
```

#### 属性

| 字段            | 类型     | 说明                                       | 是否必填 | 默认值  | 其他   |
| ------------- | ------ | ---------------------------------------- | ---- | ---- | ---- |
| element_type  | string | 组件类型                                     | 是    | 无    |      |
| element_title | string | 组件title                                  | 是    | 无    |      |
| type          | string | 按钮类型，目前有[submit、link、query、edit、delete]五种类型，提交、连接跳转、查询、编辑、删除 | 是    | 无    |      |
| remote_url    | string | 根据type类型，有不同的意义，例如是submit，这里则表示提交地址，如未link，这里则为跳转地址 | 否    | 无    |      |
| params        | object | event点击事件，remote_url后面参数                 | 否    | 无    |      |
| action_url    | string | callback后执行地址                            | 否    | 无    |      |
| width         | string | 地图初始宽度,可以是百分比，可以是像素值，例如：100% 或者400px;    | 否    | 无    |      |

