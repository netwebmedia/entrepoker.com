import { describe, expect, it } from "vitest";
import { archiveStories, localeContent, requiredSections } from "../lib/content";

describe("localized editorial content", () => {
  it("defines the same required sections in English and Spanish", () => {
    expect(Object.keys(localeContent.en.sections)).toEqual(requiredSections);
    expect(Object.keys(localeContent.es.sections)).toEqual(requiredSections);
  });

  it("provides non-empty navigation labels in both languages", () => {
    for (const locale of ["en", "es"] as const) {
      expect(localeContent[locale].nav.every((item) => item.label.trim().length > 0)).toBe(true);
    }
  });

  it("preserves dates and labels every recovered item as archive content", () => {
    expect(archiveStories.length).toBeGreaterThan(0);
    expect(
      archiveStories.every(
        (story) => story.isArchive && /^\d{4}-\d{2}-\d{2}$/.test(story.publishedAt),
      ),
    ).toBe(true);
  });
});
