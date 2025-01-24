import { Router } from "express";
import { register, fetchStudent } from "../controllers/studentController.js";
import { fileArr } from "../middlewares/multer.js";

const patientRouter = Router();

studentRouter.post("/register", fileArr, register);
studentRouter.get("/patient/:id", fetchStudent);

export default studentRouter;
