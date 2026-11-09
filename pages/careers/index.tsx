import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";
import { siteConfig } from "@/config/site";

export default function CareersPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="things happen."
        description="Help create thoughtful stays, warm welcomes and memorable moments in South Goa."
        eyebrow="Careers at Arth Exotica"
        image="/2.%20Arth%20Exotic%20Hotel%20Front%20Low%20Angle%20View%20copy.jpg"
        title="Make good"
      />
      <section className="careers-content section-wrap">
        <div>
          <p className="eyebrow dark-eyebrow">Work with us</p>
          <h2>
            Bring your
            <br />
            <em>hospitality to life.</em>
          </h2>
        </div>
        <div className="careers-copy">
          <p>
            We welcome people who care about the details and enjoy making guests
            feel at home.
          </p>
          <div className="careers-email-box">
            <img
              alt="Arth Exotica"
              className="careers-logo"
              src="/hotel-logo-without-bg.png"
            />
            <p className="eyebrow dark-eyebrow">Send your CV</p>
            <a href={`mailto:${siteConfig.hrEmail}`}>{siteConfig.hrEmail}</a>
            <span>
              Share the role you are interested in, your contact details and a
              short note about your experience.
            </span>
          </div>
          {/*
          <div className="careers-follow-box">
            <p>
              Keep an eye out on LinkedIn for any roles posted, and follow our
              page for the latest updates.
            </p>
            <a
              className="button button-linkedin"
              href={
                siteConfig.socials.find((social) => social.label === "LinkedIn")
                  ?.url
              }
              rel="noreferrer"
              target="_blank"
            >
              Follow on LinkedIn
            </a>
          </div>
          */}
          <p className="careers-note">
            Please include the role you are interested in and your contact
            details. Never send original identity or financial documents with an
            initial application.
          </p>
        </div>
      </section>
      <EnquiryBand
        copy="We look forward to hearing from you."
        title="Hospitality starts with people."
      />
    </DefaultLayout>
  );
}
