var express = require('express');
var app = express();

app.get('/nickname', function(request,response){
  response.send('Hello talented eagle')  
});
app.get('/', function(request, response){
    response.send('Hello MGT-656! I am a complete ninja now!');
});

app.listen(process.env.PORT || 4000);