(function () {
    ////类似于input [type=radio]
    //$(".navWF>*").click(function () {
    //    var parent = $(this).parent();
    //    var activeElement = parent.find(".active");
    //    activeElement.removeClass("active");;//找到之前active的对象并移除其活动状态
    //    $(this).addClass("active");
    //});

    //事件委托好处: 1.提高性能。 2. 新添加的元素还会有之前的事件。
    $(".navWF").delegate(">*[data-type!='noactive']", "click", function (e) {
        //阻止事件冒泡
        e.stopPropagation();//避免触发组件父类的已有的点击事件
        var parent = $(this).parent();
        var activeElement = parent.find(".active");
        activeElement.removeClass("active");;//找到之前active的对象并移除其活动状态
        $(this).addClass("active");
    });

    //类似于input [type=checkbox]
    $(".checkboxList>*").click(function () {
        if (!$(this)[0].selectedWF) {
            $(this)[0].selectedWF = false;//如果是第一次进来
        }
        $(this)[0].selectedWF = !$(this)[0].selectedWF;
        $(this).toggleClass("selected", $(this)[0].selectedWF)

    });

    //click方法中的function代码会在onclick事件执行完后执行，此时click方法起到追加事件的作用。
    //追加事件模拟url跳转
    $(".button-Father>").click(function () {
        var myurl = $(this).attr("data-myurl");
        if (myurl != null && myurl != "") {
            //window.location.href = myurl;//当前页面打开
            window.open(myurl);//新页面打开
        }
    });
    $(".button-Son").click(function () {
        var myurl = $(this).attr("data-myurl");
        if (myurl != null && myurl != "") {
            //window.location.href = myurl;//当前页面打开
            window.open(myurl);//新页面打开
        }
    });


    var current = 1;//当前显示的wizaridformWF
    var wizaridformWF_Count = $(".wizaridWF .wizaridformWF").length;//wizaridformWF个数
    wizaridWF_Init();//初始化
    function wizaridWF_Init() {
        var wizaridWFindex = 1;//循环迭代序号
        //将每一个wizaridformWF进行隐藏 仅仅需要显示的current
        $(".wizaridWF .wizaridformWF").each(function () {
            if (wizaridWFindex != current) {
                $(this).hide();
            } else {
                this.style.display = "block";
            }
            wizaridWFindex++;
        });
    }
    $(".wizaridWF .nextBtn").click(function () {
        if (current < wizaridformWF_Count) {
            current++;
            wizaridWF_Init();
        }
    });
    $(".wizaridWF .previousBtn").click(function () {
        if (current > 1) {
            current--;
            wizaridWF_Init();
        }
    });

    //用于dropdown-nenu点击后将值自动填入指定input
    $(".dropdown-menu a ").click(function (e) {
        e.stopPropagation();//避免触发组件父类的已有的点击事件

        var targetId = $(this).attr("data-targetId");//得到目标对象
        if (targetId != null) {
            var content = $(this).html()//取得自身值
            var newvalue = content;

            var filltype = $(this).attr("data-filltype")//判断是添加还是覆盖

            if (filltype == "add") {
                var oldvalue = $("#" + targetId).val();//现获取原本input的值
                if (oldvalue == null) {
                    oldvalue = "";
                }
                newvalue = oldvalue + newvalue + " ";

            } else {

            }

            $("#" + targetId).val(newvalue);
        }
    });

    //当点击botton时切换对象的显隐
    $("button.dropdown-toggleWF,div.dropdown-toggleWF,img.dropdown-toggleWF").click(function (e) {
        e.stopPropagation();//避免触发组件父类的已有的点击事件
        //var targetInputId = $(this).attr("data-targetInputId");//input得到目标对象
        //var datafilltype = $(this).attr("data-filltype");//得到目标对象是否是在原有值得基础上添加

        var targetMuneId = $(this).attr("data-targetMuneId");//mune得到目标对象
        $(this).after($("#" + targetMuneId));
        //$(this).parent().find(".tableMneuWF").attr("data-targetid", targetInputId);
        //if (datafilltype != null) {
        //    $(this).parent().find(".tableMneuWF").attr("data-filltype", datafilltype);
        //}
        $("#" + targetMuneId).show();
    });

    $(".dropdown-menuWF").click(function (e) {
        e.stopPropagation();//避免触发组件父类的已有的点击事件
    });

    $("body").click(function () {
        $(".dropdown-menuWF").hide();
    });



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
        if (isNaN(dx) || dx > this.length) { return false; }
        for (var i = 0, n = 0; i < this.length; i++) {
            if (this[i] != this[dx]) {
                this[n++] = this[i]
            }
        }
        this.length -= 1
    }
})();