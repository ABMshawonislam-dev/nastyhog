const mongoose = require("mongoose");

function dbConfig() {
  mongoose
    .connect(process.env.DB_CONNECTION_URL)
    .then(() => console.log("Database Connected!"));
}

module.exports = dbConfig;
