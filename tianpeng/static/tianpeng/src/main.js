/**
 * Created by Peter on 2015/9/21.
 */
// 所有模块都通过 define 来定义
//一直找不到路径可以试试seajs.cache
define("/static/tianpeng/src/main",function(require, exports, module) {

    // 通过 require 引入依赖
    //var $ = require('jquery');
    var EventUtil = require('event');
    var supportIE8 = require('supportIE8');
    var Utils = require('utils');
    var navList = require('nav-list');
    var SliderWF = require('sliderWF');


    //
    //// 通过 exports 对外提供接口
    //exports.doSomething = ;
    //

    // 或者通过 module.exports 提供整个接口
    //module.exports ={
    //    $:$,
    //    SliderWF:SliderWF,
    //    Utils:Utils,
    //    EventUtil:EventUtil
    //};

});
//define('lib/jquery', function(require, exports, module) {
//    // jquery code
//    exports = $;
//});
//define(["jquery"],function(require,exports,moudle){
//    var a= require("jquery"); // a is null
//    moudle.exports = a;
//});