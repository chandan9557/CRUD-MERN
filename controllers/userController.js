const UserModel = require("../models/userModel");

const getData = async (req, res) => {
  let data = await UserModel.find();
  res.json(data);
  console.log(data);
};

const createData = async (req, res) => {
  let data = new UserModel(req.body);
  let result = await data.save();
  res.json(result);
  console.log(result);
};

const replaceData = async (req, res) => {
  let newdata = await UserModel.findOneAndUpdate(req.params, req.body);
  res.json(newdata);
};

const updateData = async (req, res) => {
  let newdata1 = await UserModel.findOneAndUpdate(req.params, req.body);
  res.json(newdata1);
};
const deleteData = async (req, res) => {
  let newdata2 = await UserModel.findByIdAndDelete(req.params);
  res.json(newdata2);
};
module.exports = { getData, createData, replaceData, updateData,deleteData };
