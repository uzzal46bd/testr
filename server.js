var path = require('path');
var express = require('express');

var app = express();
//m46bd

app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 8080);
//uzz46bd

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

//Change from main ma46