import { describe, expect, it } from "vitest";
import {
  equivalentPath,
  isLocale,
  localizedSectionPath,
  pageSectionFromSegment,
  publicRouteInventory,
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
    expect(equivalentPath("/es/juego-responsable", "en")).toBe(
      "/en/responsible-play",
    );
  });

  it("falls back to the target locale homepage for unknown pages", () => {
    expect(equivalentPath("/es/no-existe", "en")).toBe("/en");
  });

  it("maps localized editorial and legal route segments", () => {
    expect(pageSectionFromSegment("es", "noticias")).toBe("news");
    expect(pageSectionFromSegment("en", "responsible-play")).toBe(
      "responsible-play",
    );
    expect(pageSectionFromSegment("es", "juego-responsable")).toBe(
      "responsible-play",
    );
    expect(pageSectionFromSegment("en", "missing")).toBeNull();
  });

  it("lists every required public route", () => {
    const routes = publicRouteInventory();
    expect(routes).toHaveLength(27);
    expect(routes).toContain("/");
    expect(routes).toContain("/en/affiliate-disclosure");
    expect(routes).toContain("/es/divulgacion-afiliados");
  });
});
