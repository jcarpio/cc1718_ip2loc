var restify = require('restify');
var ip2loc = require("ip2location-nodejs");



function respond(req, res, next) {
  ip2loc.IP2Location_init("/home/ec2-user/ip2location/data/IP2LOCATION-SAMPLE-DB24.BIN");


  result = ip2loc.IP2Location_get_all(req.params.ip);
  for (var key in result) {
      res.send(key + ": " + result[key]);
  }
  
  next();
}

var server = restify.createServer();
server.get('/text/:ip', respond);
server.head('/text/:ip', respond);

server.listen(80, function() {
  console.log('%s listening at %s', server.name, server.url);
});
