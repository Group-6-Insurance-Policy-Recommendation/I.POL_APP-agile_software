import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../../config/firebase-config";
const auth = getAuth(firebaseApp);

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user.email);
      const idToken = await userCredential.user.getIdToken();
      const response = await axios.post(
        "http://localhost:8800/api/auth/register",
        { username: username, email: email, password: password },
        {
          headers: {
            Authorization: idToken,
          },
          // timeout: 5000,
        }
      );

      console.log("Backend response:", response.data);

      // Navigate to the home screen or any other screen
      router.push(`/index`);
    } catch (error) {
      console.error("Signup error:", error);
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
          backgroundColor: COLORS.white,
          paddingVertical: SIZES.xxLarge + 20,
        }}
      >
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeMsg}>Welcome Back</Text>
          <Text style={styles.preMsg}>
            Register to explore all existing insurances!!!
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

        <KeyboardAvoidingView style={styles.formArea} behavior="padding">
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
            Already have an account?{" "}
            <Text
              style={styles.cta}
              onPress={() => {
                router.push(`/sign_in`);
              }}
            >
              Login.
            </Text>
          </Text>

          <TouchableOpacity style={styles.authBtn} onPress={handleSignup}>
            <Text style={styles.authBtnText}>Signup</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <Text style={styles.signupOptions}>Or sign up with</Text>

        <View style={styles.authIconsArea}>
          <TouchableOpacity style={styles.authIcons}>
            <Image resizeMode="contain" source={icons.google} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.authIcons}>
            <Image resizeMode="contain" source={icons.facebook} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.authIcons}>
            <Image resizeMode="contain" source={icons.apple} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
