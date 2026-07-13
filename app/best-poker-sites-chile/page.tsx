import type { Metadata } from "next";
import { AffiliateShell } from "@/components/affiliate/AffiliateShell";
import { BonusTable } from "@/components/affiliate/BonusTable";
import { RoomCard } from "@/components/affiliate/RoomCard";
import styles from "@/components/affiliate/affiliate.module.css";
import { ROOMS } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "Best Poker Sites for Players in Chile (2026) | EntrePoker",
  description:
    "GGPoker, 888poker and WPT Global all accept Chilean players in 2026. Compare bonuses and rakeback, see how deposits work from LatAm, and get an honest read on Chile's legal situation.",
  alternates: {
    canonical: "https://entrepoker.com/best-poker-sites-chile",
    languages: {
      en: "https://entrepoker.com/best-poker-sites-chile",
      es: "https://entrepoker.com/mejores-salas-poker-chile",
      "x-default": "https://entrepoker.com/best-poker-sites-chile",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    q: "Is online poker legal in Chile?",
    a: "Online poker is not regulated in Chile and is not expressly legal. Law 19.995 (2004) covers land-based casinos only, and gambling is illegal by default unless expressly authorized. Chile's Supreme Court has ruled that online gambling is illegal unless authorized by law. In practice, offshore rooms serve Chilean players under international licenses. This is general information, not legal advice.",
  },
  {
    q: "Is Chile going to regulate online poker?",
    a: "A comprehensive online gambling regulation bill is in the Senate and received the government's highest legislative urgency in May 2026. It would create licensed operators (Chilean closed corporations) under a new Superintendency of Casinos, Betting and Games of Chance. As of July 2026 it is not yet law, though the industry expects 2026 could be the year it passes.",
  },
  {
    q: "Can Chilean players get in trouble for playing online poker?",
    a: "Players are not prosecuted in Chile. Courts have ordered internet providers to block unlicensed betting and casino sites, although enforcement of those blocking orders has been uneven. The legal pressure has been aimed at operators, not individual players. This is general information, not legal advice.",
  },
  {
    q: "Do I pay tax on poker winnings in Chile?",
    a: "There is no poker-specific tax on winnings in Chile — general income tax rules apply. If you win meaningful amounts, talk to a Chilean tax professional about your situation.",
  },
  {
    q: "Which poker sites accept players from Chile in 2026?",
    a: "GGPoker (unrestricted, with a Spanish-language client), 888poker (Chile is on its accepted-countries list) and WPT Global (explicitly available in Chile and most of Latin America) all accept Chilean players as of July 2026. Note that once Chile's regulation bill becomes law, unlicensed sites could appear on future ISP block lists.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function BestPokerSitesChilePage() {
  return (
    <AffiliateShell
      lang="en"
      altHref="/mejores-salas-poker-chile"
      altLabel="Versión en español"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className={styles.hero}>
        <p className={styles.kicker}>Chile Guide · Updated July 2026</p>
        <h1 className={styles.h1}>
          Best Poker Sites for Players in Chile (2026)
        </h1>
      </div>

      <div className={styles.answerBox}>
        <p>
          The best poker sites for players in Chile in 2026 are{" "}
          <strong>GGPoker</strong> (one of the largest player pools, Spanish client, Ocean
          Rewards cashback up to 80%), <strong>888poker</strong> ($8 free
          without depositing, plus a 100% match up to $1,000) and{" "}
          <strong>WPT Global</strong> (welcome package worth up to $3,348,
          explicitly available in Chile and most of LatAm). All three accept
          Chilean players. Online poker is unregulated in Chile — a regulation
          bill is pending in the Senate — and players are not prosecuted.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>Compare the three rooms</h2>
        <BonusTable lang="en" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Our picks in detail</h2>
        {ROOMS.map((room) => (
          <RoomCard key={room.key} room={room} lang="en" />
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Depositing from Chile and LatAm</h2>
        <div className={styles.prose}>
          <p>
            These rooms typically run player accounts in US dollars — confirm
            the currency options in the cashier after signup — so playing from
            Chile usually means converting from pesos at some point in the
            chain: either your bank or card does it, or the payment method you
            choose in the cashier does. A few practical notes:
          </p>
          <ul>
            <li>
              <strong>Available methods vary by country.</strong> Each
              room&apos;s cashier shows different deposit options depending on
              where you register from. Check the cashier right after signup —
              before you plan a bankroll around a specific method — and
              confirm current options on the room&apos;s own site.
            </li>
            <li>
              <strong>Withdrawals deserve the same check.</strong> The method
              you deposit with often determines how you can withdraw. Confirm
              the withdrawal path for Chile before making a large deposit.
            </li>
            <li>
              <strong>Mind the exchange rate, not just the bonus.</strong> A
              percentage lost to currency conversion on every deposit and
              cashout compounds. Compare what your bank charges against the
              options in the room&apos;s cashier.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>
          Is online poker legal in Chile? Honest answers
        </h2>
        <div className={styles.prose}>
          <p>
            Short version: it&apos;s unregulated, players aren&apos;t
            prosecuted, and a regulation bill is moving through the Senate.
            The details matter, so here they are — as plain information, not
            legal advice.
          </p>
        </div>
        {faq.map(({ q, a }) => (
          <div key={q} className={styles.faqItem}>
            <h3 className={styles.faqQ}>{q}</h3>
            <p className={styles.faqA}>{a}</p>
          </div>
        ))}
      </section>

      <p className={styles.crossLink}>
        Want the full reviews? Read our{" "}
        <a href="/rooms">2026 poker room reviews</a> — or{" "}
        <a href="/mejores-salas-poker-chile">lee esta guía en español</a>.
      </p>
    </AffiliateShell>
  );
}
