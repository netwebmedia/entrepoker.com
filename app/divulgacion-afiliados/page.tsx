import type { Metadata } from "next";
import { AffiliateShell } from "@/components/affiliate/AffiliateShell";
import styles from "@/components/affiliate/affiliate.module.css";

export const metadata: Metadata = {
  title: "Divulgación de Afiliados | EntrePoker",
  description:
    "Cómo gana dinero EntrePoker: comisiones de afiliado de las salas de poker, explicadas en lenguaje simple — y qué cambia (y qué no) en nuestras reseñas.",
  alternates: {
    canonical: "https://entrepoker.com/divulgacion-afiliados",
    languages: {
      en: "https://entrepoker.com/affiliate-disclosure",
      es: "https://entrepoker.com/divulgacion-afiliados",
      "x-default": "https://entrepoker.com/affiliate-disclosure",
    },
  },
};

export default function DivulgacionAfiliadosPage() {
  return (
    <AffiliateShell
      lang="es"
      altHref="/affiliate-disclosure"
      altLabel="English version"
      showDisclosure={false}
    >
      <div className={styles.hero}>
        <p className={styles.kicker}>Transparencia</p>
        <h1 className={styles.h1}>Divulgación de Afiliados</h1>
        <p className={styles.lead}>
          Lenguaje simple, sin letra chica: así es como EntrePoker gana
          dinero, y esto es lo que eso cambia — y lo que no cambia — en lo que
          publicamos.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>Cómo ganamos</h2>
        <div className={styles.prose}>
          <p>
            EntrePoker puede recibir una comisión cuando te registras o
            depositas en una sala de poker a través de los enlaces de este
            sitio. Son los llamados enlaces de afiliado. Registrarte a través
            de ellos no te cuesta nada extra: la sala nos paga desde su propio
            presupuesto de marketing, y el bono que recibes es el mismo que
            está disponible registrándote directamente en la sala.
          </p>
          <p>
            Los enlaces de afiliado de este sitio están marcados con{" "}
            <code>rel=&quot;sponsored&quot;</code> en el código de la página, y
            las páginas que los contienen muestran una nota de divulgación
            visible que enlaza aquí.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Lo que las comisiones no compran</h2>
        <div className={styles.prose}>
          <ul>
            <li>
              <strong>Posiciones.</strong> Ninguna sala puede pagar para subir
              en nuestras comparativas o reseñas.
            </li>
            <li>
              <strong>Silencio sobre los contras.</strong> Cada reseña de este
              sitio lista los contras junto a los pros: tasas de liberación,
              ventanas de tiempo, requisitos de apuestas de casino — lo que
              diga la letra chica de verdad.
            </li>
            <li>
              <strong>Números inventados.</strong> Si no pudimos verificar una
              cifra de bono, no la publicamos — te pedimos revisar los
              términos vigentes de la sala.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Lo que te pedimos a ti</h2>
        <div className={styles.prose}>
          <p>
            Los términos de los bonos cambian, y las salas actualizan sus
            ofertas sin avisarnos. Confirma siempre los términos vigentes en
            el sitio oficial de la sala antes de depositar. Y hagas lo que
            hagas, juega dentro de tus posibilidades — visita nuestra página
            de <a href="/juego-responsable">juego responsable</a> (
            <a href="/responsible-gambling">also in English</a>).
          </p>
        </div>
      </section>
    </AffiliateShell>
  );
}
