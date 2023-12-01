import { Stack, useRouter } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, icons, images, SIZES, FONT } from "../constants";
import { ProfileHeaderBtn } from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={[COLORS.tertiary, COLORS.lightWhite]}
      style={{ flex: 1, width: "100%", borderRadius: 10 }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          // backgroundColor: COLORS.white,
          padding: SIZES.medium,
        }}
      >
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.tertiary,
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
                <ProfileHeaderBtn iconUrl={images.logo} dimension="100%" />
                <Text
                  style={{
                    fontFamily: FONT.bold,
                    color: COLORS.primary,
                    fontSize: SIZES.small,
                  }}
                >
                  I.POL
                </Text>
              </View>
            ),
            headerRight: () => (
              <ProfileHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
          }}
        />

        <View style={{ width: "100%" }}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                source={require("../assets/images/splash.svg")}
                style={{ width: 200, height: 200, alignSelf: "center" }}
              />
            </View>
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.xLarge,
                fontFamily: FONT.medium,
                fontWeight: "bold",
                textAlign: "center",
                marginHorizontal: 6,
              }}
            >
              Keep all your insurance claims in one place
            </Text>
            <Text
              style={{
                color: COLORS.secondary,
                fontSize: SIZES.small,
                textAlign: "center",
                padding: 4,
                // marginTop: SIZES.medium,
              }}
            >
              At insurance pol we allow you to get your insurance claims through a system carefully designed to give you the best.
            </Text>
            <View style={{ width: "100%", marginTop: SIZES.xxLarge }}>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.xSmall,
                  paddingVertical: SIZES.small,
                  paddingHorizontal: SIZES.large,
                  margin: 8,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: FONT.regular,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  onPress={() => router.push(`/sign_in`)}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.xSmall,
                  paddingVertical: SIZES.small,
                  paddingHorizontal: SIZES.large,
                  margin: 8,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: FONT.regular,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  onPress={() => router.push(`/sign_up`)}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
