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
  price,
  name,
  number
) => {
  try {
    const notificationData = {
      userId: userId,
      type: "policy_payment",
      title: "Insurance policy payment successful!",
      channelId: "policy_updates",
      message: `Your insurance payment for ${name} policy #${number} has been processed successfully.`, // Short notice added
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

export const markNotificationAsSeen = async (notificationId) => {
  await axios
    .post(
      `https://ipol-server.onrender.com/api/notifications/${notificationId}/mark-seen`
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("Notification marked as seen:", data.message);
      // Update UI or perform any actions based on server response
    })
    .catch((error) => {
      console.error("Error marking notification as seen:", error);
      // Handle errors gracefully, informing the user
    });
};
