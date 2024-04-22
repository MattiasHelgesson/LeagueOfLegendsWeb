require("dotenv").config();
const connection = require("./db")
const express = require("express");
const app = express();

connection();

const port = process.env.port||2999;
app.listen(port,console.log(`Listening in port ${port}..`));