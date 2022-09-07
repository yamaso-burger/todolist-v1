let bodyParser = require ('body-parser');
let express = require('express');

const app = express();
let port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = ['Add what you going to do!'];
let isFirstAdd = true;

app.get('/', (req, res)=>{

    let today = new Date();
    let currentDay = today.getDay();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    res.render("list", {kindOfDay: day, newItems: items});
});

app.post('/', (req, res)=>{
    if(isFirstAdd) {
        isFirstAdd = false;
        items = [];
    }
    items.push(req.body.newItem);

    res.redirect("/");
});

app.listen(port, ()=>{
    console.log('Running on port ' + port);
});