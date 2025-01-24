// // import studentRouter from "./routes/studentRouter.js";
// import express from "express";
// import "dotenv/config";
// import connectToDB from "./connection.js";

// const express=express(); 

// const PORT = 8081;
// const app = express();


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// await connectToDB();

// app.listen(PORT, () => console.log("Server started at port " + PORT));

// app.use("/patient", patientRouter);


import express from "express";
import "dotenv/config";
import connectToDB from "./connection.js";
import patientRouter from "./routes/patientRouter.js";  // Assuming the patientRouter is in ./routes/patientRouter.js

const app = express(); // Create the express application instance

const PORT = 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

await connectToDB(); // Establish the database connection

app.use("/patient", patientRouter); // Use the patientRouter for routes starting with /patient

app.listen(PORT, () => console.log(`Server started at port ${PORT}`)); // Start the server
