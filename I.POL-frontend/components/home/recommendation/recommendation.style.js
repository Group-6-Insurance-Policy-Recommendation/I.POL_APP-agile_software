import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    fontWeight: "600",
    color: COLORS.text2,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    // marginVertical: SIZES.medium,
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    height: 50,
  },
  searchContainer2: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchImg: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: SIZES.small,
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    fontFamily: FONT.regular,
    color: COLORS.gray,
    paddingHorizontal: SIZES.medium,
  },
  searchInput2: {
    width: "80%",
    height: "100%",
    fontFamily: FONT.regular,
    color: COLORS.gray,
    paddingHorizontal: SIZES.medium,
  },
  searchInputFocus: {
    borderWidth: 0,
    borderColor: COLORS.tertiary,
    color: COLORS.text2,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.primary,
  },
  searchBtnImage2: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.text2,
  },
  headerBtn: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.gray2,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
});

export default styles;
