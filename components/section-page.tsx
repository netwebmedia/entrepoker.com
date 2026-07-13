import { SiteShell } from "./site-shell";
import type { Locale } from "../lib/content";
import type { PageSection } from "../lib/i18n";

type SectionContent = {
  eyebrow: string;
  title: string;
  body: string;
};

export const sectionContent: Record<
  Locale,
  Record<PageSection, SectionContent>
> = {
  en: {
    news: {
      eyebrow: "EDITORIAL DESK",
      title: "News",
      body: "Entrepoker is rebuilding an independent bilingual newsroom for the stories, people and decisions shaping poker.",
    },
    live: {
      eyebrow: "TOURNAMENTS",
      title: "Live Poker",
      body: "Major tours, Latin American events and tournament culture—curated by the Entrepoker editorial desk rather than presented as an automated live feed.",
    },
    strategy: {
      eyebrow: "THINK CLEARLY",
      title: "Strategy",
      body: "Practical frameworks for better decisions, from first principles to final-table pressure.",
    },
    learn: {
      eyebrow: "START HERE",
      title: "Learn",
      body: "Clear rules, essential concepts and responsible habits for players building a durable understanding of the game.",
    },
    videos: {
      eyebrow: "WATCH",
      title: "Videos",
      body: "The original Entrepoker YouTube channel is being recovered. A verified channel will appear here only after ownership and the live URL are confirmed.",
    },
    offers: {
      eyebrow: "COMMERCIAL",
      title: "Offers",
      body: "No partner offers are active. Reviewed offers will include clear terms, affiliate disclosure and jurisdiction guidance before publication.",
    },
    about: {
      eyebrow: "SINCE THE ORIGINAL ENTREPOKER",
      title: "About Entrepoker",
      body: "Entrepoker was created as an independent guide for online and live poker players, bringing together news, original coverage, tournaments, strategy and community. The new Entrepoker renews that mission for a bilingual global audience.",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Talk to Entrepoker",
      body: "Editorial tips, archive material and partnership enquiries can be sent to entrepoker@gmail.com.",
    },
    "affiliate-disclosure": {
      eyebrow: "TRANSPARENCY",
      title: "Affiliate disclosure",
      body: "Entrepoker may earn compensation from reviewed affiliate links. Commercial relationships do not guarantee winnings, eligibility or availability. Editorial coverage and commercial placements remain visibly distinct.",
    },
    "responsible-play": {
      eyebrow: "PLAY WITH PERSPECTIVE",
      title: "Responsible play",
      body: "Poker content is for adults of legal age in your jurisdiction. Set limits, never chase losses and seek help if play stops being recreational. Entrepoker does not operate a poker room.",
    },
    privacy: {
      eyebrow: "YOUR DATA",
      title: "Privacy",
      body: "Entrepoker does not sell personal information. Analytics, newsletter services and their data practices will be documented here before activation.",
    },
    terms: {
      eyebrow: "TERMS",
      title: "Terms of use",
      body: "Editorial information is provided without a promise of financial results. Visitors are responsible for confirming local laws, legal age and partner eligibility.",
    },
  },
  es: {
    news: {
      eyebrow: "MESA EDITORIAL",
      title: "Noticias",
      body: "Entrepoker está reconstruyendo una redacción bilingüe e independiente para las historias, personas y decisiones que dan forma al póker.",
    },
    live: {
      eyebrow: "TORNEOS",
      title: "Póker en Vivo",
      body: "Grandes circuitos, eventos latinoamericanos y cultura de torneos, curados por la redacción de Entrepoker y no presentados como una señal automatizada en vivo.",
    },
    strategy: {
      eyebrow: "PIENSA CLARO",
      title: "Estrategia",
      body: "Marcos prácticos para tomar mejores decisiones, desde los fundamentos hasta la presión de una mesa final.",
    },
    learn: {
      eyebrow: "COMIENZA AQUÍ",
      title: "Aprender",
      body: "Reglas claras, conceptos esenciales y hábitos responsables para construir una comprensión duradera del juego.",
    },
    videos: {
      eyebrow: "MIRA",
      title: "Videos",
      body: "El canal original de YouTube de Entrepoker está en proceso de recuperación. Solo aparecerá aquí después de confirmar la propiedad y su dirección activa.",
    },
    offers: {
      eyebrow: "COMERCIAL",
      title: "Ofertas",
      body: "No hay ofertas activas. Antes de publicarse, cada oferta revisada incluirá términos claros, divulgación de afiliados y orientación por jurisdicción.",
    },
    about: {
      eyebrow: "DESDE EL ENTREPOKER ORIGINAL",
      title: "Acerca de Entrepoker",
      body: "Entrepoker nació como una guía independiente para jugadores de póker online y en vivo, reuniendo noticias, cobertura original, torneos, estrategia y comunidad. El nuevo Entrepoker renueva esa misión para una audiencia global bilingüe.",
    },
    contact: {
      eyebrow: "CONTACTO",
      title: "Hablemos",
      body: "Puedes enviar noticias, material del archivo y consultas comerciales a entrepoker@gmail.com.",
    },
    "affiliate-disclosure": {
      eyebrow: "TRANSPARENCIA",
      title: "Divulgación de afiliados",
      body: "Entrepoker puede recibir compensación por enlaces de afiliado revisados. Las relaciones comerciales no garantizan ganancias, elegibilidad ni disponibilidad. La cobertura editorial y los espacios comerciales permanecen claramente separados.",
    },
    "responsible-play": {
      eyebrow: "JUEGA CON PERSPECTIVA",
      title: "Juego responsable",
      body: "El contenido de póker está dirigido a adultos con edad legal en su jurisdicción. Define límites, nunca persigas pérdidas y busca ayuda si el juego deja de ser recreativo. Entrepoker no opera una sala de póker.",
    },
    privacy: {
      eyebrow: "TUS DATOS",
      title: "Privacidad",
      body: "Entrepoker no vende información personal. Los servicios de analítica, boletín y sus prácticas de datos se documentarán aquí antes de activarse.",
    },
    terms: {
      eyebrow: "TÉRMINOS",
      title: "Términos de uso",
      body: "La información editorial se ofrece sin promesa de resultados financieros. Cada visitante debe confirmar las leyes locales, la edad legal y su elegibilidad para ofertas.",
    },
  },
};

export function SectionPage({
  locale,
  section,
}: {
  locale: Locale;
  section: PageSection;
}) {
  const copy = sectionContent[locale][section];

  return (
    <SiteShell locale={locale} section={section}>
      <article className="section-page">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1>{copy.title}</h1>
        <p>{copy.body}</p>
        {section === "contact" ? (
          <a className="lead-cta" href="mailto:entrepoker@gmail.com">
            entrepoker@gmail.com
          </a>
        ) : null}
      </article>
    </SiteShell>
  );
}
