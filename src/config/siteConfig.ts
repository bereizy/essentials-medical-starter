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
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop&q=80",
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
    heroUrls: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop&q=80"
    ],
    services: [
      "dentist with patient in chair",
      "dental hygienist cleaning teeth",
      "child at pediatric dentist",
      "dentist explaining x-ray to patient"
    ],
    teamFemale: [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face&q=80",
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face&q=80",
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face&q=80"
    ],
    teamMale: [
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face&q=80",
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face&q=80",
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face&q=80"
    ],
    office: [
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=600&fit=crop&q=80"
    ]
  }
};
