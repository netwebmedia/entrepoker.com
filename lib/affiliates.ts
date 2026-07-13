/**
 * EntrePoker — affiliate rooms: single source of truth.
 *
 * When Carlos receives real tracking links, replace `url: "PENDING"` with the
 * affiliate URL for each room. Nothing else needs to change: every CTA across
 * /rooms, /salas, /best-poker-sites-chile and /mejores-salas-poker-chile reads
 * from this file via roomUrl() / isPending().
 *
 * Facts below are verified as of July 2026 (see poker-scout-research notes).
 * Where a detail was not verified, copy says to check current terms on the
 * room's own site — do not invent numbers when editing.
 */

export type RoomKey = "ggpoker" | "poker888" | "wptglobal";

export type Lang = "en" | "es";

export interface RoomCopy {
  /** One-line editorial positioning. */
  tagline: string;
  /** Short headline bonus, table-friendly. */
  bonus: string;
  /** Full welcome-bonus mechanics. */
  bonusDetail: string;
  /** Rakeback / rewards program summary. */
  rakeback: string;
  /** LatAm / Chile availability summary. */
  latam: string;
  /** Editorial "who is this room best for" hint (no scores, no invented data). */
  bestFor: string;
  pros: string[];
  cons: string[];
}

export interface Room {
  key: RoomKey;
  name: string;
  /**
   * Affiliate tracking URL. Keep the literal string "PENDING" until the real
   * link exists — CTAs render a "coming soon" state instead of a live link.
   */
  url: string;
  network: string;
  en: RoomCopy;
  es: RoomCopy;
}

