import Link from "next/link";

import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="your own."
        description="A welcoming South Goa hideaway for poolside pauses, unhurried stays and time well spent together."
        eyebrow="Arth Exotica · Fatona, Colva"
        image="/4.%20Arth%20Exotic%20Hotel%20Front%20View%20with%20Ambiance%20Angle%20View.jpg"
        title="Make Goa"
      />
      <section className="about-story section-wrap">
        <div className="about-story-aside">
          <p className="section-label">A place to settle in</p>
          <p className="about-story-note">
            Find your pace in the quieter side of South Goa.
          </p>
          <span className="about-story-location">
            Fatona · Colva · South Goa
          </span>
        </div>
        <div className="about-story-copy">
          <p className="eyebrow dark-eyebrow">The Arth Exotica feeling</p>
          <h2>
            More than a place
            <br />
            <em>to stay.</em>
          </h2>
          <p>
            Set in Fatona, Colva, Arth Exotica brings together 40 guest rooms, a
            swimming pool, dining and spaces to gather. Come for a change of
            pace, make time for the people you love and shape a stay that feels
            like yours.
          </p>
          <div className="about-pillars">
            <div>
              <span>01</span>
              <strong>Stay</strong>
              <p>40 welcoming rooms for a restful South Goa escape.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Unwind</strong>
              <p>Slow down by the pool or explore mindful moments.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Come together</strong>
              <p>Share a meal, mark an occasion and come together.</p>
            </div>
          </div>
          <Link className="text-link about-story-link" href="/stay">
            Find your stay
          </Link>
        </div>
      </section>
      <section className="about-journey">
        <div className="section-wrap">
          <div className="about-journey-heading">
            <div>
              <p className="eyebrow dark-eyebrow">A stay, your way</p>
              <h2>
                Make space for
                <br />
                <em>what matters.</em>
              </h2>
            </div>
            <p>
              A restful room, a refreshing swim or one more story around the
              table — find the moments that make your time away feel like your
              own.
            </p>
          </div>
          <div className="about-experience-grid">
            <Link className="about-experience-card" href="/stay">
              <img
                alt="A guest room at Arth Exotica"
                src="/premium-deluxe-room.jpg"
              />
              <span className="about-experience-number">01 / STAY</span>
              <span className="about-experience-title">Unpack. Unwind.</span>
            </Link>
            <Link className="about-experience-card" href="/experiences">
              <img
                alt="Swimming pool at Arth Exotica"
                src="/5.%20Arth%20Exotic%20Hotel%20swimming%20pool%20area%20copy.jpg"
              />
              <span className="about-experience-number">02 / UNWIND</span>
              <span className="about-experience-title">
                Take the day slowly.
              </span>
            </Link>
            <Link className="about-experience-card" href="/dining">
              <img
                alt="Restaurant at Arth Exotica"
                src="/Restaurant%20Picture%20-6.webp"
              />
              <span className="about-experience-number">03 / GATHER</span>
              <span className="about-experience-title">Come to the table.</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="about-image">
        <img
          alt="The illuminated Arth Exotica hotel exterior"
          src="/1.%20Arth%20Exotic%20Hotel%20Front%20Elevated%20View.jpg"
        />
        <div>
          <p className="eyebrow">Fatona · Colva · Goa</p>
          <h2>
            Come for a stay.
            <br />
            <em>Leave with a story.</em>
          </h2>
        </div>
      </section>
      <EnquiryBand title="Make yourself at home." />
    </DefaultLayout>
  );
}
