var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var accionesRouter = require('./routes/acciones');


var app = express();

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/datos?retryWrites=true&w=majority',
                {useNewUrlParser: true, useUnifiedTopology: true})
                .then(()=> console.log('conexion establecida !! '))
                .catch((err) => console.error(err));


// mongoose.connect('mongodb+srv://user:toor@cluster0.skcon.mongodb.net/datos?retryWrites=true&w=majority',
//                 {useNewUrlParser: true, useUnifiedTopology: true})
//                 .then(()=> console.log('conexion establecida !! '))
//                 .catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({limit: '50MB'}));
app.use(express.urlencoded({limit: '50MB'}));

app.use('/', indexRouter);
app.use('/acciones', accionesRouter);
app.use('/acciones/ticker', accionesRouter);
app.use('/acciones/todas', accionesRouter);
app.use('/acciones/findPatrones', accionesRouter);
app.use('/acciones/patronesTodos', accionesRouter);
app.use('/acciones/borrarAccion', accionesRouter);
app.use('/acciones/borrarPatrones', accionesRouter);
app.use('/acciones/accionesPatrones', accionesRouter);
app.use('/acciones/accionPatron', accionesRouter);
app.use('/acciones/findAccionesPatrones', accionesRouter);


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
//KilometroK_10#
