import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./specialPackage.style";
import { COLORS, icons, images, SIZES } from "../../../constants";
import PackageCard from "../../common/card/packageCard/PackageCard";
import { router } from "expo-router";

const SpecialPackage = () => {
  const cardData = [
    {
      id: "1",
      title: "Student Insurance Plan",
      url: "screens/other/packageInfo_",
      image: icons.plan,
    },
    {
      id: "2",
      title: "Family Insurance plan",
      url: "screens/other/packageInfo_",
      image: icons.family,
    },
    {
      id: "3",
      title: "Third Party Insurance",
      url: "screens/other/packageInfo_",
      image: icons.insure,
    },
    {
      id: "4",
      title: "Corporate Health Insurance",
      url: "screens/other/packageInfo_",
      image: icons.corporate,
    },
  ];

  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const handleCardPress = (item) => {
    // Implement the logic to handle card press
    // console.log("Card pressed:", item.title);
    router.push(`${item.url}`);
  };

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: height,
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText}>Packages</Text>
          </View>
          <View style={styles.pageImgContainer}>
            <Image
              source={images.special}
              resizeMode="center"
              style={{
                width: width - 20,
                height: height / 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: COLORS.white,
              borderRadius: SIZES.medium,
              // padding: SIZES.medium,
            }}
          >
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
