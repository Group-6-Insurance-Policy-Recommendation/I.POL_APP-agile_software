import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, SIZES } from "../../../../constants";
import {
  createProfile,
  updateProfile,
} from "../../../../redux/actions/authThunk";
import { useSelector, useDispatch } from "react-redux";
import styles from "./editInformation.style";

const EditInformation = () => {
  // Access Redux store state using useSelector
  const user = useSelector((state) => state.user);

  // Access Redux store dispatch function using useDispatch
  const dispatch = useDispatch();

  const userProfile = user?.profile || {};
  const [firstname, setFirstname] = useState(userProfile.firstname || "");
  const [lastname, setLastname] = useState(userProfile.lastname || "");
  const [username, setUsername] = useState(userProfile.username || "");
  const [nationality, setNationality] = useState(userProfile.nationality || "");
  const [address, setAddress] = useState(userProfile.address || "");
  const [city, setCity] = useState(userProfile.city || "");
  const [dateOfBirth, setDateOfBirth] = useState(userProfile.dateOfBirth || "");

  const handleSave = () => {
    const profileData = {
      firstname,
      lastname,
      username,
      nationality,
      address,
      city,
      dateOfBirth,
    };

    const userProfile = user.profile;
    const userId = user._id;

    // Check if the user already has a profile
    if (userProfile._id) {
      // User has a profile, update the profile
      dispatch(updateProfile(profileData, userId));
    } else {
      // User does not have a profile, create a new profile
      dispatch(createProfile(profileData, userId));
    }
  };

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const handleEmailFocus = () => setEmailFocus(true);
  const handleEmailBlur = () => setEmailFocus(false);
  const handlePasswordFocus = () => setPasswordFocus(true);
  const handlePasswordBlur = () => setPasswordFocus(false);

  return (
    <SafeAreaView
      style={{
        width: "100%",
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: SIZES.medium,
          }}
        >
          <Image
            style={{ width: 100, height: 100, borderRadius: 50 }}
            source={require("../../../../assets/images/PrinceStiles.jpg")}
            resizeMode="center"
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: SIZES.medium,
            }}
          >
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: SIZES.xSmall,
                fontWeight: "100",
                color: COLORS.gray,
              }}
            >
              @PrinceStiles
            </Text>
          </View>
          <KeyboardAvoidingView style={{ width: "100%" }} behavior="padding">
            <View>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={[styles.editInput, emailFocus && styles.focusedInput]}
                placeholder="Name"
                keyboardType="text"
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                value={firstname}
                onChangeText={setFirstname}
              />

              <Text style={styles.label}>Surname</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="Surname"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                value={lastname}
                onChangeText={setLastname}
              />

              <Text style={styles.label}>Username</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="Username"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                value={username}
                onChangeText={setUsername}
              />

              <Text style={styles.label}>Nationality</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="Nationality"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                value={nationality}
                onChangeText={setNationality}
              />

              <Text style={styles.label}>Address</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="Address"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                value={address}
                onChangeText={setAddress}
              />

              <Text style={styles.label}>City</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="City"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                value={city}
                onChangeText={setCity}
              />

              <Text style={styles.label}>Date of Birth</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="Date of Birth"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
              />

              <TouchableOpacity style={styles.editBtn} onPress={handleSave}>
                <Text style={styles.editBtnText}>Save</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditInformation;
