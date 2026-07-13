import type { ReactNode } from "react";
import type { Lang } from "@/lib/affiliates";
import styles from "./affiliate.module.css";
import { AffiliateDisclosureNote } from "./AffiliateDisclosureNote";
import { PlayResponsibly } from "./PlayResponsibly";

const NAV = {
  en: [
    { href: "/rooms", label: "Room Reviews" },
    { href: "/best-poker-sites-chile", label: "Best Sites Chile" },
    { href: "/responsible-gambling", label: "Responsible Gambling" },
  ],
  es: [
    { href: "/salas", label: "Reseñas de Salas" },
    { href: "/mejores-salas-poker-chile", label: "Mejores Salas Chile" },
    { href: "/juego-responsable", label: "Juego Responsable" },
  ],
} as const;

/**
 * Self-contained page shell for the affiliate layer: dark felt background,
 * header with brand + section nav + language switch, footer with the 18+
 * strip and affiliate disclosure. Deliberately independent of app/layout.tsx
 * styling so these routes merge additively into the Codex-built site.
 */
export function AffiliateShell({
  lang,
  altHref,
  altLabel,
  children,
  showDisclosure = true,
}: {
  lang: Lang;
  /** URL of this page's counterpart in the other language. */
  altHref?: string;
  /** Label for the language switch, e.g. "Versión en español". */
  altLabel?: string;
  children: ReactNode;
  showDisclosure?: boolean;
}) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="/">
            <span className={styles.brandSpade}>♠</span>EntrePoker
          </a>
          <nav className={styles.nav}>
            {NAV[lang].map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            {altHref && altLabel && (
              <a className={styles.langSwitch} href={altHref}>
                {altLabel}
              </a>
            )}
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {children}
        <PlayResponsibly lang={lang} />
        {showDisclosure && <AffiliateDisclosureNote lang={lang} />}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLinks}>
            {NAV[lang].map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              href={
                lang === "es" ? "/divulgacion-afiliados" : "/affiliate-disclosure"
              }
            >
              {lang === "es" ? "Divulgación de afiliados" : "Affiliate Disclosure"}
            </a>
          </div>
          <p>
            © {new Date().getFullYear()} EntrePoker.{" "}
            {lang === "es"
              ? "Contenido informativo para mayores de 18 años. No es asesoría legal ni financiera."
              : "Informational content for adults 18+. Not legal or financial advice."}
          </p>
        </div>
      </footer>
    </div>
  );
}
