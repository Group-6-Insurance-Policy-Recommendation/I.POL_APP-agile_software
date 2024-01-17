import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import { COLORS, FONT, icons, SHADOWS, SIZES } from "../../../../constants";
import NotificationCard from "../../../common/card/notificationCard/NotificationCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { markNotificationAsSeen } from "../../../../redux/actions/notificationThunk";

const Notification = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);

  const [width, setWidth] = useState("auto");
  const [height, setHeight] = useState("auto");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);

    // Set up notifications data
    const userId = user?._id;

    axios
      .get(`https://ipol-server.onrender.com/api/notifications/user/${userId}`)
      .then((response) => {
        setNotifications(response.data);
        // Process and display notifications
        console.log("Fetched notifications:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
        // Display user-friendly error message
      });
  }, []);

  // const notifications = [
  //   {
  //     id: 1,
  //     title: "Policy Renewal Reminder",
  //     message: "Your policy is up for renewal in 3 days. Review your options and ensure uninterrupted coverage.",
  //     channelId: "policy_reminders",
  //     data: {
  //       policyId: "ABC123",
  //       renewalDate: "2024-01-15",
  //     },
  //     timestamp: 1662544000, // Unix timestamp representing 2023-09-10 00:00:00 UTC
  //     seen: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Payment Reminder",
  //     message: "Your next premium payment of $49.99 is due on 09/15/2023. Avoid late fees by paying on time.",
  //     channelId: "payment_reminders",
  //     data: {
  //       invoiceId: "XYZ456",
  //       dueAmount: 49.99,
  //     },
  //     timestamp: 1664054400, // Unix timestamp representing 2023-09-15 00:00:00 UTC
  //     seen: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Claim Status Update",
  //     message: "Your claim #7890 has been approved! Your payment will be processed within 5 business days.",
  //     channelId: "claim_updates",
  //     data: {
  //       claimId: "7890",
  //       status: "approved",
  //     },
  //     timestamp: 1664140800, // Unix timestamp representing 2023-09-16 00:00:00 UTC
  //     seen: true,
  //   },
  //   {
  //     id: 4,
  //     title: "Benefit Utilization Reminder",
  //     message: "Did you know your plan includes dental checkups? Schedule your next appointment and maximize your benefits!",
  //     channelId: "benefit_reminders",
  //     data: {},
  //     timestamp: 1662544000, // Same timestamp as the first notification (for demonstration)
  //     seen: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Payment Reminder",
  //     message: "Your next premium payment of $49.99 is due on 09/15/2023. Avoid late fees by paying on time.",
  //     channelId: "payment_reminders",
  //     data: {
  //       invoiceId: "XYZ456",
  //       dueAmount: 49.99,
  //     },
  //     timestamp: 1664054400, // Unix timestamp representing 2023-09-15 00:00:00 UTC
  //     seen: false,
  //   },
  //   {
  //     id: 6,
  //     title: "Claim Status Update",
  //     message: "Your claim #7890 has been approved! Your payment will be processed within 5 business days.",
  //     channelId: "claim_updates",
  //     data: {
  //       claimId: "7890",
  //       status: "approved",
  //     },
  //     timestamp: 1664140800, // Unix timestamp representing 2023-09-16 00:00:00 UTC
  //     seen: true,
  //   },
  //   {
  //     id: 7,
  //     title: "Benefit Utilization Reminder",
  //     message: "Did you know your plan includes dental checkups? Schedule your next appointment and maximize your benefits!",
  //     channelId: "benefit_reminders",
  //     data: {},
  //     timestamp: 1662544000, // Same timestamp as the first notification (for demonstration)
  //     seen: false,
  //   },
  // ];

  const seenNotification = (notification) => {
    console.log("seen");
    // Only make API call and update state if notification is unseen
    if (notification.seen === false) {
      // Update notification state before successful API call
      setNotifications((prevNotifications) =>
        prevNotifications.map((prevNotification) =>
          prevNotification._id === notification._id
            ? { ...prevNotification, seen: true }
            : prevNotification
        )
      );
      markNotificationAsSeen(notification._id);
    }
  };

  return (
    <SafeAreaView
      style={{
        width: width,
        height: notifications.length <= 6 ? height : "",
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: SIZES.medium,
        }}
      >
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>Notifications</Text>
        </View>
        {notifications.length === 0 && (
          <View style={styles.notificationContainer}>
            <Image
              source={icons.feedback}
              resizeMode="contain"
              style={styles.notificationImage}
            />
            <Text style={styles.notificationMsg} numberOfLines={6}>
              Your notifications will be displayed here. You have no
              notifications.
            </Text>
          </View>
        )}

        <View style={styles.cardsContainer}>
          {notifications.map((notification) => (
            <TouchableOpacity
              onPress={() => {
                seenNotification(notification);
              }}
            >
              <NotificationCard
                notification={notification}
                key={notification?._id}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  HeaderContainer: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: FONT.medium,
    fontWeight: "600",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  cardsContainer: {
    marginVertical: SIZES.medium,
    gap: SIZES.small,
  },
  notificationContainer: {
    width: "100%",
    // height: "100%",
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 20,
  },
  notificationImage: {
    width: 50,
    height: 50,
    // tintColor: COLORS.primary,
  },
  notificationMsg: {
    width: "60%",
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.text2,
    paddingVertical: SIZES.small,
    textTransform: "capitalize",
  },
});
