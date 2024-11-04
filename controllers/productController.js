const product = require("../models/productModel");

exports.get = async (req, res) => {
  const productdata = await product.findAll();
  res.json(productdata);
};

exports.save = async (req, res) => {
  const {
    id,
    catid,
    name,
    desc,
    sku,
    batchno,
    expirydate,
    price,
    discprice,
    stockqty,
    weight,
    dimensions,
    imgurl,
    addimg,
    status,
    supplier,
    updatedby,
    updatedon,
  } = req.body;
  try {
    const newModel = new product({
      id: id,
      catid: catid,
      name: name,
      desc: desc,
      sku: sku,
      batchno: batchno,
      expirydate: expirydate,
      price: price,
      discprice: discprice,
      stockqty: stockqty,
      weight: weight,
      dimensions: dimensions,
      imgurl: imgurl,
      addimg: addimg,
      status: status,
      supplier: supplier,
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
    catid,
    name,
    desc,
    sku,
    batchno,
    expirydate,
    price,
    discprice,
    stockqty,
    weight,
    dimensions,
    imgurl,
    addimg,
    status,
    supplier,
    updatedby,
    updatedon,
  } = req.body;

  try {
    const updateModel = await product.update(
      {
        catid: catid,
        name: name,
        desc: desc,
        sku: sku,
        batchno: batchno,
        expirydate: expirydate,
        price: price,
        discprice: discprice,
        stockqty: stockqty,
        weight: weight,
        dimensions: dimensions,
        imgurl: imgurl,
        addimg: addimg,
        status: status,
        supplier: supplier,
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
