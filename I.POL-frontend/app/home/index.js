import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { COLORS, images } from "../../constants";
import { Dashboard, ProfileHeaderBtn } from "../../components";

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
              handlePress={() => router.push(`/profile`)}
            />
          ),
        }}
      />
      {/* <ScrollView showsHorizontalScrollIndicator={false}> */}
      <Dashboard />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default index;
