//Load express
const express = require('express');
const path = require('path');

//require the To Do "database"
const studentDb = require('./data/student-db');

//create our express app
const app = express();

//configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//define a "root" route directly on app
app.get('/', function (req, res) {
    res.redirect('/students');
});

app.get('/home', function (req, res) {
    res.render('home');
});

app.get('/students', function(req, res) {
    const students = studentDb.getAll();
    res.render('students/index', { students });
});

app.listen(3000, function(req, res) {
    console.log('listening on port 3000');
});