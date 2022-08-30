const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
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
        ]
}, {timestamps: true})

const Carts = mongoose.model("Cart", cartSchema);

module.exports = Carts;