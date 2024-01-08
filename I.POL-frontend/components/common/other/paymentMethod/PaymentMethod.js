import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONT, SIZES } from "../../../../constants";

const PaymentMethod = ({ paymentMode, name, icon }) => {
  return (
    <View
      style={[
        styles.PaymentCardContainer,
        {
          borderColor: paymentMode === name ? COLORS.primary : COLORS.white,
        },
      ]}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.gray2, COLORS.gray2]}
        style={styles.LinearGradientRegular}
      >
        <Image source={icon} style={styles.PaymentImage} />
        <Text style={styles.PaymentTitle}>{name}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  PaymentCardContainer: {
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  LinearGradientWallet: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    paddingHorizontal: 24,
    gap: 24,
    borderRadius: 16,
  },
  WalletRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  LinearGradientRegular: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    paddingHorizontal: 24,
    gap: 24,
    borderRadius: 14,
  },
  PaymentTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  PaymentPrice: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.text2,
  },
  PaymentImage: {
    height: 30,
    width: 30,
  },
});

export default PaymentMethod;
