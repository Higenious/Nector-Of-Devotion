var express    = require('express');
var userModel  =  require('../model/common').users;






//registerUser function

function registerUser(req, res){
    console.log('regisetr user ')
     var reqBody  = req.body;
     var user = reqBody.username
     userModel.find({email : user}, function(result, err){
         if(!err){
             res.send("user is Already Present");
               
         }
         else{
             throw err;
         }
     })
    res.send('Register user Here!')
}


// login user 

function loginUser(req, res){
    console.log('regisetr user ')
    res.send('Register user Here!')
}


function forgetPassword(req, res){
    console.log('regisetr user ')
    res.send('Register user Here!')
}



function resetpassword(req, res){
    console.log('regisetr user ')
    res.send('Register user Here!')
}



function event(req, res){
    console.log('regisetr user ')
    res.send('Register user Here!')
}








module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
module.exports.forgetPassword = forgetPassword;
module.exports.resetpassword = resetpassword;
module.exports.event = event;

