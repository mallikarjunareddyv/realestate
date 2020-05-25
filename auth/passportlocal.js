const {Strategy} = require('passport-local');
const passport = require('passport')
const desalt= require('crypto')
const UserDetails=require('../models/userdata')
var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017";
module.exports = function locStragey(){
passport.use(new Strategy((username,password,done) =>
{
        UserDetails.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }

          var mykey = desalt.createDecipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update(user.password, 'hex', 'utf8')
mystr += mykey.final('utf8');
console.log(mystr+ 'input = '+ password);
        if(user.username === username && mystr === password){
          return done(null, user);
        }
        else {
         return done(null, false);
        }
        });
})
)}
     
