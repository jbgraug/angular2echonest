
var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8888;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));


// Dossier public pour servir des assets statiques
app.use("/", express.static(__dirname + "/src/public/"));

app.use('/*', function(req, res){
  res.sendFile(__dirname + '/src/public/index.html');
});


// 3…2…1…Démarrage
var server = http.createServer(app).listen(port, function() {
  console.log('Serveur Express sur le port ' + port);
});