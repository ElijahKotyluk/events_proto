const router = require("express").Router();
const dbController = require("../../controllers/dbController.js");

router.route('/')
    .get(dbController.findAll)
    
module.exports = router