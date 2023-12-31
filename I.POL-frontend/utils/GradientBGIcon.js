import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomIcon from "./CustomIcon";

const GradientBGIcon = ({ name, color, size }) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#252A32", "#0C0F14"]}
        style={styles.LinearGradientBG}
      >
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 2,
    borderColor: "#21262E",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#21262E",
    overflow: "hidden",
  },
  LinearGradientBG: {
    height: 36,
    width: 36,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GradientBGIcon;
