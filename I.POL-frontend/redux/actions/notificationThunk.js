const { default: axios } = require("axios");

// policyId
// amount
// renewalDate
// invoiceId
// dueAmount
// claimId:
// status:

export const createPolicyPaymentNotification = async (
  userId,
  policyID,
  price
) => {
  try {
    const notificationData = {
      userId: userId,
      type: "policy_payment",
      message: "Insurance policy payment successful!",
      channelId: "policy_updates",
      data: {
        policyId: policyID,
        price: price,
      },
    };
    const response = await axios.post(
      "https://ipol-server.onrender.com/api/notifications/create",
      { ...notificationData }
    );

    if (response.status === 201) {
      console.log("Notification created successfully");
    } else {
      console.error("Failed to create notification:", response.statusText);
      // Handle the error appropriately, e.g., display an error message to the user
    }
  } catch (error) {
    console.error("Error creating notification:", error);
    // Handle the error appropriately, e.g., display an error message to the user
  }
};
