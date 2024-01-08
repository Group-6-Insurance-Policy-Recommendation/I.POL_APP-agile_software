import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, icons, SIZES } from "../../../../constants";
import styles from "./feedback.style";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const Feedback = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const handleContactSupport = () => {
    const supportEmail = "pkotumfuo@st.ug.edu.gh";
    const subject = "Customer Support Request";
    const body = "Hello, I need assistance with the following:\n\n";

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
        <Text style={styles.HeaderText}>Feedback</Text>
      </View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => router.push(`screens/quotas`)}
      >
        <TouchableOpacity style={styles.feedbackContainer}>
          <Image
            source={icons.feedback}
            resizeMode="contain"
            style={styles.feedbackImage}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.feedbackMsg} numberOfLines={8}>
            We hope you're enjoying your experience with our insurance app! Your
            satisfaction is our top priority, and we'd love to hear your
            thoughts on how we can tailor our services to better meet your
            needs.
          </Text>
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() => router.push(`screens/quotas`)}
          >
            <Text style={styles.feedbackLink} numberOfLines={2}>
              Make a preference
            </Text>
            <Image
              source={icons.chevronRight}
              resizeMode="contain"
              style={styles.linkBtnImage}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.feedbackLabel}
        onPress={handleContactSupport}
      >
        <View style={styles.labelTab}>
          <View style={styles.icon}>
            <MaterialIcons
              name="contact-support"
              color={COLORS.text2}
              size={SIZES.large}
            />
          </View>
          <Text style={styles.labelText}>Contact Support</Text>
        </View>
        <Image
          source={icons.chevronRight}
          resizeMode="contain"
          style={styles.linkBtnImage}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Feedback;
