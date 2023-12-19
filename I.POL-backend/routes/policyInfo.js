const express = require("express");
const router = express.Router();
const PolicyInformationModel = require("../modules/PolicyInformation");

// Create Policy Information
router.post("/create", async (req, res) => {
  try {
    const {
      name,
      type,
      coverage,
      policyholderName,
      policyNumber,
      effectiveDate,
      expirationDate,
      insuredEntities,
    } = req.body;

    // Create a new policy information instance
    const newPolicyInformation = new PolicyInformationModel({
      name,
      type,
      coverage,
      policyholderName,
      policyNumber,
      effectiveDate,
      expirationDate,
      insuredEntities,
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
    const { email } = req.params;

    // Find policies with the specified email
    const policies = await PolicyInformationModel.find({
      policyholderEmail: email,
    });

    if (policies.length === 0) {
      return res
        .status(404)
        .json({ message: "No policies found for the specified email." });
    }

    res.status(200).json(policies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
