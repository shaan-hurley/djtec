const express = require('express');
const app = express();
// const port = 3000;
const exphbs = require('express-handlebars');

// const port = process.env.PORT





const mongoose = require('mongoose')
const mongo_uri = process.env.MONGODB_URI
mongoose.connect(mongo_uri)


app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

//comment


require('./controllers/login.js')(app);
require('./controllers/home.js')(app);

// app.listen(port)
app.listen(port, () => {
    console.log('Connected to localhost:3000!');
});

module.exports = app;