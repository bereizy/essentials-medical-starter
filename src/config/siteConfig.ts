import type { SiteConfig } from "@indirecttek/essentials-engine";

export const siteConfig: SiteConfig = {
  businessName: "Oakridge Family Dentistry",

  theme: {
    primary: "#1E3A8A",
    secondary: "#60A5FA",
    accent: "#F59E0B",
    background: "#F9FAFB",
    foreground: "#111827"
  },

  contactInfo: {
    phone: "(919) 555-0142",
    email: "hello@oakridgefamilydentistry.com",
    address: "210 Oakridge Drive, Fuquay-Varina, NC 27526"
  },

  heroSection: {
    headline: "Gentle, Family-Friendly Dental Care",
    subheadline: "Compassionate care, modern technology, and a calm environment for the whole family.",
    imageUrl: "/images/hero-placeholder.svg",
    imageAlt: "Friendly dental team welcoming a patient",
    callToActionLabel: "Book an Appointment"
  },

  services: [
    {
      title: "Preventive & Family Dentistry",
      description: "Keep your whole family's smiles healthy with regular checkups designed for all ages. We focus on preventing problems before they start in a relaxed, friendly setting.",
      icon: "shield"
    },
    {
      title: "Cleanings & Exams",
      description: "Thorough yet gentle cleanings remove plaque and tartar while our comprehensive exams catch issues early. Leave feeling refreshed with a brighter, healthier smile.",
      icon: "sparkles"
    },
    {
      title: "Cosmetic Dentistry",
      description: "From professional whitening to veneers, we offer treatments that enhance your natural beauty. Achieve the confident smile you've always wanted.",
      icon: "star"
    },
    {
      title: "Restorative Treatments",
      description: "Damaged or missing teeth? Our tooth-colored fillings, crowns, and implants restore both function and appearance seamlessly and comfortably.",
      icon: "heart"
    },
    {
      title: "Emergency Dental Visits",
      description: "Dental emergencies don't wait, and neither do we. Same-day appointments available for urgent issues like pain, broken teeth, or unexpected problems.",
      icon: "bolt"
    }
  ],

  analytics: {
    enableTracking: false,
    mixpanelToken: null
  },

  seo: {
    title: "Oakridge Family Dentistry | Gentle Dental Care in Fuquay-Varina, NC",
    description: "Experience compassionate, family-focused dental care for adults and children in Fuquay-Varina. Our gentle approach and modern office make every visit comfortable."
  },

  imageSearchHints: {
    hero: "family at dentist smiling",
    services: [
      "dentist with patient in chair",
      "dental hygienist cleaning teeth",
      "child at pediatric dentist",
      "dentist explaining x-ray to patient"
    ]
  }
};
