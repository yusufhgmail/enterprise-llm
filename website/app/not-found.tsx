export default function NotFound() {
  return (
    <main className="not-found">
      <a className="brand" href="/en" aria-label="Works Like Us home">
        <span className="brand-mark" aria-hidden="true">W</span>
        <span>Works Like Us</span>
      </a>
      <div>
        <p className="eyebrow">404 · Sidan finns inte / Page not found</p>
        <h1>Let’s get you back to the work.</h1>
        <p>Sidan du sökte finns inte. The page you requested could not be found.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/se">Svenska <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="/en">English <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </main>
  );
}
