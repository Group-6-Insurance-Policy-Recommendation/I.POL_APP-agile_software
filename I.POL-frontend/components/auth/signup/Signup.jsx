import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

import styles from "./signup.style";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, images, icons } from "../../../constants";

const Signup = () => {
  const router = useRouter();
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleEmailFocus = () => {
    setEmailFocus(true);
  };

  const handleEmailBlur = () => {
    setEmailFocus(false);
  };

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocus(false);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.White,
        padding: SIZES.medium,
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />

      <View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeMsg}>Welcome Back</Text>
          <Text style={styles.preMsg}>
            Log in to explore all existing insurances!!!
          </Text>
        </View>

        <View style={styles.logoArea}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>I.POL</Text>
        </View>

        <View style={styles.formArea}>
          <TextInput
            style={[styles.formInput, emailFocus && styles.focusedInput]}
            placeholder="Email"
            keyboardType="email-address"
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />
          <TextInput
            style={[styles.formInput, passwordFocus && styles.focusedInput]}
            placeholder="Password"
            secureTextEntry
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
          />
          <TextInput
            style={[styles.formInput, passwordFocus && styles.focusedInput]}
            placeholder="Confirm Password"
            secureTextEntry
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
          />

          <Text style={styles.actionText}>
            Already have an account{" "}
            <Text
              style={styles.cta}
              onPress={() => {
                router.push(`/sign_in`);
              }}
            >
              Login
            </Text>
          </Text>

          <TouchableOpacity style={styles.authBtn}>
            <Text style={styles.authBtnText}>Signup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.signupOptions}>Or sign up with</Text>

        <View style={styles.authIconsArea}>
          <TouchableOpacity style={styles.authIcons}>
            <Image source={icons.google} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.authIcons}>
            <Image source={icons.facebook} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.authIcons}>
            <Image source={icons.apple} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
