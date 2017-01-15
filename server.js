var express  = require('express');
var app = express(); 
var cors = require('cors');

app.use(cors());

app.get('/api/todos', function(req, res) {

    console.log("fetching todos");

    res.json([{"title": "buy bread"}, {"title": "clean the house"}, {"title": "feed the dog"}]);

});

app.listen(8080);
console.log("App listening on port 8080");