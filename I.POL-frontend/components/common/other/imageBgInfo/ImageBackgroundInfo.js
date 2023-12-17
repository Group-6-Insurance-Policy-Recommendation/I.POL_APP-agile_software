import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";

const ImageBackgroundInfo = ({
  imagelink_portrait,
  type,
  name,
  coverage,
  benefits = [],
}) => {
  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        resizeMode="contain"
        style={styles.ItemBackgroundImage}
      >
        <View
          style={{
            width: "100%",
            borderTopLeftRadius: SIZES.xxLarge,
            borderTopRightRadius: SIZES.xxLarge,
            backgroundColor: COLORS.white,
            padding: SIZES.large,
          }}
        >
          <Text style={styles.policyName} numberOfLines={1}>
            Company: {name}
          </Text>
          <Text style={styles.detail}>Type: {type}</Text>
          <Text style={styles.detail} numberOfLines={1}>
            Coverage Details: {coverage}
          </Text>

          <Text style={styles.subtitle}>Benefits:</Text>
          {benefits
            .map((benefit, index) => (
              <Text key={index} style={styles.benefit}>
                {benefit}
              </Text>
            ))
            .slice(0, 2)}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ItemBackgroundImage: {
    width: "100%",
    aspectRatio: 20 / 25,
    justifyContent: "flex-end",
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 10,
  },
  policyName: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.medium,
    fontWeight: "400",
    color: COLORS.primary,
    marginBottom: 10,
  },
  detail: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: "black",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.medium,
    fontWeight: "400",
    color: COLORS.primary,
    marginTop: 10,
    marginBottom: 5,
  },
  benefit: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: "black",
    // marginLeft: 10,
  },
  ImageInfoOuterContainer: {
    paddingVertical: 24,
    paddingHorizontal: 30,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 20 * 2,
    borderTopRightRadius: 20 * 2,
  },
});

export default ImageBackgroundInfo;