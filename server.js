var express= require('express');
var app=express();
var path=require('path')
var bodyparser= require('body-parser');
var session = require('express-session');
const flash=require('express-flash');
app.use(flash());
app.use(session({secret: '{secret}', name: 'session_id', saveUninitialized: true, resave: true}));
app.use(bodyparser.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user_test');
app.listen(8000);

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
