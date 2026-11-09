import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";
import { EmailIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function MeetingsPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="every occasion."
        description="From focused meetings to private parties and celebrations, find a welcoming setting for bringing people together in South Goa."
        eyebrow="Meetings, events & private celebrations"
        image="/meeting-room-2.jpg"
        title="Gather for"
      />
      <section className="meeting-intro section-wrap">
        <div className="section-label">A space for every gathering</div>
        <div>
          <h2>
            Room for work
            <br />
            <em>and every occasion.</em>
          </h2>
          <p>
            Bring colleagues together for a meeting or conference, or gather
            with family and friends for a private party, birthday, anniversary
            or special celebration. Share your plans with our team to discuss
            the right setup and current availability.
          </p>
        </div>
      </section>
      <section className="meeting-photo-row">
        <img
          alt="Meeting room arranged for a gathering"
          src="/meeting-room-2.jpg"
        />
        <div className="meeting-photo-note">
          <p className="eyebrow dark-eyebrow">Make room for a good time</p>
          <h2>
            From workday
            <br />
            <em>to celebration.</em>
          </h2>
        </div>
        <img
          alt="Arth Exotica hotel exterior"
          src="/2.%20Arth%20Exotic%20Hotel%20Front%20Low%20Angle%20View%20copy.jpg"
        />
      </section>
      <section className="pale-section meeting-offerings">
        <div className="section-wrap split-heading">
          <div>
            <p className="eyebrow dark-eyebrow">A reason to come together</p>
            <h2>
              Your gathering,
              <br />
              <em>your way.</em>
            </h2>
          </div>
          <div>
            <p>
              Tell us what you have in mind. Layouts, guest capacity, catering,
              equipment and other event arrangements depend on your plans and
              are confirmed directly with the hotel.
            </p>
          </div>
        </div>
        <div className="section-wrap event-services">
          <div>
            <span>01</span>
            <h3>Meetings & conferences</h3>
            <p>
              A welcoming place for team sessions, business discussions and
              conferences.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Private parties</h3>
            <p>
              Get together with friends and family for a birthday or a
              celebration of your own.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Special occasions</h3>
            <p>
              Ask our team about hosting anniversaries and other memorable
              gatherings.
            </p>
          </div>
        </div>
      </section>
      <section className="meeting-contact section-wrap">
        <div className="meeting-contact-copy">
          <p className="eyebrow dark-eyebrow">Ways to contact</p>
          <h2>
            We’ll help you
            <br />
            <em>plan with ease.</em>
          </h2>
          <p className="meeting-contact-subtext">
            Share your event goals, preferred dates and guest count and our team
            will guide you to the right setting, setup and next steps.
          </p>
          <div className="membership-contact-actions">
            <a
              className="button button-light"
              href={`mailto:reservations@arthexotica.com?subject=${encodeURIComponent("Meeting or private event enquiry")}&body=${encodeURIComponent("Hello Team Arth Exotica,\n\nI would like to enquire about hosting a meeting, private party or special celebration.\n\nPlease share availability, guest capacity and possible arrangements.\n\nThank you.\n\n[Your Name]")}`}
            >
              <EmailIcon /> reservations@arthexotica.com
            </a>
            <a
              className="button button-whatsapp"
              href={`https://wa.me/${siteConfig.membershipWhatsApp.replace("+", "")}?text=${encodeURIComponent("Hello Team Arth Exotica, I would like to enquire about hosting a meeting, private party or special celebration.")}`}
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon /> {siteConfig.membershipWhatsApp}
            </a>
          </div>
        </div>
      </section>
      <EnquiryBand
        copy="Share your preferred date, guest count and the occasion. We’ll help you explore what may be possible."
        title="Let’s plan your gathering."
      />
    </DefaultLayout>
  );
}
