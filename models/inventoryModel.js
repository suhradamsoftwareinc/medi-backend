const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/config");

const sequelize = new Sequelize(db.db.database, db.db.user, db.db.password, {
  host: db.db.host,
  dialect: "mysql",
  logging: false, // Set this to true for debugging
});

class inventory extends Model {}

inventory.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    batchnumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    expirydate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    costprice: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    mrp: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    sellingprice: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    minstock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    storagelocation1: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    storagelocation2: {
      type: Sequelize.STRING,
    },
    supplierid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    receiveddate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    manufacturerid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    manufactureddate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    stockqty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pack: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    packunit: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    //   tableName: 'inventory',
    sequelize, // We need to pass the connection instance
    modelName: "inventory",
    timestamps: false, // Disable automatic createdAt and updatedAt fields
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("Models synchronized successfully");
  })
  .catch((error) => {
    console.error("Error synchronizing models:", error);
  });

module.exports = inventory;
