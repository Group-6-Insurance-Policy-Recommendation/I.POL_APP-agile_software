import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
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
  feedbackContainer: {
    width: "100%",
    // height: "100%",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  feedbackImage: {
    width: 80,
    height: 80,
    // tintColor: COLORS.primary,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  feedbackLink: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    // marginTop: 3,
    textTransform: "capitalize",
  },
  linkBtnImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
  },
  feedbackMsg: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.text2,
    paddingVertical: SIZES.small,
    textTransform: "capitalize",
  },
  feedbackLabel: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    marginVertical: SIZES.medium,
  },
  labelTab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  labelText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    fontWeight: "100",
    color: COLORS.text,
    padding: 2,
  },
});

export default styles;
