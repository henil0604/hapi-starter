const Extension = get.modules("Extension");

module.exports = class RequestEnhancer extends Extension {

    constructor() {
        super({
            type: 'onRequest'
        });
    }

    get Handler() {
        return (request, h) => {

            return h.continue;
        }
    }


}