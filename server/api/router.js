const express = require('express');
const controller = require("./controller")
const router = express.Router();
const { createAccountValidator, loginValidator } = require('./validator');

router.get("/register");
router.get("/login", loginValidator, controller.getAccount);

router.post("/register", createAccountValidator, controller.createAccount);

router.delete("/:username", controller.deleteAccount);

module.exports = router;