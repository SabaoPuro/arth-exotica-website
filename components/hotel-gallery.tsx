import { useEffect, useRef, useState } from "react";

export const hotelGalleryCategories = [
  {
    title: "Hotel views",
    files: [
      "1__Arth_Exotic_Hotel_Front_Elevated_View.webp",
      "2__Arth_Exotic_Hotel_Front_Low_Angle_View_copy.webp",
      "4__Arth_Exotic_Hotel_Front_View_with_Ambiance_Angle_View.webp",
    ],
  },
  {
    title: "Hotel lobby",
    files: [
      "Hotel-Lobby-1.webp",
      "Hotel-Lobby-2.webp",
      "Hotel-Lobby-3.webp",
      "Hotel-Lobby-4.webp",
      "Hotel-Lobby-5.webp",
    ],
  },
  {
    title: "Reception",
    files: [
      "Reception-Area-1.webp",
      "Reception-Area-2.webp",
      "Reception-Area-3.webp",
      "Reception-Area-4.webp",
      "Reception-Area-Entrance-5.webp",
    ],
  },
  {
    title: "Premium Deluxe",
    files: [
      "Deluxe Room -1.webp",
      "Deluxe Room -2.webp",
      "Deluxe Room -3.webp",
      "Deluxe Room -4.webp",
    ],
  },
  {
    title: "Luxury Superior",
    files: [
      "Superior Room -1.webp",
      "Superior Room -2.webp",
      "Superior Room -3.webp",
    ],
  },
  {
    title: "Grand Deluxe",
    files: [
      "Deluxe with Balcony -1.webp",
      "Deluxe with Balcony -2.webp",
      "Deluxe with Balcony - 3.webp",
      "Deluxe with Balcony - 4.webp",
      "Deluxe with Balcony -5.webp",
    ],
  },
  {
    title: "Majestic Room",
    files: [
      "Family Room -1.webp",
      "Family Room -2.webp",
      "Family Room -3.webp",
      "Family Room -4.webp",
    ],
  },
  {
    title: "Royal Presidential Suite",
    files: [
      "Presidential Room -1.webp",
      "Presidential Room -2.webp",
      "Presidential Room -3.webp",
      "Presidential Room -4.webp",
      "Presidential Room -5.webp",
      "Presidential Room -6.webp",
    ],
  },
  {
    title: "Shukra Fine Dining",
    files: [
      "Restaurant_Picture_-2.webp",
      "Restaurant_Picture_-3.webp",
      "Restaurant_Picture_-4.webp",
      "Restaurant_Picture_-5.webp",
      "Restaurant_Picture_-6.webp",
      "Restaurant_Picture_-7.webp",
      "Restaurant_Picture_-8.webp",
      "Restaurant_Picture_-9.webp",
      "Restaurant_Picture_-11.webp",
      "Restaurant_Picture_-12.webp",
      "Restaurant_Picture_-13.webp",
    ],
  },
  {
    title: "Swimming pool",
    files: [
      "Swimming-Pool-Area-1.webp",
      "Swimming-Pool-Area-2.webp",
      "Swimming-Pool-Area-3.webp",
      "Swimming-Pool-Area-4.webp",
      "5__Arth_Exotic_Hotel_swimming_pool_area_copy.webp",
    ],
  },
].map((category) => ({
  ...category,
  images: category.files.map((filename, index) => ({
    src: `/Hotel-Gallery-Images/${encodeURIComponent(filename)}`,
    alt: `${category.title} at Arth Exotica, photo ${index + 1}`,
  })),
}));

export const hotelGalleryImages = hotelGalleryCategories.flatMap(
  (category) => category.images,
);

export function HotelGalleryGrid({ preview = false }: { preview?: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const sections = preview
    ? [
        {
          title: "",
          images: hotelGalleryImages.slice(0, 4),
          offset: 0,
        },
      ]
    : hotelGalleryCategories.map((category, index) => ({
        title: category.title,
        images: category.images,
        offset: hotelGalleryCategories
          .slice(0, index)
          .reduce((count, previous) => count + previous.images.length, 0),
      }));
  const isSlideshowOpen = activeIndex !== null;

  function showPreviousImage() {
    setActiveIndex((index) =>
      index === null
        ? null
        : index === 0
          ? hotelGalleryImages.length - 1
          : index - 1,
    );
  }

  function showNextImage() {
    setActiveIndex((index) =>
      index === null
        ? null
        : index === hotelGalleryImages.length - 1
          ? 0
          : index + 1,
    );
  }

  useEffect(() => {
    if (!isSlideshowOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null
            ? null
            : index === 0
              ? hotelGalleryImages.length - 1
              : index - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null
            ? null
            : index === hotelGalleryImages.length - 1
              ? 0
              : index + 1,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerButtonRef.current?.focus();
    };
  }, [isSlideshowOpen]);

  return (
    <>
      {sections.map((section) => (
        <section
          key={section.title || "gallery-preview"}
          aria-label={section.title || undefined}
          className={preview ? undefined : "hotel-gallery-category"}
        >
          {!preview && (
            <div className="hotel-gallery-category-heading">
              <h3>{section.title}</h3>
              <span>
                {String(section.images.length).padStart(2, "0")} photos
              </span>
            </div>
          )}
          <div
            className={`hotel-gallery-grid${preview ? " is-preview" : ""}${
              !preview && section.images.length === 3 ? " is-three-photo" : ""
            }`}
          >
            {section.images.map((image, index) => {
              const imageIndex = section.offset + index;

              return (
                <button
                  key={image.src}
                  aria-label={`Open ${image.alt}`}
                  className="hotel-gallery-item"
                  type="button"
                  onClick={(event) => {
                    triggerButtonRef.current = event.currentTarget;
                    setActiveIndex(imageIndex);
                  }}
                >
                  <img
                    alt={image.alt}
                    loading={imageIndex < 4 ? "eager" : "lazy"}
                    src={image.src}
                  />
                  <span aria-hidden="true">View photo</span>
                </button>
              );
            })}
          </div>
        </section>
      ))}
      {activeIndex !== null && (
        <div
          aria-label="Hotel photo slideshow"
          aria-modal="true"
          className="hotel-gallery-lightbox"
          role="dialog"
        >
          <button
            aria-label="Close slideshow"
            className="hotel-gallery-backdrop"
            type="button"
            onClick={() => setActiveIndex(null)}
          />
          <button
            ref={closeButtonRef}
            aria-label="Close slideshow"
            className="hotel-gallery-close"
            type="button"
            onClick={() => setActiveIndex(null)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="hotel-gallery-lightbox-content">
            <div className="hotel-gallery-lightbox-image-wrap">
              <img
                alt={hotelGalleryImages[activeIndex].alt}
                className="hotel-gallery-lightbox-image"
                src={hotelGalleryImages[activeIndex].src}
              />
              <button
                aria-label="Previous photo"
                className="hotel-gallery-arrow hotel-gallery-arrow-previous"
                type="button"
                onClick={showPreviousImage}
              >
                <span aria-hidden="true">&lsaquo;</span>
              </button>
              <button
                aria-label="Next photo"
                className="hotel-gallery-arrow hotel-gallery-arrow-next"
                type="button"
                onClick={showNextImage}
              >
                <span aria-hidden="true">&rsaquo;</span>
              </button>
            </div>
            <p aria-live="polite" className="hotel-gallery-position">
              {activeIndex + 1} / {hotelGalleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
