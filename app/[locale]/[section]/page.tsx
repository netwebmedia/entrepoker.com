import { notFound } from "next/navigation";
import { SectionPage } from "../../../components/section-page";
import {
  isLocale,
  legalSegments,
  pageSectionFromSegment,
} from "../../../lib/i18n";
import { requiredSections, sectionSegments } from "../../../lib/content";

export function generateStaticParams() {
  return (["en", "es"] as const).flatMap((locale) => [
    ...requiredSections.map((section) => ({
      locale,
      section: sectionSegments[locale][section],
    })),
    ...Object.values(legalSegments[locale]).map((section) => ({
      locale,
      section,
    })),
  ]);
}

export default async function LocalizedSection({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section: segment } = await params;
  if (!isLocale(locale)) notFound();
  const section = pageSectionFromSegment(locale, segment);
  if (!section) notFound();
  return <SectionPage locale={locale} section={section} />;
}
