import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const NotificationCard = ({ notification, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {notification.title}
        </Text>
        <Text style={styles.message} numberOfLines={2}>
          {notification.body}
        </Text>
        <Text style={styles.time} numberOfLines={2}>
          {notification.timestamp}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  textContainer: {
    marginHorizontal: SIZES.medium,
  },
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    fontWeight: "400",
    color: COLORS.gray2,
  },
  message: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.text,
    marginTop: 3,
    textTransform: "capitalize",
  },
  time: {
    fontSize: SIZES.small,
    fontFamily: "DMRegular",
    color: COLORS.gray2,
    marginTop: 10,
    textTransform: "capitalize",
  },
});
