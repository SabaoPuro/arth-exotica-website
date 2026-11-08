import Link from "next/link";

import DefaultLayout from "@/layouts/default";
import { DetailRows, EnquiryBand, PageHero } from "@/components/page-blocks";
import { siteConfig } from "@/config/site";

export default function ExperiencesPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="wellbeing."
        description="Make time for yoga, meditation and a refreshing swim during your stay at Arth Exotica in Colva, South Goa."
        eyebrow="The Arth Exotica experience"
        image="/yoga.jpg"
        title="Find your"
      />
      <section className="experience-intro section-wrap">
        <div className="section-label">A stay shaped around you</div>
        <div>
          <h2>
            Ease into the
            <br />
            <em>good stuff.</em>
          </h2>
          <p>
            Find a little space for yourself with yoga, meditation and time by
            the swimming pool. Contact the hotel for current schedules and
            details before your visit.
          </p>
        </div>
      </section>
      <section className="experience-feature" id="amenities">
        <div className="experience-feature-image">
          <img
            alt="Outdoor swimming pool at Arth Exotica"
            src="/swimming-pool.jpg"
          />
        </div>
        <div className="experience-feature-copy">
          <p className="eyebrow dark-eyebrow">Swimming pool</p>
          <h2>
            Take a
            <br />
            <em>refreshing pause.</em>
          </h2>
          <p>
            Enjoy a refreshing swim and a relaxed moment by the pool at Arth
            Exotica.
          </p>
        </div>
      </section>
      <section className="pale-section wellness-section">
        <div className="section-wrap split-heading wellness-heading">
          <div>
            <p className="eyebrow dark-eyebrow">Mindful moments</p>
            <h2>
              Yoga &amp;
              <br />
              <em>meditation.</em>
            </h2>
          </div>
          <div>
            <p>
              Add a mindful moment to your stay with yoga and meditation at Arth
              Exotica. Contact the hotel to ask about session timings,
              arrangements and any applicable charges.
            </p>
          </div>
        </div>
        <div className="section-wrap wellness-grid">
          <article className="wellness-card">
            <img
              alt="A guest practising yoga at Arth Exotica"
              loading="lazy"
              src="/yoga.jpg"
            />
            <div className="wellness-card-copy">
              <div className="wellness-card-label">
                <span>01</span>
                <span>Mind &amp; body</span>
              </div>
              <h3>Yoga</h3>
              <p>
                Stretch, move and make room for a mindful start to your day.
                Contact the hotel for current yoga session details.
              </p>
            </div>
          </article>
          <article className="wellness-card">
            <img
              alt="A guest meditating in a peaceful setting"
              className="meditation-image"
              loading="lazy"
              src="/mediation-2.jpg"
            />
            <div className="wellness-card-copy">
              <div className="wellness-card-label">
                <span>02</span>
                <span>Pause &amp; reset</span>
              </div>
              <h3>Meditation</h3>
              <p>
                Find a quiet moment to slow down and reset. Ask the hotel team
                about meditation arrangements during your stay.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="guest-info section-wrap" id="guest-information">
        <div>
          <p className="eyebrow dark-eyebrow">Memberships</p>
          <h2>
            A little more
            <br />
            <em>to come back to.</em>
          </h2>
          <p className="muted-copy">
            Membership plans and privileges are managed by the hotel. Contact
            hotel management for current membership details.
          </p>
          <Link className="text-link" href="/memberships">
            Explore memberships
          </Link>
        </div>
        <div className="membership-note">
          <p className="eyebrow dark-eyebrow">Guest information</p>
          <DetailRows
            rows={[
              {
                label: "Check-in / check-out",
                value: "Confirm times with the hotel before arrival.",
              },
              {
                label: "Pickup & drop",
                value:
                  "Available. Please enquire about availability, routes and charges.",
              },
              { label: "Pets", value: "Pets are not permitted at the hotel." },
              { label: "GSTIN", value: siteConfig.gstin },
            ]}
          />
        </div>
      </section>
      <section className="page-hotel-facts section-wrap">
        <div>
          <p className="eyebrow dark-eyebrow">Arth Exotica at a glance</p>
          <h2>
            Hotel
            <br />
            <em>information.</em>
          </h2>
        </div>
        <DetailRows
          rows={[
            { label: "Rooms", value: "40 rooms" },
            { label: "Dining", value: "1 food & bar venue" },
            { label: "GSTIN", value: siteConfig.gstin },
          ]}
        />
      </section>
      <EnquiryBand title="Make room for a reset." />
    </DefaultLayout>
  );
}
