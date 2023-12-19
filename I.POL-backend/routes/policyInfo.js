const express = require("express");
const router = express.Router();
const PolicyInformationModel = require("../modules/PolicyInformation");

// Create Policy Information
router.post("/create", async (req, res) => {
  try {
    // Validate required fields
    const requiredFields = [
      "name",
      "type",
      "coverage",
      "policyholderName",
      "policyholderEmail",
      "policyNumber",
      "policyCost",
      "effectiveDate",
      "expirationDate",
    ];
    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Check for existing policy with same email and number
    const existingPolicy = await PolicyInformationModel.findOne({
      policyholderEmail: req.body.policyholderEmail,
      policyNumber: req.body.policyNumber,
    });

    if (existingPolicy) {
      return res.status(409).json({
        error: "A policy with the same email and policy number already exists.",
      });
    }

    // Create a new policy information instance
    const newPolicyInformation = new PolicyInformationModel({
      name: req.body.name,
      type: req.body.type,
      coverage: req.body.coverage,
      policyholderName: req.body.policyholderName,
      policyholderEmail: req.body.policyholderEmail,
      policyNumber: req.body.policyNumber,
      policyCost: req.body.policyCost,
      effectiveDate: req.body.effectiveDate,
      expirationDate: req.body.expirationDate,
      insuredEntities: req.body.insuredEntities,
    });

    // Save the policy information to the database
    const savedPolicyInformation = await newPolicyInformation.save();

    res.status(201).json(savedPolicyInformation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:email", async (req, res) => {
  try {
    const email = req.params.email;

    // Find policies with the specified email
    const policies = await PolicyInformationModel.find({
      policyholderEmail: email,
    });

    if (policies.length === 0) {
      return res
        .status(404)
        .json({ error: "No policies found for the specified email." });
    }

    res.status(200).json(policies);
  } catch (error) {
    // Handle specific errors
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    } else {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

module.exports = router;
