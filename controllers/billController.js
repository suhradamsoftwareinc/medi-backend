const bill = require("../models/billModel");

exports.get = async (req, res) => {
  const billdata = await bill.findAll();
  res.json(billdata);
};

exports.save = async (req, res) => {
  const {
    id,
    billDate,
    customerId,
    productId,
    qty,
    sellingPrice,
    totalAmount,
    paymentMethod,
    discount,
    staffId,
    remarks,
    gst,
  } = req.body;
  try {
    const newModel = new bill({
        id: id,
        billDate: billDate,
        customerId: customerId,
        productId: productId,
        qty: qty,
        sellingPrice: sellingPrice,
        totalAmount: totalAmount,
        paymentMethod: paymentMethod,
        discount: discount,
        staffId: staffId,
        remarks: remarks,
        gst: gst,
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
    billDate,
    customerId,
    productId,
    qty,
    sellingPrice,
    totalAmount,
    paymentMethod,
    discount,
    staffId,
    remarks,
    gst,
  } = req.body;

  try {
    const updateModel = await bill.update(
      {
        billDate: billDate,
        customerId: customerId,
        productId: productId,
        qty: qty,
        sellingPrice: sellingPrice,
        totalAmount: totalAmount,
        paymentMethod: paymentMethod,
        discount: discount,
        staffId: staffId,
        remarks: remarks,
        gst: gst,
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
