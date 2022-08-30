const express = require("express");
const router = express.Router();
const {
  tokenVerification,
  tokenVerificationAndAuth,
  tokenVerificationAndAdmin,
} = require("./tokenVerification");
const User = require("../models/userModel");

//Update a user information
router.put("/:id", tokenVerificationAndAuth, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_PASS
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, //take everything from the body and update a specific user
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(`Error: ${err}`);
  }
});

//Delete
router.delete("/:id", tokenVerificationAndAuth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json("User has been deleted!");
  } catch (err) {
    res.status(500).json(`Error: ${err}`);
  }
});

//get one user for admin
router.get("/find/:id", tokenVerificationAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...others } = user._doc; //other informations Name , email and staff

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(`Error: ${err}`);
  }
});

//get one user for admin
router.get("/", tokenVerificationAndAdmin, async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(`Error: ${err}`);
  }
});

//get totla amount of users per month
router.get("/total", tokenVerificationAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      { $group: { _id: "$month", total: { $sum: 1 } } },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`Error: ${err}`);
  }
});

module.exports = router;
