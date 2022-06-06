const { createAdapter } = require("webdav-fs");
const wfs = createAdapter("http://127.0.0.1:7769/http://127.0.0.1:8000", {});

wfs.readdir("/", "stat", function(err, c){
    if(err){ console.error(err); }
    else{ console.log(c); }
});
