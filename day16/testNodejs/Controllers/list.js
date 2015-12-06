module.exports = {
    index: function (request, response) {
        /*var mysql      = require('mysql');
        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'test'
        });

        connection.connect();
        connection.query('select * from list', function(err, rows, fields) {
            if (err) throw err;
            console.log('The solution is: ', rows[0].solution);
        });

        connection.end();*/

        var utils = require("../lib/utils")(request, response);
        utils.render('./Views/list.html');//这个地方绝对路径怎么确定的
    }
}