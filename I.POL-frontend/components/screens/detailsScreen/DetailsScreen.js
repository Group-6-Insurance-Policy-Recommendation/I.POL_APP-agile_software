import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { COLORS, FONT, images, SIZES } from "../../../constants";
import companyPolicies from "../../../data/companyPolicy";
import ImageBackgroundInfo from "../../common/other/imageBgInfo/ImageBackgroundInfo";

const DetailsScreen = () => {
  const [companyPolicy, setCompanyPolicy] = useState([]);
  const [fullDesc, setFullDesc] = useState(false);

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
    console.log(policy);
  }, [policyID]);

  const handleInsuranceInfo = (policyID) => {
    router.push(`screens/other/insuranceInfo_/${policyID}`);
  };

  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={images.welcome2}
          type={companyPolicy?.policyDetail?.policyInformation.type}
          name={companyPolicy?.policyDetail?.policyInformation.name}
          coverage={companyPolicy?.policyDetail?.policyInformation.coverage}
          benefits={companyPolicy?.policyDetail?.benefits}
        />

        <View style={styles.FooterInfoArea}>
          <Text style={styles.InfoTitle}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc((prev) => !prev);
              }}
            >
              <Text style={styles.DescriptionText}>
                {companyPolicy?.description}
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc((prev) => !prev);
              }}
            >
              <Text numberOfLines={3} style={styles.DescriptionText}>
                {companyPolicy?.description}
              </Text>
            </TouchableWithoutFeedback>
          )}

          <View style={styles.section}>
            <Text style={styles.InfoTitle}>Terms and Conditions</Text>
            <View>
              <Text style={styles.subtitle}>Premium</Text>
              <Text style={styles.subtitle2}>
                Payment Frequency:{" "}
                {
                  companyPolicy?.policyDetail?.termsAndConditions.premiums
                    .paymentFrequency
                }
              </Text>
              <Text style={styles.subtitle2}>
                Payment Due Date:{" "}
                {
                  companyPolicy?.policyDetail?.termsAndConditions.premiums
                    .paymentDueDate
                }
              </Text>
              <Text style={styles.subtitle2}>Accepted Payment Method:</Text>
              <Text style={styles.subtitle2}>
                {companyPolicy?.policyDetail?.termsAndConditions.premiums.acceptedPaymentMethods.map(
                  (responsibility, index) => (
                    <Text key={index} style={styles.subtitle2}>
                      🎗️ {responsibility}
                      {"\n"}
                    </Text>
                  )
                )}
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Renewal</Text>
              <Text style={styles.subtitle2}>
                Renewal Terms:{" "}
                {
                  companyPolicy?.policyDetail?.termsAndConditions.renewal
                    .renewalTerms
                }
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Cancellation</Text>
              <Text style={styles.subtitle2}>Cancellation Policy:</Text>
              <Text style={styles.subtitle2}>
                🎈{" "}
                {
                  companyPolicy?.policyDetail?.termsAndConditions.cancellation
                    .cancellationPolicy
                }
              </Text>
              <Text style={styles.subtitle2}>Refund Policy:</Text>
              <Text style={styles.subtitle2}>
                ⌚{" "}
                {
                  companyPolicy?.policyDetail?.termsAndConditions.cancellation
                    .refundPolicy
                }
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Claims</Text>
              <Text style={styles.subtitle2}>
                Claims Process:{" "}
                {
                  companyPolicy?.policyDetail?.termsAndConditions.claims
                    .claimsProcess
                }
              </Text>
              <Text style={styles.subtitle2}>
                Contact Information for Claims:{" "}
                {
                  companyPolicy?.policyDetail?.termsAndConditions.claims
                    .contactInformation.email
                }{" "}
                |{" "}
                {
                  companyPolicy?.policyDetail?.termsAndConditions.claims
                    .contactInformation.phone
                }
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.InfoTitle}>
              Responsibilities of the Policyholder
            </Text>
            {companyPolicy?.policyDetail?.responsibilities
              .map((responsibility, index) => (
                <Text key={index} style={styles.subtitle2}>
                  💧 {responsibility}
                </Text>
              ))
              .slice(0, 5)}
          </View>

          <View style={styles.section}>
            <Text style={styles.InfoTitle}>{"\n"}Contact Information</Text>
            <View style={styles.sectionFlex}>
              <Text style={styles.subtitle2}>
                Insurance Company Name:{" "}
                {
                  companyPolicy?.policyDetail?.contactInformation
                    .insuranceCompanyName
                }
              </Text>
            </View>
            <View style={styles.sectionFlex}>
              <Text style={styles.subtitle2}>
                Customer Service:{" "}
                {
                  companyPolicy?.policyDetail?.contactInformation
                    .customerService.email
                }{" "}
                |{" "}
                {
                  companyPolicy?.policyDetail?.contactInformation
                    .customerService.phone
                }
              </Text>
            </View>

            <View style={styles.sectionFlex}>
              <Text style={styles.subtitle2}>
                Claims Department:{" "}
                {
                  companyPolicy?.policyDetail?.contactInformation
                    .claimsDepartment.email
                }{" "}
                |{" "}
                {
                  companyPolicy?.policyDetail?.contactInformation
                    .claimsDepartment.phone
                }
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => handleInsuranceInfo(companyPolicy?.id)}
            style={styles.pageBtn}
          >
            <Text
              style={{ color: COLORS.white, fontFamily: FONT.medium }}
              onPress={() => handleInsuranceInfo(companyPolicy?.id)}
            >
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    backgroundColor: COLORS.white,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  FooterInfoArea: {
    padding: SIZES.large,
  },
  InfoTitle: {
    fontFamily: FONT.regular,
    fontWeight: "600",
    fontSize: 16,
    color: COLORS.primary,
    marginBottom: 10,
  },
  DescriptionText: {
    fontFamily: FONT.regular,
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 30,
  },
  subtitle2: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    fontWeight: "400",
    color: COLORS.gray,
    marginVertical: 5,
  },
  subtitle: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    fontWeight: "400",
    color: COLORS.primary,
    marginVertical: 10,
  },
  sectionFlex: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
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
});

export default DetailsScreen;
