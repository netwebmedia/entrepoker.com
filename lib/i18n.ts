import {
  sectionSegments,
  type Locale,
  type SectionKey,
} from "./content";

export const isLocale = (value: string): value is Locale =>
  value === "en" || value === "es";

export const localizedSectionPath = (
  locale: Locale,
  section: SectionKey,
) => `/${locale}/${sectionSegments[locale][section]}`;

export function equivalentPath(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 1 && isLocale(parts[0]!)) return `/${target}`;

  const source = parts[0];
  if (!source || !isLocale(source) || !parts[1]) return `/${target}`;

  const section = (Object.entries(sectionSegments[source]).find(
    ([, segment]) => segment === parts[1],
  )?.[0] ?? null) as SectionKey | null;

  return section ? localizedSectionPath(target, section) : `/${target}`;
}
