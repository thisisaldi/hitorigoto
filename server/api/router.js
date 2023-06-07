const express = require('express');
const controller = require("./controller")
const router = express.Router();
const { createAccountValidator, loginValidator } = require('./util/validator');

router.get("/", controller.homePage);
router.get("*", controller.invalidPage)

router.post("/login", loginValidator, controller.getAccount);
router.post("/register", createAccountValidator, controller.createAccount);

router.delete('/edit/:username', controller.deleteAccount);

module.exports = router;
