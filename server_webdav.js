const jsDAV = require("jsDAV");
const cors_proxy = require('cors-anywhere');
//jsDAV.debugMode = true;

jsDAV.createServer({
    node: __dirname + "/data"
}, 8000);

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    //requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(7769, '0.0.0.0', function() {
    console.log('Running CORS Anywhere on 0.0.0.0:7769');
});