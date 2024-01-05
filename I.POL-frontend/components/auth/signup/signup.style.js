import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    width: "100%",
    paddingVertical: SIZES.large,
  },
  welcomeMsg: {
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    fontWeight: "600",
  },
  preMsg: {
    color: "#000",
    textAlign: "center",
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    fontWeight: "400",
    paddingVertical: SIZES.large,
    color: COLORS.text,
  },
  formArea: {
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  formInput: {
    width: "100%",
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.large,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.gray2,
    marginBottom: SIZES.xSmall,
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontWeight: "medium",
  },
  focusedInput: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.lightWhite,
    color: COLORS.text2,
  },
  actionText: {
    padding: SIZES.small,
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.text,
    paddingVertical: SIZES.large,
  },
  cta: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    paddingVertical: SIZES.large,
  },
  authBtn: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  focussedBtn: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.tertiary,
  },
  authBtnText: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    fontWeight: "400",
  },
  signupOptions: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    textAlign: "center",
    color: COLORS.gray,
  },
  socialButtonsContainer: {
    marginVertical: SIZES.xxLarge,
    flexDirection: "row",
    justifyContent: "center",
  },
  socialButton: {
    padding: SIZES.medium,
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.medium,
    marginHorizontal: SIZES.medium,
  },
});

export default styles;
