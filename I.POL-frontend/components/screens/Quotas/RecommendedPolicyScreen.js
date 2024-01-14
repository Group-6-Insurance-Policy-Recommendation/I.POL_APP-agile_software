import { router, useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { COLORS, images, SIZES, FONT } from "../../../constants";
import { useEffect, useState } from "react";
import companyPolicies from "../../../data/companyPolicy";

const RecommendedPolicyScreen = () => {
  const { insuranceType, minBudget, maxBudget } = useLocalSearchParams();
  const [policies, setPolicies] = useState([]);

  // At most one policy that suits the preferences
  const selectedPolicy = policies.length > 0 ? policies[0] : null;

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
    console.log(minBudget);
    console.log(maxBudget);
    if (insuranceType !== null) {
      // Fetch suitable policy details based on selected insurance type and budget
      const suitablePolicies = companyPolicies.filter((policy) => {
        return (
          (policy.insuranceType
            .toLowerCase()
            .includes(insuranceType.toLowerCase()) &&
            parseFloat(policy.policyPlans.standard?.cost) >=
              parseFloat(minBudget)) ||
          parseFloat(policy.policyPlans.premium?.cost) <= parseFloat(maxBudget)
        );
      });
      setPolicies(suitablePolicies);
      console.log(suitablePolicies);
    }
  }, []);

  const handleInsuranceInfo = (policyID) => {
    router.push(`screens/other/insuranceInfo_/${policyID}`);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView>
        <View
          style={{
            width: width,
            height: height,
            padding: SIZES.medium,
            marginBottom: 200,
          }}
        >
          <View style={styles.pageImgContainer}>
            <Image
              source={images.recommendation}
              resizeMode="center"
              style={{
                width: width - 20,
                height: height / 2,
              }}
            />
          </View>
          <View style={{ paddingVertical: SIZES.xLarge }}>
            <Text style={styles.txt}>We Found Something For You...</Text>
            <View
              style={{
                width: "100%",
                backgroundColor: COLORS.tertiary,
                borderRadius: SIZES.medium,
                padding: SIZES.medium,
                marginVertical: 30,
              }}
            >
              {policies.length === 0 ? (
                <View>
                  <Text style={styles.title}>
                    Oops! No policies match your preference.
                  </Text>
                  <Text style={styles.title2}>Make a new preference...</Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.title}>Recommended Policy</Text>
                  <Text style={styles.title2}>Company:</Text>
                  <Text style={styles.policyName}>
                    {selectedPolicy?.company}
                  </Text>
                  <Text style={styles.title2}>Policy name:</Text>
                  <Text style={styles.policyName}>
                    {selectedPolicy?.policyDetail.policyInformation.name}
                  </Text>
                  <Text style={styles.detail} numberOfLines={2}>
                    Coverage: {selectedPolicy?.coverage}
                  </Text>
                  <Text style={styles.detail}>
                    Premium: {selectedPolicy?.premium}
                  </Text>

                  <Text style={styles.subTitle}>Benefits:</Text>
                  {selectedPolicy?.policyDetail.benefits.map(
                    (benefit, index) => (
                      <Text key={index} style={styles.benefit}>
                        - {benefit}
                      </Text>
                    )
                  )}
                </View>
              )}
            </View>

            {policies.length === 0 ? (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    router.push(`screens/quotas`);
                  }}
                  style={styles.pageBtn}
                >
                  <Text
                    style={{ color: COLORS.white, fontFamily: FONT.medium }}
                  >
                    New Preference
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    router.push(`/home`);
                  }}
                  style={styles.pageBtn}
                >
                  <Text
                    style={{ color: COLORS.white, fontFamily: FONT.medium }}
                  >
                    Go To Dashboard
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <TouchableOpacity
                  onPress={() => handleInsuranceInfo(selectedPolicy?.id)}
                  style={styles.pageBtn}
                >
                  <Text
                    style={{ color: COLORS.white, fontFamily: FONT.medium }}
                  >
                    Proceed
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    router.push(`/home`);
                  }}
                  style={styles.pageBtn}
                >
                  <Text
                    style={{ color: COLORS.white, fontFamily: FONT.medium }}
                  >
                    Go To Dashboard
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.medium,
  },
  txt: {
    color: COLORS.text2,
    textAlign: "center",
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    fontWeight: "600",
    color: COLORS.primary,
    marginBottom: 10,
  },
  title2: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.medium,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 10,
  },
  policyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    fontWeight: "600",
    color: COLORS.primary,
    marginBottom: 10,
  },
  detail: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: "black",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.medium,
    fontWeight: "600",
    color: COLORS.primary,
    marginTop: 10,
    marginBottom: 5,
  },
  benefit: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    color: "black",
    marginLeft: 10,
  },
  pageBtn: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: COLORS.primary,
  },
  pageImgContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pageImg: {
    width: 200,
    height: 200,
  },
});

export default RecommendedPolicyScreen;
