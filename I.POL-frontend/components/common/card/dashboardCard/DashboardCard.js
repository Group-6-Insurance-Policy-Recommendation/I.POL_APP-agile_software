import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./dashboardCard.style";

const DashboardCard = ({ data, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(data)}>
      {/* <TouchableOpacity style={styles.imageContainer}> */}
        <Image
          source={data.image}
          resizeMode="contain"
          style={styles.cardImage}
        />
      {/* </TouchableOpacity> */}
      <Text style={styles.cardText} numberOfLines={1}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};

export default DashboardCard;
