/**
 * Created by Administrator on 2015/9/15.
 */
;
(function () {
    var Utils = {
        // 生成唯一ID
        uuid: function () {
            function tempFunction() {
                var uuidIndex = 1;
                return function innerFunction() {
                    return (new Date().getTime() + "" + uuidIndex++);
                }
            }

            this.uuid = tempFunction();
        },
        uuid2: function () {
            var uuidIndex = 1;
            return function innerFunction() {
                return (new Date().getTime() + "" + uuidIndex++);
            }
        },
        hasClass: function (dom, className) {
            className = className.replace(/^\s|\s$/g, "");
            return (
                    " " + ((dom || {}).className || "").replace(/\s/g, " ") + " "
                ).indexOf(" " + className + " ") >= 0
        },
        // 給 DOM 添加 className
        addClass: function (domObj, className) {
            //domObj.classList.add(className);
            if (!this.hasClass(domObj, className)) {
                domObj.className = domObj.className + " " + className;
            }
            return domObj;
            //执行成功返回true
        },
        // 去掉 DOM 上的某个 className
        removeClass: function (domObj, className) {
            //domObj.classList.remove(className);//不兼容IE8
            var reg = new RegExp(className, "g");
            domObj.className = domObj.className.replace(reg, "");
            return domObj;
            //执行成功返回true
        },
        toggleClass:function(domObj, className){
            if(this.hasClass(domObj, className)){
                return this.removeClass(domObj, className);
            }else{
                return this.addClass(domObj, className);
            }
        },
        // 在当前的 domcument 上加载一个 script 脚本，加载完成后执行 cb
        loadScript: function (script, cb) {
            var scriptDom = document.createElement("script");
            scriptDom.addEventListener("load", function () {
                if (cb) {
                    cb();
                }
            });
            scriptDom.src = script;
            document.body.appendChild(scriptDom);
        },
        // 返回一个不重复的数组
        uniqueArray: function (array) {
            var tempMap = {};
            var resultArray = [];
            for (var i = 0; i < array.length; i++) {
                if (!tempMap[array[i]]) {
                    resultArray.push(array[i]);
                    tempMap[array[i]] = array[i];
                }
            }
            return resultArray;
        },
        // super为父类的构造函数，sub为子类的构造函数。实现继承。用尽量多的方法完善该函数，例如原型链的方式，深克隆的方式等
        extend: function (superClass, subClass) {
            for (var methods in superClass.prototype) {
                if (!subClass.prototype[methods]) {
                    subClass.prototype[methods] = superClass.prototype[methods];
                }
            }
        },
        extend2: function (superClass, subClass) {
            function tempFunction() {

            };
            tempFunction.prototype = superClass.prototype;

            function F() {
            }

            F.prototype = parent;
            return new F();

        },
        extend3: function (superClass, subClass) {
            for (var methods in superClass) {
                if (!subClass[methods]) {
                    subClass[methods] = superClass[methods];
                }
            }
        },
        // 类型判断(不知道是否需要判断下效率)
        isString: function (val) {
            if (Object.prototype.toString.call(val) == "[object String]") {
                return true;
            }
            return false;
        },
        isNumber: function (val) {
            if (Object.prototype.toString.call(val) == "[object Number]") {
                return true;
            }
            return false;
        },
        isObject: function (val) {
            if (val instanceof Object) {
                return true;
            }
            return false;
        },
        isArray: function (val) {
            if (Object.prototype.toString.call(val) == "[object Array]") {
                return true;
            }
            return false;
        },
        isFunction: function (val) {
            if (Object.prototype.toString.call(val) == "[object Function]") {
                return true;
            }
            return false;
        },
        //动画 1000ms 30帧
        //getElement,
        animate: function (element, endStyle, speed, cb) {

        },
        animateMove: function (element, endStyle, speed, cb) {

        },
        /*
         * @string id
         * @string styleName 样式名
         */
        getEyeJsStyle: function (element, styleName) {
            if (element.currentStyle) {//ie
                return element.currentStyle[styleName];
            } else { //ff
                var arr = element.ownerDocument.defaultView.getComputedStyle(element, null);
                return arr[styleName];
            }
        },


        move: function (obj, target, speed) {
            speed = -obj.offsetLeft > target ? speed : -speed;
            clearInterval(moveTime);
            var moveTime = setInterval(function () {

                if (-obj.offsetLeft == target) {

                    clearInterval(moveTime);

                } else {
                    obj.style.left = obj.offsetLeft + speed + "px";
                }
            }, 30);
        }
        ,
        //navList事件处理
        navList: function (e) {
            // 检查事件源e.targe是否为J-nav
            var currentActiveTab="";
            if (e.target && Utils.hasClass(e.target, "J-nav")) {
                //阻止默认事件
                e.preventDefault();
                //阻止事件冒泡
                e.stopPropagation();//避免触发组件父类的已有的点击事件

                var parentElement = this;
                //this.parentNode.firstChild()
                var childrenElementList = parentElement.children;
                var targetId = e.target.getAttribute("data-targetid");//得到当前点击处的data-targetid属性


                for (var i = 0; i < childrenElementList.length; i++) {
                    Utils.removeClass(childrenElementList[i], "active");//移除所有active//TODO 需要优化
                }
                Utils.addClass(e.target, "active");//给当前点击处添加active

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
                    setTimeout(function (_this_) {
                        targetElement.innerHTML = "加载成功";
                        Utils.removeClass(targetElement, "loading");
                    }, 1000)
                } else {
                }
                Utils.addClass(targetElement, "active");//添加active类
                Utils.addClass(targetElement, "J-loaded");//添加J-loaded类

            }
        },
         //绑定css切换操作 cla类名
        bindingToggleStyle: function (element, cla) {

            var toggleBtn = document.getElementsByClassName("toggle-btn")[0];
            EventUtil.addEvent(toggleBtn, "click", function (e) {
                var targetElementId = e.target.getAttribute("data-toggle");
                var targetElement = document.getElementById(targetElementId);
                Utils.toggleClass(targetElement,cla);
            });
        }
    }

    window.Utils = Utils;
})
();
