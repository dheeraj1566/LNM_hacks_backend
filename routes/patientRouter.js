import { Router } from "express";
import { register, fetchpatient } from "../Controllers/patientController";

const patientRouter = Router();

studentRouter.post("/register", fileArr, register);
studentRouter.get("/patient/:id", fetchpatient);

export default patientRouter;
