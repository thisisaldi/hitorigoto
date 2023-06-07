const express = require('express');
const controller = require("./controller")
const router = express.Router();
const { createAccountValidator, loginValidator } = require('./util/validator');

router.get("/", controller.homepage);

router.post("/login", loginValidator, controller.getAccount);
router.post("/register", createAccountValidator, controller.createAccount);

router.delete('/login/:username', controller.deleteAccount);

module.exports = router;
