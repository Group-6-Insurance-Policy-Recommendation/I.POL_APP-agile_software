import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.gray2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightWhite,
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
    color: COLORS.white,
  },
  policyCov: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.primary,
    marginTop: 3,
    textTransform: "capitalize",
  },
  policyDesc: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.lightWhite,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
