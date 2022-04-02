const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    port:3309,
    user : 'root',
    password : '',
    database:'gaalll'
    
});
//connect
db.connect((err)=>{

if(err){
    throw err;
}
console.log('Mysql connected...');

});
const app = express();
//create DB
app.get('/createdb',(req,res)=>{
let sql = 'CREATE DATABASE gaalll';
db.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(result);

});

});
app.get('/createpoststable',(req,res) => {
    let sql = 'CREATE TABLE hellooo (id int AUTO_INCREMENT PRIMARY key , title VARCHAR(255),body VARCHAR(255))';
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });    
});


app.listen(3002,()=>{
console.log('Server started on port 3002');
})