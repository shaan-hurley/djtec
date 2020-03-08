const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');

app.get('/', (req, res)=> res.send('hello world'))

app.listen(port, () => {
    console.log('Reddit listening on port localhost:3000!');
});

module.exports = app;