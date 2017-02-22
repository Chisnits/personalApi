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
app.get('/getLatestOccupation', mainCtrl.getLatestOccupation)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbiesType)
app.get('/family', mainCtrl.getFamily)
app.get('/family/:gender', mainCtrl.getFamilyGender)
app.get('/restaurants', mainCtrl.getRestaurants)



app.listen(9000, function(){
    console.log('listening on port 9000');
});