import { describe, expect, it } from "vitest";
import {
  equivalentPath,
  isLocale,
  localizedSectionPath,
} from "../lib/i18n";

describe("locale routing", () => {
  it("accepts only supported locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("es")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });

  it("maps section paths between locales", () => {
    expect(localizedSectionPath("es", "news")).toBe("/es/noticias");
    expect(localizedSectionPath("en", "live")).toBe("/en/live-poker");
    expect(equivalentPath("/es/noticias", "en")).toBe("/en/news");
  });

  it("falls back to the target locale homepage for unknown pages", () => {
    expect(equivalentPath("/es/no-existe", "en")).toBe("/en");
  });
});
