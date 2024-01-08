// reducers/authReducer.js
const initialState = {
  user: {},
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
      };
    case "SIGN_UP_FAILURE":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: false,
      };
    case "CREATE_PROFILE_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "CREATE_PROFILE_FAILURE":
      return {
        ...state,
        user: action.payload,
      };
    case "UPDATE_PROFILE_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "UPDATE_PROFILE_FAILURE":
      return {
        ...state,
        user: action.payload,
      };
    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "CHANGE_PASSWORD_FAILURE":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "FORGOT_PASSWORD_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "FORGOT_PASSWORD_FAILURE":
      return {
        ...state,
        user: action.payload,
      };
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "DELETE_USER_FAILURE":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    // Add other cases as needed
    default:
      return state;
  }
};

export default authReducer;
