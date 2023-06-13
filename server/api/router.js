const express = require('express');
const controller = require("./controller")
const upload = require('./util/upload.js')
const router = express.Router();
const { createAccountValidator, loginValidator } = require('./util/validator');

router.get("/", controller.homePage);
router.get("/edit/:username", controller.getAccount);
router.get("*", controller.invalidPage);

router.post("/login", loginValidator, controller.loginAccount);
router.post("/register", createAccountValidator, controller.createAccount);
router.post("/edit/:username", upload, controller.editAccount);

router.delete('/edit/:username', controller.deleteAccount);

module.exports = router;
