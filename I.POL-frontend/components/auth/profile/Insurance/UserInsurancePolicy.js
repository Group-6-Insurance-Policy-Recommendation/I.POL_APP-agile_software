import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import axios from "axios";
import HuddleScreenCard from "../../../common/card/huddleCard/HuddleScreenCard";
import { COLORS, FONT, images, SIZES } from "../../../../constants";

const UserInsurancePolicy = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);

  const [policyList, setPolicyList] = useState([]);

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const email = user?.email;

  const getPolicies = async () => {
    try {
      const response = await axios.get(
        `https://ipol-server.onrender.com/api/policy/${email}`
      );

      // Handle the response (success or failure)
      console.log("Policies retrieved:", response.data);
      setPolicyList(response.data);
      // Update your state or UI with the retrieved policies
    } catch (error) {
      // Handle the error
      if (error.response?.data?.error) {
        console.error(error.response?.data?.error);
      } else {
        alert("An Error Occurred. Try Again!");
      }
    }
  };

  const handleGetPolicies = () => {
    getPolicies();
  };

  useEffect(() => {
    handleGetPolicies();
  }, []);

  const navigationHandler = () => {
    router.push(`home`);
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        paddingTop: SIZES.medium,
        height: policyList.length <= 1 ? height : "",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={styles.ScrollViewInnerView}>
          <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText}>My Insurance Policies</Text>
          </View>
          <View style={styles.ItemContainer}>
            {policyList.length === 0 ? (
              <>
                <View style={styles.insuranceContainer}>
                  <Image
                    source={images.special}
                    resizeMode="contain"
                    style={styles.insuranceImage}
                  />
                  <Text style={styles.insuranceMsg} numberOfLines={6}>
                    Your insurance policy will be displayed here. You have no
                    insurance policy.
                  </Text>
                </View>
              </>
            ) : (
              <View style={styles.ListItemContainer}>
                {policyList.map((data, index) => (
                  <HuddleScreenCard
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    PolicyList={[data]}
                    PolicyCost={data.policyCost}
                    EffectiveDate={data.effectiveDate.slice(0, 10)}
                  />
                ))}
              </View>
            )}
          </View>
          {policyList.length !== 0 && (
            <View style={styles.logoContainer}>
              <Image
                source={images.logo}
                resizeMode="contain"
                style={styles.logoImage}
              />
              <Text style={styles.logoText}>Insurance Policy.Inc</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default UserInsurancePolicy;

const styles = StyleSheet.create({
  ScreenContainer: {
    backgroundColor: COLORS.white,
  },
  ScrollViewFlex: {
    flexGrow: 1,
    paddingHorizontal: SIZES.large,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  HeaderContainer: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: FONT.medium,
    fontWeight: "600",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  insuranceContainer: {
    width: "100%",
    // height: "100%",
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 20,
  },
  insuranceImage: {
    width: 80,
    height: 80,
    // tintColor: COLORS.primary,
  },
  insuranceMsg: {
    width: "60%",
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.text2,
    paddingVertical: SIZES.small,
    textTransform: "capitalize",
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    gap: 30,
  },
  logoContainer: {
    width: "100%",
    // height: "100%",
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.large,
    paddingVertical: SIZES.large,
  },
  logoImage: {
    width: 60,
    height: 60,
    // tintColor: COLORS.primary,
  },
  logoText: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    padding: SIZES.xSmall,
    color: COLORS.primary,
  },
});
