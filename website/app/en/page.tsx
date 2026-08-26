import LeadForm from '../components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works Like Us — AI that works the way your company works',
  description: 'We build AI systems around your company’s knowledge, rules and tools. Start with one part of the business and keep control of your data and what the system learns.',
  alternates: {
    canonical: '/en',
    languages: { en: '/en', sv: '/se' },
  },
  openGraph: {
    title: 'Works Like Us — AI that works the way your company works',
    description: 'We build AI systems around your company’s knowledge, rules and tools. Start with one part of the business and keep control of your data and what the system learns.',
    url: '/en',
    siteName: 'Works Like Us',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Works Like Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Works Like Us — AI that works the way your company works',
    description: 'We build AI systems around your company’s knowledge, rules and tools. Start with one part of the business and keep control of your data and what the system learns.',
    images: ['/og.png'],
  },
};

const systems = [
  {
    number: '01',
    title: 'Help sales teams prepare and follow up',
    text: 'Use past calls, proposals and CRM records to help people prepare for meetings, follow up and write quotes.',
  },
  {
    number: '02',
    title: 'Give support teams better answers',
    text: 'Answer from your products, policies and solved cases. Show the source and hand the case to a person when needed.',
  },
  {
    number: '03',
    title: 'Make repeated decisions more consistent',
    text: 'Turn the way your most experienced people make decisions into clear rules that teams can use and improve.',
  },
];

