import type { Metadata } from "next";
import { AffiliateShell } from "@/components/affiliate/AffiliateShell";
import styles from "@/components/affiliate/affiliate.module.css";

export const metadata: Metadata = {
  title: "Responsible Gambling | EntrePoker",
  description:
    "Poker should stay a game. 18+ only, bankroll limits, warning signs of problem gambling, self-exclusion tools, and where to get help.",
  alternates: {
    canonical: "https://entrepoker.com/responsible-gambling",
    languages: {
      en: "https://entrepoker.com/responsible-gambling",
      es: "https://entrepoker.com/juego-responsable",
      "x-default": "https://entrepoker.com/responsible-gambling",
    },
  },
};

export default function ResponsibleGamblingPage() {
  return (
    <AffiliateShell
      lang="en"
      altHref="/juego-responsable"
      altLabel="Versión en español"
      showDisclosure={false}
    >
      <div className={styles.hero}>
        <p className={styles.kicker}>Player Safety</p>
        <h1 className={styles.h1}>Responsible Gambling</h1>
        <p className={styles.lead}>
          Poker is a game of skill played with real money, and real money
          means real risk. EntrePoker covers poker rooms and their offers, but
          nothing here should ever push you to play beyond your means. This
          page is the honest counterweight to every bonus on this site.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>18+ only</h2>
        <div className={styles.prose}>
          <p>
            Real-money poker is for adults <strong>18 or older</strong> (and
            higher where local rules say so). Major rooms verify identity and
            age as part of their withdrawal process — expect to be asked for
            documents before you can cash out. If you are under 18, this
            site&apos;s room reviews are not for you.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Bankroll rules that keep poker fun</h2>
        <div className={styles.prose}>
          <ul>
            <li>
              <strong>Play only with money you can afford to lose.</strong>{" "}
              Your poker bankroll should be entirely separate from rent, food,
              savings, and family money.
            </li>
            <li>
              <strong>Set a deposit limit before you deposit.</strong> Decide
              the monthly amount when you&apos;re calm, not at the table. Most
              rooms let you set deposit limits in your account settings.
            </li>
            <li>
              <strong>Never chase losses.</strong> Moving up in stakes to
              &quot;win it back&quot; is how bad sessions become bad months.
            </li>
            <li>
              <strong>Set session time limits.</strong> Fatigue makes
              everyone play worse. Decide your stop time before you sit down.
            </li>
            <li>
              <strong>Treat bonuses as a perk, not income.</strong> No welcome
              bonus is worth depositing more than you planned to.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Warning signs</h2>
        <div className={styles.prose}>
          <p>Consider taking a break — or seeking help — if you notice:</p>
          <ul>
            <li>Playing with money meant for essentials</li>
            <li>Hiding how much you play or lose from people close to you</li>
            <li>Chasing losses or borrowing money to play</li>
            <li>Feeling anxious, irritable or low when not playing</li>
            <li>Playing to escape problems rather than for enjoyment</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Self-exclusion and account limits</h2>
        <div className={styles.prose}>
          <p>
            Major rooms offer account-level protection tools such as deposit
            limits, session reminders, cool-off periods, and{" "}
            <strong>self-exclusion</strong> — which locks your account for a
            period you choose or permanently. Check your room&apos;s
            responsible-gaming settings to see exactly which tools it
            provides. If poker has stopped feeling like a choice, use them —
            they exist for exactly that moment, and support teams will apply
            them on request.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Where to get help</h2>
        <div className={styles.prose}>
          <p>Free, confidential help is available:</p>
          <ul>
            <li>
              <a
                href="https://www.begambleaware.org"
                rel="noopener"
                target="_blank"
              >
                BeGambleAware
              </a>{" "}
              — information, self-assessment tools and support services
            </li>
            <li>
              <a
                href="https://www.gamblersanonymous.org"
                rel="noopener"
                target="_blank"
              >
                Gamblers Anonymous
              </a>{" "}
              — free peer-support meetings, in person and online, worldwide
            </li>
            <li>
              <a href="https://www.jugarbien.es" rel="noopener" target="_blank">
                jugarbien.es
              </a>{" "}
              — Spanish-language responsible-gambling resource
            </li>
          </ul>
          <p>
            If gambling is affecting you or someone close to you, reaching out
            is the strong move — not the weak one.
          </p>
        </div>
      </section>
    </AffiliateShell>
  );
}
