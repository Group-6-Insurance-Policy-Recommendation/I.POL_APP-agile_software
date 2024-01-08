import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Dimensions,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./signin.style";
import { router } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import { loginUser } from "../../../redux/actions/authThunk";

const Signin = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailFocus = () => setEmailFocus(true);
  const handleEmailBlur = () => setEmailFocus(false);
  const handlePasswordFocus = () => setPasswordFocus(true);
  const handlePasswordBlur = () => setPasswordFocus(false);

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const handleSignIn = async () => {
    // Send the ID token to the backend for further authentication
    try {
      setIsLoading(true);

      const credentials = { email, password };
      dispatch(loginUser(credentials));
    } catch (error) {
      // Handle sign-in error
      console.error("Sign-in error:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000 * 10);
    }
  };

  return (
    <SafeAreaView
      style={{
        height: height,
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{ marginHorizontal: SIZES.large }}>
          <View style={styles.container}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeMsg}>Welcome Back.</Text>
              <Text style={styles.preMsg}>
                Log in to explore all existing insurance policies!!!
              </Text>
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
            </KeyboardAvoidingView>

            <Text
              style={styles.actionText}
              onPress={() => {
                router.push(`/auth/forgotPassword_`);
              }}
            >
              Forgot your password?
            </Text>

            {isLoading ? (
              <TouchableOpacity style={styles.focussedBtn}>
                <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.authBtn} onPress={handleSignIn}>
                <Text style={styles.authBtnText} onPress={handleSignIn}>Log in</Text>
              </TouchableOpacity>
            )}

            <Text
              style={styles.cta}
              onPress={() => {
                router.push(`/auth/signUp_`);
              }}
            >
              Create new account?
            </Text>
            <View style={{ width: "100%", paddingVertical: SIZES.medium }}>
              <Text style={styles.signupOptions}>Or sign up with</Text>

              <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Ionicons
                    name="logo-google"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Ionicons
                    name="logo-apple"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Ionicons
                    name="logo-facebook"
                    color={COLORS.text2}
                    size={SIZES.large}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;
