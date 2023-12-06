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
    // const response = await axios.post(
    //   `${process.env.BASE_URL}auth/login`,
    //   credentials,
    //   {
    //     headers: {
    //       Authorization: idToken,
    //     },
    //   }
    // );
    const response = await fetch(`${process.env.BASE_URL}auth/login`, {
      method: "POST",
      headers: {
        Authorization: idToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.status === 200) {
      const responseData = await response.json();
      console.log("Backend response:", responseData);
      // console.log("Backend response:", response.data);

      // Dispatch the login success action
      dispatch(loginSuccess(response.data));
    } else {
      const error = await response.json();
      console.error("Login failed:", error);
      // Dispatch the login failure action
      dispatch(loginFailure(response.response.data.error));
    }
  } catch (error) {
    console.error("Login failed:", error);
    // Handle error and dispatch appropriate actions
  }
};

export const signUp = (credentials, idToken) => async (dispatch) => {
  try {
    console.log("Signup. Request Body:", {
      ...credentials,
      idToken: idToken,
    });
    // Make API request for sign-up
    const response = await axios.post(
      `${process.env.BASE_URL}auth/register`,
      credentials,
      {
        headers: {
          Authorization: idToken,
        },
      }
    );

    if (response.status === 200) {
      // Dispatch the sign-up success action
      console.log("Backend response:", response.data);
      dispatch(signUpSuccess(response.data));
    } else {
      // Dispatch the sign-up failure action
      dispatch(signUpFailure(response.response.data.error));
    }
  } catch (error) {
    console.error("Sign-up failed:", error);
    // Dispatch the sign-up failure action with an appropriate error message
    dispatch(signUpFailure("Sign-up failed. Please try again."));
  }
};

export const createProfile =
  (profileData, user_id, idToken) => async (dispatch) => {
    try {
      console.log("Creating profile. Request Body:", {
        ...profileData,
        userId: user_id,
      });

      // Make API request for creating a profile
      const response = await axios.post(
        `${process.env.BASE_URL}users/profile`,
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
        `${process.env.BASE_URL}users/profile/${user_id}`,
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
