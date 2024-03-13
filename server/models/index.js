'use strict';

const User = require('./user');
const Product = require('./product');
const Cart = require('./cart');

async function init() {
    // Create User table
    await User.sync();
    // Create Product table
    await Product.sync();
    // Create Cart table
    await Cart.sync();
    // Create CartProduct table
    await CartProduct.sync();

    // Define relationships
    // User-Cart relationship
    User.hasOne(Cart);
    Cart.belongsTo(User);
    // Cart-Product relationship
    Cart.belongsToMany(Product, { through: CartProduct });
    Product.belongsToMany(Cart, { through: CartProduct });
}

init();

module.exports = {
    User,
    Product,
    Cart,
    CartProduct
};