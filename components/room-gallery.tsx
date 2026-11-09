import { useEffect, useRef, useState } from "react";

export function RoomGallery({
  category,
  images,
}: {
  category: string;
  images: string[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const imageButtonRef = useRef<HTMLButtonElement>(null);

  function showPreviousImage() {
    setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function showNextImage() {
    setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  useEffect(() => {
    if (!isSlideshowOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsSlideshowOpen(false);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === 0 ? images.length - 1 : index - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === images.length - 1 ? 0 : index + 1,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      imageButtonRef.current?.focus();
    };
  }, [images.length, isSlideshowOpen]);

  return (
    <div
      aria-label={`${category} room photos`}
      className="room-gallery"
      role="group"
    >
      <div className="room-gallery-frame">
        <button
          ref={imageButtonRef}
          aria-label={`View ${category} room photo ${activeIndex + 1} in slideshow`}
          className="room-gallery-image-button"
          type="button"
          onClick={() => setIsSlideshowOpen(true)}
        >
          <img
            alt={`${category} room ${activeIndex + 1}`}
            src={images[activeIndex]}
          />
        </button>
        <span aria-live="polite" className="room-gallery-counter">
          {activeIndex + 1} / {images.length}
        </span>
        {images.length > 1 && (
          <>
            <button
              aria-label={`Previous ${category} room photo`}
              className="room-gallery-control room-gallery-previous"
              type="button"
              onClick={showPreviousImage}
            >
              <span aria-hidden="true">&lsaquo;</span>
            </button>
            <button
              aria-label={`Next ${category} room photo`}
              className="room-gallery-control room-gallery-next"
              type="button"
              onClick={showNextImage}
            >
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div
          aria-label={`${category} photo selection`}
          className="room-gallery-dots"
        >
          {images.map((image, index) => (
            <button
              key={image}
              aria-label={`Show ${category} room photo ${index + 1}`}
              aria-pressed={index === activeIndex}
              className="room-gallery-dot"
              type="button"
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
      {isSlideshowOpen && (
        <div
          aria-label={`${category} room photo slideshow`}
          aria-modal="true"
          className="room-slideshow"
          role="dialog"
        >
          <button
            aria-label="Close slideshow"
            className="room-slideshow-backdrop"
            type="button"
            onClick={() => setIsSlideshowOpen(false)}
          />
          <button
            ref={closeButtonRef}
            aria-label="Close slideshow"
            className="room-slideshow-close"
            type="button"
            onClick={() => setIsSlideshowOpen(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="room-slideshow-content">
            <p className="room-slideshow-title">{category}</p>
            <div className="room-slideshow-image-wrap">
              <img
                alt={`${category} room ${activeIndex + 1}`}
                className="room-slideshow-image"
                src={images[activeIndex]}
              />
              {images.length > 1 && (
                <>
                  <button
                    aria-label={`Previous ${category} room photo`}
                    className="room-gallery-control room-slideshow-previous"
                    type="button"
                    onClick={showPreviousImage}
                  >
                    <span aria-hidden="true">&lsaquo;</span>
                  </button>
                  <button
                    aria-label={`Next ${category} room photo`}
                    className="room-gallery-control room-slideshow-next"
                    type="button"
                    onClick={showNextImage}
                  >
                    <span aria-hidden="true">&rsaquo;</span>
                  </button>
                </>
              )}
            </div>
            <p aria-live="polite" className="room-slideshow-counter">
              {activeIndex + 1} / {images.length}
            </p>
            {images.length > 1 && (
              <div
                aria-label={`${category} photo selection`}
                className="room-slideshow-dots"
              >
                {images.map((image, index) => (
                  <button
                    key={image}
                    aria-label={`Show ${category} room photo ${index + 1}`}
                    aria-pressed={index === activeIndex}
                    className="room-gallery-dot"
                    type="button"
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
