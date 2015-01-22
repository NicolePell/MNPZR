var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res){
  res.render('index')
});

var port = process.env.PORT || 3000 
if(app.listen(port)){
  console.log('Listening on port: ' + port);
};
