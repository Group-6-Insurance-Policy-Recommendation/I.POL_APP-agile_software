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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../../config/firebase-config";
const auth = getAuth(firebaseApp);

import { useState } from "react";

import styles from "./signup.style";
import { router } from "expo-router";
import { COLORS, SIZES, images, icons } from "../../../constants";
import { useDispatch } from "react-redux";
import { signUp } from "../../../redux/actions/authThunk";

const Signup = () => {
  const dispatch = useDispatch();
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameFocus = () => setUsernameFocus(true);
  const handleUsernameBlur = () => setUsernameFocus(false);
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

      const idToken = await userCredential.user.getIdToken();

      // Log user email to the console
      console.log(userCredential.user.email);

      const credentials = {
        username: username,
        email: email,
        password: password,
      };
      dispatch(signUp(credentials, idToken));

      // Navigate to the login screen or any other screen
      router.push(`/sign_in`);
    } catch (error) {
      console.error("Signup error:", error);
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
              flex: 1,
              backgroundColor: COLORS.white,
              padding: SIZES.medium,
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

              <Text style={styles.actionText}>
                Already have an account?{" "}
                <Text
                  style={styles.cta}
                  onPress={() => {
                    router.push(`/auth/sign_in`);
                  }}
                >
                  Login.
                </Text>
              </Text>

              <TouchableOpacity style={styles.authBtn} onPress={handleSignup}>
                <Text style={styles.authBtnText}>Signup</Text>
              </TouchableOpacity>

              <View style={{ width: "100%", paddingVertical: SIZES.medium }}>
                <Text style={styles.signupOptions}>Or sign up with</Text>

                <View style={styles.authIconsArea}>
                  <TouchableOpacity style={styles.authIcons}>
                    <Image
                      resizeMode="contain"
                      source={icons.google}
                      style={{ width: 35, height: 35 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.authIcons}>
                    <Image
                      resizeMode="contain"
                      source={icons.facebook}
                      style={{ width: 35, height: 35 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.authIcons}>
                    <Image
                      resizeMode="contain"
                      source={icons.apple}
                      style={{ width: 35, height: 35 }}
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

export default Signup;
