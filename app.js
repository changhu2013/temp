var Koa = require('koa');
var app = new Koa();
var router = require('koa-router')();
var convert = require('koa-convert');
var json = require('koa-json');
var onerror = require('koa-onerror');
var bodyparser = require('koa-bodyparser')();
var logger = require('koa-logger');
var index = require('./api/routes/index');

app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));

onerror(app);

router.use('/', index.routes(), index.allowedMethods());
app.use(router.routes(), router.allowedMethods());

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});

module.exports = app;