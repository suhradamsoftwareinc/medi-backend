const suppliers = require("../models/suppliersModel");

exports.get = async (req, res) => {
  const suppliersdata = await suppliers.findAll();
  res.json(suppliersdata);
};

exports.save = async (req, res) => {
  const {
    suppliername,
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
    paymentterms,
    catid,
    suppliergst,
    supplierlicense,
    status,
    updatedby,
    updatedon,
  } = req.body;
  try {
    const newModel = new suppliers({
      suppliername: suppliername,
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
      paymentterms: paymentterms,
      catid: catid,
      suppliergst: suppliergst,
      supplierlicense: supplierlicense,
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
    suppliername,
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
    paymentterms,
    catid,
    suppliergst,
    supplierlicense,
    status,
    updatedby,
    updatedon,
  } = req.body;

  try {
    const updateModel = await suppliers.update(
      {
        suppliername: suppliername,
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
        paymentterms: paymentterms,
        catid: catid,
        suppliergst: suppliergst,
        supplierlicense: supplierlicense,
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
