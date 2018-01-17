var ip2loc = require("ip2location-nodejs");
 
ip2loc.IP2Location_init("/home/ec2-user/ip2location/data/IP2LOCATION-SAMPLE-DB24.BIN");
 
testip = ['8.8.8.8'];
for (var x = 0; x < testip.length; x++) {
    result = ip2loc.IP2Location_get_all(testip[x]);
    for (var key in result) {
        console.log(key + ": " + result[key]);
    }
}
