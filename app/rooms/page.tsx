import type { Metadata } from "next";
import { AffiliateShell } from "@/components/affiliate/AffiliateShell";
import { BonusTable } from "@/components/affiliate/BonusTable";
import { RoomCard } from "@/components/affiliate/RoomCard";
import styles from "@/components/affiliate/affiliate.module.css";
import { getRoom } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "Poker Room Reviews 2026 — GGPoker, 888poker & WPT Global | EntrePoker",
  description:
    "Honest 2026 reviews of GGPoker, 888poker and WPT Global: welcome bonuses, Ocean Rewards rakeback, LatAm availability, pros and cons — no hype, verified terms.",
  alternates: {
    canonical: "https://entrepoker.com/rooms",
    languages: {
      en: "https://entrepoker.com/rooms",
      es: "https://entrepoker.com/salas",
      "x-default": "https://entrepoker.com/rooms",
    },
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Poker Room Reviews 2026 — GGPoker, 888poker & WPT Global",
  description:
    "Independent reviews of the three poker rooms we cover: welcome bonus mechanics, rewards programs, and availability for players in Chile and Latin America.",
  inLanguage: "en",
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
  author: { "@type": "Organization", name: "EntrePoker" },
  publisher: { "@type": "Organization", name: "EntrePoker" },
  mainEntityOfPage: "https://entrepoker.com/rooms",
};

