const expresss = require('express');

const app = express();
const exphbs = require('express-handlebars');

app.listen(process.env.PORT, () => {
    console.log('Reddit listening on port localhost:3000!');
});

module.exports = app;