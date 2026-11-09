import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { siteConfig } from "@/config/site";
import BookingWidget from "@/components/booking-widget";
import { SocialLinks } from "@/components/social-links";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <div className="site-frame">
      <header className="site-header">
        <Link
          aria-label="Arth Exotica home"
          className="brand"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <img alt="" src="/hotel-logo.jpeg" />
          <span className="brand-name">
            Arth Exotica<small>Fatona · Colva · Goa</small>
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className={`main-nav${menuOpen ? " open" : ""}`}
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="header-book" href={siteConfig.bookingUrl}>
          Book a stay
        </a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </header>
      <BookingWidget showDateWidget={pathname === "/"} />
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img alt="" src="/hotel-logo.jpeg" />
              <span className="brand-name">
                Arth Exotica<small>Fatona · Colva · Goa</small>
              </span>
            </Link>
            <p>
              A welcoming address for unhurried stays, thoughtful gatherings and
              the easy warmth of South Goa.
            </p>
          </div>
          <div className="footer-column">
            <p className="footer-title">Discover</p>
            <Link href="/about">Our hotel</Link>
            <Link href="/stay">Rooms & suites</Link>
            <Link href="/gallery">Hotel gallery</Link>
            <Link href="/memberships">Memberships</Link>
            <Link href="/experiences">Experiences</Link>
            <Link href="/dining">Dining</Link>
            <Link href="/meetings">Meetings & events</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div className="footer-column">
            <p className="footer-title">Plan your stay</p>
            <Link href="/contact">Contact & enquiries</Link>
            <Link href="/faqs">FAQs</Link>
            <Link href="/experiences#amenities">Amenities</Link>
            <Link href="/experiences#guest-information">Guest information</Link>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/cookies">Cookie policy</Link>
            <a href={siteConfig.bookingUrl}>Book your stay</a>
          </div>
          <div className="footer-column">
            <p className="footer-title">Find us</p>
            <p>
              {siteConfig.address.locality}
              <br />
              {siteConfig.address.region}
            </p>
            <p className="footer-title footer-contact-label">
              Booking & reservations
            </p>
            <div className="footer-contact-highlight">
              <a href={`mailto:${siteConfig.reservationEmail}`}>
                {siteConfig.reservationEmail}
              </a>
              <a
                href={siteConfig.stayWhatsAppUrl}
                rel="noreferrer"
                target="_blank"
              >
                {siteConfig.membershipWhatsApp}
              </a>
            </div>
            <Link href="/contact">Directions & contact</Link>
            <a
              href={siteConfig.googleReviewsUrl}
              rel="noreferrer"
              target="_blank"
            >
              Google Reviews
            </a>
            <p className="footer-gstin">GSTIN: {siteConfig.gstin}</p>
            <p className="footer-title socials-title">Follow along</p>
            <SocialLinks />
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Arth Exotica. All rights reserved.
          </span>
          <span>Thoughtfully placed in Fatona, Colva.</span>
        </div>
      </footer>
    </div>
  );
}
