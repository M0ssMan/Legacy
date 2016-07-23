var express = require('express');
var app = express();

var portSet = 8080;

app.set('port', portSet)

app.use(function(req, res, next){
  console.log('received a ' + req.method + ' request on url ' + req.path);
  next();
})

app.use(function(req, res, next){
  console.log(req.headers);
  res.writeHead(200, {
    'Set-Cookie': "myCookieTest",
    'Content-Type': 'text/plain'
  })
  res.end('Hello World')
})

app.get('/', express.static('./client'));

app.listen(app.get('port'), function(){
  console.log('listening on port ' + portSet);
})
