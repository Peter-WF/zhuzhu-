module.exports = {
    _404: function (request, response) {
        var body = "404 Not Find";
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
    }
}