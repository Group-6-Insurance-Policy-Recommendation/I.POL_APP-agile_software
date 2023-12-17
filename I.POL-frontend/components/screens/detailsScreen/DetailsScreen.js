import { router } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONT, images, SIZES } from "../../../constants";
import ImageBackgroundInfo from "../../common/other/imageBgInfo/ImageBackgroundInfo";

const DetailsScreen = () => {
  const [price, setPrice] = useState(0);
  const [fullDesc, setFullDesc] = useState(false);

  const policyDetail = {
    policyInformation: {
      name: "Gold Health Plus",
      type: "Travel Insurance",
      coverage: "Comprehensive Health Coverage",
      policyholderName: "John Doe",
      policyNumber: "H123456789",
      effectiveDate: "2023-01-01",
      expirationDate: "2023-12-31",
      insuredEntities: ["John Doe", "Jane Doe", "Dependent1", "Dependent2"],
    },
    coverageDetails: {
      medicalCoverage: {
        description:
          "Comprehensive medical coverage for illness and accidents.",
        coverageLimit: 1000000,
        deductible: 500,
      },
      prescriptionDrugCoverage: {
        description: "Coverage for prescribed medications.",
        coverageLimit: 50000,
        deductible: 20,
      },
    },
    benefits: ["Hospitalization", "Medication", "Dental Care"],
    exclusions: [
      "Cosmetic procedures",
      "Self-inflicted injuries",
      "Pre-existing conditions",
    ],
    termsAndConditions: {
      premiums: {
        paymentFrequency: "Monthly",
        paymentDueDate: "1st of each month",
        acceptedPaymentMethods: ["Credit card", "Bank transfer"],
      },
      renewal: {
        renewalTerms:
          "Policy can be renewed annually with a premium adjustment.",
      },
      cancellation: {
        cancellationPolicy: "Policy can be canceled with a 30-day notice.",
        refundPolicy:
          "No refunds for cancellations after the first three months.",
      },
      claims: {
        claimsProcess:
          "Submit claims through the online portal or contact the claims department.",
        contactInformation: {
          email: "claims@healthinsco.com",
          phone: "1-800-123-4567",
        },
      },
    },
    responsibilities: [
      "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
      "Notification of changes: The policyholder must inform the insurer of any changes in family composition or contact details.",
      "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
    ],
    contactInformation: {
      insuranceCompanyName: "Gold Health Plus",
      customerService: {
        email: "support@healthinsco.com",
        phone: "1-888-555-1234",
      },
      claimsDepartment: {
        email: "claims@healthinsco.com",
        phone: "1-800-123-4567",
      },
    },
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.white} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <ImageBackgroundInfo
          EnableBackHandler={true}
          imagelink_portrait={images.welcome1}
          type={policyDetail.policyInformation.type}
          name={policyDetail.policyInformation.name}
          coverage={policyDetail.policyInformation.coverage}
          benefits={policyDetail.benefits}
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
                The Americano is another popular type of coffee drink, and it's
                very easy to make! It's just espresso with hot water dripping
                over it. The name came about during World War II when European
                baristas added water to their espresso drinks for the American
                soldiers stationed there. The resulting drink had a smoother,
                less concentrated flavour than espresso and thus the Americano
                was born.
              </Text>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc((prev) => !prev);
              }}
            >
              <Text numberOfLines={3} style={styles.DescriptionText}>
                The Americano is another popular type of coffee drink, and it's
                very easy to make! It's just espresso with hot water dripping
                over it. The name came about during World War II when European
                baristas added water to their espresso drinks for the American
                soldiers stationed there. The resulting drink had a smoother,
                less concentrated flavour than espresso and thus the Americano
                was born.
              </Text>
            </TouchableWithoutFeedback>
          )}

          <View style={styles.section}>
            <Text style={styles.InfoTitle}>Terms and Conditions</Text>
            <View>
              <Text style={styles.subtitle}>Premium</Text>
              <Text style={styles.subtitle2}>
                Payment Frequency:{" "}
                {policyDetail.termsAndConditions.premiums.paymentFrequency}
              </Text>
              <Text style={styles.subtitle2}>
                Payment Due Date:{" "}
                {policyDetail.termsAndConditions.premiums.paymentDueDate}
              </Text>
              <Text style={styles.subtitle2}>Accepted Payment Method:</Text>
              <Text style={styles.subtitle2}>
                -{" "}
                {
                  policyDetail.termsAndConditions.premiums
                    .acceptedPaymentMethods
                }
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Renewal</Text>
              <Text style={styles.subtitle2}>
                Renewal Terms:{" "}
                {policyDetail.termsAndConditions.renewal.renewalTerms}
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Cancellation</Text>
              <Text style={styles.subtitle2}>Cancellation Policy:</Text>
              <Text style={styles.subtitle2}>
                -{" "}
                {
                  policyDetail.termsAndConditions.cancellation
                    .cancellationPolicy
                }
              </Text>
              <Text style={styles.subtitle2}>Refund Policy:</Text>
              <Text style={styles.subtitle2}>
                - {policyDetail.termsAndConditions.cancellation.refundPolicy}
              </Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Claims</Text>
              <Text style={styles.subtitle2}>
                Claims Process:{" "}
                {policyDetail.termsAndConditions.claims.claimsProcess}
              </Text>
              <Text style={styles.subtitle2}>
                Contact Information for Claims:{" "}
                {
                  policyDetail.termsAndConditions.claims.contactInformation
                    .email
                }{" "}
                |{" "}
                {
                  policyDetail.termsAndConditions.claims.contactInformation
                    .phone
                }
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.InfoTitle}>
              Responsibilities of the Policyholder
            </Text>
            {policyDetail.responsibilities
              .map((responsibility, index) => (
                <Text key={index} style={styles.subtitle2}>
                  - {responsibility}
                </Text>
              ))
              .slice(0, 5)}
          </View>

          <View style={styles.section}>
            <Text style={styles.subtitle}>Contact Information</Text>
            <View style={styles.sectionFlex}>
              <Text style={styles.subtitle2}>
                Insurance Company Name:{" "}
                {policyDetail.contactInformation.insuranceCompanyName}
              </Text>
            </View>
            <View style={styles.sectionFlex}>
              <Text style={styles.subtitle2}>
                Customer Service:{" "}
                {policyDetail.contactInformation.customerService.email} |{" "}
                {policyDetail.contactInformation.customerService.phone}
              </Text>
            </View>

            <View style={styles.sectionFlex}>
              <Text style={styles.subtitle2}>
                Claims Department:{" "}
                {policyDetail.contactInformation.claimsDepartment.email} |{" "}
                {policyDetail.contactInformation.claimsDepartment.phone}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              router.push(`screens/other/policyPlanScreen_`);
            }}
            style={styles.pageBtn}
          >
            <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
              Select A Plan
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    // flex: 1,
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
    fontFamily: FONT.bold,
    fontSize: 16,
    color: COLORS.text,
    marginBottom: 10,
  },
  DescriptionText: {
    fontFamily: FONT.regular,
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 30,
  },
  subtitle2: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    fontWeight: "400",
    color: COLORS.text2,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.medium,
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
