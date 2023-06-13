const express = require('express');
const path = require('path');

const todoDb = require('./data/todo-db')

const app= express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.redirect('/todos');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('./todos', function(req, res) {
    const todos = todoDb.getAll();
    res.render('todos/index', { todos });
});

app.listen(3000,function() {
    console.log('listening on port 3000');
});