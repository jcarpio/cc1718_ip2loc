var restify = require('restify');
var ip2loc = require("ip2location-nodejs");



function respond(req, res, next) {
  ip2loc.IP2Location_init("/home/ec2-user/cc1718_ip2loc/data/IP2LOCATION-SAMPLE-DB24.BIN");

  tmp  = "{";
  result = ip2loc.IP2Location_get_all(req.params.ip);
  for (var key in result) {
      tmp +="{\"" + key + "\": \"" + result[key] + "\"},";
  }
  tmp = tmp.slice(0, -1); 
  tmp += "}"; 
  res.json(tmp);

  next();
}

var server = restify.createServer();
server.get('/text/:ip', respond);
server.head('/text/:ip', respond);

server.listen(80, function() {
  console.log('%s listening at %s', server.name, server.url);
});
