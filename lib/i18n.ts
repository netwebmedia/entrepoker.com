import {
  sectionSegments,
  requiredSections,
  type Locale,
  type SectionKey,
} from "./content";

export const legalSegments = {
  en: {
    about: "about",
    contact: "contact",
    "affiliate-disclosure": "affiliate-disclosure",
    "responsible-play": "responsible-play",
    privacy: "privacy",
    terms: "terms",
  },
  es: {
    about: "acerca-de",
    contact: "contacto",
    "affiliate-disclosure": "divulgacion-afiliados",
    "responsible-play": "juego-responsable",
    privacy: "privacidad",
    terms: "terminos",
  },
} as const;

export type LegalSection = keyof (typeof legalSegments)["en"];
export type PageSection = SectionKey | LegalSection;

export const isLocale = (value: string): value is Locale =>
  value === "en" || value === "es";

export const localizedSectionPath = (
  locale: Locale,
  section: SectionKey,
) => `/${locale}/${sectionSegments[locale][section]}`;

export function localizedPagePath(
  locale: Locale,
  section: PageSection,
): string {
  if (requiredSections.includes(section as SectionKey)) {
    return localizedSectionPath(locale, section as SectionKey);
  }
  return `/${locale}/${legalSegments[locale][section as LegalSection]}`;
}

export function pageSectionFromSegment(
  locale: Locale,
  segment: string,
): PageSection | null {
  const editorial = Object.entries(sectionSegments[locale]).find(
    ([, candidate]) => candidate === segment,
  )?.[0] as SectionKey | undefined;
  if (editorial) return editorial;

  return (
    (Object.entries(legalSegments[locale]).find(
      ([, candidate]) => candidate === segment,
    )?.[0] as LegalSection | undefined) ?? null
  );
}

export function publicRouteInventory(): string[] {
  const routes = ["/"];
  for (const locale of ["en", "es"] as const) {
    routes.push(`/${locale}`);
    routes.push(
      ...requiredSections.map((section) =>
        localizedSectionPath(locale, section),
      ),
    );
    routes.push(
      ...Object.keys(legalSegments[locale]).map((section) =>
        localizedPagePath(locale, section as LegalSection),
      ),
    );
  }
  return routes;
}

export function equivalentPath(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 1 && isLocale(parts[0]!)) return `/${target}`;

  const source = parts[0];
  if (!source || !isLocale(source) || !parts[1]) return `/${target}`;

  const section = pageSectionFromSegment(source, parts[1]);

  return section ? localizedPagePath(target, section) : `/${target}`;
}
