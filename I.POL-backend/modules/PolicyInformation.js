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
  policyCost: {
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
  travelInsuranceData: {
    medicalConditions: { type: String },
    travelVaccines: { type: String },
    tripCost: { type: String },
    reasons: { type: String },
    baggage: { type: String },
  },
  healthInsuranceData: {
    hospitalization: { type: String },
    surgery: { type: String },
    medication: { type: String },
    allergy: { type: String },
    medicalHistory: { type: String },
    smoking: { type: String },
    alcohol: { type: String },
    exercise: { type: String },
    diet: { type: String },
  },
  homeInsuranceData: {
    typeOfProperty: { type: String },
    location: { type: String },
    yearBuilt: { type: String },
    value: { type: String },
    size: { type: String },
    constructionMaterials: { type: String },
    EVP: { type: String },
    highValueItem: { type: String },
  },
  autoInsuranceData: {
    makeModel: { type: String },
    year: { type: String },
    registrationNumber: { type: String },
    vin: { type: String },
    usage: { type: String },
    licenseNumber: { type: String },
    drivingRecord: { type: String },
    mileage: { type: String },
  },
  lifeInsuranceData: {
    name: { type: String },
    contact: { type: String },
    relationship: { type: String },
    dependants: { type: String },
    ages: { type: String },
    finance: { type: String },
  },
  businessInsuranceData: {
    businessType: { type: String },
    industry: { type: String },
    businessLocation: { type: String },
    employeeNumber: { type: String },
    revenue: { type: String },
    businessAsset: { type: String },
    businessNature: { type: String },
    potentialLiability: { type: String },
  },
});

const PolicyInformationModel = mongoose.model(
  "PolicyInformation",
  PolicyInformationSchema
);

module.exports = PolicyInformationModel;
