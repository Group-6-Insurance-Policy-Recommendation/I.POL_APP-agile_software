import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PaymentMethod from "../../common/other/paymentMethod/PaymentMethod";
// import PopUpAnimation from "../../common/other/popUpAnimation/PopUpAnimation";
import CustomIcon from "../../../utils/CustomIcon";
import PaymentCall from "../../common/other/paymentCall/PaymentCall";
import { COLORS, FONT, icons, SIZES } from "../../../constants";
import { router, useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import companyPolicies from "../../../data/companyPolicy";
import { createPolicy } from "../../../redux/actions/policyThunk";
// import LottiePopUp from "../../common/other/lottiePopUp/LottiePopUp";

const PaymentList = [
  {
    name: "Google Pay",
    icon: icons.gpay,
  },
  {
    name: "Apple Pay",
    icon: icons.applepay,
  },
  {
    name: "Amazon Pay",
    icon: icons.amazonpay,
  },
];

const PayScreen = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);

  const [paymentMode, setPaymentMode] = useState("Credit Card");
  // const [showAnimation, setShowAnimation] = useState(false);

  const dispatch = useDispatch();
  const { policyID, price } = useLocalSearchParams();
  const [companyPolicy, setCompanyPolicy] = useState([]);

  useEffect(() => {
    // Find the policy with the matching policyId
    const policy = companyPolicies.find((policy) => policy.id === policyID);

    // Set the selected policy in the component state
    setCompanyPolicy(policy);
    console.log(policy);
  }, [policyID]);

  const handleCreatePolicy = () => {
    // Check if user profile firstname and lastname are empty
    if (
      !user ||
      !user.profile ||
      !user.profile.firstname ||
      !user.profile.lastname
    ) {
      alert(
        "Please complete your profile with your first and last name before creating a policy."
      );
      return;
    }

    // Get current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Calculate expiration date (assuming one year from now)
    const expirationDate = new Date(
      currentYear + 1,
      currentDate.getMonth(),
      currentDate.getDate()
    );

    // Create a new policy with updated details
    const policyData = {
      name: companyPolicy?.policyDetail?.policyInformation.name,
      type: companyPolicy?.policyDetail?.policyInformation.type,
      coverage: companyPolicy?.policyDetail?.policyInformation.coverage,
      policyNumber: companyPolicy?.policyDetail?.policyInformation.policyNumber,
      // policyholderName: "John Doe",
      policyholderName: `${user.profile.firstname} ${user.profile.lastname}`,
      policyholderEmail: user?.email,
      policyCost: price,
      effectiveDate: currentDate.toISOString().split("T")[0], // Format current date as YYYY-MM-DD
      expirationDate: expirationDate.toISOString().split("T")[0], // Format expiration date as YYYY-MM-DD
      insuredEntities: ["policyholderName"],
    };
    console.log(policyData);

    dispatch(createPolicy(policyData));
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.lightWhite} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>Payments</Text>
        </View>

        <View style={styles.PaymentOptionsContainer}>
          <TouchableOpacity
            onPress={() => {
              setPaymentMode("Credit Card");
            }}
          >
            <View
              style={[
                styles.CreditCardContainer,
                {
                  borderColor:
                    paymentMode == "Credit Card" ? COLORS.primary : COLORS.gray,
                },
              ]}
            >
              <Text style={styles.CreditCardTitle}>Credit Card</Text>
              <View style={styles.CreditCardBG}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.LinearGradientStyle}
                  colors={[COLORS.gray, "#0C0F14"]}
                >
                  <View style={styles.CreditCardRow}>
                    <CustomIcon
                      name="chip"
                      size={20 * 2}
                      color={COLORS.primary}
                    />
                    <CustomIcon
                      name="visa"
                      size={30 * 2}
                      color={COLORS.primary}
                    />
                  </View>
                  <View style={styles.CreditCardNumberContainer}>
                    <Text style={styles.CreditCardNumber}>3879</Text>
                    <Text style={styles.CreditCardNumber}>8923</Text>
                    <Text style={styles.CreditCardNumber}>6745</Text>
                    <Text style={styles.CreditCardNumber}>4638</Text>
                  </View>
                  <View style={styles.CreditCardRow}>
                    <View style={styles.CreditCardNameContainer}>
                      <Text style={styles.CreditCardNameSubitle}>
                        Card Holder Name
                      </Text>
                      <Text style={styles.CreditCardNameTitle}>
                        Prince Stiles
                      </Text>
                    </View>
                    <View style={styles.CreditCardDateContainer}>
                      <Text style={styles.CreditCardNameSubitle}>
                        Expiry Date
                      </Text>
                      <Text style={styles.CreditCardNameTitle}>02/30</Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {PaymentList.map((data) => (
            <TouchableOpacity
              key={data.name}
              onPress={() => {
                setPaymentMode(data.name);
              }}
            >
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ marginTop: 30 }}></View>
        <PaymentCall
          buttonTitle={`Pay with ${paymentMode}`}
          price={{ price: price, currency: "$" }}
          buttonPressHandler={handleCreatePolicy}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    // flex: 1,
    backgroundColor: COLORS.white,
  },
  LottieAnimation: {
    // flex: 1,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  HeaderContainer: {
    paddingHorizontal: 24,
    paddingVertical: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: FONT.bold,
    fontWeight: "600",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  PaymentOptionsContainer: {
    padding: 15,
    gap: 15,
  },
  CreditCardContainer: {
    padding: 10,
    gap: 10,
    borderRadius: 15 * 2,
    borderWidth: 3,
  },
  CreditCardTitle: {
    fontFamily: FONT.bold,
    fontSize: 14,
    color: COLORS.text,
    marginLeft: 10,
  },
  CreditCardBG: {
    backgroundColor: COLORS.secondary,
    borderRadius: 25,
  },
  LinearGradientStyle: {
    borderRadius: 25,
    gap: 36,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  CreditCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CreditCardNumberContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  CreditCardNumber: {
    fontFamily: FONT.bold,
    fontSize: 18,
    color: COLORS.white,
    letterSpacing: 4,
  },
  CreditCardNameSubitle: {
    fontFamily: FONT.regular,
    fontSize: 12,
    color: "#AEAEAE",
  },
  CreditCardNameTitle: {
    fontFamily: FONT.medium,
    fontSize: 18,
    color: COLORS.white,
  },
  CreditCardNameContainer: {
    alignItems: "flex-start",
  },
  CreditCardDateContainer: {
    alignItems: "flex-end",
  },
});

export default PayScreen;
