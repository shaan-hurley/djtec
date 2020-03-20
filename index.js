const express = require('express'),
    session = require('express-session'),
    passport = require('passport'),
    swig = require('swig');

const SpotifyStrategy = require('passport-spotify').Strategy;

const app = express();
const port = 3000;
const exphbs = require('express-handlebars');

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

passport.use(
    new SpotifyStrategy({
        clientID: '714e98040b9d4e539293952098fc18e6',
        clientSecret: '936f88c36750430e99fae3ba100aaaf0',
        callbackURL: 'http://localhost:3000/auth/spotify/callback'
        //Uncomment when pushing to heroku, make sure to comment out the line above
        // callbackURL: 'https://dj-tech.herokuapp.com/auth/spotify/callback'
    },
        function (accessToken, refreshToken, expires_in, profile, done) {
            process.nextTick(function () {
                // To keep the example simple, the user's spotify profile is returned to
                // represent the logged-in user. In a typical application, you would want
                // to associate the spotify account with a user record in your database,
                // and return that user instead.
                return done(null, profile);
            });
        }
    )
);

//uncomment this when pushing heroku
// const port = process.env.PORT
// const mongoose = require('mongoose')
// const mongo_uri = process.env.MONGODB_URI
// mongoose.connect(mongo_uri)


app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')



// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());



require('./controllers/login.js')(app);
require('./controllers/home.js')(app);

app.listen(port, () => {
    console.log('Connected to localhost:3000!');
});

module.exports = app;