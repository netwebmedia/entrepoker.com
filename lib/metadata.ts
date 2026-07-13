import type { Metadata } from "next";
import type { Locale } from "./content";
import { localizedPagePath, type PageSection } from "./i18n";

const titles: Record<Locale, string> = {
  en: "Entrepoker | Poker News, Strategy & Culture",
  es: "Entrepoker | Noticias, estrategia y cultura del póker",
};

const descriptions: Record<Locale, string> = {
  en: "Independent bilingual poker news, strategy, video and tournament culture for a global audience.",
  es: "Noticias, estrategia, video y cultura de torneos de póker para una audiencia global bilingüe.",
};

export type RouteMetadataOptions = {
  locale?: Locale;
  canonicalPath?: string;
  alternatePaths?: Record<"en" | "es" | "x-default", string>;
  pageTitle?: string;
  pageDescription?: string;
};

export function sectionMetadataOptions(
  locale: Locale,
  section: PageSection,
  pageTitle: string,
  pageDescription: string,
): RouteMetadataOptions {
  const englishPath = localizedPagePath("en", section);
  const spanishPath = localizedPagePath("es", section);

  return {
    locale,
    canonicalPath: localizedPagePath(locale, section),
    alternatePaths: {
      en: englishPath,
      es: spanishPath,
      "x-default": englishPath,
    },
    pageTitle,
    pageDescription,
  };
}

function normalizedOrigin(host: string, protocol: string) {
  const cleanHost = host
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/.*$/, "") || "entrepoker.com";
  const cleanProtocol = protocol === "http" ? "http" : "https";

  return `${cleanProtocol}://${cleanHost}`;
}

export function metadataForHost(
  host = "entrepoker.com",
  protocol = "https",
  options: RouteMetadataOptions = {},
): Metadata {
  const origin = normalizedOrigin(host, protocol);
  const locale = options.locale ?? "en";
  const canonicalPath = options.canonicalPath ?? "/";
  const alternatePaths = options.alternatePaths ?? {
    en: "/en",
    es: "/es",
    "x-default": "/",
  };
  const title = options.pageTitle
    ? `${options.pageTitle} | Entrepoker`
    : titles[locale];
  const description = options.pageDescription ?? descriptions[locale];
  const routeUrl = new URL(canonicalPath, `${origin}/`).toString();

  return {
    metadataBase: new URL(origin),
    title: options.pageTitle
      ? { absolute: title }
      : { default: title, template: "%s | Entrepoker" },
    description,
    applicationName: "Entrepoker",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    alternates: {
      canonical: canonicalPath,
      languages: alternatePaths,
    },
    openGraph: {
      type: "website",
      siteName: "Entrepoker",
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: [locale === "es" ? "en_US" : "es_ES"],
      url: routeUrl,
      title,
      description,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "Entrepoker bilingual poker media hub",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "Entrepoker",
  url: "https://entrepoker.com",
  description: descriptions.en,
  inLanguage: ["en", "es"],
  sameAs: ["https://www.facebook.com/entrepoker"],
};
