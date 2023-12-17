import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONT, icons, images, SIZES } from "../../../constants";
import PolicyPlanCard from "../../common/card/policyPlanCard/PolicyPlanCard";
import PaymentCall from "../../common/other/paymentCall/PaymentCall";

const PolicyPlanScreen = () => {
  const [price, setPrice] = useState(0);
  const [displayPlan, setDisplayPlan] = useState("Standard");
  const [planID, setPlanID] = useState(1);
  const cardData = [
    {
      id: 1,
      title: "Standard",
      image: icons.silver,
    },
    {
      id: 2,
      title: "Advanced",
      image: icons.gold,
    },
    {
      id: 3,
      title: "Premium",
      image: icons.diamond,
    },
  ];

  const handleCardPress = (item) => {
    // Implement the logic to handle card press
    console.log("Card pressed:", item.title);
    if (item.title) {
      setDisplayPlan(item.title);
    }
    if (item.id) {
      setPlanID(item.id);
    }
  };

  const policyPlans = {
    standard: {
      plan: "Standard Plan",
      coverage: "Basic coverage for essential needs",
      cost: "50",
      benefits: [
        "Hospitalization coverage",
        "Outpatient services",
        "Prescription drugs",
      ],
      fees: "20",
      duration: "12 months",
      insuranceType: "Health Insurance",
      expiration: "Annual Renewal",
    },
    advanced: {
      plan: "Advanced Plan",
      coverage: "Comprehensive coverage for most needs",
      cost: "80",
      benefits: [
        "Hospitalization coverage",
        "Outpatient services",
        "Prescription drugs",
        "Dental and vision coverage",
      ],
      fees: "30",
      duration: "12 months",
      insuranceType: "Health Insurance",
      expiration: "Annual Renewal",
    },
    premium: {
      plan: "Premium Plan",
      coverage: "Top-tier coverage for all needs",
      cost: "120",
      benefits: [
        "Hospitalization coverage",
        "Outpatient services",
        "Prescription drugs",
        "Dental and vision coverage",
        "Specialized treatments",
        "Emergency medical evacuation",
      ],
      fees: "50",
      duration: "12 months",
      insuranceType: "Health Insurance",
      expiration: "Annual Renewal",
    },
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.tertiary} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={styles.FooterInfoArea}>
          <View style={styles.SizeOuterContainer}>
            {cardData.map((data) => (
              <PolicyPlanCard
                data={data}
                key={data.id}
                onPress={handleCardPress}
                selectedPlan={planID}
              />
            ))}
          </View>
        </View>

        {displayPlan === "Standard" && (
          <View style={styles.InfoMenu}>
            <Text style={styles.InfoTitle}>
              {policyPlans.standard.insuranceType} - {policyPlans.standard.plan}
            </Text>
            <View
              style={{
                width: "100%",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
              }}
            >
              <Text style={styles.labelTitle}>Coverage:</Text>
              <Text style={styles.labelText}>
                {policyPlans.standard.coverage}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.lightWhite,
              }}
            >
              <Text style={styles.labelTitle}>Benefits:</Text>
              {policyPlans.standard.benefits.map((benefit, index) => (
                <Text key={index} style={styles.labelText}>
                  {benefit}
                </Text>
              ))}
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.gray2,
              }}
            >
              <Text style={styles.labelTitle}>Cost: </Text>
              <Text style={styles.labelText}>
                ${policyPlans.standard.cost} per month
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.lightWhite,
              }}
            >
              <Text style={styles.labelTitle}>Enrollment Fee: </Text>
              <Text style={styles.labelText}>${policyPlans.standard.fees}</Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.gray2,
              }}
            >
              <Text style={styles.labelTitle}>Duration: </Text>
              <Text style={styles.labelText}>
                {policyPlans.standard.duration}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.lightWhite,
              }}
            >
              <Text style={styles.labelTitle}>Expiration: </Text>
              <Text style={styles.labelText}>
                {policyPlans.standard.expiration}
              </Text>
            </View>

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  router.push(`/screens/other/payScreen_`);
                }}
                style={styles.pageBtn}
              >
                <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
                  Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {displayPlan === "Advanced" && (
          <View style={styles.InfoMenu}>
            <Text style={styles.InfoTitle}>
              {policyPlans.advanced.insuranceType} - {policyPlans.advanced.plan}
            </Text>
            <View
              style={{
                width: "100%",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
              }}
            >
              <Text style={styles.labelTitle}>Coverage:</Text>
              <Text style={styles.labelText}>
                {policyPlans.advanced.coverage}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.lightWhite,
              }}
            >
              <Text style={styles.labelTitle}>Benefits:</Text>
              {policyPlans.advanced.benefits.map((benefit, index) => (
                <Text key={index} style={styles.labelText}>
                  {benefit}
                </Text>
              ))}
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.gray2,
              }}
            >
              <Text style={styles.labelTitle}>Cost: </Text>
              <Text style={styles.labelText}>
                ${policyPlans.advanced.cost} per month
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.lightWhite,
              }}
            >
              <Text style={styles.labelTitle}>Enrollment Fee: </Text>
              <Text style={styles.labelText}>${policyPlans.advanced.fees}</Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.gray2,
              }}
            >
              <Text style={styles.labelTitle}>Duration: </Text>
              <Text style={styles.labelText}>
                {policyPlans.advanced.duration}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.lightWhite,
              }}
            >
              <Text style={styles.labelTitle}>Expiration: </Text>
              <Text style={styles.labelText}>
                {policyPlans.advanced.expiration}
              </Text>
            </View>

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  router.push(`/screens/other/payScreen_`);
                }}
                style={styles.pageBtn}
              >
                <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
                  Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {displayPlan === "Premium" && (
          <View style={styles.InfoMenu}>
            <Text style={styles.InfoTitle}>
              {policyPlans.premium.insuranceType} - {policyPlans.premium.plan}
            </Text>
            <View
              style={{
                width: "100%",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
              }}
            >
              <Text style={styles.labelTitle}>Coverage:</Text>
              <Text style={styles.labelText}>
                {policyPlans.premium.coverage}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.lightWhite,
              }}
            >
              <Text style={styles.labelTitle}>Benefits:</Text>
              {policyPlans.premium.benefits.map((benefit, index) => (
                <Text key={index} style={styles.labelText}>
                  {benefit}
                </Text>
              ))}
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.gray2,
              }}
            >
              <Text style={styles.labelTitle}>Cost: </Text>
              <Text style={styles.labelText}>
                ${policyPlans.premium.cost} per month
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.lightWhite,
              }}
            >
              <Text style={styles.labelTitle}>Enrollment Fee: </Text>
              <Text style={styles.labelText}>${policyPlans.premium.fees}</Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.gray2,
              }}
            >
              <Text style={styles.labelTitle}>Duration: </Text>
              <Text style={styles.labelText}>
                {policyPlans.premium.duration}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SIZES.small,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderColor: COLORS.lightWhite,
              }}
            >
              <Text style={styles.labelTitle}>Expiration: </Text>
              <Text style={styles.labelText}>
                {policyPlans.premium.expiration}
              </Text>
            </View>

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  router.push(`/screens/other/payScreen_`);
                }}
                style={styles.pageBtn}
              >
                <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
                  Payment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    // flex: 1,
    backgroundColor: COLORS.tertiary,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: "space-between",
    padding: SIZES.medium,
  },
  FooterInfoArea: {
    marginVertical: 20,
  },
  InfoTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    textAlign: "center",
    color: COLORS.primary,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.primary,
  },
  InfoMenu: {
    width: "100%",
    padding: SIZES.large,
    borderRadius: SIZES.medium,
    borderBottomWidth: 1,
    borderTopColor: COLORS.gray2,
    borderBottomColor: COLORS.lightWhite,
    backgroundColor: COLORS.white,
  },
  labelTitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    fontWeight: "100",
    color: COLORS.primary,
    padding: 2,
  },
  labelText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small + 2,
    fontWeight: "100",
    color: COLORS.text,
    padding: 2,
  },
  pageBtn: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginVertical: SIZES.large,
  },
  SizeOuterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  SizeBox: {
    flex: 1,
    backgroundColor: "#21262E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
  },
  SizeText: {
    fontFamily: FONT.medium,
  },
});

export default PolicyPlanScreen;
