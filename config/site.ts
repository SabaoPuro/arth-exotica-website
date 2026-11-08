export type SiteConfig = typeof siteConfig;

const membershipEmail = "info@arthexotica.com";
const reservationEmail = "reservations@arthexotica.com";
const membershipWhatsApp = "+919850799851";
const membershipMessage =
  "Hello Team Arth Exotica,\n\nI have a query regarding your hotel memberships. Please send me your available options.\n\nThank you in advance.\n\n[Your Name]";
const stayMessage =
  "Hello Team Arth Exotica,\n\nI have a query regarding my stay at your hotel.\n\n[Add your query]\n\nThank you in advance.\n\n[Your Name]";

export const siteConfig = {
  name: "Arth Exotica",
  url: "https://arthexotica.com",
  title: "Arth Exotica | 4-Star Hotel in Colva, South Goa",
  description:
    "Stay at Arth Exotica, a four-star hotel in Colva, South Goa. Explore 40 rooms, a swimming pool, intercontinental and Goan dining, and meeting and event spaces.",
  socialImage: "/hotel-front-2.jpg",
  pages: {
    "/": {
      title: "Arth Exotica | 4-Star Hotel in Colva, South Goa",
      description:
        "Discover Arth Exotica, a four-star hotel in Colva, South Goa, with 40 rooms, a swimming pool, intercontinental and Goan dining, and event spaces.",
    },
    "/about": {
      title: "About Arth Exotica | Hotel in Colva, South Goa",
      description:
        "Get to know Arth Exotica, a four-star hotel in Fatona, Colva. Find accommodation, dining and gathering spaces in South Goa.",
    },
    "/stay": {
      title: "Rooms at Arth Exotica | Stay in Colva, Goa",
      description:
        "Explore Deluxe, Premium and Super Premium rooms at Arth Exotica in Colva, South Goa. Check room details and enquire about availability.",
    },
    "/dining": {
      title: "Dining at Arth Exotica | Restaurant in Colva, Goa",
      description:
        "Enjoy intercontinental and Goan dining at Arth Exotica in Colva, South Goa. Contact the hotel for current menus, service hours and reservations.",
    },
    "/experiences": {
      title: "Yoga, Meditation & Pool | Arth Exotica, Goa",
      description:
        "Enjoy yoga, meditation and swimming at Arth Exotica in Colva, South Goa. Contact the hotel for session schedules, pool hours and access details.",
    },
    "/meetings": {
      title: "Meetings & Events in Colva, Goa | Arth Exotica",
      description:
        "Plan a meeting, conference or celebration at Arth Exotica in Colva, South Goa. Enquire about event spaces, layouts and availability.",
    },
    "/memberships": {
      title: "Hotel Memberships | Arth Exotica, Colva",
      description:
        "Ask Arth Exotica in Colva, South Goa about current hotel membership plans, benefits, eligibility and terms.",
    },
    "/contact": {
      title: "Contact & Directions | Arth Exotica, Colva, Goa",
      description:
        "Contact Arth Exotica for room, dining and event enquiries. Find the hotel in Fatona, Colva, South Goa, and get directions.",
    },
    "/faqs": {
      title: "FAQs About Arth Exotica | Hotel in Colva, Goa",
      description:
        "Find answers about rooms, check-in, dining, directions, pets and events at Arth Exotica in Colva, South Goa.",
    },
    "/careers": {
      title: "Careers at Arth Exotica | Hotel Jobs in Goa",
      description:
        "Explore career opportunities at Arth Exotica in Colva, South Goa, and send your CV to the hotel team.",
    },
    "/privacy": {
      title: "Privacy Policy | Arth Exotica",
      description:
        "Read how the Arth Exotica website handles information shared through enquiries, email, WhatsApp and third-party services.",
    },
    "/cookies": {
      title: "Cookie Policy | Arth Exotica",
      description:
        "Learn how cookies and third-party technologies, including the Google Maps embed, may be used on the Arth Exotica website.",
    },
  },
  address: {
    locality: "4th Ward, Fatona, Near Colva Church, Colva",
    region: "South Goa, Goa, India",
    latitude: 15.2807125,
    longitude: 73.9198548,
    mapUrl:
      "https://www.google.com/maps/place/Arth+Exotica+Resort,+Colva+Goa/@15.2807125,73.9198548,883m/data=!3m1!1e3!4m17!1m10!3m9!1s0x3bbfb5657d1e3da5:0xd67585be462a7ae9!2sArth+Exotica+Resort,+Colva+Goa!8m2!3d15.2807125!4d73.9198548!10e5!14m1!1BCgIgARICGAI!16s%2Fg%2F11p23bgv0d!3m5!1s0x3bbfb5657d1e3da5:0xd67585be462a7ae9!8m2!3d15.2807125!4d73.9198548!16s%2Fg%2F11p23bgv0d?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D",
    mapEmbedUrl:
      "https://www.google.com/maps?q=15.2807125,73.9198548&z=15&output=embed",
  },
  gstin: "11101119283HYUI",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  hrEmail: "hr@arthexotica.com",
  membershipEmail,
  reservationEmail,
  membershipWhatsApp,
  membershipMessage,
  membershipEmailUrl: `mailto:${membershipEmail}?subject=${encodeURIComponent("Membership enquiry")}&body=${encodeURIComponent(membershipMessage)}`,
  membershipWhatsAppUrl: `https://wa.me/${membershipWhatsApp.replace("+", "")}?text=${encodeURIComponent(membershipMessage)}`,
  stayMessage,
  stayEmailUrl: `mailto:${reservationEmail}?subject=${encodeURIComponent("Stay enquiry")}&body=${encodeURIComponent(stayMessage)}`,
  stayWhatsAppUrl: `https://wa.me/${membershipWhatsApp.replace("+", "")}?text=${encodeURIComponent(stayMessage)}`,
  bookingUrl: "/contact",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Arth+Exotica+Fatona+Colva+Goa",
  socials: [
    {
      label: "Instagram",
      url: "https://www.instagram.com/arthexoticaresortgoa/",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/arthexoticaresortgoa/",
    },
    { label: "YouTube", url: "https://www.youtube.com/@ArthExoticaResortGoa" },
  ],
  navItems: [
    { label: "Stay", href: "/stay" },
    { label: "Memberships", href: "/memberships" },
    { label: "Experiences", href: "/experiences" },
    { label: "Dining", href: "/dining" },
    { label: "Meetings & Events", href: "/meetings" },
    { label: "Contact", href: "/contact" },
  ],
  links: {
    instagram: "",
    facebook: "",
  },
};
