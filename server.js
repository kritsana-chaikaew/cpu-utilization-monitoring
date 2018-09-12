var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('js'));
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(8080, "192.168.1.3");
console.log('listening on 8080');
