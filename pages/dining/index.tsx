import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";

export default function DiningPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="chair."
        description="Good food has a way of bringing the day together. Find your place at the table in Colva."
        eyebrow="Dining at Arth Exotica"
        image="/Restaurant%20Picture%20-3.jpg"
        title="Pull up a"
      />
      <section className="dining-intro section-wrap">
        <div className="dining-copy">
          <p className="eyebrow dark-eyebrow">
            Intercontinental dining in Colva
          </p>
          <h2>
            Made for
            <br />
            <em>lingering.</em>
          </h2>
          <p>
            Settle in at our food and bar venue for intercontinental dining at
            Arth Exotica, where familiar favourites meet flavours from around
            the world.
          </p>
          <p>
            Explore a varied menu of international cuisines, Goan specialities,
            vegetarian dishes and more, with dietary options available on
            request. Contact the hotel for the current selection, reservations
            and private dining possibilities.
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
            alt="Dining room at Arth Exotica"
            src="/Restaurant%20Picture%20-2.jpg"
          />
          <img
            alt="Restaurant bar at Arth Exotica"
            src="/Restaurant%20Picture%20-4.jpg"
          />
          <img
            alt="Dining space at Arth Exotica"
            src="/Restaurant%20Picture%20-7.webp"
          />
          <img
            alt="Restaurant at Arth Exotica"
            src="/Restaurant%20Picture%20-8.webp"
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
                <strong>One food & bar venue</strong> serving intercontinental
                favourites, Goan flavours and more for every appetite and
                occasion.
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
              <h3>Goan & Indian</h3>
              <p>
                Local character and beloved regional dishes inspired by the
                place we call home.
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
            Ask our team what is being served during your visit, including Goan
            specialities, vegetarian dishes, dietary accommodations and service
            hours.
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
