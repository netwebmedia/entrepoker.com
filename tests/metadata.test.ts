import { describe, expect, it } from "vitest";
import { metadataForHost, organizationJsonLd } from "../lib/metadata";

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

  it("identifies Entrepoker and the recovered Facebook page", () => {
    expect(organizationJsonLd).toMatchObject({
      "@type": "NewsMediaOrganization",
      name: "Entrepoker",
      sameAs: ["https://www.facebook.com/entrepoker"],
    });
    expect(JSON.stringify(organizationJsonLd)).not.toContain("youtube.com");
  });
});
