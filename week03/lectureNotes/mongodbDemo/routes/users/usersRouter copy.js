const express = require("express");
const router = express.Router();

const userController = require("./controller/userController\ copy");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/get-all-users", (req, res) => {
  userController.getAllUsers((err, payload) => {
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});

router.post("/create-user", (req, res) =>{
  userController.createUser(req.body, (err, payload) =>{
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload});
    }
  });
});

router.put("/update-user-by-id/:id", function (req, res) {
  userController.updateUserByID(
    req.params.id,
    req.body,
    function (err, updatedPayload) {
      if (err) {
        res.status(500).json({ message: "Error", error: err });
      } else {
        res.json({ message: "success", data: updatedPayload });
      }
    }
  );
});

router.delete("/delete-user-by-id/:id", function (req, res) {
  userController.deleteUserByID(req.params.id, function (err, deletedPayload) {
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: deletedPayload });
    }
  });
});

module.exports = router;
