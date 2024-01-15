// policies.js

const policies = [
  {
    id: "1",
    logo: require("../../../assets/icons/iHealth.png"),
    name: "Health Insurance",
    coverage: "Hospitalization, Doctor Visits, Medications",
    premium: "$50 per month",
    description:
      "Covers basic health expenses including hospitalization, doctor visits, and medications.",
  },
  {
    id: "2",
    logo: require("../../../assets/icons/iAuto.png"),
    name: "Auto Insurance",
    coverage: "Collision, Liability, Comprehensive",
    premium: "$75 per month",
    description:
      "Provides coverage for your vehicle against collisions, liability claims, and comprehensive damages.",
  },
  {
    id: "3",
    logo: require("../../../assets/icons/iHome.png"),
    name: "Home Insurance",
    coverage: "Property Damage, Theft, Personal Liability",
    premium: "$100 per month",
    description:
      "Protects your home against property damage, theft, and provides personal liability coverage.",
  },
  {
    id: "4",
    logo: require("../../../assets/icons/iLife.png"),
    name: "Life Insurance",
    coverage: "Hospitalization, Doctor Visits, Medications",
    premium: "$50 per month",
    description:
      "Provides financial protection to beneficiaries in the event of the policyholder's death.",
  },
  {
    id: "5",
    logo: require("../../../assets/icons/iBusiness.png"),
    name: "Business Insurance",
    coverage: "Collision, Liability, Comprehensive",
    premium: "$75 per month",
    description:
      "Various types, including property insurance, liability insurance, and business interruption insurance, to protect businesses from financial losses.",
  },
  {
    id: "6",
    logo: require("../../../assets/icons/iTravel.png"),
    name: "Travel Insurance",
    coverage: "Natural Misfortune, Theft, Personal Liability",
    premium: "$100 per month",
    description:
      "Covers unexpected events during travel, such as trip cancellations, medical emergencies, or lost luggage.",
  },
  // Add more policy objects as needed
];

export default policies;

// Policy renewal reminders: Alert users about upcoming policy renewals to ensure uninterrupted coverage.
// Payment reminders: Prompt users to make timely premium payments to avoid lapses in coverage.
// Claim status updates: Keep users informed about the progress of their claims, enhancing transparency and customer satisfaction.
// Benefit utilization notifications: Inform users about available benefits they might be eligible for, promoting better utilization of insurance plans.
// Important announcements: Communicate essential information like changes to policies, terms, or coverage options.
// Educational messages: Offer tips for staying healthy, protecting property, or managing finances, fostering risk prevention and financial wellness.
