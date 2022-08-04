const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const diseaseRoute = require("./src/routes/disease");
const testRoute = require("./src/routes/test");
const historyRoute = require("./src/routes/history");

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use("/v1/disease", diseaseRoute);
app.use("/v1/test", testRoute);
app.use("/v1/history", historyRoute);

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message, data });
});

mongoose
    .connect(process.env.DATABASE_CONNECTION)
    .then(() => {
        app.listen(process.env.PORT, () => console.log("Connection Success"));
    })
    .catch((err) => console.log(err.message));
