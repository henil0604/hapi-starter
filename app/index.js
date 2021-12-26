// Importing Hapi Server
const Hapi = require('@hapi/hapi');

// Initializing Environment Variables
const PORT = env("PORT") || 4001;
const HOST = env("HOST") || "localhost";

// Creating HAPI Server
const Server = Hapi.server({
    port: PORT,
    host: HOST,
    router: {
        stripTrailingSlash: true
    }
});

Server.state('data', {
    ttl: null,
    isSecure: true,
    isHttpOnly: true
});

Server.Boom = require("@hapi/boom")

// Exporting the Server
module.exports = Server;