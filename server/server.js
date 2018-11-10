var express = require('express');
var app   = express();
var bodyParser = require('body-parser');
var commonRoutes = require('./routes/commonroutes');
var router        =  express.Router();
var path = require('path');
var nodemon = require('nodemon');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' })
// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
app.get("/", express.static(path.join(__dirname, "/public/uploads")));
app.use("/public",express.static(__dirname + '/public/uploads'));

app.use('/uploads', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));


//Internal dependencies
var config = require('./config/config.js');
var db = require('./utils/databaseConnection.js');




// config 
var envConfig = config.environmentConfig();
var port = envConfig.port;
var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '5mb', extended: true }));
// parse application/json
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));


app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With,X-XSRF-TOKEN, querycriteria, x-access-token");
    res.removeHeader("X-Powered-By");
    next();
});


// index page
app.get('/', (req, res)=>{
    console.log('welcome to application');
    res.send('welcome to Dashboard ');
})

//  getting images  from uploads fodler;l.k,jmnhgbfrkl;/.jyt4/.;klujte31
app.get('/', app.use("/public",express.static(__dirname + '/public/uploads')),function(req, res){
    res.send('succes to bring');
});

// import all routes
app.all('*', commonRoutes);

//listen

var server = app.listen(process.env.PORT || port, function () {
    console.log('server runnig on port:', port);
    db.connectToMongo();
  });
  
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
  
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.send(RESPONSE.sendResponse(false, false, null, err.message, STATUS_CODE.INTERNAL_SERVER_ERROR))
  });
  
  