import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";

const PaymentCall = ({ price, buttonPressHandler, buttonTitle }) => {
  return (
    <View style={styles.PriceFooter}>
      <View style={styles.PriceContainer}>
        <Text style={styles.PriceTitle}>Price</Text>
        <Text style={styles.PriceText}>
          {price.currency} <Text style={styles.Price}>{price.price}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.PayButton}
        onPress={() => buttonPressHandler()}
      >
        <Text style={styles.ButtonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  PriceFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: SIZES.medium,
  },
  PriceContainer: {
    alignItems: "center",
    width: 100,
  },
  PriceTitle: {
    fontFamily: FONT.medium,
    fontSize: 14,
    color: COLORS.text,
  },
  PriceText: {
    fontFamily: FONT.bold,
    fontSize: 24,
    color: COLORS.primary,
  },
  Price: {
    color: COLORS.text2,
  },
  PayButton: {
    backgroundColor: COLORS.primary,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.medium,
    borderRadius: 50,
  },
  ButtonText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium - 2,
    color: COLORS.white,
  },
});

export default PaymentCall;
