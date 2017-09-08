(function ($) {
    function initMenu() {
        var ul=$('<ul class="layui-nav layui-bg-cyan"></ul>');
        var index=$('<li class="layui-nav-item"><a href="/index.html">首页</a></li>')
        var github=$('<li class="layui-nav-item"><a href="https://github.com/xiaoymin" target="_blank">GitHub</a></li>');
        var osc=$('<li class="layui-nav-item"><a href="https://gitee.com/xiaoym" target="_blank">码云(OSC)</a></li>');
        var blog=$('<li class="layui-nav-item"><a href="/blog">博客</a></li>');
        var ops=$('<li class="layui-nav-item"><a href="javascript:void(0)">开源软件</a></li>')
        var about=$('<li class="layui-nav-item"><a href="/about">关于</a></li>')
        ul.append(index)
            .append(github).append(osc).append(ops).append(blog).append(about);


        $("#menu").append(ul);
    }
    initMenu();
})(jQuery)