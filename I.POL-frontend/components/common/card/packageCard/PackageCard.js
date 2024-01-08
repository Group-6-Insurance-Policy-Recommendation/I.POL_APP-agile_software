import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./packageCard.style";

const PackageCard = ({ data, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(data)}>
      {/* <TouchableOpacity style={styles.imageContainer}> */}
        <Image
          source={data.image}
          resizeMode="contain"
          style={styles.cardImage}
        />
      {/* </TouchableOpacity> */}
      <Text style={styles.cardText} numberOfLines={2}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};

export default PackageCard;
