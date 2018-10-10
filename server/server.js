var express = require('express');
var app   = express();
var bodyParser = require('body-parser');
var commonRoutes = require('./routes/commonroutes');
var router        =  express.Router();


//
app.get('/', (req, res)=>{
    console.log('welcome to appliction');
    res.send('welcome to Dashboard ');
})

// import all routes
app.all('*', commonRoutes);

//listen
app.listen(5000, ()=>{
    console.log('application has been started successsfully 5000');
})