import type { Lang } from "@/lib/affiliates";
import styles from "./affiliate.module.css";

/**
 * 18+ / responsible-gambling strip. Included in the affiliate page shell so
 * every money page carries it.
 */
export function PlayResponsibly({ lang }: { lang: Lang }) {
  if (lang === "es") {
    return (
      <div className={styles.rgStrip}>
        <span className={styles.rgBadge}>18+</span>
        <p className={styles.rgText}>
          El poker con dinero real es solo para mayores de 18 años. Juega con
          límites y nunca con dinero que no puedas permitirte perder. Si el
          juego dejó de ser un pasatiempo, busca ayuda:{" "}
          <a href="https://www.jugarbien.es" rel="noopener" target="_blank">
            jugarbien.es
          </a>
          ,{" "}
          <a
            href="https://www.gamblersanonymous.org"
            rel="noopener"
            target="_blank"
          >
            Gamblers Anonymous
          </a>{" "}
          o{" "}
          <a href="https://www.begambleaware.org" rel="noopener" target="_blank">
            BeGambleAware
          </a>
          . Más información en nuestra página de{" "}
          <a href="/juego-responsable">juego responsable</a>.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.rgStrip}>
      <span className={styles.rgBadge}>18+</span>
      <p className={styles.rgText}>
        Real-money poker is for adults 18 and over. Set limits and never play
        with money you can&apos;t afford to lose. If gambling has stopped being
        fun, help is available:{" "}
        <a href="https://www.begambleaware.org" rel="noopener" target="_blank">
          BeGambleAware
        </a>{" "}
        and{" "}
        <a
          href="https://www.gamblersanonymous.org"
          rel="noopener"
          target="_blank"
        >
          Gamblers Anonymous
        </a>
        . Learn more on our{" "}
        <a href="/responsible-gambling">responsible gambling</a> page.
      </p>
    </div>
  );
}
