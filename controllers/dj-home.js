module.exports = (app) => {

    app.get('/dj-home', (req, res) => {
        res.render('dj-home');

    });
}