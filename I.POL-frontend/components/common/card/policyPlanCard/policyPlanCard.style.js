import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedPlan, data) => ({
    width: 100,
    height: 100,
    padding: SIZES.small,
    backgroundColor: selectedPlan === data.id ? COLORS.white : COLORS.lightWhite,
    borderRadius: SIZES.xSmall,
    justifyContent: "space-between",
    alignItems: "center",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "70%",
    height: "70%",
  },
  cardText: (selectedPlan, data) => ({
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    fontWeight: "400",
    color: selectedPlan === data.id ? COLORS.primary : COLORS.gray,
    marginTop: SIZES.small / 1.5,
  }),
});

export default styles;
