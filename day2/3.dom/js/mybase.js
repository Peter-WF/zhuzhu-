(function () {
    //事件委托好处: 1.提高性能。 2. 新添加的元素还会有之前的事件。
    $(document.body).delegate(".delete-img", "click", function (e) {
        //阻止事件冒泡
        e.stopPropagation();//避免触发组件父类的已有的点击事件
        $(this).parent().remove();//点击按钮后删除(移除)
    });

    $(document.body).delegate(".close-img", "click", function (e) {
        //阻止事件冒泡
        e.stopPropagation();//避免触发组件父类的已有的点击事件
        $(this).parent().hide();//点击按钮后隐藏(关闭)
    });


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


    $(".J-nav-list").delegate(">.J-nav[data-type!='noactive']", "click", function (e) {
        //阻止默认事件
        e.preventDefault();
        //阻止事件冒泡
        e.stopPropagation();//避免触发组件父类的已有的点击事件
        var parent = $(this).parent();
        //this.parentNode.firstChild()
        var activeElement = parent.find(".active");
        var targetElement=$(this.hash)[0];

        activeElement.removeClass("active"); //找到之前active的对象并移除其活动状态
        $(this).addClass("active");
        $(activeElement[0].hash).removeClass("active");//找到之前active的对象并移除其活动状态

       if(!targetElement.classList.contains("J-loaded")){
           targetElement.classList.add("loading");
           targetElement.innerHTML='<div> <img src="img/loading.gif">正在努力加载中</div>';
           var _this_=this;
           setTimeout(function(_this_){
               targetElement.innerHTML="加载成功";
               targetElement.classList.remove("loading");
           },1000)
       }else{
       }
        targetElement.classList.add("active");
        targetElement.classList.add("J-loaded");

    });
    //document.getElementsByClassName("J-nav-list").
})();