import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import DashboardCard from "../../common/card/dashboardCard/DashboardCard";
import { icons, SIZES } from "../../../constants";
import styles from "./dashboard.style";
import PopularPolicyCard from "../../common/card/popularPolicyCard/PopularPolicyCard";
import policies from "../../../data/policy";
import { router } from "expo-router";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);

  const [searchText, setSearchText] = useState("");
  const [searchFocus, setSearchFocus] = useState("");

  const handleSearchFocus = () => setSearchFocus(true);
  const handleSearchBlur = () => setSearchFocus(false);

  const [isLoading, setIsLoading] = useState(false);

  const cardData = [
    {
      id: "1",
      title: "Recommendations",
      url: "home/recommendation_/InsuranceType",
      image: require("../../../assets/recommendation.png"),
    },
    {
      id: "2",
      title: "Special Packages",
      url: "home/specialPackage_",
      image: require("../../../assets/special.png"),
    },
    {
      id: "3",
      title: "Preferences",
      url: "screens/quotas",
      image: require("../../../assets/preference.png"),
    },
    {
      id: "4",
      title: "Huddle",
      url: "screens/other/huddleScreen_",
      image: require("../../../assets/history.png"),
    },
  ];

  const handleCardPress = (item) => {
    // Implement the logic to handle card press
    router.push(`${item.url}`);
  };

  const handlePolicyCardClick = (urlInsuranceType) => {
    router.push(`home/recommendation_/${urlInsuranceType}`);
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.userName}>
            Welcome @{user.profile?.username}...
          </Text>
          <Text style={styles.welcomeMessage}>Dashboard</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={[
                styles.searchInput,
                searchFocus && styles.searchInputFocus,
              ]}
              onChangeText={setSearchText}
              value={searchText}
              placeholder="What are you looking for?"
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
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
            columnGap: SIZES.medium,
            // rowGap: SIZES.medium,
            // width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Popular Policies</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show all...</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            policies?.map((policy) => (
              <PopularPolicyCard
                policy={policy}
                key={`popular-policy-${policy?.id}`}
                handleNavigate={() => handlePolicyCardClick(policy?.name)}
              />
            ))
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
