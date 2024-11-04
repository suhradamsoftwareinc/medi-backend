const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/config");

const sequelize = new Sequelize(db.db.database, db.db.user, db.db.password, {
  host: db.db.host,
  dialect: "mysql",
  logging: false, // Set this to true for debugging
});

class warehouse extends Model {}

warehouse.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    addressLine1: {
      type: Sequelize.STRING,
    },
    addressLine2: {
      type: Sequelize.STRING,
    },
    addressLine3: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    postalCode: {
      type: Sequelize.INTEGER,
    },
    country: {
      type: Sequelize.STRING,
    },
    contactNumber: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    updatedBy: {
      type: Sequelize.INTEGER,
    },
    updatedOn: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
    sequelize, // We need to pass the connection instance
    modelName: "warehouse",
    // tableName: "setup",
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

module.exports = warehouse;
