module.exports = (app) => {

    app.get('/dj-home', (req, res) => {
        res.render('dj-home');

    });

    app.get('/dj-playlist', (req, res) => {
        res.render('dj-playlist', {
            isListEnabled: true,
            style: 'dj-nav.css'
            
        });
    })
}