var bodyParser = require ('body-parser');
var express = require('express');

const app = express();
var port = 3000;

app.get('/', (req, res)=>{

    var today = new Date();
    var currentDay = today.getDate();
    if (currentDay === 6 || currentDay === 0) {
        console.log(today.get);
        res.write("<h1>Yay, it's the weekend!</h1>");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(port, ()=>{
    console.log('Running on port ' + port);
});