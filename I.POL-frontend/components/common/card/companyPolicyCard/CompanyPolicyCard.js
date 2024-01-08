import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./companyPolicyCard.style";
import { checkImageURL } from "../../../../utils";

const CompanyPolicyCard = ({ policy, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(policy.logo)
              ? policy.logo
              : "https://seeklogo.com/images/R/risingwave-icon-logo-837E37238C-seeklogo.com.png",
          }}
          resizeMode="contain"
          style={styles.logoImage}
          onPress={handleNavigate}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text
          style={styles.policyName}
          onPress={handleNavigate}
          numberOfLines={1}
        >
          {policy.company}
        </Text>
        <Text
          style={styles.policyDesc}
          onPress={handleNavigate}
          numberOfLines={2}
        >
          {policy.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CompanyPolicyCard;
