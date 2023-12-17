import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./policyPlanCard.style";

const PolicyPlanCard = ({ data, onPress, selectedPlan }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedPlan, data)}
      onPress={() => onPress(data)}
    >
      <Image
        source={data.image}
        resizeMode="center"
        style={styles.cardImage}
      />
      <Text style={styles.cardText(selectedPlan, data)} numberOfLines={1}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};

export default PolicyPlanCard;
