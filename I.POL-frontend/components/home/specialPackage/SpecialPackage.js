import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./specialPackage.style";
import { COLORS, icons, images, SIZES } from "../../../constants";
import PackageCard from "../../common/card/packageCard/PackageCard";

const SpecialPackage = () => {
  const cardData = [
    {
      id: "1",
      title: "Student Insurance Plan",
      url: "home/recommendation_",
      image: icons.plan,
    },
    {
      id: "2",
      title: "Family Insurance plan",
      url: "home/specialPackage_",
      image: icons.family,
    },
    {
      id: "3",
      title: "Third Party Insurance",
      url: "home/preference_",
      image: icons.insure,
    },
    {
      id: "4",
      title: "Corporate Health Insurance",
      url: "home/huddle_",
      image: icons.corporate,
    },
  ];

  const handleCardPress = (item) => {
    // Implement the logic to handle card press
    console.log("Card pressed:", item.title);
    // router.push(`${item.url}`);
  };

  return (
    <SafeAreaView
      style={{
        // flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.pageImgContainer}>
            <Image
              source={images.special}
              resizeMode="center"
              style={styles.pageImg}
            />
          </View>
          <View
            style={{
              backgroundColor: COLORS.white,
              borderRadius: SIZES.medium,
              // padding: SIZES.medium,
            }}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Special Packages</Text>
            </View>

            <FlatList
              data={cardData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <PackageCard data={item} onPress={handleCardPress} />
              )}
              numColumns={2}
              contentContainerStyle={{
                //   columnGap: SIZES.medium,
                //   rowGap: SIZES.medium,
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecialPackage;
