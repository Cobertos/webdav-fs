const webdav = require('webdav-server').v2;
const express = require('express');

const server = new webdav.WebDAVServer({
    rootFileSystem: new webdav.PhysicalFileSystem('./data')
});
const app = express();

// Mount the WebDAVServer instance
app.use(webdav.extensions.express('/somewhere', server));
app.listen(8000); // Start the Express server
