const reader = require('./modules/reader.js');
const sender = require('./modules/sender.js');
const indexer = require('./modules/indexer.js');

let buffer = [];

reader.now((value) => {
    var data = {name: Date.now(), value:value*100};
    sender.broadcast(JSON.stringify(data));
    
    buffer.push(data);
    if (buffer.length >= 1000) {
        indexer.bulk(buffer);
        buffer.length = 0;
    }
});
