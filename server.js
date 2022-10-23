const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.urlencoded({ extended: false })) // slanje iz formi
app.use(express.json()) // slanje jsona
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use('/', routes);

app.listen(3000, function () {
    console.log('Listening to port 3000')
})