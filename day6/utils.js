/**
 * Created by Administrator on 2015/9/15.
 */
;
(function () {
    var Utils = {
        // 生成唯一ID
        uuid: function () {
            function tempFunction() {
                var uuidIndex = 1;//闭包保存
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
        toggleClass: function (domObj, className) {
            if (this.hasClass(domObj, className)) {
                return this.removeClass(domObj, className);
            } else {
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

            function F() {
                function tempFunction() {
                };
                tempFunction.prototype = superClass.prototype;
                return tempFunction
            }

            subClass.prototype = new F();

        },
        /**
         * 继承最终版完美继承无死角
         * 请注意:这种继承与"直接把一个父类的实例赋值给子类原型"的方法不同
         * 这种不会继承父类构造方法中的this属性的值,不会污染子类对象
         * 注意! 这个是不会执行父类的构造方法
         * @param superClass
         * @param subClass
         */
        extend3: function (superClass, subClass) {
            function tempFunction() {
            };
            tempFunction.prototype = superClass.prototype;
            subClass.prototype = new tempFunction();//这里形成了闭包, 将tempFunction锁入内存
            //测试发现new操作会将类方法的原型属性对象化为一个object
        },
        /**
         * 书本上的继承-----"直接把一个父类的实例赋值给子类原型"的方法
         * 请注意:这种继承会导致父类构造方法中的参数继承下来
         * 注意! 这个会执行父类的构造方法 很危险
         * @param superClass
         * @param subClass
         */
        extend4: function (superClass, subClass) {
            subClass.prototype = new superClass();
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

        //动画  60帧/s 一般人眼识别每秒60帧可以让人感觉很舒服 相当于一帧需要1000/60毫秒 约等于16.6ms 间隔下一帧
        //animate : 我的动画函数
        //需要参数; 操作对象, 结束状态 , 时间(多少毫秒内执行完) , 回调函数.
        //Utils.animate(document.getElementById("J-menu-top"),{"margin-top":"800px"},5000,"");
        //通过
        //测试:Utils.animate(document.getElementById("J-menu-top"),{"font-weight":"800"},5000,"");
        //
        animate: function (element, endStyle, time, cb) {
            //var derta = this.getStateDerta(element,endStyle);//1.根据目标状态与当前状态的状态差求出变化距离derta
            var total = time / 1000 * 60;//2.根据动画时间计算一共需要划分多少帧 时间*帧数
            var current帧数 = 0;
            var 每帧改变量 = this.计算每帧改变量(element, endStyle, total);//derta / total;
            console.time("控制台计时器一");
            var tempIntervalEle = setInterval(function () {
                if (current帧数 < total) {
                    Utils.animateOperation(element, 每帧改变量, (current帧数 + 1));
                    current帧数++;
                } else {
                    clearInterval(tempIntervalEle);
                    cb();
                }
            }, 16.6);
            console.timeEnd("控制台计时器一");
        },
        //计算每帧改变量
        //结合getStateDerta()
        计算每帧改变量: function (element, operationJsonList, total) {
            var 每帧改变量Json = {};//定义返回值
            for (var operation in operationJsonList) {
                var value = operationJsonList[operation];
                var currentState = this.getEyeJsStyle(element, operation);
                currentState = parseFloat(currentState == "auto" || !currentState ? 0 : currentState);
                var 取出的后两位是 = value.substring(value.length - 2, value.length);
                value = parseFloat(value);
                if (取出的后两位是 == "px") {
                    每帧改变量Json[operation] = ((value - currentState) / total) + "px";
                } else {
                    每帧改变量Json[operation] = ((value - currentState) / total);
                }

            }
            return 每帧改变量Json;
        },
        //根据目标状态与当前状态的状态差求出变化距离derta
        //测试:Utils.getStateDerta(document.getElementById("J-menu-top"),{right:"66px","line-height":"100px"});
        //通过

        getStateDerta: function (element, operationJsonList) {
            var StateDerta = {};//定义返回值
            for (var operation in operationJsonList) {
                var value = operationJsonList[operation];
                var currentState = this.getEyeJsStyle(element, operation);
                currentState = parseFloat(currentState == "auto" || currentState ? 0 : currentState);
                var 取出的后两位是 = value.substring(value.length - 2, value.length);
                value = parseFloat(value);
                if (取出的后两位是 == "px") {
                    StateDerta[operation] = (value - currentState) + "px";
                } else {
                    StateDerta[operation] = (value - currentState);
                }

            }
            return StateDerta;

        },
        //需要参数 执行对象 操作值Json n是指倍数
        //测试Utils.animateOperation(document.getElementById("J-menu-top"),{right:"66px",color:"red"});
        //通过
        //TODO 效率可能是一个问题
        animateOperation: function (element, operationJsonList, n) {
            //运动操作
            //var operationList = {};

            for (var operation in operationJsonList) {
                var value = operationJsonList[operation];

                if (!this.isNumber(value)) {
                    var 取出的后两位是 = value.substring(value.length - 2, value.length);
                    var current = this.getEyeJsStyle(element, operation);
                    current = current.substring(0, current.length - 2);
                    element.style[operation] = this.numAdd(current, value.substring(0, value.length - 2)) + 取出的后两位是;
                    //operationList[operation] = this.numAdd(current, value.substring(0, value.length - 2)) + 取出的后两位是;
                } else {
                    var current = this.getEyeJsStyleNum(element, operation);
                    element.style[operation] = this.numAdd(current, value);
                    //operationList[operation] = this.numAdd(current, value);
                }
            }
            //for(var operation in operationList){
            //    element.style[operation]=operationList[operation];
            //}
        },
        numAdd: function (num1, num2) {
            return parseFloat(num1) + parseFloat(num2);
        },
        //判断当前对象的样式是否等于目标样式
        isEqual: function () {

        }
        ,
        animateMove: function (element, endStyle, speed, cb) {

        }
        ,
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
        getEyeJsStyleNum: function (element, styleName) {
            var strAns = this.getEyeJsStyle(element, styleName);
            return parseFloat("0" + strAns);
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
            var currentActiveTab = "";
            if (e.target && Utils.hasClass(e.target ? e.target : e.srcElement, "J-nav")) {
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
        bindingToggleClass: function (element, cla) {

            var toggleBtn = document.getElementsByClassName("toggle-btn")[0];
            EventUtil.addEvent(toggleBtn, "click", function (e) {
                var targetElementId = e.target.getAttribute("data-toggle");
                var targetElement = document.getElementById(targetElementId);
                Utils.toggleClass(targetElement, cla);
            });
        },
        //绑定css切换操作 style
        bindingToggleStyle: function (element, style) {
            var toggleBtn = document.getElementsByClassName("toggle-btn")[0];
            EventUtil.addEvent(toggleBtn, "click", function (e) {
                for (var oneStyle in style) {
                    if (element.style[oneStyle] != "") {
                        element.style[oneStyle] = "";
                    } else {
                        element.style[oneStyle] = style[oneStyle];
                    }
                }
            });
        },
        createXMLHttpRequest: function () {

            if (window.ActiveXObject) {
                return xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            else if (window.XMLHttpRequest) {
                return xmlHttp = new XMLHttpRequest();
            }

        },
        myAjax: function (data) {
            // 新建一个XMLHttpRequest实例对象

            var xhr = this.createXMLHttpRequest();

            // 在通信过程中，每当发生状态变化的时候，就会触发readyStateChange事件，设置回调函数
            xhr.onreadystatechange = function () {

                // 通信成功时，状态值为4
                var completed = 4;
                if (xhr.readyState === completed) {
                    if (xhr.status === 200) {
                        // 处理服务器发送过来的数据
                        var responseText = JSON.parse(xhr.responseText);
                        //if(!responseText){
                        //    responseText=eval("("+responseText+")");
                        //}
                        data.success(responseText);
                    } else {
                        // 处理错误
                        data.error(xhr.response);
                    }
                }
            };


            // setRequestHeader方法用于设置HTTP请求的头信息。
            //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            // 指定返回的数据类型
            //xhr.responseType = data.returnType;//data.returnType

            // open方式用于指定HTTP请求方式、请求的地址、是否异步
            xhr.open(data.type ? data.type : 'get', data.url, data.async);

            // 发送HTTP请求，只有POST才能发送数据
            xhr.send();
        },

        /**
         * 函数去抖（debounce）:  空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
         * @param cb    回调函数:  请求关联函数，实际应用需要调用的函数
         * @param delay 延迟执行:   空闲时间，单位毫秒
         * @returns {Function}  返回客户调用函数
         */
        debounce: function (cb, delay) {
            //var _this;
            var timer;
            var handler;
            return function () {
                var _this = this;
                var args=arguments;
                //生成委托
                if (!handler) {
                    handler = function () {
                        cb.apply(_this, args);
                    }
                }
                //重新计时
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout( handler,delay)
            }
        },

        /**
         * 函数节流（throttle）
         * @param cb 回调函数
         * @param delay 延迟执行
         */
        throttle: function (cb, delay) {
            var _this;
            var time;
            var lastTime = 0;//上次
            return function () {
                var now = +new Date();//获得当前时间
                console.log(now);
                //如果距离上次时间差大于时间间隔，那么执行回调函数
                if (now - lastTime > delay) {
                    cb();
                    lastTime = now;
                }
            }
        }
    }

    window.Utils = Utils;
})
();
