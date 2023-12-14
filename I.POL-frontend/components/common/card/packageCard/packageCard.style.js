import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 150,
    // height: 150,
    padding: SIZES.xLarge,
    margin: SIZES.xSmall,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    alignItems: "center",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "70%",
    height: "70%",
    tintColor: COLORS.secondary,
  },
  cardText: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    fontWeight: "200",
    color: COLORS.text,
    textAlign: "center",
    marginTop: SIZES.small / 1.5,
  },
});

export default styles;
