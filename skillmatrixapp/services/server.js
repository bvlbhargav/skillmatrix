var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");
var mongoUtil = require('./config/mongoUtil.js');

// parse application/json
app.use(bodyParser.json())

mongoUtil.connectToServer(function (err) {
    // start the rest of your app here
});

// User Skills Services
require("./ServiceModules/userskills.js")(app, express)

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})