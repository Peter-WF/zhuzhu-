/**
 * Created by Administrator on 2015/9/29.
 */
var http = require("http");
var url = require("url");
function start(route, config) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("����ͷ������: " + pathname + " received.");
        route(config,pathname, response, request);
    }

    http.createServer(onRequest).listen(8888);
    console.log("�������ɹ�");
}
exports.start = start;