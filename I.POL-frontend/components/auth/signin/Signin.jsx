import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../../config/firebase-config";
const auth = getAuth(firebaseApp);

import axios from "axios";
import { useState } from "react";

import styles from "./signin.style";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, images, icons } from "../../../constants";

const Signin = () => {
  const router = useRouter();
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailFocus = () => setEmailFocus(true);
  const handleEmailBlur = () => setEmailFocus(false);
  const handlePasswordFocus = () => setPasswordFocus(true);
  const handlePasswordBlur = () => setPasswordFocus(false);

  const handleSignIn = async () => {
    try {
      // Authenticate user using email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Log user email to the console
      console.log(userCredential.user.email);

      // Get the ID token for authentication with the backend
      const idToken = await userCredential.user.getIdToken();

      // Send the ID token to the backend for further authentication
      const response = await axios.post(
        "http://localhost:8800/api/auth/login", // Assuming you have a login endpoint
        { email: email, password: password },
        {
          headers: {
            Authorization: idToken,
          },
          // timeout: 5000,
        }
      );

      // Log backend response to the console
      console.log("Backend response:", response.data);

      // Navigate to the home screen or any other screen
      router.push(`/index`);
    } catch (error) {
      // Handle sign-in error
      console.error("Sign-in error:", error);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        padding: SIZES.medium,
      }}
    >
      <Stack.Screen options={{ headerShown: false }} />

      <View 
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.medium,
      }}>
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
          {/* <Text style={styles.logoText}>I.POL</Text> */}
        </View>

        <View style={styles.formArea}>
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
            Forgot your <Text style={styles.cta}>Password?</Text>
          </Text>

          <TouchableOpacity style={styles.authBtn} onPress={handleSignIn}>
            <Text style={styles.authBtnText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.actionText}>
            Create new{" "}
            <Text
              style={styles.cta}
              onPress={() => {
                router.push(`/sign_up`);
              }}
            >
              account?
            </Text>
          </Text>
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

export default Signin;
