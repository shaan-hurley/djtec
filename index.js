const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');


app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')






require('./controllers/home.js')(app);
require('./controllers/login.js')(app);

app.listen(port, () => {
    console.log('Connected to localhost:3000!');
});

module.exports = app;