const manufacturer = require("../models/manufacturerModel");

exports.get = async (req, res) => {
  const manufacturerdata = await manufacturer.findAll();
  res.json(manufacturerdata);
};

exports.save = async (req, res) => {
  const {
    id,
    manufacturername,
    contactname,
    contactnumber,
    email,
    addressline1,
    addressline2,
    addressline3,
    city,
    state,
    postalcode,
    country,
    website,
    manufacturergst,
    manufacturerlicense,
    manufacturertype,
    yearestablishment,
    status,
    updatedby,
    updatedon,
  } = req.body;
  try {
    const newModel = new manufacturer({
        id: id,
        manufacturername: manufacturername,
        contactname: contactname,
        contactnumber: contactnumber,
        email: email,
        addressline1: addressline1,
        addressline2: addressline2,
        addressline3: addressline3,
        city: city,
        state: state,
        postalcode: postalcode,
        country: country,
        website: website,
        manufacturergst: manufacturergst,
        manufacturerlicense: manufacturerlicense,
        manufacturertype: manufacturertype,
        yearestablishment: yearestablishment,
        status: status,
        updatedby: updatedby,
        updatedon: updatedon,
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
    manufacturername,
    contactname,
    contactnumber,
    email,
    addressline1,
    addressline2,
    addressline3,
    city,
    state,
    postalcode,
    country,
    website,
    manufacturergst,
    manufacturerlicense,
    manufacturertype,
    yearestablishment,
    status,
    updatedby,
    updatedon,
  } = req.body;

  try {
    const updateModel = await manufacturer.update(
      {
        manufacturername: manufacturername,
        contactname: contactname,
        contactnumber: contactnumber,
        email: email,
        addressline1: addressline1,
        addressline2: addressline2,
        addressline3: addressline3,
        city: city,
        state: state,
        postalcode: postalcode,
        country: country,
        website: website,
        manufacturergst: manufacturergst,
        manufacturerlicense: manufacturerlicense,
        manufacturertype: manufacturertype,
        yearestablishment: yearestablishment,
        status: status,
        updatedby: updatedby,
        updatedon: updatedon,
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
