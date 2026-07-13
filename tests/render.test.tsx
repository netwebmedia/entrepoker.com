import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AffiliateRail } from "../components/affiliate";
import { HomePage } from "../components/home-page";

describe("Entrepoker rendering", () => {
  it("renders a bilingual newsroom homepage with disclosures", () => {
    const html = renderToStaticMarkup(<HomePage locale="en" />);
    expect(html).toContain("Poker has stories");
    expect(html).toContain("Top Stories");
    expect(html).toContain("From the Archive");
    expect(html).toContain("Affiliate disclosure");
    expect(html).toContain('href="/es"');
  });

  it("renders inactive partner inventory without outbound links", () => {
    const html = renderToStaticMarkup(<AffiliateRail locale="en" />);
    expect(html).toContain("Partner placement");
    expect(html).not.toContain('target="_blank"');
    expect(html).not.toContain("https://");
  });

  it("uses a main landmark and a single visible h1", () => {
    const html = renderToStaticMarkup(<HomePage locale="es" />);
    expect(html.match(/<main/g)?.length).toBe(1);
    expect(html.match(/<h1/g)?.length).toBe(1);
  });
});
