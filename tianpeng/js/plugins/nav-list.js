//navList事件处理
;
(function () {
    /**
     *
     * @param id
     * @constructor
     */
    function NavList(id,callback) {
        return new NavList.prototype.init(id,callback);
    }

    NavList.prototype = {
        //TODO这里考虑是否需要把OperationFunctuon放在构造方法中以免被覆盖
        init: function (id,callback) {
            var navListE = document.getElementById(id);
            EventUtil.addEvent(navListE, "click", this.OperationFunctuon(id,callback));
            return this;
        },
        OperationFunctuon: function (id,callback) {
            // 检查事件源e.targe是否为J-nav-item
            var currentActiveTab = "";//利用闭包保存数据
            var navListE = document.getElementById(id);
            var callback=callback;
            return function (e) {
                //TODO 这里这个 J-nav-item可能写死不太好
                var currentId = e.target ? e.target : e.srcElement;
                if (currentId && Utils.hasClass(currentId, "J-nav-item")) {
                    //阻止默认事件

                    //e.preventDefault();
                    (e.preventDefault) ? e.preventDefault() : e.returnValue = false;
                    //阻止事件冒泡
                    (e.stopPropagation) ? e.stopPropagation() : e.cancelBubble = true;

                    var parentElement = navListE;
                    //this.parentNode.firstChild()
                    var childrenElementList = parentElement.children;
                    var targetId = currentId.getAttribute("data-targetid");//得到当前点击处的data-targetid属性


                    for (var i = 0; i < childrenElementList.length; i++) {
                        Utils.removeClass(childrenElementList[i], "active");//移除所有active//TODO 需要优化
                    }
                    Utils.addClass(currentId, "active");//给当前点击处添加active

                    var allTab = document.getElementsByClassName("tab");
                    if (currentActiveTab == "") {
                        for (var i = 0; i < allTab.length; i++) {
                            Utils.removeClass(allTab[i], "active");//移除所有active//TODO 需要优化
                        }
                    } else {

                        Utils.removeClass(document.getElementById(currentActiveTab), "active");
                    }
                    currentActiveTab = targetId;
                    var targetElement = document.getElementById(targetId);
                    if (!Utils.hasClass(targetElement, "J-loaded")) {
                        Utils.addClass(targetElement, "loading");
                        targetElement.innerHTML = '<div> <img src="img/loading.gif">正在努力加载中</div>';

                        var _this_ = this;
                        callback(targetElement,function(){
                            Utils.removeClass(targetElement,"loading");
                        });
                        //setTimeout(function (_this_) {
                        //    targetElement.innerHTML = "加载成功";
                        //    Utils.removeClass(targetElement, "loading");
                        //
                        //}, 1000);
                    } else {
                    }
                    Utils.addClass(targetElement, "active");//添加active类
                    Utils.addClass(targetElement, "J-loaded");//添加J-loaded类

                    return
                }
            }
        }
    }
    NavList.prototype.init.prototype = NavList.prototype;
    window.NavList = NavList;
})()
