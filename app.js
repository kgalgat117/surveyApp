require('dotenv').config() // create a .env file at root level.
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var DB = require('./config/db')  // declare env. variable in env file w.r.t variables names in this file.

DB.on('connected', function(){
    console.log('connected to database')
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors({
    origin: true
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/survey', indexRouter);
app.use('/user', usersRouter);

module.exports = app;