import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../../redux/actions/authThunk";

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const userId = user?._id;

  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [password, setPassword] = useState("");

  const handlePasswordFocus = () => setPasswordFocus(true);
  const handlePasswordBlur = () => setPasswordFocus(false);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const deleteHandler = () => {
    console.log(isAuthenticated);
    dispatch(deleteUser(userId, password));
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
        <Text style={styles.HeaderText}>Delete Account</Text>
      </View>

      <Text style={styles.deleteMsg} numberOfLines={8}>
        For security reasons, we require you to confirm your password before
        deleting your account. Please enter your password and click "Delete
        Account" below. This action cannot be undone.
      </Text>

      <KeyboardAvoidingView style={styles.formArea} behavior="padding">
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[styles.formInput, passwordFocus && styles.focusedInput]}
          placeholder="Enter Password"
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
          <TouchableOpacity style={styles.authBtn} onPress={deleteHandler}>
            <Text style={styles.authBtnText}>Delete Account</Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DeleteAccount;

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
    color: "red",
  },
  deleteMsg: {
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
