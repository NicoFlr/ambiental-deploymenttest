// server.js
const express = require('express');
const path = require('path');
const app = express();// Run the app by serving the static files
// in the dist directory
//app.use(express.static(__dirname + '/dist'));// Start the app by listening on the default
// Heroku port
//app.get('/*', function(req, res) {
  //  res.sendFile(path.join(__dirname + '/dist/index.html'));
//});

//app.listen(process.env.PORT || 8080);

//app.get('*', routes.index);
//Install express server

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ambiental-deploymenttest'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/ambiental-deploymenttest/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);