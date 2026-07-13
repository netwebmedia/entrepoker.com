import type { Metadata } from "next";
import { AffiliateShell } from "@/components/affiliate/AffiliateShell";
import { BonusTable } from "@/components/affiliate/BonusTable";
import { RoomCard } from "@/components/affiliate/RoomCard";
import styles from "@/components/affiliate/affiliate.module.css";
import { ROOMS } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "Mejores Salas de Poker Online en Chile (2026) | EntrePoker",
  description:
    "GGPoker, 888poker y WPT Global aceptan jugadores chilenos en 2026. Compara bonos y rakeback, entiende cómo depositar desde Chile y conoce la situación legal sin vueltas.",
  alternates: {
    canonical: "https://entrepoker.com/mejores-salas-poker-chile",
    languages: {
      en: "https://entrepoker.com/best-poker-sites-chile",
      es: "https://entrepoker.com/mejores-salas-poker-chile",
      "x-default": "https://entrepoker.com/best-poker-sites-chile",
    },
  },
};

const faq: { q: string; a: string }[] = [
  {
    q: "¿Es legal el poker online en Chile?",
    a: "El poker online no está regulado en Chile y no es expresamente legal. La Ley 19.995 (2004) cubre solo los casinos presenciales, y el juego de azar es ilegal por defecto salvo autorización expresa. La Corte Suprema ha resuelto que el juego online es ilegal mientras no lo autorice una ley. En la práctica, las salas extranjeras atienden a jugadores chilenos con licencias internacionales. Esto es información general, no asesoría legal.",
  },
  {
    q: "¿Chile va a regular el poker online?",
    a: "Hay un proyecto de ley integral de regulación del juego online en el Senado, que recibió la máxima urgencia legislativa del gobierno en mayo de 2026. Crearía operadores con licencia (sociedades anónimas cerradas chilenas) bajo una nueva Superintendencia de Casinos, Apuestas y Juegos de Azar. A julio de 2026 todavía no es ley, aunque la industria espera que 2026 pueda ser el año en que se apruebe.",
  },
  {
    q: "¿Puedo tener problemas por jugar poker online desde Chile?",
    a: "A los jugadores no se les persigue en Chile. Los tribunales han ordenado a los proveedores de internet bloquear sitios de apuestas y casino sin licencia, aunque la aplicación de esos bloqueos ha sido dispareja. La presión legal apunta a los operadores, no a los jugadores individuales. Esto es información general, no asesoría legal.",
  },
  {
    q: "¿Pago impuestos por las ganancias de poker en Chile?",
    a: "No existe un impuesto específico para las ganancias de poker en Chile — aplican las reglas generales del impuesto a la renta. Si ganas montos relevantes, conversa tu situación con un contador o asesor tributario chileno.",
  },
  {
    q: "¿Qué salas de poker aceptan jugadores de Chile en 2026?",
    a: "GGPoker (sin restricciones y con cliente en español), 888poker (Chile está en su lista de países aceptados) y WPT Global (disponible de forma explícita en Chile y la mayor parte de Latinoamérica) aceptan jugadores chilenos a julio de 2026. Ten presente que, cuando el proyecto de ley se convierta en ley, los sitios sin licencia podrían entrar en futuras listas de bloqueo de los ISP.",
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

export default function MejoresSalasPokerChilePage() {
  return (
    <AffiliateShell
      lang="es"
      altHref="/best-poker-sites-chile"
      altLabel="English version"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className={styles.hero}>
        <p className={styles.kicker}>Guía Chile · Actualizado julio 2026</p>
        <h1 className={styles.h1}>
          Mejores salas de poker online en Chile (2026)
        </h1>
      </div>

      <div className={styles.answerBox}>
        <p>
          Las mejores salas de poker online para jugadores en Chile en 2026
          son <strong>GGPoker</strong> (uno de los mayores tráficos del mundo,
          cliente en español y cashback de Ocean Rewards de hasta 80%),{" "}
          <strong>888poker</strong> ($8 USD gratis sin depositar, más un bono
          del 100% hasta $1,000) y <strong>WPT Global</strong> (paquete de
          bienvenida de hasta $3,348 USD, disponible de forma explícita en
          Chile y casi toda Latinoamérica). Las tres aceptan jugadores
          chilenos. El poker online no está regulado en Chile — hay un
          proyecto de ley en el Senado — y a los jugadores no se les persigue.
        </p>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>Comparativa de las tres salas</h2>
        <BonusTable lang="es" />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Nuestras elegidas, en detalle</h2>
        {ROOMS.map((room) => (
          <RoomCard key={room.key} room={room} lang="es" />
        ))}
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Cómo depositar desde Chile y Latinoamérica</h2>
        <div className={styles.prose}>
          <p>
            Estas salas suelen manejar las cuentas de los jugadores en dólares
            — confirma las opciones de moneda en el cajero después de
            registrarte — así que jugar desde Chile normalmente implica
            convertir desde pesos en algún punto de la cadena: lo hace tu
            banco o tarjeta, o lo hace el método de pago que elijas en el
            cajero. Algunos consejos prácticos:
          </p>
          <ul>
            <li>
              <strong>Los métodos disponibles cambian según el país.</strong>{" "}
              El cajero de cada sala muestra opciones de depósito distintas
              según desde dónde te registres. Revísalo apenas crees tu cuenta
              — antes de armar un bankroll en torno a un método específico — y
              confirma las opciones vigentes en el sitio de la sala.
            </li>
            <li>
              <strong>Los retiros merecen la misma revisión.</strong> El
              método con que depositas suele determinar cómo puedes retirar.
              Confirma la ruta de retiro desde Chile antes de hacer un
              depósito grande.
            </li>
            <li>
              <strong>Fíjate en el tipo de cambio, no solo en el bono.</strong>{" "}
              Un porcentaje perdido en conversión de moneda en cada depósito y
              cada retiro se acumula. Compara lo que cobra tu banco contra las
              opciones del cajero de la sala.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>
          ¿Es legal el poker online en Chile? Respuestas sin vueltas
        </h2>
        <div className={styles.prose}>
          <p>
            La versión corta: no está regulado, a los jugadores no se les
            persigue, y hay un proyecto de ley avanzando en el Senado. Los
            detalles importan, así que aquí van — como información general, no
            como asesoría legal.
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
        ¿Quieres las reseñas completas? Lee nuestras{" "}
        <a href="/salas">reseñas de salas de poker 2026</a> — o{" "}
        <a href="/best-poker-sites-chile">read this guide in English</a>.
      </p>
    </AffiliateShell>
  );
}
