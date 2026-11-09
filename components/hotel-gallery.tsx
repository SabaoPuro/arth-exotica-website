import { useEffect, useRef, useState } from "react";

export const hotelGalleryImages = [
  "1. Arth Exotic Hotel Front Elevated View.jpg",
  "1.webp",
  "2.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "8.webp",
  "11.webp",
  "12.webp",
  "14.webp",
  "16.webp",
  "17.webp",
  "18.webp",
  "21.webp",
  "28.webp",
  "29.webp",
  "30.webp",
  "32.webp",
  "34.webp",
  "Copy of 2. Arth Exotic Hotel Front Low Angle View copy.webp",
  "Copy of 4. Arth Exotic Hotel Front View with Ambiance Angle View.webp",
  "Copy of 5. Arth Exotic Hotel swimming pool area.webp",
  "Copy of Arth-18 copy.webp",
  "Copy of Arth-20 copy.webp",
  "Copy of Arth-22 copy.webp",
  "Copy of Arth-53 copy.webp",
  "Copy of Arth-59 copy.webp",
  "Copy of Arth-62 copy.webp",
  "Copy of Arth-63 copy.webp",
  "Copy of Arth-64 copy.webp",
  "Copy of Arth-66 copy.webp",
  "Copy of Arth-78 copy.webp",
  "Copy of Arth-80 copy.webp",
  "Copy of Arth-88 copy.webp",
  "Copy of Arth-91 copy.webp",
  "Copy of Arth-92 copy.webp",
  "Copy of Arth-93 copy.webp",
  "Copy of Arth-96 copy.webp",
  "Copy of Arth-101 copy.webp",
  "Copy of Arth-102 copy.webp",
  "Copy of Arth-105 copy.webp",
].map((filename, index) => ({
  src: `/Hotel-Gallery-Images/${encodeURIComponent(filename)}`,
  alt: `Arth Exotica hotel view ${index + 1}`,
}));

export function HotelGalleryGrid({ preview = false }: { preview?: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const images = preview ? hotelGalleryImages.slice(0, 4) : hotelGalleryImages;
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
      <div className={`hotel-gallery-grid${preview ? " is-preview" : ""}`}>
        {images.map((image, index) => (
          <button
            key={image.src}
            aria-label={`Open hotel gallery photo ${index + 1}`}
            className="hotel-gallery-item"
            type="button"
            onClick={(event) => {
              triggerButtonRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
          >
            <img
              alt={image.alt}
              loading={index < 4 ? "eager" : "lazy"}
              src={image.src}
            />
            <span aria-hidden="true">View photo</span>
          </button>
        ))}
      </div>
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
