/**
 * ǰ��,�����������ڲ�ѯ����ʱ������ȴ�����ʱ�䣬һ�㲻�Ƽ���node�п���һ�����Ӻ�ȫ����ѯ����������Ӳ��Ҳ��رգ���Ϊ�������˾�֪��Ϊʲô��
 *
 * Node.js mysql���ӳ�ģ��
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
                //�ͷ�����  
                conn.release();
                //�¼������ص�  
                callback(err, rows, fields);
            });
        }
    });
};

module.exports = query;