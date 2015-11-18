/**
 * Created by Peter on 2015/11/19.
 */
function index(request,response){
    var body = "这里是登陆页面: 开始登陆, 请输入用户名密码 ; ";
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function logout(request,response){
    var body = "注销成功 ; ";
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
exports.index = index;
exports.logout = logout;