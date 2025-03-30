var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var accion = require('../models/accion.js')
var patron = require('../models/patron.js')
/* GET acciones listing. */
router.get('/', function(req, res, next) {
  res.send('!!');
});

router.get('/a', function(req, res, next) {
  res.send('information !! ');
});

router.post('/post-acciones', function(req, res, next) {
  res.send('acciones !! ');
});


module.exports = router;
