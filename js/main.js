var socket = io.connect('http://192.168.1.3:4000');
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var option = null;

var buffer = [];

option = {
    title: {
        text: 'CPU Usage'
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: 'cpu',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: buffer
    }]
};

socket.on('broadcast', function(data) {
    data = JSON.parse(data);
    var date = new Date(data["name"]);
    var second = date.getSeconds().toString();
    var minute = date.getMinutes().toString();
    var hour = date.getHours().toString();
    data["name"] = hour + ":" + minute + ":" + second; 

    console.log(data);

    if (buffer.length < 10) {
        buffer.push(data);
    } else {
        buffer.shift();
        buffer.push(data);

        myChart.setOption({
            series: [{
                data: buffer
            }]
        });
    }
});

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

