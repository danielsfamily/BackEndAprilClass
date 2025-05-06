const User = require('../model/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


module.exports = {
    getAllUsers: () => {
        return new Promise((resolve, reject) =>{
            User.find({})
                .then((payload) =>{
                    resolve(payload)
                })
                .catch(error =>{
                    reject(error)
                })
        })
    },
    createUser: function (body) {
        return new Promise((resolve, reject) =>{
            bcrypt  
                .genSalt(10)
                .then(salt =>{
                    return bcrypt.hash(body.password, salt)
                })
                .then(hashedPassword => {
                  let newUser = new User({
                    firstName: body.firstName,
                    lastName : body.lastName,
                    email : body.email,
                    username: body.username,
                    password: hashedPassword,
                })  
                return newUser.save()
                })
                .then(newUser => {
                    resolve(newUser)
                })
                .catch((error) => {
                    reject(error);
                })
        })
      },
    updateUserByID: function (id, body) {
        return new Promise((resolve, reject) =>{
            User.findByIdAndUpdate(
                { _id: id },
                body,
                { new: true })
            .then((payload) =>{
                resolve(payload)
            })
            .catch(error =>{
                reject(error)
            })
        })
      },
    deleteUserByID: function (id) {
        return new Promise((resolve, reject) =>{
            User.findByIdAndDelete({_id:id})
            .then((payload) =>{
                resolve(payload)
            })
            .catch(error =>{
                reject(error)
            })
        })
    }
};