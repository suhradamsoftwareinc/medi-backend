const setup = require("../models/setupModel");

exports.get = async(req,res) =>{
  const setupdata = await setup.findAll();
  res.json(setupdata);
}

exports.save = async (req, res) => {
  const {
    def_unit,
    def_tax_rate,
    def_disc_rate,
    low_stock_limit,
    notification_mode,
    company_gst,
    company_name,
    company_logo_url,
    company_pan,
    company_otherno,
    terms_conditions,
    updatedby,
    updatedon,
    bank_ac,
    bank_ifsc,
    bank_branch,
    bank_name,
    company_address1,
    company_address2,
    company_address3,
    city,
    state,
    country,
    company_contact_no,
    company_email,
  } = req.body;
  try {
    const newModel = new setup({
      def_tax_rate: def_tax_rate,
      def_unit: def_unit,
      def_disc_rate: def_disc_rate,
      low_stock_limit: low_stock_limit,
      notification_mode: notification_mode,
      company_gst: company_gst,
      company_name: company_name,
      company_logo_url: company_logo_url,
      company_pan: company_pan,
      company_otherno: company_otherno,
      terms_conditions: terms_conditions,
      updatedby: updatedby,
      updatedon: updatedon,
      bank_ac: bank_ac,
      bank_ifsc: bank_ifsc,
      bank_branch: bank_branch,
      bank_name: bank_name,
      company_address1: company_address1,
      company_address2: company_address2,
      company_address3: company_address3,
      city: city,
      state: state,
      country: country,
      company_contact_no: company_contact_no,
      company_email: company_email,
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
    def_unit,
    def_tax_rate,
    def_disc_rate,
    low_stock_limit,
    notification_mode,
    company_gst,
    company_name,
    company_logo_url,
    company_pan,
    company_otherno,
    terms_conditions,
    updatedby,
    updatedon,
    bank_ac,
    bank_ifsc,
    bank_branch,
    bank_name,
    company_address1,
    company_address2,
    company_address3,
    city,
    state,
    country,
    company_contact_no,
    company_email,
  } = req.body;

  try {
    const updateModel = await setup.update(
      {
        def_tax_rate: def_tax_rate,
        def_unit: def_unit,
        def_disc_rate: def_disc_rate,
        low_stock_limit: low_stock_limit,
        notification_mode: notification_mode,
        company_gst: company_gst,
        company_name: company_name,
        company_logo_url: company_logo_url,
        company_pan: company_pan,
        company_otherno: company_otherno,
        terms_conditions: terms_conditions,
        updatedby: updatedby,
        updatedon: updatedon,
        bank_ac: bank_ac,
        bank_ifsc: bank_ifsc,
        bank_branch: bank_branch,
        bank_name: bank_name,
        company_address1: company_address1,
        company_address2: company_address2,
        company_address3: company_address3,
        city: city,
        state: state,
        country: country,
        company_contact_no: company_contact_no,
        company_email: company_email,
      },
      {
        where: {
          id: 1,
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
