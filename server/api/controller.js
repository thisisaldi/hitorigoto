const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require("./model");
const jwt = require("jsonwebtoken");
const createToken = require('./util/token');

const homepage = async (req, res, next) => {
  try {
    const token = req.cookies.token

    if (token) {
      jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
          return res.status(401).json({
            status: "Unauthorized",
            data: err,
            message: "Please login again!"
          })
        }

        const user = await User.findById(data.id)
          return res.status(200).clearCookie("token").json({
            status: "OK",
            user: user.username
          })
        }
      )
    } else {
      return res.status(400).json({
        status: "OK",
        user: user.username
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: error.toString(),
    });
  }
}

const createAccount = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const errorResult = validationResult(req).formatWith(error => {
      if (error.path === "password") {
        error.value = ""
      }
    });
    errorResult.array();
    
    if (errorResult.isEmpty()) {
      const userAccount = {
        username,
        email,
        password: await bcrypt.hash(req.body.password, 10),
        createdAt: new Date().toISOString()
      };

      const account = await User.create(userAccount);
      const token = createToken(account._id);
      
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      
      return res.status(201).json({
        status: "Created",
        message: "Account successfully created",
        data: account
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
    const { username, password } = req.body;
    const errorResult = validationResult(req).formatWith(error => {
      if (error.path === "password") {
        error.value = ""
      }
    });
    errorResult.array();
    const account = await User.findOne({ username });
    
    if (errorResult.isEmpty() && account !== null) {
      const verify = await bcrypt.compare(password, account.password);
      
      if(verify) {
        const token = createToken(account._id)
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });

        return res.status(201).json({
          status: "OK",
          message: "Success",
          data: account
        });
      } else {
        return res.status(401).json({
          status: "Unauthorized",
          message: "Incorrect username or password!"
        });
      }
    } else {
      return res.status(400).json({
        status: "Bad Request",
        message: errorResult.isEmpty() ? "Incorrect username or password" : errorResult
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
      message: error.toString(),
    });
  }
};

module.exports = {
  homepage,
  createAccount,
  getAccount,
  deleteAccount
}