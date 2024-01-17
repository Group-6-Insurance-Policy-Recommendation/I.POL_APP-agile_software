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
      "Flexible Premium Payment Option",
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
  {
    "id": "11",
    "logo": "https://via.placeholder.com/150/FF5733/FFFFFF?text=Insurance+Hub",
    "company": "Insurance Hub International",
    "location": "Cityville",
    "insuranceType": "Property Insurance",
    "coverage": "Home Insurance, Renters Insurance, Natural Disaster Coverage",
    "premium": "$40 per month",
    "description": "Tailored property insurance plans offering comprehensive coverage for homes and rental properties, including protection against natural disasters.",
    "additionalBenefits": [
      "Personal Property Coverage",
      "Liability Protection",
      "Emergency Temporary Accommodation",
    ],
    "exclusions": [
      "Damage caused by intentional actions",
      "War or nuclear incidents",
      "Pre-existing damages",
    ],
    "policyDetail": {
      "policyInformation": {
        "name": "SecureHome Plus",
        "type": "Property Insurance",
        "coverage": "Comprehensive Property Coverage",
        "policyholderName": "Jane Smith",
        "policyNumber": "P987654321",
        "effectiveDate": "2023-02-01",
        "expirationDate": "2024-01-31",
        "insuredEntities": ["Jane Smith", "Spouse", "Dependent1"],
      },
      "coverageDetails": {
        "propertyCoverage": {
          "description": "Full coverage for property damages and losses.",
          "coverageLimit": 500000,
          "deductible": 250,
        },
        "naturalDisasterCoverage": {
          "description": "Protection against natural disasters such as earthquakes and floods.",
          "coverageLimit": 100000,
          "deductible": 50,
        },
      },
      "benefits": ["Property Damage", "Liability", "Natural Disaster Protection"],
      "exclusions": [
        "Negligence leading to damages",
        "Losses due to business activities",
        "Excluded perils as per policy terms",
      ],
      "termsAndConditions": {
        "premiums": {
          "paymentFrequency": "Monthly",
          "paymentDueDate": "5th of each month",
          "acceptedPaymentMethods": ["Credit card", "Bank transfer"],
        },
        "renewal": {
          "renewalTerms": "Policy can be renewed annually with a premium adjustment.",
        },
        "cancellation": {
          "cancellationPolicy": "Policy can be canceled with a 30-day notice.",
          "refundPolicy": "Refund applicable for cancellations within the first six months.",
        },
        "claims": {
          "claimsProcess": "Submit claims through the online portal or contact the claims department.",
          "contactInformation": {
            "email": "claims@insurehubintl.com",
            "phone": "1-800-987-6543",
          },
        },
      },
      "responsibilities": [
        "Timely payment of premiums",
        "Reporting changes in property details",
        "Compliance with terms and conditions",
      ],
      "contactInformation": {
        "insuranceCompanyName": "Insurance Hub International",
        "customerService": {
          "email": "support@insurehubintl.com",
          "phone": "1-888-123-4567",
        },
        "claimsDepartment": {
          "email": "claims@insurehubintl.com",
          "phone": "1-800-987-6543",
        },
      },
    },
    "policyPlans": {
      "standard": {
        "plan": "Basic Home Coverage",
        "coverage": "Essential coverage for home damages",
        "cost": "30",
        "benefits": ["Property Damage", "Liability"],
        "fees": "15",
        "duration": "12 months",
        "insuranceType": "Property Insurance",
        "expiration": "Annual Renewal",
      },
      "advanced": {
        "plan": "Comprehensive Home Protection",
        "coverage": "Extensive coverage for various perils",
        "cost": "60",
        "benefits": ["Property Damage", "Liability", "Natural Disaster Protection"],
        "fees": "25",
        "duration": "12 months",
        "insuranceType": "Property Insurance",
        "expiration": "Annual Renewal",
      },
      "premium": {
        "plan": "Premium Property Shield",
        "coverage": "Top-tier protection for high-value properties",
        "cost": "100",
        "benefits": ["Property Damage", "Liability", "Natural Disaster Protection", "Emergency Accommodation"],
        "fees": "40",
        "duration": "12 months",
        "insuranceType": "Property Insurance",
        "expiration": "Annual Renewal",
      },
    }
  },
  {
    "id": "12",
    "logo": "https://via.placeholder.com/150/00CC66/FFFFFF?text=DriveSafe+Insurance",
    "company": "DriveSafe Insurance",
    "location": "MetroCity",
    "insuranceType": "Auto Insurance",
    "coverage": "Car Insurance, Roadside Assistance, Rental Car Coverage",
    "premium": "$60 per month",
    "description": "Tailored auto insurance plans providing comprehensive coverage for cars, including roadside assistance and rental car coverage in case of accidents or breakdowns.",
    "additionalBenefits": [
      "Accident Forgiveness",
      "New Car Replacement",
      "Custom Equipment Coverage",
    ],
    "exclusions": [
      "Intentional damage to the insured vehicle",
      "Racing or illegal activities",
      "Unapproved modifications to the car",
    ],
    "policyDetail": {
      "policyInformation": {
        "name": "SafeDrive Plus",
        "type": "Auto Insurance",
        "coverage": "Complete Car Protection",
        "policyholderName": "Alex Johnson",
        "policyNumber": "A567890123",
        "effectiveDate": "2023-03-01",
        "expirationDate": "2024-02-29",
        "insuredEntities": ["Alex Johnson", "Spouse"],
      },
      "coverageDetails": {
        "carInsurance": {
          "description": "Full coverage for car damages, accidents, and liabilities.",
          "coverageLimit": 75000,
          "deductible": 1000,
        },
        "roadsideAssistance": {
          "description": "Emergency assistance for breakdowns, towing, and fuel delivery.",
          "coverageLimit": "Unlimited",
          "deductible": "None",
        },
      },
      "benefits": ["Car Damage Coverage", "Liability Protection", "Roadside Assistance"],
      "exclusions": [
        "Uninsured motorist damages",
        "Regular maintenance costs",
        "Driving under the influence",
      ],
      "termsAndConditions": {
        "premiums": {
          "paymentFrequency": "Monthly",
          "paymentDueDate": "10th of each month",
          "acceptedPaymentMethods": ["Credit card", "Direct debit"],
        },
        "renewal": {
          "renewalTerms": "Policy can be renewed annually with premium adjustments based on driving record.",
        },
        "cancellation": {
          "cancellationPolicy": "Policy can be canceled with a 30-day notice.",
          "refundPolicy": "Partial refunds available for cancellations within the first six months.",
        },
        "claims": {
          "claimsProcess": "Submit claims through the online portal or contact the claims department.",
          "contactInformation": {
            "email": "claims@drivesafeinsure.com",
            "phone": "1-800-555-6789",
          },
        },
      },
      "responsibilities": [
        "Timely payment of premiums",
        "Reporting changes in vehicle details",
        "Compliance with terms and conditions",
      ],
      "contactInformation": {
        "insuranceCompanyName": "DriveSafe Insurance",
        "customerService": {
          "email": "support@drivesafeinsure.com",
          "phone": "1-888-987-6543",
        },
        "claimsDepartment": {
          "email": "claims@drivesafeinsure.com",
          "phone": "1-800-555-6789",
        },
      },
    },
    "policyPlans": {
      "basic": {
        "plan": "Basic Coverage",
        "coverage": "Essential coverage for car damages and liabilities",
        "cost": "40",
        "benefits": ["Car Damage Coverage", "Liability Protection"],
        "fees": "15",
        "duration": "12 months",
        "insuranceType": "Auto Insurance",
        "expiration": "Annual Renewal",
      },
      "premium": {
        "plan": "Premium Protection",
        "coverage": "Enhanced coverage with roadside assistance",
        "cost": "70",
        "benefits": ["Car Damage Coverage", "Liability Protection", "Roadside Assistance"],
        "fees": "25",
        "duration": "12 months",
        "insuranceType": "Auto Insurance",
        "expiration": "Annual Renewal",
      },
      "platinum": {
        "plan": "Platinum Assurance",
        "coverage": "Top-tier protection with additional benefits",
        "cost": "120",
        "benefits": ["Car Damage Coverage", "Liability Protection", "Roadside Assistance", "Rental Car Coverage"],
        "fees": "40",
        "duration": "12 months",
        "insuranceType": "Auto Insurance",
        "expiration": "Annual Renewal",
      },
    }
  },
  {
    "id": "13",
    "logo": "https://via.placeholder.com/150/FFD700/000000?text=VoyageGuard+Insure",
    "company": "VoyageGuard Insurance",
    "location": "Global",
    "insuranceType": "Travel Insurance",
    "coverage": "Trip Cancellation, Medical Emergencies, Baggage Loss",
    "premium": "$30 per month",
    "description": "Tailored travel insurance plans providing comprehensive coverage for unforeseen events during trips, including trip cancellation, medical emergencies, and baggage loss.",
    "additionalBenefits": [
      "Emergency Medical Evacuation",
      "Travel Assistance Services",
      "Coverage for Adventure Activities",
    ],
    "exclusions": [
      "Pre-existing medical conditions",
      "Participation in extreme sports without approval",
      "War or acts of terrorism",
    ],
    "policyDetail": {
      "policyInformation": {
        "name": "SafeVoyage Explorer",
        "type": "Travel Insurance",
        "coverage": "All-encompassing Travel Protection",
        "policyholderName": "Emily Turner",
        "policyNumber": "T345678912",
        "effectiveDate": "2023-04-01",
        "expirationDate": "2024-03-31",
        "insuredEntities": ["Emily Turner", "Travel Companion"],
      },
      "coverageDetails": {
        "tripCancellation": {
          "description": "Coverage for cancellation or interruption of trips due to unforeseen events.",
          "coverageLimit": 5000,
          "deductible": 100,
        },
        "medicalEmergency": {
          "description": "Emergency medical coverage for accidents or illnesses during travels.",
          "coverageLimit": 100000,
          "deductible": 50,
        },
        "baggageLoss": {
          "description": "Reimbursement for lost, stolen, or damaged baggage.",
          "coverageLimit": 2000,
          "deductible": 25,
        },
      },
      "benefits": ["Trip Cancellation", "Medical Emergency Coverage", "Baggage Loss Reimbursement"],
      "exclusions": [
        "Participation in extreme sports without approval",
        "War or acts of terrorism",
        "Losses due to unattended baggage",
      ],
      "termsAndConditions": {
        "premiums": {
          "paymentFrequency": "Monthly",
          "paymentDueDate": "15th of each month",
          "acceptedPaymentMethods": ["Credit card", "PayPal"],
        },
        "renewal": {
          "renewalTerms": "Policy can be renewed annually with a premium adjustment.",
        },
        "cancellation": {
          "cancellationPolicy": "Policy can be canceled with a 30-day notice.",
          "refundPolicy": "Refund applicable for cancellations within the first three months.",
        },
        "claims": {
          "claimsProcess": "Submit claims through the online portal or contact the claims department.",
          "contactInformation": {
            "email": "claims@voyageguard.com",
            "phone": "1-800-789-0123",
          },
        },
      },
      "responsibilities": [
        "Timely payment of premiums",
        "Notifying changes in travel plans",
        "Compliance with terms and conditions",
      ],
      "contactInformation": {
        "insuranceCompanyName": "VoyageGuard Insurance",
        "customerService": {
          "email": "support@voyageguard.com",
          "phone": "1-888-555-7890",
        },
        "claimsDepartment": {
          "email": "claims@voyageguard.com",
          "phone": "1-800-789-0123",
        },
      },
    },
    "policyPlans": {
      "basic": {
        "plan": "Essential Travel Protection",
        "coverage": "Basic coverage for common travel risks",
        "cost": "20",
        "benefits": ["Trip Cancellation", "Medical Emergency Coverage"],
        "fees": "10",
        "duration": "12 months",
        "insuranceType": "Travel Insurance",
        "expiration": "Annual Renewal",
      },
      "standard": {
        "plan": "Standard Explorer",
        "coverage": "Enhanced coverage for comprehensive travel protection",
        "cost": "40",
        "benefits": ["Trip Cancellation", "Medical Emergency Coverage", "Baggage Loss Reimbursement"],
        "fees": "15",
        "duration": "12 months",
        "insuranceType": "Travel Insurance",
        "expiration": "Annual Renewal",
      },
      "premium": {
        "plan": "Premium Voyager",
        "coverage": "Top-tier protection for global travelers",
        "cost": "80",
        "benefits": ["Trip Cancellation", "Medical Emergency Coverage", "Baggage Loss Reimbursement", "Emergency Medical Evacuation"],
        "fees": "30",
        "duration": "12 months",
        "insuranceType": "Travel Insurance",
        "expiration": "Annual Renewal",
      },
    }
  },
  {
    "id": "14",
    "logo": "https://via.placeholder.com/150/FF6347/FFFFFF?text=PawGuard+Assure",
    "company": "PawGuard Assure",
    "location": "Petropolis",
    "insuranceType": "Pet Insurance",
    "coverage": "Veterinary Expenses, Illness Coverage, Lost Pet Recovery",
    "premium": "$20 per month",
    "description": "Tailored pet insurance plans offering comprehensive coverage for veterinary expenses, illnesses, and lost pet recovery, ensuring the well-being of your furry companions.",
    "additionalBenefits": [
      "Wellness Exams Coverage",
      "Prescription Medications",
      "Emergency Boarding Coverage",
    ],
    "exclusions": [
      "Pre-existing conditions",
      "Cosmetic procedures",
      "Breeding-related expenses",
    ],
    "policyDetail": {
      "policyInformation": {
        "name": "PawPal Guardian",
        "type": "Pet Insurance",
        "coverage": "Complete Pet Protection",
        "policyholderName": "Sarah Anderson",
        "policyNumber": "PET123456",
        "effectiveDate": "2023-05-01",
        "expirationDate": "2024-04-30",
        "insuredEntities": ["Sarah Anderson's Dog", "Sarah Anderson's Cat"],
      },
      "coverageDetails": {
        "veterinaryExpenses": {
          "description": "Coverage for veterinary visits, surgeries, and treatments.",
          "coverageLimit": 5000,
          "deductible": 50,
        },
        "illnessCoverage": {
          "description": "Protection against illnesses and associated medical expenses.",
          "coverageLimit": 1000,
          "deductible": 25,
        },
        "lostPetRecovery": {
          "description": "Assistance in finding and recovering lost pets.",
          "coverageLimit": "Unlimited",
          "deductible": "None",
        },
      },
      "benefits": ["Veterinary Expenses Coverage", "Illness Coverage", "Lost Pet Recovery Assistance"],
      "exclusions": [
        "Preventive care expenses",
        "Breeding-related treatments",
        "Cosmetic procedures",
      ],
      "termsAndConditions": {
        "premiums": {
          "paymentFrequency": "Monthly",
          "paymentDueDate": "20th of each month",
          "acceptedPaymentMethods": ["Debit card", "PayPal"],
        },
        "renewal": {
          "renewalTerms": "Policy can be renewed annually with a premium adjustment.",
        },
        "cancellation": {
          "cancellationPolicy": "Policy can be canceled with a 30-day notice.",
          "refundPolicy": "Partial refunds available for cancellations within the first six months.",
        },
        "claims": {
          "claimsProcess": "Submit claims through the online portal or contact the claims department.",
          "contactInformation": {
            "email": "claims@pawguard.com",
            "phone": "1-800-987-6543",
          },
        },
      },
      "responsibilities": [
        "Timely payment of premiums",
        "Notifying changes in pet details",
        "Compliance with terms and conditions",
      ],
      "contactInformation": {
        "insuranceCompanyName": "PawGuard Assure",
        "customerService": {
          "email": "support@pawguard.com",
          "phone": "1-888-555-1234",
        },
        "claimsDepartment": {
          "email": "claims@pawguard.com",
          "phone": "1-800-987-6543",
        },
      },
    },
    "policyPlans": {
      "basic": {
        "plan": "Essential Pet Protection",
        "coverage": "Basic coverage for common pet expenses",
        "cost": "15",
        "benefits": ["Veterinary Expenses Coverage", "Illness Coverage"],
        "fees": "8",
        "duration": "12 months",
        "insuranceType": "Pet Insurance",
        "expiration": "Annual Renewal",
      },
      "standard": {
        "plan": "Standard Guardian",
        "coverage": "Enhanced coverage for comprehensive pet protection",
        "cost": "30",
        "benefits": ["Veterinary Expenses Coverage", "Illness Coverage", "Lost Pet Recovery Assistance"],
        "fees": "12",
        "duration": "12 months",
        "insuranceType": "Pet Insurance",
        "expiration": "Annual Renewal",
      },
      "premium": {
        "plan": "Premium PawPal",
        "coverage": "Top-tier protection for beloved pets",
        "cost": "50",
        "benefits": ["Veterinary Expenses Coverage", "Illness Coverage", "Lost Pet Recovery Assistance", "Emergency Boarding Coverage"],
        "fees": "18",
        "duration": "12 months",
        "insuranceType": "Pet Insurance",
        "expiration": "Annual Renewal",
      },
    }
  },
  {
    "id": "15",
    "logo": "https://via.placeholder.com/150/9370DB/FFFFFF?text=SafeHaven+Insure",
    "company": "SafeHaven Insurance",
    "location": "SafeCity",
    "insuranceType": "Home Insurance",
    "coverage": "Property Damage, Theft Protection, Personal Liability",
    "premium": "$35 per month",
    "description": "Tailored home insurance plans offering comprehensive coverage for property damage, theft protection, and personal liability, ensuring a secure haven for your home and belongings.",
    "additionalBenefits": [
      "Temporary Accommodation Coverage",
      "Valuable Items Protection",
      "Legal Expenses Coverage",
    ],
    "exclusions": [
      "Damage caused by intentional actions",
      "Acts of war or terrorism",
      "Pre-existing property damages",
    ],
    "policyDetail": {
      "policyInformation": {
        "name": "HomeGuard Shield",
        "type": "Home Insurance",
        "coverage": "Complete Home Protection",
        "policyholderName": "Michael Harris",
        "policyNumber": "H678901234",
        "effectiveDate": "2023-06-01",
        "expirationDate": "2024-05-31",
        "insuredEntities": ["Michael Harris's Home", "Valuables"],
      },
      "coverageDetails": {
        "propertyDamage": {
          "description": "Coverage for damages to the insured property and its structures.",
          "coverageLimit": 100000,
          "deductible": 500,
        },
        "theftProtection": {
          "description": "Protection against theft or burglary of personal belongings.",
          "coverageLimit": 20000,
          "deductible": 100,
        },
        "personalLiability": {
          "description": "Liability coverage for personal injury or property damage claims.",
          "coverageLimit": 500000,
          "deductible": 250,
        },
      },
      "benefits": ["Property Damage Coverage", "Theft Protection", "Personal Liability Coverage"],
      "exclusions": [
        "Acts of war or terrorism",
        "Neglect leading to damages",
        "Pre-existing property damages",
      ],
      "termsAndConditions": {
        "premiums": {
          "paymentFrequency": "Monthly",
          "paymentDueDate": "25th of each month",
          "acceptedPaymentMethods": ["Debit card", "Bank transfer"],
        },
        "renewal": {
          "renewalTerms": "Policy can be renewed annually with a premium adjustment.",
        },
        "cancellation": {
          "cancellationPolicy": "Policy can be canceled with a 30-day notice.",
          "refundPolicy": "Refund applicable for cancellations within the first six months.",
        },
        "claims": {
          "claimsProcess": "Submit claims through the online portal or contact the claims department.",
          "contactInformation": {
            "email": "claims@safehaven.com",
            "phone": "1-800-555-7890",
          },
        },
      },
      "responsibilities": [
        "Timely payment of premiums",
        "Reporting changes in property details",
        "Compliance with terms and conditions",
      ],
      "contactInformation": {
        "insuranceCompanyName": "SafeHaven Insurance",
        "customerService": {
          "email": "support@safehaven.com",
          "phone": "1-888-987-6543",
        },
        "claimsDepartment": {
          "email": "claims@safehaven.com",
          "phone": "1-800-555-7890",
        },
      },
    },
    "policyPlans": {
      "basic": {
        "plan": "Essential Home Protection",
        "coverage": "Basic coverage for common home risks",
        "cost": "25",
        "benefits": ["Property Damage Coverage", "Theft Protection"],
        "fees": "10",
        "duration": "12 months",
        "insuranceType": "Home Insurance",
        "expiration": "Annual Renewal",
      },
      "standard": {
        "plan": "Standard Guardian",
        "coverage": "Enhanced coverage for comprehensive home protection",
        "cost": "45",
        "benefits": ["Property Damage Coverage", "Theft Protection", "Personal Liability Coverage"],
        "fees": "15",
        "duration": "12 months",
        "insuranceType": "Home Insurance",
        "expiration": "Annual Renewal",
      },
      "premium": {
        "plan": "Premium Haven",
        "coverage": "Top-tier protection for your home and valuables",
        "cost": "75",
        "benefits": ["Property Damage Coverage", "Theft Protection", "Personal Liability Coverage", "Temporary Accommodation Coverage"],
        "fees": "25",
        "duration": "12 months",
        "insuranceType": "Home Insurance",
        "expiration": "Annual Renewal",
      },
    }
  }
  
  

  // ... (more policies)
];

export default companyPolicies;
