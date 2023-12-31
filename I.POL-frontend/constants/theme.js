const COLORS = {
  primary: "#0CBC8B",
  secondary: "#4caf50",
  // secondary: "#1DB954",
  tertiary: "#F1FFF5",

  text: "#494949",
  text2: "#333",
  gray: "#83829A",
  gray2: "#C1C0C8",

  active: "#0EACA3",
  white: "#FFFFFF",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#0CBC8B",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 4,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
