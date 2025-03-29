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
router.get('/accionesPatrones', function(req, res, next) {
  console.log('... 1 todos los acciones--patrones pt8  query ...');
  accion.find({
      'color': 'pt8'
  }, function(err, result) {
      if (err) throw err;
      if (result) {
          console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
          res.json(result);
          res.text = result;
      }
  });
});



router.get('/ticker', function(req, res, next) {

  var ticker = req.query.ticker;
  var fecha =  req.query.fecha;
  var tiempo = req.query.tiempo;
  var color =  req.query.color;


  if ( (fecha != undefined || fecha != '') && color == 'darkcolors'){
    console.log('... 1 fecha/darkcolors  query ...');
    accion.find(
          {$or:[{'color':'orange', 'fecha':fecha}, {'color':'deepskyblue', 'fecha':fecha}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else  if ( (ticker != undefined || ticker != '') && color == 'todos' && (fecha == undefined || fecha == '') ){
    console.log('... 1 ticker/todos  query ...');
    accion.find(
          {$or:[{'color':'orange', 'ticker':ticker}, {'color':'pink', 'ticker':ticker}, {'color':'deepskyblue', 'ticker':ticker}, {'color':'lightblue', 'ticker':ticker}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (fecha != undefined || fecha != '') && color == 'todos' && tiempo != '' ){
    console.log('... 1 fecha/tiempo/todos  query ...');
    accion.find(
          {$or:[{'color':'orange', 'fecha':fecha, 'timepo':tiempo}, {'color':'pink', 'fecha':fecha, 'timepo':tiempo}, {'color':'deepskyblue', 'fecha':fecha, 'timepo':tiempo}, {'color':'lightblue', 'fecha':fecha, 'timepo':tiempo}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (fecha != undefined || fecha != '') && color == 'todos' && ticker != '' ){
    console.log('... 1 ticker/fecha/todos  query ...');
    accion.find(
          {$or:[{'color':'orange', 'fecha':fecha, 'ticker':ticker}, {'color':'pink', 'fecha':fecha, 'ticker':ticker}, {'color':'deepskyblue', 'fecha':fecha, 'ticker':ticker}, {'color':'lightblue', 'fecha':fecha, 'ticker':ticker}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (fecha != undefined || fecha != '') && color == 'todos' ){
    console.log('... 1 fecha/todos  query ...');
    accion.find(
          {$or:[{'color':'orange', 'fecha':fecha}, {'color':'pink', 'fecha':fecha}, {'color':'deepskyblue', 'fecha':fecha}, {'color':'lightblue', 'fecha':fecha}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (fecha == undefined || fecha == '') && color == 'orangeP' && (ticker != undefined || ticker != '') &&  (tiempo == undefined || tiempo == '')){
    console.log('... 1 ticker/colores  query ...');
    accion.find(
          {$or:[{'color':'orange', 'ticker': ticker}, {'color':'pink', 'ticker': ticker}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (fecha == undefined || fecha == '') && color == 'deepskyblueLB' && (ticker != undefined || ticker != '') &&  (tiempo == undefined || tiempo == '')){
    console.log('... 2 ticker/colores  query ...');
    accion.find(
          {$or:[{'color':'deepskyblue', 'ticker': ticker}, {'color':'lightblue', 'ticker': ticker}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (fecha != undefined || fecha != '') && color == 'orangeP' && (ticker != '') && (tiempo == undefined || tiempo == '')){
    console.log('... 1 ticker/fecha/colores  query ...');
    accion.find(
          {$or:[{'color':'orange', 'fecha':fecha, 'ticker': ticker}, {'color':'pink', 'fecha':fecha, 'ticker': ticker}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (fecha != undefined || fecha != '') && color == 'deepskyblueLB' && (ticker != '') &&  (tiempo == undefined || tiempo == '')){
    console.log('... 2 ticker/fecha/colores  query ...');
    accion.find(
          {$or:[{'color':'deepskyblue', 'fecha':fecha, 'ticker': ticker}, {'color':'lightblue', 'fecha':fecha, 'ticker': ticker}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (fecha != undefined || fecha != '') && color == 'orangeP' && (ticker == undefined || ticker == '') &&  (tiempo == undefined || tiempo == '')){
    console.log('... 1 fecha/colores  query ...');
    accion.find(
          {$or:[{'color':'orange', 'fecha':fecha}, {'color':'pink', 'fecha':fecha}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (fecha != undefined || fecha != '') && color == 'deepskyblueLB' && (ticker == undefined || ticker == '') &&  (tiempo == undefined || tiempo == '')){
    console.log('... 2 fecha/colores  query ...');
    accion.find(
          {$or:[{'color':'deepskyblue', 'fecha':fecha}, {'color':'lightblue', 'fecha':fecha}]}
        , function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (ticker == undefined || ticker == '') && (color == undefined || color == '') && fecha != undefined && fecha != '' && tiempo != undefined && tiempo != ''){
    console.log('... fecha/tiempo  query ...');
    accion.find({
        'fecha': fecha,
        'tiempo': tiempo
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (fecha == undefined || fecha == '') && (tiempo == undefined || tiempo == '') && (color == undefined || color == '') && ticker != undefined && ticker != ''){
    console.log('... ticker  query ...');
    accion.find({
        'ticker': ticker
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (ticker == undefined || ticker == '') && (tiempo == undefined || tiempo == '') && (color == undefined || color == '') && fecha != undefined && fecha != ''){
    console.log('... fecha  query ...');
    accion.find({
        'fecha': fecha
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( (ticker == undefined || ticker == '') && color != undefined && color != '' ){
    console.log('... fecha/color  query ...');
    accion.find({
        'fecha': fecha,
        'color': color
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( color != undefined && color != '' ){
    console.log('... ticker/fecha/color query ...');
    accion.find({
        'ticker': ticker,
        'fecha': fecha,
        'color': color
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else if ( tiempo != undefined && tiempo != '' ){
    console.log('... tiempo query ...');
    accion.find({
        'ticker': ticker,
        'fecha': fecha,
        'color': color,
        'tiempo': tiempo
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else{
    console.log('... ticker query ...');
    accion.find({
        'ticker': ticker,
        'fecha': fecha
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }
  // npm start
  console.log('=====================================================');
});


router.get('/todas', function(req, res, next) {

  var fecha =  req.query.fecha;
  var color =  req.query.color;

  if ( color != undefined && color != '' ){
    console.log('... color fecha ...');
    accion.find({
        'color': color,
        'fecha': fecha
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }else{
    console.log('... ticker fecha y/o color ...');
    accion.find({
        'fecha': fecha
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);
            res.text = result;
        }
    });
  }
  // npm start
});


// router.get('/all', function(req, res, next) {
//   var ticker = req.query.ticker;
//
//   accion.find({}, function(err, result) {
//       if (err) throw err;
//       if (result) {
//           res.json(result);
//           res.text = result;
//       }
//   });
//
// });




/* Agregar accion. */
router.post('/', function(req, res, next) {
  accion.create(req.body, function(err, accioninfo){
      if (err) res.status(500).send(err);
      else res.sendStatus(200);
  });

});

router.post('/patron', function(req, res, next) {

  patron.create(req.body, function(err, accioninfo){
      if (err) res.status(500).send(err);
      else res.sendStatus(200);
  });

});




router.get('/borrarAccion', function(req, res, next) {
  //  DKNG    FSR     SPWR
  accion.deleteMany({fecha: '4/22/2022-10-00'}, function(err, accioninfo){
  // accion.deleteMany({ ticker: 'AUR_OD' }, function(err, accioninfo){
      if (err) res.status(500).send(err);
      else res.sendStatus(200);
  });

});

router.get('/borrarPatrones', function(req, res, next) {
  //  DKNG    FSR     SPWR
  patron.deleteMany({fecha: '7/19/2022'}, function(err, accioninfo){
  // accion.deleteMany({ ticker: 'AUR_OD' }, function(err, accioninfo){
      if (err) res.status(500).send(err);
      else res.sendStatus(200);
  });

});

router.post('/accionPatron', function(req, res, next) {

  accion.create(req.body, function(err, accioninfo){
      if (err) res.status(500).send(err);
      else res.sendStatus(200);
  });

});


router.post('/findAccionesPatrones', function(req, res, next) {


  accion.find(req.body.body, function(err, result) {
      if (err) throw err;
      if (result) {
          console.log('=== Cantidad ( ( '+result.length+' ) ) ');
          res.json(result);
          res.text = result;
      }
  });
});



router.post('/findPatrones', function(req, res, next) {


  patron.find(req.body.body, function(err, result) {
      if (err) throw err;
      if (result) {
          console.log('=== Cantidad ( ( '+result.length+' ) ) ');
          res.json(result);
          res.text = result;
      }
  });


  // patron.find(req.body, function(err, resultado){
  //     console.log('__ '+resultado.length);
  //     res,json(resultado);
  //     res.text = resultado;
  //     if (err) res.status(500).send(err);
  //     else res.sendStatus(200);
  // });


  // console.log(':::: '+vdia);

  // var pv = req.query.pv; // vdia
  // var f  = req.query.f; // p
  // var t  = req.query.t; // vdia
  // var c  = req.query.c; // vdia


  // if ( vdia != undefined && vdia != '' ){
  //   // console.log('... find patron ...');
  //
  //   // var params = JSON.parse("{ vdia: "+vdia+" }");
  //
  //
  //   console.log(req.body);
  //
  //   patron.find(req.body, function(err, resultado){
  //       console.log('__ '+resultado.length);
  //       if (err) res.status(500).send(err);
  //       else res.sendStatus(200);
  //   });
  //
  //   // patron.find({
  //   //     'vdia': vdia
  //   // }, function(err, result) {
  //   //     if (err) throw err;
  //   //     if (result) {
  //   //         console.log('=== Cantidad Patrones ( ( '+result.length+' ) ) ');
  //   //         res.json(result);
  //   //         res.text = result;
  //   //     }
  //   // });
  //
  // }
});


router.get('/patronesTodos', function(req, res, next) {

  var t  = req.query.t;
  var c  = req.query.c; // vdia

  if ( t != undefined && t != '' ){
    // console.log('... find patron ...');
    patron.find({
        'ticker': t,
        'color': c
        // 'color': 'pt'
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            console.log('=== Cantidad  ( ( '+result.length+' ) ) ');
            res.json(result);

        }
    });
  }
});



module.exports = router;

// =================== stacktrace for ClientSocketConnector ===============================

// com.devexperts.qd.qtp.socket.ClientSocketConnector.start(ClientSocketConnector.java:292)
// com.devexperts.qd.qtp.QDEndpoint.startConnectors(QDEndpoint.java:327)
// com.devexperts.qd.qtp.QDEndpoint.connect(QDEndpoint.java:141)
// com.devexperts.rmi.impl.RMIEndpointImpl.connect(RMIEndpointImpl.java:139)
// com.devexperts.tos.ui.net.QdRmiConnector.connectAndCheck(QdRmiConnector.java:58)
// com.devexperts.tos.ui.net.connector.DnsQdRmiConnector.connect(DnsQdRmiConnector.java:52)
// com.devexperts.tos.ui.net.qdrmi.AuxiliaryConnection.connect(AuxiliaryConnection.java:33)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishAuxiliaryConnection(LoginDialogUtils.java:421)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.loadPropertiesFromServer(LoginDialogUtils.java:383)
// com.devexperts.tos.ui.user.AbstractStartOptionsManager.load(AbstractStartOptionsManager.java:280)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:165)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)



// =================== stacktrace for SocketHAndler.start ===============================

// java.lang.Thread.start(Thread.java)
// com.devexperts.qd.qtp.socket.SocketHandler.start(SocketHandler.java:105)
// com.devexperts.qd.qtp.socket.ClientSocketConnector.start(ClientSocketConnector.java:294)
// com.devexperts.qd.qtp.socket.ClientSocketConnector.handlerClosed(ClientSocketConnector.java:325)
// com.devexperts.qd.qtp.socket.SocketHandler.closeSocketImpl(SocketHandler.java:138)
// com.devexperts.qd.qtp.socket.SocketHandler.exitSocket(SocketHandler.java:120)
// com.devexperts.qd.qtp.socket.SocketReader.handleClose(SocketReader.java:120)
// com.devexperts.qd.qtp.QTPWorkerThread.run(QTPWorkerThread.java:90)



// ===================  log4j configuration ===============================

// java.lang.Thread.start(Thread.java)
// org.apache.logging.log4j.core.LoggerContext.<init>(LoggerContext.java:140)
// org.apache.logging.log4j.core.selector.ClassLoaderContextSelector.createContext(ClassLoaderContextSelector.java:254)
// org.apache.logging.log4j.core.selector.ClassLoaderContextSelector.getDefault(ClassLoaderContextSelector.java:266)
// org.apache.logging.log4j.core.selector.ClassLoaderContextSelector.getContext(ClassLoaderContextSelector.java:146)
// org.apache.logging.log4j.core.selector.ClassLoaderContextSelector.getContext(ClassLoaderContextSelector.java:123)
// org.apache.logging.log4j.core.selector.ClassLoaderContextSelector.getContext(ClassLoaderContextSelector.java:117)
// org.apache.logging.log4j.core.impl.Log4jContextFactory.getContext(Log4jContextFactory.java:150)
// org.apache.logging.log4j.core.impl.Log4jContextFactory.getContext(Log4jContextFactory.java:47)
// org.apache.logging.log4j.LogManager.getContext(LogManager.java:309)
// org.apache.log4j.Category$PrivateManager.getContext(Category.java:560)
// org.apache.log4j.Category.getInstance(Category.java:101)
// org.apache.log4j.Category.getRoot(Category.java:161)
// com.devexperts.logging.Log4jLogging.configure(Log4jLogging.java:35)
// com.devexperts.logging.Logging.configure(Logging.java:200)
// com.devexperts.logging.Logging.<clinit>(Logging.java:49)
// com.devexperts.tos.ui.net.IniFile.<clinit>(IniFile.java:20)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:16)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)



// ===================  BasicAuthStrategy ===============================

// com.devexperts.tos.ui.net.auth.impl.BasicAuthStrategy.sendAuthRequest(BasicAuthStrategy.java:43)
// com.devexperts.tos.ui.net.auth.DefaultLoginController.sendAuthRequestAndPoll(DefaultLoginController.java:150)
// com.devexperts.tos.ui.net.auth.DefaultLoginController.authenticateSession(DefaultLoginController.java:80)
// com.devexperts.tos.ui.net.auth.DefaultLoginController.authenticate(DefaultLoginController.java:68)
// com.devexperts.tos.ui.net.ConnectionFactory.createConnection(ConnectionFactory.java:65)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:336)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:313)
// com.devexperts.tos.ui.user.DesktopMain.login(DesktopMain.java:245)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:184)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)


// ===================  ChartContext ===============================

// com.devexperts.toschart.core.ChartContext.<init>(ChartContext.java:202)
// com.devexperts.toschart.core.Indicator$$Lambda$2400.get()
// java.lang.ThreadLocal$SuppliedThreadLocal.initialValue(ThreadLocal.java:305)
// java.lang.ThreadLocal.setInitialValue(ThreadLocal.java:195)
// java.lang.ThreadLocal.get(ThreadLocal.java:172)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveStudy(CompiledStudy.java:51)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.Trampoline.invoke(MethodUtil.java:71)
// jdk.internal.reflect.GeneratedMethodAccessor6.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.MethodUtil.invoke(MethodUtil.java:260)
// java.beans.Statement.invokeInternal(Statement.java:304)
// java.beans.Statement$2.run(Statement.java:187)
// java.security.AccessController.doPrivileged(Native Method)
// java.beans.Statement.invoke(Statement.java:184)
// java.beans.Expression.getValue(Expression.java:155)
// com.devexperts.evolution.utils.configencoder.MutableExpression.getValue(ConfigParser.java:1253)
// com.devexperts.evolution.utils.configencoder.SimpleValueResolver.getValue(SimpleValueResolver.java:19)
// com.devexperts.toschart.model.persistence.LookupMarkedObjectsResolver.getValue(LookupMarkedObjectsResolver.java:22)
// com.devexperts.toschart.model.persistence.SecurityValueResolver.getValue(SecurityValueResolver.java:45)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getValue(ConfigParser.java:1132)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readObjectReturnedByStaticMethod(ConfigParser.java:657)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:605)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.argList(ConfigParser.java:1087)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:803)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:812)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readNewInstance(ConfigParser.java:979)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:514)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.parse(ConfigParser.java:91)
// com.devexperts.evolution.utils.configencoder.ConfigDecoder.readObject(ConfigDecoder.java:178)
// com.devexperts.toschart.model.persistence.SimpleCompactChartPersistence.readObject(SimpleCompactChartPersistence.java:21)
// com.devexperts.toschart.model.persistence.CompactChartPersistence$$Lambda$2401.apply()
// com.devexperts.toschart.model.persistence.CompactChartPersistence.decodeObject(CompactChartPersistence.java:308)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeObject(PersistenceFacade.java:137)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeFromString(PersistenceFacade.java:153)
// com.devexperts.toschart.facade.Charting.decodeNode(Charting.java:223)
// com.devexperts.tos.ui.user.techchart.ChartGadget.lambda$configureInternal$5(ChartGadget.java:825)
// com.devexperts.tos.ui.user.techchart.ChartGadget$$Lambda$2612.run()
// java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
// java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
// java.lang.Thread.run(Thread.java:829)


// =================== ChartEntitiesCentral  ===============================

// com.devexperts.tos.ui.user.centrals.chart.ChartEntitiesCentral.updateEntities(ChartEntitiesCentral.java:370)
// com.devexperts.tos.ui.user.centrals.chart.ChartEntitiesCentral.propertyFired(ChartEntitiesCentral.java:115)
// com.devexperts.pcontext.PropertyContext.fire(PropertyContext.java:372)
// com.devexperts.pcontext.PropertyContext.fire(PropertyContext.java:402)
// com.devexperts.pcontext.PropertyContext.setValue(PropertyContext.java:712)
// com.devexperts.pcontext.PropertyKey.setValue(PropertyKey.java:67)
// com.devexperts.tos.ui.net.qdrmi.QDRMIConnection.lambda$reportStatusChange$3(QDRMIConnection.java:290)
// com.devexperts.tos.ui.net.qdrmi.QDRMIConnection$$Lambda$1034.run()
// java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:313)
// java.awt.EventQueue.dispatchEventImpl(EventQueue.java:770)
// java.awt.EventQueue$4.run(EventQueue.java:721)
// java.awt.EventQueue$4.run(EventQueue.java:715)
// java.security.AccessController.doPrivileged(Native Method)
// java.security.ProtectionDomain$JavaSecurityAccessImpl.doIntersectionPrivilege(ProtectionDomain.java:85)
// java.awt.EventQueue.dispatchEvent(EventQueue.java:740)
// java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:203)
// java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:124)
// java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:113)
// java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:109)
// java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:101)
// java.awt.EventDispatchThread.run(EventDispatchThread.java:90)


// ===================  ChartGadget ===============================

// jdk.internal.misc.Unsafe.defineAnonymousClass0(Native Method)
// jdk.internal.misc.Unsafe.defineAnonymousClass(Unsafe.java:1223)
// java.lang.invoke.InnerClassLambdaMetafactory.spinInnerClass(InnerClassLambdaMetafactory.java:331)
// java.lang.invoke.InnerClassLambdaMetafactory.buildCallSite(InnerClassLambdaMetafactory.java:195)
// java.lang.invoke.LambdaMetafactory.metafactory(LambdaMetafactory.java:329)
// java.lang.invoke.LambdaForm$DMH.1254510026.invokeStatic(LambdaForm$DMH)
// java.lang.invoke.Invokers$Holder.invokeExact_MT(Invokers$Holder)
// java.lang.invoke.BootstrapMethodInvoker.invoke(BootstrapMethodInvoker.java:127)
// java.lang.invoke.CallSite.makeSite(CallSite.java:307)
// java.lang.invoke.MethodHandleNatives.linkCallSiteImpl(MethodHandleNatives.java:258)
// java.lang.invoke.MethodHandleNatives.linkCallSite(MethodHandleNatives.java:248)
// com.devexperts.tos.ui.user.techchart.ChartGadget.createAndConfigureCharting(ChartGadget.java:698)
// com.devexperts.tos.ui.user.techchart.ChartGadget.access$1300(ChartGadget.java:76)
// com.devexperts.tos.ui.user.techchart.ChartGadget$ChartingState.checkAndCreate(ChartGadget.java:1002)
// com.devexperts.tos.ui.user.techchart.ChartGadget$ChartingState.setVisible(ChartGadget.java:979)
// com.devexperts.tos.ui.user.techchart.ChartGadget$1.paint(ChartGadget.java:151)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JLayeredPane.paint(JLayeredPane.java:590)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// org.jdesktop.jxlayer.JXLayer.paint()
// org.jdesktop.jxlayer.plaf.AbstractLayerUI.paintLayer()
// org.jdesktop.jxlayer.plaf.AbstractLayerUI.paint()
// javax.swing.plaf.ComponentUI.update(ComponentUI.java:161)
// javax.swing.JComponent.paintComponent(JComponent.java:797)
// org.jdesktop.jxlayer.JXLayer.paint()
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// com.devexperts.tos.ui.user.util.CellPanel$CellComponentImpl.paint(CellPanel.java:112)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// com.devexperts.tos.ui.user.util.flexgrid.FlexGridPane.paintChildren(FlexGridPane.java:172)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JLayeredPane.paint(JLayeredPane.java:590)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JLayeredPane.paint(JLayeredPane.java:590)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JSplitPane.paintChildren(JSplitPane.java:1024)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JLayeredPane.paint(JLayeredPane.java:590)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JLayeredPane.paint(JLayeredPane.java:590)
// javax.swing.JComponent.paintChildren(JComponent.java:907)
// javax.swing.JComponent.paint(JComponent.java:1083)
// javax.swing.JComponent.paintToOffscreen(JComponent.java:5255)
// javax.swing.RepaintManager$PaintManager.paintDoubleBufferedImpl(RepaintManager.java:1643)
// javax.swing.RepaintManager$PaintManager.paintDoubleBuffered(RepaintManager.java:1618)
// javax.swing.RepaintManager$PaintManager.paint(RepaintManager.java:1556)
// javax.swing.BufferStrategyPaintManager.paint(BufferStrategyPaintManager.java:262)
// javax.swing.RepaintManager.paint(RepaintManager.java:1323)
// javax.swing.JComponent._paintImmediately(JComponent.java:5203)
// javax.swing.JComponent.paintImmediately(JComponent.java:5013)
// javax.swing.RepaintManager$4.run(RepaintManager.java:865)
// javax.swing.RepaintManager$4.run(RepaintManager.java:848)
// java.security.AccessController.doPrivileged(Native Method)
// java.security.ProtectionDomain$JavaSecurityAccessImpl.doIntersectionPrivilege(ProtectionDomain.java:85)
// javax.swing.RepaintManager.paintDirtyRegions(RepaintManager.java:848)
// javax.swing.RepaintManager.paintDirtyRegions(RepaintManager.java:823)
// com.devexperts.tos.ui.user.util.PerformanceMonitor$MonitoringRepaintManager.paintDirtyRegions(PerformanceMonitor.java:523)
// javax.swing.RepaintManager.prePaintDirtyRegions(RepaintManager.java:772)
// javax.swing.RepaintManager$ProcessingRunnable.run(RepaintManager.java:1890)
// java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:313)
// java.awt.EventQueue.dispatchEventImpl(EventQueue.java:770)
// java.awt.EventQueue$4.run(EventQueue.java:721)
// java.awt.EventQueue$4.run(EventQueue.java:715)
// java.security.AccessController.doPrivileged(Native Method)
// java.security.ProtectionDomain$JavaSecurityAccessImpl.doIntersectionPrivilege(ProtectionDomain.java:85)
// java.awt.EventQueue.dispatchEvent(EventQueue.java:740)
// java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:203)
// java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:124)
// java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:113)
// java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:109)
// java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:101)
// java.awt.EventDispatchThread.run(EventDispatchThread.java:90)
//

// ===================  ChartModel ===============================

// com.devexperts.toschart.core.ChartModel.<init>(ChartModel.java:36)
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
// java.lang.reflect.Constructor.newInstance(Constructor.java:490)
// java.lang.Class.newInstance(Class.java:584)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.Trampoline.invoke(MethodUtil.java:71)
// jdk.internal.reflect.GeneratedMethodAccessor6.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.MethodUtil.invoke(MethodUtil.java:260)
// java.beans.Statement.invokeInternal(Statement.java:304)
// java.beans.Statement$2.run(Statement.java:187)
// java.security.AccessController.doPrivileged(Native Method)
// java.beans.Statement.invoke(Statement.java:184)
// java.beans.Expression.getValue(Expression.java:155)
// com.devexperts.evolution.utils.configencoder.MutableExpression.getValue(ConfigParser.java:1253)
// com.devexperts.evolution.utils.configencoder.SimpleValueResolver.getValue(SimpleValueResolver.java:19)
// com.devexperts.toschart.model.persistence.LookupMarkedObjectsResolver.getValue(LookupMarkedObjectsResolver.java:22)
// com.devexperts.toschart.model.persistence.SecurityValueResolver.getValue(SecurityValueResolver.java:45)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getValue(ConfigParser.java:1132)
// com.devexperts.evolution.utils.configencoder.ConfigParser.eval(ConfigParser.java:1150)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:832)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readNewInstance(ConfigParser.java:979)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:514)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.parse(ConfigParser.java:91)
// com.devexperts.evolution.utils.configencoder.ConfigDecoder.readObject(ConfigDecoder.java:178)
// com.devexperts.toschart.model.persistence.SimpleCompactChartPersistence.readObject(SimpleCompactChartPersistence.java:21)
// com.devexperts.toschart.model.persistence.CompactChartPersistence$$Lambda$2401.apply()
// com.devexperts.toschart.model.persistence.CompactChartPersistence.decodeObject(CompactChartPersistence.java:308)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeObject(PersistenceFacade.java:137)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeFromString(PersistenceFacade.java:153)
// com.devexperts.toschart.facade.Charting.decodeNode(Charting.java:223)
// com.devexperts.tos.ui.user.techchart.ChartGadget.lambda$configureInternal$5(ChartGadget.java:825)
// com.devexperts.tos.ui.user.techchart.ChartGadget$$Lambda$2612.run()
// java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
// java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
// java.lang.Thread.run(Thread.java:829)


// ===================  ChartRequestProvessor ===============================

// com.devexperts.toschart.net.ChartRequestProcessor$ChartRequestDataListener.recordsAvailable(ChartRequestProcessor.java:182)
// com.devexperts.qd.impl.matrix.Agent.notifyListener(Agent.java:250)
// com.devexperts.qd.impl.matrix.Agent.notifyDataListener(Agent.java:243)
// com.devexperts.qd.impl.matrix.Collector.processDataNotify(Collector.java:1432)
// com.devexperts.qd.impl.matrix.Collector.processDataImpl(Collector.java:1341)
// com.devexperts.qd.impl.matrix.Collector.processData(Collector.java:1299)
// com.devexperts.qd.impl.matrix.Distributor.process(Distributor.java:161)
// com.devexperts.qd.impl.AbstractDistributor.processData(AbstractDistributor.java:37)
// com.devexperts.qd.qtp.DistributorAdapter.processData(DistributorAdapter.java:233)
// com.devexperts.qd.qtp.MessageConsumerAdapter.processTickerData(MessageConsumerAdapter.java:117)
// com.devexperts.rmi.impl.RMIMessageAdapter.processData(RMIMessageAdapter.java:217)
// com.devexperts.qd.qtp.MessageConsumerAdapter.processTickerData(MessageConsumerAdapter.java:117)
// com.devexperts.qd.qtp.AbstractQTPParser.processRecordsMessage(AbstractQTPParser.java:276)
// com.devexperts.qd.qtp.AbstractQTPParser.processPending(AbstractQTPParser.java:200)
// com.devexperts.qd.qtp.AbstractQTPParser.parse(AbstractQTPParser.java:180)
// com.devexperts.qd.qtp.MessageAdapterConnection.processChunks(MessageAdapterConnection.java:128)
// com.devexperts.connector.codec.ssl.SSLConnection.processChunks(SSLConnection.java:275)
// com.devexperts.qd.qtp.socket.SocketReader.doWork(SocketReader.java:86)
// com.devexperts.qd.qtp.QTPWorkerThread.run(QTPWorkerThread.java:72)


// ===================  ChromiumProcessLogger ===============================

// java.io.FileInputStream.read(FileInputStream.java)
// java.io.BufferedInputStream.read1(BufferedInputStream.java:290)
// java.io.BufferedInputStream.read(BufferedInputStream.java:351)
// sun.nio.cs.StreamDecoder.readBytes(StreamDecoder.java:284)
// sun.nio.cs.StreamDecoder.implRead(StreamDecoder.java:326)
// sun.nio.cs.StreamDecoder.read(StreamDecoder.java:178)
// java.io.InputStreamReader.read(InputStreamReader.java:181)
// java.io.BufferedReader.fill(BufferedReader.java:161)
// java.io.BufferedReader.readLine(BufferedReader.java:326)
// java.io.BufferedReader.readLine(BufferedReader.java:392)
// com.teamdev.jxbrowser.internal.ChromiumProcessLogger.lambda$startLogging$0(ChromiumProcessLogger.java:27)
// com.teamdev.jxbrowser.internal.ChromiumProcessLogger$$Lambda$2219.run()
// java.lang.Thread.run(Thread.java:829)


// ===================  ChunkList ===============================

// com.devexperts.io.ChunkList.<init>(ChunkList.java:154)
// com.devexperts.io.ChunkList.<init>(ChunkList.java:142)
// com.devexperts.io.ChunkList.<clinit>(ChunkList.java:76)
// com.devexperts.io.ChunkPool.createNewChunkList(ChunkPool.java:177)
// com.devexperts.io.ChunkPool.getChunkList(ChunkPool.java:138)
// com.devexperts.io.ChunkedInput.<init>(ChunkedInput.java:42)
// com.devexperts.qd.qtp.ConnectionQTPParser.<init>(ConnectionQTPParser.java:42)
// com.devexperts.qd.qtp.MessageAdapterConnection.<init>(MessageAdapterConnection.java:56)
// com.devexperts.qd.qtp.MessageAdapterConnectionFactory.createConnection(MessageAdapterConnectionFactory.java:90)
// com.devexperts.connector.codec.CodecConnection.<init>(CodecConnection.java:51)
// com.devexperts.connector.codec.ssl.SSLConnection.<init>(SSLConnection.java:58)
// com.devexperts.connector.codec.ssl.SSLConnectionFactory.createConnection(SSLConnectionFactory.java:350)
// com.devexperts.qd.qtp.socket.SocketHandler.initThreadData(SocketHandler.java:241)
// com.devexperts.qd.qtp.socket.SocketReader.doWork(SocketReader.java:44)
// com.devexperts.qd.qtp.QTPWorkerThread.run(QTPWorkerThread.java:72)


// =================== ChunkPool ===============================

// com.devexperts.io.ChunkPool.<init>(ChunkPool.java:83)
// com.devexperts.io.ChunkPool.<clinit>(ChunkPool.java:44)
// com.devexperts.connector.proto.ApplicationConnectionFactory.<init>(ApplicationConnectionFactory.java:31)
// com.devexperts.connector.proto.ApplicationConnectionFactory.<init>(ApplicationConnectionFactory.java:34)
// com.devexperts.qd.qtp.MessageAdapterConnectionFactory.<init>(MessageAdapterConnectionFactory.java:68)
// com.devexperts.qd.qtp.MessageConnectors.applicationConnectionFactory(MessageConnectors.java:104)
// com.devexperts.rmi.impl.RMIConnectorInitializer.createAndAddConnector(RMIConnectorInitializer.java:42)
// com.devexperts.qd.qtp.QDEndpoint.initializeConnectorsForAddress(QDEndpoint.java:148)
// com.devexperts.qd.qtp.QDEndpoint.connect(QDEndpoint.java:140)
// com.devexperts.rmi.impl.RMIEndpointImpl.connect(RMIEndpointImpl.java:139)
// com.devexperts.tos.ui.net.QdRmiConnector.connectAndCheck(QdRmiConnector.java:58)
// com.devexperts.tos.ui.net.connector.DnsQdRmiConnector.connect(DnsQdRmiConnector.java:52)
// com.devexperts.tos.ui.net.qdrmi.AuxiliaryConnection.connect(AuxiliaryConnection.java:33)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishAuxiliaryConnection(LoginDialogUtils.java:421)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.loadPropertiesFromServer(LoginDialogUtils.java:383)
// com.devexperts.tos.ui.user.AbstractStartOptionsManager.load(AbstractStartOptionsManager.java:280)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:165)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)


// ===================  ClientSocketConnector ===============================

// com.devexperts.qd.qtp.socket.ClientSocketConnector.start(ClientSocketConnector.java:286)
// com.devexperts.qd.qtp.QDEndpoint.startConnectors(QDEndpoint.java:327)
// com.devexperts.qd.qtp.QDEndpoint.connect(QDEndpoint.java:141)
// com.devexperts.rmi.impl.RMIEndpointImpl.connect(RMIEndpointImpl.java:139)
// com.devexperts.tos.ui.net.QdRmiConnector.connectAndCheck(QdRmiConnector.java:58)
// com.devexperts.tos.ui.net.connector.DnsQdRmiConnector.connect(DnsQdRmiConnector.java:52)
// com.devexperts.tos.ui.net.qdrmi.AuxiliaryConnection.connect(AuxiliaryConnection.java:33)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishAuxiliaryConnection(LoginDialogUtils.java:421)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.loadPropertiesFromServer(LoginDialogUtils.java:383)
// com.devexperts.tos.ui.user.AbstractStartOptionsManager.load(AbstractStartOptionsManager.java:280)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:165)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)


// =================== DXFeedImpl  ===============================

// com.dxfeed.api.impl.DXFeedImpl.<clinit>(DXFeedImpl.java:69)
// com.dxfeed.api.impl.DXEndpointImpl.createFeedInternal(DXEndpointImpl.java:259)
// com.dxfeed.api.impl.DXEndpointImpl.getFeed(DXEndpointImpl.java:253)
// com.devexperts.tos.ui.net.qdrmi.QDRMIConnection.<init>(QDRMIConnection.java:60)
// com.devexperts.tos.ui.net.ConnectionFactory.createConnection(ConnectionFactory.java:60)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:336)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:313)
// com.devexperts.tos.ui.user.DesktopMain.login(DesktopMain.java:245)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:184)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)
//

// ===================  DXFeedTimeSeriesSubscription ===============================

// com.dxfeed.api.DXFeedTimeSeriesSubscription.decorateSymbol(DXFeedTimeSeriesSubscription.java:114)
// com.dxfeed.api.DXFeedSubscription$$Lambda$907.apply()
// java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)
// java.util.HashMap$KeySpliterator.forEachRemaining(HashMap.java:1621)
// java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)
// java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)
// java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)
// java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)
// java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)
// com.dxfeed.api.DXFeedSubscription.decorateSymbols(DXFeedSubscription.java:746)
// com.dxfeed.api.DXFeedSubscription.setSymbols(DXFeedSubscription.java:401)
// com.devexperts.tos.ui.user.centrals.TimeSalesCentral.resubscribeNowImpl(TimeSalesCentral.java:102)
// com.devexperts.tos.ui.user.centrals.TimeSalesCentral.resubscribeNow(TimeSalesCentral.java:85)
// com.devexperts.tos.ui.user.centrals.BaseCentral.lambda$resubscribeLater$0(BaseCentral.java:65)
// com.devexperts.tos.ui.user.centrals.BaseCentral$$Lambda$634.run()
// java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:313)
// java.awt.EventQueue.dispatchEventImpl(EventQueue.java:770)
// java.awt.EventQueue$4.run(EventQueue.java:721)
// java.awt.EventQueue$4.run(EventQueue.java:715)
// java.security.AccessController.doPrivileged(Native Method)
// java.security.ProtectionDomain$JavaSecurityAccessImpl.doIntersectionPrivilege(ProtectionDomain.java:85)
// java.awt.EventQueue.dispatchEvent(EventQueue.java:740)
// java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:203)
// java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:124)
// java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:113)
// java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:109)
// java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:101)
// java.awt.EventDispatchThread.run(EventDispatchThread.java:90)


// =================== DailyOpenStudy  ===============================

// com.devexperts.tos.thinkscript.data.DailyOpenStudy.<init>()
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
// java.lang.reflect.Constructor.newInstance(Constructor.java:490)
// com.devexperts.tos.thinkscript.CompileUtils.newInstance(CompileUtils.java:106)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:250)
// com.devexperts.tos.thinkscript.data.AbstractThinkScript.<init>(AbstractThinkScript.java:185)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractor.<init>(ThinkScriptExtractor.java:23)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractorFactory.create(ThinkScriptExtractorFactory.java:16)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:84)
// com.devexperts.toschart.script.ThinkscriptCompiler.compile(ThinkscriptCompiler.java:51)
// com.devexperts.toschart.thinkscript.integration.ThinkscriptIndicatorModelBuilder.build(ThinkscriptIndicatorModelBuilder.java:100)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:163)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:146)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveScript(CompiledStudy.java:75)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveStudy(CompiledStudy.java:55)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.Trampoline.invoke(MethodUtil.java:71)
// jdk.internal.reflect.GeneratedMethodAccessor6.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.MethodUtil.invoke(MethodUtil.java:260)
// java.beans.Statement.invokeInternal(Statement.java:304)
// java.beans.Statement$2.run(Statement.java:187)
// java.security.AccessController.doPrivileged(Native Method)
// java.beans.Statement.invoke(Statement.java:184)
// java.beans.Expression.getValue(Expression.java:155)
// com.devexperts.evolution.utils.configencoder.MutableExpression.getValue(ConfigParser.java:1253)
// com.devexperts.evolution.utils.configencoder.SimpleValueResolver.getValue(SimpleValueResolver.java:19)
// com.devexperts.toschart.model.persistence.LookupMarkedObjectsResolver.getValue(LookupMarkedObjectsResolver.java:22)
// com.devexperts.toschart.model.persistence.SecurityValueResolver.getValue(SecurityValueResolver.java:45)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getValue(ConfigParser.java:1132)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readObjectReturnedByStaticMethod(ConfigParser.java:657)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:605)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.argList(ConfigParser.java:1087)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:803)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:812)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readNewInstance(ConfigParser.java:979)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:514)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.parse(ConfigParser.java:91)
// com.devexperts.evolution.utils.configencoder.ConfigDecoder.readObject(ConfigDecoder.java:178)
// com.devexperts.toschart.model.persistence.SimpleCompactChartPersistence.readObject(SimpleCompactChartPersistence.java:21)
// com.devexperts.toschart.model.persistence.CompactChartPersistence$$Lambda$2401.apply()
// com.devexperts.toschart.model.persistence.CompactChartPersistence.decodeObject(CompactChartPersistence.java:308)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeObject(PersistenceFacade.java:137)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeFromString(PersistenceFacade.java:153)
// com.devexperts.toschart.facade.Charting.decodeNode(Charting.java:223)
// com.devexperts.tos.ui.user.techchart.ChartGadget.lambda$configureInternal$5(ChartGadget.java:825)
// com.devexperts.tos.ui.user.techchart.ChartGadget$$Lambda$2612.run()
// java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
// java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
// java.lang.Thread.run(Thread.java:829)


// =================== DefaultLoginController  ===============================

// com.devexperts.tos.ui.net.auth.DefaultLoginController.authenticate(DefaultLoginController.java:72)
// com.devexperts.tos.ui.net.ConnectionFactory.createConnection(ConnectionFactory.java:65)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:336)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:313)
// com.devexperts.tos.ui.user.DesktopMain.login(DesktopMain.java:245)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:184)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)

// =================== HammerStudy ===============================

// com.devexperts.tos.thinkscript.data.HammerStudy.init1()
// com.devexperts.tos.thinkscript.data.HammerStudy.<init>()
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
// java.lang.reflect.Constructor.newInstance(Constructor.java:490)
// com.devexperts.tos.thinkscript.CompileUtils.newInstance(CompileUtils.java:106)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:250)
// com.devexperts.tos.thinkscript.data.AbstractThinkScript.<init>(AbstractThinkScript.java:185)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractor.<init>(ThinkScriptExtractor.java:23)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractorFactory.create(ThinkScriptExtractorFactory.java:16)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:84)
// com.devexperts.toschart.script.ThinkscriptCompiler.compile(ThinkscriptCompiler.java:51)
// com.devexperts.toschart.thinkscript.integration.ThinkscriptIndicatorModelBuilder.build(ThinkscriptIndicatorModelBuilder.java:100)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:163)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:146)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveScript(CompiledStudy.java:75)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveStudy(CompiledStudy.java:55)
// jdk.internal.reflect.GeneratedMethodAccessor63.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.Trampoline.invoke(MethodUtil.java:71)
// jdk.internal.reflect.GeneratedMethodAccessor6.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.MethodUtil.invoke(MethodUtil.java:260)
// java.beans.Statement.invokeInternal(Statement.java:304)
// java.beans.Statement$2.run(Statement.java:187)
// java.security.AccessController.doPrivileged(Native Method)
// java.beans.Statement.invoke(Statement.java:184)
// java.beans.Expression.getValue(Expression.java:155)
// com.devexperts.evolution.utils.configencoder.MutableExpression.getValue(ConfigParser.java:1253)
// com.devexperts.evolution.utils.configencoder.SimpleValueResolver.getValue(SimpleValueResolver.java:19)
// com.devexperts.toschart.model.persistence.LookupMarkedObjectsResolver.getValue(LookupMarkedObjectsResolver.java:22)
// com.devexperts.toschart.model.persistence.SecurityValueResolver.getValue(SecurityValueResolver.java:45)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getValue(ConfigParser.java:1132)
// com.devexperts.evolution.utils.configencoder.ConfigParser.eval(ConfigParser.java:1150)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:863)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readObjectReturnedByStaticMethod(ConfigParser.java:653)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:605)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.argList(ConfigParser.java:1087)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:803)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:812)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readNewInstance(ConfigParser.java:979)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:514)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.parse(ConfigParser.java:91)
// com.devexperts.evolution.utils.configencoder.ConfigDecoder.readObject(ConfigDecoder.java:178)
// com.devexperts.toschart.model.persistence.SimpleCompactChartPersistence.readObject(SimpleCompactChartPersistence.java:21)
// com.devexperts.toschart.model.persistence.CompactChartPersistence$$Lambda$2401.apply()
// com.devexperts.toschart.model.persistence.CompactChartPersistence.decodeObject(CompactChartPersistence.java:308)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeObject(PersistenceFacade.java:137)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeFromString(PersistenceFacade.java:153)
// com.devexperts.toschart.facade.Charting.decodeNode(Charting.java:223)
// com.devexperts.tos.ui.user.techchart.ChartGadget.lambda$configureInternal$5(ChartGadget.java:825)
// com.devexperts.tos.ui.user.techchart.ChartGadget$$Lambda$2612.run()
// java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
// java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
// java.lang.Thread.run(Thread.java:829)

// ===================  Log4j ===============================

// org.apache.logging.log4j.core.impl.MutableLogEvent.setMessage(MutableLogEvent.java:217)
// org.apache.logging.log4j.core.impl.ReusableLogEventFactory.createEvent(ReusableLogEventFactory.java:89)
// org.apache.logging.log4j.core.config.LoggerConfig.log(LoggerConfig.java:385)
// org.apache.logging.log4j.core.config.AwaitCompletionReliabilityStrategy.log(AwaitCompletionReliabilityStrategy.java:63)
// org.apache.logging.log4j.core.Logger.logMessage(Logger.java:153)
// com.devexperts.logging.Log4j2Logging.log(Log4j2Logging.java:180)
// com.devexperts.logging.Logging.log(Logging.java:173)
// com.devexperts.logging.Logging.info(Logging.java:122)
// com.devexperts.tos.ui.net.IniFile.loadIniFile(IniFile.java:65)
// com.devexperts.tos.ui.user.DesktopMain.<clinit>(DesktopMain.java:57)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)


// =================== LoginDialogUtils ===============================

// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.loadPropertiesFromServer(LoginDialogUtils.java:384)
// com.devexperts.tos.ui.user.AbstractStartOptionsManager.load(AbstractStartOptionsManager.java:280)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:165)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)


// =================== MessageAdapterConnection ===============================

// com.devexperts.qd.qtp.MessageAdapterConnection.<init>(MessageAdapterConnection.java:46)
// com.devexperts.qd.qtp.MessageAdapterConnectionFactory.createConnection(MessageAdapterConnectionFactory.java:90)
// com.devexperts.connector.codec.CodecConnection.<init>(CodecConnection.java:51)
// com.devexperts.connector.codec.ssl.SSLConnection.<init>(SSLConnection.java:58)
// com.devexperts.connector.codec.ssl.SSLConnectionFactory.createConnection(SSLConnectionFactory.java:350)
// com.devexperts.qd.qtp.socket.SocketHandler.initThreadData(SocketHandler.java:241)
// com.devexperts.qd.qtp.socket.SocketReader.doWork(SocketReader.java:44)
// com.devexperts.qd.qtp.QTPWorkerThread.run(QTPWorkerThread.java:72)

// ---------------------------- SocketReader ------------------------------------
// ---------------------------- SocketReader ------------------------------------



// ===================  MessagePRocessor ===============================

// com.devexperts.rmi.impl.MessageProcessor.<init>(MessageProcessor.java:60)
// com.devexperts.rmi.impl.RMIConnection.<init>(RMIConnection.java:53)
// com.devexperts.rmi.impl.RMIConnectorInitializer$AdapterFactory.createAdapter(RMIConnectorInitializer.java:71)
// com.devexperts.qd.qtp.MessageAdapterConnectionFactory.createConnection(MessageAdapterConnectionFactory.java:85)
// com.devexperts.connector.codec.CodecConnection.<init>(CodecConnection.java:51)
// com.devexperts.connector.codec.ssl.SSLConnection.<init>(SSLConnection.java:58)
// com.devexperts.connector.codec.ssl.SSLConnectionFactory.createConnection(SSLConnectionFactory.java:350)
// com.devexperts.qd.qtp.socket.SocketHandler.initThreadData(SocketHandler.java:241)
// com.devexperts.qd.qtp.socket.SocketReader.doWork(SocketReader.java:44)
// com.devexperts.qd.qtp.QTPWorkerThread.run(QTPWorkerThread.java:72)


// =================== OAuthTokenManager ===============================

// jdk.internal.misc.Unsafe.defineAnonymousClass0(Native Method)
// jdk.internal.misc.Unsafe.defineAnonymousClass(Unsafe.java:1223)
// java.lang.invoke.InnerClassLambdaMetafactory.spinInnerClass(InnerClassLambdaMetafactory.java:331)
// java.lang.invoke.InnerClassLambdaMetafactory.buildCallSite(InnerClassLambdaMetafactory.java:195)
// java.lang.invoke.LambdaMetafactory.metafactory(LambdaMetafactory.java:329)
// java.lang.invoke.LambdaForm$DMH.1254510026.invokeStatic(LambdaForm$DMH)
// java.lang.invoke.Invokers$Holder.invokeExact_MT(Invokers$Holder)
// java.lang.invoke.BootstrapMethodInvoker.invoke(BootstrapMethodInvoker.java:127)
// java.lang.invoke.CallSite.makeSite(CallSite.java:307)
// java.lang.invoke.MethodHandleNatives.linkCallSiteImpl(MethodHandleNatives.java:258)
// java.lang.invoke.MethodHandleNatives.linkCallSite(MethodHandleNatives.java:248)
// com.devexperts.tos.ui.net.auth.OAuthTokenManager.<init>(OAuthTokenManager.java:75)
// com.devexperts.tos.ui.net.auth.OAuthTokenManager.init(OAuthTokenManager.java:67)
// com.devexperts.tos.ui.net.qdrmi.QDRMIConnection.<init>(QDRMIConnection.java:95)
// com.devexperts.tos.ui.net.ConnectionFactory.createConnection(ConnectionFactory.java:60)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:336)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:313)
// com.devexperts.tos.ui.user.DesktopMain.login(DesktopMain.java:245)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:184)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)


// =================== QDRMIStats ===============================

// com.devexperts.tos.ui.net.qdrmi.QDRMIStats.updateStats(QDRMIStats.java:75)
// com.devexperts.tos.ui.net.qdrmi.QDRMIStats.propertyFired(QDRMIStats.java:46)
// com.devexperts.pcontext.PropertyContext.fire(PropertyContext.java:372)
// com.devexperts.pcontext.PropertyContext.addAndFireListener(PropertyContext.java:640)
// com.devexperts.tos.ui.net.qdrmi.QDRMIStats.<init>(QDRMIStats.java:32)
// com.devexperts.tos.ui.net.qdrmi.QDRMIConnection.<init>(QDRMIConnection.java:98)
// com.devexperts.tos.ui.net.ConnectionFactory.createConnection(ConnectionFactory.java:60)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:336)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:313)
// com.devexperts.tos.ui.user.DesktopMain.login(DesktopMain.java:245)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:184)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)


// =================== RecordProcessor ===============================

// com.devexperts.qd.util.RecordProcessor.<init>(RecordProcessor.java:38)
// com.dxfeed.api.impl.DXFeedImpl$LastEventsProcessor.<init>(DXFeedImpl.java:1207)
// com.dxfeed.api.impl.DXFeedImpl.<init>(DXFeedImpl.java:126)
// com.dxfeed.api.impl.DXFeedImpl.<init>(DXFeedImpl.java:89)
// com.dxfeed.api.impl.DXEndpointImpl.createFeedInternal(DXEndpointImpl.java:259)
// com.dxfeed.api.impl.DXEndpointImpl.getFeed(DXEndpointImpl.java:253)
// com.devexperts.tos.ui.net.qdrmi.QDRMIConnection.<init>(QDRMIConnection.java:60)
// com.devexperts.tos.ui.net.ConnectionFactory.createConnection(ConnectionFactory.java:60)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:336)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:313)
// com.devexperts.tos.ui.user.DesktopMain.login(DesktopMain.java:245)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:184)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)


// =================== Request.send ===============================

// jdk.internal.misc.Unsafe.defineAnonymousClass0(Native Method)
// jdk.internal.misc.Unsafe.defineAnonymousClass(Unsafe.java:1223)
// java.lang.invoke.InnerClassLambdaMetafactory.spinInnerClass(InnerClassLambdaMetafactory.java:331)
// java.lang.invoke.InnerClassLambdaMetafactory.buildCallSite(InnerClassLambdaMetafactory.java:195)
// java.lang.invoke.LambdaMetafactory.metafactory(LambdaMetafactory.java:329)
// java.lang.invoke.LambdaForm$DMH.1254510026.invokeStatic(LambdaForm$DMH)
// java.lang.invoke.Invokers$Holder.invokeExact_MT(Invokers$Holder)
// java.lang.invoke.BootstrapMethodInvoker.invoke(BootstrapMethodInvoker.java:127)
// java.lang.invoke.CallSite.makeSite(CallSite.java:307)
// java.lang.invoke.MethodHandleNatives.linkCallSiteImpl(MethodHandleNatives.java:258)
// java.lang.invoke.MethodHandleNatives.linkCallSite(MethodHandleNatives.java:248)
// com.devexperts.tos.ui.net.Request.send(Request.java:228)
// com.devexperts.tos.ui.user.centrals.chart.ChartEntitiesCentral.updateEntities(ChartEntitiesCentral.java:370)
// com.devexperts.tos.ui.user.centrals.chart.ChartEntitiesCentral.propertyFired(ChartEntitiesCentral.java:115)
// com.devexperts.pcontext.PropertyContext.fire(PropertyContext.java:372)
// com.devexperts.pcontext.PropertyContext.fire(PropertyContext.java:402)
// com.devexperts.pcontext.PropertyContext.setValue(PropertyContext.java:712)
// com.devexperts.pcontext.PropertyKey.setValue(PropertyKey.java:67)
// com.devexperts.tos.ui.net.qdrmi.QDRMIConnection.lambda$reportStatusChange$3(QDRMIConnection.java:290)
// com.devexperts.tos.ui.net.qdrmi.QDRMIConnection$$Lambda$1034.run()
// java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:313)
// java.awt.EventQueue.dispatchEventImpl(EventQueue.java:770)
// java.awt.EventQueue$4.run(EventQueue.java:721)
// java.awt.EventQueue$4.run(EventQueue.java:715)
// java.security.AccessController.doPrivileged(Native Method)
// java.security.ProtectionDomain$JavaSecurityAccessImpl.doIntersectionPrivilege(ProtectionDomain.java:85)
// java.awt.EventQueue.dispatchEvent(EventQueue.java:740)
// java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:203)
// java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:124)
// java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:113)
// java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:109)
// java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:101)
// java.awt.EventDispatchThread.run(EventDispatchThread.java:90)


// =================== ScriptData ===============================

// com.devexperts.tos.thinkscript.runtime.data.ScriptData.<init>(ScriptData.java:41)
// com.devexperts.tos.thinkscript.data.AbstractThinkScript.<init>(AbstractThinkScript.java:157)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractor.<init>(ThinkScriptExtractor.java:23)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractorFactory.create(ThinkScriptExtractorFactory.java:16)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:84)
// com.devexperts.toschart.script.ThinkscriptCompiler.compile(ThinkscriptCompiler.java:51)
// com.devexperts.toschart.thinkscript.integration.ThinkscriptIndicatorModelBuilder.build(ThinkscriptIndicatorModelBuilder.java:100)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:163)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:146)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveScript(CompiledStudy.java:75)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveStudy(CompiledStudy.java:55)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.Trampoline.invoke(MethodUtil.java:71)
// jdk.internal.reflect.GeneratedMethodAccessor6.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.MethodUtil.invoke(MethodUtil.java:260)
// java.beans.Statement.invokeInternal(Statement.java:304)
// java.beans.Statement$2.run(Statement.java:187)
// java.security.AccessController.doPrivileged(Native Method)
// java.beans.Statement.invoke(Statement.java:184)
// java.beans.Expression.getValue(Expression.java:155)
// com.devexperts.evolution.utils.configencoder.MutableExpression.getValue(ConfigParser.java:1253)
// com.devexperts.evolution.utils.configencoder.SimpleValueResolver.getValue(SimpleValueResolver.java:19)
// com.devexperts.toschart.model.persistence.LookupMarkedObjectsResolver.getValue(LookupMarkedObjectsResolver.java:22)
// com.devexperts.toschart.model.persistence.SecurityValueResolver.getValue(SecurityValueResolver.java:45)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getValue(ConfigParser.java:1132)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readObjectReturnedByStaticMethod(ConfigParser.java:657)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:605)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.argList(ConfigParser.java:1087)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:803)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:812)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readNewInstance(ConfigParser.java:979)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:514)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.parse(ConfigParser.java:91)
// com.devexperts.evolution.utils.configencoder.ConfigDecoder.readObject(ConfigDecoder.java:178)
// com.devexperts.toschart.model.persistence.SimpleCompactChartPersistence.readObject(SimpleCompactChartPersistence.java:21)
// com.devexperts.toschart.model.persistence.CompactChartPersistence$$Lambda$2401.apply()
// com.devexperts.toschart.model.persistence.CompactChartPersistence.decodeObject(CompactChartPersistence.java:308)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeObject(PersistenceFacade.java:137)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeFromString(PersistenceFacade.java:153)
// com.devexperts.toschart.facade.Charting.decodeNode(Charting.java:223)
// com.devexperts.tos.ui.user.techchart.ChartGadget.lambda$configureInternal$5(ChartGadget.java:825)
// com.devexperts.tos.ui.user.techchart.ChartGadget$$Lambda$2612.run()
// java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
// java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
// java.lang.Thread.run(Thread.java:829)
//

// ===================  SendRequest ===============================

// com.devexperts.rmi.impl.SentRequests.<init>(SentRequests.java:27)
// com.devexperts.rmi.impl.RequestsManager.<init>(RequestsManager.java:27)
// com.devexperts.rmi.impl.RMIConnection.<init>(RMIConnection.java:54)
// com.devexperts.rmi.impl.RMIConnectorInitializer$AdapterFactory.createAdapter(RMIConnectorInitializer.java:71)
// com.devexperts.qd.qtp.MessageAdapterConnectionFactory.createConnection(MessageAdapterConnectionFactory.java:85)
// com.devexperts.connector.codec.CodecConnection.<init>(CodecConnection.java:51)
// com.devexperts.connector.codec.ssl.SSLConnection.<init>(SSLConnection.java:58)
// com.devexperts.connector.codec.ssl.SSLConnectionFactory.createConnection(SSLConnectionFactory.java:350)
// com.devexperts.qd.qtp.socket.SocketHandler.initThreadData(SocketHandler.java:241)
// com.devexperts.qd.qtp.socket.SocketReader.doWork(SocketReader.java:44)
// com.devexperts.qd.qtp.QTPWorkerThread.run(QTPWorkerThread.java:72)


// =================== SimpleMovingAvgStudy ===============================

// com.devexperts.tos.thinkscript.data.SimpleMovingAvgStudy.<init>()
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
// java.lang.reflect.Constructor.newInstance(Constructor.java:490)
// com.devexperts.tos.thinkscript.CompileUtils.newInstance(CompileUtils.java:106)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:250)
// com.devexperts.tos.thinkscript.data.AbstractThinkScript.<init>(AbstractThinkScript.java:185)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractor.<init>(ThinkScriptExtractor.java:23)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractorFactory.create(ThinkScriptExtractorFactory.java:16)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:84)
// com.devexperts.toschart.script.ThinkscriptCompiler.compile(ThinkscriptCompiler.java:51)
// com.devexperts.toschart.thinkscript.integration.ThinkscriptIndicatorModelBuilder.build(ThinkscriptIndicatorModelBuilder.java:100)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:163)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:146)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveScript(CompiledStudy.java:75)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveStudy(CompiledStudy.java:55)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.Trampoline.invoke(MethodUtil.java:71)
// jdk.internal.reflect.GeneratedMethodAccessor6.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.MethodUtil.invoke(MethodUtil.java:260)
// java.beans.Statement.invokeInternal(Statement.java:304)
// java.beans.Statement$2.run(Statement.java:187)
// java.security.AccessController.doPrivileged(Native Method)
// java.beans.Statement.invoke(Statement.java:184)
// java.beans.Expression.getValue(Expression.java:155)
// com.devexperts.evolution.utils.configencoder.MutableExpression.getValue(ConfigParser.java:1253)
// com.devexperts.evolution.utils.configencoder.SimpleValueResolver.getValue(SimpleValueResolver.java:19)
// com.devexperts.toschart.model.persistence.LookupMarkedObjectsResolver.getValue(LookupMarkedObjectsResolver.java:22)
// com.devexperts.toschart.model.persistence.SecurityValueResolver.getValue(SecurityValueResolver.java:45)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getValue(ConfigParser.java:1132)
// com.devexperts.evolution.utils.configencoder.ConfigParser.eval(ConfigParser.java:1150)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:863)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readObjectReturnedByStaticMethod(ConfigParser.java:653)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:605)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.argList(ConfigParser.java:1087)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:803)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:812)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readNewInstance(ConfigParser.java:979)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:514)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.parse(ConfigParser.java:91)
// com.devexperts.evolution.utils.configencoder.ConfigDecoder.readObject(ConfigDecoder.java:178)
// com.devexperts.toschart.model.persistence.SimpleCompactChartPersistence.readObject(SimpleCompactChartPersistence.java:21)
// com.devexperts.toschart.model.persistence.CompactChartPersistence$$Lambda$2401.apply()
// com.devexperts.toschart.model.persistence.CompactChartPersistence.decodeObject(CompactChartPersistence.java:308)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeObject(PersistenceFacade.java:137)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeFromString(PersistenceFacade.java:153)
// com.devexperts.toschart.facade.Charting.decodeNode(Charting.java:223)
// com.devexperts.tos.ui.user.techchart.ChartGadget.lambda$configureInternal$5(ChartGadget.java:825)
// com.devexperts.tos.ui.user.techchart.ChartGadget$$Lambda$2612.run()
// java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
// java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
// java.lang.Thread.run(Thread.java:829)


// =================== SocketHandler ===============================

// com.devexperts.qd.qtp.socket.SocketHandler.<init>(SocketHandler.java:58)
// com.devexperts.qd.qtp.socket.ClientSocketConnector.start(ClientSocketConnector.java:292)
// com.devexperts.qd.qtp.QDEndpoint.startConnectors(QDEndpoint.java:327)
// com.devexperts.qd.qtp.QDEndpoint.connect(QDEndpoint.java:141)
// com.devexperts.rmi.impl.RMIEndpointImpl.connect(RMIEndpointImpl.java:139)
// com.devexperts.tos.ui.net.QdRmiConnector.connectAndCheck(QdRmiConnector.java:58)
// com.devexperts.tos.ui.net.connector.DnsQdRmiConnector.connect(DnsQdRmiConnector.java:52)
// com.devexperts.tos.ui.net.qdrmi.AuxiliaryConnection.connect(AuxiliaryConnection.java:33)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishAuxiliaryConnection(LoginDialogUtils.java:421)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.loadPropertiesFromServer(LoginDialogUtils.java:383)
// com.devexperts.tos.ui.user.AbstractStartOptionsManager.load(AbstractStartOptionsManager.java:280)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:165)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)


// =================== SocketWriter ===============================

// com.devexperts.qd.qtp.socket.SocketWriter.<clinit>(SocketWriter.java:40)
// com.devexperts.qd.qtp.socket.SocketHandler.start(SocketHandler.java:100)
// com.devexperts.qd.qtp.socket.ClientSocketConnector.start(ClientSocketConnector.java:294)
// com.devexperts.qd.qtp.QDEndpoint.startConnectors(QDEndpoint.java:327)
// com.devexperts.qd.qtp.QDEndpoint.connect(QDEndpoint.java:141)
// com.devexperts.rmi.impl.RMIEndpointImpl.connect(RMIEndpointImpl.java:139)
// com.devexperts.tos.ui.net.QdRmiConnector.connectAndCheck(QdRmiConnector.java:58)
// com.devexperts.tos.ui.net.connector.DnsQdRmiConnector.connect(DnsQdRmiConnector.java:52)
// com.devexperts.tos.ui.net.qdrmi.AuxiliaryConnection.connect(AuxiliaryConnection.java:33)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishAuxiliaryConnection(LoginDialogUtils.java:421)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.loadPropertiesFromServer(LoginDialogUtils.java:383)
// com.devexperts.tos.ui.user.AbstractStartOptionsManager.load(AbstractStartOptionsManager.java:280)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:165)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)


// =================== Study ===============================

// com.devexperts.toschart.model.Study.<clinit>(Study.java:62)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.Trampoline.invoke(MethodUtil.java:71)
// jdk.internal.reflect.GeneratedMethodAccessor6.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.MethodUtil.invoke(MethodUtil.java:260)
// java.beans.Statement.invokeInternal(Statement.java:304)
// java.beans.Statement$2.run(Statement.java:187)
// java.security.AccessController.doPrivileged(Native Method)
// java.beans.Statement.invoke(Statement.java:184)
// java.beans.Expression.getValue(Expression.java:155)
// com.devexperts.evolution.utils.configencoder.MutableExpression.getValue(ConfigParser.java:1253)
// com.devexperts.evolution.utils.configencoder.SimpleValueResolver.getValue(SimpleValueResolver.java:19)
// com.devexperts.toschart.model.persistence.LookupMarkedObjectsResolver.getValue(LookupMarkedObjectsResolver.java:22)
// com.devexperts.toschart.model.persistence.SecurityValueResolver.getValue(SecurityValueResolver.java:45)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getValue(ConfigParser.java:1132)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readObjectReturnedByStaticMethod(ConfigParser.java:657)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:605)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.argList(ConfigParser.java:1087)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:803)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:812)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readNewInstance(ConfigParser.java:979)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:514)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.parse(ConfigParser.java:91)
// com.devexperts.evolution.utils.configencoder.ConfigDecoder.readObject(ConfigDecoder.java:178)
// com.devexperts.toschart.model.persistence.SimpleCompactChartPersistence.readObject(SimpleCompactChartPersistence.java:21)
// com.devexperts.toschart.model.persistence.CompactChartPersistence$$Lambda$2401.apply()
// com.devexperts.toschart.model.persistence.CompactChartPersistence.decodeObject(CompactChartPersistence.java:308)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeObject(PersistenceFacade.java:137)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeFromString(PersistenceFacade.java:153)
// com.devexperts.toschart.facade.Charting.decodeNode(Charting.java:223)
// com.devexperts.tos.ui.user.techchart.ChartGadget.lambda$configureInternal$5(ChartGadget.java:825)
// com.devexperts.tos.ui.user.techchart.ChartGadget$$Lambda$2612.run()
// java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
// java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
// java.lang.Thread.run(Thread.java:829)


// =================== TimeAndSaleDelegate ===============================

// com.dxfeed.event.market.TimeAndSaleDelegate.createEvent(TimeAndSaleDelegate.java:39)
// com.dxfeed.event.market.TimeAndSaleDelegate.createEvent(TimeAndSaleDelegate.java:23)
// com.dxfeed.api.impl.EventDelegate.<init>(EventDelegate.java:50)
// com.dxfeed.event.market.MarketEventDelegateImpl.<init>(MarketEventDelegateImpl.java:26)
// com.dxfeed.event.market.TimeAndSaleDelegate.<init>(TimeAndSaleDelegate.java:28)
// com.dxfeed.event.market.MarketFactoryImpl.createDelegates(MarketFactoryImpl.java:349)
// com.dxfeed.api.impl.DXEndpointImpl.createDelegates(DXEndpointImpl.java:511)
// com.dxfeed.api.impl.DXEndpointImpl.<init>(DXEndpointImpl.java:154)
// com.dxfeed.api.impl.DXEndpointImpl.<init>(DXEndpointImpl.java:170)
// com.devexperts.tos.ui.net.qdrmi.QDRMIConnection.<init>(QDRMIConnection.java:58)
// com.devexperts.tos.ui.net.ConnectionFactory.createConnection(ConnectionFactory.java:60)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:336)
// com.devexperts.tos.ui.user.login.dialogs.LoginDialogUtils.establishMainConnection(LoginDialogUtils.java:313)
// com.devexperts.tos.ui.user.DesktopMain.login(DesktopMain.java:245)
// com.devexperts.tos.ui.user.DesktopMain.main(DesktopMain.java:184)
// com.devexperts.tos.ui.user.DesktopStarter.main(DesktopStarter.java:18)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// com.devexperts.jnlp.updater.ModuleManager$LaunchThread.run(ModuleManager.java:1478)
//

// =================== VWAPStudy ===============================

// com.devexperts.tos.thinkscript.data.VWAPStudy.<init>()
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
// java.lang.reflect.Constructor.newInstance(Constructor.java:490)
// com.devexperts.tos.thinkscript.CompileUtils.newInstance(CompileUtils.java:106)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:250)
// com.devexperts.tos.thinkscript.data.AbstractThinkScript.<init>(AbstractThinkScript.java:185)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractor.<init>(ThinkScriptExtractor.java:23)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractorFactory.create(ThinkScriptExtractorFactory.java:16)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:84)
// com.devexperts.toschart.script.ThinkscriptCompiler.compile(ThinkscriptCompiler.java:51)
// com.devexperts.toschart.thinkscript.integration.ThinkscriptIndicatorModelBuilder.build(ThinkscriptIndicatorModelBuilder.java:100)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:163)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:146)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveScript(CompiledStudy.java:75)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveStudy(CompiledStudy.java:55)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
// jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.Trampoline.invoke(MethodUtil.java:71)
// jdk.internal.reflect.GeneratedMethodAccessor6.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.MethodUtil.invoke(MethodUtil.java:260)
// java.beans.Statement.invokeInternal(Statement.java:304)
// java.beans.Statement$2.run(Statement.java:187)
// java.security.AccessController.doPrivileged(Native Method)
// java.beans.Statement.invoke(Statement.java:184)
// java.beans.Expression.getValue(Expression.java:155)
// com.devexperts.evolution.utils.configencoder.MutableExpression.getValue(ConfigParser.java:1253)
// com.devexperts.evolution.utils.configencoder.SimpleValueResolver.getValue(SimpleValueResolver.java:19)
// com.devexperts.toschart.model.persistence.LookupMarkedObjectsResolver.getValue(LookupMarkedObjectsResolver.java:22)
// com.devexperts.toschart.model.persistence.SecurityValueResolver.getValue(SecurityValueResolver.java:45)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getValue(ConfigParser.java:1132)
// com.devexperts.evolution.utils.configencoder.ConfigParser.eval(ConfigParser.java:1150)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:863)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readObjectReturnedByStaticMethod(ConfigParser.java:653)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:605)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.argList(ConfigParser.java:1087)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:803)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:812)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readNewInstance(ConfigParser.java:979)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:514)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.parse(ConfigParser.java:91)
// com.devexperts.evolution.utils.configencoder.ConfigDecoder.readObject(ConfigDecoder.java:178)
// com.devexperts.toschart.model.persistence.SimpleCompactChartPersistence.readObject(SimpleCompactChartPersistence.java:21)
// com.devexperts.toschart.model.persistence.CompactChartPersistence$$Lambda$2401.apply()
// com.devexperts.toschart.model.persistence.CompactChartPersistence.decodeObject(CompactChartPersistence.java:308)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeObject(PersistenceFacade.java:137)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeFromString(PersistenceFacade.java:153)
// com.devexperts.toschart.facade.Charting.decodeNode(Charting.java:223)
// com.devexperts.tos.ui.user.techchart.ChartGadget.lambda$configureInternal$5(ChartGadget.java:825)
// com.devexperts.tos.ui.user.techchart.ChartGadget$$Lambda$2612.run()
// java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
// java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
// java.lang.Thread.run(Thread.java:829)


// =================== WatchList ===============================

// jdk.internal.misc.Unsafe.defineAnonymousClass0(Native Method)
// jdk.internal.misc.Unsafe.defineAnonymousClass(Unsafe.java:1223)
// java.lang.invoke.InnerClassLambdaMetafactory.spinInnerClass(InnerClassLambdaMetafactory.java:331)
// java.lang.invoke.InnerClassLambdaMetafactory.buildCallSite(InnerClassLambdaMetafactory.java:195)
// java.lang.invoke.LambdaMetafactory.metafactory(LambdaMetafactory.java:329)
// java.lang.invoke.LambdaForm$DMH.1254510026.invokeStatic(LambdaForm$DMH)
// java.lang.invoke.Invokers$Holder.invokeExact_MT(Invokers$Holder)
// java.lang.invoke.BootstrapMethodInvoker.invoke(BootstrapMethodInvoker.java:127)
// java.lang.invoke.CallSite.makeSite(CallSite.java:307)
// java.lang.invoke.MethodHandleNatives.linkCallSiteImpl(MethodHandleNatives.java:258)
// java.lang.invoke.MethodHandleNatives.linkCallSite(MethodHandleNatives.java:248)
// com.devexperts.tos.qdext.scanner.WatchList.<clinit>(WatchList.java:39)
// com.devexperts.tos.gics.GICSListConstantProvider20180928.createGICSList(GICSListConstantProvider20180928.java:444)
// com.devexperts.tos.gics.GICSListConstantProvider20180928.createGICSList(GICSListConstantProvider20180928.java:438)
// com.devexperts.tos.gics.GICSListConstantProvider20180928.makeEnergyIndustries(GICSListConstantProvider20180928.java:92)
// com.devexperts.tos.gics.GICSListConstantProvider20180928.makeList(GICSListConstantProvider20180928.java:66)
// com.devexperts.tos.gics.GICSListConstantProvider20180928.retrieveAllIndustry(GICSListConstantProvider20180928.java:59)
// com.devexperts.tos.gics.GICSListProvider$$Lambda$684.run()
// java.lang.Thread.run(Thread.java:829)


// =================== _098b417f_724d_45bc_98ee_23929285a751Study ===============================

// com.devexperts.tos.thinkscript.data._098b417f_724d_45bc_98ee_23929285a751Study.<init>()
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
// jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
// java.lang.reflect.Constructor.newInstance(Constructor.java:490)
// com.devexperts.tos.thinkscript.CompileUtils.newInstance(CompileUtils.java:106)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:250)
// com.devexperts.tos.thinkscript.data.AbstractThinkScript.<init>(AbstractThinkScript.java:185)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractor.<init>(ThinkScriptExtractor.java:23)
// com.devexperts.toschart.thinkscript.integration.ThinkScriptExtractorFactory.create(ThinkScriptExtractorFactory.java:16)
// com.devexperts.tos.thinkscript.CompileUtils.newScriptInstance(CompileUtils.java:84)
// com.devexperts.toschart.script.ThinkscriptCompiler.compile(ThinkscriptCompiler.java:51)
// com.devexperts.toschart.thinkscript.integration.ThinkscriptIndicatorModelBuilder.build(ThinkscriptIndicatorModelBuilder.java:100)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:163)
// com.devexperts.toschart.core.ChartingScript.createCompiledStudy(ChartingScript.java:146)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveScript(CompiledStudy.java:75)
// com.devexperts.toschart.elstudies.CompiledStudy.resolveStudy(CompiledStudy.java:55)
// jdk.internal.reflect.GeneratedMethodAccessor63.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.Trampoline.invoke(MethodUtil.java:71)
// jdk.internal.reflect.GeneratedMethodAccessor6.invoke()
// jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
// java.lang.reflect.Method.invoke(Method.java:566)
// sun.reflect.misc.MethodUtil.invoke(MethodUtil.java:260)
// java.beans.Statement.invokeInternal(Statement.java:304)
// java.beans.Statement$2.run(Statement.java:187)
// java.security.AccessController.doPrivileged(Native Method)
// java.beans.Statement.invoke(Statement.java:184)
// java.beans.Expression.getValue(Expression.java:155)
// com.devexperts.evolution.utils.configencoder.MutableExpression.getValue(ConfigParser.java:1253)
// com.devexperts.evolution.utils.configencoder.SimpleValueResolver.getValue(SimpleValueResolver.java:19)
// com.devexperts.toschart.model.persistence.LookupMarkedObjectsResolver.getValue(LookupMarkedObjectsResolver.java:22)
// com.devexperts.toschart.model.persistence.SecurityValueResolver.getValue(SecurityValueResolver.java:45)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getValue(ConfigParser.java:1132)
// com.devexperts.evolution.utils.configencoder.ConfigParser.eval(ConfigParser.java:1150)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:863)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:742)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readObjectReturnedByStaticMethod(ConfigParser.java:653)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:605)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.argList(ConfigParser.java:1087)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:803)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readMethod(ConfigParser.java:812)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:771)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readProperty(ConfigParser.java:874)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatement(ConfigParser.java:759)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readStatements(ConfigParser.java:752)
// com.devexperts.evolution.utils.configencoder.ConfigParser.getExpressionWithStatements(ConfigParser.java:1108)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readNewInstance(ConfigParser.java:979)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpression(ConfigParser.java:514)
// com.devexperts.evolution.utils.configencoder.ConfigParser.readExpressions(ConfigParser.java:447)
// com.devexperts.evolution.utils.configencoder.ConfigParser.parse(ConfigParser.java:91)
// com.devexperts.evolution.utils.configencoder.ConfigDecoder.readObject(ConfigDecoder.java:178)
// com.devexperts.toschart.model.persistence.SimpleCompactChartPersistence.readObject(SimpleCompactChartPersistence.java:21)
// com.devexperts.toschart.model.persistence.CompactChartPersistence$$Lambda$2401.apply()
// com.devexperts.toschart.model.persistence.CompactChartPersistence.decodeObject(CompactChartPersistence.java:308)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeObject(PersistenceFacade.java:137)
// com.devexperts.toschart.model.persistence.PersistenceFacade.decodeFromString(PersistenceFacade.java:153)
// com.devexperts.toschart.facade.Charting.decodeNode(Charting.java:223)
// com.devexperts.tos.ui.user.techchart.ChartGadget.lambda$configureInternal$5(ChartGadget.java:825)
// com.devexperts.tos.ui.user.techchart.ChartGadget$$Lambda$2612.run()
// java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
// java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
// java.lang.Thread.run(Thread.java:829)

// =================== _098b417f_724d_45bc_98ee_23929285a751Study ===============================

// java.lang.Class.getDeclaredConstructors0(Native Method)
// java.lang.Class.privateGetDeclaredConstructors(Class.java:3137)
// java.lang.Class.getConstructor0(Class.java:3342)
// java.lang.Class.newInstance(Class.java:556)
// jdk.internal.reflect.MethodAccessorGenerator$1.run(MethodAccessorGenerator.java:404)
// jdk.internal.reflect.MethodAccessorGenerator$1.run(MethodAccessorGenerator.java:394)
// java.security.AccessController.doPrivileged(Native Method)
// jdk.internal.reflect.MethodAccessorGenerator.generate(MethodAccessorGenerator.java:393)
// jdk.internal.reflect.MethodAccessorGenerator.generateConstructor(MethodAccessorGenerator.java:92)
// jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:55)
// jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
// java.lang.reflect.Constructor.newInstance(Constructor.java:490)
// java.security.Provider.newInstanceUtil(Provider.java:176)
// java.security.Provider$Service.newInstance(Provider.java:1894)
// java.security.SecureRandom.getDefaultPRNG(SecureRandom.java:290)
// java.security.SecureRandom.<init>(SecureRandom.java:219)
// sun.security.ssl.JsseJce.getSecureRandom(JsseJce.java:286)
// sun.security.ssl.SSLContextImpl.engineInit(SSLContextImpl.java:97)
// javax.net.ssl.SSLContext.init(SSLContext.java:297)
// org.apache.http.ssl.SSLContexts.createDefault(SSLContexts.java:55)
// org.apache.http.impl.client.HttpClientBuilder.build(HttpClientBuilder.java:966)
// org.apache.http.impl.client.HttpClients.createDefault(HttpClients.java:58)
// com.devexperts.tos.ui.user.centrals.TimeSalesCentral.createTimeSalesEntity(TimeSalesCentral.java:237)
// com.devexperts.tos.ui.user.centrals.TimeSalesCentral.eventsReceived(TimeSalesCentral.java:202)
// com.dxfeed.api.DXFeedSubscription.processEvents(DXFeedSubscription.java:674)
// com.dxfeed.api.DXFeed.processEvents(DXFeed.java:676)
// com.dxfeed.api.impl.DXFeedImpl.access$2200(DXFeedImpl.java:63)
// com.dxfeed.api.impl.DXFeedImpl$EventProcessor.process(DXFeedImpl.java:1045)
// com.dxfeed.api.impl.DXFeedImpl$EventProcessor.executeTask(DXFeedImpl.java:886)
// com.dxfeed.api.impl.DXFeedImpl$EventProcessor.run(DXFeedImpl.java:865)
// java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:313)
// java.awt.EventQueue.dispatchEventImpl(EventQueue.java:770)
// java.awt.EventQueue$4.run(EventQueue.java:721)
// java.awt.EventQueue$4.run(EventQueue.java:715)
// java.security.AccessController.doPrivileged(Native Method)
// java.security.ProtectionDomain$JavaSecurityAccessImpl.doIntersectionPrivilege(ProtectionDomain.java:85)
// java.awt.EventQueue.dispatchEvent(EventQueue.java:740)
// java.awt.EventDispatchThread.pumpOneEventForFilters(EventDispatchThread.java:203)
// java.awt.EventDispatchThread.pumpEventsForFilter(EventDispatchThread.java:124)
// java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:113)
// java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:109)
// java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:101)
// java.awt.EventDispatchThread.run(EventDispatchThread.java:90)



// TODO:
//      conexion al socket
//      credenciales
//      enviar y leer datos del socket
//      datos del watchlist (Volumen, price, close)
//      datos VWAP, SMA
//      datos TimeSalesCentral
//      crear application java y javascript
