(function () {

    //2015年8月19日00:04:29 王斐
    //$("img").load(function () {
    //    $(this).show();
    //});
    //2015年8月30日12:27:29 王斐 添加format方法
    String.prototype.format = function (args) {
        if (arguments.length > 0) {
            var result = this;
            if (arguments.length == 1 && typeof (args) == "object") {
                for (var key in args) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
            else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] == undefined) {
                        return "";
                    }
                    else {
                        var reg = new RegExp("({[" + i + "]})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
            return result;
        }
        else {
            return this;
        }
    }
    //2015年9月1日14:20:19王斐数组删除
    /* 
     *  方法:Array.remove(dx) 通过遍历,重构数组
     *  功能:删除数组元素.
     *  参数:dx删除元素的下标.
     */
    Array.prototype.remove = function (dx) {
        if (isNaN(dx) || dx > this.length) {
            return false;
        }
        for (var i = 0, n = 0; i < this.length; i++) {
            if (this[i] != this[dx]) {
                this[n++] = this[i]
            }
        }
        this.length -= 1
    }




    //document.getElementsByClassName("J-nav-list").
})();