

module.exports = (app) => {

    app.get('/home', (req, res) => {
        res.render('home', {
            isListEnabled: true,
            style: 'style.css'
            
        });
    })


}