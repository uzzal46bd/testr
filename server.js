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

<<<<<<< HEAD
//Change from feature uzz46
//Change1 from feature uzz46
//Change from feature ma46
//Change from feature2 ma46
=======
//Change from main ma46
>>>>>>> main
