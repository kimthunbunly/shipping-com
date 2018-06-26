const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const route = require('./cores/routes');

// Databae Connection
mongoose.connect('mongodb://localhost/shippingcomp');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

const userRouter = require('./controllers/users');

app.use('/users', userRouter);

route(app);

module.exports = app;