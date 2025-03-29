var express = require('express');
var router = express.Router();
/* GET acciones listing. */
router.get('/', function(req, res, next) {
  res.send('!!');
});

router.get('/a', function(req, res, next) {
  res.send('information !! ');
});

/* Obtener accion. */
// router.get('/:ticker', function(req, res, next) {
//   // http://localhost:3000/acciones/ptpi
//   var ticker = req.params.ticker;
//
//   accion.find({
//       'ticker': ticker
//   }, function(err, result) {
//       if (err) throw err;
//       if (result) {
//           res.json(result);
//           res.text = result;
//       }
//   });
//
// });
