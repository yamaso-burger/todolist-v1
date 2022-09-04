var bodyParser = require ('body-parser');
var express = require('express');

const app = express();
var port = 3000;

app.get('/', (req, res)=>{

    var today = new Date();
    var currentDay = today.getDay();
    if (currentDay === 6 || currentDay === 0) {
        res.sendFile(__dirname + "/weekend.html");
    } else {
        res.sendFile(__dirname + "/weekday.html");
    }
});

app.listen(port, ()=>{
    console.log('Running on port ' + port);
});