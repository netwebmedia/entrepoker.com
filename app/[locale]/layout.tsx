import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { isLocale } from "../../lib/i18n";
import {
  metadataForHost,
  organizationJsonLd,
} from "../../lib/metadata";
import "../globals.css";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host");
  const forwardedProtocol = incomingHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol?.split(",")[0]?.trim() ?? "https";

  return metadataForHost(host ?? "entrepoker.com", protocol, {
    locale,
    canonicalPath: `/${locale}`,
    alternatePaths: {
      en: "/en",
      es: "/es",
      "x-default": "/",
    },
  });
}

export default async function LocaleRootLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const structuredData = JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c");

  return (
    <html lang={locale}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </body>
    </html>
  );
}
