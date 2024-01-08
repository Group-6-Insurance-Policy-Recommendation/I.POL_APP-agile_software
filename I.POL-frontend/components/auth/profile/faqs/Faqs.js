import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, FONT, images, SIZES } from "../../../../constants";
import { Entypo } from "@expo/vector-icons";

const Faqs = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    setHeight(Dimensions.get("window").height);
    setWidth(Dimensions.get("window").width);
  }, []);

  const [expandedSections, setExpandedSections] = useState([]);

  const faqs = [
    // General FAQs
    {
      question: "How do I create an account?",
      answer:
        'To create an account, simply tap on the "Sign Up" button and follow the instructions. You\'ll need to provide basic personal information and choose a password.',
    },
    {
      question: "How can I get a quote?",
      answer:
        "To get a quote, provide some information about yourself and the type of insurance you're interested in. You can do this through our app's preference option or by contacting our customer service team.",
    },
    {
      question: "How do I make a payment?",
      answer:
        "You can make payments conveniently through our app using your credit or debit card. We also offer other payment options, such as gpay and amazonpay.",
    },
    {
      question: "How do I file a claim?",
      answer:
        "To file a claim, you can either start the process through our app or contact our customer service team. We'll guide you through the steps and provide the necessary forms.",
    },
    {
      question: "How can I manage my policies?",
      answer:
        "You can manage your policies easily through our app. You can view your coverage details, make changes to your information, update payment methods, and more.",
    },

    // Policy-Specific FAQs
    {
      question: "What does my health insurance policy cover?",
      answer:
        "Your health insurance policy covers a range of medical expenses, including doctor visits, hospitalizations, surgeries, prescriptions, and more. Please refer to your policy documents for specific details.",
    },
    {
      question: "What is the deductible on my car insurance policy?",
      answer:
        "The deductible is the amount you'll pay out of pocket before your insurance coverage kicks in. Your policy documents will specify the deductible amount.",
    },
    {
      question: "Does my home insurance cover damage from natural disasters?",
      answer:
        "Most home insurance policies cover damage from natural disasters like fire, floods, and storms, but coverage may vary depending on your specific policy.",
    },

    // Account-Related FAQs
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, tap on the \"Forgot Password?\" link on the login screen. You'll be prompted to enter your email address, and we'll send you instructions to reset your password.",
    },
    {
      question: "How can I update my personal information?",
      answer:
        'You can update your personal information, such as your address or phone number, in the "My Profile" section of our app.',
    },

    // Contact and Support FAQs
    {
      question: "How can I contact customer service?",
      answer:
        "You can reach our customer service team by phone, email, or chat. Our contact information is available in our app.",
    },
    {
      question: "What are your business hours?",
      answer:
        "Our customer service team is available Monday to Friday, 9 AM to 5 PM GMT.",
    },
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections((prevExpandedSections) =>
      prevExpandedSections.includes(sectionId)
        ? prevExpandedSections.filter((id) => id !== sectionId)
        : [...prevExpandedSections, sectionId]
    );
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <SafeAreaView
        style={{
          width: width,
          //   height: height,
          backgroundColor: COLORS.tertiary,
          padding: SIZES.medium,
        }}
      >
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>FAQs</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.heading}>Frequently Asked Questions</Text>

          {faqs.map((faq) => (
            <View>
              <TouchableOpacity onPress={() => toggleSection(faq.question)}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.questionText}>{faq.question}</Text>
                  <Entypo
                    name={
                      expandedSections.includes(faq.question)
                        ? "chevron-up"
                        : "chevron-down"
                    }
                    size={24}
                    color={COLORS.primary}
                  />
                </View>
              </TouchableOpacity>
              {expandedSections.includes(faq.question) && ( // Use expandedSections
                <Text style={styles.answerText}>{faq.answer}</Text>
              )}
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>Insurance Policy.Inc</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    padding: 20,
  },
  heading: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    fontWeight: "600",
    marginBottom: 15,
  },
  sectionHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  HeaderContainer: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: FONT.medium,
    fontWeight: "600",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  questionText: {
    width: "90%",
    fontFamily: FONT.regular,
    fontWeight: "400",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  answerText: {
    fontSize: SIZES.small + 1,
    fontFamily: FONT.regular,
    // paddingLeft: 15,
  },
  logoContainer: {
    width: "100%",
    // height: "100%",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SIZES.large,
    paddingVertical: SIZES.large,
  },
  logoImage: {
    width: 60,
    height: 60,
    // tintColor: COLORS.primary,
  },
  logoText: {
    fontSize: SIZES.small,
    fontFamily: FONT.regular,
    padding: SIZES.xSmall,
    color: COLORS.primary,
  },
});
