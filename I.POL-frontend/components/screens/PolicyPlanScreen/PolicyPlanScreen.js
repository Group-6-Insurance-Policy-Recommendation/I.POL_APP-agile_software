import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONT, icons, SIZES } from "../../../constants";
import companyPolicies from "../../../data/companyPolicy";
import PolicyPlanCard from "../../common/card/policyPlanCard/PolicyPlanCard";

const PolicyPlanScreen = () => {
  const [displayPlan, setDisplayPlan] = useState("Standard");
  const [planID, setPlanID] = useState(1);
  const [companyPolicy, setCompanyPolicy] = useState([]);

  const { policyID } = useLocalSearchParams();
  
  const standardTotal =
    parseInt(companyPolicy?.policyPlans?.standard?.cost, 10) +
    parseInt(companyPolicy?.policyPlans?.standard?.fees, 10);
  const advancedTotal =
    parseInt(companyPolicy?.policyPlans?.advanced?.cost, 10) +
    parseInt(companyPolicy?.policyPlans?.advanced?.fees, 10);
  const premiumTotal =
    parseInt(companyPolicy?.policyPlans?.premium?.cost, 10) +
    parseInt(companyPolicy?.policyPlans?.premium?.fees, 10);

  useEffect(() => {
    // Find the policy with the matching policyId
    const policy = companyPolicies.find((policy) => policy.id === policyID);

    // Set the selected policy in the component state
    setCompanyPolicy(policy);
  }, [policyID]);

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
      image: icons.emerald,
    },
  ];

  const handleSelectPay = (policyID, price) => {
    router.push(`/screens/other/payScreen_/${policyID}/${price}`);
  };

  const handleCardPress = (item) => {
    // Implement the logic to handle card press
    if (item.title) {
      setDisplayPlan(item.title);
    }
    if (item.id) {
      setPlanID(item.id);
    }
  };

  return (
    <View style={styles.ScreenContainer}>
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
              {companyPolicy?.policyPlans?.standard?.insuranceType} -{" "}
              {companyPolicy?.policyPlans?.standard?.plan}
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
                {companyPolicy?.policyPlans?.standard?.coverage}
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
              {companyPolicy?.policyPlans?.standard?.benefits.map(
                (benefit, index) => (
                  <Text key={index} style={styles.labelText}>
                    {benefit}
                  </Text>
                )
              )}
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
                ₵{companyPolicy?.policyPlans?.standard?.cost} per month
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
              <Text style={styles.labelText}>
                ₵{companyPolicy?.policyPlans?.standard?.fees}
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
                borderColor: COLORS.gray2,
              }}
            >
              <Text style={styles.labelTitle}>Duration: </Text>
              <Text style={styles.labelText}>
                {companyPolicy?.policyPlans?.standard?.duration}
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
                {companyPolicy?.policyPlans?.standard?.expiration}
              </Text>
            </View>

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => handleSelectPay(policyID, standardTotal)}
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
              {companyPolicy?.policyPlans?.advanced?.insuranceType} -{" "}
              {companyPolicy?.policyPlans?.advanced?.plan}
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
                {companyPolicy?.policyPlans?.advanced?.coverage}
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
              {companyPolicy?.policyPlans?.advanced?.benefits.map(
                (benefit, index) => (
                  <Text key={index} style={styles.labelText}>
                    {benefit}
                  </Text>
                )
              )}
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
                ₵{companyPolicy?.policyPlans?.advanced?.cost} per month
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
              <Text style={styles.labelText}>
                ₵{companyPolicy?.policyPlans?.advanced?.fees}
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
                borderColor: COLORS.gray2,
              }}
            >
              <Text style={styles.labelTitle}>Duration: </Text>
              <Text style={styles.labelText}>
                {companyPolicy?.policyPlans?.advanced?.duration}
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
                {companyPolicy?.policyPlans?.advanced?.expiration}
              </Text>
            </View>

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => handleSelectPay(policyID, advancedTotal)}
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
              {companyPolicy?.policyPlans?.premium?.insuranceType} -{" "}
              {companyPolicy?.policyPlans?.premium?.plan}
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
                {companyPolicy?.policyPlans?.premium?.coverage}
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
              {companyPolicy?.policyPlans?.premium?.benefits.map(
                (benefit, index) => (
                  <Text key={index} style={styles.labelText}>
                    {benefit}
                  </Text>
                )
              )}
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
                ₵{companyPolicy?.policyPlans?.premium?.cost} per month
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
              <Text style={styles.labelText}>
                ₵{companyPolicy?.policyPlans?.premium?.fees}
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
                borderColor: COLORS.gray2,
              }}
            >
              <Text style={styles.labelTitle}>Duration: </Text>
              <Text style={styles.labelText}>
                {companyPolicy?.policyPlans?.premium?.duration}
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
                {companyPolicy?.policyPlans?.premium?.expiration}
              </Text>
            </View>

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => handleSelectPay(policyID, premiumTotal)}
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
    backgroundColor: COLORS.primary,
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
    fontSize: SIZES.medium - 2,
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
