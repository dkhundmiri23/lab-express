const express = require('express');
const path = require('path');

const charactersDb = require('./data/characters-db')

const app= express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.redirect('/characters');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('./characters', function(req, res) {
    const characters = charactersDb.getAll();
    res.render('characters/index', { characters });
});

app.listen(3000,function() {
    console.log('listening on port 3000');
});