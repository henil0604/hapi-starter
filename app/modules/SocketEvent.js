const JOI = require("joi");

const ConfigSchema = JOI.object({

})

const ValidateConfig = (Config = {}) => {

    const Data = ConfigSchema.validate(Config);

    if (Data.error) {
        throw new Error(Data.error.message);
    }

    return Data.value;
}



const SocketEvent = class {

    constructor(Config) {
        this.Config = ValidateConfig(Config);
    }

    createEvent() {
        return this.Socket.on(this.EventName, this.Handler);
    }

    get Handler() {
        return () => { };
    }

    get EventName() {
        return null;
    }

}

module.exports = SocketEvent;