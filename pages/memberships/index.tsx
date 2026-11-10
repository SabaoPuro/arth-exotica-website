import Link from "next/link";

import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";
import { EmailIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function MembershipsPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="to come back to."
        description="Ask about membership options and privileges directly with hotel management."
        eyebrow="Arth Exotica memberships"
        image="/4__Arth_Exotic_Hotel_Front_View_with_Ambiance_Angle_View.webp"
        title="A little more"
      />
      <section className="careers-content section-wrap">
        <div>
          <p className="eyebrow dark-eyebrow">Membership enquiries</p>
          <h2>
            Make every
            <br />
            <em>visit count.</em>
          </h2>
        </div>
        <div className="careers-copy">
          <p>
            Membership availability, fees, benefits and terms are set by Arth
            Exotica hotel management. Contact the hotel team to learn about
            current plans and eligibility before signing up.
          </p>
          <p>
            Send your enquiry using either option below. Your message will be
            prefilled; add your name before sending.
          </p>
          <div className="membership-contact-actions">
            <a
              className="button button-light"
              href={siteConfig.membershipEmailUrl}
            >
              <EmailIcon /> {siteConfig.membershipEmail}
            </a>
            <a
              className="button button-whatsapp"
              href={siteConfig.membershipWhatsAppUrl}
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon /> {siteConfig.membershipWhatsApp}
            </a>
          </div>
          <p className="careers-note">
            Membership plans, benefits and terms should be confirmed directly
            with hotel management.
          </p>
          <Link className="text-link membership-contact-link" href="/contact">
            More ways to contact us
          </Link>
        </div>
      </section>
      <EnquiryBand
        copy="Get in touch with the hotel team about membership details."
        title="We’d be glad to tell you more."
      />
    </DefaultLayout>
  );
}
