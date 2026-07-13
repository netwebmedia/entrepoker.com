import { describe, expect, it } from "vitest";
import {
  metadataForHost,
  organizationJsonLd,
  sectionMetadataOptions,
} from "../lib/metadata";

describe("launch metadata", () => {
  it("builds absolute social images from the incoming host", () => {
    const metadata = metadataForHost("preview.entrepoker.test", "https");

    expect(metadata.metadataBase?.toString()).toBe(
      "https://preview.entrepoker.test/",
    );
    expect(metadata.openGraph?.images).toEqual([
      {
        url: "https://preview.entrepoker.test/og.png",
        width: 1200,
        height: 630,
        alt: "Entrepoker bilingual poker media hub",
      },
    ]);
  });

  it("publishes bilingual alternate routes", () => {
    const metadata = metadataForHost("entrepoker.com", "https");

    expect(metadata.alternates?.languages).toEqual({
      en: "/en",
      es: "/es",
      "x-default": "/",
    });
  });

  it("publishes route-specific Spanish metadata", () => {
    const metadata = metadataForHost("entrepoker.com", "https", {
      locale: "es",
      canonicalPath: "/es/noticias",
      alternatePaths: {
        en: "/en/news",
        es: "/es/noticias",
        "x-default": "/en/news",
      },
      pageTitle: "Noticias",
      pageDescription: "Noticias independientes de póker.",
    });

    expect(metadata.alternates).toEqual({
      canonical: "/es/noticias",
      languages: {
        en: "/en/news",
        es: "/es/noticias",
        "x-default": "/en/news",
      },
    });
    expect(metadata.title).toEqual({ absolute: "Noticias | Entrepoker" });
    expect(metadata.description).toBe("Noticias independientes de póker.");
    expect(metadata.openGraph).toMatchObject({
      locale: "es_ES",
      alternateLocale: ["en_US"],
      url: "https://entrepoker.com/es/noticias",
    });
  });

  it("maps section canonicals and alternates into both languages", () => {
    expect(
      sectionMetadataOptions(
        "es",
        "affiliate-disclosure",
        "Divulgación de afiliados",
        "Relaciones comerciales transparentes.",
      ),
    ).toEqual({
      locale: "es",
      canonicalPath: "/es/divulgacion-afiliados",
      alternatePaths: {
        en: "/en/affiliate-disclosure",
        es: "/es/divulgacion-afiliados",
        "x-default": "/en/affiliate-disclosure",
      },
      pageTitle: "Divulgación de afiliados",
      pageDescription: "Relaciones comerciales transparentes.",
    });
  });

  it("identifies Entrepoker and the recovered Facebook page", () => {
    expect(organizationJsonLd).toMatchObject({
      "@type": "NewsMediaOrganization",
      name: "Entrepoker",
      sameAs: ["https://www.facebook.com/entrepoker"],
    });
    expect(JSON.stringify(organizationJsonLd)).not.toContain("youtube.com");
  });
});
