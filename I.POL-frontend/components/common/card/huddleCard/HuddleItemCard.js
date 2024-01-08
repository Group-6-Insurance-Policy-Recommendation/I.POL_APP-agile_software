import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FONT, COLORS, SIZES } from "../../../../constants";

const HuddleItemCard = ({
  type,
  name,
  imagelink_square,
  cost,
  policyholderName,
  policyNumber,
  expirationDate,
  coverage,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.gray, COLORS.lightWhite]}
      style={styles.CardLinearGradient}
    >
      <View style={styles.CardInfoContainer}>
        <View style={styles.CardImageInfoContainer}>
          <Image
            source={imagelink_square}
            resizeMode="center"
            style={styles.Image}
          />
          <View>
            <Text style={styles.CardTitle}>{name.slice(0, 15)}...</Text>
            <Text style={styles.CardSubtitle}>{type}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.CardCurrency}>
            ₵ <Text style={styles.Cost}>{cost}</Text>
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.CardSubtitle} numberOfLines={1}>
          Coverage: {coverage}
        </Text>
      </View>

      <View style={styles.CardTableRow}>
        <View style={styles.CardTableRow}>
          <View style={styles.BoxLeft}>
            <Text style={styles.SizeText}>Policy Holder</Text>
          </View>
          <View style={styles.BoxRight}>
            <Text style={styles.Detail}>{policyholderName}</Text>
          </View>
        </View>
      </View>

      <View style={styles.CardTableRow}>
        <View style={styles.CardTableRow}>
          <View style={styles.BoxLeft}>
            <Text style={styles.SizeText}>Policy Number</Text>
          </View>
          <View style={styles.BoxRight}>
            <Text style={styles.Detail}>{policyNumber}</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.CardSubtitle2} numberOfLines={1}>
          Expiry Date: {expirationDate}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  CardLinearGradient: {
    gap: 20,
    padding: 20,
    borderRadius: 25,
  },
  CardInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CardImageInfoContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  Image: {
    height: 40,
    width: 40,
    borderRadius: 15,
  },
  CardTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    fontWeight: "600",
    color: COLORS.white,
  },
  CardSubtitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  CardSubtitle2: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    textAlign: "right",
    color: COLORS.text,
  },
  CardCurrency: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  Cost: {
    fontFamily: FONT.regular,
    color: COLORS.primary,
    fontSize: SIZES.medium,
  },
  CardTableRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  BoxLeft: {
    backgroundColor: COLORS.white,
    height: 45,
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // borderRightWidth: 1,
    // borderRightColor: "#252A32",
  },
  SizeText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
  },
  BoxRight: {
    backgroundColor: COLORS.gray2,
    height: 45,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // borderLeftWidth: 1,
    // borderLeftColor: "#252A32",
  },
  Detail: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
  },
});

export default HuddleItemCard;
