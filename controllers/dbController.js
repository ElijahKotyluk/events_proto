const db = require("../models")
console.log(db)
module.exports = {
    findAll(req, res) {
        db.Users.findAll({})
            .then(data => {
                res.json(data)
            })

    }
}