export default function RoomsPage() {
  const gg = getRoom("ggpoker");
  const p888 = getRoom("poker888");
  const wpt = getRoom("wptglobal");

  return (
    <AffiliateShell
      lang="en"
      altHref="/salas"
      altLabel="Versión en español"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className={styles.hero}>
        <p className={styles.kicker}>Reviews · Updated July 2026</p>
        <h1 className={styles.h1}>Poker Room Reviews 2026</h1>
        <p className={styles.lead}>
          We review the three rooms we actually recommend to players in Chile
          and Latin America: <strong>GGPoker</strong>, <strong>888poker</strong>{" "}
          and <strong>WPT Global</strong>. Every bonus figure below was
          verified in July 2026 against the rooms&apos; current offers — where
          a detail changes often, we say so and tell you to check the room&apos;s
          own terms instead of guessing.
        </p>
        <p className={styles.lead}>
          No room paid to change its position on this page, and we don&apos;t
          publish a bonus we couldn&apos;t verify.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>At a glance</h2>
        <BonusTable lang="en" />
      </section>

      <section className={styles.section} id="ggpoker">
        <h2 className={styles.h2}>GGPoker review</h2>
        <div className={styles.prose}>
          <p>
            GGPoker sits at the center of the GGNetwork and offers one of the
            largest player pools and tournament schedules in online poker. For
            a player in Chile that matters in a practical way: games run
            around the clock in your timezone, at every buy-in level, and the
            client is available in Spanish.
          </p>
          <h3 className={styles.h3}>Welcome bonus mechanics</h3>
          <p>
            You pick one of two offers at signup. The <strong>100% match up
            to $600</strong> is the standard route: it releases at $1 for
            every $5 of net rake you generate, you can top up your deposit for
            60 days, and you have 90 days to clear the full amount. The
            alternative is a <strong>$100 rewards package</strong> paid in
            tickets — a better fit if you play low volume and know you
            won&apos;t generate enough rake to clear a big match.
          </p>
          <h3 className={styles.h3}>Rewards program: Ocean Rewards</h3>
          <p>
            On January 30, 2026, GGPoker replaced its long-running Fish Buffet
            program with <strong>Ocean Rewards</strong>. The structure: 100
            points per $1 of rake, a 16% base cashback rate scaling up to a
            maximum of 80%, collected weekly on Mondays. One thing to know
            before you commit: your tier is locked in for a year once
            assigned, so the program rewards consistent volume.
          </p>
          <h3 className={styles.h3}>Playing from Chile and LatAm</h3>
          <p>
            GGPoker accepts Chilean players without restriction and serves
            most of Latin America. Deposits and withdrawals are handled in the
            client&apos;s cashier — available methods vary by country, so
            check the cashier after registering.
          </p>
        </div>
        <RoomCard room={gg} lang="en" />
      </section>

      <section className={styles.section} id="888poker">
        <h2 className={styles.h2}>888poker review</h2>
        <div className={styles.prose}>
          <p>
            888poker runs on its own independent network and has been a fixture
            of online poker for decades. Its standout feature in 2026 is the
            same thing that made it famous: a genuine no-deposit offer, which
            almost no other major room still gives.
          </p>
          <h3 className={styles.h3}>Welcome bonus mechanics</h3>
          <p>
            New players get <strong>$8 free with no deposit</strong>, paid as
            40 tickets of $0.10 plus 4 tickets of $1 — enough to sit in real
            games and decide if you like the room before risking anything.
            When you deposit, the code <strong>Welcome100</strong> unlocks a
            100% match up to $1,000, with 90 days to clear. If you&apos;d
            rather have something simpler, the code <strong>GET30</strong>{" "}
            swaps the match for $30 of free play (six $5 tickets) with no
            playthrough attached. Note that offers differ in the UK and in
            US-regulated markets.
          </p>
          <h3 className={styles.h3}>Rewards program</h3>
          <p>
            888poker rotates its cashback and rewards promotions periodically,
            so we don&apos;t print a number that could be stale next month —
            check current terms on the room&apos;s site before you count
            rewards into your win rate.
          </p>
          <h3 className={styles.h3}>Playing from Chile and LatAm</h3>
          <p>
            Chile is on 888poker&apos;s accepted-countries list and the room
            serves most of Latin America. As with any room, confirm your
            country&apos;s deposit options in the cashier after signup.
          </p>
        </div>
        <RoomCard room={p888} lang="en" />
      </section>

      <section className={styles.section} id="wptglobal">
        <h2 className={styles.h2}>WPT Global review</h2>
        <div className={styles.prose}>
          <p>
            WPT Global is the online room of the World Poker Tour, and it is
            the most explicitly LatAm-friendly of the three — its
            accepted-countries list names Chile alongside Argentina, Bolivia,
            Ecuador, Paraguay, Uruguay, Venezuela, Panama, Costa Rica and
            more.
          </p>
          <h3 className={styles.h3}>Welcome bonus mechanics</h3>
          <p>
            The current package — relaunched in March 2026 — is worth{" "}
            <strong>up to $3,348</strong>: a 100% deposit match from $10 up to
            $3,000, plus up to $248 in tournament tickets scaled to your
            deposit. Read the clearing structure carefully before you deposit
            the maximum: up to $1,500 of the match clears through poker at $1
            per $10 of rake and fees, while the other half clears through
            casino wagering, and the whole window is 60 days. If you only play
            poker, treat the realistic poker-clearable portion as $1,500, not
            $3,000.
          </p>
          <h3 className={styles.h3}>Rewards program</h3>
          <p>
            WPT Global runs its own rotating rewards promotions — check
            current cashback terms on the room&apos;s site.
          </p>
          <h3 className={styles.h3}>Playing from Chile and LatAm</h3>
          <p>
            This is the room with the clearest documented LatAm coverage.
            Deposit methods vary by country; check the cashier for the current
            options available from Chile.
          </p>
        </div>
        <RoomCard room={wpt} lang="en" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>How we review rooms</h2>
        <div className={styles.prose}>
          <p>
            We verify every bonus figure against the room&apos;s current
            published terms before we print it, we list the clearing mechanics
            instead of just the headline number, and we flag the fine print
            that actually affects whether you&apos;ll see the money — clearing
            rates, time windows, and tier locks. Where a program changes too
            often to quote reliably, we say &quot;check current terms&quot;
            rather than publish a stale number. Playing in Chile? See our
            dedicated guide:{" "}
            <a href="/best-poker-sites-chile">
              Best poker sites for players in Chile
            </a>
            .
          </p>
        </div>
      </section>
    </AffiliateShell>
  );
}
