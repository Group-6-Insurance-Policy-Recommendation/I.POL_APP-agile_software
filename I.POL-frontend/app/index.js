import { Stack, router } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, icons, images, SIZES, FONT } from "../constants";

const Home = () => {
  return (
    // <LinearGradient
    //   colors={[COLORS.tertiary, COLORS.lightWhite]}
    //   style={{ flex: 1, width: "100%", borderRadius: 10 }}
    // >
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ width: "100%", paddingVertical: 20 }}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: SIZES.xxLarge,
              }}
            >
              <Text
                style={{
                  color: COLORS.secondary,
                  fontSize: SIZES.large,
                  fontFamily: FONT.medium,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Looking for the best Insurance Policies? Don't worry.
              </Text>
              <View>
                <Image
                  source={images.welcome}
                  style={{
                    width: 200,
                    height: 200,
                    alignSelf: "center",
                    marginVertical: SIZES.large,
                  }}
                />
              </View>
              <Text
                style={{
                  color: COLORS.text2,
                  fontSize: SIZES.small,
                  fontFamily: FONT.regular,
                  textAlign: "center",
                }}
              >
                At IPOL we allow you to get your insurance claims through a
                system carefully designed to give you the best.
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: SIZES.small,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "80%",
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.xSmall,
                  paddingVertical: SIZES.small,
                  paddingHorizontal: SIZES.large,
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium - 2,
                    fontWeight: "bold",
                  }}
                  onPress={() => router.push(`/sign_in`)}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "80%",
                  backgroundColor: COLORS.secondary,
                  borderRadius: SIZES.xSmall,
                  paddingVertical: SIZES.small,
                  paddingHorizontal: SIZES.large,
                  marginVertical: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium - 2,
                    fontWeight: "bold",
                  }}
                  onPress={() => router.push(`/sign_up`)}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Image
                source={images.logo}
                style={{ width: 80, height: 80, alignSelf: "center" }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // </LinearGradient>
  );
};

export default Home;
