const bcrypt = require('bcrypt');
const users = require('./user');
const { validationResult } = require('express-validator');

const createAccount = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const hash = await bcrypt.hash(req.body.password, 10);
    const errorResult = validationResult(req).formatWith(error => {
      if (error.path === "password") {
        error.value = hash
      }
    });
    errorResult.array();
    
    if (errorResult.isEmpty()) {
      const userAccount = {
        username,
        email,
        password: hash
      };

      users.push(userAccount);

      return res.status(201).json({
        status: "Created",
        message: "Account successfully created",
        data: userAccount
      });
    } else {
      return res.status(400).json({
        status: "Bad Request",
        message: errorResult,
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: error.toString(),
    });
  }
};

const getAccount = async (req, res, next) => {
  try {
    const userAccount = users.find((user) => req.body.username === user.username);
    
    if (userAccount === undefined) {
      return res.status(404).json({
        status: "Not found",
        message: "Account not found",
      });
    }

    const verify = await bcrypt.compare(req.body.password, userAccount.password);
    if(verify) {
      return res.status(200).json({
        status: "OK",
        message: "Success",
        data: {
          "username": userAccount.username,
          "email": userAccount.email
        }
      });
    } else {
      return res.status(401).json({
        status: "Unauthorized",
        message: "Wrong username or password"
      });
    }

  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: error.toString(),
    });
  }
};

const deleteAccount = async (req, res, next) => {
  try {
    const userAccount = users.find((user) => req.body.username === user.username);
    
    users.pop(req.params.username);
    
    return res.status(200).json({
      status: "OK",
      message: "Account has been deleted",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: error,
    });
  }
};

module.exports = {
  createAccount,
  getAccount,
  deleteAccount
}