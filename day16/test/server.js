var http = require("http");
var url = require("url");
var fs = require('fs');


function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var parameter = {};
        console.log("Request for " + pathname + " received.");

        //route(handle,pathname);
        var content = route(handle, pathname, parameter);
        //response.write(content);
        if (content) {
            if (content.type == "file") {
                fs.readFile('./WebContent/hellow.html', 'binary', function (err, file) {
                    if (err) {
                        console.log(err);
                        response.writeHead(500, {"Content-Type": "text/plain"});
                        response.write(err);
                        response.end();
                    } else {
                        response.writeHead(200, {"Content-Type": "text/html"});
                        console.log(file, 'binary');
                        response.write(file, 'binary');
                        response.end();
                    }
                });
            } else if (content.type == "200") {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(content.data);
                response.end();
            }
        } else {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 not find");
            response.end();
        }

    }

    http.createServer(onRequest).listen(8888);
    //http.createServer(app).listen(app.get('port'), function(){
    //    console.log('Express server listening on port ' + app.get('port'));
    //});
    console.log("Server has started.");
}

exports.start = start;