const controls = [
  'What company data the system can use',
  'What it may do on its own',
  'Which AI models and outside services it uses',
  'Where it runs and how you can switch later',
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
          <a href="#contact" className="nav-cta">Tell us what to improve</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI built around your company</p>
          <h1>Build AI that works the way your company works.</h1>
          <p className="hero-lede">We use your knowledge, rules and tools to build AI for a real part of your business. Start with one problem. Test it in real work. Keep control of your data and what the system learns.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Tell us what you want to improve <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#approach">See how we start <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-line" aria-label="Our principles">
            <span>Works with the tools you already use</span>
            <span>You keep control of your data</span>
            <span>People approve important actions</span>
          </div>
        </div>

        <div className="system-map" aria-label="Your company knowledge and rules guide an AI system that helps with everyday work">
          <div className="map-label">How your system works</div>
          <div className="map-row map-row-data">
            <span className="map-index">INPUT</span>
            <strong>What your company knows</strong>
            <small>documents · CRM · past decisions</small>
          </div>
          <div className="map-connector"><span>organise + protect</span></div>
          <div className="map-row map-row-core">
            <span className="map-index">CORE</span>
            <strong>Your AI system</strong>
            <small>AI model · company rules · checks</small>
          </div>
          <div className="map-connector"><span>use in daily work</span></div>
          <div className="map-row map-row-output">
            <span className="map-index">OUTPUT</span>
            <strong>Better work</strong>
            <small>sales · support · operations</small>
          </div>
          <div className="learning-loop">
            <span className="pulse" aria-hidden="true" />
            <span>Your corrections help the system improve.</span>
          </div>
        </div>
      </section>

      <section className="thesis-band" aria-label="Our point of view">
        <p>Anyone can use the same AI models.</p>
        <strong>Your advantage is teaching AI how your company works—and keeping that knowledge.</strong>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">What we build</p>
          <h2>Start where AI can make one part of the business work better.</h2>
          <p>We look for work that is slow, inconsistent or depends on a few experienced people. The first system should save time, cut costs, increase revenue or reduce risk.</p>
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
        <div className="stack-line"><span>We work with the tools you already use</span><strong>HubSpot</strong><strong>Salesforce</strong><strong>Pipedrive</strong><strong>Microsoft 365</strong><strong>Your own systems</strong></div>
      </section>

      <section className="section split-section" id="approach">
        <div className="split-copy">
          <p className="eyebrow">How we start</p>
          <h2>Build one small system. Test it in real work. Then decide whether to expand.</h2>
          <p>You do not need to train a large AI model from scratch. We can start with a leading model and add your knowledge, rules and checks. You keep those parts and can switch models later.</p>
          <ol className="steps">
            <li><span>01</span><div><strong>Choose the problem</strong><p>Pick one part of the business where a better result can be measured.</p></div></li>
            <li><span>02</span><div><strong>Build a working version</strong><p>Connect only the data and tools it needs. Decide which actions need a person.</p></div></li>
            <li><span>03</span><div><strong>Test it with the team</strong><p>Measure the result, fix what fails and expand only if the system works.</p></div></li>
          </ol>
        </div>
        <aside className="control-card">
          <div className="control-card-top">
            <span>AGREED BEFORE WE BUILD</span>
            <span className="status-dot">Written down first</span>
          </div>
          <h3>You decide:</h3>
          <ul>
            {controls.map((control) => <li key={control}>{control}</li>)}
          </ul>
          <p className="control-note">We also agree who can access the system, how long data is kept and which records are saved.</p>
        </aside>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-heading">
          <p className="eyebrow">Privacy</p>
          <h2>Decide where your data goes before the system uses it.</h2>
          <p>We agree what data is needed, who may access it, where it may be processed and which actions need approval.</p>
        </div>
        <div className="privacy-controls">
          <article><span>01</span><div><h3>Choose where it runs</h3><p>Use your cloud, a private setup or another approved service. The choice depends on the data and the job.</p></div></article>
          <article><span>02</span><div><h3>Send only what is needed</h3><p>We limit what outside AI services can see. We also agree how long data is kept and where it is processed.</p></div></article>
          <article><span>03</span><div><h3>Limit who can act</h3><p>People and systems get only the access they need. Important actions can wait for a named person.</p></div></article>
          <article><span>04</span><div><h3>Keep a clear record</h3><p>Save the questions, answers, actions and corrections you need to review what happened.</p></div></article>
        </div>
      </section>

      <section className="section ownership-section" id="why">
        <div className="section-heading">
          <p className="eyebrow">Why build your own system</p>
          <h2>Your competitors can use the same AI models. They do not have your company’s knowledge.</h2>
          <p>We start with the best model for the job. We add your knowledge, rules, examples and feedback. If it helps, we can later train a model for one of your tasks. You keep the parts that make the system work for your company.</p>
        </div>
        <div className="ownership-grid">
          <article>
            <span>General AI</span>
            <h3>A general tool that anyone can use</h3>
            <ul><li>The same general knowledge</li><li>Built for broad use</li><li>Your setup may be tied to one product</li></ul>
          </article>
          <article className="owned-column">
            <span>Your AI system</span>
            <h3>AI built for the way your company works</h3>
            <ul><li>Uses your company’s knowledge</li><li>Follows your rules and approval steps</li><li>Keeps your examples, corrections and tests under your control</li></ul>
          </article>
        </div>
      </section>

      <section className="first-system-section">
        <div>
          <p className="eyebrow">The first project</p>
          <h2>Test one useful system before you make a large commitment.</h2>
        </div>
        <ol>
          <li><span>First</span><strong>Agree on the job and the result</strong></li>
          <li><span>Then</span><strong>Build with a small, approved set of company data</strong></li>
          <li><span>Before expansion</span><strong>Let the team use it. Continue only if it works.</strong></li>
        </ol>
      </section>

      <section className="section founder-section">
        <div className="founder-kicker">Why Works Like Us</div>
        <blockquote>“Most companies do not need another AI demo. They need one useful system that fits the work and improves as their people correct it.”</blockquote>
        <div className="founder-note">
          <strong>Yusuf Young</strong>
          <p>Yusuf founded <a href="https://www.funnelbud.com/en/om-oss/" target="_blank" rel="noreferrer">FunnelBud</a>, a Swedish CRM company that has helped hundreds of customers. Before that, he implemented HubSpot and Salesforce systems. He started Works Like Us because powerful software often gives companies too little value when it does not fit the way people work.</p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading"><p className="eyebrow">Common questions</p><h2>What you should know before we start.</h2></div>
        <div className="faq-list">
          <details open><summary>Why not just use ChatGPT, Copilot or another ready-made tool?</summary><p>Use them when they already solve the problem. We build something custom when AI must use your knowledge, follow your rules, work inside your systems or keep sensitive data under tighter control.</p></details>
          <details><summary>Do we need to train our own AI model?</summary><p>No. We usually start with an existing model. If a smaller model trained for one task would work better or give you more control, we can add that later.</p></details>
          <details><summary>Will you replace our CRM or other main systems?</summary><p>Usually not. We connect the AI system to the software you already use. If your CRM needs to be replaced, our sister company, <a href="https://companynative.com/en" target="_blank" rel="noreferrer">Company Native</a>, builds CRMs around how your company actually works.</p></details>
          <details><summary>Where does our data go?</summary><p>We decide that together before we build. We agree where data is processed, which AI services may see it, who can access it, how long it is kept and which records are saved.</p></details>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Find the first useful system</p>
          <h2>Where does work break down today?</h2>
          <p>Tell us what is slow, repeated, inconsistent or dependent on one person. We’ll reply with the first AI system we would test and the result it should improve.</p>
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
