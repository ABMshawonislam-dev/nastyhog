require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/dbConfig.js");
const app = express();
const routes = require("./routes");

app.use(cors());
app.use(express.json());
dbConfig();
app.use(routes);

app.listen(8000);
