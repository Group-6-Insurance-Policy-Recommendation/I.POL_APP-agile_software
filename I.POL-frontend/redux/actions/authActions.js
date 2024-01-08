// actions/authActions.js
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: { error },
});

export const signUpSuccess = (user) => ({
  type: "SIGN_UP_SUCCESS",
  payload: user,
});

export const signUpFailure = (error) => ({
  type: "SIGN_UP_FAILURE",
  payload: { error },
});

export const createProfileSuccess = (user) => ({
  type: "CREATE_PROFILE_SUCCESS",
  payload: user,
});

export const createProfileFailure = (error) => ({
  type: "CREATE_PROFILE_FAILURE",
  payload: { error },
});

export const updateProfileSuccess = (user) => ({
  type: "UPDATE_PROFILE_SUCCESS",
  payload: user,
});

export const updateProfileFailure = (error) => ({
  type: "UPDATE_PROFILE_FAILURE",
  payload: { error },
});

export const changePasswordSuccess = (user) => ({
  type: "CHANGE_PASSWORD_SUCCESS",
  payload: user,
});

export const changePasswordFailure = (error) => ({
  type: "CHANGE_PASSWORD_FAILURE",
  payload: { error },
});

export const forgotPasswordSuccess = (user) => ({
  type: "FORGOT_PASSWORD_SUCCESS",
  payload: user,
});

export const forgotPasswordFailure = (error) => ({
  type: "FORGOT_PASSWORD_FAILURE",
  payload: { error },
});

export const deleteUserSuccess = (user) => ({
  type: "DELETE_USER_SUCCESS",
  payload: user,
});

export const deleteUserFailure = (error) => ({
  type: "DELETE_USER_FAILURE",
  payload: { error },
});

export const logoutSuccess = () => ({
  type: "LOGOUT",
});
