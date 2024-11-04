const inventory = require("../models/inventoryModel");

exports.get = async (req, res) => {
  const inventorydata = await inventory.findAll();
  res.json(inventorydata);
};

exports.save = async (req, res) => {
  const {
    id,
    productid,
    batchnumber,
    expirydate,
    costprice,
    mrp,
    sellingprice,
    minstock,
    storagelocation1,
    storagelocation2,
    supplierid,
    receiveddate,
    manufacturerid,
    manufactureddate,
    stockqty,
    pack,
    packunit,
  } = req.body;
  try {
    const newModel = new inventory({
        id: id,
        productid: productid,
        batchnumber: batchnumber,
        expirydate: expirydate,
        costprice: costprice,
        mrp: mrp,
        sellingprice: sellingprice,
        minstock: minstock,
        storagelocation1: storagelocation1,
        storagelocation2: storagelocation2,
        supplierid: supplierid,
        receiveddate: receiveddate,
        manufacturerid: manufacturerid,
        manufactureddate: manufactureddate,
        stockqty: stockqty,
        pack: pack,
        packunit: packunit,
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
    productid,
    batchnumber,
    expirydate,
    costprice,
    mrp,
    sellingprice,
    minstock,
    storagelocation1,
    storagelocation2,
    supplierid,
    receiveddate,
    manufacturerid,
    manufactureddate,
    stockqty,
    pack,
    packunit,
  } = req.body;

  try {
    const updateModel = await inventory.update(
      {
        productid: productid,
        batchnumber: batchnumber,
        expirydate: expirydate,
        costprice: costprice,
        mrp: mrp,
        sellingprice: sellingprice,
        minstock: minstock,
        storagelocation1: storagelocation1,
        storagelocation2: storagelocation2,
        supplierid: supplierid,
        receiveddate: receiveddate,
        manufacturerid: manufacturerid,
        manufactureddate: manufactureddate,
        stockqty: stockqty,
        pack: pack,
        packunit: packunit,
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
