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

app.post('/addUser', (req, res)=>{

    const addUserSql = "INSERT INTO customers FROM SET id='7', name='Abdulvoris', age='20', address='Zarbdor', salary='10000000' ";

    connection.query(addUserSql, function(err, results){
        if(err) throw err;
        console.log(results);
    });

    res.end('user qo`shildi' +' '+ addUserSql);
});

app.put('/updateUser', (req, res)=>{

    const updateUserSql = "UPDATE customers FROM SET  name='Abdulvahob', age='23', address='Zarbdor', salary='20000000' ";

    connection.query(updateUserSql, function(err, results){
        if(err) throw err;
        console.log(results);
    });

    res.end('user qo`shildi' +' '+ updateUserSql);
});

app.delete('/deleteUser', (req, res)=>{

    const deleteUserSql = "delete customers where id='6' ";

    connection.query(deleteUserSql, function(err, results){
        if(err) throw err;
        console.log(results);
    });

    res.end('user o`chrildi' +' '+ deleteUserSql);
});

const port = 6969;

app.listen(port, ()=>{
    console.log(`${port}-port ishlayabdi..`);
})