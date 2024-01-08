import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginHorizontal: SIZES.medium,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small,
    borderRadius: 50,
  }),
});

export default styles;
