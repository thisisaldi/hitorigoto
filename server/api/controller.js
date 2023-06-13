const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { User, Image, ImageData } = require("./model");
const createToken = require('./util/token');
const jwt = require("jsonwebtoken");

const userInfo = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (token) {
      jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
          if (err.name == "TokenExpiredError") {
            return res.status(200).json({
              status: "OK",
              message: "Success"
            })
          }
          return res.status(401).json({
            status: "Unauthorized",
            data: err,
            message: "Please login!"
          })
        }

        let user = await User.findById(data.id).select("username profile_img");
        user = user.toObject();

        let img = await Image.findOne({files_id : user.profile_img.id}).select("data");
        img = img.toObject();

        const imgInfo = await ImageData.findById(user.profile_img.id);

        return res.status(200).json({
          status: "OK",
          user: user.username,
          img: {
            data: img.data,
            metadata: imgInfo
          }
        })
        }
      )
    } else {
      return res.status(200).json({
        status: "OK",
        message: "Success"
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: error.toString(),
    });
  }
}

const invalidPage = async (req, res, next) => {
  return res.status(404).json({
    status: "Not Found",
    message: "404 Not Found, you shouldn't be here!"
  })
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
        message: "Account successfully created, redirecting...",
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

const loginAccount = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const errorResult = validationResult(req).formatWith(error => {
      if (error.path === "password") {
        error.value = ""
      }
    });
    errorResult.array();

    let account = await User.findOne({ username })
    
    
    if (errorResult.isEmpty() && account !== null) {
      account = account.toObject();

      const verify = await bcrypt.compare(password, account.password);
      
      if(verify) {
        const token = createToken(account._id)
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });

        let img = await Image.findOne({files_id : account.profile_img.id}).select("data");
        img = img.toObject();

        const imgInfo = await ImageData.findById(account.profile_img.id);

        return res.status(201).json({
          status: "OK",
          message: "Success, redirecting...",
          account: account.username,
          img: {
            data: img.data,
            metadata: imgInfo
          }
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
      message: error.toString()
    });
  }
};

const logoutAccount = async(req, res, next) => {
  try {
    const token = req.cookies.token;
    if(token) {
      jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
          return res.status(401).json({
            status: "Unauthorized",
            data: err,
            message: "Please login!"
          })
        }

        return res.status(200).clearCookie("token").json({
          status: "OK",
          message: "Success, redirecting...",
        });
      });
    } else {
      return res.status(401).json({
        status: "Unauthorized",
        message: "Please login!"
      })
    }
  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: error.toString()
    });
  }
}

const getAccount = async(req, res, next) => {
  try {
    const token = req.cookies.token

    if(token) {
      jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
          return res.status(401).json({
            status: "Unauthorized",
            data: err,
            message: "Please login!"
          })
        }

        const username = req.params.username
        let account = await User.findById(data.id).select("-password")
        account = account.toObject();

        let img = await Image.findOne({files_id : account.profile_img.id}).select("data");
        img = img.toObject();

        const imgInfo = await ImageData.findById(account.profile_img.id);

        if (!account) {
          return res.status(404).json({
            status: "Not Found",
            message: "Account not found!"
          });
        }
        
        if (username !== account.username) {
          return res.status(403).json({
            status: "Forbidden",
            message: "Wrong Account!"
          })
        }

        return res.status(200).json({
          status: "OK",
          message: "Success!",
          data: account,
          img: {
            data: img.data,
            metadata: imgInfo
          }
        });
      });
    } else {
      return res.status(401).json({
        status: "Unauthorized",
        message: "Please login!"
      })
    }

  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: error.toString()
    });
  }
}

const editAccount = async(req, res, next) => {
  try {
    const { 
      fullName,
      gender,
      birthDate,
      job,
      organization,
      phoneNumber,
      email,
     } = req.body

     const token = req.cookies.token

     if (token) {
      jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
          return res.status(401).json({
            status: "Unauthorized",
            data: err,
            message: "Please login!"
          })
        }

        const username = req.params.username;
        let account = await User.findById(data.id);
        account = account.toObject();

        if (!account) {
          return res.status(404).json({
            status: "Not Found",
            message: "Account not found!"
          });
        }
        
        if (username !== account.username) {
          return res.status(403).json({
            status: "Forbidden",
            message: "Wrong Account!"
          })
        }

        let id;
        let filename;

        if (req.file) {
          id = req.file.id;
          filename = req.file.filename;
        }
        
        const modifiedDoc = await User.findByIdAndUpdate(account._id,
          {
            bio: {
              full_name: fullName || account.bio.full_name || "",
              gender: gender || account.bio.gender || "",
              birth_date: new Date(birthDate? birthDate: 0) || account.bio.birth_date || "",
              job: job || account.bio.job || "",
              organization: organization || account.bio.organization || "",
              phone_number: phoneNumber || account.bio.phone_number || "",
            },
            email: email || account.email || "",
            profile_img: {
              id: id || account.profile_img.id || "",
              filename: filename || account.profile_img.filename || ""
            }
          }, {
            new: true,
            strict: false
          }).select("-password");

        return res.status(200).json({
          status: "OK",
          message: "Account has been updated!",
          data: modifiedDoc
        });
      });
    } else {
      return res.status(401).json({
        status: "Unauthorized",
        message: "Please login!"
      })
    }

  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: error.toString(),
    });
  }
}

const deleteAccount = async (req, res, next) => {
  try {
    const token = req.cookies.token
    
    if (token) {
      jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
          return res.status(401).json({
            status: "Unauthorized",
            data: err,
            message: "Please login!"
          })
        }

        const username = req.params.username
        const account = await User.findById(data.id)

        if (!account) {
          return res.status(404).json({
            status: "Not Found",
            message: "Account not found!",
          });
        }
        
        if (username !== account.username) {
          return res.status(403).json({
            status: "Forbidden",
            message: "Wrong Account!"
          })
        }
        
        const result = await User.findByIdAndDelete(account._id)
        return res.status(200).clearCookie("token").json({
          status: "OK",
          message: "Account has been deleted!",
          data: result.username
        });
      });
    } else {
      return res.status(401).json({
        status: "Unauthorized",
        message: "Please login!"
      })
    }

  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: error.toString(),
    });
  }
};

module.exports = {
  userInfo,
  invalidPage,
  createAccount,
  loginAccount,
  logoutAccount,
  getAccount,
  editAccount,
  deleteAccount
}