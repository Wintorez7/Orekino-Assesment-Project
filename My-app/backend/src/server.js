const express = require("express");
const cors = require("cors");

const restaurantRoutes = require("./routes/restaurants.routes");
const salesRoutes = require("./routes/sales.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Orkeneo Backend API is running 🚀");
});

app.use("/restaurants", restaurantRoutes);
app.use("/sales", salesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
