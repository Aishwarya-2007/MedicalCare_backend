const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const authRoutes = require("./Routes/AuthRoute");
const doctorRoutes = require("./Routes/DoctorRoute");
const patientRoutes = require("./Routes/PatientRoute");
const appointmentRoutes = require("./Routes/AppointmentRoute");
const serviceRoutes = require("./Routes/serviceRoutes");
const dashboardRoutes = require("./Routes/DashboardRoute");

app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/dashboard", dashboardRoutes);

// DB CONNECT
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log(err));

// SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});