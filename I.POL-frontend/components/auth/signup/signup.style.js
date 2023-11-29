import { StyleSheet, Platform } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    paddingVertical: SIZES.large,
  },
  welcomeMsg: {
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    fontStyle: "normal",
  },
  preMsg: {
    color: "#000",
    textAlign: "center",
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    fontStyle: "normal",
  },
  logoArea: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    flexShrink: 0,
  },
  logoText: {
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    fontStyle: "normal",
  },
  formArea: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  formInput: {
    width: "100%",
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.large,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.tertiary,
    marginBottom: SIZES.xSmall,
    fontFamily: FONT.regular,
  },
  focusedInput: {
    borderColor: COLORS.active,
  },
  actionText: {
    padding: SIZES.small,
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
  },
  cta: {
    color: COLORS.primary,
    fontFamily: FONT.regular,
  },
  authBtn: {
    width: "100%",
    padding: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  authBtnText: {
    color: COLORS.white,
    fontFamily: FONT.medium,
  },
  signupOptions: {
    padding: SIZES.small,
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    textAlign: "center",
    color: COLORS.gray,
  },
  authIconsArea: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  authIcons: {
    padding: SIZES.small,
    borderRadius: SIZES.xSmall,
    // ...Platform.select({
    //   ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    //   },
    //   android: {
    //     elevation: 2,
    //   },
    // }),
  },
});

export default styles;
