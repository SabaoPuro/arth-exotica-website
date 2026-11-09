import DefaultLayout from "@/layouts/default";
import { DetailRows, EnquiryBand, PageHero } from "@/components/page-blocks";
import { RoomGallery } from "@/components/room-gallery";
import { siteConfig } from "@/config/site";

const roomCategories = [
  {
    name: "Premium Deluxe",
    description:
      "A welcoming retreat with a calm, comfortable feel—well suited to unwinding after a day in South Goa.",
    folder: "deluxe",
    images: [
      "/deluxe/Deluxe%20Room%20-1.jpg",
      "/deluxe/Deluxe%20Room%20-2.jpg",
      "/deluxe/Deluxe%20Room%20-3.jpg",
      "/deluxe/Deluxe%20Room%20-4.jpg",
      "/deluxe/Deluxe%20Room%20-%205.jpg",
    ],
  },
  {
    name: "Luxury Superior",
    description:
      "A polished, restful room for a slower pace, from quiet mornings to easy evenings.",
    folder: "superior",
    images: [
      "/superior/Superior%20Room%20-1.jpg",
      "/superior/Superior%20Room%20-2.jpg",
      "/superior/Superior%20Room%20-3.jpg",
      "/superior/Superior%20Room%20-4.jpg",
      "/superior/Superior%20Room%20-5.jpg",
    ],
  },
  {
    name: "Grand Deluxe",
    description:
      "Enjoy a private balcony and take in a little open-air time during your South Goa stay.",
    folder: "Deluxe-with-Balcony",
    images: [
      "/Deluxe-with-Balcony/Deluxe%20with%20Balcony%20-1.jpg",
      "/Deluxe-with-Balcony/Deluxe%20with%20Balcony%20-2.jpg",
      "/Deluxe-with-Balcony/Deluxe%20with%20Balcony%20-%203.jpg",
      "/Deluxe-with-Balcony/Deluxe%20with%20Balcony%20-%204.jpg",
      "/Deluxe-with-Balcony/Deluxe%20with%20Balcony%20-5.jpg",
      "/Deluxe-with-Balcony/Deluxe%20with%20Balcony%20-%206.jpg",
    ],
  },
  {
    name: "Majestic Room",
    description:
      "A welcoming choice for family stays and relaxed time together in South Goa.",
    folder: "Family-room",
    images: [
      "/Family-room/Family%20Room%20-1.jpg",
      "/Family-room/Family%20Room%20-2.jpg",
      "/Family-room/Family%20Room%20-3.jpg",
      "/Family-room/Family%20Room%20-4.jpg",
      "/Family-room/Family%20Room%20-5.jpg",
    ],
  },
  {
    name: "Royal Presidential Suite",
    description:
      "A distinguished suite featuring a kitchenette for added convenience during your stay.",
    folder: "Presidential-Executive-room",
    images: [
      "/Presidential-Executive-room/Presidential%20Room%20-2.jpg",
      "/Presidential-Executive-room/Presidential%20Room%20-1.jpg",
      "/Presidential-Executive-room/Presidential%20Room%20-3.jpg",
      "/Presidential-Executive-room/Presidential%20Room%20-4.jpg",
      "/Presidential-Executive-room/Presidential%20Room%20-5.jpg",
      "/Presidential-Executive-room/Presidential%20Room%20-6.jpg",
      "/Presidential-Executive-room/Presidential%20Room%20-7.jpg",
    ],
  },
];

export default function StayPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="unwind."
        description="Find your own pace in a calm, considered space made for restorative nights and slow mornings."
        eyebrow="Rooms & suites"
        image="/deluxe/Deluxe%20Room%20-1.jpg"
        title="Room to"
      />
      <section className="room-intro section-wrap">
        <div className="room-copy">
          <p className="eyebrow dark-eyebrow">Stay your way</p>
          <h2>
            Find the room
            <br />
            <em>that feels right.</em>
          </h2>
        </div>
        <div className="room-photo">
          <img
            alt="Grand Deluxe room at Arth Exotica"
            src="/Deluxe-with-Balcony/Deluxe%20with%20Balcony%20-1.jpg"
          />
        </div>
        <div className="room-description">
          <p>
            Explore five room categories, from Premium Deluxe and Luxury
            Superior rooms to the Majestic Room and Royal Presidential Suite.
            Browse each photo gallery, then contact the hotel to confirm details
            and availability for your dates.
          </p>
          <div className="room-tags">
            <span>40 rooms</span>
            <span>Thoughtful comforts</span>
            <span>Restful interiors</span>
            <span>Goa, slow living</span>
          </div>
          <a className="text-link" href={siteConfig.bookingUrl}>
            Plan your stay
          </a>
        </div>
      </section>
      <section className="pale-section" id="room-facilities">
        <div className="section-wrap split-heading">
          <div>
            <p className="eyebrow dark-eyebrow">The room</p>
            <h2>
              Everyday comforts,
              <br />
              <em>beautifully considered.</em>
            </h2>
          </div>
          <div>
            <p>
              Our room photographs show restful bedding, bedside lighting and a
              comfortable seating area. For the current room inventory and
              accessible-room details, please confirm directly before booking.
            </p>
          </div>
        </div>

        <div className="section-wrap room-card-grid">
          {roomCategories.map((category) => (
            <article key={category.folder} className="room-card">
              <RoomGallery category={category.name} images={category.images} />
              <div className="room-card-body">
                <div className="room-card-header">
                  <h3>{category.name}</h3>
                  <span className="room-card-tag">
                    {category.images.length} photos
                  </span>
                </div>
                <p>{category.description}</p>
                <a
                  className="button room-book-button"
                  href={siteConfig.bookingUrl}
                >
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        aria-labelledby="stay-experiences-title"
        className="stay-experiences"
      >
        <div className="stay-experiences-copy">
          <p className="eyebrow">Beyond your room</p>
          <h2 id="stay-experiences-title">
            Make space
            <br />
            <em>for a slower day.</em>
          </h2>
          <p>
            Make room for a restorative spa moment and let your time in South
            Goa unfold at its own pace.
          </p>
          <a className="button stay-experiences-link" href="/experiences">
            Explore experiences
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="stay-experiences-image">
          <img alt="Spa treatment at Arth Exotica" src="/Spa%20treatment.jpg" />
          <span className="stay-experiences-caption">
            Your own kind of escape
          </span>
        </div>
      </section>
      <section className="guest-info section-wrap" id="guest-information">
        <div>
          <p className="eyebrow dark-eyebrow">Before you arrive</p>
          <h2>Good to know.</h2>
        </div>
        <DetailRows
          rows={[
            { label: "Check-in", value: siteConfig.checkInTime },
            { label: "Check-out", value: siteConfig.checkOutTime },
            {
              label: "Hotel pickup / drop",
              value:
                "Available. Please enquire about availability, routes and charges.",
            },
            {
              label: "Pet policy",
              value: "Pets are not permitted at the hotel.",
            },
          ]}
        />
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
      <EnquiryBand
        copy="Ask about room availability, rates, room features and the details that make a stay feel right."
        title="Your Goa stay starts here."
      />
    </DefaultLayout>
  );
}
