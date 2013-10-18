var http = require('http');
var express = require('express');

var app = express();
app.use(express.static(__dirname));

var server = http.createServer(app);
server.listen(80);

app.get('/test', function (req, res) {
    console.log(req);
    res.send({
        success: true,
        results: [
            {name: 'a'},
            {name: 'b'},
            {name: 'c'},
            {name: 'd'}
        ]
    });
});
