import { router, Stack, useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { COLORS, images, SIZES, FONT } from "../../../constants";
import { ProfileHeaderBtn } from "../..";
import start from "../../../assets/start.jpeg";
import { useEffect, useState } from "react";

const BudgetScreen = () => {
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputFocus = () => setInputFocus(true);
  const handleInputBlur = () => setInputFocus(false);

  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const [minBudget, setMinBudget] = useState("0");
  const [maxBudget, setMaxBudget] = useState("0");

  const { insuranceType } = useLocalSearchParams();

  const handleBudgetSelect = () => {
    // Navigate to the next screen with selected budget details
    if (minBudget === "0" && maxBudget === "0") {
      return alert("Budget preferences not set!");
    }
    router.push(
      `/screens/quotas/recommendationPolicyScreen_/${insuranceType}/${minBudget}/${maxBudget}`
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: width,
            height: height,
            padding: SIZES.medium,
          }}
        >
          <KeyboardAvoidingView style={{ width: "100%" }} behavior="padding">
            <View style={styles.pageImgContainer}>
              <Image
                source={start}
                resizeMode="center"
                style={{
                  width: width - 20,
                  height: height / 2,
                }}
              />
            </View>

            <View style={{ paddingVertical: SIZES.xLarge }}>
              <Text style={styles.txt}>
                Enter Your Minimum and Maximum Budgets...
              </Text>
              <View style={styles.inputOuterContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.currencyLabel}>₵</Text>
                  <TextInput
                    style={[styles.input, inputFocus && styles.focusedInput]}
                    placeholder="min"
                    keyboardType="numeric"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    value={minBudget}
                    onChangeText={(text) => setMinBudget(text)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.currencyLabel}>₵</Text>
                  <TextInput
                    style={[styles.input, inputFocus && styles.focusedInput]}
                    placeholder="max"
                    keyboardType="numeric"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    value={maxBudget}
                    onChangeText={(text) => setMaxBudget(text)}
                  />
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  handleBudgetSelect();
                }}
                style={styles.pageBtn}
              >
                <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
                  Recommend
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
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
  },
  inputOuterContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: SIZES.large,
    marginVertical: 30,
  },
  inputContainer: {
    width: "46%",
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.large,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.width,
    marginBottom: SIZES.xSmall,
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontWeight: "medium",
    flexDirection: "row",
    alignItems: "center",
  },
  currencyLabel: {
    color: COLORS.primary,
    fontSize: SIZES.medium - 2,
    marginRight: 8,
  },
  input: {
    flex: 1,
    width: "100%",
    fontSize: SIZES.medium - 2,
    paddingLeft: 8,
    borderRadius: 4,
    borderWidth: 0,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontWeight: "medium",
  },
  focusedInput: {
    borderColor: COLORS.white,
    borderWidth: 0,
    color: COLORS.text2,
  },
  pageBtn: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
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
});

export default BudgetScreen;
