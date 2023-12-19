import { StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { COLORS } from "../../../../constants";

// Rename component for clarity
const LottiePopUp = ({ animationType = "local", animationSource }) => {
  const getAnimationSource = () => {
    // Simplify conditional logic for source
    if (animationType === "local") {
      return require("./Successful");
    } else if (animationType === "remote") {
      return {
        animation: { uri: "https://www.lottiefiles.com/data/animation/41309" },
      };
    }
  };

  return (
    <View style={styles.LottieAnimationContainer}>
      <LottieView
        style={styles.LottieAnimation}
        source={getAnimationSource()}
        autoPlay
        loop={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  LottieAnimationContainer: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.lightWhite,
    justifyContent: "center",
  },
  LottieAnimation: {
    // Add more specific styles if needed
  },
});

export default LottiePopUp;
