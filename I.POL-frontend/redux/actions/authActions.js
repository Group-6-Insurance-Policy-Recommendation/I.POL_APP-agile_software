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

export const logout = () => ({
  type: "LOGOUT",
});
