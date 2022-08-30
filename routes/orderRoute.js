const express = require("express");
const router = express.Router();
const Orders = require("../models/orderModel");
const { tokenVerification, tokenVerificationAndAuth, tokenVerificationAndAdmin } = require("./tokenVerification")




//Create
router.post("/addorder", tokenVerification, async (req, res) => {   
    
    const newOrder = new Orders(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch(err) {
        res.status(500).json(`Error: ${err}`);
    }
})


//Update
router.put("/:id", tokenVerificationAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Orders.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch(err) {
        res.status(500).json(`Error: ${err}`);
    }
});

//Delete
router.delete("/:id", tokenVerificationAndAdmin, async (req, res) => {
    try {
        await Orders.findByIdAndDelete(req.params.id);

        res.status(200).json("Order has been deleted!");
    }  catch(err) {
        res.status(500).json(`Error: ${err}`);
    }
})


//get user orders with user id
router.get("/find/:userid", tokenVerificationAndAdmin, async (req, res) => {
    try {
        const orders = await Orders.findOne({userid: req.params.userid});

        res.status(200).json(orders);
    }  catch(err) {
        res.status(500).json(`Error: ${err}`);
    }
})

//get everything
router.get("/", tokenVerificationAndAdmin, async (req, res) => {
    try {
        const orders = await Orders.find();

        res.status(200).json(orders);
    }  catch(err) {
        res.status(500).json(`Error: ${err}`);
    }
})

//Get order status
router.get("/status", tokenVerificationAndAdmin, async(req, res) => {
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1)); 

    try {
        const income = await Orders.aggregate([
            {
                $match: {
                    createdAt: { $gte: prevMonth },
                ...(productId && { products: {$elemMatch: { productId }}, 
                }),
            },
            }, 
            {
                $project: { 
                    month: { $month: "$createdAt" }, 
                    sales: "$amount"
                },
            },
            { 
                $group: {
                     _id: "$month", 
                     total: { $sum: "$sales" },
                     },
            },
        ]);
    } catch(err) {
        res.status(500).json(err);
    }
    
});





  

module.exports = router;