// const sql = require('mssql')

// const config = {
//   database: 'TestDB',
//   server: 'DESKTOP-V4PAVOG\\VVS_SQL2017',
//   user:'sa',
//   password :"password",
//   port:'1433',
//   options: {
//     trustedConnection: true
//   }
// } 
// const poolPromise = new sql.ConnectionPool(config)
//   .connect()
//   .then(pool => {
//     console.log('Connected to MSSQL')
//     return pool
//   })
//   .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

// module.exports = {
//   sql, poolPromise
// }