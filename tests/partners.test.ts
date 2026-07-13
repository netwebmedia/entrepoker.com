import { describe, expect, it } from "vitest";
import {
  getEligiblePartners,
  partnerLinkProps,
  partners,
  validatePartner,
} from "../lib/partners";

describe("affiliate safety", () => {
  const reviewedPartner = {
    ...partners[0]!,
    active: true,
    url: "https://partner.example/entrepoker",
    termsUrl: "https://partner.example/terms",
    cta: {
      en: "Review offer",
      es: "Revisar oferta",
    },
    eligibility: {
      en: "Adults 18+ where permitted. Terms apply.",
      es: "Mayores de 18 donde esté permitido. Aplican términos.",
    },
    minimumAge: 18,
  };

  it("ships with no active affiliate destinations", () => {
    expect(partners.every((partner) => !partner.active && partner.url === null)).toBe(true);
    expect(getEligiblePartners("en", "global", new Date("2026-07-13"))).toEqual([]);
  });

  it("rejects an active partner without terms and disclosure", () => {
    expect(() =>
      validatePartner({
        ...partners[0]!,
        active: true,
        url: "https://example.com",
      }),
    ).toThrow(/terms/i);
  });

  it("uses safe affiliate link attributes", () => {
    expect(partnerLinkProps).toEqual({
      target: "_blank",
      rel: "sponsored nofollow noopener",
    });
  });

  it("accepts a complete reviewed partner contract", () => {
    expect(validatePartner(reviewedPartner)).toEqual(reviewedPartner);
  });

  it("rejects unsafe destinations and invalid campaign dates", () => {
    expect(() =>
      validatePartner({
        ...reviewedPartner,
        url: "javascript:alert(1)",
      }),
    ).toThrow(/https/i);

    expect(() =>
      validatePartner({
        ...reviewedPartner,
        startsAt: "2026-08-01",
        endsAt: "2026-07-01",
      }),
    ).toThrow(/date/i);
  });
});
