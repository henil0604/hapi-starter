
module.exports = () => {

    const io = require("socket.io")(Server.listener);

    globalThis.io = io;

    io.EventInstances = [];

    // Setting Up Connection Module
    const ConnectionHandler = get.sockets("Connection");

    io.on('connection', (socket) => {

        ConnectionHandler(socket);

        const SocketEvents = get.data("socketEvents");

        SocketEvents.forEach(Event => {
            const E = new Event();
            E.Socket = socket;
            E.createEvent();
            io.EventInstances.push(E);
        })

    })



}