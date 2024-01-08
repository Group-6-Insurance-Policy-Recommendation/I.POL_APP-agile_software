import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Linking,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  COLORS,
  FONT,
  icons,
  images,
  SHADOWS,
  SIZES,
} from "../../../constants";

const PackageInfo = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const handleRequestCallback = () => {
    const supportEmail = "pkotumfuo@st.ug.edu.gh";
    const subject = "Insurance Package Inquiry";
    const body = `Hello,
    
I'm interested in learning more about your insurance packages and potentially starting a policy.
    
Specifically, I'm looking for information on:
    
- [Package type(s) of interest (student, family, third-party, corporate health, etc.)]
- [Any specific coverage needs or preferences]
- [Any questions about eligibility, pricing, or benefits]
    
Please provide details about the available options and next steps for getting a quote or starting a policy.
    
Thank you for your assistance!
    
Sincerely,
[Your Name]
[Your Contact Information (email, phone number)]`;

    // Constructing the mailto URI
    const mailtoURI = `mailto:${supportEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Opening the mail app
    Linking.openURL(mailtoURI).catch((err) => alert("Error opening mail app."));
  };

  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
        backgroundColor: COLORS.tertiary,
        padding: SIZES.medium,
      }}
    >
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Package Info</Text>
      </View>
      <TouchableOpacity style={styles.container}>
        <TouchableOpacity style={styles.packageContainer}>
          <Image
            source={images.special}
            resizeMode="contain"
            style={styles.packageImage}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.packageMsg} numberOfLines={8}>
            Do you want explore our insurance package plans yet. Are you
            interested in learning more?
          </Text>
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={handleRequestCallback}
          >
            <Text style={styles.packageLink} numberOfLines={2}>
              Request Callback
            </Text>
            <Image
              source={icons.chevronRight}
              resizeMode="contain"
              style={styles.linkBtnImage}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PackageInfo;

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
  packageContainer: {
    width: "100%",
    // height: "100%",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  packageImage: {
    width: 80,
    height: 80,
    // tintColor: COLORS.primary,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  packageLink: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    // marginTop: 3,
    textTransform: "capitalize",
  },
  linkBtnImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
  },
  packageMsg: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.text2,
    paddingVertical: SIZES.small,
    textTransform: "capitalize",
  },
});
