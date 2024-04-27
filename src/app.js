const express = require("express");
const mongoose = require("mongoose");

require("./config");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Load routes
const indexRoutes = require("./routes/index");

// Routes
app.use("/", indexRoutes);

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
