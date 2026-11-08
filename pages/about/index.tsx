import DefaultLayout from "@/layouts/default";
import { EnquiryBand, PageHero } from "@/components/page-blocks";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="more considered."
        description="Arth Exotica is a welcoming hotel in Fatona, Colva, shaped around thoughtful comfort and the pleasures of taking your time."
        eyebrow="A four-star stay in South Goa"
        image="/hotel-interior-2.jpg"
        title="A little"
      />
      <section className="about-story section-wrap">
        <div className="about-story-aside">
          <p className="section-label">Our place in Colva</p>
          <p className="about-story-note">
            A South Goa stay, shaped around comfort and connection.
          </p>
        </div>
        <div className="about-story-copy">
          <h2>
            A stay with room
            <br />
            <em>for your kind of Goa.</em>
          </h2>
          <p>
            Located in Fatona, Colva, Arth Exotica brings together considered
            rooms, dining and welcoming spaces for time well spent. Whether
            you’re here to slow down, share a meal or gather with others, make
            your stay your own.
          </p>
          <div className="about-pillars">
            <div>
              <span>01</span>
              <strong>Stay</strong>
              <p>40 guest rooms, with options for different kinds of visits.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Unwind</strong>
              <p>Enjoy the swimming pool, yoga and moments of meditation.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Come together</strong>
              <p>Find dining and gathering spaces in one Colva address.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-image">
        <img
          alt="The illuminated Arth Exotica hotel exterior"
          src="/hotel-front.jpg"
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
