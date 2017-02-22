// Setup application
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//imported files 
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(middleware.addHeaders);


app.get('/name', mainCtrl.getName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
// app.get('/occupations', mainCtrl.getLatestOccupation)
// app.get('/hobbies', mainCtrl.getHobbies)



app.listen(9000, function(){
    console.log('listening on port 9000');
});