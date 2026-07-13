import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AffiliateRail } from "../components/affiliate";
import { HomePage } from "../components/home-page";
import { LanguageGateway } from "../components/language-gateway";
import { SectionPage } from "../components/section-page";

describe("Entrepoker rendering", () => {
  it("offers explicit English and Spanish entry links", () => {
    const html = renderToStaticMarkup(<LanguageGateway />);
    expect(html).toContain('href="/en"');
    expect(html).toContain("Enter in English");
    expect(html).toContain('href="/es"');
    expect(html).toContain("Entrar en español");
  });

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

  it("renders responsible-play and affiliate-disclosure content in both locales", () => {
    const en = renderToStaticMarkup(
      <SectionPage locale="en" section="responsible-play" />,
    );
    const es = renderToStaticMarkup(
      <SectionPage locale="es" section="affiliate-disclosure" />,
    );
    expect(en).toContain("legal age in your jurisdiction");
    expect(es).toContain("enlaces de afiliado");
  });

  it("uses localized legal links and equivalent language destinations", () => {
    const homepage = renderToStaticMarkup(<HomePage locale="es" />);
    const responsible = renderToStaticMarkup(
      <SectionPage locale="en" section="responsible-play" />,
    );
    expect(homepage).toContain('href="/es/juego-responsable"');
    expect(homepage).not.toContain('href="/es/responsible-play"');
    expect(responsible).toContain('href="/es/juego-responsable"');
  });
});
