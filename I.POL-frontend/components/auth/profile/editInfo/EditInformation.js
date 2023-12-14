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
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
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

  const handleSave = async () => {
    const profileData = {
      firstname,
      lastname,
      username,
      nationality,
      address,
      city,
      dateOfBirth,
    };

    // Check if the user already has a profile
    if (isAuthenticated) {
      console.log(isAuthenticated);
      console.log(userProfile);
      alert("You're authenticated.");
      if (
        username &&
        !firstname &&
        !lastname &&
        !nationality &&
        !address &&
        !city &&
        !dateOfBirth
      ) {
        // User does not have a profile, create a new profile
        dispatch(createProfile(profileData, user._id, user.firebaseToken));
      } else {
        // User has a profile, update the profile
        dispatch(updateProfile(profileData, user._id, user.firebaseToken));
      }
    } else {
      console.log(isAuthenticated);
      alert("You're not authenticated.");
    }
  };

  const [nameFocus, setNameFocus] = useState(false);
  const [surnameFocus, setSurnameFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [nationalFocus, setNationalFocus] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [dobFocus, setDobFocus] = useState(false);

  const handleNameFocus = () => setNameFocus(true);
  const handleNameBlur = () => setNameFocus(false);
  const handleSurnameFocus = () => setSurnameFocus(true);
  const handleSurnameBlur = () => setSurnameFocus(false);
  const handleUsernameFocus = () => setUsernameFocus(true);
  const handleUsernameBlur = () => setUsernameFocus(false);
  const handleNationalFocus = () => setNationalFocus(true);
  const handleNationalBlur = () => setNationalFocus(false);
  const handleAddressFocus = () => setAddressFocus(true);
  const handleAddressBlur = () => setAddressFocus(false);
  const handleCityFocus = () => setCityFocus(true);
  const handleCityBlur = () => setCityFocus(false);
  const handleDobFocus = () => setDobFocus(true);
  const handleDobBlur = () => setDobFocus(false);

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
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.tertiary,
              borderRadius: SIZES.small,
              paddingVertical: SIZES.medium,
            }}
          >
            <Image
              style={{ width: 100, height: 100, borderRadius: 50 }}
              source={require("../../../../assets/images/PrinceStiles.jpg")}
              resizeMode="center"
            />
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: SIZES.xSmall,
                fontWeight: "100",
                color: COLORS.gray,
                paddingVertical: SIZES.small,
              }}
            >
              @PrinceStiles
            </Text>
          </View>
          <KeyboardAvoidingView style={{ width: "100%" }} behavior="padding">
            <View>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={[styles.editInput, nameFocus && styles.focusedInput]}
                placeholder="Name"
                keyboardType="default"
                onFocus={handleNameFocus}
                onBlur={handleNameBlur}
                value={firstname}
                onChangeText={setFirstname}
              />

              <Text style={styles.label}>Surname</Text>
              <TextInput
                style={[styles.editInput, surnameFocus && styles.focusedInput]}
                placeholder="Surname"
                keyboardType="default"
                onFocus={handleSurnameFocus}
                onBlur={handleSurnameBlur}
                value={lastname}
                onChangeText={setLastname}
              />

              <Text style={styles.label}>Username</Text>
              <TextInput
                style={[styles.editInput, usernameFocus && styles.focusedInput]}
                placeholder="Username"
                keyboardType="default"
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
                value={username}
                onChangeText={setUsername}
              />

              <Text style={styles.label}>Nationality</Text>
              <TextInput
                style={[styles.editInput, nationalFocus && styles.focusedInput]}
                placeholder="Nationality"
                keyboardType="default"
                onFocus={handleNationalFocus}
                onBlur={handleNationalBlur}
                value={nationality}
                onChangeText={setNationality}
              />

              <Text style={styles.label}>Address</Text>
              <TextInput
                style={[styles.editInput, addressFocus && styles.focusedInput]}
                placeholder="Address"
                keyboardType="default"
                onFocus={handleAddressFocus}
                onBlur={handleAddressBlur}
                value={address}
                onChangeText={setAddress}
              />

              <Text style={styles.label}>City</Text>
              <TextInput
                style={[styles.editInput, cityFocus && styles.focusedInput]}
                placeholder="City"
                keyboardType="default"
                onFocus={handleCityFocus}
                onBlur={handleCityBlur}
                value={city}
                onChangeText={setCity}
              />

              <Text style={styles.label}>Date of Birth</Text>
              <TextInput
                style={[styles.editInput, dobFocus && styles.focusedInput]}
                placeholder="Date of Birth"
                keyboardType="default"
                onFocus={handleDobFocus}
                onBlur={handleDobBlur}
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
