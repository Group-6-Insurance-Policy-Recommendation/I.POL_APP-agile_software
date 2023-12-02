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
import { useRouter } from "expo-router";
import styles from "./editInformation.style";

const EditInformation = () => {
  const router = useRouter();
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
              />

              <Text style={styles.label}>Surname</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="Surname"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />

              <Text style={styles.label}>Username</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="Username"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />

              <Text style={styles.label}>Nationality</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="Nationality"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />

              <Text style={styles.label}>Address</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="Address"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />

              <Text style={styles.label}>City</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="City"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />

              <Text style={styles.label}>Date of Birth</Text>
              <TextInput
                style={[styles.editInput, passwordFocus && styles.focusedInput]}
                placeholder="Date of Birth"
                keyboardType="text"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />

              <TouchableOpacity style={styles.editBtn} onPress>
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
