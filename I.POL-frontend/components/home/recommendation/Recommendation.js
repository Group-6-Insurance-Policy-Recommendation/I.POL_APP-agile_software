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
import React, { useEffect, useState } from "react";
import { COLORS, icons, SIZES } from "../../../constants";
import styles from "./recommendation.style";
import { router, useLocalSearchParams } from "expo-router";
import CompanyPolicyCard from "../../common/card/companyPolicyCard/CompanyPolicyCard";
import companyPolicies from "../../../data/companyPolicy";

const Recommendation = () => {
  const [searchInputs, setSearchInputs] = useState({
    insuranceType: "",
    location: "",
    company: "",
  });

  const [filteredPolicies, setFilteredPolicies] = useState([]);
  const [searchFocus, setSearchFocus] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const handleSearchFocus = () => setSearchFocus(true);
  const handleSearchBlur = () => setSearchFocus(false);

  const handleSearchInputChange = (category, value) => {
    setSearchInputs((prevInputs) => ({
      ...prevInputs,
      [category]: value,
    }));
  };

  const filterPolicies = () => {
    setIsLoading(true);
    const filtered = companyPolicies.filter((policy) => {
      const insuranceTypeMatch =
        !searchInputs.insuranceType ||
        policy?.insuranceType
          .toLowerCase()
          .includes(searchInputs.insuranceType.toLowerCase());

      const locationMatch =
        !searchInputs.location ||
        policy?.location
          .toLowerCase()
          .includes(searchInputs.location.toLowerCase());

      const companyMatch =
        !searchInputs.company ||
        policy?.company
          .toLowerCase()
          .includes(searchInputs.company.toLowerCase());

      return insuranceTypeMatch && locationMatch && companyMatch;
    });
    setFilteredPolicies(filtered);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000 * 2);
  };

  const { urlInsuranceType } = useLocalSearchParams();

  useEffect(() => {
    console.log(urlInsuranceType);
    if (urlInsuranceType) {
      setSearchInputs((prevInputs) => ({
        ...prevInputs,
        insuranceType: urlInsuranceType,
      }));
    }
  }, []);

  useEffect(() => {
    filterPolicies();
  }, [searchInputs]);

  const handleSearchButtonPress = () => {
    filterPolicies();
  };

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
              onChangeText={(text) =>
                handleSearchInputChange("insuranceType", text)
              }
              value={searchInputs.insuranceType}
              placeholder="Insurance Type..."
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
              onChangeText={(text) => handleSearchInputChange("location", text)}
              value={searchInputs.location}
              placeholder="Search Location..."
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </View>
        </View>

        <View style={styles.searchContainer2}>
          <View style={styles.searchWrapper}>
            <TouchableOpacity style={styles.searchImg} onPress={() => {}}>
              <Image
                source={icons.heartOutline}
                resizeMode="contain"
                style={styles.searchBtnImage}
              />
            </TouchableOpacity>
            <TextInput
              style={[
                styles.searchInput2,
                searchFocus && styles.searchInputFocus,
              ]}
              onChangeText={(text) => handleSearchInputChange("company", text)}
              value={searchInputs.company}
              placeholder="Search Company..."
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </View>

          <TouchableOpacity
            style={styles.searchBtn}
            onPress={handleSearchButtonPress}
          >
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage2}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          {filteredPolicies.length > 0 ? (
            <Text style={styles.headerTitle} numberOfLines={1}>
              Search Results For Company Policies
            </Text>
          ) : filteredPolicies.length === 0 ? (
            <Text style={styles.headerTitle}>Search Not Found...</Text>
          ) : (
            <Text style={styles.headerTitle}>Company Policies</Text>
          )}
        </View>

        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
          ) : filteredPolicies.length > 0 ? (
            filteredPolicies.map((policy) => (
              <CompanyPolicyCard
                policy={policy}
                key={`popular-policy-${policy.id}`}
                handleNavigate={() => handlePolicyCardClick(policy.id)}
              />
            ))
          ) : searchInputs.insuranceType ||
            searchInputs.location ||
            searchInputs.company ||
            filteredPolicies.length === 0 ? (
            <Text style={styles.headerTitle}>Search Not Found...</Text>
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

        {/* <View style={styles.cardsContainer}>
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
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Recommendation;
