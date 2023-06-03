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

// @desc    Auth user
// route    POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
// @desc    Register user
// route    POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: 'Auth User' });
});
// @desc    Logout user
// route    POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: 'Logout User' });
});
// @desc    Get user profile
// route    GET /api/users/profile
// @access  Private
const getUser = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: 'Logout User' });
});
// const registerUser = asyncHandler(async (req, res, next) => {
//   try {
//     const { username, email } = req.body;
//     const encryptedPassword = await bcrypt.hash(req.body.password, 10);
//     const errorResult = validationResult(req).formatWith((error) => {
//       if (error.path === 'password') {
//         error.value = encryptedPassword;
//       }
//     });
//     errorResult.array();
//     if (errorResult.isEmpty()) {
//       const userAccount = {
//         username,
//         email,
//         encryptedPassword,
//       };

//       users.push(userAccount);

//       return res.status(201).json({
//         status: 'Created',
//         message: 'Account successfully created',
//         data: userAccount,
//       });
//     }
//     return res.status(400).json({
//       status: 'Bad Request',
//       message: errorResult,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       status: 'Internal Server Error',
//       message: error,
//     });
//   }
// });

// const getAccount = async (req, res, next) => {
//   try {
//     const userAccount = users.find((user) => req.params.username === user.username);

//     if (userAccount !== undefined) {
//       return res.status(200).json({
//         status: 'OK',
//         message: 'Success',
//         data: userAccount,
//       });
//     }
//     return res.status(404).json({
//       status: 'Not found',
//       message: 'Account not found',
//     });
//   } catch (error) {
//     return res.status(500).json({
//       status: 'Internal Server Error',
//       message: error,
//     });
//   }
// };

// const deleteAccount = async (req, res, next) => {
//   try {
//     users.pop(req.params.username);

//     return res.status(200).json({
//       status: 'OK',
//       message: 'Account has been deleted',
//       data: users,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       status: 'Internal Server Error',
//       message: error,
//     });
//   }
// };

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUser,
};
