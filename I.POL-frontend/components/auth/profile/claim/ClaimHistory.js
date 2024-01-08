import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./claimHistory.style";
import { COLORS, images, SIZES } from "../../../../constants";

const ClaimHistory = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);
  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
        backgroundColor: COLORS.tertiary,
        padding: SIZES.medium,
      }}
    >
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Claim History</Text>
      </View>
      <TouchableOpacity style={styles.claimContainer}>
        <Image
          source={images.special}
          resizeMode="contain"
          style={styles.claimImage}
        />
        <Text style={styles.claimMsg} numberOfLines={6}>
          Your claim history will be displayed here. You have no claim history.
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ClaimHistory;
