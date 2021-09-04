const User = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    return res.status(200).json({status: "success", message: "create user success."});
  } catch (error) {
    return res.json({message: error, status: "fail"});
  }
};

const login = async (req, res) => {
  try {
    console.log("test login");
    const user = await User.findOne({email: req.body.email});
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json("Invalid email or password");
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY);
    return res.status(200).json({token: token});
  } catch (error) {
    return res.status(400).json({message: error, status: "fail"});
  }
};

module.exports = {register, login};
