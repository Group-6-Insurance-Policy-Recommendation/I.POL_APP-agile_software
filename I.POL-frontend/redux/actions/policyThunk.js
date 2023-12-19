// Import necessary dependencies
import axios from "axios";
import { router } from "expo-router";
import {
  createPolicySuccess,
  createPolicyFailure,
  getPoliciesSuccess,
  getPoliciesFailure,
} from "./policyActions";

// Create policy action
export const createPolicy = (policyData, idToken) => async (dispatch) => {
  try {
    // Make API request for creating policy
    const response = await axios.post(
      "https://ipol-server.onrender.com/api/policy/create",
      { ...policyData },
      {
        headers: {
          Authorization: idToken,
        },
      }
    );

    if (response.status === 201) {
      console.log("Policy creation success:", response?.data);
      router.push(`screens/other/huddleScreen_`);

      // Dispatch the create policy success action
      dispatch(createPolicySuccess(response?.data));
    } else {
      console.error("Policy creation failed:", response.error);
      // Dispatch the create policy failure action
      dispatch(createPolicyFailure(response.error));
    }
  } catch (error) {
    console.error("Policy creation failed:", error.response?.data);
    // Handle error and dispatch appropriate actions
    if (error.response?.data?.error) {
      alert(error.response?.data?.error);
    } else {
      alert(error.response?.data);
    }
  }
};

// Get policies action
export const getPolicies = (email, idToken) => async (dispatch) => {
  try {
    // Make API request for getting policies
    const response = await axios.get(
      `https://ipol-server.onrender.com/api/policy/${email}`,
      {
        headers: {
          Authorization: idToken,
        },
      }
    );

    if (response.status === 200) {
      console.log("Policies retrieval success:", response.data);

      // Dispatch the get policies success action
      dispatch(getPoliciesSuccess(response.data));
    } else {
      console.error("Policies retrieval failed:", response.error);
      // Dispatch the get policies failure action
      dispatch(getPoliciesFailure(response.error));
    }
  } catch (error) {
    console.error("Policies retrieval failed:", error.response?.data);
    // Handle error and dispatch appropriate actions
    if (error.response?.data?.error) {
      alert(error.response?.data?.error);
    } else {
      alert(error.response?.data);
    }
  }
};
