import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../../constants";
import { router } from "expo-router";

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: SIZES.medium,
            paddingVertical: SIZES.xxLarge,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.tertiary,
              borderRadius: SIZES.small,
              paddingVertical: SIZES.large,
            }}
          >
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={require("../../../assets/images/PrinceStiles.jpg")}
              resizeMode="center"
            />
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: SIZES.xLarge,
                fontWeight: "600",
                color: COLORS.text2,
                paddingVertical: SIZES.medium,
              }}
            >
              Otumfuo Prince
            </Text>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: SIZES.xSmall,
                fontWeight: "100",
                color: COLORS.primary,
              }}
            >
              @PrinceStiles
            </Text>
          </View>

          <View style={styles.profileMenu}>
            <TouchableOpacity
              style={{
                width: "100%",
                paddingVertical: SIZES.small,
                backgroundColor: COLORS.tertiary,
                borderRadius: SIZES.xSmall,
                marginVertical: 2,
                paddingHorizontal: SIZES.xxLarge,
              }}
              onPress={() => router.push(`/profile/editProfile_`)}
            >
              <Text style={styles.labelText}>Profile Information</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                paddingVertical: SIZES.small,
                backgroundColor: COLORS.tertiary,
                borderRadius: SIZES.xSmall,
                marginVertical: 2,
                paddingHorizontal: SIZES.xxLarge,
              }}
            >
              <Text style={styles.labelText}>Insurance Policies</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                paddingVertical: SIZES.small,
                backgroundColor: COLORS.tertiary,
                borderRadius: SIZES.xSmall,
                marginVertical: 2,
                paddingHorizontal: SIZES.xxLarge,
              }}
            >
              <Text style={styles.labelText}>Claim History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                paddingVertical: SIZES.small,
                backgroundColor: COLORS.tertiary,
                borderRadius: SIZES.xSmall,
                marginVertical: 2,
                paddingHorizontal: SIZES.xxLarge,
              }}
            >
              <Text style={styles.labelText}>Security Settings</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileMenu}>
            <TouchableOpacity
              style={{
                width: "100%",
                paddingVertical: SIZES.small,
                backgroundColor: COLORS.tertiary,
                borderRadius: SIZES.xSmall,
                marginVertical: 2,
                paddingHorizontal: SIZES.xxLarge,
              }}
            >
              <Text style={styles.labelText}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                paddingVertical: SIZES.small,
                backgroundColor: COLORS.tertiary,
                borderRadius: SIZES.xSmall,
                marginVertical: 2,
                paddingHorizontal: SIZES.xxLarge,
              }}
            >
              <Text style={styles.labelText}>Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                paddingVertical: SIZES.small,
                backgroundColor: COLORS.tertiary,
                borderRadius: SIZES.xSmall,
                marginVertical: 2,
                paddingHorizontal: SIZES.xxLarge,
              }}
            >
              <Text style={styles.labelText}>FAQs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                paddingVertical: SIZES.small,
                backgroundColor: COLORS.tertiary,
                borderRadius: SIZES.xSmall,
                marginVertical: 2,
                paddingHorizontal: SIZES.xxLarge,
              }}
            >
              <Text style={styles.labelText}>More Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileMenu: {
    width: "100%",
    paddingTop: SIZES.large,
    // marginVertical: SIZES.xxLarge,
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: COLORS.gray2,
    borderBottomColor: COLORS.lightWhite,
  },
  labelText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    fontWeight: "100",
    color: COLORS.text,
    padding: 2,
  },
});

export default Profile;
