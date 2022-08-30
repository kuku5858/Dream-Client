const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
        productName: {type: String, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true},
        description: {type: String, required: true}
}, {timestamps: true})

const Products = mongoose.model("Product", productSchema);

module.exports = Products;