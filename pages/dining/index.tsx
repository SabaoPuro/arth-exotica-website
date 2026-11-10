import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";

export default function DiningPage() {
  return (
    <DefaultLayout>
      <PageHero
        accentOnNewLine
        accent="Dine like royalty!"
        eyebrow="Shukra Fine Dining · Arth Exotica"
        image="/Restaurant_Picture_-3.webp"
        title="Pull up a chair."
      />
      <section className="dining-intro section-wrap">
        <div className="dining-copy">
          <img
            alt="Shukra Fine Dining"
            className="dining-brand-logo"
            src="/Shukra%20FIne%20Dining%20logo.jpeg"
          />
          <p className="eyebrow dark-eyebrow">
            A distinctive dining experience in Colva
          </p>
          <h2>
            Made for
            <br />
            <em>lingering.</em>
          </h2>
          <p>
            Welcome to Shukra Fine Dining at Arth Exotica, where familiar
            favourites meet flavours from around the world.
          </p>
          <p>
            Explore a varied menu of international cuisines, vegetarian dishes
            and more, with dietary options available on request. Contact the
            hotel for the current selection, reservations and private dining
            possibilities.
          </p>
          <div className="dining-actions">
            <a className="text-link" href="/contact">
              Enquire about dining
            </a>
            <a
              className="text-link text-link-secondary"
              href={`mailto:reservations@arthexotica.com?subject=${encodeURIComponent("Dining reservation enquiry")}&body=${encodeURIComponent("Hello Team Arth Exotica,\n\nI would like to reserve a dining space / table for a date and time.\n\nPlease advise availability and next steps.\n\nThank you.\n\n[Your Name]")}`}
            >
              Reserve dining space
            </a>
          </div>
        </div>
        <div className="dining-gallery">
          <img
            alt="Dining room at Shukra Fine Dining"
            src="/Restaurant_Picture_-2.webp"
          />
          <img
            alt="Restaurant bar at Shukra Fine Dining"
            src="/Restaurant_Picture_-4.webp"
          />
          <img
            alt="Dining space at Shukra Fine Dining"
            src="/Restaurant_Picture_-7.webp"
          />
          <img
            alt="Shukra Fine Dining at Arth Exotica"
            src="/Restaurant_Picture_-8.webp"
          />
          <img
            alt="Dining at Shukra Fine Dining"
            src="/Restaurant_Picture_-9.webp"
          />
        </div>
      </section>
      <section className="pale-section dining-cuisines">
        <div className="section-wrap">
          <div className="split-heading">
            <div>
              <p className="eyebrow dark-eyebrow">A table of many flavours</p>
              <h2>
                Choose your
                <br />
                <em>kind of cuisine.</em>
              </h2>
            </div>
            <div>
              <p>
                <strong>Shukra Fine Dining</strong>, serving intercontinental
                favourites and more for every appetite and occasion.
              </p>
            </div>
          </div>
          <div className="feature-list">
            <div>
              <span>01</span>
              <h3>Intercontinental</h3>
              <p>
                Familiar favourites and global flavours, prepared for relaxed
                dining.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Indian</h3>
              <p>
                A selection of beloved Indian dishes alongside international
                favourites.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Vegetarian & more</h3>
              <p>
                Thoughtful choices for vegetarian guests and individual dietary
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="dining-note">
        <div className="section-wrap dining-note-inner">
          <p className="eyebrow">A menu for the moment</p>
          <h2>
            Exquisite Dining Experience.
            <br />
            <em> Flavourful Food</em>
          </h2>
          <br />
          <p>
            Ask our team what is being served during your visit, including
            vegetarian dishes, dietary accommodations and service hours.
          </p>
        </div>
      </section>
      <EnquiryBand
        copy="For menu details, restaurant timings and table requests, get in touch with the hotel."
        title="Join us around the table."
      />
    </DefaultLayout>
  );
}
