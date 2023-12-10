// const path = require('path')
// const fs = require('fs')

// const sheetsDBPath = "../config/sheets.json"
const data = require("../config/sheets.json");
exports.getSheets = (req, res) => {
  try {
    res.json(data);
  } catch (err) {
    console.log("get error", err);
  }
};


exports.loveSheet = (req, res) => {
    try {
      res.json(data?.love);
    } catch (err) {
      console.log("get error", err);
    }
  };

  exports.frazSheet = (req, res) => {
    try {
      res.json(data?.fraz);
    } catch (err) {
      console.log("get error", err);
    }
  };
