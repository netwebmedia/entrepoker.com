import type { Lang } from "@/lib/affiliates";
import styles from "./affiliate.module.css";

/** One-line affiliate disclosure linking to the full /affiliate-disclosure page. */
export function AffiliateDisclosureNote({ lang }: { lang: Lang }) {
  if (lang === "es") {
    return (
      <p className={styles.disclosureNote}>
        Divulgación: EntrePoker puede recibir una comisión si te registras en
        una sala a través de nuestros enlaces. Esto no afecta nuestras reseñas
        ni el orden en que presentamos las salas.{" "}
        <a href="/divulgacion-afiliados">Lee la divulgación completa</a>.
      </p>
    );
  }

  return (
    <p className={styles.disclosureNote}>
      Disclosure: EntrePoker may earn a commission if you sign up to a poker
      room through our links. This never affects our reviews or how we rank
      rooms. <a href="/affiliate-disclosure">Read the full disclosure</a>.
    </p>
  );
}
