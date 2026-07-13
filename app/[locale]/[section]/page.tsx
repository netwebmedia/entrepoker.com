import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import {
  SectionPage,
  sectionContent,
} from "../../../components/section-page";
import {
  isLocale,
  legalSegments,
  pageSectionFromSegment,
} from "../../../lib/i18n";
import { requiredSections, sectionSegments } from "../../../lib/content";
import {
  metadataForHost,
  sectionMetadataOptions,
} from "../../../lib/metadata";

type SectionRouteProps = {
  params: Promise<{ locale: string; section: string }>;
};

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

export async function generateMetadata({
  params,
}: SectionRouteProps): Promise<Metadata> {
  const { locale, section: segment } = await params;
  if (!isLocale(locale)) notFound();
  const section = pageSectionFromSegment(locale, segment);
  if (!section) notFound();

  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host");
  const forwardedProtocol = incomingHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol?.split(",")[0]?.trim() ?? "https";
  const copy = sectionContent[locale][section];

  return metadataForHost(
    host ?? "entrepoker.com",
    protocol,
    sectionMetadataOptions(locale, section, copy.title, copy.body),
  );
}

export default async function LocalizedSection({
  params,
}: SectionRouteProps) {
  const { locale, section: segment } = await params;
  if (!isLocale(locale)) notFound();
  const section = pageSectionFromSegment(locale, segment);
  if (!section) notFound();
  return <SectionPage locale={locale} section={section} />;
}
