import DefaultLayout from "@/layouts/default";
import { PageHero } from "@/components/page-blocks";
import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="policy."
        description="A clear note about privacy on the Arth Exotica website."
        eyebrow="Your information"
        image="/4__Arth_Exotic_Hotel_Front_View_with_Ambiance_Angle_View.webp"
        title="Privacy"
      />
      <article className="privacy-content section-wrap">
        <p className="privacy-updated">Last updated: November 9, 2026</p>
        <h2>Who this policy covers</h2>
        <p>
          This policy explains how the Arth Exotica website handles information
          when you browse the site or contact the hotel about a stay, dining,
          memberships, careers or events.
        </p>
        <h2>Information you provide</h2>
        <p>
          When you contact the hotel by email or WhatsApp, you may choose to
          share your name, contact details, travel dates, preferences and the
          contents of your message. Job applicants may also choose to send a CV
          and information about their experience. The website does not ask you
          to submit payment-card details.
        </p>
        <h2>How information is used</h2>
        <p>
          The hotel may use information you send to respond to your enquiry,
          provide requested information, coordinate a booking or event, or
          consider a job application. Do not send sensitive personal information
          unless it is needed to handle your request.
        </p>
        <h2>Service providers and external links</h2>
        <p>
          Website hosting and security providers may process basic technical
          information to deliver the site. The Contact page embeds Google Maps,
          which may receive technical information when it loads. Links to
          WhatsApp, social networks, Google Maps and other third-party services
          take you to services governed by their own privacy policies. The
          website is not currently configured with analytics or advertising
          services.
        </p>
        <h2>Your choices and enquiries</h2>
        <p>
          You can choose what information to include in a message and contact
          the hotel to ask about information you have shared directly with it.
          Email{" "}
          <a href={`mailto:${siteConfig.reservationEmail}`}>
            {siteConfig.reservationEmail}
          </a>
          . You can manage cookies through your browser settings; see our{" "}
          <a href="/cookies">Cookie Policy</a> for more information.
        </p>
        <h2>Policy updates</h2>
        <p>
          This policy may be updated when the website or its services change.
          The date at the top of the page shows when it was most recently
          revised.
        </p>
      </article>
    </DefaultLayout>
  );
}
