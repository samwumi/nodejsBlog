//jshint esversion:6
require('dotenv').config()
const fs = require('fs')
const path = require('path')
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const  _= require('lodash')
const { stringify } = require('querystring');
const { title } = require('process');
const saltRounds = 10


const db = require('./data/database')

const postRoutes = require('./routes/post-route');
const navRoutes = require('./routes/nav-route')
const adminRoutes = require('./routes/admin-route')
// const commentRoutes = require('./routes/comment-route'
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use('/posts/assets', express.static('post-data'))





app.use(postRoutes)
app.use(navRoutes)
app.use(adminRoutes)
// app.use(commentRoutes)




 

  db.connectToDatabase().then(function () {
        app.listen(4040);
      });
      







