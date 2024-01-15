import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  initiateForgotPassword,
  setForgotPassword,
} from "../../../redux/actions/authThunk";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const userId = user?._id;

  const [emailFocus, setEmailFocus] = useState(false);
  const [OTPFocus, setOTPFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailFocus = () => setEmailFocus(true);
  const handleEmailBlur = () => setEmailFocus(false);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const forgotPasswordHandler = async () => {
    dispatch(initiateForgotPassword(email));
    setShowInput(true);
  };

  const setPasswordHandler = async () => {
    dispatch(setForgotPassword(password, OTP));
  };

  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
        backgroundColor: COLORS.white,
        padding: SIZES.medium,
      }}
    >
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Change Password</Text>
      </View>

      <Text style={styles.forgotMsg} numberOfLines={8}>
        Forgot your password? No worries! Enter your email and we'll send you a
        secure link to set a new one.
      </Text>

      <KeyboardAvoidingView style={styles.formArea} behavior="padding">
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.formInput, emailFocus && styles.focusedInput]}
          placeholder="Enter email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        />
        {showInput && (
          <View>
            <Text style={styles.label}>OTP</Text>
            <TextInput
              style={[styles.formInput, OTPFocus && styles.focusedInput]}
              placeholder="Enter OTP"
              keyboardType="default"
              onChangeText={setOTP}
              value={OTP}
              onFocus={() => setOTPFocus(true)}
              onBlur={() => setOTPFocus(false)}
            />

            <Text style={styles.label}>New Password</Text>
            <TextInput
              style={[styles.formInput, passwordFocus && styles.focusedInput]}
              placeholder="Enter new password"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </View>
        )}

        {showInput ? (
          <TouchableOpacity style={styles.authBtn} onPress={setPasswordHandler}>
            <Text style={styles.authBtnText}>Set Password</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.authBtn}
            onPress={forgotPasswordHandler}
          >
            <Text style={styles.authBtnText}>Send</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  HeaderContainer: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderText: {
    fontFamily: FONT.medium,
    fontWeight: "600",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  forgotMsg: {
    fontSize: SIZES.small + 2,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    paddingVertical: SIZES.small,
    textTransform: "capitalize",
  },
  formArea: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  label: {
    paddingVertical: SIZES.small,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium - 2,
    textAlign: "left",
  },
  formInput: {
    width: "100%",
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.large,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.gray2,
    marginBottom: SIZES.xSmall,
    fontFamily: FONT.regular,
    color: COLORS.text,
    fontWeight: "medium",
  },
  focusedInput: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.lightWhite,
    color: COLORS.text2,
  },
  authBtn: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.small,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  focussedBtn: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.tertiary,
  },
  authBtnText: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    fontWeight: "400",
  },
});
