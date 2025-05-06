const User = require('../model/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


module.exports = {
    getAllUsers: (callback) => {
        User.find({})
        .then((payload)=>{
          callback(null, payload)
        })
        .catch(error =>{
          callback(error, null)
        })
    },
    createUser: function (body, callback) {
        bcrypt.genSalt(10, function (err, salt) {
          if (err) {
            callback(err, null);
          } else {
            bcrypt.hash(body.password, salt, function (err, hash) {
              if (err) {
                callback(err, null);
              } else {
                //create a mongodb User OBJECT it will assign a unique ID for the user
                //WHAT IF THERE'S OTHER CHECKS I HAVE TO DO INSIDE THIS BLOCK
                let savedUser = new User({
                  firstName: body.firstName,
                  lastName: body.lastName,
                  password: hash,
                  email: body.email,
                  username: body.username,
                });
                //the save() function will save it to the database
                savedUser.save()
                .then((payload)=>{
                  callback(null, payload)
                })
                .catch(error =>{
                  callback(error, null);
                })
              }
            });
          }
        });
      },
    updateUserByID: function (id, body, callback) {
        User.findByIdAndUpdate(
          { _id: id },
          body,
          { new: true })
          .then(updatedPayload =>{
            callback(null, updatedPayload)
          })
          .catch(error =>{
            callback(error, updatedPayload)
          })
      },
    deleteUserByID: function (id, callback) {
        User.findByIdAndDelete({ _id: id })
        .then(deletedPayload=>{
          callback(null, deletedPayload)
        })
        .catch(error => {
          console.log(error)
          callback(...arguments, null)
        })
    },
};