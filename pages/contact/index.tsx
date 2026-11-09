import Link from "next/link";
import { useRouter } from "next/router";

import DefaultLayout from "@/layouts/default";
import { DetailRows, LocationMap, PageHero } from "@/components/page-blocks";
import { EmailIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/components/social-links";

export default function ContactPage() {
  const { isReady, query } = useRouter();
  const checkIn = typeof query.checkIn === "string" ? query.checkIn : "";
  const checkOut = typeof query.checkOut === "string" ? query.checkOut : "";
  const hasStayDates = isReady && Boolean(checkIn && checkOut);
  const reservationMessage = [
    "Hello Team Arth Exotica,",
    "",
    "I would like to enquire about a stay, reservation or booking details.",
    ...(hasStayDates ? [`Check-in: ${checkIn}`, `Check-out: ${checkOut}`] : []),
    "",
    "Thank you.",
    "[Your Name]",
  ].join("\n");

  return (
    <DefaultLayout>
      <PageHero
        accent="hear from you."
        description="Planning a stay, a meal or a gathering? Reach out and we’ll help you find the right next step."
        eyebrow="Contact Arth Exotica"
        image="/2.%20Arth%20Exotic%20Hotel%20Front%20Low%20Angle%20View%20copy.jpg"
        title="We’d love to"
      />
      <section className="contact-layout section-wrap">
        <div className="contact-copy">
          <p className="eyebrow dark-eyebrow">Start planning</p>
          <h2>
            Let’s talk
            <br />
            <em>about Goa.</em>
          </h2>
          <p>
            Have a question about your stay? Send your enquiry directly to the
            hotel team. Your message will be prefilled; add your query and name
            before sending.
          </p>
          {hasStayDates && (
            <p className="contact-stay-dates">
              Your selected dates: <strong>{checkIn}</strong> to{" "}
              <strong>{checkOut}</strong>
            </p>
          )}
          <div className="membership-contact-actions">
            <a
              className="button button-light"
              href={`mailto:${siteConfig.reservationEmail}?subject=${encodeURIComponent("Reservation enquiry")}&body=${encodeURIComponent(reservationMessage)}`}
            >
              <EmailIcon /> {siteConfig.reservationEmail}
            </a>
            <a
              className="button button-whatsapp"
              href={siteConfig.stayWhatsAppUrl}
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon /> {siteConfig.membershipWhatsApp}
            </a>
          </div>
          <div className="contact-socials">
            <p className="eyebrow dark-eyebrow">Find us on social</p>
            <SocialLinks />
          </div>
          <div className="contact-quick-links">
            <a
              className="button button-light review-button"
              href={siteConfig.googleReviewsUrl}
              rel="noreferrer"
              target="_blank"
            >
              Google Reviews
            </a>
            <Link className="button button-light review-button" href="/faqs">
              View FAQs
            </Link>
          </div>
        </div>
        <div className="contact-details">
          <p className="eyebrow dark-eyebrow">Find us</p>
          <h3>Arth Exotica</h3>
          <p>
            {siteConfig.address.locality}
            <br />
            {siteConfig.address.region}
          </p>
          <DetailRows
            rows={[
              { label: "Rooms", value: "40 rooms" },
              { label: "Dining", value: "1 food & bar venue" },
              { label: "GSTIN", value: siteConfig.gstin },
              {
                label: "Hotel pickup / drop",
                value: "Please enquire about availability, routes and charges.",
              },
              {
                label: "Pet policy",
                value: "Pets are not permitted at the hotel.",
              },
            ]}
          />
        </div>
      </section>
      <LocationMap />
      <section className="contact-image">
        <img
          alt="Arth Exotica in Fatona, Colva"
          src="/4.%20Arth%20Exotic%20Hotel%20Front%20View%20with%20Ambiance%20Angle%20View.jpg"
        />
        <div>
          <p className="eyebrow">A South Goa address</p>
          <h2>
            Find your way
            <br />
            <em>to Arth Exotica.</em>
          </h2>
        </div>
      </section>
    </DefaultLayout>
  );
}
