var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
      res.send('Hello');
});

exports.broadcast = (data) => {
    io.sockets.emit('broadcast', data);
}

http.listen(4000, "0.0.0.0", function(){
      console.log('listening on 4000');
});
