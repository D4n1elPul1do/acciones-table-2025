var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var accion = require('../models/accion.js')
/* GET acciones listing. */
router.get('/', function(req, res, next) {
  res.send('!!');
});

// /* Obtener accion. */
// router.get('/:id', function(req, res, next) {
//   res.send('Accion: ' + req.params.id );
// });

/* Agregar accion. */
router.post('/', function(req, res, next) {
  accion.create(req.body, function(err, accioninfo){
      if (err) res.status(500).send(err);
      else res.sendStatus(200);
  });

});



module.exports = router;
