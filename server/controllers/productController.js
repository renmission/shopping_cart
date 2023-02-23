const Product = require('./../models/productModel');
const factory = require('./handlerFactory');

exports.getAllProduct = factory.getAll(Product);
exports.getProduct = factory.getOne(Product);
exports.createProduct = factory.createOne(Product);
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);