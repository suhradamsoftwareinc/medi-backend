const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/config");

const sequelize = new Sequelize(db.db.database, db.db.user, db.db.password, {
  host: db.db.host,
  dialect: "mysql",
  logging: false, // Set this to true for debugging
});

class manufacturer extends Model {}

manufacturer.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  manufacturername: {
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
  manufacturergst: {
    type: Sequelize.STRING,
  },
  manufacturerlicense: {
    type: Sequelize.STRING,
  },
  manufacturertype: {
    type: Sequelize.STRING,
  },
  yearestablishment: {
    type: Sequelize.DATE,
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
  modelName: "manufacturer",
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

module.exports = manufacturer;
