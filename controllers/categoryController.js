const ProductCategories = require("../models/productCategoriesModel");
// import ProductCategories from '../models/productCategoriesModel';

exports.getall = async (req, res) => {
  const categories = await ProductCategories.findAll();
  console.log(categories.every((category) => category instanceof ProductCategories)); // true
  console.log("All users:", JSON.stringify(categories, null, 2));
  res.json(categories);
};

exports.save = async (req, res) => {
  const {
    name,
    desc,
    parentid,
    imageurl,
    status,
    discperc,
    updatedby,
    updatedon,
  } = req.body;
  try {
    const newModel = new ProductCategories({
      name: name,
      desc: desc,
      parentid: parentid,
      imageurl: imageurl,
      status: status,
      discperc: discperc,
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
    name,
    desc,
    parentid,
    imageurl,
    status,
    discperc,
    updatedby,
    updatedon,
  } = req.body;
  try {
    const updateModel = await ProductCategories.update(
      {
        name: name,
        desc: desc,
        parentid: parentid,
        imageurl: imageurl,
        status: status,
        discperc: discperc,
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
    res.status(500).json({ message: error });
  }
};
