var express = require('express')
const fs = require("fs");

var app = express();

app.get('/get-mata-data/:module_name/:screen_name', function (req, res) {

    let module_name = req.params.module_name;
    let screen_name = req.params.screen_name;

    let pathOfFileToRead = '/ui-config/specification/' + module_name + '/' + screen_name;

    fs.readFile(__dirname + pathOfFileToRead + ".json", 'utf8', function (err, data) {
        if(err) {
            res.send("No such file present")  
        }
        res.send(JSON.parse(data));
        res.end(data);
        
    });

})

let server = app.listen(8080, function () {
    var port = server.address().port
    console.log("Server is listening at", port)
});