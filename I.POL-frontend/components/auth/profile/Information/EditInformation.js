import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONT, images, SIZES } from "../../../../constants";
import {
  createProfile,
  updateProfile,
} from "../../../../redux/actions/authThunk";
import { useSelector, useDispatch } from "react-redux";
import styles from "./editInformation.style";
import { Dropdown } from "react-native-element-dropdown";

import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [phone, setPhone] = useState(userProfile.phone || "");
  const [nationality, setNationality] = useState(userProfile.nationality || "");
  const [address, setAddress] = useState(userProfile.address || "");
  const [city, setCity] = useState(userProfile.city || "");
  const [dateOfBirth, setDateOfBirth] = useState(userProfile.dateOfBirth || "");
  const [gender, setGender] = useState(userProfile.gender || "");
  const [ocupation, setOcupation] = useState(userProfile.ocupation || "");
  const [maritalStatus, setMaritalStatus] = useState(
    userProfile.maritalStatus || ""
  );
  const [income, setIncome] = useState(userProfile.income || "");
  const [asset, setAsset] = useState(userProfile.asset || "");
  const [liability, setLiability] = useState(userProfile.liability || "");
  const [liabilityObject, setLiabilityObject] = useState(null);
  const [genderObject, setGenderObject] = useState(null);
  const [incomeObject, setIncomeObject] = useState(null);
  const [assetObject, setAssetObject] = useState(null);

  // Function to pick image and store in AsyncStorage
  const pickAndStoreImage = async () => {
    // await ImagePicker.requestMediaLibraryPermissionsAsync();
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });
    ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      cameraType: ImagePicker.CameraType.front,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      await AsyncStorage.setItem("profileImage", result.assets[0].uri);
      // const storedImageUri = await AsyncStorage.getItem("profileImage");
      const profileData = {
        firstname,
        lastname,
        username,
        nationality,
        address,
        city,
        dateOfBirth,
        phone,
        gender,
        ocupation,
        maritalStatus,
        income,
        asset,
        liability,
        profilePicture: result.assets[0].uri,
      };

      // Check if the user already has a profile
      if (isAuthenticated) {
        console.log(isAuthenticated);
        // User has a profile, update the profile
        dispatch(updateProfile(profileData, user._id));
      } else {
        console.log(isAuthenticated);
        alert("You're not authenticated.");
      }
    }
  };

  const handleSave = async () => {
    const storedImageUri = await AsyncStorage.getItem("profileImage");
    console.log(storedImageUri)
    const profileData = {
      firstname,
      lastname,
      username,
      nationality,
      address,
      city,
      dateOfBirth,
      phone,
      gender,
      ocupation,
      maritalStatus,
      income,
      asset,
      liability,
      profilePicture: storedImageUri,
    };

    // Check if the user already has a profile
    if (isAuthenticated) {
      console.log(profileData);
      console.log(isAuthenticated);
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
        dispatch(createProfile(profileData, user._id));
      } else {
        // User has a profile, update the profile
        dispatch(updateProfile(profileData, user._id));
      }
    } else {
      alert("You're not authenticated. Logout and start again.");
    }
  };

  const [nameFocus, setNameFocus] = useState(false);
  const [surnameFocus, setSurnameFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [nationalFocus, setNationalFocus] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);
  const [dobFocus, setDobFocus] = useState(false);
  const [genderFocus, setGenderFocus] = useState(false);
  const [ocupationFocus, setOcupationFocus] = useState(false);
  const [statusFocus, setStatusFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [incomeFocus, setIncomeFocus] = useState(false);
  const [assetFocus, setAssetFocus] = useState(false);
  const [liabilityFocus, setLiabilityFocus] = useState(false);

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const genderInfo = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const incomeInfo = [
    { label: "Property", value: "property" },
    { label: "Vehicles", value: "vehicles" },
    { label: "Other", value: "other" },
  ];

  const assetInfo = [
    { label: "Property", value: "property" },
    { label: "Vehicles", value: "vehicles" },
    { label: "Other", value: "other" },
  ];

  const liabilityInfo = [
    { label: "Loans", value: "loans" },
    { label: "Rent", value: "Rent" },
    { label: "Other", value: "other" },
  ];

  return (
    <SafeAreaView
      style={{
        width: width,
        // height: height,
        backgroundColor: COLORS.tertiary,
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
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.small,
              paddingVertical: SIZES.medium,
              marginVertical: SIZES.xSmall,
            }}
          >
            <TouchableOpacity onPress={pickAndStoreImage}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
                source={images.profile}
                resizeMode="center"
              />
            </TouchableOpacity>
            <View style={{ paddingVertical: 6 }}></View>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: SIZES.small,
                fontWeight: "100",
                color: COLORS.white,
              }}
            >
              @{user?.profile?.username}
            </Text>
          </View>
          {/* <KeyboardAvoidingView style={{ width: "100%" }} behavior="padding"> */}
          <View style={{ width: "100%" }}>
            <Text style={styles.textLabel}>Name</Text>
            <TextInput
              style={[styles.editInput, nameFocus && styles.focusedInput]}
              placeholder="Name"
              keyboardType="default"
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
              value={firstname}
              onChangeText={setFirstname}
            />

            <Text style={styles.textLabel}>Surname</Text>
            <TextInput
              style={[styles.editInput, surnameFocus && styles.focusedInput]}
              placeholder="Surname"
              keyboardType="default"
              onFocus={() => setSurnameFocus(true)}
              onBlur={() => setSurnameFocus(false)}
              value={lastname}
              onChangeText={setLastname}
            />

            <Text style={styles.textLabel}>Username</Text>
            <TextInput
              style={[styles.editInput, usernameFocus && styles.focusedInput]}
              placeholder="Username"
              keyboardType="default"
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
              value={username}
              onChangeText={setUsername}
            />

            <Text style={styles.textLabel}>Phone Number</Text>
            <TextInput
              style={[styles.editInput, phoneFocus && styles.focusedInput]}
              placeholder="Phone Number"
              keyboardType="default"
              onFocus={() => setPhoneFocus(true)}
              onBlur={() => setPhoneFocus(false)}
              value={phone}
              onChangeText={setPhone}
            />

            <Text style={styles.textLabel}>Nationality</Text>
            <TextInput
              style={[styles.editInput, nationalFocus && styles.focusedInput]}
              placeholder="Nationality"
              keyboardType="default"
              onFocus={() => setNationalFocus(true)}
              onBlur={() => setNationalFocus(false)}
              value={nationality}
              onChangeText={setNationality}
            />

            <Text style={styles.textLabel}>Address</Text>
            <TextInput
              style={[styles.editInput, addressFocus && styles.focusedInput]}
              placeholder="Address"
              keyboardType="default"
              onFocus={() => setAddressFocus(true)}
              onBlur={() => setAddressFocus(false)}
              value={address}
              onChangeText={setAddress}
            />

            <Text style={styles.textLabel}>City</Text>
            <TextInput
              style={[styles.editInput, cityFocus && styles.focusedInput]}
              placeholder="City"
              keyboardType="default"
              onFocus={() => setCityFocus(true)}
              onBlur={() => setCityFocus(false)}
              value={city}
              onChangeText={setCity}
            />

            <Text style={styles.textLabel}>Date of Birth</Text>
            <TextInput
              style={[styles.editInput, dobFocus && styles.focusedInput]}
              placeholder="Date of Birth"
              keyboardType="default"
              onFocus={() => setDobFocus(true)}
              onBlur={() => setDobFocus(false)}
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />

            <Text style={styles.textLabel}>Gender</Text>
            <Text style={styles.textLabell}>
              {user?.profile?.gender || "field is empty"}
            </Text>
            <View style={{ width: "100%" }}>
              <Dropdown
                style={[
                  styles.dropdown,
                  genderFocus && {
                    borderColor: COLORS.primary,
                    backgroundColor: COLORS.white,
                  },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={genderInfo}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!genderFocus ? "Select gender..." : "..."}
                searchPlaceholder="Search..."
                value={genderObject}
                onFocus={() => setGenderFocus(true)}
                onBlur={() => setGenderFocus(false)}
                onChange={(value) => {
                  setGenderObject(value);
                  setGender(value.label);
                  setGenderFocus(false);
                }}
              />
            </View>

            <Text style={styles.textLabel}>Ocupation</Text>
            <TextInput
              style={[styles.editInput, ocupationFocus && styles.focusedInput]}
              placeholder="Ocupation"
              keyboardType="default"
              onFocus={() => setOcupationFocus(true)}
              onBlur={() => setOcupationFocus(false)}
              value={ocupation}
              onChangeText={setOcupation}
            />

            <Text style={styles.textLabel}>Marital Status</Text>
            <TextInput
              style={[styles.editInput, statusFocus && styles.focusedInput]}
              placeholder="Marital Status"
              keyboardType="default"
              onFocus={() => setStatusFocus(true)}
              onBlur={() => setStatusFocus(false)}
              value={maritalStatus}
              onChangeText={setMaritalStatus}
            />

            <Text style={styles.textLabel}>Income</Text>
            <Text style={styles.textLabell}>
              {user?.profile?.income || "field is empty"}
            </Text>
            <View style={{ width: "100%" }}>
              <Dropdown
                style={[
                  styles.dropdown,
                  incomeFocus && {
                    borderColor: COLORS.primary,
                    backgroundColor: COLORS.white,
                  },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={incomeInfo}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!incomeFocus ? "Select income..." : "..."}
                searchPlaceholder="Search..."
                value={incomeObject}
                onFocus={() => setIncomeFocus(true)}
                onBlur={() => setIncomeFocus(false)}
                onChange={(value) => {
                  setIncomeObject(value);
                  setIncome(value.label);
                  setIncomeFocus(false);
                }}
              />
            </View>

            <Text style={styles.textLabel}>Asset</Text>
            <Text style={styles.textLabell}>
              {user?.profile?.asset || "field is empty"}
            </Text>
            <View style={{ width: "100%" }}>
              <Dropdown
                style={[
                  styles.dropdown,
                  assetFocus && {
                    borderColor: COLORS.primary,
                    backgroundColor: COLORS.white,
                  },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={assetInfo}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!assetFocus ? "Select asset..." : "..."}
                searchPlaceholder="Search..."
                value={assetObject}
                onFocus={() => setAssetFocus(true)}
                onBlur={() => setAssetFocus(false)}
                onChange={(value) => {
                  setAssetObject(value);
                  setAsset(value.label);
                  setAssetFocus(false);
                }}
              />
            </View>

            <Text style={styles.textLabel}>Liability</Text>
            <Text style={styles.textLabell}>
              {user?.profile?.liability || "field is empty"}
            </Text>
            <View style={{ width: "100%" }}>
              <Dropdown
                style={[
                  styles.dropdown,
                  liabilityFocus && {
                    borderColor: COLORS.primary,
                    backgroundColor: COLORS.white,
                  },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={liabilityInfo}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!liabilityFocus ? "Select liability..." : "..."}
                searchPlaceholder="Search..."
                value={liabilityObject}
                onFocus={() => setLiabilityFocus(true)}
                onBlur={() => setLiabilityFocus(false)}
                onChange={(value) => {
                  setLiabilityObject(value);
                  setLiability(value.label);
                  setLiabilityFocus(false);
                }}
              />
            </View>
          </View>
          {/* </KeyboardAvoidingView> */}

          <TouchableOpacity style={styles.editBtn} onPress={handleSave}>
            <Text style={styles.editBtnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditInformation;
