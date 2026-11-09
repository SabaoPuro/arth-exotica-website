import Link from "next/link";

import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";

export default function ExperiencesPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="in the sun."
        description="Spend the day your way: cool off by the pool, slow down with a spa treatment, or make space for yoga and meditation."
        eyebrow="Poolside moments & mindful escapes"
        image="/5.%20Arth%20Exotic%20Hotel%20swimming%20pool%20area%20copy.jpg"
        title="Take a pause"
      />
      <section className="experience-intro section-wrap">
        <div className="experience-intro-copy">
          <div className="section-label">Make time for yourself</div>
          <h2>
            Slow down.
            <br />
            <em>Dip in.</em>
          </h2>
          <p>
            Let the water set the pace. Spend a sunlit afternoon by the pool,
            then find your own kind of reset with a spa treatment, yoga or
            meditation at Arth Exotica in Colva, South Goa.
          </p>
        </div>
        <figure className="experience-intro-image">
          <img
            alt="A quiet moment for meditation"
            loading="lazy"
            src="/mediation-1.jpg"
          />
          <figcaption>Room to pause · Arth Exotica, Goa</figcaption>
        </figure>
      </section>
      <section className="experience-feature pool-feature" id="amenities">
        <div className="experience-feature-image">
          <img
            alt="Outdoor swimming pool at Arth Exotica"
            src="/5.%20Arth%20Exotic%20Hotel%20swimming%20pool%20area%20copy.jpg"
          />
        </div>
        <div className="experience-feature-copy pool-feature-copy">
          <p className="eyebrow dark-eyebrow">Your poolside pause</p>
          <h2>
            A refreshing
            <br />
            <em>change of pace.</em>
          </h2>
          <p>
            Ease into the water, take a breather in the sunshine and let the day
            unfold at its own pace.
          </p>
          <Link className="text-link" href="/contact">
            Ask about pool access
          </Link>
        </div>
      </section>
      <section className="pale-section wellness-section">
        <div className="section-wrap split-heading wellness-heading">
          <div>
            <p className="eyebrow dark-eyebrow">Mindful moments</p>
            <h2>
              Wellness
              <br />
              <em>your way.</em>
            </h2>
          </div>
          <div>
            <p>
              Make space to unwind with a spa treatment, yoga or meditation.
              Contact the hotel to ask about current services, session timings,
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
          <article className="wellness-card">
            <img
              alt="A relaxing spa treatment"
              loading="lazy"
              src="/Spa%20treatment.jpg"
            />
            <div className="wellness-card-copy">
              <div className="wellness-card-label">
                <span>03</span>
                <span>Rest &amp; restore</span>
              </div>
              <h3>Spa Day</h3>
              <p>
                Set aside time to relax with a restorative spa treatment. Ask
                the hotel team about available treatments, timings and
                arrangements.
              </p>
            </div>
          </article>
        </div>
      </section>
      <EnquiryBand
        copy="Ask our team about pool access, spa treatment availability, and yoga or meditation schedules."
        title="Find your way to unwind."
      />
    </DefaultLayout>
  );
}
