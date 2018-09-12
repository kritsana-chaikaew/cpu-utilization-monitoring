const io = require('socket.io-client');
const socket = io.connect('http://192.168.1.3:4000');

socket.on('broadcast', function incomming(data) {
    console.log('from server: %s', data);
});
