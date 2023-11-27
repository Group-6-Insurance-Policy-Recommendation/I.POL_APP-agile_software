import { Stack, useRouter } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, icons, images, SIZES, FONT } from "../constants";
import { ProfileHeaderBtn } from "../components";
import start from "../assets/start.jpeg";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.White,
        padding: SIZES.medium,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.White,
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
              <ProfileHeaderBtn iconUrl={images.logo} dimension="100%"  />
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

      <View style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Text
          style={{
            color: "#212121",
            textAlign: "left",
            fontFamily: FONT.bold,
            fontSize: SIZES.xLarge,
            fontWeight: 700,
            paddingTop: 60,
            paddingBottom: 30,
            lineHeight: "normal",
          }}
        >
          Make a Quick Quote
        </Text>
        <TouchableOpacity
          onPress={() => {
            router.push(`/signin`);
          }}
          style={{
            width: 150,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 1,
            borderRadius: SIZES.small,
            backgroundColor: COLORS.primary,
          }}
        >
          <Text style={{ color: COLORS.lightWhite }}>Sign In</Text>
        </TouchableOpacity>
        <View style={{ width: "100%", display: "flex", paddingVertical: 80, justifyContent: "flex-end", alignItems: "flex-end" }}>
          <Image source={start} style={{ width: 200, height: 200 }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
