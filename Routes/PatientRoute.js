const express = require("express");

const router = express.Router();

const {
  addPatient,
  getPatients,
  deletePatient,
  getPatientById,
  updatePatient,
} = require("../Controllers/PatientController");

router.post("/", addPatient);
router.get("/", getPatients);
router.delete("/:id", deletePatient);
router.put("/:id", updatePatient);
router.get("/", getPatients);
router.get("/:id", getPatientById);

module.exports = router;