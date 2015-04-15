var express = require("express"),
    jade = require('jade'),
    morgan = require('morgan'),
    fs = require('fs'),
    path = require('path'),
    app = module.exports = express();

app.set('view engine', 'jade');
app.use(morgan('combined'));

app.get(/homework\/(one|two)/, function(req,res) {
  var id = req.params[0];
  res.render('homework/' + id, { title: 'Intro to Javascript', subtitle: 'Homework for Class ' + id });
});

app.get(/classes\/(one|two)/, function(req,res) {
  var id = req.params[0];
  res.render('class', { data: '/data/class-' + id + '.md' });
});

app.get('/', function (req,res) {
  res.render('index', { title: 'Intro to Javascript' });
});


app.use("/", express.static(__dirname));

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
