//jshint esversion:6

// Requiring our two packages
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// Creating our app constant
const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

// Body Parser set up
app.use(bodyParser.urlencoded({extended: true}));

// Telling express to serve up the files at folder "Public" as a static resource
app.use(express.static("public"));

// Tells our app to use EJS as it's view engine/ part of the ejs documentation
app.set('view engine', 'ejs');

// Get route sends the logic code we run on the server end to the front end
app.get("/", function(req, res) {

    let day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {

  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
  // When a post request is triggered on our home route this will save the value of new item in the text box and redirect to the home route which will then trigger our app.get and it will res.render the list template
  res.redirect("/");
  }
});


app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: "workItems"});
});

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

// Listening on port 3000 and console logging
app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
