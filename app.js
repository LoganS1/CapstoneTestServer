const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// set the view engine to ejs
app.set('view engine', 'ejs');

// set up public folder
app.use(express.static('public'));

//How to decode post request
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let data = [];

// ROUTES
app.get('/', function(req, res) {
  res.send("<p>" + data + "</p>");
});

app.post('/', function(req, res){
  let dataRecieved = req.body.data;
  console.log(dataRecieved);
  data.push(dataRecieved);
  res.status(200);
})

function close(){
  server.close();
}


let PORT = 8079;
let server = app.listen(PORT);
console.log('Server is listening on port ', PORT);