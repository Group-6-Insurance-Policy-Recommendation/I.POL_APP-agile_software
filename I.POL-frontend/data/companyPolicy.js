// policies.js

const companyPolicies = [
  // ... (previous policies)

  {
    id: "1",
    logo: "https://via.placeholder.com/150/33A5FF/FFFFFF?text=Company+A",
    company: "SecureLife Insurance",
    location: "Accra",
    insuranceType: "Health Insurance",
    coverage: "Life Insurance, Critical Illness, Children’s Education Fund",
    premium: "$50 per month",
    description:
      "Comprehensive family protection plan, including life insurance, critical illness coverage, and a fund for children’s education.",
    additionalBenefits: [
      "Accidental Death Benefit",
      "Hospital Cash Benefit",
      "Flexible Premium Payment Options",
    ],
    exclusions: [
      "Suicide within the first year of coverage",
      "Pre-existing Critical Illnesses",
    ],
    policyDetail: {
      policyInformation: {
        name: "Gold Health Plus",
        type: "Health Insurance",
        coverage: "Comprehensive Health Coverage",
        policyholderName: "John Doe",
        policyNumber: "H123456789",
        effectiveDate: "2023-01-01",
        expirationDate: "2023-12-31",
        insuredEntities: ["John Doe", "Dependent1", "Dependent2"],
      },
      coverageDetails: {
        medicalCoverage: {
          description:
            "Comprehensive medical coverage for illness and accidents.",
          coverageLimit: 1000000,
          deductible: 500,
        },
        prescriptionDrugCoverage: {
          description: "Coverage for prescribed medications.",
          coverageLimit: 50000,
          deductible: 20,
        },
      },
      benefits: ["Hospitalization", "Medication", "Dental Care"],
      exclusions: [
        "Cosmetic procedures",
        "Self-inflicted injuries",
        "Pre-existing conditions",
      ],
      termsAndConditions: {
        premiums: {
          paymentFrequency: "Monthly",
          paymentDueDate: "1st of each month",
          acceptedPaymentMethods: ["Credit card", "Bank transfer"],
        },
        renewal: {
          renewalTerms:
            "Policy can be renewed annually with a premium adjustment.",
        },
        cancellation: {
          cancellationPolicy: "Policy can be canceled with a 30-day notice.",
          refundPolicy:
            "No refunds for cancellations after the first three months.",
        },
        claims: {
          claimsProcess:
            "Submit claims through the online portal or contact the claims department.",
          contactInformation: {
            email: "claims@healthinsco.com",
            phone: "1-800-123-4567",
          },
        },
      },
      responsibilities: [
        "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
        "Notification of changes: The policyholder must inform the insurer of any changes in family composition or contact details.",
        "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
      ],
      contactInformation: {
        insuranceCompanyName: "Gold Health Plus",
        customerService: {
          email: "support@healthinsco.com",
          phone: "1-888-555-1234",
        },
        claimsDepartment: {
          email: "claims@healthinsco.com",
          phone: "1-800-123-4567",
        },
      },
    },
    policyPlans: {
      standard: {
        plan: "Standard Plan",
        coverage: "Basic coverage for essential needs",
        cost: "50",
        benefits: [
          "Hospitalization coverage",
          "Outpatient services",
          "Prescription drugs",
        ],
        fees: "20",
        duration: "12 months",
        insuranceType: "Health Insurance",
        expiration: "Annual Renewal",
      },
      advanced: {
        plan: "Advanced Plan",
        coverage: "Comprehensive coverage for most needs",
        cost: "80",
        benefits: [
          "Hospitalization coverage",
          "Outpatient services",
          "Prescription drugs",
          "Dental and vision coverage",
        ],
        fees: "30",
        duration: "12 months",
        insuranceType: "Health Insurance",
        expiration: "Annual Renewal",
      },
      premium: {
        plan: "Premium Plan",
        coverage: "Top-tier coverage for all needs",
        cost: "120",
        benefits: [
          "Hospitalization coverage",
          "Outpatient services",
          "Prescription drugs",
          "Dental and vision coverage",
          "Specialized treatments",
          "Emergency medical evacuation",
        ],
        fees: "50",
        duration: "12 months",
        insuranceType: "Health Insurance",
        expiration: "Annual Renewal",
      },
    },
  },

  {
    id: "2",
    logo: "https://via.placeholder.com/150/33A5FF/FFFFFF?text=Company+B",
    company: "TravelGuard Insurance",
    location: "New York",
    insuranceType: "Travel Insurance",
    coverage: "Trip Cancellation, Emergency Medical Assistance, Baggage Loss",
    premium: "$75 per month",
    description:
      "Comprehensive travel protection plan, covering trip cancellations, emergency medical assistance, and baggage loss.",
    additionalBenefits: [
      "Travel Delay Coverage",
      "Emergency Evacuation Coverage",
      "24/7 Customer Support",
    ],
    exclusions: [
      "Intentional self-injury",
      "Pre-existing medical conditions",
      "Participation in extreme sports without coverage",
    ],
    policyDetail: {
      policyInformation: {
        name: "Platinum Travel Plus",
        type: "Travel Insurance",
        coverage: "Comprehensive Travel Protection",
        policyholderName: "Jane Doe",
        policyNumber: "T987654321",
        effectiveDate: "2023-03-01",
        expirationDate: "2023-12-31",
        insuredEntities: ["Jane Doe", "Spouse", "Child1", "Child2"],
      },
      coverageDetails: {
        tripCancellationCoverage: {
          description: "Coverage for canceling trips due to unexpected events.",
          coverageLimit: 5000,
          deductible: 100,
        },
        emergencyMedicalAssistance: {
          description: "Coverage for emergency medical expenses during travel.",
          coverageLimit: 100000,
          deductible: 500,
        },
      },
      benefits: [
        "Trip Cancellation",
        "Emergency Medical Assistance",
        "Baggage Loss",
      ],
      exclusions: [
        "Losses due to alcohol or drug-related incidents",
        "Losses due to participation in illegal activities",
        "Losses due to war or acts of terrorism",
      ],
      termsAndConditions: {
        premiums: {
          paymentFrequency: "Monthly",
          paymentDueDate: "5th of each month",
          acceptedPaymentMethods: ["Credit card", "PayPal"],
        },
        renewal: {
          renewalTerms:
            "Policy can be renewed annually with a premium adjustment.",
        },
        cancellation: {
          cancellationPolicy: "Policy can be canceled with a 30-day notice.",
          refundPolicy:
            "Partial refunds available for cancellations within the first six months.",
        },
        claims: {
          claimsProcess:
            "Submit claims through the online portal or contact the claims department.",
          contactInformation: {
            email: "claims@travelguard.com",
            phone: "1-800-987-6543",
          },
        },
      },
      responsibilities: [
        "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
        "Notification of changes: The policyholder must inform the insurer of any changes in travel plans or contact details.",
        "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
      ],
      contactInformation: {
        insuranceCompanyName: "Platinum Travel Plus",
        customerService: {
          email: "support@travelguard.com",
          phone: "1-888-555-4321",
        },
        claimsDepartment: {
          email: "claims@travelguard.com",
          phone: "1-800-987-6543",
        },
      },
    },
    policyPlans: {
      standard: {
        plan: "Standard Plan",
        coverage: "Basic coverage for essential travel needs",
        cost: "75",
        benefits: [
          "Trip Cancellation coverage",
          "Emergency Medical Assistance",
          "Baggage Loss coverage",
        ],
        fees: "25",
        duration: "12 months",
        insuranceType: "Travel Insurance",
        expiration: "Annual Renewal",
      },
      premium: {
        plan: "Premium Plan",
        coverage: "Enhanced coverage for all travel needs",
        cost: "100",
        benefits: [
          "Trip Cancellation coverage",
          "Emergency Medical Assistance",
          "Baggage Loss coverage",
          "Travel Delay coverage",
          "Emergency Evacuation coverage",
        ],
        fees: "35",
        duration: "12 months",
        insuranceType: "Travel Insurance",
        expiration: "Annual Renewal",
      },
    },
  },

  {
    id: "3",
    logo: "https://via.placeholder.com/150/33A5FF/FFFFFF?text=Company+C",
    company: "DriveSafe Insurance",
    location: "Los Angeles",
    insuranceType: "Auto Insurance",
    coverage: "Collision, Liability, Comprehensive",
    premium: "$120 per month",
    description:
      "Comprehensive auto insurance coverage, including collision, liability, and comprehensive coverage.",
    additionalBenefits: [
      "Rental Car Reimbursement",
      "Roadside Assistance",
      "Accident Forgiveness",
    ],
    exclusions: [
      "Driving under the influence (DUI)",
      "Reckless driving",
      "Intentional damage to the insured vehicle",
    ],
    policyDetail: {
      policyInformation: {
        name: "DiamondDrive Plus",
        type: "Auto Insurance",
        coverage: "Comprehensive Auto Insurance",
        policyholderName: "John Smith",
        policyNumber: "A543210987",
        effectiveDate: "2023-02-01",
        expirationDate: "2023-12-31",
        insuredEntities: ["John Smith", "Spouse", "Teen Driver"],
      },
      coverageDetails: {
        collisionCoverage: {
          description:
            "Coverage for damages to the insured vehicle in a collision.",
          coverageLimit: 25000,
          deductible: 500,
        },
        liabilityCoverage: {
          description:
            "Coverage for bodily injury and property damage liability.",
          coverageLimit: 500000,
          deductible: 1000,
        },
      },
      benefits: [
        "Collision coverage",
        "Liability coverage",
        "Comprehensive coverage",
      ],
      exclusions: [
        "Vehicle modifications not disclosed to the insurer",
        "Racing or competitive driving",
        "Driving without a valid license",
      ],
      termsAndConditions: {
        premiums: {
          paymentFrequency: "Monthly",
          paymentDueDate: "10th of each month",
          acceptedPaymentMethods: ["Credit card", "Electronic funds transfer"],
        },
        renewal: {
          renewalTerms:
            "Policy can be renewed annually with a premium adjustment.",
        },
        cancellation: {
          cancellationPolicy: "Policy can be canceled with a 30-day notice.",
          refundPolicy:
            "Partial refunds available for cancellations within the first six months.",
        },
        claims: {
          claimsProcess:
            "Submit claims through the online portal or contact the claims department.",
          contactInformation: {
            email: "claims@drivesafe.com",
            phone: "1-800-555-9876",
          },
        },
      },
      responsibilities: [
        "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
        "Notification of changes: The policyholder must inform the insurer of any changes in driving habits or contact details.",
        "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
      ],
      contactInformation: {
        insuranceCompanyName: "DiamondDrive Plus",
        customerService: {
          email: "support@drivesafe.com",
          phone: "1-888-555-1234",
        },
        claimsDepartment: {
          email: "claims@drivesafe.com",
          phone: "1-800-555-9876",
        },
      },
    },
    policyPlans: {
      basic: {
        plan: "Basic Plan",
        coverage: "Standard coverage for essential needs",
        cost: "120",
        benefits: ["Collision coverage", "Liability coverage"],
        fees: "40",
        duration: "12 months",
        insuranceType: "Auto Insurance",
        expiration: "Annual Renewal",
      },
      premium: {
        plan: "Premium Plan",
        coverage: "Enhanced coverage for comprehensive protection",
        cost: "150",
        benefits: [
          "Collision coverage",
          "Liability coverage",
          "Comprehensive coverage",
          "Rental Car Reimbursement",
          "Roadside Assistance",
        ],
        fees: "50",
        duration: "12 months",
        insuranceType: "Auto Insurance",
        expiration: "Annual Renewal",
      },
    },
  },

  {
    id: "4",
    logo: "https://via.placeholder.com/150/33A5FF/FFFFFF?text=Company+D",
    company: "EternalLife Insurance",
    location: "New York",
    insuranceType: "Life Insurance",
    coverage: "Term Life, Whole Life, Universal Life",
    premium: "$80 per month",
    description:
      "Comprehensive life insurance coverage, including term life, whole life, and universal life options.",
    additionalBenefits: [
      "Accidental Death Benefit",
      "Cash Value Accumulation",
      "Flexible Premium Payment Options",
    ],
    exclusions: [
      "Suicide within the first two years of coverage",
      "Death as a result of criminal activity",
      "Participation in hazardous activities not disclosed to the insurer",
    ],
    policyDetail: {
      policyInformation: {
        name: "EternalLife Plus",
        type: "Life Insurance",
        coverage: "Comprehensive Life Insurance",
        policyholderName: "Alice Johnson",
        policyNumber: "L987654321",
        effectiveDate: "2023-03-01",
        expirationDate: "2033-03-01",
        insuredEntities: ["Alice Johnson", "Spouse", "Children"],
      },
      coverageDetails: {
        termLifeCoverage: {
          description:
            "Coverage for a specified term with a death benefit paid to beneficiaries.",
          coverageLimit: 500000,
          premiumAmount: 80,
        },
        wholeLifeCoverage: {
          description:
            "Coverage for the entire lifetime of the insured with cash value accumulation.",
          coverageLimit: 1000000,
          premiumAmount: 120,
        },
      },
      benefits: [
        "Death Benefit",
        "Cash Value Accumulation",
        "Flexible Premium Options",
      ],
      exclusions: [
        "Death due to pre-existing conditions",
        "Death resulting from war or acts of terrorism",
        "Death during participation in extreme sports or activities",
      ],
      termsAndConditions: {
        premiums: {
          paymentFrequency: "Monthly",
          paymentDueDate: "5th of each month",
          acceptedPaymentMethods: ["Credit card", "Bank transfer"],
        },
        renewal: {
          renewalTerms:
            "Policy can be renewed annually with a premium adjustment.",
        },
        cancellation: {
          cancellationPolicy: "Policy can be canceled with a 30-day notice.",
          refundPolicy:
            "Partial refunds available for cancellations within the first six months.",
        },
        claims: {
          claimsProcess:
            "Submit claims through the online portal or contact the claims department.",
          contactInformation: {
            email: "claims@eternallife.com",
            phone: "1-800-999-8765",
          },
        },
      },
      responsibilities: [
        "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
        "Notification of changes: The policyholder must inform the insurer of any changes in family composition or contact details.",
        "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
      ],
      contactInformation: {
        insuranceCompanyName: "EternalLife Plus",
        customerService: {
          email: "support@eternallife.com",
          phone: "1-888-555-1234",
        },
        claimsDepartment: {
          email: "claims@eternallife.com",
          phone: "1-800-999-8765",
        },
      },
    },
    policyPlans: {
      basic: {
        plan: "Basic Plan",
        coverage: "Standard coverage for essential needs",
        cost: "80",
        benefits: ["Term life coverage", "Accidental Death Benefit"],
        fees: "20",
        duration: "12 months",
        insuranceType: "Life Insurance",
        expiration: "Annual Renewal",
      },
      premium: {
        plan: "Premium Plan",
        coverage: "Comprehensive coverage for enhanced protection",
        cost: "120",
        benefits: [
          "Whole life coverage",
          "Accidental Death Benefit",
          "Cash Value Accumulation",
        ],
        fees: "30",
        duration: "12 months",
        insuranceType: "Life Insurance",
        expiration: "Annual Renewal",
      },
    },
  },

  {
    id: "5",
    logo: "https://via.placeholder.com/150/33A5FF/FFFFFF?text=Company+E",
    company: "DriveSafe Insurance",
    location: "Accra",
    insuranceType: "Auto Insurance",
    coverage: "Liability, Collision, Comprehensive",
    premium: "$70 per month",
    description:
      "Comprehensive auto insurance coverage, including liability, collision, and comprehensive options.",
    additionalBenefits: [
      "Roadside Assistance",
      "Rental Car Reimbursement",
      "Accident Forgiveness",
    ],
    exclusions: [
      "Damage due to intentional acts",
      "Damage from racing or illegal activities",
      "Wear and tear on the vehicle",
    ],
    policyDetail: {
      policyInformation: {
        name: "DriveSafe Deluxe",
        type: "Auto Insurance",
        coverage: "Comprehensive Auto Insurance",
        policyholderName: "Michael Zed",
        policyNumber: "A765432109",
        effectiveDate: "2023-04-01",
        expirationDate: "2024-04-01",
        insuredEntities: ["Michael Zed", "Spouse", "Family Vehicles"],
      },
      coverageDetails: {
        liabilityCoverage: {
          description:
            "Coverage for bodily injury and property damage liability.",
          coverageLimit: 300000,
          premiumAmount: 40,
        },
        collisionCoverage: {
          description:
            "Coverage for damage to the insured vehicle due to collisions.",
          coverageLimit: 50000,
          deductible: 500,
          premiumAmount: 30,
        },
        comprehensiveCoverage: {
          description:
            "Coverage for damage to the insured vehicle from non-collision incidents.",
          coverageLimit: 50000,
          deductible: 500,
          premiumAmount: 20,
        },
      },
      benefits: [
        "Roadside Assistance",
        "Rental Car Reimbursement",
        "Accident Forgiveness",
      ],
      exclusions: [
        "Damage from intentional acts",
        "Damage from racing or illegal activities",
        "Wear and tear on the vehicle",
      ],
      termsAndConditions: {
        premiums: {
          paymentFrequency: "Monthly",
          paymentDueDate: "10th of each month",
          acceptedPaymentMethods: ["Credit card", "Bank transfer"],
        },
        renewal: {
          renewalTerms:
            "Policy can be renewed annually with a premium adjustment.",
        },
        cancellation: {
          cancellationPolicy: "Policy can be canceled with a 30-day notice.",
          refundPolicy:
            "Partial refunds available for cancellations within the first six months.",
        },
        claims: {
          claimsProcess:
            "Submit claims through the online portal or contact the claims department.",
          contactInformation: {
            email: "claims@drivesafe.com",
            phone: "1-800-777-1234",
          },
        },
      },
      responsibilities: [
        "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
        "Notification of changes: The policyholder must inform the insurer of any changes in family composition or contact details.",
        "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
      ],
      contactInformation: {
        insuranceCompanyName: "DriveSafe Deluxe",
        customerService: {
          email: "support@drivesafe.com",
          phone: "1-888-555-1234",
        },
        claimsDepartment: {
          email: "claims@drivesafe.com",
          phone: "1-800-777-1234",
        },
      },
    },
    policyPlans: {
      basic: {
        plan: "Basic Plan",
        coverage: "Standard coverage for essential needs",
        cost: "70",
        benefits: ["Liability coverage", "Roadside Assistance"],
        fees: "15",
        duration: "12 months",
        insuranceType: "Auto Insurance",
        expiration: "Annual Renewal",
      },
      premium: {
        plan: "Premium Plan",
        coverage: "Comprehensive coverage for enhanced protection",
        cost: "120",
        benefits: [
          "Liability coverage",
          "Collision coverage",
          "Comprehensive coverage",
          "Roadside Assistance",
          "Rental Car Reimbursement",
        ],
        fees: "30",
        duration: "12 months",
        insuranceType: "Auto Insurance",
        expiration: "Annual Renewal",
      },
    },
  },

  {
    id: "6",
    logo: "https://via.placeholder.com/150/33A5FF/FFFFFF?text=Company+F",
    company: "SafeGuard Business Solutions",
    location: "New York",
    insuranceType: "Business Insurance",
    coverage: "General Liability, Property Insurance, Business Interruption",
    premium: "$120 per month",
    description:
      "Comprehensive business insurance coverage, including general liability, property insurance, and business interruption protection.",
    additionalBenefits: [
      "Legal Expense Coverage",
      "Employee Liability Insurance",
      "Cyber Liability Protection",
    ],
    exclusions: [
      "Intentional damage to property",
      "Acts of war or terrorism",
      "Damage from employee dishonesty",
    ],
    policyDetail: {
      policyInformation: {
        name: "SafeGuard Business Shield",
        type: "Business Insurance",
        coverage: "Comprehensive Business Coverage",
        policyholderName: "ABC Corporation",
        policyNumber: "B987654321",
        effectiveDate: "2023-06-01",
        expirationDate: "2024-06-01",
        insuredEntities: [
          "ABC Corporation",
          "Branch Office 1",
          "Branch Office 2",
        ],
      },
      coverageDetails: {
        generalLiability: {
          description:
            "Coverage for bodily injury and property damage liability.",
          coverageLimit: 1000000,
          premiumAmount: 80,
        },
        propertyInsurance: {
          description: "Coverage for physical assets owned by the business.",
          coverageLimit: 500000,
          deductible: 1000,
          premiumAmount: 30,
        },
        businessInterruption: {
          description:
            "Coverage for lost income during business interruptions.",
          coverageLimit: 200000,
          premiumAmount: 30,
        },
      },
      benefits: [
        "Legal Expense Coverage",
        "Employee Liability Insurance",
        "Cyber Liability Protection",
      ],
      exclusions: [
        "Intentional damage to property",
        "Acts of war or terrorism",
        "Damage from employee dishonesty",
      ],
      termsAndConditions: {
        premiums: {
          paymentFrequency: "Monthly",
          paymentDueDate: "5th of each month",
          acceptedPaymentMethods: ["Credit card", "Bank transfer"],
        },
        renewal: {
          renewalTerms:
            "Policy can be renewed annually with a premium adjustment.",
        },
        cancellation: {
          cancellationPolicy: "Policy can be canceled with a 30-day notice.",
          refundPolicy:
            "Partial refunds available for cancellations within the first six months.",
        },
        claims: {
          claimsProcess:
            "Submit claims through the online portal or contact the claims department.",
          contactInformation: {
            email: "claims@safeguardbiz.com",
            phone: "1-800-888-4321",
          },
        },
      },
      responsibilities: [
        "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
        "Notification of changes: The policyholder must inform the insurer of any changes in business structure or contact details.",
        "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
      ],
      contactInformation: {
        insuranceCompanyName: "SafeGuard Business Shield",
        customerService: {
          email: "support@safeguardbiz.com",
          phone: "1-888-555-9876",
        },
        claimsDepartment: {
          email: "claims@safeguardbiz.com",
          phone: "1-800-888-4321",
        },
      },
    },
    policyPlans: {
      basic: {
        plan: "Basic Plan",
        coverage: "Standard coverage for essential business needs",
        cost: "120",
        benefits: ["General Liability coverage", "Legal Expense Coverage"],
        fees: "20",
        duration: "12 months",
        insuranceType: "Business Insurance",
        expiration: "Annual Renewal",
      },
      advanced: {
        plan: "Advanced Plan",
        coverage: "Comprehensive coverage for enhanced business protection",
        cost: "200",
        benefits: [
          "General Liability coverage",
          "Property Insurance",
          "Business Interruption coverage",
          "Employee Liability Insurance",
        ],
        fees: "50",
        duration: "12 months",
        insuranceType: "Business Insurance",
        expiration: "Annual Renewal",
      },
    },
  },

  {
    id: "7",
    logo: "https://via.placeholder.com/150/33A5FF/FFFFFF?text=Company+G",
    company: "HealthWell Assurance",
    location: "Ghana",
    insuranceType: "Health Insurance",
    coverage: "Health Insurance, Preventive Care, Prescription Medications",
    premium: "$120 per month",
    description:
      "Comprehensive health plan covering medical expenses, preventive care, and prescription medications for individuals and families.",
    additionalBenefits: [
      "Dental and Vision Coverage",
      "Health Savings Account (HSA)",
      "Telemedicine Services",
    ],
    exclusions: ["Cosmetic Surgeries", "Experimental Treatments"],
    policyDetail: {
      policyInformation: {
        name: "Gold Health Plus",
        type: "Travel Insurance",
        coverage: "Comprehensive Health Coverage",
        policyholderName: "John Doe",
        policyNumber: "H123456789",
        effectiveDate: "2023-01-01",
        expirationDate: "2023-12-31",
        insuredEntities: ["John Doe", "Jane Doe", "Dependent1", "Dependent2"],
      },
      coverageDetails: {
        medicalCoverage: {
          description:
            "Comprehensive medical coverage for illness and accidents.",
          coverageLimit: 1000000,
          deductible: 500,
        },
        prescriptionDrugCoverage: {
          description: "Coverage for prescribed medications.",
          coverageLimit: 50000,
          deductible: 20,
        },
      },
      benefits: ["Hospitalization", "Medication", "Dental Care"],
      exclusions: [
        "Cosmetic procedures",
        "Self-inflicted injuries",
        "Pre-existing conditions",
      ],
      termsAndConditions: {
        premiums: {
          paymentFrequency: "Monthly",
          paymentDueDate: "1st of each month",
          acceptedPaymentMethods: ["Credit card", "Bank transfer"],
        },
        renewal: {
          renewalTerms:
            "Policy can be renewed annually with a premium adjustment.",
        },
        cancellation: {
          cancellationPolicy: "Policy can be canceled with a 30-day notice.",
          refundPolicy:
            "No refunds for cancellations after the first three months.",
        },
        claims: {
          claimsProcess:
            "Submit claims through the online portal or contact the claims department.",
          contactInformation: {
            email: "claims@healthinsco.com",
            phone: "1-800-123-4567",
          },
        },
      },
      responsibilities: [
        "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
        "Notification of changes: The policyholder must inform the insurer of any changes in family composition or contact details.",
        "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
      ],
      contactInformation: {
        insuranceCompanyName: "Gold Health Plus",
        customerService: {
          email: "support@healthinsco.com",
          phone: "1-888-555-1234",
        },
        claimsDepartment: {
          email: "claims@healthinsco.com",
          phone: "1-800-123-4567",
        },
      },
    },
    policyPlans: {
      standard: {
        plan: "Standard Plan",
        coverage: "Basic coverage for essential needs",
        cost: "50",
        benefits: [
          "Hospitalization coverage",
          "Outpatient services",
          "Prescription drugs",
        ],
        fees: "20",
        duration: "12 months",
        insuranceType: "Health Insurance",
        expiration: "Annual Renewal",
      },
      advanced: {
        plan: "Advanced Plan",
        coverage: "Comprehensive coverage for most needs",
        cost: "80",
        benefits: [
          "Hospitalization coverage",
          "Outpatient services",
          "Prescription drugs",
          "Dental and vision coverage",
        ],
        fees: "30",
        duration: "12 months",
        insuranceType: "Health Insurance",
        expiration: "Annual Renewal",
      },
      premium: {
        plan: "Premium Plan",
        coverage: "Top-tier coverage for all needs",
        cost: "120",
        benefits: [
          "Hospitalization coverage",
          "Outpatient services",
          "Prescription drugs",
          "Dental and vision coverage",
          "Specialized treatments",
          "Emergency medical evacuation",
        ],
        fees: "50",
        duration: "12 months",
        insuranceType: "Health Insurance",
        expiration: "Annual Renewal",
      },
    },
  },

  {
    id: "8",
    logo: "https://via.placeholder.com/150/33A5FF/FFFFFF?text=Company+G",
    company: "TravelSafe Insurance",
    location: "New York",
    insuranceType: "Travel Insurance",
    coverage: "Trip Cancellation, Emergency Medical Expenses, Lost Luggage",
    premium: "$150 per trip",
    description:
      "Tailored travel insurance providing coverage for trip cancellations, emergency medical expenses, and lost or delayed luggage during travels.",
    additionalBenefits: [
      "24/7 Emergency Assistance",
      "Travel Delay Reimbursement",
      "Adventure Sports Coverage",
    ],
    exclusions: [
      "Pre-existing Medical Conditions",
      "Extreme Adventure Activities",
    ],
    policyDetail: {
      policyInformation: {
        name: "TravelSafe Insurance",
        type: "Travel Insurance",
        coverage: "Comprehensive Travel Coverage",
        policyholderName: "John Doe",
        policyNumber: "H123456789",
        effectiveDate: "2023-01-01",
        expirationDate: "2023-12-31",
        insuredEntities: ["John Doe", "Jane Doe", "Dependent1", "Dependent2"],
      },
      coverageDetails: {
        medicalCoverage: {
          description:
            "Comprehensive medical coverage for illness and accidents.",
          coverageLimit: 1000000,
          deductible: 500,
        },
        prescriptionDrugCoverage: {
          description: "Coverage for prescribed medications.",
          coverageLimit: 50000,
          deductible: 20,
        },
      },
      benefits: ["Hospitalization", "Medication", "Dental Care"],
      exclusions: [
        "Cosmetic procedures",
        "Self-inflicted injuries",
        "Pre-existing conditions",
      ],
      termsAndConditions: {
        premiums: {
          paymentFrequency: "Monthly",
          paymentDueDate: "1st of each month",
          acceptedPaymentMethods: ["Credit card", "Bank transfer"],
        },
        renewal: {
          renewalTerms:
            "Policy can be renewed annually with a premium adjustment.",
        },
        cancellation: {
          cancellationPolicy: "Policy can be canceled with a 30-day notice.",
          refundPolicy:
            "No refunds for cancellations after the first three months.",
        },
        claims: {
          claimsProcess:
            "Submit claims through the online portal or contact the claims department.",
          contactInformation: {
            email: "claims@travelinsco.com",
            phone: "1-800-123-4567",
          },
        },
      },
      responsibilities: [
        "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
        "Notification of changes: The policyholder must inform the insurer of any changes in family composition or contact details.",
        "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
      ],
      contactInformation: {
        insuranceCompanyName: "Gold Travel Plus",
        customerService: {
          email: "support@travelinsco.com",
          phone: "1-888-555-1234",
        },
        claimsDepartment: {
          email: "claims@travelinsco.com",
          phone: "1-800-123-4567",
        },
      },
    },
    policyPlans: {
      standard: {
        plan: "Standard Plan",
        coverage: "Basic coverage for essential needs",
        cost: "50",
        benefits: [
          "Hospitalization coverage",
          "Outpatient services",
          "Prescription drugs",
        ],
        fees: "20",
        duration: "12 months",
        insuranceType: "Travel Insurance",
        expiration: "Annual Renewal",
      },
      advanced: {
        plan: "Advanced Plan",
        coverage: "Comprehensive coverage for most needs",
        cost: "80",
        benefits: [
          "Hospitalization coverage",
          "Outpatient services",
          "Prescription drugs",
          "Dental and vision coverage",
        ],
        fees: "30",
        duration: "12 months",
        insuranceType: "Travel Insurance",
        expiration: "Annual Renewal",
      },
      premium: {
        plan: "Premium Plan",
        coverage: "Top-tier coverage for all needs",
        cost: "120",
        benefits: [
          "Hospitalization coverage",
          "Outpatient services",
          "Prescription drugs",
          "Dental and vision coverage",
          "Specialized treatments",
          "Emergency medical evacuation",
        ],
        fees: "50",
        duration: "12 months",
        insuranceType: "Travel Insurance",
        expiration: "Annual Renewal",
      },
    },
  },

  {
    id: "9",
    logo: "https://via.placeholder.com/150/33A5FF/FFFFFF?text=Company+H",
    company: "HomeGuard Insurance",
    location: "Accra",
    insuranceType: "Home Insurance",
    coverage: "Property Damage, Theft, Personal Liability",
    premium: "$800 per year",
    description:
      "Home insurance protecting against property damage, theft, and personal liability, ensuring comprehensive coverage for homeowners.",
    additionalBenefits: [
      "Temporary Living Expenses Coverage",
      "Identity Theft Protection",
      "Valuable Items Coverage",
    ],
    exclusions: ["Flood Damage", "Acts of Terrorism"],
    policyDetail: {
      policyInformation: {
        name: "HomeGuard Shield",
        type: "Home Insurance",
        coverage: "Comprehensive Home Coverage",
        policyholderName: "John Doe",
        policyNumber: "H987654321",
        effectiveDate: "2023-01-01",
        expirationDate: "2024-01-01",
        insuredEntities: ["John Doe", "Jane Doe", "Dependent1", "Dependent2"],
      },
      coverageDetails: {
        propertyDamageCoverage: {
          description: "Coverage for property damage caused by covered perils.",
          coverageLimit: 500000,
          deductible: 1000,
        },
        theftCoverage: {
          description: "Coverage for stolen personal belongings.",
          coverageLimit: 200000,
          deductible: 500,
        },
        personalLiabilityCoverage: {
          description: "Coverage for personal liability claims.",
          coverageLimit: 1000000,
          deductible: 1000,
        },
      },
      benefits: [
        "Temporary Living Expenses Coverage",
        "Identity Theft Protection",
        "Valuable Items Coverage",
      ],
      exclusions: ["Flood Damage", "Acts of Terrorism"],
      termsAndConditions: {
        premiums: {
          paymentFrequency: "Annual",
          paymentDueDate: "1st of January",
          acceptedPaymentMethods: ["Credit card", "Bank transfer"],
        },
        renewal: {
          renewalTerms:
            "Policy can be renewed annually with a premium adjustment.",
        },
        cancellation: {
          cancellationPolicy: "Policy can be canceled with a 30-day notice.",
          refundPolicy:
            "Partial refunds available for cancellations within the first three months.",
        },
        claims: {
          claimsProcess:
            "Submit claims through the online portal or contact the claims department.",
          contactInformation: {
            email: "claims@homeguard.com",
            phone: "1-800-987-6543",
          },
        },
      },
      responsibilities: [
        "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
        "Notification of changes: The policyholder must inform the insurer of any changes in property or contact details.",
        "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
      ],
      contactInformation: {
        insuranceCompanyName: "HomeGuard Shield",
        customerService: {
          email: "support@homeguard.com",
          phone: "1-888-555-7890",
        },
        claimsDepartment: {
          email: "claims@homeguard.com",
          phone: "1-800-987-6543",
        },
      },
    },
    policyPlans: {
      basic: {
        plan: "Basic Plan",
        coverage: "Standard coverage for essential home needs",
        cost: "800",
        benefits: ["Property Damage coverage", "Theft coverage"],
        fees: "0",
        duration: "12 months",
        insuranceType: "Home Insurance",
        expiration: "Annual Renewal",
      },
      premium: {
        plan: "Premium Plan",
        coverage: "Comprehensive coverage for enhanced home protection",
        cost: "1200",
        benefits: [
          "Property Damage coverage",
          "Theft coverage",
          "Personal Liability coverage",
        ],
        fees: "0",
        duration: "12 months",
        insuranceType: "Home Insurance",
        expiration: "Annual Renewal",
      },
    },
  },

  {
    id: "10",
    logo: "https://via.placeholder.com/150/33A5FF/FFFFFF?text=Company+I",
    company: "BusinessShield Assurance",
    location: "New York",
    insuranceType: "Business Insurance",
    coverage: "Business Property, Liability Insurance, Business Interruption",
    premium: "$200 per month",
    description:
      "Tailored insurance for businesses, providing coverage for business property, liability, and protection against interruptions and losses.",
    additionalBenefits: [
      "Professional Liability Coverage",
      "Cybersecurity Insurance",
      "Employee Benefits Coverage",
    ],
    exclusions: [
      "Acts of Fraud by Business Owners",
      "Unlawful Business Activities",
    ],
    policyDetail: {
      policyInformation: {
        name: "BusinessShield Plus",
        type: "Business Insurance",
        coverage: "Comprehensive Business Coverage",
        policyholderName: "Jane Doe",
        policyNumber: "B987654321",
        effectiveDate: "2023-01-01",
        expirationDate: "2023-12-31",
        insuredEntities: ["Jane Doe", "John Doe Business Corp."],
      },
      coverageDetails: {
        businessPropertyCoverage: {
          description: "Coverage for business property and assets.",
          coverageLimit: 5000000,
          deductible: 2000,
        },
        liabilityInsurance: {
          description: "Liability coverage for business-related claims.",
          coverageLimit: 1000000,
          deductible: 1000,
        },
        businessInterruptionCoverage: {
          description:
            "Protection against business interruptions and income loss.",
          coverageLimit: 50000,
          deductible: 5000,
        },
      },
      benefits: [
        "Professional Liability Coverage",
        "Cybersecurity Insurance",
        "Employee Benefits Coverage",
      ],
      exclusions: [
        "Acts of Fraud by Business Owners",
        "Unlawful Business Activities",
      ],
      termsAndConditions: {
        premiums: {
          paymentFrequency: "Monthly",
          paymentDueDate: "1st of each month",
          acceptedPaymentMethods: ["Credit card", "Bank transfer"],
        },
        renewal: {
          renewalTerms:
            "Policy can be renewed annually with a premium adjustment.",
        },
        cancellation: {
          cancellationPolicy: "Policy can be canceled with a 30-day notice.",
          refundPolicy:
            "Partial refunds available for cancellations within the first three months.",
        },
        claims: {
          claimsProcess:
            "Submit claims through the online portal or contact the claims department.",
          contactInformation: {
            email: "claims@businessshield.com",
            phone: "1-800-987-6543",
          },
        },
      },
      responsibilities: [
        "Payment of premiums: The policyholder is responsible for paying premiums by the due date.",
        "Notification of changes: The policyholder must inform the insurer of any changes in business details.",
        "Compliance with terms: The policyholder must comply with all terms and conditions outlined in this policy.",
      ],
      contactInformation: {
        insuranceCompanyName: "BusinessShield Plus",
        customerService: {
          email: "support@businessshield.com",
          phone: "1-888-555-7890",
        },
        claimsDepartment: {
          email: "claims@businessshield.com",
          phone: "1-800-987-6543",
        },
      },
    },
    policyPlans: {
      basic: {
        plan: "Basic Plan",
        coverage: "Standard coverage for essential business needs",
        cost: "200",
        benefits: ["Business Property coverage", "Liability Insurance"],
        fees: "0",
        duration: "12 months",
        insuranceType: "Business Insurance",
        expiration: "Annual Renewal",
      },
      premium: {
        plan: "Premium Plan",
        coverage: "Comprehensive coverage for enhanced business protection",
        cost: "400",
        benefits: [
          "Business Property coverage",
          "Liability Insurance",
          "Business Interruption coverage",
        ],
        fees: "0",
        duration: "12 months",
        insuranceType: "Business Insurance",
        expiration: "Annual Renewal",
      },
    },
  },

  // ... (more policies)
];

export default companyPolicies;
