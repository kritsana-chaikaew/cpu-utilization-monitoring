var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('js'));
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(8080, "0.0.0.0");
console.log('listening on 8080');
