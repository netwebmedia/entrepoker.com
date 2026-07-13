import type { Locale } from "./content";

export type Partner = {
  id: string;
  name: string;
  active: boolean;
  url: string | null;
  locales: Locale[];
  jurisdictions: string[];
  headline: Record<Locale, string>;
  cta: Record<Locale, string>;
  termsUrl: string | null;
  disclosure: Record<Locale, string>;
  eligibility: Record<Locale, string>;
  minimumAge: number | null;
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
    cta: {
      en: "Review offer",
      es: "Revisar oferta",
    },
    termsUrl: null,
    disclosure: {
      en: "Affiliate placement",
      es: "Espacio de afiliado",
    },
    eligibility: {
      en: "Adults only where permitted. Terms apply.",
      es: "Solo adultos donde esté permitido. Aplican términos.",
    },
    minimumAge: null,
    startsAt: null,
    endsAt: null,
  },
];

export const partnerLinkProps = {
  target: "_blank",
  rel: "sponsored nofollow noopener",
} as const;

function requireHttpsUrl(value: string | null, label: string) {
  if (!value) throw new Error(`Active partner requires ${label}`);

  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error(`Active partner ${label} must use a valid HTTPS URL`);
  }

  if (parsed.protocol !== "https:" || parsed.username || parsed.password) {
    throw new Error(`Active partner ${label} must use a valid HTTPS URL`);
  }
}

function campaignDate(value: string | null, label: string) {
  if (!value) return null;
  const timestamp = Date.parse(value);
  if (!Number.isFinite(timestamp)) {
    throw new Error(`Active partner ${label} date is invalid`);
  }
  return timestamp;
}

export function validatePartner(partner: Partner): Partner {
  if (!partner.active) return partner;

  requireHttpsUrl(partner.url, "destination");
  requireHttpsUrl(partner.termsUrl, "terms");

  if (partner.locales.length === 0 || partner.jurisdictions.length === 0) {
    throw new Error("Active partner requires locale and jurisdiction eligibility");
  }

  for (const locale of partner.locales) {
    if (
      !partner.headline[locale]?.trim() ||
      !partner.cta[locale]?.trim() ||
      !partner.disclosure[locale]?.trim() ||
      !partner.eligibility[locale]?.trim()
    ) {
      throw new Error(`Active partner requires complete ${locale} copy`);
    }
  }

  if (
    partner.minimumAge === null ||
    !Number.isInteger(partner.minimumAge) ||
    partner.minimumAge < 18
  ) {
    throw new Error("Active partner requires a minimum age of 18 or higher");
  }

  const startsAt = campaignDate(partner.startsAt, "start");
  const endsAt = campaignDate(partner.endsAt, "end");
  if (startsAt !== null && endsAt !== null && startsAt > endsAt) {
    throw new Error("Active partner campaign date range is invalid");
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
