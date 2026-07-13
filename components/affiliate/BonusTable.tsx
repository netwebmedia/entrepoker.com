import { ROOMS, type Lang } from "@/lib/affiliates";
import styles from "./affiliate.module.css";
import { CtaLink } from "./CtaLink";

const HEADERS = {
  en: {
    room: "Room",
    bonus: "Welcome bonus",
    rakeback: "Rewards / rakeback",
    latam: "Chile / LatAm",
    cta: "Sign up",
  },
  es: {
    room: "Sala",
    bonus: "Bono de bienvenida",
    rakeback: "Recompensas / rakeback",
    latam: "Chile / LatAm",
    cta: "Registro",
  },
} as const;

const LATAM_SHORT = {
  en: {
    ggpoker: "Chile OK · Spanish client",
    poker888: "Chile on accepted list",
    wptglobal: "Chile + most of LatAm",
  },
  es: {
    ggpoker: "Chile OK · cliente en español",
    poker888: "Chile en la lista de países aceptados",
    wptglobal: "Chile + casi toda LatAm",
  },
} as const;

const RAKEBACK_SHORT = {
  en: {
    ggpoker: "Ocean Rewards — 16% base, up to 80%",
    poker888: "Check current terms on 888poker's site",
    wptglobal: "Check current terms on WPT Global's site",
  },
  es: {
    ggpoker: "Ocean Rewards — 16% base, hasta 80%",
    poker888: "Revisa los términos vigentes en 888poker",
    wptglobal: "Revisa los términos vigentes en WPT Global",
  },
} as const;

/** Compact comparison table of the three rooms with CTAs. */
export function BonusTable({ lang }: { lang: Lang }) {
  const h = HEADERS[lang];

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{h.room}</th>
            <th>{h.bonus}</th>
            <th>{h.rakeback}</th>
            <th>{h.latam}</th>
            <th>{h.cta}</th>
          </tr>
        </thead>
        <tbody>
          {ROOMS.map((room) => (
            <tr key={room.key}>
              <td className={styles.tdRoom}>{room.name}</td>
              <td className={styles.tdBonus}>{room[lang].bonus}</td>
              <td>{RAKEBACK_SHORT[lang][room.key]}</td>
              <td>{LATAM_SHORT[lang][room.key]}</td>
              <td>
                <CtaLink roomKey={room.key} lang={lang} small />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
