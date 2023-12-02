import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import DashboardCard from "../../common/card/dashboard/DashboardCard";
import { icons, images, SIZES } from "../../../constants";
import styles from "./dashboard.style";

const Dashboard = () => {
  const cardData = [
    {
      id: "1",
      title: "Recommendations",
      image: require("../../../assets/recommendation.png"),
    },
    {
      id: "2",
      title: "History",
      image: require("../../../assets/history.png"),
    },
    {
      id: "3",
      title: "Preferences",
      image: require("../../../assets/preference.png"),
    },
    {
      id: "4",
      title: "Special Packages",
      image: require("../../../assets/special.png"),
    },
  ];
  const handleCardPress = (item) => {
    // Implement the logic to handle card press
    console.log("Card pressed:", item.title);
  };
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.userName}>Welcome Prince...</Text>
      <Text style={styles.welcomeMessage}>Dashboard</Text>
    </View>

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value=""
          onChange={() => {}}
          placeholder="What are you looking for?"
        />
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
        <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
    </View>
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DashboardCard data={item} onPress={handleCardPress} />
        )}
        numColumns={2}
        contentContainerStyle={{
          //   columnGap: SIZES.medium,
          //   rowGap: SIZES.medium,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      />
    </View>
  );
};

export default Dashboard;
