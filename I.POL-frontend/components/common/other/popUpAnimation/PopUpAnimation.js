import { StyleSheet, View } from "react-native";
import React from "react";
// import LottieView from "lottie-react-native";
import LottiePlayer from "@lottiefiles/react-lottie-player";
import { COLORS } from "../../../../constants";

const PopUpAnimation = ({ style }) => {
  return (
    <View style={styles.LottieAnimationContainer}>
      {/* <LottieView
        style={style}
        source={require("./Successful.json")}
        autoPlay
        loop={false}
      /> */}
      <LottiePlayer
        source={{
          animation: {
            uri: "https://www.lottiefiles.com/data/animation/41309",
          },
        }}
        loop={false}
        autoPlay
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
});

export default PopUpAnimation;
