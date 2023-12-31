import { Stack, useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { COLORS, FONT, SIZES, images, icons } from "../constants";

SplashScreen.preventAutoHideAsync();
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

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
import { View, Text, StatusBar, Platform } from "react-native";
import { PersistGate } from "redux-persist/integration/react";

const Layout = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) return null;

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
    schedulePushNotification(notifications);
  }, [fontsLoaded]);

  const [notification, setNotification] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState("");
  const notificationListener = useRef();
  const responseListener = useRef();

  const notifications = [
    {
      id: 1,
      title: "Policy Renewal Reminder",
      body: "Your policy is up for renewal in 3 days. Review your options and ensure uninterrupted coverage.",
      channelId: "policy_reminders",
      data: {
        policyId: "ABC123",
        renewalDate: "2024-01-15",
      },
      timestamp: 1662544000, // Unix timestamp representing 2023-09-10 00:00:00 UTC
      read: false,
      isTriggered: false,
    },
    {
      id: 2,
      title: "Payment Reminder",
      body: "Your next premium payment of $49.99 is due on 09/15/2023. Avoid late fees by paying on time.",
      channelId: "payment_reminders",
      data: {
        invoiceId: "XYZ456",
        dueAmount: 49.99,
      },
      timestamp: 1664054400, // Unix timestamp representing 2023-09-15 00:00:00 UTC
      read: false,
      isTriggered: true,
    },
    {
      id: 3,
      title: "Claim Status Update",
      body: "Your claim #7890 has been approved! Your payment will be processed within 5 business days.",
      channelId: "claim_updates",
      data: {
        claimId: "7890",
        status: "approved",
      },
      timestamp: 1664140800, // Unix timestamp representing 2023-09-16 00:00:00 UTC
      read: true,
      isTriggered: true,
    },
    {
      id: 4,
      title: "Benefit Utilization Reminder",
      body: "Did you know your plan includes dental checkups? Schedule your next appointment and maximize your benefits!",
      channelId: "benefit_reminders",
      data: {},
      timestamp: 1662544000, // Same timestamp as the first notification (for demonstration)
      read: false,
      isTriggered: true,
    },
  ];

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

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack onLayout>
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

  // try {
  //   await Notifications.createChannelAsync({
  //     channelId: "policy_reminders",
  //     name: "Policy Renewals",
  //     importance: Notifications.Importance.HIGH,
  //     sound: true,
  //     vibrate: true,
  //   });

  //   await Notifications.createChannelAsync({
  //     channelId: "payment_reminders",
  //     name: "Payment Reminders",
  //     importance: Notifications.Importance.HIGH,
  //     sound: true,
  //     vibrate: true,
  //   });

  //   await Notifications.createChannelAsync({
  //     channelId: "claim_status",
  //     name: "Claim Status Updates",
  //     importance: Notifications.Importance.DEFAULT,
  //     sound: true,
  //     vibrate: false, // Optional vibration
  //   });

  //   await Notifications.createChannelAsync({
  //     channelId: "benefit_remiders",
  //     name: "Benefit Remiders",
  //     importance: Notifications.Importance.DEFAULT,
  //     sound: true,
  //     vibrate: false, // Optional vibration
  //   });

  //   await Notifications.createChannelAsync({
  //     channelId: "important_announcements",
  //     name: "Important Announcements",
  //     importance: Notifications.Importance.HIGH,
  //     sound: true,
  //     vibrate: true,
  //   });
  // } catch (error) {
  //   console.error("Error creating notification channels:", error);
  // }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
};

const handleNotificationResponse = async (response) => {
  console.log(response); // Log the response data

  // Access response details:
  // const notificationId = response.notificationId;
  // const actionIdentifier = response.actionIdentifier;
  // const buttonIndex = response.buttonIndex;

  // // Perform actions based on the response:
  // if (actionIdentifier === "mark_as_read") {
  //   // Find and update the corresponding notification in your state or data source:
  //   const updatedNotifications = notifications.map((notification) => {
  //     if (notification.id === notificationId) {
  //       return { ...notification, read: true };
  //     }
  //     return notification;
  //   });
  //   setNotifications(updatedNotifications); // Assuming you're using state management
  // } else if (actionIdentifier === "view_details") {
  //   // Retrieve relevant data from the notification and navigate to the appropriate screen:
  //   const { policyId, renewalDate } = notificationData; // Assuming notification data is accessible
  //   navigation.navigate("PolicyDetailsScreen", { policyId, renewalDate }); // Example navigation
  // } else if (actionIdentifier === "snooze") {
  //   // Reschedule the notification using Notifications.scheduleNotificationAsync():
  //   await Notifications.scheduleNotificationAsync({
  //     content: notificationContent, // Assuming you have the notification content
  //     trigger: {
  //       // Delay notification by 15 minutes (adjust as needed)
  //       seconds: 15 * 60,
  //     },
  //   });
  // } else {
  //   // Handle other custom actions based on your app's logic
  //   console.log("Unknown action identifier:", actionIdentifier);
  // }
};

const triggeredNotifications = []; // Array to track triggered notifications

const schedulePushNotification = async (notificationArray) => {
  // Schedule a local notification
  for (const notification of notificationArray) {
    if (
      !triggeredNotifications.includes(notification.id) &&
      !notification.isTriggered &&
      !notification.read
    ) {
      try {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: notification.title,
            body: notification.body,
            data: notification.data,
            channelId: notification.channelId,
          },
          trigger: { seconds: 3 },
        });
        notification.isTriggered = true;
        triggeredNotifications.push(notification.id); // Mark as triggered
        console.log("Notification scheduled:", notification.title);
      } catch (error) {
        console.error("Error scheduling notification:", error);
      }
    }
  }
};

export default Layout;
