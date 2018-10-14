var express          =  require('express');
var router           =  express.Router();
var commoncontroller =  require('../controller/commonController');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' })
var app   = express()
//app.use(express.static('data/img'));
app.use(express.static(__dirname + 'uploads'))
//storage
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })

  //var upload   =  multer({ dest: 'uploads/' });
var upload = multer({ storage: storage });

router.get('/uploads', function(req, res){
    res.sendFile('index.html');
});


router.post('/api/darshan/daily', upload.any(),function(req, res, next){
    console.log('upload API Called');
    console.log(req.files);
    res.send('success');
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

