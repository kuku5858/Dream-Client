const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userId: {type: String, required: true},
        products: [
            {
                productId: {
                    type: String
                },
                itemQuantity: {
                    type: Number,
                    default: 1
                }
            }
        ],
        amount: {type: Number, required: true},
        address: { type: Object, required: true},
        status: {type: String, default: "Pending"}
}, {timestamps: true})

const Orders = mongoose.model("Order", orderSchema);

module.exports = Orders;