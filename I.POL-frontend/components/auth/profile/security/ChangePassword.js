import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../../redux/actions/authThunk";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const userId = user?._id;

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailFocus = () => setEmailFocus(true);
  const handleEmailBlur = () => setEmailFocus(false);
  const handlePasswordFocus = () => setPasswordFocus(true);
  const handlePasswordBlur = () => setPasswordFocus(false);

  const [width, setWidth] = useState("auto");
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const changePasswordHandler = () => {
    dispatch(changePassword(userId, current, password));
  };

  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
        backgroundColor: COLORS.white,
      }}
    >
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        padding: SIZES.medium,
      }}
    >
      <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Change Password</Text>
      </View>

      <KeyboardAvoidingView style={styles.formArea} behavior="padding">
        <Text style={styles.label}>Current Password</Text>
        <TextInput
          style={[styles.formInput, emailFocus && styles.focusedInput]}
          placeholder="Password to be changed"
          secureTextEntry
          onChangeText={setCurrent}
          value={current}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        />
        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={[styles.formInput, passwordFocus && styles.focusedInput]}
          placeholder="New Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />

        {isLoading ? (
          <TouchableOpacity style={styles.focussedBtn}>
            <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.authBtn}
            onPress={changePasswordHandler}
          >
            <Text style={styles.authBtnText}>Submit</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;

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
