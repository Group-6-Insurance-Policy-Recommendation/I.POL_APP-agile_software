import { router } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, images, SIZES, FONT } from "../constants";

const Home = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.white, COLORS.lightWhite]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            marginHorizontal: SIZES.xLarge,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 20,
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
                  width: "100%",
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
                    fontFamily: FONT.medium,
                    fontSize: SIZES.medium - 2,
                    fontWeight: "400",
                  }}
                  onPress={() => router.push(`auth/signIn_`)}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "100%",
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
                    fontFamily: FONT.medium,
                    fontSize: SIZES.medium - 2,
                    fontWeight: "400",
                  }}
                  onPress={() => router.push(`auth/signUp_`)}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Image
                source={images.logo}
                resizeMode="contain"
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: "center",
                  marginTop: SIZES.medium,
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
