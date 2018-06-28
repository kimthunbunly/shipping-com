const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const route = require('./cores/routes');

// Databae Connection
mongoose.connect('mongodb://localhost/shipping_comp');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

app.use(require('./middlewares/cors'));

const userRouter = require('./controllers/users');

app.use('/users', userRouter);

route(app);

module.exports = app;