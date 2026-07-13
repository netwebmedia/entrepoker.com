import type { Locale } from "../lib/content";
import {
  getEligiblePartners,
  partnerLinkProps,
  validatePartner,
  type Partner,
} from "../lib/partners";

export function PartnerOffer({
  locale,
  partner,
}: {
  locale: Locale;
  partner: Partner;
}) {
  validatePartner(partner);

  return (
    <article className="affiliate-offer">
      <span className="affiliate-rail__label">
        {partner.disclosure[locale]}
      </span>
      <strong>{partner.headline[locale]}</strong>
      <p>{partner.eligibility[locale]}</p>
      <small>
        {partner.minimumAge}+ · {partner.jurisdictions.join(", ")}
      </small>
      <div className="affiliate-offer__actions">
        <a href={partner.url!} {...partnerLinkProps}>
          {partner.cta[locale]}
        </a>
        <a href={partner.termsUrl!} {...partnerLinkProps}>
          {locale === "en" ? "Terms" : "Términos"}
        </a>
      </div>
    </article>
  );
}

export function AffiliateRail({ locale }: { locale: Locale }) {
  const eligible = getEligiblePartners(locale, "global", new Date());

  if (eligible.length === 0) {
    return (
      <aside
        className="affiliate-rail"
        aria-label={
          locale === "en" ? "Partner placements" : "Espacios para socios"
        }
      >
        <span className="affiliate-rail__label">
          {locale === "en" ? "Future partner" : "Futuro socio"}
        </span>
        <strong>
          {locale === "en" ? "Partner placement" : "Espacio para socio"}
        </strong>
        <p>
          {locale === "en"
            ? "Offers appear only after commercial and compliance review."
            : "Las ofertas aparecen solo después de revisión comercial y de cumplimiento."}
        </p>
      </aside>
    );
  }

  return (
    <aside className="affiliate-rail">
      {eligible.map((partner) => (
        <PartnerOffer key={partner.id} locale={locale} partner={partner} />
      ))}
    </aside>
  );
}
