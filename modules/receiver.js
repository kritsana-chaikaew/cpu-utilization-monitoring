const io = require('socket.io-client');
const socket = io.connect('http://0.0.0.0:4000');

socket.on('broadcast', function incomming(data) {
    console.log('from server: %s', data);
});
