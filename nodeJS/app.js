var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//////////////////////

var usersRouter = require('./routes/users');
var signinRouter = require('./routes/sign_in');
var homepageRouter = require('./routes/homepage');
var courseRouter = require('./routes/course');
var eLearningRouter = require('./routes/e-learning');
var settingRouter = require('./routes/setting');
var achievementRouter = require('./routes/achievement');

var popupRouter = require('./routes/popup');
var quiz_1iRouter = require('./routes/quiz/quiz_1');
var quiz_3iRouter = require('./routes/quiz/quiz_3');
var quiz_4iRouter = require('./routes/quiz/quiz_4');
var MiniProjectRouter = require('./routes/quiz/TestMiniProject');

var dbRouter = require('./routes/db');



/////////////////////



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/////////////////////////////

app.use('/', signinRouter);
app.use('/users', usersRouter);
app.use('/sign-in', signinRouter);
app.use('/home', homepageRouter);
app.use('/course', courseRouter);
app.use('/learn', eLearningRouter);
app.use('/setting',settingRouter);
app.use('/achievement',achievementRouter);

app.use('/popup', popupRouter);
app.use('/LV1', quiz_1iRouter);
app.use('/LV3', quiz_3iRouter);
app.use('/LV4', quiz_4iRouter);
app.use('/miniproject', MiniProjectRouter);

app.use('/db', dbRouter);


//app.use(express.static('public'));
//app.use('/stylesheets',express.static(__dirname+'public/stylesheets'));









// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))