export const ROOMS: Room[] = [
  {
    key: "ggpoker",
    name: "GGPoker",
    url: "PENDING",
    network: "GGNetwork",
    en: {
      tagline:
        "One of the largest online poker rooms, with a rewards program rebuilt in early 2026.",
      bonus: "100% match up to $600 — or $100 in rewards",
      bonusDetail:
        "New players choose one of two offers: a 100% first-deposit match up to $600, or a $100 rewards package paid out in tickets. The match releases at $1 for every $5 of net rake you generate, top-up deposits count toward it for 60 days, and you have 90 days to clear the full amount.",
      rakeback:
        "Ocean Rewards — 16% base cashback scaling up to a maximum of 80%. It replaced the old Fish Buffet program on January 30, 2026: you earn 100 points per $1 of rake, cashback is collected weekly on Mondays, and your tier is locked in for a year once set.",
      latam:
        "Accepts players from Chile without restriction and offers a Spanish-language client. Available across most of Latin America.",
      bestFor:
        "Tournament players and grinders who want huge fields and one of the highest rakeback ceilings around.",
      pros: [
        "Enormous player pool and tournament schedule at every buy-in level",
        "Ocean Rewards pays up to 80% cashback, collected weekly",
        "Spanish-language client and unrestricted access from Chile",
        "Deposit match tops up for 60 days, so you don't have to commit everything on day one",
      ],
      cons: [
        "The $600 match clears against net rake ($1 per $5), so casual players may not unlock all of it",
        "Your Ocean Rewards tier is locked for a full year once assigned",
        "The client is feature-dense and can feel busy for first-time players",
      ],
    },
    es: {
      tagline:
        "Una de las salas de poker online más grandes del mundo, con un programa de recompensas renovado a comienzos de 2026.",
      bonus: "100% hasta $600 USD — o $100 en recompensas",
      bonusDetail:
        "Al registrarte eliges una de dos ofertas: un bono del 100% sobre tu primer depósito hasta $600 USD, o un paquete de $100 en recompensas pagado en tickets. El bono se libera a razón de $1 por cada $5 de rake neto que generes; puedes completar el depósito con recargas durante 60 días y tienes 90 días para liberarlo por completo.",
      rakeback:
        "Ocean Rewards — 16% de cashback base que escala hasta un máximo de 80%. Reemplazó al antiguo Fish Buffet el 30 de enero de 2026: acumulas 100 puntos por cada $1 de rake, el cashback se cobra cada lunes y tu nivel queda fijo por un año una vez asignado.",
      latam:
        "Acepta jugadores de Chile sin restricciones y ofrece cliente en español. Disponible en la mayor parte de Latinoamérica.",
      bestFor:
        "Jugadores de torneos y grinders que buscan fields enormes y uno de los techos de rakeback más altos que existen.",
      pros: [
        "Tráfico enorme y calendario de torneos en todos los niveles de buy-in",
        "Ocean Rewards paga hasta 80% de cashback, cobrado semanalmente",
        "Cliente en español y acceso sin restricciones desde Chile",
        "El bono admite recargas de depósito durante 60 días, no necesitas depositar todo el primer día",
      ],
      cons: [
        "El bono de $600 se libera contra rake neto ($1 por cada $5): un jugador recreativo puede no desbloquearlo completo",
        "Tu nivel de Ocean Rewards queda bloqueado por un año",
        "El cliente tiene muchísimas funciones y puede abrumar a quien recién empieza",
      ],
    },
  },
  {
    key: "poker888",
    name: "888poker",
    url: "PENDING",
    network: "888 (independent network)",
    en: {
      tagline:
        "A veteran operator with something rare: real money to play with before you deposit a cent.",
      bonus: "$8 free (no deposit) + 100% match up to $1,000",
      bonusDetail:
        "888poker gives new players $8 free with no deposit required, paid as 40 tickets of $0.10 plus 4 tickets of $1. When you do deposit, the code Welcome100 unlocks a 100% match up to $1,000 with 90 days to clear it. There's also an alternate offer: $30 of free play with code GET30 (six $5 tickets, no playthrough attached). Offers differ in the UK and US-regulated markets.",
      rakeback:
        "888poker runs its own rewards and cashback promotions — check current terms on the room's site, as they change periodically.",
      latam:
        "Chile is on 888poker's accepted-countries list, and the room serves most of Latin America.",
      bestFor:
        "New and cautious players who want to try real-money poker without risking a deposit.",
      pros: [
        "$8 completely free — test real-money games before depositing anything",
        "The GET30 alternative ($30 in tickets) carries no playthrough requirement",
        "Long-established, well-known operator",
        "Beginner-friendly stakes and formats",
      ],
      cons: [
        "The Welcome100 match releases gradually over 90 days — read the clearing terms before counting on it",
        "Player pool is smaller than GGPoker's, especially at higher stakes",
        "Offer details vary by country, so confirm what applies to yours",
      ],
    },
    es: {
      tagline:
        "Un operador veterano con algo poco común: dinero real para jugar antes de depositar un solo peso.",
      bonus: "$8 USD gratis (sin depósito) + 100% hasta $1,000 USD",
      bonusDetail:
        "888poker regala a los jugadores nuevos $8 USD sin exigir depósito, pagados como 40 tickets de $0.10 más 4 tickets de $1. Cuando decides depositar, el código Welcome100 activa un bono del 100% hasta $1,000 USD, con 90 días para liberarlo. Existe además una oferta alternativa: $30 de juego gratis con el código GET30 (seis tickets de $5, sin requisito de liberación). Las ofertas cambian en el Reino Unido y en los mercados regulados de EE. UU.",
      rakeback:
        "888poker maneja sus propias promociones de recompensas y cashback — revisa los términos vigentes en el sitio de la sala, porque cambian periódicamente.",
      latam:
        "Chile figura en la lista de países aceptados de 888poker, y la sala atiende a la mayor parte de Latinoamérica.",
      bestFor:
        "Jugadores nuevos o precavidos que quieren probar el poker con dinero real sin arriesgar un depósito.",
      pros: [
        "$8 completamente gratis: pruebas las mesas con dinero real antes de depositar",
        "La alternativa GET30 ($30 en tickets) no tiene requisito de liberación",
        "Operador veterano y reconocido",
        "Niveles y formatos amigables para principiantes",
      ],
      cons: [
        "El bono Welcome100 se libera gradualmente durante 90 días — lee las condiciones antes de contar con él",
        "Menos tráfico que GGPoker, sobre todo en stakes altos",
        "Los detalles de la oferta varían según el país: confirma cuál aplica al tuyo",
      ],
    },
  },
  {
    key: "wptglobal",
    name: "WPT Global",
    url: "PENDING",
    network: "WPT Global (standalone)",
    en: {
      tagline:
        "The World Poker Tour's online room, with the biggest headline package and explicit LatAm coverage.",
      bonus: "Welcome package worth up to $3,348",
      bonusDetail:
        "Relaunched in March 2026: a 100% deposit match from $10 up to $3,000, plus up to $248 in tournament tickets scaled to your deposit. The match clears in two halves — up to $1,500 through poker at $1 per $10 of rake and fees, and the other half through casino wagering — within a 60-day window.",
      rakeback:
        "WPT Global runs its own rewards promotions — check current cashback terms on the room's site.",
      latam:
        "Explicitly available in Chile and most of Latin America, including Argentina, Bolivia, Ecuador, Paraguay, Uruguay, Venezuela, Panama and Costa Rica.",
      bestFor:
        "Depositing players who want the biggest package on the market and the WPT brand behind it.",
      pros: [
        "Largest headline welcome package of the three rooms (up to $3,348)",
        "Explicit, documented availability across Chile and most of LatAm",
        "Tournament tickets included on top of the deposit match",
        "Backed by the World Poker Tour brand",
      ],
      cons: [
        "Half of the full match clears through casino wagering, not poker",
        "The 60-day clearing window is tighter than GGPoker's or 888poker's",
        "A newer room than GGPoker or 888poker",
      ],
    },
    es: {
      tagline:
        "La sala online del World Poker Tour, con el paquete de bienvenida más grande y cobertura explícita en Latinoamérica.",
      bonus: "Paquete de bienvenida de hasta $3,348 USD",
      bonusDetail:
        "Relanzado en marzo de 2026: un bono del 100% sobre tu depósito, desde $10 hasta $3,000 USD, más hasta $248 en tickets de torneo proporcionales a lo que deposites. El bono se libera en dos mitades — hasta $1,500 jugando poker a razón de $1 por cada $10 de rake y comisiones, y la otra mitad mediante apuestas de casino — dentro de una ventana de 60 días.",
      rakeback:
        "WPT Global maneja sus propias promociones de recompensas — revisa los términos de cashback vigentes en el sitio de la sala.",
      latam:
        "Disponible de forma explícita en Chile y en la mayor parte de Latinoamérica: Argentina, Bolivia, Ecuador, Paraguay, Uruguay, Venezuela, Panamá y Costa Rica, entre otros.",
      bestFor:
        "Jugadores que van a depositar y quieren el paquete más grande del mercado con la marca WPT detrás.",
      pros: [
        "El paquete de bienvenida más grande de las tres salas (hasta $3,348 USD)",
        "Disponibilidad explícita y documentada en Chile y casi toda Latinoamérica",
        "Tickets de torneo incluidos además del bono sobre el depósito",
        "Respaldada por la marca World Poker Tour",
      ],
      cons: [
        "La mitad del bono completo se libera con apuestas de casino, no jugando poker",
        "La ventana de 60 días para liberar es más corta que la de GGPoker o 888poker",
        "Es una sala más nueva que GGPoker y 888poker",
      ],
    },
  },
];

const roomIndex: Record<RoomKey, Room> = Object.fromEntries(
  ROOMS.map((r) => [r.key, r]),
) as Record<RoomKey, Room>;

export function getRoom(key: RoomKey): Room {
  return roomIndex[key];
}

/** True while the affiliate tracking link hasn't been wired yet. */
export function isPending(key: RoomKey): boolean {
  return roomIndex[key].url === "PENDING";
}

/**
 * Resolve the CTA target for a room. Returns "#signup-pending" until the
 * real affiliate URL is set in ROOMS above.
 */
export function roomUrl(key: RoomKey): string {
  const url = roomIndex[key].url;
  return url === "PENDING" ? "#signup-pending" : url;
}
