import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularPolicyCard.style";
import { checkImageURL } from "../../../../utils";

const PopularPolicyCard = ({ policy, handleNavigate }) => {
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
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.policyName} numberOfLines={1}>
          {policy.name}
        </Text>
        <Text style={styles.policyCov} numberOfLines={2}>
          {policy.coverage}
        </Text>
        <Text style={styles.policyDesc} numberOfLines={2}>
          {policy.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularPolicyCard;
