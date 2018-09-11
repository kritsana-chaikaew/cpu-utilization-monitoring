const reader = require('./reader.js');
const sender = require('./sender.js');
const indexer = require('./indexer.js');

let buffer = [];

reader.now((value) => {
    var data = {time: Date.now(), value:value*100};
    sender.broadcast(JSON.stringify(data));
    
    buffer.push(data);
    if (buffer.length >= 1000) {
        indexer.bulk(buffer);
        buffer.length = 0;
    }
});
