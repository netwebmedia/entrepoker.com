import type { Metadata } from "next";
import { AffiliateShell } from "@/components/affiliate/AffiliateShell";
import { BonusTable } from "@/components/affiliate/BonusTable";
import { RoomCard } from "@/components/affiliate/RoomCard";
import styles from "@/components/affiliate/affiliate.module.css";
import { getRoom } from "@/lib/affiliates";

export const metadata: Metadata = {
  title:
    "Mejores Salas de Poker Online 2026 — GGPoker, 888poker y WPT Global | EntrePoker",
  description:
    "Reseñas honestas 2026 de GGPoker, 888poker y WPT Global: bonos de bienvenida, rakeback de Ocean Rewards, disponibilidad en Chile y Latinoamérica, pros y contras.",
  alternates: {
    canonical: "https://entrepoker.com/salas",
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
  headline: "Mejores Salas de Poker Online 2026 — GGPoker, 888poker y WPT Global",
  description:
    "Reseñas independientes de las tres salas que cubrimos: mecánica de los bonos de bienvenida, programas de recompensas y disponibilidad para jugadores de Chile y Latinoamérica.",
  inLanguage: "es",
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
  author: { "@type": "Organization", name: "EntrePoker" },
  publisher: { "@type": "Organization", name: "EntrePoker" },
  mainEntityOfPage: "https://entrepoker.com/salas",
};

export default function SalasPage() {
  const gg = getRoom("ggpoker");
  const p888 = getRoom("poker888");
  const wpt = getRoom("wptglobal");

  return (
    <AffiliateShell lang="es" altHref="/rooms" altLabel="English version">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className={styles.hero}>
        <p className={styles.kicker}>Reseñas · Actualizado julio 2026</p>
        <h1 className={styles.h1}>Mejores salas de poker online 2026</h1>
        <p className={styles.lead}>
          Estas son las tres salas que recomendamos a quienes juegan desde
          Chile y el resto de Latinoamérica: <strong>GGPoker</strong>,{" "}
          <strong>888poker</strong> y <strong>WPT Global</strong>. Cada cifra
          de bono fue verificada en julio de 2026 contra la oferta vigente de
          cada sala. Cuando un dato cambia seguido, lo decimos sin rodeos y te
          pedimos revisar los términos en el sitio oficial en vez de
          inventarte un número.
        </p>
        <p className={styles.lead}>
          Ninguna sala pagó por su posición en esta página, y no publicamos
          bonos que no pudimos verificar.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>Comparativa rápida</h2>
        <BonusTable lang="es" />
      </section>

      <section className={styles.section} id="ggpoker">
        <h2 className={styles.h2}>Reseña de GGPoker</h2>
        <div className={styles.prose}>
          <p>
            GGPoker es el corazón de la red GGNetwork y concentra uno de los
            mayores volúmenes de tráfico y calendarios de torneos del poker
            online. Para un jugador en Chile eso se traduce en algo muy
            concreto: hay mesas activas a toda hora en tu huso horario, en
            todos los niveles de buy-in, y el cliente está disponible en
            español.
          </p>
          <h3 className={styles.h3}>Cómo funciona el bono de bienvenida</h3>
          <p>
            Al registrarte eliges entre dos ofertas. La ruta clásica es el{" "}
            <strong>bono del 100% hasta $600 USD</strong>: se libera a razón
            de $1 por cada $5 de rake neto, puedes recargar tu depósito
            durante 60 días y tienes 90 días para liberarlo completo. La
            alternativa es un <strong>paquete de $100 en recompensas</strong>{" "}
            pagado en tickets — conviene más si juegas poco volumen y sabes
            que no vas a generar el rake necesario para liberar un bono
            grande.
          </p>
          <h3 className={styles.h3}>Programa de recompensas: Ocean Rewards</h3>
          <p>
            El 30 de enero de 2026, GGPoker reemplazó su histórico Fish Buffet
            por <strong>Ocean Rewards</strong>. La estructura: 100 puntos por
            cada $1 de rake, un cashback base de 16% que escala hasta un
            máximo de 80%, y cobro semanal cada lunes. Un detalle importante
            antes de comprometerte: tu nivel queda fijo por un año una vez
            asignado, así que el programa premia el volumen constante.
          </p>
          <h3 className={styles.h3}>Jugar desde Chile y Latinoamérica</h3>
          <p>
            GGPoker acepta jugadores chilenos sin restricciones y atiende a la
            mayor parte de Latinoamérica. Los depósitos y retiros se gestionan
            desde el cajero del cliente; los métodos disponibles varían según
            el país, así que revísalos después de registrarte.
          </p>
        </div>
        <RoomCard room={gg} lang="es" />
      </section>

      <section className={styles.section} id="888poker">
        <h2 className={styles.h2}>Reseña de 888poker</h2>
        <div className={styles.prose}>
          <p>
            888poker opera en su propia red independiente y lleva décadas en
            el poker online. Su gran diferencial en 2026 sigue siendo el mismo
            de siempre: una oferta sin depósito de verdad, algo que casi
            ninguna otra sala grande mantiene.
          </p>
          <h3 className={styles.h3}>Cómo funciona el bono de bienvenida</h3>
          <p>
            Los jugadores nuevos reciben <strong>$8 USD gratis sin
            depositar</strong>, pagados como 40 tickets de $0.10 más 4 tickets
            de $1 — suficiente para sentarte en mesas reales y decidir si la
            sala te gusta antes de arriesgar un peso. Cuando deposites, el
            código <strong>Welcome100</strong> activa un bono del 100% hasta
            $1,000 USD, con 90 días para liberarlo. Si prefieres algo más
            simple, el código <strong>GET30</strong> cambia el bono por $30 de
            juego gratis (seis tickets de $5) sin requisito de liberación.
            Ojo: las ofertas son distintas en el Reino Unido y en los mercados
            regulados de EE. UU.
          </p>
          <h3 className={styles.h3}>Programa de recompensas</h3>
          <p>
            888poker rota sus promociones de cashback y recompensas cada
            cierto tiempo, así que no imprimimos un número que podría quedar
            obsoleto el mes que viene — revisa los términos vigentes en el
            sitio de la sala antes de sumar las recompensas a tus cuentas.
          </p>
          <h3 className={styles.h3}>Jugar desde Chile y Latinoamérica</h3>
          <p>
            Chile figura en la lista de países aceptados de 888poker y la sala
            atiende a la mayor parte de la región. Como con cualquier sala,
            confirma en el cajero qué métodos de depósito aplican a tu país.
          </p>
        </div>
        <RoomCard room={p888} lang="es" />
      </section>

      <section className={styles.section} id="wptglobal">
        <h2 className={styles.h2}>Reseña de WPT Global</h2>
        <div className={styles.prose}>
          <p>
            WPT Global es la sala online del World Poker Tour y es la más
            explícitamente latinoamericana de las tres: su lista de países
            aceptados nombra a Chile junto a Argentina, Bolivia, Ecuador,
            Paraguay, Uruguay, Venezuela, Panamá, Costa Rica y más.
          </p>
          <h3 className={styles.h3}>Cómo funciona el bono de bienvenida</h3>
          <p>
            El paquete vigente — relanzado en marzo de 2026 — vale{" "}
            <strong>hasta $3,348 USD</strong>: un bono del 100% sobre tu
            depósito desde $10 hasta $3,000, más hasta $248 en tickets de
            torneo proporcionales al depósito. Lee bien la estructura de
            liberación antes de depositar el máximo: hasta $1,500 del bono se
            libera jugando poker a $1 por cada $10 de rake y comisiones,
            mientras que la otra mitad se libera con apuestas de casino, todo
            dentro de una ventana de 60 días. Si solo juegas poker, considera
            que la parte realmente liberable es $1,500, no $3,000.
          </p>
          <h3 className={styles.h3}>Programa de recompensas</h3>
          <p>
            WPT Global maneja promociones de recompensas que van rotando —
            revisa los términos de cashback vigentes en el sitio de la sala.
          </p>
          <h3 className={styles.h3}>Jugar desde Chile y Latinoamérica</h3>
          <p>
            Es la sala con la cobertura latinoamericana mejor documentada. Los
            métodos de depósito varían según el país; revisa el cajero para
            ver las opciones disponibles desde Chile.
          </p>
        </div>
        <RoomCard room={wpt} lang="es" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Cómo hacemos nuestras reseñas</h2>
        <div className={styles.prose}>
          <p>
            Verificamos cada cifra de bono contra los términos publicados por
            la sala antes de imprimirla, explicamos la mecánica de liberación
            en vez de quedarnos con el número de portada, y señalamos la letra
            chica que de verdad determina si vas a ver esa plata: tasas de
            liberación, ventanas de tiempo y bloqueos de nivel. Cuando un
            programa cambia demasiado seguido como para citarlo con confianza,
            preferimos decir «revisa los términos vigentes» antes que publicar
            un dato vencido. ¿Juegas desde Chile? Mira nuestra guía dedicada:{" "}
            <a href="/mejores-salas-poker-chile">
              Mejores salas de poker para jugadores en Chile
            </a>
            .
          </p>
        </div>
      </section>
    </AffiliateShell>
  );
}
