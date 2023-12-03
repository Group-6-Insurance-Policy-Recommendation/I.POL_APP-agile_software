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
        isAuthenticated: false,
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
        isAuthenticated: false,
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
