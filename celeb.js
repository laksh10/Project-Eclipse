var port = 89,
express = require('express'),
app = express().use(express.static(__dirname + '/')),
http = require('http').Server(app);
 
 
app.use('/', function(req, res){
    res.sendFile(__dirname + '/celebrity.html');
});
app.use(function(req, res) {
    res.sendfile(__dirname + '/celebrity.html');
});
 
 
 
http.listen(port, function(){
    console.log("Node server listening on port " + port);
});