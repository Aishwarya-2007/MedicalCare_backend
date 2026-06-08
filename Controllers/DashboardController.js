const Doctor = require("../Models/DoctorModel");
const Patient = require("../Models/PatientModel");
const Appointment = require("../Models/AppointmentModel");

const getDashboardStats = async (req, res) => {
  try {
    const totalDoctors =
      await Doctor.countDocuments();

    const totalPatients =
      await Patient.countDocuments();

    const totalAppointments =
      await Appointment.countDocuments();

    const recentAppointments = await Appointment.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      totalDoctors,
      totalPatients,
      totalAppointments,
      recentAppointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};