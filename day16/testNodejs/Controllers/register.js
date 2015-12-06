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
        //var rows = utils.query('select * from list');
        //utils.query('INSERT INTO list(name,sex,password) VALUES ("wangfei","boy","111111");',function(rows){
        utils.query('select * from list', function (rows) {
            rows = JSON.stringify(rows);
            console.log(rows);
            response.writeHead(200, {"Content-Type": "text/json"});
            response.write(rows);
            response.end();
        });

    }
}