export type Locale = "en" | "es";

export const requiredSections = [
  "news",
  "live",
  "strategy",
  "learn",
  "videos",
  "offers",
] as const;

export type SectionKey = (typeof requiredSections)[number];

export type NavItem = {
  key: SectionKey;
  label: string;
  href: string;
};

export type Story = {
  slug: string;
  locale: Locale;
  category: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingMinutes: number;
  isArchive: boolean;
};

const englishLabels: Record<SectionKey, string> = {
  news: "News",
  live: "Live Poker",
  strategy: "Strategy",
  learn: "Learn",
  videos: "Videos",
  offers: "Offers",
};

const spanishLabels: Record<SectionKey, string> = {
  news: "Noticias",
  live: "Poker en Vivo",
  strategy: "Estrategia",
  learn: "Aprender",
  videos: "Videos",
  offers: "Ofertas",
};

export const sectionSegments: Record<Locale, Record<SectionKey, string>> = {
  en: {
    news: "news",
    live: "live-poker",
    strategy: "strategy",
    learn: "learn",
    videos: "videos",
    offers: "offers",
  },
  es: {
    news: "noticias",
    live: "poker-en-vivo",
    strategy: "estrategia",
    learn: "aprender",
    videos: "videos",
    offers: "ofertas",
  },
};

const createNav = (
  locale: Locale,
  labels: Record<SectionKey, string>,
): NavItem[] =>
  requiredSections.map((key) => ({
    key,
    label: labels[key],
    href: `/${locale}/${sectionSegments[locale][key]}`,
  }));

const sectionRecord = (labels: Record<SectionKey, string>) =>
  Object.fromEntries(
    requiredSections.map((key) => [key, { title: labels[key] }]),
  ) as Record<SectionKey, { title: string }>;

export const localeContent = {
  en: {
    nav: createNav("en", englishLabels),
    sections: sectionRecord(englishLabels),
    lead: "Poker has stories. Entrepoker brings you inside them.",
    sublead:
      "Independent poker news, strategy, video and tournament culture in English and Spanish.",
  },
  es: {
    nav: createNav("es", spanishLabels),
    sections: sectionRecord(spanishLabels),
    lead: "El póker tiene historias. Entrepoker te lleva dentro de ellas.",
    sublead:
      "Noticias, estrategia, video y cultura de torneos en español e inglés.",
  },
} satisfies Record<
  Locale,
  {
    nav: NavItem[];
    sections: Record<SectionKey, { title: string }>;
    lead: string;
    sublead: string;
  }
>;

export const archiveStories: Story[] = [
  {
    slug: "entrepoker-independent-poker-guide",
    locale: "es",
    category: "Desde el Archivo",
    title: "EntrePoker: una guía independiente para jugadores",
    summary:
      "La misión original de Entrepoker fue reunir noticias, torneos, estrategia y contenidos útiles para la comunidad.",
    publishedAt: "2013-05-30",
    readingMinutes: 3,
    isArchive: true,
  },
  {
    slug: "entrepoker-independent-poker-guide",
    locale: "en",
    category: "From the Archive",
    title: "EntrePoker: an independent guide for poker players",
    summary:
      "Entrepoker's original mission brought together news, tournaments, strategy and useful community coverage.",
    publishedAt: "2013-05-30",
    readingMinutes: 3,
    isArchive: true,
  },
];
