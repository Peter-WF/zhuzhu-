/**
 * Created by Peter on 2015/11/19.
 */
function index(request,response){
    var body = "�����ǵ�½ҳ��: ��ʼ��½, �������û������� ; ";
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
function logout(request,response){
    var body = "ע���ɹ� ; ";
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
exports.index = index;
exports.logout = logout;