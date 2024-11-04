const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/config");

const sequelize = new Sequelize(db.db.database, db.db.user, db.db.password, {
  host: db.db.host,
  dialect: "mysql",
  logging: false, // Set this to true for debugging
});

class bill extends Model {}

bill.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  billDate: {
    type: Sequelize.DATEONLY,
  },
  customerId: {
    type: Sequelize.INTEGER,
  },
  productId: {
    type: Sequelize.INTEGER,
  },
  qty: {
    type: Sequelize.INTEGER,
  },
  sellingPrice: {
    type: Sequelize.DECIMAL(10, 2),
  },
  totalAmount: {
    type: Sequelize.DECIMAL(10, 2),
  },
  paymentMethod: {
    type: Sequelize.STRING,
  },
  discount: {
    type: Sequelize.DECIMAL(10, 2),
  },
  staffId: {
    type: Sequelize.INTEGER,
  },
  remarks: {
    type: Sequelize.STRING,
  },
  gst: {
    type: Sequelize.DECIMAL(10, 2),
  },
},
{
  timestamps: false,
  sequelize, // We need to pass the connection instance
  modelName: "bill",
  // tableName: "setup",
});

sequelize
  .sync()
  .then(() => {
    console.log("Bill Model synchronized successfully");
  })
  .catch((error) => {
    console.error("Error synchronizing models:", error);
  });


module.exports = bill;
