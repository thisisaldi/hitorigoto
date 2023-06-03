const express = require('express');
const controller = require("./controller")
const users = require ("./user");
const router = express.Router();
const { checkSchema } = require('express-validator');

router.get("/");
router.get("/register");
router.get("/login/:username", controller.getAccount);

router.post(
  "/register",
  checkSchema({
    username: {
      notEmpty: {
        errorMessage: "Please fill in the username!",
        bail: true
      },
      isLength: { 
        options: { min: 4 },
        errorMessage: "Username should be at least 4 characters!",
        bail: true
      },
      isAlphanumeric: {
        errorMessage: "Username should not contains any symbols!",
        bail: true
      },
      custom: { 
        options: async username => {
          const exist = await users.find(user => username === user.username);
          if(exist) {
            throw new Error ("Username already exists!");
          }
        }
      }
    },
    email: {
      notEmpty: {
        errorMessage: "Please fill in the email!",
        bail: true
      },
      isEmail: true,
      errorMessage: "Invalid email format!",
      custom: { 
        options: async email => {
          const exist = await users.find(user => email === user.email);
          if(exist) {
            throw new Error ("Email already exists!");
          }
        }
      }
    },
    password: {
      notEmpty: {
        errorMessage: "Please fill in the password!",
        bail: true
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 0
        },
        errorMessage: "Password should be at least 6 characters and contains at least an uppercase, lowercase, and number!"
      },
    }
  }),
  controller.createAccount);

// router.delete('/login/:username', controller.deleteAccount);

module.exports = router;
