var bodyParser = require ('body-parser');
var express = require('express');

const app = express();
var port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend";

    } else {
        day = "Weekday";

    }
    res.render("list", {kindOfDay: day});
});

app.listen(port, ()=>{
    console.log('Running on port ' + port);
});