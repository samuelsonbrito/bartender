var express = require('express');
var consign = require('consign');//autoload carregado
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
//var morgan = require('morgan');
//var logger = require('../servicos/logger.js');

module.exports = ()=> {

  var app = express();
/*
  app.use(morgan("common", {
    stream: {
      write: function(mensage){
        logger.info(mensage);
      }
    }
  }));
*/
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  //ativar o express validator
  app.use(expressValidator());

  //dar permissão de acesso
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

  consign() //fazer o uso do autoload
  .include('controllers')
  .then('persistence')
  .then('services')
  .into(app);

  return app;
}
