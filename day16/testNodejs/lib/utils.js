var fs = require('fs');
var mysql = require('mysql');
var url = require("url");            //解析GET请求
var query = require("querystring");    //解析POST请求

module.exports = function (request, response) {
    return {
        _this_: this,
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
            var _this_ = this;
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
        },
        query: function (sql, cb) {
            var connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'test'
            });

            connection.connect();
            connection.query(sql, function (err, rows, fields) {
                if (err) throw err;
                //console.log('The solution is: ', rows[0].solution);
                console.log("rows:" + rows);
                console.log("fields:" + fields);
                cb(rows);
            });

            connection.end();
        },
        getData: function (cb) {
            var params;
            //判断是GET/POST请求
            if (request.method == "GET") {
                params = [];
                params = url.parse(request.url, true).query;
                cb(params);
            } else {
                var postdata = "";
                request.addListener("data", function (postchunk) {
                    postdata += postchunk;
                });

                request.addListener("end", function () {
                    params = query.parse(postdata);
                    cb(params);
                });
            }
        },
        stringFormate:function(str,args){
            if (arguments.length > 1) {
                var result = str;
                //当只传两个参数时args是对象{arg1:"aaa","arg2":"bbb"}时
                if (arguments.length == 2 && typeof (args) == "object") {
                    for (var key in args) {
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
                else {
                    //第一个参数是str,所以这里改为1
                    for (var i = 1; i < arguments.length; i++) {
                        if (arguments[i] === undefined) {
                            return "";
                        }
                        else {
                            var reg = new RegExp("({[" + (i-1) + "]})", "g");
                            result = result.replace(reg, arguments[i]);
                        }
                    }
                }
                return result;
            }
            else {
                return str;
            }
        }
    }
}

