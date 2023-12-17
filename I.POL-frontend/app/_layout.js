import { Stack, useRouter } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { COLORS, FONT, SIZES, images } from "../constants";

SplashScreen.preventAutoHideAsync();

import { Provider } from "react-redux";
import store from "../redux/store";
import { ProfileHeaderBtn } from "../components";
import { View, Text } from "react-native";

const Layout = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <Stack onLayout={onLayoutRootView}>
        <Stack.Screen
          name="index"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            headerRight: () => (
              <ProfileHeaderBtn
                iconUrl={images.profile}
                dimension="100%"
                handlePress={() => router.push(`/_sitemap`)}
              />
            ),
          }}
        />

        <Stack.Screen
          name="auth/signIn_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
          }}
        />

        <Stack.Screen
          name="auth/signUp_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
          }}
        />

        <Stack.Screen
          name="profile/index"
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
          }}
        />

        <Stack.Screen
          name="profile/editProfile_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
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
          }}
        />

        <Stack.Screen
          name="screens/quotas/index"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
          }}
        />

        <Stack.Screen
          name="screens/quotas/recommendedPolicyScreen_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
          }}
        />

        <Stack.Screen
          name="screens/quotas/categoryScreen_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
          }}
        />

        <Stack.Screen
          name="screens/quotas/budgetScreen_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
          }}
        />

        <Stack.Screen
          name="screens/other/detailScreen_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
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

        <Stack.Screen
          name="screens/other/policyPlanScreen_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.tertiary,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
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

        <Stack.Screen
          name="screens/other/payScreen_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
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

        <Stack.Screen
          name="home/recommendation_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
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

        <Stack.Screen
          name="home/specialPackage_"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
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
      </Stack>
    </Provider>
  );
};

export default Layout;
