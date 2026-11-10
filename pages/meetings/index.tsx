import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";
import { EmailIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function MeetingsPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="every occasion."
        description="Planning a future meeting, private party or celebration? Contact our team for updates as our event space takes shape."
        eyebrow="Meetings, events & private celebrations"
        image="/4__Arth_Exotic_Hotel_Front_View_with_Ambiance_Angle_View.webp"
        title="Gather for"
      />
      <section className="meeting-intro section-wrap">
        <div className="section-label">Planning for future gatherings</div>
        <div>
          <h2>
            Room for work
            <br />
            <em>and every occasion.</em>
          </h2>
          <p>
            Arth Exotica’s meeting and event space is currently under
            construction. Contact our team to discuss your plans and ask about
            availability as the space takes shape.
          </p>
        </div>
      </section>
      <section className="meeting-photo-row">
        <img
          alt="Swimming pool at Arth Exotica"
          src="/5__Arth_Exotic_Hotel_swimming_pool_area_copy.webp"
        />
        <div className="meeting-photo-note">
          <p className="eyebrow dark-eyebrow">Currently under construction</p>
          <h2>
            A new space
            <br />
            <em>is taking shape.</em>
          </h2>
          <p>
            Get in touch with our team for updates on future meetings and
            celebrations at Arth Exotica.
          </p>
        </div>
        <img
          alt="Arth Exotica hotel exterior"
          src="/2__Arth_Exotic_Hotel_Front_Low_Angle_View_copy.webp"
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
              Share your requirements with our team while the meeting space is
              under construction.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Private parties</h3>
            <p>
              Ask our team about plans for hosting birthdays and private
              celebrations once the space is ready.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Special occasions</h3>
            <p>
              Enquire about future availability for anniversaries and other
              special gatherings.
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
