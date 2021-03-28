const router = require('express').Router();
const Product = require('../models/product');
//
// title: String,
//     description: String,
//     photo: String,
//     price: Number,
//     stockQuantity: Number,
//     rating: [Number]

// POST request for creating a new product
router.post('/products', async (req, res) => {
    try {
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.body.photo;
        product.price = req.body.price;
        product.stockQuantity = req.body.stockQuantity;

        await product.save();

        res.json({
            status: true;
            massage: 'Successfully saved';
        });
    } catch (err) {
        res.status(500).json({
            success: false;
            message: err.message;
        })
    }
})

// GET request for getting all products


// GET request for getting a single product


// PUT request for updating a single product


// DELETE request for deleting a single product

module.exports = router;
