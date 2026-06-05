const Appointment = require(
  "../Models/AppointmentModel"
);

// ADD APPOINTMENT
const addAppointment = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const appointment =
      await Appointment.create(req.body);

    res.status(201).json({
      success: true,
      message: "Appointment Booked Successfully",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL APPOINTMENTS
const getAppointments = async (req, res) => {
  try {
    const appointments =
      await Appointment.find();

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE APPOINTMENT
const deleteAppointment = async (req, res) => {
  try {
    const appointment =
      await Appointment.findByIdAndDelete(
        req.params.id
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE APPOINTMENT
const getAppointmentById = async (req, res) => {
  try {
    const appointment =
      await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment Not Found",
      });
    }

    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE APPOINTMENT
const updateAppointment = async (req, res) => {
  try {
    const appointment =
      await Appointment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment Updated",
      appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};