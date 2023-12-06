import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  label: {
    padding: SIZES.small,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
  },
  editInput: {
    width: "100%",
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.large,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.tertiary,
    backgroundColor: COLORS.tertiary,
    marginBottom: SIZES.xSmall,
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontWeight: "normal",
  },
  focusedInput: {
    borderColor: COLORS.active,
    color: COLORS.text2,
    fontWeight: "medium",
  },
  editBtn: {
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    marginVertical: SIZES.xxLarge,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  editBtnText: {
    color: COLORS.white,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
});

export default styles;
