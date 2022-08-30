const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register our users
//Collect data from the user
router.post("/register", async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_PASS).toString(),
  });

  await newUser
    .save()
    .then(() => res.json(newUser))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//login
//Collect data from the user
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong Username!");

        const decrypted = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_PASS);

        const decryptedPassword = decrypted.toString(CryptoJS.enc.Utf8);

        decryptedPassword !== req.body.password && res.status(401).json("Wrong Password!");

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
             
        }, process.env.JWT_SECRET, {expiresIn: "4d"}
        );

        const { password, ...others } = user._doc; //other informations Name , email and staff

        res.status(200).json({...others, accessToken});
    } catch(err) {
        res.status(401).json(`Error: ${err}`);
        console.log(`error: ${err}`);
    }
  });

module.exports = router;
