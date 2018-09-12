const os = require('os-utils');

exports.now = (cb) => {
    setInterval( () => {
        os.cpuUsage(function (value) {
            cb(value);    
        });
    }, 1000);
};

