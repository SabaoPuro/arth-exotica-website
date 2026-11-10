import React from "react";
import NextHead from "next/head";
import { useRouter } from "next/router";

import { siteConfig } from "@/config/site";

export const Head = () => {
  const { pathname } = useRouter();
  const page = siteConfig.pages[pathname as keyof typeof siteConfig.pages];
  const title = page?.title ?? siteConfig.title;
  const description = page?.description ?? siteConfig.description;
  const canonicalUrl = new URL(pathname, siteConfig.url).toString();
  const imageUrl = new URL(siteConfig.socialImage, siteConfig.url).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.name,
        inLanguage: "en-IN",
        about: { "@id": `${siteConfig.url}/#hotel` },
      },
      {
        "@type": "Hotel",
        "@id": `${siteConfig.url}/#hotel`,
        name: siteConfig.name,
        url: `${siteConfig.url}/`,
        description: siteConfig.description,
        image: imageUrl,
        email: siteConfig.reservationEmail,
        telephone: siteConfig.membershipWhatsApp,
        numberOfRooms: 38,
        starRating: {
          "@type": "Rating",
          ratingValue: 4,
        },
        checkinTime: "14:00",
        checkoutTime: "11:00",
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Swimming pool",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Yoga",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Meditation",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Wi-Fi",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Air conditioning",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Room service",
            value: true,
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "4th Ward, Fatona, Near Colva Church",
          addressLocality: "Colva",
          addressRegion: "Goa",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.address.latitude,
          longitude: siteConfig.address.longitude,
        },
        hasMap: siteConfig.address.mapUrl,
        sameAs: siteConfig.socials.map((social) => social.url),
        containsPlace: {
          "@type": "Restaurant",
          name: "Shukra Fine Dining",
          servesCuisine: ["Intercontinental"],
        },
      },
    ],
  };

  return (
    <NextHead>
      <title>{title}</title>
      <meta content={description} name="description" />
      <link href={canonicalUrl} rel="canonical" />
      <meta content="index, follow, max-image-preview:large" name="robots" />
      <meta content="en_IN" property="og:locale" />
      <meta content="website" property="og:type" />
      <meta content={siteConfig.name} property="og:site_name" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={canonicalUrl} property="og:url" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={imageUrl} property="og:image" />
      <meta content={imageUrl} name="twitter:image" />
      <meta
        content="Arth Exotica hotel exterior in Colva, South Goa"
        property="og:image:alt"
      />
      <link href="/favicon.ico" rel="icon" />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
    </NextHead>
  );
};
