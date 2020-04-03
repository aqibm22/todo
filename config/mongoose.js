const mongoose = require('mongoose');

//todo_list_db is the database name
mongoose.connect('mongodb://localhost/todo_list_db');

const db = mongoose.connection;

//error connecting to database-
db.on('error',console.error.bind(console, 'error connecting to db'));

//if database is connected sucessfully-
db.once('open',function(){
    console.log('Sucessfully connected to the database');
})