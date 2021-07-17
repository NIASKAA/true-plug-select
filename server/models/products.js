const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    productID: {type: Number, require: true},
    categoryID: {type: Number},
    brandID: {type: Number, require: true},
    productName: {type: String, require: true},
    price: {type: Number, require: true},
    size: {type: String, require: true},
    description: {type: String, require: true},
    image: {type: String, require: true}
})

const model = mongoose.model('productData', productSchema);

module.exports = model;