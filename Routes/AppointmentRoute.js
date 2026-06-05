const express = require("express");

const router = express.Router();

const {
  addAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require(
  "../Controllers/AppointmentController"
);


router.post("/", addAppointment);

router.get("/", getAppointments);

router.delete("/:id", deleteAppointment);

router.get("/:id", getAppointmentById);
router.put("/:id", updateAppointment);

module.exports = router;