/**
 * Created by Peter on 2015/11/19.
 */
module.exports = {
    index: function (request, response) {
        var body = "������ע��ҳ��: ��ʼע��, �������û������� ; ";
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
    }
}