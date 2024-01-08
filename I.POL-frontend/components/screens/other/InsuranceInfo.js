import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";
import { Dropdown } from "react-native-element-dropdown";
import { router, useLocalSearchParams } from "expo-router";
import companyPolicies from "../../../data/companyPolicy";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InsuranceInfo = () => {
  const [medicalConditionFocus, setMedicalConditionFocus] = useState(false);
  const [hospitalizationFocus, setHospitalizationFocus] = useState(false);
  const [surgeryFocus, setSurgeryFocus] = useState(false);
  const [medicationFocus, setMedicationFocus] = useState(false);
  const [allergyFocus, setAllergyFocus] = useState(false);
  const [medicalHistoryFocus, setMedicalHistoryFocus] = useState(false);
  const [smokingFocus, setSmokingFocus] = useState(false);
  const [alcoholFocus, setAlcoholFocus] = useState(false);
  const [exerciseFocus, setExerciseFocus] = useState(false);
  const [dietFocus, setDietFocus] = useState(false);
  const [typeOfPropertyFocus, setTypeOfPropertyFocus] = useState(false);
  const [locationFocus, setLocationFocus] = useState(false);
  const [yearBuiltFocus, setYearBuiltFocus] = useState(false);
  const [valueFocus, setValueFocus] = useState(false);
  const [sizeFocus, setSizeFocus] = useState(false);
  const [contructionMaterialsFocus, setContructionMaterialsFocus] =
    useState(false);
  const [EVPFocus, setEVPFocus] = useState(false);
  const [highValueItemFocus, setHighValueItemFocus] = useState(false);
  const [makeModelFocus, setMakeModelFocus] = useState(false);
  const [yearFocus, setYearFocus] = useState(false);
  const [registrationNumberFocus, setRegistrationNumberFocus] = useState(false);
  const [vinFocus, setVinFocus] = useState(false);
  const [usageFocus, setUsageFocus] = useState(false);
  const [licenseNumberFocus, setLicenseNumberFocus] = useState(false);
  const [drivingRecordFocus, setDrivingRecordFocus] = useState(false);
  const [mileAgeFocus, setMileAgeFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [contactFocus, setContactFocus] = useState(false);
  const [relationshipFocus, setRelationshipFocus] = useState(false);
  const [dependantsFocus, setDependantsFocus] = useState(false);
  const [agesFocus, setAgesFocus] = useState(false);
  const [financeFocus, setFinanceFocus] = useState(false);
  const [businessTypeFocus, setBusinessTypeFocus] = useState(false);
  const [industryFocus, setIndustryFocus] = useState(false);
  const [businessLocationFocus, setBusinessLocationFocus] = useState(false);
  const [employeeNumberFocus, setEmployeeNumberFocus] = useState(false);
  const [revenueFocus, setRevenueFocus] = useState(false);
  const [businessAssetFocus, setBusinessAssetFocus] = useState(false);
  const [businessNatureFocus, setBusinessNatureFocus] = useState(false);
  const [potentialLiabilityFocus, setPotentialLiabilityFocus] = useState(false);
  const [medicalConditionsFocus, setMedicalConditionsFocus] = useState(false);
  const [travelVacineFocus, setTravelVacineFocus] = useState(false);
  const [tripCostFocus, setTripCostFocus] = useState(false);
  const [reasonsFocus, setReasonsFocus] = useState(false);
  const [baggageFocus, setBaggageFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [typeOfPropertyObject, setTypeOfPropertyObject] = useState(null);

  const [healthInsuranceData, setHealthInsuranceData] = useState({
    medicalCondition: "",
    hospitalization: "",
    surgery: "",
    medication: "",
    allergy: "",
    medicalHistory: "",
    smoking: "",
    alcohol: "",
    exercise: "",
    diet: "",
  });

  const [homeInsuranceData, setHomeInsuranceData] = useState({
    typeOfProperty: "",
    location: "",
    yearBuilt: "",
    value: "",
    size: "",
    contructionMaterials: "",
    EVP: "",
    highValueItem: "",
  });

  const [autoInsuranceData, setAutoInsuranceData] = useState({
    makeModel: "",
    year: "",
    registrationNumber: "",
    vin: "",
    usage: "",
    licenseNumber: "",
    drivingRecord: "",
    mileAge: "",
  });

  const [lifeInsuranceData, setLifeInsuranceData] = useState({
    name: "",
    contact: "",
    relationship: "",
    dependants: "",
    ages: "",
    finance: "",
  });

  const [businessInsuranceData, setBusinessInsuranceData] = useState({
    businessType: "",
    industry: "",
    businessLocation: "",
    employeeNumber: "",
    revenue: "",
    businessAsset: "",
    businessNature: "",
    potentialLiability: "",
  });

  const [travelInsuranceData, setTravelInsuranceData] = useState({
    medicalConditions: "",
    travelVacine: "",
    tripCost: "",
    reasons: "",
    baggage: "",
  });

  const handlehealthInsuranceDataChange = (name, value) => {
    setHealthInsuranceData({ ...healthInsuranceData, [name]: value });
  };

  const handlehomeInsuranceDataChange = (name, value) => {
    setHomeInsuranceData({ ...homeInsuranceData, [name]: value });
  };

  const handleautoInsuranceDataChange = (name, value) => {
    setAutoInsuranceData({ ...autoInsuranceData, [name]: value });
  };

  const handlelifeInsuranceDataChange = (name, value) => {
    setLifeInsuranceData({ ...lifeInsuranceData, [name]: value });
  };

  const handlebusinessInsuranceDataChange = (name, value) => {
    setBusinessInsuranceData({ ...businessInsuranceData, [name]: value });
  };

  const handletravelInsuranceDataChange = (name, value) => {
    setTravelInsuranceData({ ...travelInsuranceData, [name]: value });
  };

  const [companyPolicy, setCompanyPolicy] = useState([]);
  const { policyID } = useLocalSearchParams();

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);

    // Find the policy with the matching policyId
    const policy = companyPolicies.find((policy) => policy.id === policyID);

    // Set the selected policy in the component state
    setCompanyPolicy(policy);
    console.log(companyPolicy);
  }, [policyID]);

  const typeOfPropertyInfo = [
    { label: "House", value: "house" },
    { label: "Apartment", value: "apartment" },
  ];

  const handleHealthInsuranceSubmit = async () => {
    const requiredFields = [
      "medicalCondition",
      "hospitalization",
      "surgery",
      "medication",
      "allergy",
      "medicalHistory",
      "smoking",
      "alcohol",
      "exercise",
      "diet",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !healthInsuranceData[field] || healthInsuranceData[field].trim() === ""
    );

    if (missingFields.length > 0) {
      alert(
        // "Missing Information",
        `Please provide all required fields: ${missingFields.join(", ")}`,
        [{ text: "OK" }]
      );
      return; // Prevent navigation if data is incomplete
    }

    try {
      await AsyncStorage.setItem(
        "healthInsuranceData",
        JSON.stringify(healthInsuranceData)
      );
      router.push(`screens/other/policyPlanScreen_/${policyID}`);
    } catch (error) {
      // ... handle error
    }
  };

  const handleHomeInsuranceSubmit = async () => {
    const requiredFields = [
      "typeOfProperty",
      "location",
      "yearBuilt",
      "value",
      "size",
      "contructionMaterials",
      "EVP",
      "highValueItem",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !homeInsuranceData[field] || homeInsuranceData[field].trim() === ""
    );

    if (missingFields.length > 0) {
      alert(
        // "Missing Information",
        `Please provide all required fields: ${missingFields.join(", ")}`,
        [{ text: "OK" }]
      );
      return; // Prevent navigation if data is incomplete
    }

    try {
      await AsyncStorage.setItem(
        "homeInsuranceData",
        JSON.stringify(homeInsuranceData)
      );
      router.push(`screens/other/policyPlanScreen_/${policyID}`);
    } catch (error) {
      // ... handle error
    }
  };

  const handleAutoInsuranceSubmit = async () => {
    const requiredFields = [
      "makeModel",
      "year",
      "registrationNumber",
      "vin",
      "usage",
      "licenseNumber",
      "drivingRecord",
      "mileAge",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !autoInsuranceData[field] || autoInsuranceData[field].trim() === ""
    );

    if (missingFields.length > 0) {
      alert(
        // "Missing Information",
        `Please provide all required fields: ${missingFields.join(", ")}`,
        [{ text: "OK" }]
      );
      return; // Prevent navigation if data is incomplete
    }

    try {
      await AsyncStorage.setItem(
        "autoInsuranceData",
        JSON.stringify(autoInsuranceData)
      );
      router.push(`screens/other/policyPlanScreen_/${policyID}`);
    } catch (error) {
      // ... handle error
    }
  };

  const handleLifeInsuranceSubmit = async () => {
    const requiredFields = [
      "name",
      "contact",
      "relationship",
      "dependants",
      "ages",
      "finance",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !lifeInsuranceData[field] || lifeInsuranceData[field].trim() === ""
    );

    if (missingFields.length > 0) {
      alert(
        // "Missing Information",
        `Please provide all required fields: ${missingFields.join(", ")}`,
        [{ text: "OK" }]
      );
      return; // Prevent navigation if data is incomplete
    }

    try {
      await AsyncStorage.setItem(
        "lifeInsuranceData",
        JSON.stringify(lifeInsuranceData)
      );
      router.push(`screens/other/policyPlanScreen_/${policyID}`);
    } catch (error) {
      // ... handle error
    }
  };

  const handleBusinessInsuranceSubmit = async () => {
    const requiredFields = [
      "businessType",
      "industry",
      "businessLocation",
      "employeeNumber",
      "revenue",
      "businessAsset",
      "businessNature",
      "potentialLiability",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !businessInsuranceData[field] ||
        businessInsuranceData[field].trim() === ""
    );

    if (missingFields.length > 0) {
      alert(
        // "Missing Information",
        `Please provide all required fields: ${missingFields.join(", ")}`,
        [{ text: "OK" }]
      );
      return; // Prevent navigation if data is incomplete
    }

    try {
      await AsyncStorage.setItem(
        "businessInsuranceData",
        JSON.stringify(businessInsuranceData)
      );
      router.push(`screens/other/policyPlanScreen_/${policyID}`);
    } catch (error) {
      // ... handle error
    }
  };

  const handleTravelInsuranceSubmit = async () => {
    const requiredFields = [
      "medicalConditions",
      "travelVacine",
      "tripCost",
      "reasons",
      "baggage",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !travelInsuranceData[field] || travelInsuranceData[field].trim() === ""
    );

    if (missingFields.length > 0) {
      alert(
        // "Missing Information",
        `Please provide all required fields: ${missingFields.join(", ")}`,
        [{ text: "OK" }]
      );
      return; // Prevent navigation if data is incomplete
    }

    try {
      await AsyncStorage.setItem(
        "travelInsuranceData",
        JSON.stringify(travelInsuranceData)
      );
      router.push(`screens/other/policyPlanScreen_/${policyID}`);
    } catch (error) {
      // ... handle error
    }
  };

  return (
    <SafeAreaView
      style={{
        width: width,
        // height: height,
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView
        style={{ padding: SIZES.medium }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>
            {companyPolicy?.insuranceType || "Insurance Info"}
          </Text>
        </View>
        <Text style={styles.forgotMsg} numberOfLines={8}>
          Let's tailor your insurance experience! Provide some quick info about
          your chosen coverage so we can assist you further.
        </Text>
        {companyPolicy?.insuranceType === "Health Insurance" && (
          <KeyboardAvoidingView style={styles.formArea} behavior="padding">
            <Text style={styles.textLabel}>Pre-existing Conditions</Text>
            <TextInput
              style={[
                styles.formInput,
                medicalConditionFocus && styles.focusedInput,
              ]}
              placeholder="pre-existing conditions"
              keyboardType="default"
              value={healthInsuranceData.medicalCondition}
              onChangeText={(value) =>
                handlehealthInsuranceDataChange("medicalCondition", value)
              }
              onFocus={() => setMedicalConditionFocus(true)}
              onBlur={() => setMedicalConditionFocus(false)}
            />

            <Text style={styles.textLabel}>Hospitalizations</Text>
            <TextInput
              style={[
                styles.formInput,
                hospitalizationFocus && styles.focusedInput,
              ]}
              placeholder="hospitalizations"
              keyboardType="default"
              value={healthInsuranceData.hospitalization}
              onChangeText={(value) =>
                handlehealthInsuranceDataChange("hospitalization", value)
              }
              onFocus={() => setHospitalizationFocus(true)}
              onBlur={() => setHospitalizationFocus(false)}
            />

            <Text style={styles.textLabel}>Surgeries</Text>
            <TextInput
              style={[styles.formInput, surgeryFocus && styles.focusedInput]}
              placeholder="surgeries"
              keyboardType="default"
              value={healthInsuranceData.surgery}
              onChangeText={(value) =>
                handlehealthInsuranceDataChange("surgery", value)
              }
              onFocus={() => setSurgeryFocus(true)}
              onBlur={() => setSurgeryFocus(false)}
            />

            <Text style={styles.textLabel}>Medications</Text>
            <TextInput
              style={[styles.formInput, medicationFocus && styles.focusedInput]}
              placeholder="medications"
              keyboardType="default"
              value={healthInsuranceData.medication}
              onChangeText={(value) =>
                handlehealthInsuranceDataChange("medication", value)
              }
              onFocus={() => setMedicationFocus(true)}
              onBlur={() => setMedicationFocus(false)}
            />

            <Text style={styles.textLabel}>Allergies</Text>
            <TextInput
              style={[styles.formInput, allergyFocus && styles.focusedInput]}
              placeholder="allergies"
              keyboardType="default"
              value={healthInsuranceData.allergy}
              name="allergy"
              onChangeText={(value) =>
                handlehealthInsuranceDataChange("allergy", value)
              }
              onFocus={() => setAllergyFocus(true)}
              onBlur={() => setAllergyFocus(false)}
            />

            <Text style={styles.textLabel}>Family Medical History</Text>
            <TextInput
              style={[
                styles.formInput,
                medicalHistoryFocus && styles.focusedInput,
              ]}
              placeholder="any"
              keyboardType="default"
              value={healthInsuranceData.medicalHistory}
              onChangeText={(value) =>
                handlehealthInsuranceDataChange("medicalHistory", value)
              }
              onFocus={() => setMedicalHistoryFocus(true)}
              onBlur={() => setMedicalHistoryFocus(false)}
            />

            <Text style={styles.textLabel}>Smoking Status</Text>
            <TextInput
              style={[styles.formInput, smokingFocus && styles.focusedInput]}
              placeholder="e.g., low, high severe"
              keyboardType="default"
              value={healthInsuranceData.smoking}
              onChangeText={(value) =>
                handlehealthInsuranceDataChange("smoking", value)
              }
              onFocus={() => setSmokingFocus(true)}
              onBlur={() => setSmokingFocus(false)}
            />

            <Text style={styles.textLabel}>Alcohol Consumption</Text>
            <TextInput
              style={[styles.formInput, alcoholFocus && styles.focusedInput]}
              placeholder="e.g., low, high severe"
              keyboardType="default"
              value={healthInsuranceData.alcohol}
              onChangeText={(value) =>
                handlehealthInsuranceDataChange("alcohol", value)
              }
              onFocus={() => setAlcoholFocus(true)}
              onBlur={() => setAlcoholFocus(false)}
            />

            <Text style={styles.textLabel}>Exercise Habits</Text>
            <TextInput
              style={[styles.formInput, exerciseFocus && styles.focusedInput]}
              placeholder="exercise habits"
              keyboardType="default"
              value={healthInsuranceData.exercise}
              name="exercise"
              onChangeText={(value) =>
                handlehealthInsuranceDataChange("exercise", value)
              }
              onFocus={() => setExerciseFocus(true)}
              onBlur={() => setExerciseFocus(false)}
            />

            <Text style={styles.textLabel}>Diet</Text>
            <TextInput
              style={[styles.formInput, dietFocus && styles.focusedInput]}
              placeholder="diet"
              keyboardType="default"
              value={healthInsuranceData.diet}
              name="diet"
              onChangeText={(value) =>
                handlehealthInsuranceDataChange("diet", value)
              }
              onFocus={() => setDietFocus(true)}
              onBlur={() => setDietFocus(false)}
            />

            {isLoading ? (
              <TouchableOpacity style={styles.focussedBtn}>
                <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.authBtn}
                onPress={handleHealthInsuranceSubmit}
              >
                <Text
                  style={styles.authBtnText}
                  onPress={handleHealthInsuranceSubmit}
                >
                  Send
                </Text>
              </TouchableOpacity>
            )}
          </KeyboardAvoidingView>
        )}

        {companyPolicy?.insuranceType === "Home Insurance" && (
          <KeyboardAvoidingView style={styles.formArea} behavior="padding">
            <Text style={styles.textLabel}>Type of Property</Text>
            <View style={{ width: "100%" }}>
              <Dropdown
                style={[
                  styles.dropdown,
                  typeOfPropertyFocus && {
                    borderColor: COLORS.primary,
                    backgroundColor: COLORS.white,
                  },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={typeOfPropertyInfo}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={
                  !typeOfPropertyFocus ? "Select Type of Property..." : "..."
                }
                searchPlaceholder="Search..."
                value={typeOfPropertyObject}
                onChangeText={(value) => {
                  setTypeOfPropertyObject(value);
                  handlehomeInsuranceDataChange("typeOfProperty", value.label);
                  setTypeOfPropertyFocus(false);
                }}
                onFocus={() => setTypeOfPropertyFocus(true)}
                onBlur={() => setTypeOfPropertyFocus(false)}
              />
            </View>

            <Text style={styles.textLabel}>Location</Text>
            <TextInput
              style={[styles.formInput, locationFocus && styles.focusedInput]}
              placeholder="Enter location"
              keyboardType="default"
              value={homeInsuranceData.location}
              onChangeText={(value) =>
                handlehomeInsuranceDataChange("location", value)
              }
              onFocus={() => setLocationFocus(true)}
              onBlur={() => setLocationFocus(false)}
            />

            <Text style={styles.textLabel}>Year Built</Text>
            <TextInput
              style={[styles.formInput, yearBuiltFocus && styles.focusedInput]}
              placeholder="year built"
              keyboardType="default"
              value={homeInsuranceData.yearBuilt}
              onChangeText={(value) =>
                handlehomeInsuranceDataChange("yearBuilt", value)
              }
              onFocus={() => setYearBuiltFocus(true)}
              onBlur={() => setYearBuiltFocus(false)}
            />

            <Text style={styles.textLabel}>Size</Text>
            <TextInput
              style={[styles.formInput, sizeFocus && styles.focusedInput]}
              placeholder="size"
              keyboardType="default"
              value={homeInsuranceData.size}
              onChangeText={(value) =>
                handlehomeInsuranceDataChange("size", value)
              }
              onFocus={() => setSizeFocus(true)}
              onBlur={() => setSizeFocus(false)}
            />

            <Text style={styles.textLabel}>Value</Text>
            <TextInput
              style={[styles.formInput, valueFocus && styles.focusedInput]}
              placeholder="value"
              keyboardType="default"
              value={homeInsuranceData.value}
              onChangeText={(value) =>
                handlehomeInsuranceDataChange("value", value)
              }
              onFocus={() => setValueFocus(true)}
              onBlur={() => setValueFocus(false)}
            />

            <Text style={styles.textLabel}>Construction Materials</Text>
            <TextInput
              style={[
                styles.formInput,
                contructionMaterialsFocus && styles.focusedInput,
              ]}
              placeholder="construction materials"
              keyboardType="default"
              value={homeInsuranceData.contructionMaterials}
              onChangeText={(value) =>
                handlehomeInsuranceDataChange("contructionMaterials", value)
              }
              onFocus={() => setContructionMaterialsFocus(true)}
              onBlur={() => setContructionMaterialsFocus(false)}
            />

            <Text style={styles.textLabel}>Estimated Value of Possessions</Text>
            <TextInput
              style={[styles.formInput, EVPFocus && styles.focusedInput]}
              placeholder="value"
              keyboardType="default"
              value={homeInsuranceData.EVP}
              onChangeText={(value) =>
                handlehomeInsuranceDataChange("EVP", value)
              }
              onFocus={() => setEVPFocus(true)}
              onBlur={() => setEVPFocus(false)}
            />

            <Text style={styles.textLabel}>High-Value Items</Text>
            <TextInput
              style={[
                styles.formInput,
                highValueItemFocus && styles.focusedInput,
              ]}
              placeholder="any"
              keyboardType="default"
              value={homeInsuranceData.highValueItem}
              onChangeText={(value) =>
                handlehomeInsuranceDataChange("highValueItem", value)
              }
              onFocus={() => setHighValueItemFocus(true)}
              onBlur={() => setHighValueItemFocus(false)}
            />

            {isLoading ? (
              <TouchableOpacity style={styles.focussedBtn}>
                <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.authBtn}
                onPress={handleHomeInsuranceSubmit}
              >
                <Text
                  style={styles.authBtnText}
                  onPress={handleHomeInsuranceSubmit}
                >
                  Send
                </Text>
              </TouchableOpacity>
            )}
          </KeyboardAvoidingView>
        )}

        {companyPolicy?.insuranceType === "Auto Insurance" && (
          <KeyboardAvoidingView style={styles.formArea} behavior="padding">
            <Text style={styles.textLabel}>Make and Model</Text>
            <TextInput
              style={[styles.formInput, makeModelFocus && styles.focusedInput]}
              placeholder="make and model"
              keyboardType="default"
              value={autoInsuranceData.makeModel}
              onChangeText={(value) =>
                handleautoInsuranceDataChange("makeModel", value)
              }
              onFocus={() => setMakeModelFocus(true)}
              onBlur={() => setMakeModelFocus(false)}
            />

            <Text style={styles.textLabel}>Year</Text>
            <TextInput
              style={[styles.formInput, yearFocus && styles.focusedInput]}
              placeholder="year"
              keyboardType="default"
              value={autoInsuranceData.year}
              onChangeText={(value) =>
                handleautoInsuranceDataChange("year", value)
              }
              onFocus={() => setYearFocus(true)}
              onBlur={() => setYearFocus(false)}
            />

            <Text style={styles.textLabel}>Registration Number</Text>
            <TextInput
              style={[
                styles.formInput,
                registrationNumberFocus && styles.focusedInput,
              ]}
              placeholder="registration number"
              keyboardType="default"
              value={autoInsuranceData.registrationNumber}
              onChangeText={(value) =>
                handleautoInsuranceDataChange("registrationNumber", value)
              }
              onFocus={() => setRegistrationNumberFocus(true)}
              onBlur={() => setRegistrationNumberFocus(false)}
            />

            <Text style={styles.textLabel}>
              Vehicle Identification Number (VIN)
            </Text>
            <TextInput
              style={[styles.formInput, vinFocus && styles.focusedInput]}
              placeholder="VIN"
              keyboardType="default"
              value={autoInsuranceData.vin}
              onChangeText={(value) =>
                handleautoInsuranceDataChange("vin", value)
              }
              onFocus={() => setVinFocus(true)}
              onBlur={() => setVinFocus(false)}
            />

            <Text style={styles.textLabel}>Usage</Text>
            <TextInput
              style={[styles.formInput, usageFocus && styles.focusedInput]}
              placeholder="personal, business, commuting"
              keyboardType="default"
              value={autoInsuranceData.usage}
              onChangeText={(value) =>
                handleautoInsuranceDataChange("usage", value)
              }
              onFocus={() => setUsageFocus(true)}
              onBlur={() => setUsageFocus(false)}
            />

            <Text style={styles.textLabel}>License Number</Text>
            <TextInput
              style={[
                styles.formInput,
                licenseNumberFocus && styles.focusedInput,
              ]}
              placeholder="license number"
              keyboardType="default"
              value={autoInsuranceData.licenseNumber}
              onChangeText={(value) =>
                handleautoInsuranceDataChange("licenseNumber", value)
              }
              onFocus={() => setLicenseNumberFocus(true)}
              onBlur={() => setLicenseNumberFocus(false)}
            />

            <Text style={styles.textLabel}>Driving Record</Text>
            <TextInput
              style={[
                styles.formInput,
                drivingRecordFocus && styles.focusedInput,
              ]}
              placeholder="accidents, violations"
              keyboardType="default"
              value={autoInsuranceData.drivingRecord}
              onChangeText={(value) =>
                handleautoInsuranceDataChange("drivingRecord", value)
              }
              onFocus={() => setDrivingRecordFocus(true)}
              onBlur={() => setDrivingRecordFocus(false)}
            />

            <Text style={styles.textLabel}>Annual MileAge</Text>
            <TextInput
              style={[styles.formInput, mileAgeFocus && styles.focusedInput]}
              placeholder="annual mileAge"
              keyboardType="default"
              value={autoInsuranceData.mileAge}
              onChangeText={(value) =>
                handleautoInsuranceDataChange("mileAge", value)
              }
              onFocus={() => setMileAgeFocus(true)}
              onBlur={() => setMileAgeFocus(false)}
            />

            {isLoading ? (
              <TouchableOpacity style={styles.focussedBtn}>
                <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.authBtn}
                onPress={handleAutoInsuranceSubmit}
              >
                <Text
                  style={styles.authBtnText}
                  onPress={handleAutoInsuranceSubmit}
                >
                  Send
                </Text>
              </TouchableOpacity>
            )}
          </KeyboardAvoidingView>
        )}

        {companyPolicy?.insuranceType === "Life Insurance" && (
          <KeyboardAvoidingView style={styles.formArea} behavior="padding">
            <Text style={styles.textLabel}>Benefitiary Information</Text>
            <TextInput
              style={[styles.formInput, nameFocus && styles.focusedInput]}
              placeholder="name"
              keyboardType="default"
              value={lifeInsuranceData.name}
              onChangeText={(value) =>
                handlelifeInsuranceDataChange("name", value)
              }
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
            />

            <TextInput
              style={[styles.formInput, contactFocus && styles.focusedInput]}
              placeholder="contact detail"
              keyboardType="default"
              value={lifeInsuranceData.contact}
              onChangeText={(value) =>
                handlelifeInsuranceDataChange("contact", value)
              }
              onFocus={() => setContactFocus(true)}
              onBlur={() => setContactFocus(false)}
            />

            <Text style={styles.textLabel}>
              Relationship To The Policyholder
            </Text>
            <TextInput
              style={[
                styles.formInput,
                relationshipFocus && styles.focusedInput,
              ]}
              placeholder="name"
              keyboardType="default"
              value={lifeInsuranceData.relationship}
              onChangeText={(value) =>
                handlelifeInsuranceDataChange("relationship", value)
              }
              onFocus={() => setRelationshipFocus(true)}
              onBlur={() => setRelationshipFocus(false)}
            />

            <Text style={styles.textLabel}>Number of Financial Dependents</Text>
            <TextInput
              style={[styles.formInput, dependantsFocus && styles.focusedInput]}
              placeholder="3 children, 1 spouse, etc."
              keyboardType="default"
              value={lifeInsuranceData.dependants}
              onChangeText={(value) =>
                handlelifeInsuranceDataChange("dependants", value)
              }
              onFocus={() => setDependantsFocus(true)}
              onBlur={() => setDependantsFocus(false)}
            />

            <Text style={styles.textLabel}>Their Ages and financial Needs</Text>
            <TextInput
              style={[styles.formInput, agesFocus && styles.focusedInput]}
              placeholder="ages .eg(13, 20, 44)"
              keyboardType="default"
              value={lifeInsuranceData.ages}
              onChangeText={(value) =>
                handlelifeInsuranceDataChange("ages", value)
              }
              onFocus={() => setAgesFocus(true)}
              onBlur={() => setAgesFocus(false)}
            />

            <TextInput
              style={[styles.formInput, financeFocus && styles.focusedInput]}
              placeholder="financial needs .eg(education)"
              keyboardType="default"
              value={lifeInsuranceData.finance}
              onChangeText={(value) =>
                handlelifeInsuranceDataChange("finance", value)
              }
              onFocus={() => setFinanceFocus(true)}
              onBlur={() => setFinanceFocus(false)}
            />

            {isLoading ? (
              <TouchableOpacity style={styles.focussedBtn}>
                <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.authBtn}
                onPress={handleLifeInsuranceSubmit}
              >
                <Text
                  style={styles.authBtnText}
                  onPress={handleLifeInsuranceSubmit}
                >
                  Send
                </Text>
              </TouchableOpacity>
            )}
          </KeyboardAvoidingView>
        )}

        {companyPolicy?.insuranceType === "Business Insurance" && (
          <KeyboardAvoidingView style={styles.formArea} behavior="padding">
            <Text style={styles.textLabel}>Type of Business</Text>
            <TextInput
              style={[
                styles.formInput,
                businessTypeFocus && styles.focusedInput,
              ]}
              placeholder="type of business"
              keyboardType="default"
              value={businessInsuranceData.businessType}
              onChangeText={(value) =>
                handlebusinessInsuranceDataChange("businessType", value)
              }
              onFocus={() => setBusinessTypeFocus(true)}
              onBlur={() => setBusinessTypeFocus(false)}
            />

            <Text style={styles.textLabel}>Industry</Text>
            <TextInput
              style={[styles.formInput, industryFocus && styles.focusedInput]}
              placeholder="industry"
              keyboardType="default"
              value={businessInsuranceData.industry}
              onChangeText={(value) =>
                handlebusinessInsuranceDataChange("industry", value)
              }
              onFocus={() => setIndustryFocus(true)}
              onBlur={() => setIndustryFocus(false)}
            />

            <Text style={styles.textLabel}>Location</Text>
            <TextInput
              style={[
                styles.formInput,
                businessLocationFocus && styles.focusedInput,
              ]}
              placeholder="location"
              keyboardType="default"
              value={businessInsuranceData.businessLocation}
              onChangeText={(value) =>
                handlebusinessInsuranceDataChange("businessLocation", value)
              }
              onFocus={() => setBusinessLocationFocus(true)}
              onBlur={() => setBusinessLocationFocus(false)}
            />

            <Text style={styles.textLabel}>Number of Employees</Text>
            <TextInput
              style={[
                styles.formInput,
                employeeNumberFocus && styles.focusedInput,
              ]}
              placeholder="number of employees"
              keyboardType="default"
              value={businessInsuranceData.employeeNumber}
              onChangeText={(value) =>
                handlebusinessInsuranceDataChange("employeeNumber", value)
              }
              onFocus={() => setEmployeeNumberFocus(true)}
              onBlur={() => setEmployeeNumberFocus(false)}
            />

            <Text style={styles.textLabel}>Annual Revenue</Text>
            <TextInput
              style={[styles.formInput, revenueFocus && styles.focusedInput]}
              placeholder="annual revenue"
              keyboardType="default"
              value={businessInsuranceData.revenue}
              onChangeText={(value) =>
                handlebusinessInsuranceDataChange("revenue", value)
              }
              onFocus={() => setRevenueFocus(true)}
              onBlur={() => setRevenueFocus(false)}
            />

            <Text style={styles.textLabel}>Assets</Text>
            <TextInput
              style={[
                styles.formInput,
                businessAssetFocus && styles.focusedInput,
              ]}
              placeholder="inventory, equipment, property"
              keyboardType="default"
              value={businessInsuranceData.businessAsset}
              onChangeText={(value) =>
                handlebusinessInsuranceDataChange("businessAsset", value)
              }
              onFocus={() => setBusinessAssetFocus(true)}
              onBlur={() => setBusinessAssetFocus(false)}
            />

            <Text style={styles.textLabel}>Nature of Business Operations</Text>
            <TextInput
              style={[
                styles.formInput,
                businessNatureFocus && styles.focusedInput,
              ]}
              placeholder="nature of business opreations"
              keyboardType="default"
              value={businessInsuranceData.businessNature}
              onChangeText={(value) =>
                handlebusinessInsuranceDataChange("businessNature", value)
              }
              onFocus={() => setBusinessNatureFocus(true)}
              onBlur={() => setBusinessNatureFocus(false)}
            />

            <Text style={styles.textLabel}>Potential Liabilities</Text>
            <TextInput
              style={[
                styles.formInput,
                potentialLiabilityFocus && styles.focusedInput,
              ]}
              placeholder="e.g., product liability, professional negligence"
              keyboardType="default"
              value={businessInsuranceData.potentialLiability}
              onChangeText={(value) =>
                handlebusinessInsuranceDataChange("potentialLiability", value)
              }
              onFocus={() => setPotentialLiabilityFocus(true)}
              onBlur={() => setPotentialLiabilityFocus(false)}
            />

            {isLoading ? (
              <TouchableOpacity style={styles.focussedBtn}>
                <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.authBtn}
                onPress={handleBusinessInsuranceSubmit}
              >
                <Text
                  style={styles.authBtnText}
                  onPress={handleBusinessInsuranceSubmit}
                >
                  Send
                </Text>
              </TouchableOpacity>
            )}
          </KeyboardAvoidingView>
        )}

        {companyPolicy?.insuranceType === "Travel Insurance" && (
          <KeyboardAvoidingView style={styles.formArea} behavior="padding">
            <Text style={styles.textLabel}>Medical Information</Text>
            <TextInput
              style={[
                styles.formInput,
                medicalConditionsFocus && styles.focusedInput,
              ]}
              placeholder="existing medical conditions"
              keyboardType="default"
              value={travelInsuranceData.medicalConditions}
              onChangeText={(value) =>
                handletravelInsuranceDataChange("medicalConditions", value)
              }
              onFocus={() => setMedicalConditionsFocus(true)}
              onBlur={() => setMedicalConditionsFocus(false)}
            />

            <TextInput
              style={[
                styles.formInput,
                travelVacineFocus && styles.focusedInput,
              ]}
              placeholder="travel vaccines received"
              keyboardType="default"
              value={travelInsuranceData.travelVacine}
              onChangeText={(value) =>
                handletravelInsuranceDataChange("travelVacine", value)
              }
              onFocus={() => setTravelVacineFocus(true)}
              onBlur={() => setTravelVacineFocus(false)}
            />

            <Text style={styles.textLabel}>Trip Cost</Text>
            <TextInput
              style={[styles.formInput, tripCostFocus && styles.focusedInput]}
              placeholder="flights, accommodation, activities, etc."
              keyboardType="default"
              value={travelInsuranceData.tripCost}
              onChangeText={(value) =>
                handletravelInsuranceDataChange("tripCost", value)
              }
              onFocus={() => setTripCostFocus(true)}
              onBlur={() => setTripCostFocus(false)}
            />

            <Text style={styles.textLabel}>Cancellation Reasons</Text>
            <TextInput
              style={[styles.formInput, reasonsFocus && styles.focusedInput]}
              placeholder="e.g., medical emergencies, family issues, flight disruptions"
              keyboardType="default"
              value={travelInsuranceData.reasons}
              onChangeText={(value) =>
                handletravelInsuranceDataChange("reasons", value)
              }
              onFocus={() => setReasonsFocus(true)}
              onBlur={() => setReasonsFocus(false)}
            />

            <Text style={styles.textLabel}>Baggage Information</Text>
            <TextInput
              style={[styles.formInput, baggageFocus && styles.focusedInput]}
              placeholder="estimated value of luggage and travel essentials"
              keyboardType="default"
              value={travelInsuranceData.baggage}
              onChangeText={(value) =>
                handletravelInsuranceDataChange("baggage", value)
              }
              onFocus={() => setBaggageFocus(true)}
              onBlur={() => setBaggageFocus(false)}
            />

            {isLoading ? (
              <TouchableOpacity style={styles.focussedBtn}>
                <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.authBtn}
                onPress={handleTravelInsuranceSubmit}
              >
                <Text
                  style={styles.authBtnText}
                  onPress={handleTravelInsuranceSubmit}
                >
                  Send
                </Text>
              </TouchableOpacity>
            )}
          </KeyboardAvoidingView>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default InsuranceInfo;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  HeaderContainer: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderText: {
    fontFamily: FONT.medium,
    fontWeight: "600",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  forgotMsg: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    paddingVertical: SIZES.small,
    textTransform: "capitalize",
  },
  formArea: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 50,
  },
  textLabel: {
    paddingVertical: SIZES.small,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    textAlign: "left",
  },
  formInput: {
    width: "100%",
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.large,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.gray2,
    marginBottom: SIZES.xSmall,
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontWeight: "medium",
  },
  focusedInput: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.lightWhite,
    color: COLORS.text2,
  },
  authBtn: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.small,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  focussedBtn: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.tertiary,
  },
  authBtnText: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    fontWeight: "400",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: SIZES.large,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontFamily: FONT.regular,
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.gray2,
    fontFamily: FONT.regular,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: FONT.regular,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
