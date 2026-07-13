import type { Lang, Room } from "@/lib/affiliates";
import styles from "./affiliate.module.css";
import { CtaLink } from "./CtaLink";

const LABELS = {
  en: {
    rakeback: "Rewards / rakeback",
    latam: "LatAm availability",
    pros: "Pros",
    cons: "Cons",
    bestFor: "Best for",
  },
  es: {
    rakeback: "Recompensas / rakeback",
    latam: "Disponibilidad en LatAm",
    pros: "A favor",
    cons: "En contra",
    bestFor: "Ideal para",
  },
} as const;

/** Full review card for one poker room, with pros/cons and affiliate CTA. */
export function RoomCard({ room, lang }: { room: Room; lang: Lang }) {
  const copy = room[lang];
  const t = LABELS[lang];

  return (
    <article className={styles.roomCard}>
      <div className={styles.roomCardHead}>
        <h3 className={styles.roomName}>{room.name}</h3>
        <span className={styles.roomNetwork}>{room.network}</span>
      </div>
      <p className={styles.roomTagline}>{copy.tagline}</p>

      <div className={styles.bonusBox}>
        <p className={styles.bonusHeadline}>{copy.bonus}</p>
        <p className={styles.bonusFine}>{copy.bonusDetail}</p>
      </div>

      <div className={styles.metaGrid}>
        <div>
          <span className={styles.metaLabel}>{t.rakeback}</span>
          <p className={styles.metaValue}>{copy.rakeback}</p>
        </div>
        <div>
          <span className={styles.metaLabel}>{t.latam}</span>
          <p className={styles.metaValue}>{copy.latam}</p>
        </div>
      </div>

      <div className={styles.prosCons}>
        <div>
          <p className={styles.prosTitle}>{t.pros}</p>
          <ul className={styles.prosList}>
            {copy.pros.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className={styles.consTitle}>{t.cons}</p>
          <ul className={styles.consList}>
            {copy.cons.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.cardFoot}>
        <p className={styles.bestFor}>
          <strong>{t.bestFor}:</strong> {copy.bestFor}
        </p>
        <CtaLink roomKey={room.key} lang={lang} />
      </div>
    </article>
  );
}
