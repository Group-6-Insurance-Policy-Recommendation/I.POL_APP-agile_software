import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
// import database from "@react-native-firebase/database";
import axios from "axios";
import { useState } from "react";

import styles from "./signup.style";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, images, icons } from "../../../constants";

const Signup = () => {
  const router = useRouter();
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailFocus = () => setEmailFocus(true);
  const handleEmailBlur = () => setEmailFocus(false);
  const handlePasswordFocus = () => setPasswordFocus(true);
  const handlePasswordBlur = () => setPasswordFocus(false);

  const handleSignup = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        username,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      const response = await axios.post(
        "http://localhost:8800/api/auth/register",
        { username: username, email: email, password: password },
        {
          headers: {
            Authorization: idToken,
          },
        }
      );

      console.log("Backend response:", response.data);

      // // Store user data in Firebase Realtime Database
      // await database().ref(`/users/${userCredential.user.uid}`).set({
      //   email,
      //   // Add other user details as needed
      // });

      // Save user email to AsyncStorage for persistent session management
      await AsyncStorage.setItem("userEmail", email);

      // Navigate to the home screen or any other screen
      router.push(`/index`);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <SafeAreaView
      style={{
        // flex: 1,
        backgroundColor: COLORS.white,
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
            placeholder="Username"
            keyboardType="Text"
            onChangeText={(text) => setUsername(text)}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />
          <TextInput
            style={[styles.formInput, emailFocus && styles.focusedInput]}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />
          <TextInput
            style={[styles.formInput, passwordFocus && styles.focusedInput]}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
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

          <TouchableOpacity style={styles.authBtn} onPress={handleSignup}>
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
