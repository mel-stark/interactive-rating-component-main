//jshint esversion:6

import express from "express";
import https from "https";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static("public"))

app.set('view engine', 'ejs') /* installing ejs */

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post('/thank-you', function(req, res) {
  var chosenRating = req.body.rating;
  res.render("thank-you.ejs", { chosenRating: chosenRating });
})

app.listen(process.env.PORT || 5415, function () {
  console.log("Server is running")
})