// actions/authThunk.js
import {
  loginSuccess,
  signUpSuccess,
  signUpFailure,
  createProfileSuccess,
  createProfileFailure,
  updateProfileSuccess,
  updateProfileFailure,
} from "./authActions";
import axios from "axios";
import { router } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginUser = (credentials, idToken) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://ipol-server.onrender.com/api/auth/login`,
      { ...credentials },
      {
        headers: {
          Authorization: idToken,
        },
      }
    );

    if (response.status === 200) {
      // Dispatch the login success action
      dispatch(loginSuccess(response.data));

      // Save user data to AsyncStorage
      await AsyncStorage.setItem("userData", JSON.stringify(response.data));

      // Navigate to the home screen or any other screen
      router.push(`/home`);
    } else {
      console.error("Login failed:", response.error);
      // Dispatch the login failure action
      dispatch(loginFailure(response.error));
    }
  } catch (error) {
    // Handle error
    if (error?.response?.data) {
      console.error("Login failed:", error.response.data);
      // Handle error and dispatch appropriate actions
      alert(error.response.data);
    } else {
      alert("An Error Occurred. Try Again!");
    }
  }
};

export const signUp = (credentials, idToken) => async (dispatch) => {
  try {
    const response = await axios.post(
      `https://ipol-server.onrender.com/api/auth/register`,
      { ...credentials },
      {
        headers: {
          Authorization: idToken,
        },
      }
    );

    if (response.status === 200) {
      // Dispatch the sign-up success action
      dispatch(signUpSuccess(response.data));

      // Save user data to AsyncStorage
      await AsyncStorage.setItem("userData", JSON.stringify(response.data));

      // Navigate to the login screen or any other screen
      router.push(`/auth/signIn_`);
    } else {
      // Dispatch the sign-up failure action
      dispatch(signUpFailure(response.error));
    }
  } catch (error) {
    // Handle error
    alert("Something went wrong. Try again.");
  }
};

export const createProfile =
  (profileData, user_id, idToken) => async (dispatch) => {
    try {
      const response = await axios.post(
        `https://ipol-server.onrender.com/api/users/profile`,
        { ...profileData, userId: user_id },
        {
          headers: {
            Authorization: idToken,
          },
        }
      );

      if (response.status === 201) {
        // Dispatch the create profile success action
        dispatch(createProfileSuccess(response.data));

        // Save profile data to AsyncStorage
        await AsyncStorage.setItem(
          "profileData",
          JSON.stringify(response.data)
        );
      } else {
        // Dispatch the create profile failure action
        dispatch(createProfileFailure(response.data.error));
      }
    } catch (error) {
      // Handle error
      // Dispatch the create profile failure action with an appropriate error message
      dispatch(
        createProfileFailure("Create profile failed. Please try again.")
      );
      alert("Something went wrong. Try again.");
    }
  };

export const updateProfile =
  (updatedProfileData, user_id, idToken) => async (dispatch) => {
    try {
      const response = await axios.put(
        `https://ipol-server.onrender.com/api/users/profile/${user_id}`,
        { ...updatedProfileData, userId: user_id },
        {
          headers: {
            Authorization: idToken,
          },
        }
      );

      if (response.status === 200) {
        // Dispatch the update profile success action
        dispatch(updateProfileSuccess(response.data));

        // Save updated profile data to AsyncStorage
        await AsyncStorage.setItem(
          "profileData",
          JSON.stringify(response.data)
        );
      } else {
        // Dispatch the update profile failure action
        dispatch(updateProfileFailure(response.data.error));
      }
    } catch (error) {
      // Handle error
      // Dispatch the update profile failure action with an appropriate error message
      dispatch(
        updateProfileFailure("Update profile failed. Please try again.")
      );
    }
  };
