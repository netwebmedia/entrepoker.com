import { AffiliateRail } from "./affiliate";
import { SiteShell } from "./site-shell";
import { StoryCard } from "./story-card";
import {
  archiveStories,
  localeContent,
  type Locale,
  type Story,
} from "../lib/content";
import { localizedSectionPath } from "../lib/i18n";

const launchStories: Record<Locale, Story[]> = {
  en: [
    {
      slug: "entrepoker-is-back",
      locale: "en",
      category: "Entrepoker",
      title: "Entrepoker is back",
      summary:
        "A bilingual home for poker news, strategy, video and tournament culture.",
      publishedAt: "2026-07-13",
      readingMinutes: 3,
      isArchive: false,
    },
    {
      slug: "latin-american-poker-stories",
      locale: "en",
      category: "Community",
      title: "Latin American poker stories deserve a global stage",
      summary:
        "The players, events and ideas shaping the game across the region.",
      publishedAt: "2026-07-13",
      readingMinutes: 4,
      isArchive: false,
    },
    {
      slug: "thinking-through-the-river",
      locale: "en",
      category: "Strategy",
      title: "Better decisions begin before the river",
      summary:
        "A practical framework for evaluating pressure, position and the story a hand tells.",
      publishedAt: "2026-07-13",
      readingMinutes: 5,
      isArchive: false,
    },
  ],
  es: [
    {
      slug: "entrepoker-regresa",
      locale: "es",
      category: "Entrepoker",
      title: "Entrepoker regresa",
      summary:
        "Un hogar bilingüe para noticias, estrategia, video y cultura de torneos.",
      publishedAt: "2026-07-13",
      readingMinutes: 3,
      isArchive: false,
    },
    {
      slug: "historias-poker-latinoamerica",
      locale: "es",
      category: "Comunidad",
      title:
        "Las historias del póker latinoamericano merecen un escenario global",
      summary:
        "Los jugadores, eventos e ideas que están dando forma al juego en la región.",
      publishedAt: "2026-07-13",
      readingMinutes: 4,
      isArchive: false,
    },
    {
      slug: "decisiones-antes-del-river",
      locale: "es",
      category: "Estrategia",
      title: "Las mejores decisiones empiezan antes del river",
      summary:
        "Un marco práctico para evaluar presión, posición y la historia que cuenta una mano.",
      publishedAt: "2026-07-13",
      readingMinutes: 5,
      isArchive: false,
    },
  ],
};

export function HomePage({ locale }: { locale: Locale }) {
  const copy = localeContent[locale];
  const archive = archiveStories.filter((story) => story.locale === locale);

  return (
    <SiteShell locale={locale}>
      <section className="hero-grid" aria-labelledby="home-title">
        <div className="lead-panel">
          <span className="eyebrow">ENTREPOKER</span>
          <h1 id="home-title">{copy.lead}</h1>
          <p>{copy.sublead}</p>
          <a className="lead-cta" href={localizedSectionPath(locale, "news")}>
            {locale === "en" ? "Enter the newsroom" : "Entrar a la redacción"}
          </a>
        </div>
        <div className="secondary-stories">
          {launchStories[locale].slice(0, 2).map((story) => (
            <StoryCard key={story.slug} story={story} variant="compact" />
          ))}
        </div>
        <AffiliateRail locale={locale} />
      </section>

      <section aria-labelledby="top-stories-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{locale === "en" ? "LATEST" : "LO ÚLTIMO"}</span>
            <h2 id="top-stories-title">
              {locale === "en" ? "Top Stories" : "Historias Destacadas"}
            </h2>
          </div>
          <a href={localizedSectionPath(locale, "news")}>
            {locale === "en" ? "View all" : "Ver todo"}
          </a>
        </div>
        <div className="story-grid">
          {launchStories[locale].map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>

      <section className="affiliate-spotlight">
        <div>
          <span className="eyebrow">
            {locale === "en" ? "COMMERCIAL" : "COMERCIAL"}
          </span>
          <strong>
            {locale === "en" ? "Partner placement" : "Espacio para socio"}
          </strong>
        </div>
        <p>
          {locale === "en"
            ? "Affiliate disclosure: commercial links appear only after review."
            : "Divulgación de afiliados: los enlaces comerciales aparecen solo después de revisión."}
        </p>
      </section>

      <section aria-labelledby="archive-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">2013</span>
            <h2 id="archive-title">
              {locale === "en" ? "From the Archive" : "Desde el Archivo"}
            </h2>
          </div>
        </div>
        <div className="story-grid story-grid--archive">
          {archive.map((story) => (
            <StoryCard
              key={`${story.locale}-${story.slug}`}
              story={story}
              variant="archive"
            />
          ))}
          <div className="archive-note">
            <strong>
              {locale === "en"
                ? "The original mission, renewed"
                : "La misión original, renovada"}
            </strong>
            <p>
              {locale === "en"
                ? "Independent coverage, useful guides and the stories that connect the poker community."
                : "Cobertura independiente, guías útiles y las historias que conectan a la comunidad del póker."}
            </p>
          </div>
        </div>
      </section>

      <section className="social-panel">
        <div>
          <span className="eyebrow">COMMUNITY</span>
          <h2>
            {locale === "en"
              ? "The original community, reconnected"
              : "La comunidad original, reconectada"}
          </h2>
        </div>
        <a href="https://www.facebook.com/entrepoker">Facebook</a>
        <span className="recovery-state">
          {locale === "en"
            ? "YouTube recovery in progress"
            : "Recuperación de YouTube en curso"}
        </span>
      </section>

      <section className="editorial-pillars">
        <div>
          <span>01</span>
          <h2>{locale === "en" ? "Strategy" : "Estrategia"}</h2>
          <p>
            {locale === "en"
              ? "Clear thinking for every stage of the game."
              : "Decisiones claras para cada etapa del juego."}
          </p>
        </div>
        <div>
          <span>02</span>
          <h2>{locale === "en" ? "Learn" : "Aprender"}</h2>
          <p>
            {locale === "en"
              ? "Rules, concepts and responsible play."
              : "Reglas, conceptos y juego responsable."}
          </p>
        </div>
        <div>
          <span>03</span>
          <h2>{locale === "en" ? "Culture" : "Cultura"}</h2>
          <p>
            {locale === "en"
              ? "The personalities and places behind the game."
              : "Las personalidades y lugares detrás del juego."}
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
