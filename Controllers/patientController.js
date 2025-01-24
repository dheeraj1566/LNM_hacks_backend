import patientModel from "../models/patientModel.js";


export async function register(req, res) {


  try {
    const {
      name,
      email,
      phone,
      dob,
      gender,
      fname,
      fphone,
      laddress,
      paddress,
      role,
      qualification,
      qualificationYear,
      college,
      designation,
      company,
      course,
      otherCourse,
      referral,
      friendName,
    } = req.body;

    const newRegistration = new patientModel({
      name,
      email,
      phone,
      dob,
      gender,
      fname,
      fphone,
      laddress,
      paddress,
      role,
      qualification,
      qualificationYear,
      college,
      designation,
      company,
      course,
      otherCourse,
      referral,
      friendName,
      aadharFront,
      aadharBack,
    });
    await newRegistration.save();

    return res.status(201).send({ message: "Registration Successful" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error registering patient ", error: error.message });
  }
}

export async function fetchStudent(req, res) {}
