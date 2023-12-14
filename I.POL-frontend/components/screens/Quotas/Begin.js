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

const Begin = () => {
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
            source={images.preference}
            resizeMode="center"
            style={styles.pageImg}
          />
        </View>
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
    paddingVertical: 50,
  },
  pageImg: {
    width: 200,
    height: 200,
  },
});

export default Begin;
