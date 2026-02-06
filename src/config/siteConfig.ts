import type { SiteConfig } from "@indirecttek/essentials-engine";

export const siteConfig: SiteConfig = {
  businessName: "Oakridge Family Dentistry",

  heroSection: {
    headline: "Gentle, Family-Friendly Dental Care",
    subheadline:
      "Compassionate care, modern technology, and a calm environment for the whole family. Dr. Mitchell and Dr. Chen are dedicated to making every visit comfortable.",
    callToActionLabel: "Book an Appointment",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
    imageAlt: "Friendly dental team welcoming a patient",
  },

  services: [
    {
      name: "Preventive Care",
      description:
        "Keep your whole family's smiles healthy with regular checkups designed for all ages. We focus on preventing problems before they start.",
    },
    {
      name: "Cleanings & Exams",
      description:
        "Thorough yet gentle cleanings remove plaque and tartar while our comprehensive exams catch issues early.",
    },
    {
      name: "Cosmetic Dentistry",
      description:
        "From professional whitening to veneers, we offer treatments that enhance your natural beauty and confidence.",
    },
    {
      name: "Restorative Treatments",
      description:
        "Tooth-colored fillings, crowns, and implants restore both function and appearance seamlessly.",
    },
    {
      name: "Family & Pediatric Care",
      description:
        "Gentle, patient-centered care for every member of your family, from first tooth to golden years.",
    },
    {
      name: "Emergency Dental Care",
      description:
        "Dental emergencies don't wait, and neither do we. Same-day appointments available for urgent issues.",
    },
  ],

  contactInfo: {
    phone: "(919) 555-0142",
    email: "hello@oakridgefamilydentistry.com",
    address: "210 Oakridge Drive, Fuquay-Varina, NC 27526",
  },

  // Calming blue color palette
  theme: {
    primary: "#1E3A8A", // Deep blue
    secondary: "#60A5FA", // Light blue
    accent: "#F59E0B", // Warm amber
    background: "#F9FAFB", // Light gray
    foreground: "#111827", // Dark gray
  },

  seo: {
    title: "Oakridge Family Dentistry | Gentle Care in Fuquay-Varina, NC",
    description:
      "Experience compassionate, family-focused dental care for adults and children in Fuquay-Varina. Our gentle approach and modern office make every visit comfortable.",
  },

  analytics: {
    enableTracking: false,
    mixpanelToken: null,
  },

  imageSearchHints: {
    hero: "family at dentist smiling",
    services: [
      "dental hygienist gentle cleaning",
      "teeth whitening smile makeover",
      "dental implant restoration",
      "family dentist children",
      "invisalign clear aligners",
      "dental emergency care",
    ],
  },

  // NexHealth Integration for Medical Scheduling
  integrations: {
    scheduling: {
      provider: "nexhealth",
      practiceSlug: "oakridge-family-dentistry",
      buttonText: "Book Appointment",
    },
    email: {
      provider: "resend",
    },
  },

  // Medical-specific configuration
  medical: {
    providers: [
      {
        name: "Dr. Sarah Mitchell",
        title: "DDS",
        specialty: "Family & Cosmetic Dentistry",
        bio: "Dr. Mitchell brings over 15 years of experience in family and cosmetic dentistry. She's known for her gentle touch and ability to put even the most anxious patients at ease. A graduate of UNC Chapel Hill School of Dentistry, she's passionate about building lasting relationships with families in the community.",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
        credentials: [
          "UNC Chapel Hill School of Dentistry",
          "American Dental Association Member",
          "North Carolina Dental Society",
          "Invisalign Certified Provider",
        ],
      },
      {
        name: "Dr. James Chen",
        title: "DMD",
        specialty: "Restorative Dentistry & Implants",
        bio: "Dr. Chen specializes in restorative dentistry and dental implants. His calm demeanor and thorough approach ensure patients understand every step of their treatment. When not in the office, he volunteers at local health fairs providing free dental screenings.",
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
        credentials: [
          "Boston University School of Dental Medicine",
          "American Academy of Implant Dentistry",
          "North Carolina Dental Society",
        ],
      },
    ],
    acceptedInsurance: [
      "Delta Dental",
      "Cigna",
      "MetLife",
      "Aetna",
      "Blue Cross Blue Shield",
      "United Healthcare",
    ],
    emergencyPhone: "(919) 555-0199",
    officeHours: "Monday - Friday: 8am - 5pm | Saturday: Closed",
  },
};
