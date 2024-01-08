// actions/authThunk.js
import {
  loginSuccess,
  signUpSuccess,
  signUpFailure,
  logoutSuccess,
  createProfileSuccess,
  createProfileFailure,
  updateProfileSuccess,
  updateProfileFailure,
  changePasswordSuccess,
  changePasswordFailure,
  deleteUserSuccess,
  deleteUserFailure,
  forgotPasswordSuccess,
  forgotPasswordFailure,
} from "./authActions";
import axios from "axios";
import { router } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

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
      console.log(response.data);

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
      alert(error.response.data.error);
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

export const logoutUser = () => async (dispatch) => {
  try {
    // Clear user data from AsyncStorage
    await AsyncStorage.removeItem("userData");

    // Dispatch the logout success action
    dispatch(logoutSuccess());

    // Navigate to the login screen or any other screen
    router.push(`/auth/signIn_`);
  } catch (error) {
    // Handle error (optional)
    console.error("Logout failed:", error);
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
        await AsyncStorage.setItem("userData", JSON.stringify(response.data));
        await AsyncStorage.removeItem("profileImage");
        alert("Create profile was successful.");
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
      if (error?.response?.data) {
        console.error(error.response.data);
        // Handle error and dispatch appropriate actions
        alert(error.response.data.error);
      } else {
        alert("Create profile failed. Try Again!");
      }
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
        await AsyncStorage.setItem("userData", JSON.stringify(response.data));
        await AsyncStorage.removeItem("profileImage");
        alert("Update profile was successful.");
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
      if (error?.response?.data) {
        console.error(error.response.data);
        // Handle error and dispatch appropriate actions
        alert(error.response.data.error);
      } else {
        alert("Update profile failed. Try Again!");
      }
    }
  };

// Action thunk for changing the password
export const changePassword =
  (userId, currentPassword, newPassword) => async (dispatch) => {
    try {
      // Make API request to change password
      console.log(userId);
      const response = await axios.put(
        "https://ipol-server.onrender.com/api/users/change-password",
        {
          userId,
          currentPassword,
          newPassword,
        }
      );

      if (response.status === 200) {
        // Dispatch success action if password change is successful
        dispatch(changePasswordSuccess(response.data.message));
        alert(response.data.message);
      } else {
        // Dispatch failure action with the error message
        dispatch(changePasswordFailure(response.data.error));
      }
    } catch (error) {
      // Handle network errors or unexpected errors
      console.error("Error:", error);
      dispatch(
        changePasswordFailure("Failed to change password. Please try again.")
      );
      alert("Failed to change password.", error.response.data.error);
    }
  };

// Action thunk for initiating forgot password
export const initiateForgotPassword = (email) => async (dispatch) => {
  try {
    // Make API request to initiate forgot password
    const response = await axios.post(
      "https://ipol-server.onrender.com/api/users/forgot-password",
      {
        email,
      }
    );

    if (response.status === 200) {
      // Dispatch success action if initiating forgot password is successful
      dispatch(forgotPasswordSuccess(response.data.message));
      alert(response.data.message);
    } else {
      // Dispatch failure action with the error message
      dispatch(forgotPasswordFailure(response.data.error));
    }
  } catch (error) {
    // Handle network errors or unexpected errors
    console.error("Error:", error);
    dispatch(
      forgotPasswordFailure(
        "Failed to initiate password reset. Please try again."
      )
    );
    alert("Failed To Initiate Password Reset. ", error.response.data.error);
  }
};

// Action thunk for deleting a user
export const deleteUser = (userId, password) => async (dispatch) => {
  try {
    // Make API request to delete user
    console.log(userId);
    const response = await axios.delete(
      "https://ipol-server.onrender.com/api/users/delete-user",
      {
        data: { userId, password },
      }
    );

    if (response.status === 200) {
      // Dispatch success action if user deletion is successful
      dispatch(deleteUserSuccess(response.data.message));
      alert(response.data.message);
      setTimeout(() => {
        dispatch(logoutUser());
      }, 3000);
    } else {
      // Dispatch failure action with the error message
      dispatch(deleteUserFailure(response.data.error));
    }
  } catch (error) {
    // Handle network errors or unexpected errors
    console.error("Error:", error);
    dispatch(deleteUserFailure("Failed to delete account. Please try again."));
    alert("Failed To Delete Account.", error.response.data.error);
  }
};
