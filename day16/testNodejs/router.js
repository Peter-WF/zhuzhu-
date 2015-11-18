/**
 * 路由 by WangF
 * @param config    配置文件
 * @param pathname  路径
 * @param response  相应头
 * @param request   接收头
 */
function route(config, pathname, response, request) {
    console.log("当前路由请求的是: " + pathname + ";");
    var tempArray = pathname.split("/");
    //拼接controller路径
    var controllerUrl = config.controllerRoot ? config.controllerRoot : ".";//绝对路径或者是相对路径
    for (var i = 0; i < tempArray.length - 1; i++) {
        if (tempArray[i] != "") {
            controllerUrl += "/" + tempArray[i];
        }
    }
    //去掉action名字
    var actionName = tempArray[tempArray.length - 1];

    console.log("当前路由请求的是: " + controllerUrl + " controller中的 " + actionName + " action !");

    var controller = require(controllerUrl);
    //执行action
    if (typeof controller[actionName] === 'function') {
        controller[actionName](request, response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;