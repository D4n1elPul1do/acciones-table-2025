var mongoose = require('mongoose');

var patronSchema = mongoose.Schema(
  {
      fecha: String,
      ticker: String,
      color: String,
      p: String,
      vdia: String
  }
);

module.exports = mongoose.model('patron', patronSchema);

//guardarDatos(fecha, sym, rvmin, rv, p, bid, ask, porc, spr, bal, sz, vdia, vminant){

//db.accion.insertOne({ "datos": "|:9:26:| LMFA* -RVMin:1.4704 -P:5.500|5.490|5.500 %:19.57 dif 0.01 bal -28 sz: 20 -V:4381871 : 1556" });

// {
// "fecha": "8/18/2021",
// "tiempo": "9:26",
// "ticker": "LMFA",
// "rvmin":  "1.47",
// "rv":  "0.32",
// "p": "5.500",
// "bid": "5.490",
// "ask": "5.500",
// "porc": "19.57",
// "spr": "0.01",
// "bal": "-28",
// "sz": "25",
// "vdia": "4381871",
// "vminAnt": "1556"
// }
