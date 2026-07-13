import { isPending, roomUrl, type Lang, type RoomKey } from "@/lib/affiliates";
import styles from "./affiliate.module.css";

/**
 * Affiliate CTA anchor. While the tracking link is PENDING it renders a
 * non-clickable "coming soon" state; once lib/affiliates.ts has a real URL
 * it becomes a rel="sponsored noopener nofollow" link opening in a new tab.
 *
 * Every CTA carries an adjacent "18+ | T&Cs apply" line so age/significant-terms
 * wording sits next to the offer (ad-standards proximity expectation), not just
 * in the page-bottom responsible-gambling strip.
 */
export function CtaLink({
  roomKey,
  lang,
  small = false,
  label,
}: {
  roomKey: RoomKey;
  lang: Lang;
  small?: boolean;
  label?: string;
}) {
  const sizeClass = small ? ` ${styles.ctaSm}` : "";
  const terms =
    lang === "es" ? "18+ | Se aplican términos" : "18+ | T&Cs apply";

  if (isPending(roomKey)) {
    const pendingText =
      lang === "es" ? "Muy pronto — enlace pendiente" : "Coming soon — link pending";
    return (
      <span className={styles.ctaWrap}>
        <span className={styles.ctaPending + sizeClass} aria-disabled="true">
          {pendingText}
        </span>
        <span className={styles.ctaTerms}>{terms}</span>
      </span>
    );
  }

  const text = label ?? (lang === "es" ? "Visitar la sala" : "Visit room");
  return (
    <span className={styles.ctaWrap}>
      <a
        className={styles.ctaBtn + sizeClass}
        href={roomUrl(roomKey)}
        rel="sponsored noopener nofollow"
        target="_blank"
      >
        {text}
      </a>
      <span className={styles.ctaTerms}>{terms}</span>
    </span>
  );
}
