import { FormEvent, useEffect, useState } from "react";

function getLocalDate() {
  const date = new Date();
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

  return localDate.toISOString().slice(0, 10);
}

function getNextDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(`${dateString}T00:00:00`);

  date.setDate(date.getDate() + 1);
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

  return localDate.toISOString().slice(0, 10);
}

export default function BookingWidget({
  showDateWidget,
}: {
  showDateWidget: boolean;
}) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [today, setToday] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const localToday = getLocalDate();

    setToday(localToday);
    setCheckIn(localToday);
    setCheckOut(getNextDate(localToday));

    const footer = document.querySelector(".site-footer");

    if (!footer || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  function requestAvailability(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = `/contact?checkIn=${encodeURIComponent(checkIn)}&checkOut=${encodeURIComponent(checkOut)}`;
    setMobileOpen(false);
  }

  return (
    <>
      {showDateWidget && (
        <section
          aria-labelledby="booking-widget-title"
          className="booking-widget"
        >
          <div className="booking-widget-copy">
            <p className="eyebrow">Your South Goa stay</p>
            <h2 id="booking-widget-title">Find your dates.</h2>
            <p>Send your dates to our team to check room availability.</p>
          </div>
          <form className="booking-widget-form" onSubmit={requestAvailability}>
            <label>
              <span>Check-in</span>
              <input
                required
                min={today}
                type="date"
                value={checkIn}
                onChange={(event) => {
                  setCheckIn(event.target.value);
                  if (checkOut && event.target.value >= checkOut) {
                    setCheckOut("");
                  }
                }}
              />
            </label>
            <label>
              <span>Check-out</span>
              <input
                required
                min={getNextDate(checkIn || today)}
                type="date"
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
              />
            </label>
            <button className="booking-submit" type="submit">
              Book now
            </button>
          </form>
        </section>
      )}

      <div
        className={`mobile-booking${footerVisible ? " footer-visible" : ""}`}
      >
        {mobileOpen && (
          <div className="mobile-booking-panel">
            <div className="mobile-booking-panel-heading">
              <div>
                <p className="eyebrow dark-eyebrow">Plan your stay</p>
                <h2>Check availability</h2>
              </div>
              <button
                aria-label="Close availability form"
                className="mobile-booking-close"
                type="button"
                onClick={() => setMobileOpen(false)}
              >
                ×
              </button>
            </div>
            <form
              className="mobile-booking-form"
              onSubmit={requestAvailability}
            >
              <label>
                <span>Check-in</span>
                <input
                  required
                  min={today}
                  type="date"
                  value={checkIn}
                  onChange={(event) => {
                    setCheckIn(event.target.value);
                    if (checkOut && event.target.value >= checkOut) {
                      setCheckOut("");
                    }
                  }}
                />
              </label>
              <label>
                <span>Check-out</span>
                <input
                  required
                  min={getNextDate(checkIn || today)}
                  type="date"
                  value={checkOut}
                  onChange={(event) => setCheckOut(event.target.value)}
                />
              </label>
              <button className="booking-submit" type="submit">
                Book now
              </button>
            </form>
          </div>
        )}
        <button
          aria-expanded={mobileOpen}
          className="mobile-booking-trigger"
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "Close" : "Check availability"}
        </button>
      </div>
    </>
  );
}
