import Link from "next/link";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section aria-labelledby="hero-title" className="hero">
        <div
          aria-label="Arth Exotica illuminated at night"
          className="hero-image"
          role="img"
        />
        <div className="hero-copy">
          <p className="eyebrow">
            Arth Exotica · A considered stay in South Goa
          </p>
          <h1 id="hero-title">
            Arth Exotica -<br />
            Find your <em>own</em> kind of Goa.
          </h1>
          <p className="hero-description">
            Slow mornings, warm hospitality and room to exhale, tucked away in
            Fatona, Colva.
          </p>
          <div className="hero-actions">
            <Link className="button button-light" href="/stay">
              Explore the stay
            </Link>
            <Link className="text-link light-link" href="/contact">
              Plan your visit
            </Link>
          </div>
        </div>
        <div className="hero-caption">
          <span>Fatona, Colva · Goa</span>
        </div>
      </section>

      <section aria-labelledby="welcome-title" className="welcome">
        <div className="section-wrap welcome-layout">
          <div className="welcome-copy">
            <p className="eyebrow dark-eyebrow">
              Four-star hospitality · Colva, South Goa
            </p>
            <h2 id="welcome-title">
              Refined comfort,
              <br />
              <em>rooted in Goa.</em>
            </h2>
            <p>
              In Fatona, Colva, Arth Exotica brings together 40 guest rooms,
              warm Goan hospitality and thoughtful spaces to unwind, dine and
              gather. Make time for the swimming pool, yoga and meditation, or
              plan a stay around a shared meal or special occasion.
            </p>
            <div className="welcome-actions">
              <Link className="button" href="/stay">
                Discover our rooms
              </Link>
              <Link className="text-link" href="/experiences">
                Explore experiences
              </Link>
            </div>
            <p className="welcome-location">Fatona · Colva · South Goa</p>
          </div>
          <div
            aria-label="Explore Arth Exotica"
            className="welcome-highlights"
            role="group"
          >
            <Link className="welcome-highlight" href="/stay">
              <span className="welcome-highlight-number">01</span>
              <span>
                <strong>Stay</strong>
                <small>40 rooms, made for a slower pace</small>
              </span>
              <span aria-hidden="true" className="welcome-highlight-arrow">
                &gt;
              </span>
            </Link>
            <Link className="welcome-highlight" href="/experiences">
              <span className="welcome-highlight-number">02</span>
              <span>
                <strong>Unwind</strong>
                <small>Swimming, yoga and meditation</small>
              </span>
              <span aria-hidden="true" className="welcome-highlight-arrow">
                &gt;
              </span>
            </Link>
            <Link className="welcome-highlight" href="/dining">
              <span className="welcome-highlight-number">03</span>
              <span>
                <strong>Gather</strong>
                <small>Dining, meetings and celebrations</small>
              </span>
              <span aria-hidden="true" className="welcome-highlight-arrow">
                &gt;
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="home-video-title" className="home-video">
        <div className="section-wrap home-video-heading">
          <p className="eyebrow dark-eyebrow">Explore our property visually</p>
          <h2 id="home-video-title">
            Experience the elegance
            <br />
            <em>of Arth Exotica.</em>
          </h2>
        </div>
        <div className="home-video-frame section-wrap">
          <video
            autoPlay
            controls
            muted
            playsInline
            poster="/hotel-full-view.jpg"
            preload="metadata"
          >
            <source src="/hotel-%20showreel.mp4" type="video/mp4" />
            Your browser does not support the hotel video.
          </video>
        </div>
      </section>

      <section
        aria-labelledby="hotel-information-title"
        className="hotel-information"
      >
        <div className="section-wrap">
          <div className="hotel-information-intro">
            <p className="eyebrow dark-eyebrow">Arth Exotica</p>
            <h2 id="hotel-information-title">
              Hotel
              <br />
              <em>Information</em>
            </h2>
            <p>
              An elegant haven of calm with refined design and a tranquil
              environment. Unwind in style and immerse yourself in the warm
              hospitality of South Goa.
            </p>
          </div>
          <div className="hotel-information-grid">
            <div className="hotel-information-group">
              <p className="eyebrow dark-eyebrow">Check in - check out</p>
              <div className="hotel-information-item">
                <strong>{siteConfig.checkInTime}</strong>
                <span>Check-in from</span>
              </div>
              <div className="hotel-information-item">
                <strong>{siteConfig.checkOutTime}</strong>
                <span>Check-out until</span>
              </div>
            </div>
            <div className="hotel-information-group">
              <p className="eyebrow dark-eyebrow">Dining</p>
              <div className="hotel-information-item">
                <strong>1 food & bar venue</strong>
                <span>
                  Intercontinental, Goan specialities, vegetarian dishes and
                  more
                </span>
              </div>
            </div>
            <div className="hotel-information-group">
              <p className="eyebrow dark-eyebrow">Rooms & suites</p>
              <div className="hotel-information-item">
                <strong>40 rooms</strong>
                <span>
                  Thoughtful comforts and relaxed spaces for your stay
                </span>
              </div>
            </div>
            <div className="hotel-information-group">
              <p className="eyebrow dark-eyebrow">Wellness</p>
              <div className="hotel-information-item">
                <strong>Time to unwind</strong>
                <span>Poolside pauses and easy Goan warmth</span>
              </div>
            </div>
            <div className="hotel-information-group">
              <p className="eyebrow dark-eyebrow">Hotel essentials</p>
              <div className="hotel-information-item">
                <strong>GSTIN</strong>
                <span>{siteConfig.gstin}</span>
              </div>
            </div>
            <div className="hotel-information-group hotel-information-contact">
              <p className="eyebrow dark-eyebrow">Contact</p>
              <div className="hotel-information-item">
                <strong>{siteConfig.address.locality}</strong>
                <span>{siteConfig.address.region}</span>
              </div>
              <a
                className="text-link"
                href={siteConfig.address.mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                View map
              </a>
              <a
                className="hotel-contact-link"
                href={`mailto:${siteConfig.reservationEmail}`}
              >
                {siteConfig.reservationEmail}
              </a>
              <a
                className="hotel-contact-link"
                href={siteConfig.membershipWhatsAppUrl}
                rel="noreferrer"
                target="_blank"
              >
                {siteConfig.membershipWhatsApp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-teaser section-wrap">
        <div>
          <p className="eyebrow dark-eyebrow">Planning your stay</p>
          <h2>
            Good to
            <br />
            <em>know.</em>
          </h2>
          <p className="faq-teaser-intro">
            Quick answers for planning your time at Arth Exotica.
          </p>
          <Link className="text-link" href="/faqs">
            Explore all FAQs
          </Link>
        </div>
        <div className="faq-list">
          <details>
            <summary>
              <span className="faq-number">01</span>What room categories are
              available?
              <span aria-hidden="true" className="faq-icon">
                +
              </span>
            </summary>
            <p>
              Arth Exotica offers Deluxe and Premium rooms. Confirm
              availability, views and inclusions for your dates through the
              booking engine or with the hotel.
            </p>
          </details>
          <details>
            <summary>
              <span className="faq-number">02</span>What are the check-in and
              check-out times?
              <span aria-hidden="true" className="faq-icon">
                +
              </span>
            </summary>
            <p>
              Check-in is from {siteConfig.checkInTime}; check-out is by{" "}
              {siteConfig.checkOutTime}.
            </p>
          </details>
          <details>
            <summary>
              <span className="faq-number">03</span>Where can I find dining
              details?
              <span aria-hidden="true" className="faq-icon">
                +
              </span>
            </summary>
            <p>
              The hotel has one food and bar venue offering intercontinental,
              Goan and other cuisines. Contact the hotel for current menus and
              service hours.
            </p>
          </details>
        </div>
      </section>

      <section className="experience-strip">
        <div className="section-wrap strip-heading">
          <div>
            <p className="eyebrow">Make time for what matters</p>
            <h2>
              Stay a little.
              <br />
              <em>Stay a while.</em>
            </h2>
          </div>
          <Link className="text-link light-link" href="/experiences">
            Explore experiences
          </Link>
        </div>
        <div className="image-trio">
          <Link className="image-tile" href="/stay">
            <img alt="A guest room at Arth Exotica" src="/deluxe-room.jpg" />
            <span>
              Rest well <b>Rooms & suites</b>
            </span>
          </Link>
          <Link className="image-tile" href="/dining">
            <img alt="Restaurant dining at Arth Exotica" src="/dine-in-2.jpg" />
            <span>
              Gather around <b>Dining</b>
            </span>
          </Link>
          <Link className="image-tile" href="/meetings">
            <img
              alt="Meeting space at Arth Exotica"
              src="/meeting-room-1.jpg"
            />
            <span>
              Bring people together <b>Meetings & events</b>
            </span>
          </Link>
        </div>
      </section>

      <section className="home-note section-wrap">
        <div className="home-note-image">
          <img alt="The hotel interior" src="/hotel-interior-2.jpg" />
        </div>
        <div className="home-note-copy">
          <p className="eyebrow">The details make the difference</p>
          <h2>
            Little luxuries.
            <br />
            <em>Real ease.</em>
          </h2>
          <p>
            From a restful room to a poolside pause, explore the spaces and
            amenities that shape your time here.
          </p>
          <Link className="text-link" href="/experiences#amenities">
            See the amenities
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
