/**
 * Created by Administrator on 2015/9/29.
 */
var http = require("http");
var url = require("url");
function start(route, config) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("接收头来自于: " + pathname + " received.");
        route(config,pathname, response, request);
    }

    http.createServer(onRequest).listen(8888);
    console.log("服务开启成功");
}
exports.start = start;