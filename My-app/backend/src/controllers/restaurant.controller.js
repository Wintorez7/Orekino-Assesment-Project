const supabase = require("../db/supabaseClient");

const createRestaurant = async (req, res) => {
  try {
    const { name } = req.body;

    // basic validation
    if (!name) {
      return res.status(400).json({
        error: "Restaurant name is required"
      });
    }

    const { data, error } = await supabase
      .from("restaurants")
      .insert([{ name }])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({
      message: "Restaurant created successfully",
      restaurant: data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createRestaurant };

