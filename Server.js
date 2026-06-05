const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes =
  require("./Routes/AuthRoute");

app.use("/api/auth", authRoutes);

const patientRoutes =
require("./Routes/PatientRoute");

app.use(
  "/api/patients",
  patientRoutes
);

const doctorRoutes =
require("./Routes/DoctorRoute");

app.use(
  "/api/doctors",
  doctorRoutes
);

const appointmentRoutes =
require("./Routes/AppointmentRoute");

app.use(
  "/api/appointments",
  appointmentRoutes
);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(
      "MongoDB Connected Successfully"
    );
  })
  .catch((err) => {
    console.log(err);
  });

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});