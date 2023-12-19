const mongoose = require("mongoose");

const PolicyInformationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  coverage: {
    type: String,
    required: true,
  },
  policyholderName: {
    type: String,
    required: true,
  },
  policyholderEmail: {
    type: String,
    required: true,
  },
  policyNumber: {
    type: String,
    required: true,
  },
  effectiveDate: {
    type: Date,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  insuredEntities: {
    type: [String],
    required: true,
  },
});

const PolicyInformationModel = mongoose.model(
  "PolicyInformation",
  PolicyInformationSchema
);

module.exports = PolicyInformationModel;
