const express = require("express");
const router = express.Router();
const multer = require("multer");
const Products = require("../models/productModel");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./dream-frontend/public/uploads/");
    }, 
    filename: (req, file, cb) => {
        cb(null, file.originalname); //will change it later to product name
    }
})

const upload = multer({storage: storage});

//Request GET all products from db
//@route  GET /addproducts
router.get("/", (req, res) => {
  Products.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//request GET product by ID
//@route  GET /addproducts/:id
router.get("/:id", (req, res) => {
  Products.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//Request Add new product
router.post("/add", upload.single("image"), (req, res) => {
  const newProduct = new Products({
    productName: req.body.productName,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    image: req.file.originalname
  });

  newProduct
    .save()
    .then(() => res.json(`${newProduct.productName} uploaded successfully!`))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});



//request find product by ID and Update
router.put("/update/:id", upload.single("image"), (req, res) => {
  Products.findById(req.params.id)
    .then((product) => {
      product.productName = req.body.productName;
      product.description = req.body.description;
      product.price = req.body.price;
      product.quantity = req.body.quantity;
      product.image = req.file.originalname;

      product
        .save()
        .then(() => res.json("The product is updated successfully"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//request find product by ID and Delete
router.delete("/:id", (req, res) => {
    Products.findByIdAndDelete(req.params.id)
      .then(() => res.json("The product is deleted successfully"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });
  

module.exports = router;
