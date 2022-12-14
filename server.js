//Install express server
const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express();

app.use(cors())
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-test2'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'./dist/angular-test2/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);
