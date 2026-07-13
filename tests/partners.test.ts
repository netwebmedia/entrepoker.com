import { describe, expect, it } from "vitest";
import {
  getEligiblePartners,
  partnerLinkProps,
  partners,
  validatePartner,
} from "../lib/partners";

describe("affiliate safety", () => {
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
});
