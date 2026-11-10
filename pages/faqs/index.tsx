import Link from "next/link";
import NextHead from "next/head";

import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";
import { siteConfig } from "@/config/site";

const questions = [
  {
    question: "Where is Arth Exotica located?",
    answer: `The hotel is in ${siteConfig.address.locality}, ${siteConfig.address.region}. Open the map on our contact page for directions.`,
  },
  {
    question: "What room categories are available?",
    answer:
      "The hotel offers Deluxe, Premium and Super Premium rooms. Please confirm occupancy, inclusions, views and availability for your dates directly with the hotel.",
  },
  {
    question: "How do I book a stay?",
    answer:
      "Use the contact page to send your stay enquiry directly to the hotel team. Ask the team to confirm availability, rates and booking details for your dates.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer: `Check-in is from ${siteConfig.checkInTime}; check-out is by ${siteConfig.checkOutTime}.`,
  },
  {
    question: "Does the hotel provide pickup and drop?",
    answer:
      "Yes. Please enquire about availability, routes and charges in advance.",
  },
  {
    question: "Are pets allowed?",
    answer: "No. Pets are not permitted at the hotel.",
  },
  {
    question: "Can I arrange a meeting, conference or corporate stay?",
    answer:
      "Yes, you can enquire about meetings, conferences, events and corporate accommodation. Space, equipment, catering and group rates depend on your requirements and dates.",
  },
  {
    question: "Where can I find the menu and dining hours?",
    answer:
      "Cuisine, menu and current service hours should be confirmed directly with the hotel, as these details may change.",
  },
  {
    question: "What is the hotel's GSTIN?",
    answer: siteConfig.gstin,
  },
  {
    question: "How can I ask about hotel memberships?",
    answer:
      "Membership plans, benefits and terms are managed by the hotel. Please contact hotel management for current information.",
  },
];

export default function FAQsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <DefaultLayout>
      <NextHead>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          type="application/ld+json"
        />
      </NextHead>
      <PageHero
        accent="answered."
        description="The quick details for planning your stay at Arth Exotica in Colva."
        eyebrow="A few useful answers"
        image="/4__Arth_Exotic_Hotel_Front_View_with_Ambiance_Angle_View.webp"
        title="Questions,"
      />
      <section className="faq-section section-wrap">
        <div className="faq-heading">
          <p className="eyebrow dark-eyebrow">Before you arrive</p>
          <h2>
            Good to
            <br />
            <em>know.</em>
          </h2>
          <p>
            For details that depend on your dates, check with the hotel before
            you travel.
          </p>
          <Link className="text-link faq-contact-button" href="/contact">
            Contact the hotel
          </Link>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details key={item.question}>
              <summary>
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.question}
                <span aria-hidden="true" className="faq-icon">
                  +
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <EnquiryBand
        copy="Our team can help with your dates, room options, transfers and event plans."
        title="Still have a question?"
      />
    </DefaultLayout>
  );
}
