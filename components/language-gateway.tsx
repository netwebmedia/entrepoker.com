import Link from "next/link";

export function LanguageGateway() {
  return (
    <main className="language-gateway">
      <div className="language-gateway__card">
        <Link className="wordmark" href="/" aria-label="Entrepoker">
          entre<span>poker</span>
        </Link>
        <p className="eyebrow">THE GLOBAL POKER CONVERSATION</p>
        <h1>Choose your table.</h1>
        <p>
          Independent poker news, strategy and culture in English and Spanish.
        </p>
        <div className="language-gateway__actions">
          <Link href="/en">
            <span>EN</span>
            <strong>Enter in English</strong>
          </Link>
          <Link href="/es">
            <span>ES</span>
            <strong>Entrar en español</strong>
          </Link>
        </div>
      </div>
    </main>
  );
}
