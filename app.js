require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('config');
const cpcRouter = require('./src/routes/cpc.router')
const mongoConnection = config.get('database.host');

const mongoose = require('mongoose');
mongoose
    .connect(mongoConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => console.log('connected to MONGO DB'))
    .catch(() => {
        console.error(err);
        throw err;
    });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', router);
app.use('/cpc', cpcRouter);

module.exports = app;

