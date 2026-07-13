import type { Locale } from "./content";

export type Partner = {
  id: string;
  name: string;
  active: boolean;
  url: string | null;
  locales: Locale[];
  jurisdictions: string[];
  headline: Record<Locale, string>;
  termsUrl: string | null;
  disclosure: Record<Locale, string>;
  startsAt: string | null;
  endsAt: string | null;
};

export const partners: Partner[] = [
  {
    id: "partner-placement-1",
    name: "Partner placement",
    active: false,
    url: null,
    locales: ["en", "es"],
    jurisdictions: ["global"],
    headline: {
      en: "Partner placement",
      es: "Espacio para socio",
    },
    termsUrl: null,
    disclosure: {
      en: "Affiliate placement",
      es: "Espacio de afiliado",
    },
    startsAt: null,
    endsAt: null,
  },
];

export const partnerLinkProps = {
  target: "_blank",
  rel: "sponsored nofollow noopener",
} as const;

export function validatePartner(partner: Partner): Partner {
  if (partner.active && !partner.url) {
    throw new Error("Active partner requires a destination URL");
  }
  if (partner.active && !partner.termsUrl) {
    throw new Error("Active partner requires terms");
  }
  if (
    partner.active &&
    (!partner.disclosure.en || !partner.disclosure.es)
  ) {
    throw new Error("Active partner requires disclosure");
  }
  return partner;
}

export function getEligiblePartners(
  locale: Locale,
  jurisdiction: string,
  now: Date,
): Partner[] {
  return partners.filter((partner) => {
    validatePartner(partner);
    if (
      !partner.active ||
      !partner.locales.includes(locale) ||
      !partner.jurisdictions.includes(jurisdiction)
    ) {
      return false;
    }
    if (partner.startsAt && now < new Date(partner.startsAt)) return false;
    if (partner.endsAt && now > new Date(partner.endsAt)) return false;
    return true;
  });
}
