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
import { icons } from "../../../constants";
import styles from "./recommendation.style";
import { router } from "expo-router";
import CompanyPolicyCard from "../../common/card/companyPolicyCard/CompanyPolicyCard";
import companyPolicies from "../../../data/companyPolicy";

const Dashboard = () => {
  const [searchText, setSearchText] = useState("");
  const [searchFocus, setSearchFocus] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSearchFocus = () => setSearchFocus(true);
  const handleSearchBlur = () => setSearchFocus(false);

  const handlePolicyCardClick = (policyID) => {
    router.push(`screens/other/detailScreen_/${policyID}`);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Recommendations</Text>

        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchImg} onPress={() => {}}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              style={[
                styles.searchInput,
                searchFocus && styles.searchInputFocus,
              ]}
              onChangeText={setSearchText}
              value={searchText}
              placeholder="Insurance, Policies..."
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchImg} onPress={() => {}}>
            <Image
              source={icons.location}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              style={[
                styles.searchInput,
                searchFocus && styles.searchInputFocus,
              ]}
              onChangeText={setSearchText}
              value={searchText}
              placeholder="Choose location..."
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </View>
        </View>

        <View style={styles.searchContainer2}>
          <View style={styles.searchWrapper}>
            <TouchableOpacity style={styles.searchImg} onPress={() => {}}>
              <Image
                source={icons.heart}
                resizeMode="contain"
                style={styles.searchBtnImage}
              />
            </TouchableOpacity>
            <TextInput
              style={[
                styles.searchInput2,
                searchFocus && styles.searchInputFocus,
              ]}
              onChangeText={setSearchText}
              value={searchText}
              placeholder="Company, Institution..."
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </View>

          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage2}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Company Policies</Text>
        </View>

        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            companyPolicies?.map((policy) => (
              <CompanyPolicyCard
                policy={policy}
                key={`popular-policy-${policy?.id}`}
                handleNavigate={() => handlePolicyCardClick(policy.id)}
              />
            ))
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
