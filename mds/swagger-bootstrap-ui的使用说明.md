# swagger-bootstrap-ui的使用说明

很多朋友在使用这个jar包的时候会出现接口出不来的情况，或者只出现ui默认的几个接口，项目的api接口没有出来，

这里有些注意点同大家说一下吧



- 依赖swagger(这点很重要),所以项目必须启用swagger,如果你的项目原来就是使用swagger的，仅仅只需要引入`swagger-bootstrap-ui`的jar包，然后访问`/doc.html`页面即可,类似于访问原生的`/swagger-ui.html`


- `swagger-bootstrap-ui`仅仅只是ui包,没有特定的api语法，属于工具性质的，是完全依赖于swagger的,后端代码也需要使用swagger的java注解-来实现
- `swagger-bootstrap-ui`做的工作就是解析swagger的接口`/v2/api-docs`，根据该接口做的界面呈现，因为作者喜欢左右风格的布局，原生的ui布局是上下结构的，对于作者来说不是很方便，所以就写了这个小工具,开源出来给大家使用，如果你也喜欢这种风格，你可以应用到你的项目中
- git上也提供了一个demo，可以pull下来运行一下,地址:http://git.oschina.net/xiaoym/swagger-bootstrap-ui-demo



如果出现js报错,接口出不来，欢迎提issue告知作者修正，非常乐意解决您遇到的bug



新issue地址:http://git.oschina.net/xiaoym/swagger-bootstrap-ui/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=



当然如果你也有更好的想法，欢迎沟通，一起来完善这个小工具~~~~~



