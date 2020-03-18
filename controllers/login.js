module.exports = (app) => {

    const passport = require('passport')

    app.get('/', (req, res) => {
        res.render('login', {
            isListEnabled: true,
            style: 'login.css'
        });
    })

    app.get('/signup', (req, res) => {
        res.render('signup', {
            isListEnabled: true,
            style: 'signup.css'
        });
    })

    app.get('/forget-password', (req, res) => {
        res.render('forget-password', {
            isListEnabled: true,
            style: 'forget-pasword.css'
        });
    })

    app.get(
        '/auth/spotify',
        passport.authenticate('spotify', {
            scope: ['user-read-email', 'user-read-private'],
            showDialog: true
        }),
        function(req, res) {
            // The request will be redirected to spotify for authentication, so this
            // function will not be called.
        }
    );
    app.get(
        '/auth/spotify/callback',
        passport.authenticate('spotify', { failureRedirect: '/' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/home');
        }
    );
}