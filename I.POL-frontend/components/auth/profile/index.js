import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONT, icons, images, SIZES } from "../../../constants";
import { router } from "expo-router";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/actions/authThunk";

const Profile = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
        backgroundColor: COLORS.tertiary,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: SIZES.medium,
            marginBottom: 60,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.small,
              paddingVertical: SIZES.large,
            }}
          >
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={
                user?.profile.profilePicture
                  ? { uri: user?.profile.profilePicture }
                  : images.profile
              }
              resizeMode="cover"
            />
            <Text
              style={{
                fontFamily: FONT.medium,
                fontSize: SIZES.xLarge,
                fontWeight: "600",
                color: COLORS.white,
                paddingVertical: SIZES.medium,
              }}
            >
              {user?.profile?.firstname + " " + user?.profile?.lastname}
            </Text>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: SIZES.small,
                fontWeight: "100",
                color: COLORS.white,
              }}
            >
              @{user?.profile?.username}
            </Text>
          </View>

          <View style={styles.profileMenu}>
            <TouchableOpacity
              style={styles.profileLabel}
              onPress={() => router.push(`/profile/editProfile_`)}
            >
              <View style={styles.labelTab}>
                <View style={styles.icon}>
                  <FontAwesome5
                    name="user-alt"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </View>
                <Text
                  style={styles.labelText}
                  onPress={() => router.push(`/profile/editProfile_`)}
                >
                  Profile Information
                </Text>
              </View>
              <Image
                source={icons.chevronRight}
                resizeMode="contain"
                style={styles.linkBtnImage}
                onPress={() => router.push(`/profile/editProfile_`)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileLabel}
              onPress={() => router.push(`/profile/userInsurancePolicy_`)}
            >
              <View style={styles.labelTab}>
                <View style={styles.icon}>
                  <Octicons
                    name="heart"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </View>
                <Text
                  style={styles.labelText}
                  onPress={() => router.push(`/profile/userInsurancePolicy_`)}
                >
                  Insurance Policies
                </Text>
              </View>
              <Image
                source={icons.chevronRight}
                resizeMode="contain"
                style={styles.linkBtnImage}
                onPress={() => router.push(`/profile/userInsurancePolicy_`)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileLabel}
              onPress={() => router.push(`/profile/claimHistory_`)}
            >
              <View style={styles.labelTab}>
                <View style={styles.icon}>
                  <MaterialIcons
                    name="history-edu"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </View>
                <Text
                  style={styles.labelText}
                  onPress={() => router.push(`/profile/claimHistory_`)}
                >
                  Claim History
                </Text>
              </View>
              <Image
                source={icons.chevronRight}
                resizeMode="contain"
                style={styles.linkBtnImage}
                onPress={() => router.push(`/profile/claimHistory_`)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileLabel}
              onPress={() => router.push(`/profile/securitySettings_`)}
            >
              <View style={styles.labelTab}>
                <View style={styles.icon}>
                  <FontAwesome5
                    name="user-shield"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </View>
                <Text
                  style={styles.labelText}
                  onPress={() => router.push(`/profile/securitySettings_`)}
                >
                  Security Settings
                </Text>
              </View>
              <Image
                source={icons.chevronRight}
                resizeMode="contain"
                style={styles.linkBtnImage}
                onPress={() => router.push(`/profile/securitySettings_`)}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.profileMenu}>
            <TouchableOpacity
              style={styles.profileLabel}
              onPress={() => router.push(`/profile/notification_`)}
            >
              <View style={styles.labelTab}>
                <View style={styles.icon}>
                  <Ionicons
                    name="ios-notifications-circle"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </View>
                <Text
                  style={styles.labelText}
                  onPress={() => router.push(`/profile/notification_`)}
                >
                  Notification
                </Text>
              </View>
              <Image
                source={icons.chevronRight}
                resizeMode="contain"
                style={styles.linkBtnImage}
                onPress={() => router.push(`/profile/notification_`)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileLabel}
              onPress={() => router.push(`profile/feedback_`)}
            >
              <View style={styles.labelTab}>
                <View style={styles.icon}>
                  <Octicons
                    name="feed-rocket"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </View>
                <Text
                  style={styles.labelText}
                  onPress={() => router.push(`profile/feedback_`)}
                >
                  Feedback
                </Text>
              </View>
              <Image
                source={icons.chevronRight}
                resizeMode="contain"
                style={styles.linkBtnImage}
                onPress={() => router.push(`profile/feedback_`)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileLabel}
              onPress={() => router.push(`/profile/faqs_`)}
            >
              <View style={styles.labelTab}>
                <View style={styles.icon}>
                  <FontAwesome5
                    name="question-circle"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </View>
                <Text
                  style={styles.labelText}
                  onPress={() => router.push(`/profile/faqs_`)}
                >
                  FAQs
                </Text>
              </View>
              <Image
                source={icons.chevronRight}
                resizeMode="contain"
                style={styles.linkBtnImage}
                onPress={() => router.push(`/profile/faqs_`)}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileLabel}>
              <View style={styles.labelTab}>
                <View style={styles.icon}>
                  <FontAwesome5
                    name="user-cog"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </View>
                <Text style={styles.labelText}>More Settings</Text>
              </View>
              <Image
                source={icons.chevronRight}
                resizeMode="contain"
                style={styles.linkBtnImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileLabel}
              onPress={logoutHandler}
            >
              <View style={styles.labelTab}>
                <View style={styles.icon}>
                  <SimpleLineIcons
                    name="logout"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </View>
                <Text style={styles.logoutText} onPress={logoutHandler}>
                  Logout
                </Text>
              </View>
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
    borderBottomWidth: 1,
    borderTopColor: COLORS.gray2,
    borderBottomColor: COLORS.lightWhite,
  },
  profileLabel: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    marginVertical: 1,
  },
  labelTab: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  labelText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    fontWeight: "100",
    color: COLORS.text,
    padding: 2,
  },
  logoutText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    fontWeight: "100",
    color: "red",
    padding: 2,
  },
  icon: {
    width: 24,
    height: 24,
    // backgroundColor: COLORS.primary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  linkBtnImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
  },
});

export default Profile;
