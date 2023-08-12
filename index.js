const express = require('express')
const app = express()
const routes = require("./routes/routes");
const database = require('./database');
const port = process.env.PORT || 3000;
var path = require("path");


app.use(express.json());
//app.use('/', express.static(path.join(__dirname+"/client/build/")));
app.use(function (req, res, next) {
  //Enabling CORS 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,DELETE,OPTIONS,POST,PUT,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
  next();
});


routes(app);

app.listen(port, function() {
    console.log(`listening on ${port}`)
  })