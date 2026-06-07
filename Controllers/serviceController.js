const Service = require("../models/Service");


// Get All Services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Add Service
exports.addService = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const newService = new Service({
      name,
      description,
      price,
    });

    await newService.save();

    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Update Service
exports.updateService = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Delete Service
exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};