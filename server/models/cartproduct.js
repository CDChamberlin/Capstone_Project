const CartProduct = sequelizeInstance.define('CartProduct', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
});

module.exports = CartProduct;