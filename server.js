/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Xinwei Lin
 * Email: linxinw@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var port = process.env.PORT || 3000;

var postsData = require('./postData');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.get('/index.html', function (req, res, next) {
    res.render('content', {
        postData: postsData
    });
    res.status(200);
});

app.get('/404.html', function (req, res, next) {
    res.render('404');
    res.status(200);
});

app.get('/posts/:number', function (req, res, next) {
    var number = req.params.number;
    if (number >= 0 && number <= 7) {
        res.render('single', {
            postInfo: postsData[number]
        });
        res.status(200);
    }
    else {
        next();
    }
});


app.get('*', function (req, res) {
    res.render('404');
    res.status(404);
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
