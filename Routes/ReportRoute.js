const express = require("express");
const router = express.Router();

const Doctor = require("../Models/DoctorModel");
const Patient = require("../Models/PatientModel");
const Appointment = require("../Models/AppointmentModel");
const Service = require("../Models/Service");

router.get("/", async (req, res) => {
  try {
    const totalDoctors = await Doctor.countDocuments();
    const totalPatients = await Patient.countDocuments();
    const totalAppointments =
      await Appointment.countDocuments();
    const totalServices =
      await Service.countDocuments();

    res.json({
      totalDoctors,
      totalPatients,
      totalAppointments,
      totalServices,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;