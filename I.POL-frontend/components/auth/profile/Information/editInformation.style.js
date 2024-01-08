import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  textLabel: {
    padding: SIZES.small,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
  },
  editInput: {
    width: "100%",
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.large,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.gray2,
    marginVertical: SIZES.xSmall,
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontWeight: "normal",
  },
  focusedInput: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    color: COLORS.text2,
    fontWeight: "medium",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: SIZES.large,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontFamily: FONT.regular,
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.gray2,
    fontFamily: FONT.regular,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: FONT.regular,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  editBtn: {
    width: "100%",
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
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    fontWeight: "400",
  },
});

export default styles;
