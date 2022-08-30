const express = require("express");
const router = express.Router();
const Carts = require("../models/cartModel");
const { tokenVerification, tokenVerificationAndAuth, tokenVerificationAndAdmin } = require("./tokenVerification")




//Create
router.post("/addcart", tokenVerification, async (req, res) => {   
    
    const newCart = new Carts(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch(err) {
        res.status(500).json(`Error: ${err}`);
    }
})


router.put("/:id", tokenVerificationAndAuth, async (req, res) => {
    try {
        const updatedCart = await Carts.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, { new: true }
        );
        res.status(200).json(updatedCart);
    } catch(err) {
        res.status(500).json(`Error: ${err}`);
    }
});

//Delete
router.delete("/:id", tokenVerificationAndAuth, async (req, res) => {
    try {
        await Carts.findByIdAndDelete(req.params.id);

        res.status(200).json("Item has been deleted!");
    }  catch(err) {
        res.status(500).json(`Error: ${err}`);
    }
})


//get user cart with user id
router.get("/find/:userid", tokenVerificationAndAuth, async (req, res) => {
    try {
        const cart = await Carts.findOne({userid: req.params.userid});

        res.status(200).json(cart);
    }  catch(err) {
        res.status(500).json(`Error: ${err}`);
    }
})

//get everything
router.get("/", tokenVerificationAndAdmin, async (req, res) => {
    try {
        const carts = await Carts.find();

        res.status(200).json(carts);
    }  catch(err) {
        res.status(500).json(`Error: ${err}`);
    }
})



  

module.exports = router;