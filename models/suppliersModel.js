const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/config");

const sequelize = new Sequelize(db.db.database, db.db.user, db.db.password, {
  host: db.db.host,
  dialect: "mysql",
  logging: false, // Set this to true for debugging
});

class suppliers extends Model {}

suppliers.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    suppliername: {
      type: Sequelize.STRING,
    },
    contactname: {
      type: Sequelize.STRING,
    },
    contactnumber: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    addressline1: {
      type: Sequelize.STRING,
    },
    addressline2: {
      type: Sequelize.STRING,
    },
    addressline3: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    postalcode: {
      type: Sequelize.INTEGER,
    },
    country: {
      type: Sequelize.STRING,
    },
    website: {
      type: Sequelize.STRING,
    },
    paymentterms: {
      type: Sequelize.STRING,
    },
    catid: {
      type: Sequelize.INTEGER,
    },
    suppliergst: {
      type: Sequelize.STRING,
    },
    supplierlicense: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    updatedby: {
      type: Sequelize.INTEGER,
    },
    updatedon: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
    sequelize, // We need to pass the connection instance
    modelName: "suppliers",
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

module.exports = suppliers;
