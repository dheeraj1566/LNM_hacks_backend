import { Schema, model } from "mongoose";

const patientSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    dob: String,
    gender: String,
    aadharFront: String,
    aadharBack: String,
    college: String,
    company: String,
    course: String,
    designation: String,
    fname: String,
    fphone: String,
    friendName: String,
    gender: String,
    laddress: String,
    paddress: String,
    otherCourse: String,
    qualification: String,
    qualificationYear: String,
    referral: String,
    role: String,
  },
  { timestamps: true }
);
const patientModel = model("patient", patientSchema);
export default  patientModel;
