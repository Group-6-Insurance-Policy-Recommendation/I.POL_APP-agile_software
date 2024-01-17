import { router, Stack } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { COLORS, images, SIZES, FONT } from "../../../constants";
import { useEffect, useState } from "react";

const CategoryScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const categories = [
    { label: "Health Insurance", value: "health" },
    { label: "Auto Insurance", value: "car" },
    { label: "Home Insurance", value: "home" },
    { label: "Life Insurance", value: "life" },
    { label: "Business Insurance", value: "business" },
    { label: "Travel Insurance", value: "travel" },
  ];

  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const handleInsuranceTypeSelect = (insuranceType) => {
    // Navigate to the next screen with selected insurance type
    if (selectedCategory === null) {
      return alert("No category is selected!");
    }

    router.push(`/screens/quotas/budgetScreen_/${insuranceType}`);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          width: width,
          height: height,
          padding: SIZES.medium,
        }}
      >
        <View style={styles.pageImgContainer}>
          <Image
            source={images.recommendation}
            resizeMode="center"
            style={{
              width: width - 20,
              height: height / 2,
            }}
          />
        </View>
        <View style={{ paddingVertical: SIZES.xxLarge }}>
          <Text style={styles.txt}>Select Your Preferred Category...</Text>
          <View style={{ width: "100%" }}>
            <Dropdown
              style={[
                styles.dropdown,
                isFocus && { borderColor: COLORS.primary },
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={categories}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? "Select category..." : "..."}
              searchPlaceholder="Search..."
              value={selectedCategory}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(value) => {
                setSelectedCategory(value);
                setIsFocus(false);
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              handleInsuranceTypeSelect(selectedCategory?.label);
              // Alert.alert(`You have selected\nPolicy: ${selectedCategory.label}`);
            }}
            style={styles.pageBtn}
          >
            <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.medium,
  },
  txt: {
    color: COLORS.text,
    textAlign: "center",
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.text2,
    paddingVertical: SIZES.small,
  },
  pageBtn: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  pageImgContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pageImg: {
    width: 200,
    height: 200,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
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
});

export default CategoryScreen;
