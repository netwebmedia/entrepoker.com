import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import LocaleRootLayout from "../app/[locale]/layout";

describe("localized document shell", () => {
  it("emits the selected language on the document element", async () => {
    const html = renderToStaticMarkup(
      await LocaleRootLayout({
        children: <main>Contenido</main>,
        params: Promise.resolve({ locale: "es" }),
      }),
    );

    expect(html).toContain('<html lang="es">');
  });
});
