//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {
  const oneStar = req.body.oneStar
  const twoStar = req.body.twoStar
  const threeStar = req.body.threeStar
  const fourStar = req.body.fourStar
  const fiveStar = req.body.fiveStar

  res.send("hey")
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on port 3000.");
});
