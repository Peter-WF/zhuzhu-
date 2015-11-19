/**
 * Created by Administrator on 2015/9/29.
 */
function route(handle, pathname, response, request) {
    console.log("当前路由请求的是: " + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log("404 not find " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
    }
}
function routeWF(pathname, response, request) {
    console.log("当前路由请求的是: " + pathname+";");
    var tempArray=pathname.split("/");
    //拼接controller路径
    var controllerUrl=".";//相对路径
    for(var i=0;i<tempArray.length-1;i++){
        if(tempArray[i]!=""){
            controllerUrl+="/"+tempArray[i];
        }
    }
    //去到action名字
    var actionName=tempArray[tempArray.length-1];
    var controller = require(controllerUrl);
    //执行action
    if (controller[actionName]) {
        controller[actionName](response, request);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;