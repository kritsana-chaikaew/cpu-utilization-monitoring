const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

exports.broadcast = (data) => {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};
