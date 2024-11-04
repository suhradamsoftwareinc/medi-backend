const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/config");

const sequelize = new Sequelize(db.db.database, db.db.user, db.db.password, {
    host: db.db.host,
    dialect: "mysql",
    logging: false, // Set this to true for debugging
  });

class product extends Model {  }

product.init( {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  catid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.STRING
  },
  sku: {
    type: DataTypes.STRING
  },
  batchno: {
    type: DataTypes.INTEGER
  },
  expirydate: {
    type: DataTypes.DATE
  },
  price: {
    type: DataTypes.DECIMAL(10, 2)
  },
  discprice: {
    type: DataTypes.DECIMAL(10, 2)
  },
  stockqty: {
    type: DataTypes.INTEGER
  },
  weight: {
    type: DataTypes.DECIMAL(10, 2)
  },
  dimensions: {
    type: DataTypes.STRING
  },
  imgurl: {
    type: DataTypes.STRING
  },
  addimg: {
    type: DataTypes.JSON
  },
  status: {
    type: DataTypes.STRING
  },
  supplier: {
    type: DataTypes.STRING
  },
  updatedby: {
    type: DataTypes.INTEGER
  },
  updatedon: {
    type: DataTypes.DATE
  }
},
{
  timestamps: false,
  sequelize, // We need to pass the connection instance
  modelName: "product",
  // tableName: "setup",
});

sequelize
  .sync()
  .then(() => {
    console.log("Models synchronized successfully");
  })
  .catch((error) => {
    console.error("Error synchronizing models:", error);
  });


module.exports = product;