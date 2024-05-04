const express = require("express");
const cors = require('cors');

require("./config");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Load routes
const indexRoutes = require("./routes/index");

// Routes
app.use("/", indexRoutes);

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
