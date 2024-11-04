const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/config");

const sequelize = new Sequelize(db.db.database, db.db.user, db.db.password, {
  host: db.db.host,
  dialect: "mysql",
  logging: false, // Set this to true for debugging
});

class productcategories extends Model {
}

productcategories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    parentid: {
      type: DataTypes.INTEGER,
    },
    imageurl: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    discperc: {
      type: DataTypes.DECIMAL,
    },
    updatedby: {
      type: DataTypes.INTEGER,
    },
    updatedon: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    sequelize, // We need to pass the connection instance
    modelName: 'productcategories', 
    // tableName: "productcategories", // Optional: Specify the table name if different
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



  module.exports = productcategories;