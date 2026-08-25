const systems = [
  {
    number: '01',
    title: 'Sales that remembers',
    text: 'Turn years of calls, proposals and CRM history into a system that helps your team prepare, follow up and quote in your own way.',
  },
  {
    number: '02',
    title: 'Service that knows the work',
    text: 'Give support teams answers grounded in your products, policies and resolved cases—with clear sources and a human handoff.',
  },
  {
    number: '03',
    title: 'Operations that improve',
    text: 'Capture the judgment behind recurring decisions, connect the tools already in use and learn from every approved outcome.',
  },
];

const controls = [
  'Your data and business rules',
  'Your workflows, evaluations and safeguards',
  'Your model or model adapters where they matter',
  'A clear path to switch providers or run privately',
];

export default function EnglishHome() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Works Like Us home">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span>Works Like Us</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">What we build</a>
          <a href="#approach">How it works</a>
          <a href="#privacy">Privacy</a>
          <a href="/se" className="language-link" aria-label="Byt till svenska">SV</a>
          <a href="#contact" className="nav-cta">Discuss a system</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Sovereign AI for enterprise</p>
          <h1>Build AI that works like your company—not like everyone else’s.</h1>
          <p className="hero-lede">We turn your proprietary knowledge, decisions and workflows into a controlled AI system. Start with one valuable process, prove the business result and keep the intelligence your company creates.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Find the first system worth building <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#approach">See how it works <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-line" aria-label="Our principles">
            <span>Works with your current tools</span>
            <span>A provider exit path</span>
            <span>Human approval where it matters</span>
          </div>
        </div>

        <div className="system-map" aria-label="A company-owned AI system connects company data to owned intelligence and business workflows">
          <div className="map-label">Your advantage, built in</div>
          <div className="map-row map-row-data">
            <span className="map-index">INPUT</span>
            <strong>Company knowledge</strong>
            <small>CRM · documents · decisions</small>
          </div>
          <div className="map-connector"><span>structure + protect</span></div>
          <div className="map-row map-row-core">
            <span className="map-index">CORE</span>
            <strong>Owned intelligence</strong>
            <small>models · rules · evaluations</small>
          </div>
          <div className="map-connector"><span>deploy + improve</span></div>
          <div className="map-row map-row-output">
            <span className="map-index">OUTPUT</span>
            <strong>Working systems</strong>
            <small>sales · service · operations</small>
          </div>
          <div className="learning-loop">
            <span className="pulse" aria-hidden="true" />
            <span>Every approved outcome makes the system more useful.</span>
          </div>
        </div>
      </section>

      <section className="thesis-band" aria-label="Our point of view">
        <p>Frontier models will keep getting cheaper and more available.</p>
        <strong>Your advantage comes from what they learn about your company—and the system you build around them.</strong>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">What we build</p>
          <h2>One valuable workflow first. A company capability over time.</h2>
          <p>We start where knowledge is scattered, judgment matters and a better decision changes revenue, cost or risk.</p>
        </div>
        <div className="system-cards">
          {systems.map((system) => (
            <article className="system-card" key={system.number}>
              <span>{system.number}</span>
              <h3>{system.title}</h3>
              <p>{system.text}</p>
            </article>
          ))}
        </div>
        <div className="stack-line"><span>Designed around the tools already in the business</span><strong>HubSpot</strong><strong>Salesforce</strong><strong>Pipedrive</strong><strong>Microsoft 365</strong><strong>Your own systems</strong></div>
      </section>

      <section className="section split-section" id="approach">
        <div className="split-copy">
          <p className="eyebrow">How it works</p>
          <h2>Use the best available model. Own what makes it work for you.</h2>
          <p>Owning your intelligence does not mean training a giant model from scratch. It means keeping control of the company knowledge, rules, workflow and learning loop that make a model valuable.</p>
          <ol className="steps">
            <li><span>01</span><div><strong>Choose the decision</strong><p>Find one workflow with a visible business result.</p></div></li>
            <li><span>02</span><div><strong>Build the system</strong><p>Connect the right data, model, checks and human approvals.</p></div></li>
            <li><span>03</span><div><strong>Prove it and improve it</strong><p>Measure real work, learn from corrections and expand only when it earns trust.</p></div></li>
          </ol>
        </div>
        <aside className="control-card">
          <div className="control-card-top">
            <span>CONTROL LAYER</span>
            <span className="status-dot">Defined before build</span>
          </div>
          <h3>You keep control of:</h3>
          <ul>
            {controls.map((control) => <li key={control}>{control}</li>)}
          </ul>
          <p className="control-note">Deploy in your cloud, a private environment or another setup chosen for the work. Access, retention and audit rules are explicit—not assumed.</p>
        </aside>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-heading">
          <p className="eyebrow">Privacy by design</p>
          <h2>Privacy has to be part of the architecture—not a promise added later.</h2>
          <p>Before any company data is connected, we agree on its boundary: what the system may use, which providers may process it, where it may run and how every sensitive action is controlled.</p>
        </div>
        <div className="privacy-controls">
          <article><span>01</span><div><h3>Choose where it runs</h3><p>Your cloud, a private environment or another approved setup—selected for the actual sensitivity and performance needs.</p></div></article>
          <article><span>02</span><div><h3>Limit what leaves</h3><p>Providers, retention, caching and regional boundaries are documented. Training on company data happens only when it is deliberately designed and approved.</p></div></article>
          <article><span>03</span><div><h3>Control who can act</h3><p>People and systems receive only the access they need. High-stakes actions can require a named human approval.</p></div></article>
          <article><span>04</span><div><h3>Keep an audit trail</h3><p>Inputs, outputs, decisions and corrections can be recorded so the company can inspect what happened and improve the system safely.</p></div></article>
        </div>
      </section>

      <section className="section ownership-section" id="why">
        <div className="section-heading">
          <p className="eyebrow">Why own the company layer</p>
          <h2>Use frontier intelligence. Build and own the intelligence that becomes your edge.</h2>
          <p>Start with the strongest model for the work. As company data and feedback accumulate, own or train the model weights and adapters where they make the capability more private, effective or difficult to copy. Keep the knowledge, workflow and learning system around every model.</p>
        </div>
        <div className="ownership-grid">
          <article>
            <span>Access alone</span>
            <h3>A capable model, available to everyone</h3>
            <ul><li>General knowledge</li><li>Generic behaviour</li><li>Company-specific setup may be trapped in the tool</li></ul>
          </article>
          <article className="owned-column">
            <span>Company capability</span>
            <h3>A system that gets better at your work</h3>
            <ul><li>Your operating knowledge</li><li>Your decisions and safeguards</li><li>Examples, corrections and tests the company keeps</li></ul>
          </article>
        </div>
      </section>

      <section className="first-system-section">
        <div>
          <p className="eyebrow">The first engagement</p>
          <h2>Prove one useful system before committing to a transformation.</h2>
        </div>
        <ol>
          <li><span>First</span><strong>Map the work and the business result</strong></li>
          <li><span>Then</span><strong>Build with a small, controlled set of real company data</strong></li>
          <li><span>Before expansion</span><strong>Put it in front of the people who do the work and decide what earned the right to continue</strong></li>
        </ol>
      </section>

      <section className="section founder-section">
        <div className="founder-kicker">Built from the operator’s side</div>
        <blockquote>“Companies do not need another impressive demo. They need a system that fits the work, earns trust and leaves them stronger after every use.”</blockquote>
        <div className="founder-note">
          <strong>Yusuf Young</strong>
          <p>Founder of <a href="https://www.funnelbud.com/en/om-oss/" target="_blank" rel="noreferrer">FunnelBud</a>, a Swedish CRM company that has helped hundreds of customers. He started it after implementing HubSpot and Salesforce systems and seeing how much value was lost between powerful software and real work.</p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading"><p className="eyebrow">Straight answers</p><h2>The questions worth asking before you build.</h2></div>
        <div className="faq-list">
          <details open><summary>Why not just use ChatGPT, Copilot or another ready-made tool?</summary><p>You should use the strongest general tools where they solve the problem. We build the company layer they do not give you by default: the right internal context, workflow, permissions, checks, feedback and a path to switch models.</p></details>
          <details><summary>Does owning our intelligence mean training a giant model from scratch?</summary><p>No. Most useful systems start with an existing model. Depending on the work, ownership may mean your data pipeline, retrieval, rules, evaluations and workflow—or a smaller model or adapter trained for a company-specific task.</p></details>
          <details><summary>Do you replace our CRM or other core systems?</summary><p>Usually not. We connect to systems such as HubSpot, Salesforce or Pipedrive and make the knowledge inside them more useful. Replacement is a separate decision, not a hidden requirement.</p></details>
          <details><summary>Where does our data go?</summary><p>That is decided before the build. We can work in your cloud, a private environment or another approved setup. We make access, retention, model-provider use, regional limits and audit records explicit for the system at hand.</p></details>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Start with one system</p>
          <h2>What should your company know how to do better?</h2>
          <p>Tell us where work is slow, inconsistent or trapped in a few people’s heads. We’ll reply with the first system we would test and what it would need to prove.</p>
        </div>
        <LeadForm />
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">W</span><span>Works Like Us</span></a>
        <p>Operated by Yusuf Young AB.</p>
        <span><a href="/en">English</a> · <a href="/se">Svenska</a></span>
      </footer>
    </main>
  );
}
import LeadForm from '../components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works Like Us — Build AI that works like your company',
  description: 'Turn proprietary knowledge, decisions and workflows into a controlled AI system your company keeps.',
  alternates: {
    canonical: '/en',
    languages: { en: '/en', sv: '/se' },
  },
  openGraph: {
    title: 'Works Like Us — Build AI that works like your company',
    description: 'Turn proprietary knowledge, decisions and workflows into a controlled AI system your company keeps.',
    url: '/en',
    siteName: 'Works Like Us',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Works Like Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Works Like Us — Build AI that works like your company',
    description: 'Turn proprietary knowledge, decisions and workflows into a controlled AI system your company keeps.',
    images: ['/og.png'],
  },
};
