module.exports = {
    index: function (request, response) {
        var body = "这里是主页";
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
    }
}