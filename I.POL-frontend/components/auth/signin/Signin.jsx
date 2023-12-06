import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../../config/firebase-config";
const auth = getAuth(firebaseApp);

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./signin.style";
import { router, Stack } from "expo-router";
import { COLORS, SIZES, images, icons, SHADOWS } from "../../../constants";
import { loginUser } from "../../../redux/actions/authThunk";

const Signin = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailFocus = () => setEmailFocus(true);
  const handleEmailBlur = () => setEmailFocus(false);
  const handlePasswordFocus = () => setPasswordFocus(true);
  const handlePasswordBlur = () => setPasswordFocus(false);

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user);
      console.log(isAuthenticated);
      return alert("You're logged in.");
    }
  });

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
      const credentials = { email, password };
      dispatch(loginUser(credentials, idToken));

      // Navigate to the home screen or any other screen
      router.push(`/home`);
    } catch (error) {
      // Handle sign-in error
      console.error("Sign-in error:", error);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ marginHorizontal: SIZES.small }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              padding: SIZES.medium,
            }}
          >
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

            <KeyboardAvoidingView style={styles.formArea} behavior="padding">
              <TextInput
                style={[styles.formInput, emailFocus && styles.focusedInput]}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
              />
              <TextInput
                style={[styles.formInput, passwordFocus && styles.focusedInput]}
                placeholder="Password"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
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
                    router.push(`/auth/sign_up`);
                  }}
                >
                  account?
                </Text>
              </Text>
              <View style={{ width: "100%", paddingVertical: SIZES.medium }}>
                <Text style={styles.signupOptions}>Or sign up with</Text>

                <View style={styles.authIconsArea}>
                  <TouchableOpacity style={styles.authIcons}>
                    <Image
                      resizeMode="contain"
                      style={{ width: 35, height: 35 }}
                      source={icons.google}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.authIcons}>
                    <Image
                      resizeMode="contain"
                      style={{ width: 35, height: 35 }}
                      source={icons.facebook}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.authIcons}>
                    <Image
                      resizeMode="contain"
                      style={{ width: 35, height: 35 }}
                      source={icons.apple}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
