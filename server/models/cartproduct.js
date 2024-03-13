const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class CartProduct extends Model {}
CartProduct.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
},
{
    sequelize: sequelizeInstance,
    modelName: "cartproducts", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  });

module.exports = CartProduct;
