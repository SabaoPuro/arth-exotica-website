import DefaultLayout from "@/layouts/default";
import { PageHero } from "@/components/page-blocks";
import { siteConfig } from "@/config/site";

export default function CookiePolicyPage() {
  return (
    <DefaultLayout>
      <PageHero
        accent="policy."
        description="How cookies and similar technologies may be used on this website."
        eyebrow="Your privacy choices"
        image="/hotel-interior-2.jpg"
        title="Cookie"
      />
      <article className="privacy-content section-wrap">
        <p className="privacy-updated">Last updated: November 9, 2026</p>
        <h2>What cookies are</h2>
        <p>
          Cookies are small files that websites may store in your browser.
          Similar technologies can help a website work or allow a third-party
          service to operate.
        </p>
        <h2>Cookies and this website</h2>
        <p>
          This website is not currently configured to use analytics or
          advertising services. The Contact page contains an embedded Google
          Map. When the map loads, Google may receive technical information or
          use cookies under its own policies. Website hosting and security
          providers may also use necessary technologies to deliver and protect
          the site.
        </p>
        <h2>Your choices</h2>
        <p>
          You can review, block or delete cookies through your browser settings.
          Blocking third-party cookies or content may affect how embedded maps
          or other external services work.
        </p>
        <h2>Third-party services</h2>
        <p>
          Google Maps and linked services such as WhatsApp and social networks
          are operated by third parties. Their use of cookies and similar
          technologies is governed by their own policies. Review those policies
          on the relevant service before using it.
        </p>
        <h2>Questions and updates</h2>
        <p>
          If you have a question about this policy, contact the hotel at{" "}
          <a href={`mailto:${siteConfig.reservationEmail}`}>
            {siteConfig.reservationEmail}
          </a>
          . This page may be updated when the website&apos;s features or
          third-party services change.
        </p>
      </article>
    </DefaultLayout>
  );
}
