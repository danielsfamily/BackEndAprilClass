const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require("mongoose");// make a comment 

mongoose
  .connect("mongodb://localhost:27017/express-mongodb-intro", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MONGO DB CONNECTED`);
  })
  .catch((e) =>{
    console.log(e);
  })

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users/usersRouter\ copy');
// const productRouter = require('./routes/product/productRouter')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/api/products', productRouter)

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
  res.json({message: "error", error: err});
});

module.exports = app;
