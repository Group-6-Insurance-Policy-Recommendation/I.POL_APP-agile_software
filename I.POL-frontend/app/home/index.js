import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import UserDashboard from "../../components/home";
import { router, Stack } from "expo-router";
import { COLORS, images } from "../../constants";
import { ProfileHeaderBtn } from "../../components";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
            color: COLORS.primary,
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
      <ScrollView showsHorizontalScrollIndicator={false}>
        <UserDashboard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
