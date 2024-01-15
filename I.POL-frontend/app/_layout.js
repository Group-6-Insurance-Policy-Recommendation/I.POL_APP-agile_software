import { Stack, useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { COLORS, images, icons } from "../constants";

SplashScreen.preventAutoHideAsync();
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import io from "socket.io-client";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { ProfileHeaderBtn } from "../components";
import { View, StatusBar, Platform } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Layout = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState("");
  const notificationListener = useRef();
  const responseListener = useRef();
  const [notifications, setNotifications] = useState([]);

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

  // if (!fontsLoaded) return null;

  useEffect(() => {
    // Set up notifications data
    const userId = user?._id;

    if (userId !== undefined) {
      axios
        .get(
          `https://ipol-server.onrender.com/api/notifications/user/${userId}`
        )
        .then((response) => {
          setNotifications(response.data);
          // console.log("Fetched notifications:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
        });
    }

    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("userData");
        if (userData !== null) {
          const parsedUserData = JSON.parse(userData);
          setUser(parsedUserData);
        }
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };

    getUserData();

    schedulePushNotification(notifications);
  }, [notifications]);

  useEffect(() => {
    // Request notification permissions and set up listeners
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        handleNotificationResponse(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    const socket = io("ws://ipol-server.onrender.com", {
      reconnection: true,
      reconnectionDelay: 1000, // 1 second delay between each reconnection attempt
      reconnectionAttempts: Infinity, // Retry indefinitely
    });

    socket.on("connect", () => {
      console.log("Socket.io connected");
    });

    socket.on("disconnect", (reason) => {
      console.log("Socket.io disconnected:", reason);
    });

    socket.on("error", (error) => {
      console.error("Socket.io error:", error);
    });

    const userId = user?._id;

    socket.on("notification", { userId }, (data) => {
      // Handle server response
      // setNotifications(data.data); // Update state with received notifications
      console.log(data);
    });

    socket.on("broadcast", (data) => {
      // Handle server response
      // setNotifications(data.data); // Update state with received notifications
      console.log(data);
    });

    // Cleanup function to close the socket
    return () => {
      socket.disconnect();
    };
  }, [notifications]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack onLayout={onLayoutRootView}>
          <StatusBar backgroundColor={COLORS.white} />
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
              headerLeft: () => {},
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
              headerLeft: () => {},
            }}
          />

          <Stack.Screen
            name="auth/forgotPassword_"
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
              headerRight: () => (
                <ProfileHeaderBtn
                  iconUrl={icons.feedback}
                  dimension="100%"
                  handlePress={() => router.push(`/_sitemap`)}
                />
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
            }}
          />

          <Stack.Screen
            name="profile/feedback_"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="profile/userInsurancePolicy_"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="profile/claimHistory_"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="profile/securitySettings_"
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
            name="profile/changePassword_"
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
            name="profile/deleteAccount_"
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
            name="profile/faqs_"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="profile/notification_"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="screens/quotas/index"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="screens/quotas/recommendationPolicyScreen_/[insuranceType]/[minBudget]/[maxBudget]"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="screens/quotas/categoryScreen_"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="screens/quotas/budgetScreen_/[insuranceType]"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="screens/other/detailScreen_/[policyID]"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="screens/other/policyPlanScreen_/[policyID]"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="screens/other/payScreen_/[policyID]/[price]"
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
            name="screens/other/huddleScreen_"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="screens/other/packageInfo_"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="screens/other/insuranceInfo_/[policyID]"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
            name="home/recommendation_/[urlInsuranceType]"
            options={{
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShadowVisible: false,
              headerTitle: "",
              presentation: "modal",
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
      </PersistGate>
    </Provider>
  );
};

const registerForPushNotificationsAsync = async () => {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      console.log("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    console.log("Must use physical device for Push Notifications");
  }

  return token;
};

const handleNotificationResponse = async (response) => {
  console.log("Notification Response", response); // Log the response data
};

const triggeredNotifications = []; // Array to track triggered notifications

const schedulePushNotification = async (notificationArray) => {
  const updatedNotifications = notificationArray.map((notification) => {
    if (
      !triggeredNotifications.includes(notification._id) &&
      !notification.triggered &&
      !notification.seen
    ) {
      try {
        // Schedule notification code remains the same...
        Notifications.scheduleNotificationAsync({
          content: {
            title: notification.title,
            body: notification.message,
            data: notification.data,
            channelId: notification.channelId,
          },
          trigger: { seconds: 3 },
        });

        console.log("Notification scheduled:", notification.title);
        return { ...notification, triggered: true };
      } catch (error) {
        console.error("Error scheduling notification:", error);
        return notification; // Return original notification on error
      }
    }

    return notification; // Return original notification if conditions are not met
  });

  triggeredNotifications.push(updatedNotifications); // Mark as triggered
};

export default Layout;
