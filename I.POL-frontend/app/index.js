import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, images, SIZES, FONT } from "../constants";

const Home = () => {
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const styles = {
    container: {
      marginHorizontal: SIZES.xLarge,
    },
    gradient: {
      height: height,
      width: width,
    },
    content: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    welcomeContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    welcomeImage: {
      width: width,
      height: height / 2,
      alignSelf: "center",
      marginVertical: SIZES.large,
    },
    descriptionText: {
      color: COLORS.text2,
      fontSize: SIZES.small,
      fontFamily: FONT.regular,
      textAlign: "center",
      marginVertical: SIZES.large,
    },
    buttonContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: SIZES.small,
    },
    signinButton: {
      width: "100%",
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.xSmall,
      paddingVertical: SIZES.small,
      paddingHorizontal: SIZES.large,
      marginVertical: 10,
    },
    signupButton: {
      width: "100%",
      backgroundColor: COLORS.gray2,
      borderRadius: SIZES.xSmall,
      paddingVertical: SIZES.small,
      paddingHorizontal: SIZES.large,
      marginVertical: 10,
    },
    buttonText: {
      textAlign: "center",
      color: "white",
      fontFamily: FONT.medium,
      fontSize: SIZES.medium - 2,
      fontWeight: "400",
    },
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.white, COLORS.lightWhite]}
      style={styles.gradient}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.welcomeContainer}>
              <View>
                <Image source={images.welcome} style={styles.welcomeImage} />
              </View>
              <Text style={styles.descriptionText}>
                We allow you to get your insurance policies through a system
                carefully designed to give you the best.
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.signinButton}
                onPress={() => router.push(`auth/signIn_`)}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signupButton}
                onPress={() => router.push(`auth/signUp_`)}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;
