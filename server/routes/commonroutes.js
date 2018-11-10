var express          =  require('express');
var router           =  express.Router();
var commoncontroller =  require('../controller/commonController');
var multer = require('multer');
var app   = express()
router.use(express.static(__dirname + '/public/uploads'));
router.use('/uploads', express.static(__dirname + '/public'));

//Storage
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })

var upload = multer({ storage: storage });

router.get('/upload', function(req, res){
    res.sendFile('index.html');
});

router.post('/api/darshan/daily', upload.any(), function (req, res, next) {
    // req.body contains the text fields
    console.log('upload API Called');
    console.log(req.files);
    var response = {
      message: "files uploaded successfully",
      statuscode :200,
      status      : true
       
    }
    res.send(response);
  });


 router.get("/image.png", (req, res) => {
  res.sendFile(path.join(__dirname, "./uploads/image.png"));
});




//router
router.post('/api/user/register', commoncontroller.registerUser);
router.post('/api/user/login', commoncontroller.loginUser);
router.post('/api/user/resetpassword', commoncontroller.resetpassword);
router.post('/api/user/event', commoncontroller.event);
router.post('/api/user/forgetpassword',commoncontroller.forgetPassword);
//router.post('/api/darshan/daily',  upload.any(),commoncontroller.dailyDarshan);
router.get('/api/daily/darshan',commoncontroller.dailyDarshan);




module.exports = router;

