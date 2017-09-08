(function ($) {
    function menu() {
        this.text="";
        this.href="";
        this.children=new Array();
        this.level="";
    }

    /***
     * 添加菜單
     * @param menu
     */
    menu.prototype.addMenu=function (menu) {
        this.children.push(menu);
    }

    function initMenu() {
        var maxLevel=5;

    }



})(jQuery)