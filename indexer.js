const elasticsearch = require('elasticsearch');
const index = "cpu_usage";

const client = new elasticsearch.Client({
        host: '192.168.1.3:9200',
});

exports.bulk  = (data) => {
    var body = [];
    data.forEach(function(value){
        body.push({ index: { _index: index } });
        body.push(value);
    });

    client.bulk({
        type: "_doc",
        body: body 
    })
    .then(function (resp) {
        console.log(resp);
    });
}
