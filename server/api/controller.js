const path = require('path');
const express = require('express');
const app = express();

const rootPath = '../../../'

const getHomepage = async (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname + rootPath + '/build/index.html'));
    return res.status(200).json({
      status: "OK"
    });
  } catch (error) {
    return res.status(500).json({
      status: "FAILED"
    });
  }
};

module.exports = {
  getHomepage
}