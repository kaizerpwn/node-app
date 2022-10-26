const express = require('express');
const routes = require('./routes');
const app = express();
const session = require('express-session');

const HALF_DAY = 1000 * 60 * 60 * 12; // 12 sati
const {
    PORT = 3000,
    NODE_ENV = 'development',
    SESS_NAME = 'sid',
    SESS_SECRET = 'fullapp',
    SESS_LIFETIME = HALF_DAY
} = process.env;

const IN_PROD = NODE_ENV == "production";

app.use(express.urlencoded({ extended: false })) // slanje iz formi
app.use(express.json()) // slanje jsona
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD // https ako je onda je true
    }
}))

app.use('/', routes);

app.listen(3000, function () {
    console.log('Listening to port 3000')
})