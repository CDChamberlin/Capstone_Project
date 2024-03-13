const { DataTypes, Model } = require("sequelize");
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Product extends Model { }

Product.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    price: {
        type: DataTypes.DECIMAL(5, 2), // The five represents total digits. 2 represents number of digits to the right of the decimal
        required: true
    },
    description: {
        type: DataTypes.TEXT,
        required: true
    },
    category: {
        type: DataTypes.STRING,
        required: true
    },
    image: {
        type: DataTypes.STRING, // uses urls, instead of uploaded images
    },
    quantity:{
        type: DataTypes.INTEGER
    }
},
{
  sequelize: sequelizeInstance,
  modelName: "products", // use lowercase plural format
  timestamps: true,
  freezeTableName: true,
}
)

module.exports = Product