// var sql     = require('mssql');
// var express = require('express');
// var bodyparser=require('body-parser');

// var app = express();
// app.use(bodyparser.json());
// app.listen(4400,()=>{console.log('Express server is running')})

// var dbconfig = {
//     server :"DESKTOP-V4PAVOG\\VVS_SQL2017",
//     user :"sa",
//     password :"password",
//     database : "TestDB",
//     port : "1433",
//     options : {
//         encrypt : false
//     }  
// };

// var conn = new sql.ConnectionPool(dbconfig);
// var rqstConn = new sql.Request(conn);
// conn.connect(function(err){
//     if(err){ 
//         console.log('DB connecton failed \n Error:'+JSON.stringify(err,undefined,2));
//         return;
//     }
//     else {
//         console.log('DB connection succeded');
        
//         return;
//     }
// });

// //Get all employees
// app.get('/employees',(req,res)=>{
//     rqstConn.query('select * from tbl_StudentDetails',(err,rows,fields)=>{
//         if(!err){

//             let array = rows.recordsets[0]
//             console.log(array);
//             res.send(array);
//         }
//         else{ 
//             console.log(err);
//         }
           
        
//     })
// })


// //Get an employee
// app.get('/employees/:id',(req,res)=>{
//     rqstConn.query('select * from tbl_StudentDetails where ID = ?',[req.params.id],(err,rows,fields)=>{
//         if(!err){
//             console.log(rows);
//             res.send(rows);
//         }
//         else{ 
//             console.log(err);
//         }
           
        
//     })
    
// })


