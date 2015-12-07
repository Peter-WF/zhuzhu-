/**
 * 前言,如果不想程序在查询数据时卡死或等待过长时间，一般不推荐在node中开启一个连接后全部查询都用这个链接并且不关闭，因为，你试了就知道为什么了
 *
 * Node.js mysql连接池模块
 */
var mysql = require("mysql");
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

var query = function (sql, data, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, data, function (err, rows, fields) {
                //释放连接  
                conn.release();
                //事件驱动回调  
                callback(err, rows, fields);
            });
        }
    });
};

module.exports = query;