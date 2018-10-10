var express          =  require('express');
var router           =  express.Router();
var commoncontroller =  require('../controller/commonController');






//router
router.post('/api/user/register', commoncontroller.registerUser);
router.post('/api/user/login', commoncontroller.loginUser);
 router.post('/api/user/resetpassword', commoncontroller.resetpassword);
router.post('/api/user/event', commoncontroller.event);
router.post('/api/user/forgetpassword', commoncontroller.forgetPassword);




module.exports = router;

