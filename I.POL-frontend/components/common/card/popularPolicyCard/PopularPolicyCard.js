import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularPolicyCard.style";

const PopularPolicyCard = ({ policy, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={policy.logo}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.policyName} numberOfLines={1}>
          {policy.name}
        </Text>
        <Text style={styles.policyCoverage} numberOfLines={2}>
          {policy.coverage}
        </Text>
        <Text style={styles.policyDescription} numberOfLines={2}>
          {policy.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularPolicyCard;
