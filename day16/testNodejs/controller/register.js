/**
 * Created by Peter on 2015/11/19.
 */
module.exports = {
    index: function (request, response) {
        var body = "这里是注册页面: 开始注册, 请输入用户名密码 ; ";
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
    }
}