const express = require('express')
const mongoose = require("mongoose")
require('dotenv').config()
const cors = require('cors')
const cookieParser = require("cookie-parser");
const session = require('express-session')
const passport = require("passport");
const MongoStore = require('connect-mongo');
const { MongoUrl } = require("./Config/config");
const userRouter = require('./Routes/user');
const journalRouter = require('./Routes/journal');
const TodoRouter = require('./Routes/todo');


const app = express();
app.use(cors()) // enables cors for all request
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(() => { console.log("Mongo Connected"); }).catch(err => console.log(err));

app.use(session({
    name: 'session',
    secret: "secret",
    saveUninitialized: true,
    resave: false,
    store: MongoStore.create({
        mongoUrl: MongoUrl,
        autoRemove: 'interval',
        autoRemoveInterval: 10
    }),
    cookie: {
        secure: true,
        maxAge: 1000 * 60 * 60 * 24,
    },
}))

require('./Config/LocalAuth')
app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req, res) => {
    res.send("Working")
}
);
app.use('/user', userRouter)
app.use('/journal', journalRouter)
app.use("/todo", TodoRouter)
module.exports = app;