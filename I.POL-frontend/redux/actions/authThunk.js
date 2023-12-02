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

export const loginUser = (credentials, idToken) => async (dispatch) => {
  // Make API request for login
  try {
    const response = await axios.post(
      "http://localhost:8800/api/auth/login",
      credentials,
      {
        headers: {
          Authorization: idToken,
        },
      }
    );

    const data = await response.data;

    // Dispatch the login success action
    dispatch(loginSuccess(data.user));
  } catch (error) {
    console.error("Login failed:", error);
    // Handle error and dispatch appropriate actions
  }
};

export const signUp = (credentials, idToken) => async (dispatch) => {
  try {
    // Make API request for sign-up
    const response = await axios.post(
      "http://localhost:8800/api/auth/register",
      credentials,
      {
        headers: {
          Authorization: idToken,
        },
      }
    );

    const data = await response.data;

    if (response.ok) {
      // Dispatch the sign-up success action
      dispatch(signUpSuccess(data.user));
    } else {
      // Dispatch the sign-up failure action
      dispatch(signUpFailure(data.error));
    }
  } catch (error) {
    console.error("Sign-up failed:", error);
    // Dispatch the sign-up failure action with an appropriate error message
    dispatch(signUpFailure("Sign-up failed. Please try again."));
  }
};

export const createProfile = (profileData) => async (dispatch, getState) => {
  try {
    // Get user information from the Redux state
    const user = getState().auth.user;

    console.log("Creating profile. Request Body:", {
      ...profileData,
      userId: user._id,
    });

    // Make API request for creating a profile
    const response = await axios.post(
      "http://localhost:8800/api/users/profile",
      { ...profileData, userId: user._id },
      {
        headers: {
          Authorization: idToken,
        },
      }
    );

    const data = await response.data;

    if (response.ok) {
      // Dispatch the create profile success action
      dispatch(createProfileSuccess(data.profile));
    } else {
      // Dispatch the create profile failure action
      dispatch(createProfileFailure(data.error));
    }
  } catch (error) {
    console.error("Create profile failed:", error);
    // Dispatch the create profile failure action with an appropriate error message
    dispatch(createProfileFailure("Create profile failed. Please try again."));
  }
};

export const updateProfile =
  (profileId, updatedProfileData) => async (dispatch, getState) => {
    try {
      // Get user information from the Redux state
      const user = getState().auth.user;

      // Make API request for updating a profile
      const response = await axios.put(
        `http://localhost:8800/api/users/profile/${profileId}`,
        { ...updatedProfileData, userId: user._id },
        {
          headers: {
            Authorization: idToken,
          },
        }
      );

      const data = await response.data;

      if (response.ok) {
        // Dispatch the update profile success action
        dispatch(updateProfileSuccess(data.updatedProfile));
      } else {
        // Dispatch the update profile failure action
        dispatch(updateProfileFailure(data.error));
      }
    } catch (error) {
      console.error("Update profile failed:", error);
      // Dispatch the update profile failure action with an appropriate error message
      dispatch(
        updateProfileFailure("Update profile failed. Please try again.")
      );
    }
  };
