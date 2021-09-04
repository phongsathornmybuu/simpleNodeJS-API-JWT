const express = require("express");
const userController = require("../controllers/userController");
const vaccineController = require("../controllers/vaccineController");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({message: "some get api."});
});

router.post("/auth/register", userController.register);
router.post("/auth/login", userController.login);

router.post("/booking", vaccineController.Booking);

module.exports = router;
