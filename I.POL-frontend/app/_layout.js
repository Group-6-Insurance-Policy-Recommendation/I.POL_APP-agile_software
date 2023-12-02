import { Stack, useRouter } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { COLORS, icons, images, SIZES, FONT } from "../constants";
import { ProfileHeaderBtn } from "../components";

SplashScreen.preventAutoHideAsync();

import { Provider } from "react-redux";
import { store } from "../redux/store";

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
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: false,
            headerTitle: "",
            // headerLeft: () => (
            //   <ProfileHeaderBtn iconUrl={images.logo} dimension="100%" />
            // ),
            headerRight: () => (
              <ProfileHeaderBtn
                iconUrl={images.profile}
                dimension="100%"
                handlePress={() => router.push(`/profile`)}
              />
            ),
          }}
        />

        <Stack.Screen
          name="profile/editInfo"
          options={{
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerShadowVisible: false,
            headerTitle: "",
            presentation: "modal",
          }}
        />
      </Stack>
    </Provider>
  );
};

export default Layout;
