import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
// import EmptyListAnimation from "../components/EmptyListAnimation";
import { COLORS, FONT, SIZES } from "../../../constants";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import HuddleScreenCard from "../../common/card/huddleCard/HuddleScreenCard";
import axios from "axios";

const HuddleScreen = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);

  const [policyList, setPolicyList] = useState([]);

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const email = user.email;

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
      if (error?.response?.data) {
        console.error("Error getting policies:", error.response.data);
        alert(error.response.data);
      } else if (error.response?.data?.error) {
        alert(error.response?.data?.error);
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

  const buttonPressHandler = () => {
    setTimeout(() => {}, 2000);
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        paddingTop: SIZES.medium,
        height: height,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={styles.ScrollViewInnerView}>
          <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText}>My Huddles</Text>
          </View>
          <View style={styles.ItemContainer}>
            {/* <HeaderBar title="Order History" /> */}

            {policyList === null ? (
              //   <EmptyListAnimation title={"No Order History"} />
              <></>
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
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 100,
  },
  HeaderContainer: {
    paddingHorizontal: SIZES.large,
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
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: 20,
    gap: 30,
  },
});

export default HuddleScreen;
