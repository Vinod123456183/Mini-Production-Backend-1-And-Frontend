const { errorHandler } = require("../utils/error");
const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");
const { formatDistanceToNow } = require("date-fns");
const rateLimit = require("express-rate-limit");



const indexController = (req, res) => {
  console.log("Index Controller");
  res.render("index");
};

module.exports = { indexController };
