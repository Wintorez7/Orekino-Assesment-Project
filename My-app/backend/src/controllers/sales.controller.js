const supabase = require("../db/supabaseClient");

const DEFAULT_RESTAURANT_ID = "fa3b242e-2705-4896-a83a-77ffb833551e";
// POST /sales
const addSale = async (req, res) => {
  try {
    const { item_name, quantity_sold, date } = req.body;

    if (!item_name || !quantity_sold || !date) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (quantity_sold <= 0) {
      return res.status(400).json({ error: "Quantity must be greater than 0" });
    }

    const { data, error } = await supabase
      .from("daily_sales")
      .insert([
        {
          restaurant_id: DEFAULT_RESTAURANT_ID,
          item_name,
          quantity_sold,
          date
        }
      ])
      .select()
      .single();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({
      message: "Sale added successfully",
      sale: data
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSalesSummary = async (req, res) => {
  try {
    const restaurant_id = req.query.restaurant_id || DEFAULT_RESTAURANT_ID;

    const { data, error } = await supabase
      .from("daily_sales")
      .select("item_name, quantity_sold, date")
      .eq("restaurant_id", restaurant_id);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (!data || data.length === 0) {
      return res.json({
        totalItemsSold: 0,
        topItems: [],
        activeDays: 0
      });
    }

    let totalItemsSold = 0;
    const itemMap = {};
    const daysSet = new Set();

    data.forEach(row => {
      totalItemsSold += row.quantity_sold;
      itemMap[row.item_name] =
        (itemMap[row.item_name] || 0) + row.quantity_sold;
      daysSet.add(row.date);
    });

    const topItems = Object.entries(itemMap)
      .map(([item, quantity]) => ({ item, quantity }))
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 3);

    res.json({
      totalItemsSold,
      topItems,
      activeDays: daysSet.size
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllSales = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("daily_sales")
      .select("*")
      .order("date", { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json({ sales: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = { addSale , getSalesSummary,getAllSales };
