


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotCofig = require("dotenv")
const connectDB = require('./src/db/connection')

const authRoutes = require("./src/routes/auth.routes.js")
const couresRoutes = require("./src/routes/course.routes.js");


const app = express();
dotCofig.config();
connectDB()
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/courses", couresRoutes);

app.listen(5000, () => console.log("Server running"));


