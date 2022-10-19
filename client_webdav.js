// const { createAdapter } = require("webdav-fs");
// const wfs2 = createAdapter("http://127.0.0.1:8000/somewhere/", {});

// wfs2.readdir("level1/", "stat", function(err, c){
//     if(err){ console.error(err); }
//     else{ console.log(c); }
// });

const { createClient } = require("webdav");

const client = createClient(
    "http://127.0.0.1:8000/somewhere/",
);
async function t(){
    const directoryItems = await client.getDirectoryContents("level1/");
    console.log(directoryItems);
}
t();