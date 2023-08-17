import express from "express";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import Routes from "./routes/noteRoutes.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
// Allow all origins (domains) with default of cors(*)
app.use(cors());

app.use("/notes", Routes);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    return res.status(200).send("Welcome to MERN Stack Tutorial!");
});

mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });