let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');
let bodyparser = require('body-parser')


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dataRouter = require('./routes/data');
const loginRouter = require('./routes/login');
const authenticationRouter = require('./routes/authentication');
const callbackRouter = require('./routes/callback');
const getTopRouter = require('./routes/getTop');
const getUsrRouter = require('./routes/getuser');
const addClusterRouter = require('./routes/addcluster');
const subscribeRouter = require('./routes/subscribe');
const unsubscribeRouter = require('./routes/unsubscribe');
const currentUserRouter = require('./routes/currentuser');
const getAllClustersRouter = require('./routes/getallclusters');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/data', dataRouter)
app.use('/login', loginRouter)
app.use('/authentication', authenticationRouter)
app.use('/callback', callbackRouter)
app.use('/top', getTopRouter)
app.use('/usr/find', getUsrRouter)
app.use('/usr/add/cluster', addClusterRouter)
app.use('/usr/subscribe', subscribeRouter)
app.use('/usr/unsubscribe', unsubscribeRouter)
app.use('/usr/me', currentUserRouter)
app.use('/usr/clusters', getAllClustersRouter)




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
