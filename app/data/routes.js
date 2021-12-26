const $Api = [
    get.routes("api/Root.js")
]

module.exports = [
    get.routes("Root.js"),
    ...$Api
]