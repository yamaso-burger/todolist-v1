let bodyParser = require ('body-parser');
let express = require('express');
const date = require(__dirname + "/date.js");



const app = express();
let port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = ['Add what you going to do!'];
let isFirstAdd = true;
let workItems = [];

app.get('/', (req, res)=>{

    // let today = new Date();
    // let currentDay = today.getDay();
    // let options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // };

    // let day = today.toLocaleDateString("en-US", options);
    let day = date.getDay();
    res.render("list", {listTitle: day, newItems: items});
});

app.post('/', (req, res)=>{
    let item = req.body.newItem
    if (req.body.list === "Work") {
        workItems.push(item);

        res.redirect("/work");
    } else {

        if(isFirstAdd) {
            isFirstAdd = false;
            items = [];
        }
        items.push(item);
    
        res.redirect("/");
    }
});

app.get("/work", (req, res)=>{
    res.render("list", {listTitle: "Work List", newItems: workItems});
});

app.post("/work", (req, res)=>{
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", (req, res)=>{
    res.render("about");
})

app.listen(port, ()=>{
    console.log('Running on port ' + port);
});