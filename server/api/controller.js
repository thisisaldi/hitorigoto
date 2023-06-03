const bcrypt = require('bcrypt');
const asyncHandler =  require('express-async-handler');
const { validationResult } = require('express-validator');
const users = require('./user');

// const homepage = async (req, res, next) => {
//   try {
//     res.render()
//     return res.status(200).json({
//       status: "OK",
//       message: "Success"
//     });
//   } catch (error) {
//     return res.status(500).json({
//       status: "FAILED",
//       message: error
//     });
//   }
// };

const createAccount = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const errorResult = validationResult(req).formatWith(error => {
      if (error.path === "password") {
        error.value = encryptedPassword
      }
    });
    errorResult.array();
    
    if (errorResult.isEmpty()) {
      const userAccount = {
        username,
        email,
        encryptedPassword
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
      message: error,
    });
  }
};

const getAccount = async (req, res, next) => {
  try {
    const userAccount = users.find((user) => req.params.username === user.username);
    
    if (userAccount !== undefined) {
      return res.status(200).json({
        status: "OK",
        message: "Success",
        data: userAccount
      });
    } else {
      return res.status(404).json({
        status: "Not found",
        message: "Account not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: error,
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