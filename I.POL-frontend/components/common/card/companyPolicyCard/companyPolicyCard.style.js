import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  policyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    fontWeight: "400",
    color: COLORS.primary,
  },
  policyCov: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.text,
    marginTop: 3,
    textTransform: "capitalize",
  },
  policyDesc: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.text,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
