	var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var FacebookTokenStrategy = require('passport-facebook-token').Strategy;

exports.setup = function (User, config) {
  passport.use(
    new FacebookTokenStrategy(
      {
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        enableProof: true
      },
  
      function(accessToken, refreshToken, profile, done) {
        User.findOne({
            'facebook.id': profile.id 
          },
          function(err, user) {
            if (err) {
              return done(err);
            }
            if (!user) {
              user = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                loc : { coordinates : [0,0]},
                role: 'user',
               // id: profile.id,
                provider: 'facebook',
                facebook: profile._json,
                facebook_accesstoken : accessToken
              });
              user.save(function(err) {
                if (err) done(err);
                return done(err, user);
              });
            } else {
              user.facebook_accesstoken = accessToken;
              user.save( function( err ) {
                return done( err, user);
              });
            }
          }
        )
      }
    ) 
  );

  passport.use(
    new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL: config.facebook.callbackURL
      },
      function(accessToken, refreshToken, profile, done) {
        console.log(accessToken);
        User.findOne({
          'facebook.id': profile.id
        },
        function(err, user) {
          if (err) {
            return done(err);
          }
          if (!user) {
            user = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              role: 'user',
			loc : { coordinates : [0,0]},
              username: profile.username,
              provider: 'facebook',
              facebook: profile._json,
              facebook_accesstoken: accessToken
            });
            user.save(function(err) {
              if (err) done(err);
              return done(err, user);
            });
          } else {
            user.facebook_accesstoken = accessToken;
            user.save( function( err ) {
              return done( err, user);
            })
          }
        })
      }
    )
  )
}
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done();
});