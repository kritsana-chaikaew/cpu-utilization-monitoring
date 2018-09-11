const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
    console.log('connected');
});

ws.on('message', function incomming(data) {
    console.log('from server: %s', data);
});
