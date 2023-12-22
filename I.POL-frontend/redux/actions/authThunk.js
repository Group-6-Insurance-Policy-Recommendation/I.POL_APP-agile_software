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

export const loginUser = (credentials, idToken) => async (dispatch) => {
  // Make API request for login
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
      console.log("Backend response:", response.data);

      // Dispatch the login success action
      dispatch(loginSuccess(response.data));

      // Navigate to the home screen or any other screen
      router.push(`/home`);
    } else {
      console.error("Login failed:", response.error);
      // Dispatch the login failure action
      dispatch(loginFailure(response.error));
    }
  } catch (error) {
    if (error.response.data) {
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
    // Make API request for sign-up
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

      // Navigate to the login screen or any other screen
      router.push(`/auth/signIn_`);
    } else {
      // Dispatch the sign-up failure action
      dispatch(signUpFailure(response.error));
    }
  } catch (error) {
    alert("Something went wrong. Try again.");
  }
};

export const createProfile =
  (profileData, user_id, idToken) => async (dispatch) => {
    try {
      console.log("Creating profile. Request Body:", {
        ...profileData,
        userId: user_id,
      });
      // Make API request for sign-up
      const response = await axios.post(
        `https://ipol-server.onrender.com/api/users/profile`,
        { ...profileData, userId: user_id },
        {
          headers: {
            Authorization: idToken,
          },
        }
      );
      console.log("Profile created-):", response.data);

      if (response.status === 201) {
        // Dispatch the create profile success action
        console.log("Profile created:", response.data);
        dispatch(createProfileSuccess(response.data));
      } else {
        // Dispatch the create profile failure action
        dispatch(createProfileFailure(response.data.error));
      }
    } catch (error) {
      console.error("Create profile failed:", error);
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
      console.log("Updating profile. Request Body:", {
        ...updatedProfileData,
        userId: user_id,
      });

      // Make API request for updating a profile
      const response = await axios.put(
        `https://ipol-server.onrender.com/api/users/profile/${user_id}`,
        { ...updatedProfileData, userId: user_id },
        {
          headers: {
            Authorization: idToken,
          },
        }
      );
      console.log("Profile updated-):", response.data);

      if (response.status === 200) {
        // Dispatch the update profile success action
        console.log("Profile updated:", response.data);
        dispatch(updateProfileSuccess(response.data));
      } else {
        // Dispatch the update profile failure action
        dispatch(updateProfileFailure(response.data.error));
      }
    } catch (error) {
      console.error("Update profile failed:", error);
      // Dispatch the update profile failure action with an appropriate error message
      dispatch(
        updateProfileFailure("Update profile failed. Please try again.")
      );
    }
  };
