import { router, Stack } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { COLORS, icons, images, SIZES, FONT } from "../../../constants";
import { ProfileHeaderBtn } from "../..";
import start from "../../../assets/start.jpeg";
import { useState } from "react";

const BudgetScreen = () => {
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputFocus = () => setInputFocus(true);
  const handleInputBlur = () => setInputFocus(false);

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
          <Image source={start} resizeMode="center" style={styles.pageImg} />
        </View>
        <Text style={styles.txt}>
          Enter Your Minimum and Maximum Budgets...
        </Text>
        <View style={styles.inputOuterContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.currencyLabel}>₵</Text>
            <TextInput
              style={[styles.input, inputFocus && styles.focusedInput]}
              placeholder="amt"
              keyboardType="numeric"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.currencyLabel}>₵</Text>
            <TextInput
              style={[styles.input, inputFocus && styles.focusedInput]}
              placeholder="amt"
              keyboardType="numeric"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            router.push(`/screens/quotas/recommendedPolicyScreen_`);
          }}
          style={styles.pageBtn}
        >
          <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
            Recommend
          </Text>
        </TouchableOpacity>
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
  },
  inputOuterContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SIZES.large,
    marginVertical: 30,
  },
  inputContainer: {
    width: "40%",
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.large,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.tertiary,
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
    borderColor: COLORS.tertiary,
    backgroundColor: COLORS.tertiary,
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontWeight: "medium",
  },
  focusedInput: {
    borderColor: COLORS.tertiary,
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
    paddingVertical: 50,
  },
  pageImg: {
    width: 200,
    height: 200,
  },
});

export default BudgetScreen;
