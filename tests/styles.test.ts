import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("Entrepoker visual system", () => {
  const css = readFileSync(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  it("defines the approved palette and editorial width", () => {
    expect(css).toContain("--blue: #1387d4");
    expect(css).toContain("--navy: #10283d");
    expect(css).toContain("--live: #e83434");
    expect(css).toContain("max-width: 1240px");
  });

  it("provides mobile and reduced-motion rules", () => {
    expect(css).toMatch(/@media\s*\(max-width:\s*760px\)/);
    expect(css).toMatch(/prefers-reduced-motion/);
  });
});
