import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeMsg: {
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: "normal"
  },
  preMsg: {
    color: "#000",
    textAlign: "center",
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  logo: {
    width: 86,
    height: 72,
    flexShrink: 0,
  },
  logoText: {
    color: COLORS.primary,
    textAlign: "center",
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  formArea: {
    display: "flex",
    width: 360,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  formInput: {
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: COLORS.primary,
    backgroundColor: COLORS.tertiary,
  },
  actionText: {
    display: "flex",
    width: 360,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  authBtn: {
    display: "flex",
    width: 360,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  authIconsArea: {
    display: "flex",
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  authIcons: {
    width: 22,
    height: 22,
    
  }
});
