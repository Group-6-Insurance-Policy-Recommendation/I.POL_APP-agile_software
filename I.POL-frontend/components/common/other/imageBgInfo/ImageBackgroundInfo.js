import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
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
            backgroundColor: COLORS.primary,
            padding: SIZES.large,
          }}
        >
          <Text style={styles.policyName} numberOfLines={1}>
            {name}
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
    aspectRatio: 20 / 20,
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
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    fontWeight: "400",
    color: COLORS.white,
    marginBottom: 10,
  },
  detail: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    fontWeight: "400",
    color: COLORS.lightWhite,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    fontWeight: "400",
    color: COLORS.white,
    marginTop: 10,
    marginBottom: 5,
  },
  benefit: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
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
