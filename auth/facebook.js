var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var Users = require('../models/users');

passport.use(new FacebookStrategy({
    clientID: "989045304612764",
    clientSecret: "ec05b1139c43236b85e69a465711bc6a",
    callbackURL: "http://127.0.0.1:5000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("Profile: ", profile)
    // Users.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));

module.exports = passport;