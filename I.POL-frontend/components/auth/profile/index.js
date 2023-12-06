import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
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
        <View style={{ marginHorizontal: SIZES.small }}>
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
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={require("../../../assets/images/PrinceStiles.jpg")}
              resizeMode="center"
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: SIZES.medium,
              }}
            >
              <Text
                style={{
                  fontFamily: FONT.regular,
                  fontSize: SIZES.xLarge,
                  fontWeight: "600",
                  color: COLORS.text2,
                }}
              >
                Otumfuo Prince
              </Text>
              <Text
                style={{
                  fontFamily: FONT.regular,
                  fontSize: SIZES.xSmall,
                  fontWeight: "100",
                  color: COLORS.gray,
                }}
              >
                @PrinceStiles
              </Text>
            </View>
            {/* <TouchableOpacity>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: SIZES.small,
                fontWeight: "500",
                color: COLORS.secondary,
                padding: 2,
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity> */}

            <View
              style={{
                width: "100%",
                paddingVertical: SIZES.large,
                // marginVertical: SIZES.xxLarge,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderTopColor: COLORS.lightWhite,
                borderBottomColor: COLORS.lightWhite,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  paddingVertical: SIZES.small,
                  backgroundColor: COLORS.tertiary,
                  borderRadius: SIZES.xSmall,
                  marginVertical: 2,
                  paddingHorizontal: SIZES.xxLarge,
                }}
                onPress={() => router.push(`/profile/editInfo`)}
              >
                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    fontWeight: "100",
                    color: COLORS.primary,
                    padding: 2,
                  }}
                >
                  Profile Information
                </Text>
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
                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    fontWeight: "100",
                    color: COLORS.primary,
                    padding: 2,
                  }}
                >
                  Insurance Policies
                </Text>
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
                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    fontWeight: "100",
                    color: COLORS.primary,
                    padding: 2,
                  }}
                >
                  Claim History
                </Text>
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
                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    fontWeight: "100",
                    color: COLORS.primary,
                    padding: 2,
                  }}
                >
                  Security Settings
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "100%",
                paddingVertical: SIZES.large,
                // marginVertical: SIZES.xxLarge,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderTopColor: COLORS.lightWhite,
                borderBottomColor: COLORS.lightWhite,
              }}
            >
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
                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    fontWeight: "100",
                    color: COLORS.primary,
                    padding: 2,
                  }}
                >
                  Notification
                </Text>
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
                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    fontWeight: "100",
                    color: COLORS.primary,
                    padding: 2,
                  }}
                >
                  Feedback
                </Text>
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
                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    fontWeight: "100",
                    color: COLORS.primary,
                    padding: 2,
                  }}
                >
                  FAQs
                </Text>
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
                <Text
                  style={{
                    fontFamily: FONT.regular,
                    fontSize: SIZES.medium,
                    fontWeight: "100",
                    color: COLORS.primary,
                    padding: 2,
                  }}
                >
                  More Settings
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
