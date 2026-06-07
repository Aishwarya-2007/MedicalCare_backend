const express = require("express");

const router = express.Router();

const {
  signupUser,
  loginUser,
  changePassword,
} = require("../Controllers/AuthController");

const verifyToken = require("../Middleware/AuthMiddleware");
const authorizeRoles = require("../Middleware/RoleMiddleware");

// Public Routes
router.post("/signup", signupUser);

router.post("/login", loginUser);

router.put(
  "/change-password",
  changePassword
);

// Protected Route
router.get(
  "/profile",
  verifyToken,
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      user: req.user,
    });
  }
);

// Admin Only Route
router.get(
  "/admin-only",
  verifyToken,
  authorizeRoles("admin"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Admin",
    });
  }
);

// Doctor Only Route
router.get(
  "/doctor-only",
  verifyToken,
  authorizeRoles("doctor"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Doctor",
    });
  }
);

// Patient Only Route
router.get(
  "/patient-only",
  verifyToken,
  authorizeRoles("patient"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Patient",
    });
  }
);

// Admin + Doctor Route
router.get(
  "/staff",
  verifyToken,
  authorizeRoles("admin", "doctor"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Staff Member",
    });
  }
);

module.exports = router;