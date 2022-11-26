const express = require("express");
const product = require("./api/product");
const app = express();
const db = require("./configs/dbConfig");
const path = require("path");
//db.connect();
app.use(express.json({ extended: false }));
app.use("/build", express.static(path.join(__dirname + "/build/")));
app.use("/", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
