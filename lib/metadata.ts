import type { Metadata } from "next";

const title = "Entrepoker | Poker News, Strategy & Culture";
const description =
  "Independent bilingual poker news, strategy, video and tournament culture for a global audience.";

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
): Metadata {
  const origin = normalizedOrigin(host, protocol);

  return {
    metadataBase: new URL(origin),
    title: {
      default: title,
      template: "%s | Entrepoker",
    },
    description,
    applicationName: "Entrepoker",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Entrepoker",
      locale: "en_US",
      alternateLocale: ["es_ES"],
      url: origin,
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
  description,
  inLanguage: ["en", "es"],
  sameAs: ["https://www.facebook.com/entrepoker"],
};
