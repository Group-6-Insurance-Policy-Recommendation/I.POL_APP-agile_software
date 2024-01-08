import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  HeaderContainer: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: FONT.medium,
    fontWeight: "600",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  claimContainer: {
    width: "100%",
    // height: "100%",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 20,
  },
  claimImage: {
    width: 80,
    height: 80,
    // tintColor: COLORS.primary,
  },
  claimMsg: {
    width: "60%",
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.text2,
    paddingVertical: SIZES.small,
    textTransform: "capitalize",
  },
});

export default styles;
