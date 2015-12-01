var fs = require('fs');

module.exports = function (request, response) {
    return {
        _this_:this,
        removeNullObject: function (array) {
            var result = [];
            for (var i = 0; i < array.length; i++) {
                if (array[i]) {
                    result.push(array[i]);
                }
            }
            return result;
        },
        redirect: function (pathname) {
            console.log("页面重定向" + pathname);
            //console.log("pathname是"+pathname);
            response.writeHead(302, {
                'Location': pathname
                //add other headers here...
            });
            response.end();
        },
        render: function (pathname) {
            fs.readFile(pathname, 'binary', function (err, file) {
                if (err) {
                    console.log(err);
                    response.writeHead(500, {"Content-Type": "text/plain"});
                    response.write(err);
                    response.end();
                } else {
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(file, 'binary');
                    response.end();
                }
            });
        },
        //处理静态资源
        staticResHandler: function (localPath, ext, response) {
            console.log(localPath);
            var _this_=this;
            fs.readFile(localPath, "binary", function (error, file) {
                if (error) {
                    response.writeHead(500, {"Content-Type": "text/plain"});
                    response.end("Server Error:" + error);
                } else {
                    response.writeHead(200, {"Content-Type": _this_.getContentTypeByExt(ext)});
                    response.end(file, "binary");
                }
            });
        },
        getContentTypeByExt: function (ext) {
            ext = ext.toLowerCase();
            if (ext === '.htm' || ext === '.html')
                return 'text/html';
            else if (ext === '.js')
                return 'application/x-javascript';
            else if (ext === '.css')
                return 'text/css';
            else if (ext === '.jpe' || ext === '.jpeg' || ext === '.jpg')
                return 'image/jpeg';
            else if (ext === '.png')
                return 'image/png';
            else if (ext === '.ico')
                return 'image/x-icon';
            else if (ext === '.zip')
                return 'application/zip';
            else if (ext === '.doc')
                return 'application/msword';
            else
                return 'text/plain';
        }
    }
}

