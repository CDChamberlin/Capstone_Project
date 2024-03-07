const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Cart = require("./cart");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
      createdAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      street:{
        type: DataTypes.STRING,
        allowNull: true
      },
      aptnumber:{
        type: DataTypes.STRING,
        allowNull: true
      },
      city:{
        type: DataTypes.STRING,
        allowNull: true
      },
      state:{
        type: DataTypes.STRING(2),
        allowNull: true
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: true
      } 
    },
    {
      sequelize: sequelizeInstance,
      modelName: "users", // use lowercase plural format
      timestamps: true,
      freezeTableName: true,
    }
)

module.exports = User