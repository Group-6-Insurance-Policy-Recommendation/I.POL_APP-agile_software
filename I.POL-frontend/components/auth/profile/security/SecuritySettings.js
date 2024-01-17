import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONT, SIZES, SHADOWS, icons } from "../../../../constants";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const SecuritySettings = () => {
  const [width, setWidth] = useState("auto");
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
        backgroundColor: COLORS.tertiary,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: SIZES.medium,
        }}
      >
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>Security Settings</Text>
        </View>
        <TouchableOpacity
          style={styles.feedbackLabel}
          onPress={() => router.push(`/profile/changePassword_`)}
        >
          <View style={styles.labelTab}>
            <View style={styles.icon}>
              <Ionicons
                name="compass-outline"
                color={COLORS.text2}
                size={SIZES.large}
              />
            </View>
            <Text style={styles.labelText}>Change Password</Text>
          </View>
          <Image
            source={icons.chevronRight}
            resizeMode="contain"
            style={styles.linkBtnImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.feedbackLabel}
          onPress={() => router.push(`/profile/deleteAccount_`)}
        >
          <View style={styles.labelTab}>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="delete"
                color={COLORS.text2}
                size={SIZES.large}
              />
            </View>
            <Text style={styles.labelText}>Delete Account</Text>
          </View>
          <Image
            source={icons.chevronRight}
            resizeMode="contain"
            style={styles.linkBtnImage}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecuritySettings;

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
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: FONT.medium,
    fontWeight: "600",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  linkBtnImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
  },
  feedbackMsg: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.text2,
    paddingVertical: SIZES.small,
    textTransform: "capitalize",
  },
  feedbackLabel: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    marginVertical: SIZES.small,
  },
  labelTab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  labelText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    fontWeight: "100",
    color: COLORS.text,
    padding: 2,
  },
});
