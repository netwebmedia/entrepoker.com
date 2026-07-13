export function LanguageGateway() {
  return (
    <main className="language-gateway">
      <div className="language-gateway__card">
        <a className="wordmark" href="/" aria-label="Entrepoker">
          entre<span>poker</span>
        </a>
        <p className="eyebrow">THE GLOBAL POKER CONVERSATION</p>
        <h1>Choose your table.</h1>
        <p>
          Independent poker news, strategy and culture in English and Spanish.
        </p>
        <div className="language-gateway__actions">
          <a href="/en">
            <span>EN</span>
            <strong>Enter in English</strong>
          </a>
          <a href="/es">
            <span>ES</span>
            <strong>Entrar en español</strong>
          </a>
        </div>
      </div>
    </main>
  );
}
