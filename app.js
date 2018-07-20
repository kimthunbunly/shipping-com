const express = require('express');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');

const route = require('./cores/routes');

// Databae Connection
mongoose.connect('mongodb://localhost/shipping')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(ex => console.log('Could not connect to MongoDB...'));

const app = express();

// React UI - views
// app.use(express.static(path.join(__dirname, 'views')));

// app.use('/:endpoint', function(req, res, next) {
//     var { endpoint } = req.params;

//     if(endpoint !== 'api') {
//         app.get('/' + endpoint + '*', function (req, res) {
//             res.sendFile(path.join(__dirname, 'views', 'index.html'));
//         });
//     }
//     next();
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

app.use(require('./middlewares/cors'));

const userRouter = require('./controllers/users');
const searchRouter = require('./controllers/search');

app.use('/api/users', userRouter);
app.use('/api/search', searchRouter);

route(app);

module.exports = app;
