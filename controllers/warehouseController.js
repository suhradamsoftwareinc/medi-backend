const warehouse = require("../models/wareHouseModel");

exports.get = async (req, res) => {
  const warehousedata = await warehouse.findAll();
  res.json(warehousedata);
};

exports.save = async (req, res) => {
  const {
    id,
    name,
    addressLine1,
    addressLine2,
    addressLine3,
    city,
    state,
    postalCode,
    country,
    contactNumber,
    email,
    status,
    updatedBy,
    updatedOn,
  } = req.body;
  try {
    const newModel = new warehouse({
        id:id,
        name:name,
        addressLine1:addressLine1,
        addressLine2: addressLine2,
        addressLine3: addressLine3,
        city: city,
        state: state,
        postalCode: postalCode,
        country: country,
        contactNumber: contactNumber,
        email: email,
        status: status,
        updatedBy: updatedBy,
        updatedOn: updatedOn,
    });

    newModel
      .save()
      .then((createdModel) => {
        console.log("Model created:", createdModel);
      })
      .catch((error) => {
        console.error("Error creating model:", error);
      });
    res.json("Success");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.update = async (req, res) => {
  const {
    id,
    name,
    addressLine1,
    addressLine2,
    addressLine3,
    city,
    state,
    postalCode,
    country,
    contactNumber,
    email,
    status,
    updatedBy,
    updatedOn,
  } = req.body;

  try {
    const updateModel = await warehouse.update(
      {
        name:name,
        addressLine1:addressLine1,
        addressLine2: addressLine2,
        addressLine3: addressLine3,
        city: city,
        state: state,
        postalCode: postalCode,
        country: country,
        contactNumber: contactNumber,
        email: email,
        status: status,
        updatedBy: updatedBy,
        updatedOn: updatedOn,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (updateModel[0] > 0) {
      res.json("Updated Successfully");
    } else {
      res.status(404).json({ message: "Model not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
