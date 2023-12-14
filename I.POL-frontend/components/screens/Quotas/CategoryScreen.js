import { router, Stack } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { COLORS, icons, images, SIZES, FONT } from "../../../constants";
import { ProfileHeaderBtn } from "../..";
import RNPickerSelect from "react-native-picker-select";
import { useState } from "react";

const CategoryScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { label: "Health Insurance", value: "health" },
    { label: "Car Insurance", value: "car" },
    { label: "Home Insurance", value: "home" },
  ];

  return (
    <SafeAreaView
      style={{
        // flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProfileHeaderBtn
                iconUrl={images.logo}
                dimension="100%"
                handlePress={() => router.push(`home`)}
              />
              <Text
                style={{
                  fontFamily: FONT.bold,
                  fontWeight: "600",
                  color: COLORS.primary,
                  fontSize: SIZES.xSmall,
                }}
              >
                IPOL
              </Text>
            </View>
          ),
          headerRight: () => (
            <ProfileHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => router.push(`profile`)}
            />
          ),
        }}
      />

      <View style={styles.container}>
        <View style={styles.pageImgContainer}>
          <Image
            source={images.recommendation}
            resizeMode="center"
            style={styles.pageImg}
          />
        </View>
        <Text style={styles.txt}>Select Your Preferred Category...</Text>

        <View style={{ width: "100%" }}>
          <RNPickerSelect
            useNativeAndroidPickerStyle={false}
            style={pickerSelectStyles}
            placeholder={{ label: "Select a category.", value: "" }}
            items={categories}
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            router.push(`/screens/quotas/budgetScreen_`);
          }}
          style={styles.pageBtn}
        >
          <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: "100%",
    fontSize: 16,
    fontFamily: FONT.regular,
    fontWeight: "200",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    color: "black",
    marginVertical: 30,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    width: "100%",
    fontSize: 16,
    fontFamily: FONT.regular,
    fontWeight: "200",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    color: COLORS.text,
    marginVertical: 30,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputWeb: {
    width: "100%",
    fontSize: 16,
    fontFamily: FONT.regular,
    fontWeight: "200",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    color: "black",
    marginVertical: 30,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginVertical: SIZES.large,
  },
  pageImgContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  pageImg: {
    width: 200,
    height: 200,
  },
  inputCat: {
    fontSize: 16,
    fontFamily: FONT.regular,
    fontWeight: "200",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 8,
    color: "black",
    marginVertical: 30,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default CategoryScreen;
