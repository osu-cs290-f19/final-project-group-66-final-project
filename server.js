var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var postData = require('./postData');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());
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

app.post('/addPhoto', function (req, res, next) {
  if (postData) {
    console.log("== req.body:", req.body);
    if (req.body && req.body.tel && req.body.email && req.body.gender && req.body.photoURL && req.body.description && req.body.blog) {
      postData.push({
        tel: req.body.tel,
        email: req.body.email,
        gender: req.body.gender,
        photoURL: req.body.photoURL,
        description: req.body.description,
        blog: req.body.blog
      });
      console.log("== postData[person]:", postData);
      fs.writeFile(
        __dirname + '/postData.json',
        JSON.stringify(postData, 2, null),
        function (err) {
          if (!err) {
            res.status(200).send();
          } else {
            res.status(500).send("Failed to write data on server side.");
          }
        }
      );
    } else {
      res.status(400).send("Request body needs enough information.");
    }
  } else {
    next();
  }
});

app.get('/:person', function (req, res, next) {
  var person = req.params.person.toLowerCase();
  var n = postData[person];
  if (postData[person]) {
    templateArgs = {
      lol: [n],
      showFilter: false,
      showModal: true
    };     
    res.status(200).render('postPage', templateArgs);
  } else {
    next();
  }
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
