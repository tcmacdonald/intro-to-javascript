var express = require("express"),
    jade = require('jade'),
    morgan = require('morgan'),
    fs = require('fs'),
    path = require('path'),
    app = module.exports = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade');
app.use(morgan('combined'));

app.get(/classes\/(one|two|three|four)/, function(req,res) {
  var id = req.params[0];
  res.render('classes/' + id, { id: id, title: 'Class ' + id });
});

app.get(/homework\/(one|two|three)/, function(req,res) {
  var id = req.params[0];
  res.render('homework/' + id, { id: id, title: 'Homework for Class ' + id });
});

app.get(/slides\/(one|two|three|four)/, function(req,res) {
  var id = req.params[0];
  res.render('slides', { id: id, data: '/data/class-' + id + '.md' });
});

app.get('/', function (req,res) {
  res.render('index', { id: 'overview' });
});


app.use("/", express.static(__dirname));

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
