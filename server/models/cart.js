const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const User = require("./user");
const Product = require("./product");
const CartProduct = require("./cartproduct");
const sequelizeInstance = dbConnect.Sequelize;
class Cart extends Model { }

Cart.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Users,
            key: "id"
        },
        required: true
    },
    total: {
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0.00
    }

},
{
    sequelize: sequelizeInstance,
    modelName: "carts", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

// Define hooks to recalculate total when cart or associated products change
Cart.afterUpdate('afterUpdate', async (cart, options) => {
    await cart.calculateTotal();
});

Cart.afterBulkUpdate('afterBulkUpdate', async (options) => {
    // Fetch all carts that were updated
    const updatedCarts = await Cart.findAll({
        where: options.where
    });

    // Recalculate total for each updated cart
    for (const cart of updatedCarts) {
        await cart.calculateTotal();
    }
});

// Define method to calculate the total of the cart
Cart.prototype.calculateTotal = async function() {
    try {
        const products = await this.getProducts(); // Get all products in the cart
        let total = 0;

        products.forEach(product => {
            total += product.price * product.CartProduct.quantity; // Adjust the total based on the quantity of each product
        });

        this.total = total.toFixed(2); // Update the total field of the cart
        await this.save(); // Save the cart
        return this.total;
    } catch (error) {
        throw new Error('Error calculating total: ' + error.message);
    }
};

module.exports = Cart