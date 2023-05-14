//jshint esversion:6

const express = require("express")
const https = require("https")
const bodyParser = require("body-parser")

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
  res.render('thank-you.ejs', { chosenRating: chosenRating });
})

app.listen(process.env.PORT || 5415, function () {
  console.log("Server is running")
})