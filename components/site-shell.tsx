import type { ReactNode } from "react";
import { localeContent, type Locale } from "../lib/content";
import { localizedPagePath, type PageSection } from "../lib/i18n";

export function SiteShell({
  locale,
  section,
  children,
}: {
  locale: Locale;
  section?: PageSection;
  children: ReactNode;
}) {
  const otherLocale = locale === "en" ? "es" : "en";
  const copy = localeContent[locale];
  const alternatePath = section
    ? localizedPagePath(otherLocale, section)
    : `/${otherLocale}`;

  return (
    <div className="site">
      <div
        className="partner-leaderboard"
        aria-label={
          locale === "en"
            ? "Inactive partner placement"
            : "Espacio inactivo para socio"
        }
      >
        <span>
          {locale === "en" ? "Partner placement" : "Espacio para socio"}
        </span>
        <small>
          {locale === "en"
            ? "Reserved for reviewed partners"
            : "Reservado para socios revisados"}
        </small>
      </div>

      <header className="site-header">
        <div className="brand-row">
          <a className="wordmark" href={`/${locale}`} aria-label="Entrepoker home">
            entre<span>poker</span>
          </a>
          <div className="brand-actions">
            <a href="https://www.facebook.com/entrepoker">Facebook</a>
            <a href={`/${locale}/videos`}>Videos</a>
            <a className="language-link" href={alternatePath}>
              {otherLocale.toUpperCase()}
            </a>
          </div>
        </div>

        <div className="live-strip" aria-label="Featured poker events">
          <strong>LIVE POKER</strong>
          <span>World Series of Poker</span>
          <span>European Poker Tour</span>
          <span>Latin American Poker Tour</span>
        </div>

        <nav
          aria-label={
            locale === "en" ? "Primary navigation" : "Navegación principal"
          }
        >
          {copy.nav.map((item) => (
            <a key={item.key} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <div className="footer-brand">
          <a className="wordmark wordmark--footer" href={`/${locale}`}>
            entre<span>poker</span>
          </a>
          <p>
            {locale === "en"
              ? "Entrepoker is an independent media publication and does not operate a poker room."
              : "Entrepoker es un medio independiente y no opera una sala de póker."}
          </p>
        </div>
        <div className="footer-links">
          <a href={localizedPagePath(locale, "about")}>
            {locale === "en" ? "About" : "Acerca de"}
          </a>
          <a href={localizedPagePath(locale, "contact")}>
            {locale === "en" ? "Contact" : "Contacto"}
          </a>
          <a href={localizedPagePath(locale, "affiliate-disclosure")}>
            {locale === "en"
              ? "Affiliate disclosure"
              : "Divulgación de afiliados"}
          </a>
          <a href={localizedPagePath(locale, "responsible-play")}>
            {locale === "en" ? "Responsible play" : "Juego responsable"}
          </a>
          <a href={localizedPagePath(locale, "privacy")}>
            {locale === "en" ? "Privacy" : "Privacidad"}
          </a>
          <a href={localizedPagePath(locale, "terms")}>
            {locale === "en" ? "Terms" : "Términos"}
          </a>
        </div>
      </footer>
    </div>
  );
}
