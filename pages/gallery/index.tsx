import Link from "next/link";

import { HotelGalleryGrid } from "@/components/hotel-gallery";
import { PageHero } from "@/components/page-blocks";
import DefaultLayout from "@/layouts/default";

export default function GalleryPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="in pictures."
        description="A closer look at the places, details and moments that make a stay at Arth Exotica."
        eyebrow="The Arth Exotica gallery"
        image="/Hotel-Gallery-Images/1.%20Arth%20Exotic%20Hotel%20Front%20Elevated%20View.jpg"
        title="A sense of place,"
      />
      <section
        aria-labelledby="gallery-heading"
        className="hotel-gallery-section"
      >
        <div className="hotel-gallery-heading">
          <div>
            <p className="eyebrow dark-eyebrow">Take a look around</p>
            <h2 id="gallery-heading">
              Moments at
              <br />
              <em>Arth Exotica.</em>
            </h2>
          </div>
          <p>
            Explore the hotel through our photo collection. Tap or click any
            image to view it larger, then move through the gallery.
          </p>
        </div>
        <HotelGalleryGrid />
      </section>
      <section aria-labelledby="gallery-visit-title" className="gallery-visit">
        <div className="gallery-visit-image">
          <img
            alt="Arth Exotica at dusk in Colva, South Goa"
            src="/Hotel-Gallery-Images/Copy%20of%204.%20Arth%20Exotic%20Hotel%20Front%20View%20with%20Ambiance%20Angle%20View.webp"
          />
        </div>
        <div className="gallery-visit-copy">
          <p className="eyebrow dark-eyebrow">Your story, in South Goa</p>
          <h2 id="gallery-visit-title">
            See it for
            <br />
            <em>yourself.</em>
          </h2>
          <p>
            Let the photographs be the beginning. Find a room, plan a visit, and
            make your own memories at Arth Exotica.
          </p>
          <div className="gallery-visit-actions">
            <Link className="button" href="/stay">
              Discover your stay
            </Link>
            <Link className="gallery-visit-link" href="/contact">
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
