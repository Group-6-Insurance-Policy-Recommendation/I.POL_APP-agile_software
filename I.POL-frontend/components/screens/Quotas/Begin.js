import { router, Stack } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { COLORS, icons, images, SIZES, FONT } from "../../../constants";
import { ProfileHeaderBtn } from "../..";
import { useEffect, useState } from "react";

const Begin = () => {
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);
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
            source={images.preference}
            resizeMode="center"
            style={{
              width: width - 20,
              height: height / 2,
            }}
          />
        </View>
        <View style={{ paddingVertical: SIZES.xxLarge + 20 }}>
          <Text style={styles.txt}>Make A Quick Preference!!!</Text>
          <TouchableOpacity
            onPress={() => {
              router.push(`/screens/quotas/categoryScreen_`);
            }}
            style={styles.pageBtn}
          >
            <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
              Let's Begin
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
    paddingBottom: 30,
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
    // paddingVertical: 50,
  },
  pageImg: {
    width: 200,
    height: 200,
  },
});

export default Begin;
