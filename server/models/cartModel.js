const mongoose = require('mongoose');
// const slugify = require('slugify');

const cartSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        trim: true,

    },
    rating: [{
        rate: Number,
        count: Number,
    }],
    price: {
        type: Number,
    },
    image: String,
    category: String,
    description: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
});



const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;