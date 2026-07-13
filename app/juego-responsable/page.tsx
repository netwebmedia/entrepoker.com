import type { Metadata } from "next";
import { AffiliateShell } from "@/components/affiliate/AffiliateShell";
import styles from "@/components/affiliate/affiliate.module.css";

export const metadata: Metadata = {
  title: "Juego Responsable | EntrePoker",
  description:
    "El poker debe seguir siendo un juego. Solo mayores de 18, límites de bankroll, señales de alerta, herramientas de autoexclusión y dónde pedir ayuda.",
  alternates: {
    canonical: "https://entrepoker.com/juego-responsable",
    languages: {
      en: "https://entrepoker.com/responsible-gambling",
      es: "https://entrepoker.com/juego-responsable",
      "x-default": "https://entrepoker.com/responsible-gambling",
    },
  },
};

export default function JuegoResponsablePage() {
  return (
    <AffiliateShell
      lang="es"
      altHref="/responsible-gambling"
      altLabel="English version"
      showDisclosure={false}
    >
      <div className={styles.hero}>
        <p className={styles.kicker}>Seguridad del Jugador</p>
        <h1 className={styles.h1}>Juego Responsable</h1>
        <p className={styles.lead}>
          El poker es un juego de habilidad que se juega con dinero real, y el
          dinero real implica riesgo real. En EntrePoker cubrimos salas de
          poker y sus ofertas, pero nada de lo que publicamos debería
          empujarte a jugar más allá de tus posibilidades. Esta página es el
          contrapeso honesto de cada bono que aparece en este sitio.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>Solo mayores de 18</h2>
        <div className={styles.prose}>
          <p>
            El poker con dinero real es para adultos de{" "}
            <strong>18 años o más</strong> (o la edad que exijan las reglas de
            tu país). Las salas grandes verifican identidad y edad como parte
            del proceso de retiro — espera que te pidan documentos antes de
            poder cobrar. Si tienes menos de 18 años, las reseñas de salas de
            este sitio no son para ti.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Reglas de bankroll para que el poker siga siendo entretención</h2>
        <div className={styles.prose}>
          <ul>
            <li>
              <strong>Juega solo con dinero que puedas permitirte perder.</strong>{" "}
              Tu bankroll de poker debe estar completamente separado del
              arriendo, la comida, los ahorros y la plata de la familia.
            </li>
            <li>
              <strong>Fija un límite de depósito antes de depositar.</strong>{" "}
              Decide el monto mensual cuando estés tranquilo, no en plena
              mesa. La mayoría de las salas permite fijar límites de depósito
              en la configuración de la cuenta.
            </li>
            <li>
              <strong>Nunca persigas las pérdidas.</strong> Subir de stakes
              para «recuperarla» es la forma en que una mala sesión se
              convierte en un mal mes.
            </li>
            <li>
              <strong>Ponte límites de tiempo por sesión.</strong> El
              cansancio hace que todos jueguen peor. Define tu hora de parar
              antes de sentarte.
            </li>
            <li>
              <strong>Trata los bonos como un extra, no como ingreso.</strong>{" "}
              Ningún bono de bienvenida justifica depositar más de lo que
              tenías planeado.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Señales de alerta</h2>
        <div className={styles.prose}>
          <p>Considera tomar un descanso — o pedir ayuda — si notas que:</p>
          <ul>
            <li>Juegas con plata destinada a gastos esenciales</li>
            <li>Escondes cuánto juegas o cuánto pierdes a las personas cercanas</li>
            <li>Persigues las pérdidas o pides prestado para jugar</li>
            <li>Te sientes ansioso, irritable o decaído cuando no estás jugando</li>
            <li>Juegas para escapar de los problemas y no por diversión</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Autoexclusión y límites de cuenta</h2>
        <div className={styles.prose}>
          <p>
            Las salas grandes ofrecen herramientas de protección a nivel de
            cuenta como límites de depósito, recordatorios de sesión, períodos
            de pausa y la <strong>autoexclusión</strong>, que bloquea tu
            cuenta por el período que elijas o de forma permanente. Revisa la
            configuración de juego responsable de tu sala para confirmar
            exactamente qué herramientas ofrece. Si el poker dejó de sentirse
            como una elección, úsalas — existen exactamente para ese momento,
            y los equipos de soporte las aplican si las pides.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Dónde pedir ayuda</h2>
        <div className={styles.prose}>
          <p>Hay ayuda gratuita y confidencial disponible:</p>
          <ul>
            <li>
              <a href="https://www.jugarbien.es" rel="noopener" target="_blank">
                jugarbien.es
              </a>{" "}
              — recurso de juego responsable en español
            </li>
            <li>
              <a
                href="https://www.gamblersanonymous.org"
                rel="noopener"
                target="_blank"
              >
                Gamblers Anonymous
              </a>{" "}
              — reuniones gratuitas de apoyo entre pares, presenciales y en
              línea, en todo el mundo
            </li>
            <li>
              <a
                href="https://www.begambleaware.org"
                rel="noopener"
                target="_blank"
              >
                BeGambleAware
              </a>{" "}
              — información, herramientas de autoevaluación y servicios de
              apoyo (en inglés)
            </li>
          </ul>
          <p>
            Si el juego te está afectando a ti o a alguien cercano, pedir
            ayuda es la jugada fuerte — no la débil.
          </p>
        </div>
      </section>
    </AffiliateShell>
  );
}
