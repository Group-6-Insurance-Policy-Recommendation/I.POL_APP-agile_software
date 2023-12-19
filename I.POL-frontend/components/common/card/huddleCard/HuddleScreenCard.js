import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT, images, SIZES } from "../../../../constants";
import HuddleItemCard from "./HuddleItemCard";

const HuddleScreenCard = ({
  navigationHandler,
  PolicyList,
  PolicyCost,
  EffectiveDate,
}) => {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardHeader}>
        <View>
          <Text style={styles.HeaderTitle}>Effective Date</Text>
          <Text style={styles.HeaderSubtitle}>{EffectiveDate}</Text>
        </View>
      </View>
      <View style={styles.ListContainer}>
        {PolicyList.map((data, index) => (
          <TouchableOpacity
            key={index.toString() + data.id}
            onPress={() => {
              navigationHandler({
                id: data.id,
              });
            }}
          >
            <HuddleItemCard
              type={data.type}
              name={data.name}
              policyholderName={data.policyholderName}
              policyNumber={data.policyNumber}
              coverage={data.coverage}
              imagelink_square={images.history}
              expirationDate={data.expirationDate.slice(0, 10)}
              prices={""}
              cost={PolicyCost}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    gap: 10,
  },
  CardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
  },
  HeaderTitle: {
    fontFamily: FONT.bold,
    fontSize: 16,
    color: COLORS.text2,
  },
  HeaderSubtitle: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  ListContainer: {
    gap: 20,
  },
});

export default HuddleScreenCard;
