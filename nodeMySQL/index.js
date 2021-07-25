const express = require('express');
const app = express();
const mysql = require('mysql2');
// const bodyparser = require('body-parser');
//const Connection = require('mysql2/typings/mysql/lib/Connection');

// app.use(bodyparser.json);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2001.A4a9',
    database: 'abdulvoris',
    multipleStatements: true
});

connection.connect((err)=>{
    if(!err)
    console.log('Bazaga ulandi');
    else
    console.log('Bazaga ulanishda xatolik ro`y berdi...\n Error: ' + JSON.stringify(err, undefined, 2));
});

app.get('/', (req, res)=>{
    res.send('Bazaga ulangan');
})
//getAll
app.get('/customers', (req, res)=>{
    connection.query('SELECT * FROM customers', (err, rows, field)=>{
        if(!err)
        return res.send(rows);
        else
        console.log(err);
    })
});
//getById
app.get('/customers/:id', (req, res)=>{
    connection.query('SELECT * FROM customers WHERE id=?',[req.params.id],(err, rows, field)=>{
        if(!err)
        return res.send(rows);
        else
        console.log(err);
    })
});
//delete
app.delete('/customers/:id', (req, res)=>{
    connection.query('DELETE FROM customers WHERE id=?',[req.params.id],(err, rows, fields)=>{
        if(!err)
        return res.send('o`chirildi');
        else
        console.log(err);
    })
});

app.post('/customers', (req, res)=>{
    const sql = "INSERT INTO `customers`( `name`, `age`, `address`, `salary`)VALUES('')";
    
    connection.query(sql,(error, results)=>{
        if(error){
            console.log(error);
        }else{
            response.status(results,res);
        }
    });

});

// app.post('/addUser', (req, res)=>{

//     const addUserSql = "INSERT INTO customers FROM SET id='7', name='Abdulvoris', age='20', address='Zarbdor', salary='10000000' ";

//     connection.query(addUserSql, function(err, results){
//         if(err) throw err;
//         console.log(results);
//     });

//     res.end('user qo`shildi' +' '+ addUserSql);
// });

// app.put('/updateUser', (req, res)=>{

//     const updateUserSql = "UPDATE customers FROM SET  name='Abdulvahob', age='23', address='Zarbdor', salary='20000000' ";

//     connection.query(updateUserSql, function(err, results){
//         if(err) throw err;
//         console.log(results);
//     });

//     res.end('user qo`shildi' +' '+ updateUserSql);
// });

// app.delete('/deleteUser', (req, res)=>{

//     const deleteUserSql = "delete customers where id='6' ";

//     connection.query(deleteUserSql, function(err, results){
//         if(err) throw err;
//         console.log(results);
//     });

//     res.end('user o`chrildi' +' '+ deleteUserSql);
// });

const port = 2000;

app.listen(port, ()=>{
    console.log(`${port}-port ishlayabdi..`);
})