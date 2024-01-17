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

import styles from "./signup.style";
import { router } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import { useDispatch } from "react-redux";
import { signUp } from "../../../redux/actions/authThunk";

const Signup = () => {
  const dispatch = useDispatch();
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameFocus = () => setUsernameFocus(true);
  const handleUsernameBlur = () => setUsernameFocus(false);
  const handleEmailFocus = () => setEmailFocus(true);
  const handleEmailBlur = () => setEmailFocus(false);
  const handlePasswordFocus = () => setPasswordFocus(true);
  const handlePasswordBlur = () => setPasswordFocus(false);

  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const handleSignup = async () => {
    try {
      setIsLoading(true);

      const credentials = {
        username: username,
        email: email,
        password: password,
      };
      dispatch(signUp(credentials));
    } catch (error) {
      console.error("Error during sign-up:", error);
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
              <Text style={styles.welcomeMsg}>Welcome Dear,</Text>
              <Text style={styles.preMsg}>
                Sign up to explore all existing insurance policies!!!
              </Text>
            </View>

            <KeyboardAvoidingView style={styles.formArea} behavior="padding">
              <TextInput
                style={[styles.formInput, usernameFocus && styles.focusedInput]}
                placeholder="Username"
                keyboardType="default"
                onChangeText={setUsername}
                value={username}
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
              />
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

            <Text style={styles.actionText}>
              Already have an account?{" "}
              <Text
                style={styles.cta}
                onPress={() => {
                  router.push(`/auth/signIn_`);
                }}
              >
                Login.
              </Text>
            </Text>

            {isLoading ? (
              <TouchableOpacity style={styles.focussedBtn}>
                <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.authBtn} onPress={handleSignup}>
                <Text style={styles.authBtnText}>Sign up</Text>
              </TouchableOpacity>
            )}

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

export default Signup;
