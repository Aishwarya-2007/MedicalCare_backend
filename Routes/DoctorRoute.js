const express = require("express");

const router = express.Router();

const {
  addDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} = require("../Controllers/DoctorController");

router.post("/", addDoctor);

router.get("/", getDoctors);

router.delete("/:id", deleteDoctor);

router.get("/:id", getDoctorById);
router.put("/:id", updateDoctor);

module.exports = router;