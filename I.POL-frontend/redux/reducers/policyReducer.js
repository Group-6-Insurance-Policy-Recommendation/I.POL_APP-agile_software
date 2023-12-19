const initialState = {
  policies: [],
  error: null,
};

const policyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_POLICY_SUCCESS":
      return {
        ...state,
        policies: [...state.policies, action.payload],
        error: null,
      };

    case "CREATE_POLICY_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    case "GET_POLICIES_SUCCESS":
      return {
        ...state,
        policies: action.payload,
        error: null,
      };

    case "GET_POLICIES_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default policyReducer;
