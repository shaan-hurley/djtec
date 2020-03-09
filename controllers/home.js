

module.exports = (app) => {

    app.get('/home', (req, res) => {
        res.render('home', {
            isListEnabled: true,
            style: 'style.css'
            
        });
    })

    app.get('/', (req, res) => {
        res.render('login', {
            isListEnabled: true,
            style: 'login.css'
            
        });
    })


}