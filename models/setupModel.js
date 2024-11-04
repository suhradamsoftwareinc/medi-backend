const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/config");

const sequelize = new Sequelize(db.db.database, db.db.user, db.db.password, {
  host: db.db.host,
  dialect: "mysql",
  logging: false, // Set this to true for debugging
});

class setup extends Model {  }

setup.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    def_unit: {
      type: DataTypes.STRING,
    },
    def_tax_rate: {
      type: DataTypes.DECIMAL,
    },
    def_disc_rate: {
      type: DataTypes.DECIMAL,
    },
    low_stock_limit: {
      type: DataTypes.STRING,
    },
    notification_mode: {
      type: DataTypes.STRING,
    },
    company_gst: {
      type: DataTypes.STRING,
    },
    company_name: {
      type: DataTypes.STRING,
    },
    company_logo_url: {
      type: DataTypes.STRING,
    },
    company_pan: {
      type: DataTypes.STRING,
    },
    company_otherno: {
      type: DataTypes.STRING,
    },
    terms_conditions: {
      type: DataTypes.TEXT,
    },
    updatedby: {
      type: DataTypes.INTEGER,
    },
    updatedon: {
      type: DataTypes.DATE,
    },
    bank_ac: {
      type: DataTypes.BIGINT,
    },
    bank_ifsc: {
      type: DataTypes.STRING,
    },
    bank_branch: {
      type: DataTypes.STRING,
    },
    bank_name: {
      type: DataTypes.STRING,
    },
    company_address1: {
      type: DataTypes.STRING,
    },
    company_address2: {
      type: DataTypes.STRING,
    },
    company_address3: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    company_contact_no: {
      type: DataTypes.INTEGER,
    },
    company_email: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    sequelize, // We need to pass the connection instance
    modelName: "setup",
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

module.exports = setup;
