/**
 * Created by Peter on 2015/11/19.
 */
module.exports = {
    index: function (request, response) {
        var utils = require("../lib/utils")(request, response);
        utils.render('./Views/add.html');//这个地方绝对路径怎么确定的
    }
    , add: function (request, response) {
        var utils = require("../lib/utils")(request, response);
        utils.getData(function(data){
            //var rows = utils.query('select * from list');
            var sql="insert into list(name,sex,password) values ('{name}','{sex}','{password}');";
            console.log(data);
            sql=utils.stringFormate(sql,data);
            console.log("aaa:"+sql);
            utils.query(sql,function(rows){
                //utils.query('select * from list', function (rows) {
                rows = JSON.stringify(rows);
                //console.log(rows);
                response.writeHead(200, {"Content-Type": "text/json"});
                response.write(rows);
                response.end();
            });
        });


    }
}