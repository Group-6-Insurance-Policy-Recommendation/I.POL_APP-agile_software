import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { COLORS, FONT, images, SIZES } from "../../constants";
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
          headerLeft: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProfileHeaderBtn
                iconUrl={images.logo}
                dimension={35}
                handlePress={() => router.push(`home`)}
              />
            </View>
          ),
          headerRight: () => (
            <ProfileHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => router.push(`profile`)}
            />
          ),
        }}
      />
      <Dashboard />
    </SafeAreaView>
  );
};

export default index;
