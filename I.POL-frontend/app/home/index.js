import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { COLORS, FONT, images, SIZES } from "../../constants";
import { Dashboard, ProfileHeaderBtn } from "../../components";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Dashboard />
    </SafeAreaView>
  );
};

export default index;
