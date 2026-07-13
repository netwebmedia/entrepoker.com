import type { Locale } from "../lib/content";
import { getEligiblePartners, partnerLinkProps } from "../lib/partners";

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
        <a
          key={partner.id}
          href={partner.url!}
          {...partnerLinkProps}
        >
          {partner.headline[locale]}
        </a>
      ))}
    </aside>
  );
}
