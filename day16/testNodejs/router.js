/**
 * 路由 by WangF
 * @param config    配置文件
 * @param pathname  路径
 * @param response  相应头
 * @param request   接收头
 */
function route(config, pathname, response, request) {

    var utils = require("./lib/utils")(request, response);

    console.log("当前路由请求的是: " + pathname + ";");

    var tempArray = pathname.split("/");

    //console.log("数组长度是: " + tempArray.length);
    tempArray = utils.removeNullObject(tempArray);
    //console.log("数组长度是: " + tempArray.length);

    //获取action名字(默认是index)
    var actionName = "index";
    var i = tempArray.length - 1;
    for (; i > 0; i--) {
        if (actionName) {
            actionName = tempArray[i];
            break;
        }
    }

    //拼接controller路径
    var controllerUrl = config.controllerRoot ? config.controllerRoot : ".";//绝对路径或者是相对路径
    for (var j = 0; j < (i ? i : 1); j++) {
        if (tempArray[j] != "") {
            controllerUrl += "/" + tempArray[j];
        }
    }
    //如果请求了诸如www.zbj.com那么直接进入./home/index
    if (controllerUrl === (config.controllerRoot ? config.controllerRoot : ".")) {
        controllerUrl += "/home";
    }
    console.log("当前路由请求的是: '" + controllerUrl + "' controller中的 '" + actionName + "' action !");


    try {
        var controller = require(controllerUrl);
        //执行action
        if (typeof controller[actionName] === 'function') {
            controller[actionName](request, response);
        }
        else {
            utils.redirect( "/common/_404");
        }
    } catch (e) {
        console.log(e.toString());
        utils.redirect("/common/_404");
    }

}

exports.route = route;