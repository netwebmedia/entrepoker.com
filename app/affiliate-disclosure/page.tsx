import type { Metadata } from "next";
import { AffiliateShell } from "@/components/affiliate/AffiliateShell";
import styles from "@/components/affiliate/affiliate.module.css";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | EntrePoker",
  description:
    "How EntrePoker makes money: affiliate commissions from poker rooms, explained in plain language — and what that does and does not change about our reviews.",
  alternates: {
    canonical: "https://entrepoker.com/affiliate-disclosure",
    languages: {
      en: "https://entrepoker.com/affiliate-disclosure",
      es: "https://entrepoker.com/divulgacion-afiliados",
      "x-default": "https://entrepoker.com/affiliate-disclosure",
    },
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <AffiliateShell
      lang="en"
      altHref="/divulgacion-afiliados"
      altLabel="Versión en español"
      showDisclosure={false}
    >
      <div className={styles.hero}>
        <p className={styles.kicker}>Transparency</p>
        <h1 className={styles.h1}>Affiliate Disclosure</h1>
        <p className={styles.lead}>
          Plain language, no fine print: this is how EntrePoker makes money,
          and what that does — and does not — change about what we publish.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>How we earn</h2>
        <div className={styles.prose}>
          <p>
            EntrePoker may earn a commission when you sign up or deposit at a
            poker room through links on this site. These are called affiliate
            links. Signing up through them costs you nothing extra — the room
            pays us out of its own marketing budget, and any bonus you receive
            is the same one available through the room directly.
          </p>
          <p>
            Affiliate links on this site are marked with{" "}
            <code>rel=&quot;sponsored&quot;</code> in the page code, and pages
            containing them carry a visible disclosure note linking here.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>What commissions don&apos;t buy</h2>
        <div className={styles.prose}>
          <ul>
            <li>
              <strong>Rankings.</strong> No room can pay to move up our
              comparisons or reviews.
            </li>
            <li>
              <strong>Silence on the downsides.</strong> Every review on this
              site lists cons alongside pros — clearing rates, time windows,
              casino-wagering requirements, whatever the fine print actually
              says.
            </li>
            <li>
              <strong>Invented numbers.</strong> If we couldn&apos;t verify a
              bonus figure, we don&apos;t print one — we tell you to check the
              room&apos;s current terms instead.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>What we ask of you</h2>
        <div className={styles.prose}>
          <p>
            Bonus terms change, and rooms update their offers without telling
            us. Always confirm the current terms on the room&apos;s own site
            before depositing. And whatever you do, play within your means —
            see our <a href="/responsible-gambling">responsible gambling</a>{" "}
            page (<a href="/juego-responsable">también en español</a>).
          </p>
        </div>
      </section>
    </AffiliateShell>
  );
}
