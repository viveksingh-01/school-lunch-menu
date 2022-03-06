const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const router = express.Router();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const lunchWeekRouter = require('./routes/lunch-week');

const app = express();

app.use(cors());
app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/lunch-week', lunchWeekRouter);
app.use('/api', router);

module.exports = app;
