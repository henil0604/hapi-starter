const SocketEvent = get.modules('SocketEvent');

module.exports = class Hello extends SocketEvent {

    constructor() {
        super();
    }

    get Handler() {
        return (data) => {
            return this.Socket.emit("hello", "Hello From Server");
        }

    }

    get EventName() {
        return 'hello'
    }


}