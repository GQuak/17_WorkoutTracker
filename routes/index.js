// Get Required Node Modules
const router = require("express").Router();

// Create variables for various routes
const htmlRoutes = require("./homeRoutes");
const apiRoutes = require("./api/api");

// Establish which route files to use for the base and api routes
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
