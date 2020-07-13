var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'password',
        server: 'DESKTOP-V4PAVOG\\VVS_SQL2017',
        database: 'TestDB'
    });
 
    return conn;
};

module.exports = connect;