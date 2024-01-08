import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  Button,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
import NotificationCard from "../../../common/card/notificationCard/NotificationCard";

const Notification = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  // const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);

    // Set up notifications data
    // setNotifications(notification);
  }, []);

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
    },
    {
      id: 4,
      title: "Benefit Utilization Reminder",
      body: "Did you know your plan includes dental checkups? Schedule your next appointment and maximize your benefits!",
      channelId: "benefit_reminders",
      data: {},
      timestamp: 1662544000, // Same timestamp as the first notification (for demonstration)
      read: false,
    },
    {
      id: 5,
      title: "Payment Reminder",
      body: "Your next premium payment of $49.99 is due on 09/15/2023. Avoid late fees by paying on time.",
      channelId: "payment_reminders",
      data: {
        invoiceId: "XYZ456",
        dueAmount: 49.99,
      },
      timestamp: 1664054400, // Unix timestamp representing 2023-09-15 00:00:00 UTC
      read: false,
    },
    {
      id: 6,
      title: "Claim Status Update",
      body: "Your claim #7890 has been approved! Your payment will be processed within 5 business days.",
      channelId: "claim_updates",
      data: {
        claimId: "7890",
        status: "approved",
      },
      timestamp: 1664140800, // Unix timestamp representing 2023-09-16 00:00:00 UTC
      read: true,
    },
    {
      id: 7,
      title: "Benefit Utilization Reminder",
      body: "Did you know your plan includes dental checkups? Schedule your next appointment and maximize your benefits!",
      channelId: "benefit_reminders",
      data: {},
      timestamp: 1662544000, // Same timestamp as the first notification (for demonstration)
      read: false,
    },
  ];

  // const renderNotificationCard = ({ item }) => (
  //   <NotificationCard notification={item} handleNavigate={() => {}} />
  // );

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
        <View style={styles.cardsContainer}>
          {notifications.map((notification) => (
            <NotificationCard
              notification={notification}
              key={notification?.id}
              handleNavigate={() => {}}
            />
          ))}
          {/* <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderNotificationCard}
          contentContainerStyle={styles.cardsContainer}
        /> */}
        </View>
        {/* <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text>Your expo push token: {expoPushToken}</Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>Title: {notice && notice.request.content.title} </Text>
          <Text>Body: {notice && notice.request.content.body}</Text>
          <Text>
            Data: {notice && JSON.stringify(notice.request.content.data)}
          </Text>
        </View>
        <Button
          title="Press to schedule a notification"
          onPress={async () => {
            await schedulePushNotification();
          }}
        />
      </View> */}
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
});
