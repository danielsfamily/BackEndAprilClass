//User is coming from mongoDB Schema
//in human term - a template to create a user
const User = require("../model/User");
//hashing password library
const bcrypt = require("bcryptjs");
//exporting an object with key and value

async function getAllUsers(req, res, next) {
    try{
        let foundAllUsers = await User.find({});
        res.json({message: "success", foundAllUsers})
    }catch(error){
        res.json({message:error, error})
    }
}

async function createUser(req, res, next) {
    try{
        let createdSalt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(req.body.password, createdSalt);
        let savedUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPassword,
            email: req.body.email,
            username: req.body.username,
            });
        res.json({message: "success", savedUser});
    }catch(e){
        res.json({message: "error", error: e.message})
    }
}

async function updateUserByID(req, res, next) {
    try{
        let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json({message: "success", updatedUser});
    }catch(e){
        res.json({message: "error", e})
    }
  }

async function deleteUserByID(req, res, next) {
    try{
        let deletedUser = await User.findByIdAndDelete(req.params.id);
        res.json({message: "success", deletedUser})
    }catch(e){
        res.json({message:"error", error: e});
    }
}
module.exports = {
  getAllUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
};