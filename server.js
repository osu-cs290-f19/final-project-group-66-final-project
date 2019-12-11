var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');

var postData = require('./postData');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function (req, res, next) {
  templateArgs = {
    lol: postData,
    showFilter: true,
    showModal: true
  }; 
  res.status(200).render('postPage', templateArgs);
  console.log(postData);
  console.log("== postData", templateArgs);
});

app.get('*', function (req, res, next) {
  res.status(404).render('404');
});

app.listen(port, function (err) {
  if (err) {
    throw err;
  }
  console.log("== Server listening on port", port);
});
