var express = require('express');
var app = express();

var portSet = 8080;

app.listen(app.get('port'), function(){
  console.log('listening on port ' + portSet);
})
