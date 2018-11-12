// const db = require("../models")

module.exports = {
    findAll(req, res) {
        console.log('findall runs')
        res.json({body:"Hello from the custom server!"});
    }
}