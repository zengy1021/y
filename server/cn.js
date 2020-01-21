var mysql = require('mysql');
// 数据库配置
module.exports = {
    /**
     * 数据库配置
     */
    config: {
        host: 'localhost',
        port: 3306,
        database: 'ying',
        user: 'root',
        password: 'admin'
    },
    conn: null,
    /**
     * 创建连接池并连接
     * @param callback
     */
    openConn: function (callback) {
        var me = this;
        me.conn = mysql.createConnection(me.config);
    },
    /**
     * 释放连接池
     * @param conn
     */
    closeConn: function () {
        var me = this;
        me.conn.end(function (err) {
            console.log(err);
        });
    },
    /**
     * 执行连接
     * @param config
     */
    exec: function (config) {
        const me = this;
        me.openConn();
        me.conn.query(config.sql, config.params, function (err, res) {
            if (err) {
                console.log(err);
                config.callback({
                    code:400,
                    data:null,
                    message:err
                })
            } else if (config.callback) {
                config.callback({
                    code:200,
                    data:JSON.parse(JSON.stringify(res)),
                    message:null
                });

            }
        });
        // 关闭数据库连接
        me.closeConn();
    }
};