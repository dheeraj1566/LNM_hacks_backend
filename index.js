// import studentRouter from "./routes/studentRouter.js";
import express from "express";
import "dotenv/config";
import connectToDB from "./connection.js";

const express=express(); 

const PORT = 8081;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

await connectToDB();

app.listen(PORT, () => console.log("Server started at port " + PORT));

app.use("/patient", patientRouter);