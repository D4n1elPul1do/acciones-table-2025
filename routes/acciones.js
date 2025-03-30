var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var accion = require('../models/accion.js')
var patron = require('../models/patron.js')
/* GET acciones listing. */

var datos = '';

router.get('/', function(req, res, next) {
  res.send('!!');
});

router.get('/a', function(req, res, next) {
  res.send('information :: ');
});

router.post('/post-acciones', function(req, res, next) {
  datos = req.body;
  console.log('in : '+JSON.stringify(datos);

  res.json({requestBody: req.body})

  //res.send('acciones'+req.params+'__'+JSON.stringify(req.params));
});

router.get('/get-acciones', function(req, res, next) {
  console.log('out : '+datos);
  res.json({requestBody: datos})
});





module.exports = router;
