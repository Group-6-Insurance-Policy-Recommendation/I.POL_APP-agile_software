// Action creator for policy creation success
export const createPolicySuccess = (policy) => ({
  type: "CREATE_POLICY_SUCCESS",
  payload: policy,
});

// Action creator for policy creation failure
export const createPolicyFailure = (error) => ({
  type: "CREATE_POLICY_FAILURE",
  payload: error,
});

// Action creator for getting policies success
export const getPoliciesSuccess = (policies) => ({
  type: "GET_POLICIES_SUCCESS",
  payload: policies,
});

// Action creator for getting policies failure
export const getPoliciesFailure = (error) => ({
  type: "GET_POLICIES_FAILURE",
  payload: error,
});
