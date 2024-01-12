import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const NotificationCard = ({ notification, handleNavigate }) => {
  const [fullDesc, setFullDesc] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container(notification)}
      onPress={() => {
        setFullDesc((prev) => !prev);
      }}
    >
      {fullDesc ? (
        <View style={styles.textContainer}>
          <Text style={styles.title(notification)} numberOfLines={1}>
            {notification.title}
          </Text>
          <Text style={styles.message(notification)} numberOfLines={10}>
            {notification.message}
          </Text>
          <Text style={styles.time(notification)} numberOfLines={2}>
            {notification.timestamp}
          </Text>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.title(notification)} numberOfLines={1}>
            {notification.title}
          </Text>
          <Text style={styles.message(notification)} numberOfLines={1}>
            {notification.message}
          </Text>
          <Text style={styles.time(notification)} numberOfLines={2}>
            {notification.timestamp}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: (notification) => ({
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor:
      notification.seen === false ? COLORS.primary : COLORS.lightWhite,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  textContainer: {
    marginHorizontal: SIZES.medium,
  },
  title: (notification) => ({
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    fontWeight: "400",
    color: notification.seen === false ? COLORS.white : COLORS.gray2,
  }),
  message: (notification) => ({
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: notification.seen === false ? COLORS.white : COLORS.text,
    marginTop: 3,
    textTransform: "capitalize",
  }),
  time: (notification) => ({
    fontSize: SIZES.small,
    fontFamily: "DMRegular",
    color: notification.seen === false ? COLORS.gray2 : COLORS.gray2,
    marginTop: 10,
    textTransform: "capitalize",
  }),
});
