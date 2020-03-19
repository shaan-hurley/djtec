module.exports = (app) => {

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
}