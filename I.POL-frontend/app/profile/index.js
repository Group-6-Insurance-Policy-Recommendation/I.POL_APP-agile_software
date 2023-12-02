import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Profile from "../../components/auth/profile";
import { Stack } from "expo-router";
import { COLORS, FONT, SIZES, images, icons } from "../../constants";
import { ProfileHeaderBtn } from "../../components";

const ProfilePage = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Profile />
    </SafeAreaView>
  );
};

export default ProfilePage;
