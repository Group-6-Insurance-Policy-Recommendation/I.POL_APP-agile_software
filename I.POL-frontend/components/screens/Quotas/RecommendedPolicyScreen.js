import { router, Stack } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { COLORS, icons, images, SIZES, FONT } from "../../../constants";
import { ProfileHeaderBtn } from "../..";

const RecommendedPolicyScreen = () => {
  const recommendedPolicy = {
    name: "Gold Health Plus",
    coverage: "Comprehensive Health Coverage",
    premium: "₵50/month",
    benefits: ["Hospitalization", "Medication", "Dental Care"],
  };

  return (
    <SafeAreaView
      style={{
        // flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProfileHeaderBtn
                iconUrl={images.logo}
                dimension="100%"
                handlePress={() => router.push(`home`)}
              />
              <Text
                style={{
                  fontFamily: FONT.bold,
                  fontWeight: "600",
                  color: COLORS.primary,
                  fontSize: SIZES.xSmall,
                }}
              >
                IPOL
              </Text>
            </View>
          ),
          headerRight: () => (
            <ProfileHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => router.push(`profile`)}
            />
          ),
        }}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.pageImgContainer}>
            <Image
              source={images.recommendation}
              resizeMode="center"
              style={styles.pageImg}
            />
          </View>
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
            <Text style={styles.title}>Recommended Policy</Text>
            <Text style={styles.policyName}>{recommendedPolicy.name}</Text>
            <Text style={styles.detail}>
              Coverage: {recommendedPolicy.coverage}
            </Text>
            <Text style={styles.detail}>
              Premium: {recommendedPolicy.premium}
            </Text>

            <Text style={styles.subTitle}>Benefits:</Text>
            {recommendedPolicy.benefits.map((benefit, index) => (
              <Text key={index} style={styles.benefit}>
                - {benefit}
              </Text>
            ))}
          </View>

          <TouchableOpacity
            onPress={() => {
              router.push(`/home`);
            }}
            style={styles.pageBtn}
          >
            <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
              Accept
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              router.push(`/home`);
            }}
            style={styles.pageBtn}
          >
            <Text style={{ color: COLORS.white, fontFamily: FONT.medium }}>
              Go To Dashboard
            </Text>
          </TouchableOpacity>
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
  policyName: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.medium,
    fontWeight: "bold",
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
    fontWeight: "bold",
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
    paddingVertical: 50,
  },
  pageImg: {
    width: 200,
    height: 200,
  },
});

export default RecommendedPolicyScreen;
