const Vaccine = require("../models/vaccine");

const Booking = async (req, res) => {
  try {
    console.log("booking");
    const vaccine = new Vaccine(req.body);
    await vaccine.save();
    return res.status(200).json({status: "success", message: "Book success."});
  } catch (error) {
    return res.json({message: error, status: "fail"});
  }
};

module.exports = {Booking};
