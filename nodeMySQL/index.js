const express = require('express');
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2001.A4a9',
    database: 'abdulvoris'
});

connection.connect();

app.get('/', (req, res)=>{
    res.end('ulandi');
})

app.get('/addUser', (req, res)=>{

    const addUserSql = "delete customers where id='6' ";

    connection.query(addUserSql, function(err, results){
        if(err) throw err;
        console.log(results);
    });

    res.end('user o`chrildi' +' '+ addUserSql);
})

const port = 6969;

app.listen(port, ()=>{
    console.log(`${port}sfdfdsfd`);
})