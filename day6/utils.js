/**
 * Created by Administrator on 2015/9/15.
 */
;
(function () {
    function Utils(val) {

    }

    Utils.prototype = {
        // 生成唯一ID
        uuidIndex: 1,
        uuid: function () {
            //考虑到并发因此这里定义一个序号用于处理并发
            var newId = new Date().getTime() + "" + uuidIndex;
            uuidIndex++;
            return newId;
        },
        // 給 DOM 添加 className
        addClass: function (domObj, className) {
            domObj.classList.add(className);
            //document.getElementById("testId").classList.add("a")
            return true;
            //执行成功返回true
        },
        // 去掉 DOM 上的某个 className
        removeClass: function (domObj, className) {
            domObj.classList.remove(className);
            return true;
            //执行成功返回true
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
            for ( var methods in superClass.prototype) {
                if(!subClass.prototype[methods]){
                    subClass.prototype[methods]=superClass.prototype[methods];
                }
            }
        },
        extend2: function (superClass, subClass) {
            Person.call(this);
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
        }
    }
    window.utils = Utils;
})();

//var utils = {
//    // 生成唯一ID
//    uuid: function(){},
//    // 給 DOM 添加 className
//    addClass: function( domObj, className ){},
//    // 去掉 DOM 上的某个 className
//    removeClass: function( domObj, className ){},
//    // 在当前的 domcument 上加载一个 script 脚本，加载完成后执行 cb
//    loadScript: function( script, cb ){},
//    // 返回一个不重复的数组
//    uniqueArray: function( array ){},
//    // super为父类的构造函数，sub为子类的构造函数。实现继承。用尽量多的方法完善该函数，例如原型链的方式，深克隆的方式等
//    extend: function(super, sub) {},
//// 类型判断
//isString: function( val ){},
//isNumber: function( val ){}
//isObject: function( val ){},
//isArray: function( val ){},
//isFunction: function( val ){}
//};