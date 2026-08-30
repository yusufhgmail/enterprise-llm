import LeadForm from '../components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works Like Us — Your company’s own private AI',
  description: 'We build, deploy and maintain a private AI model for your company, trained on your business and run inside infrastructure you control.',
  alternates: {
    canonical: '/en',
    languages: { en: '/en', sv: '/se' },
  },
  openGraph: {
    title: 'Works Like Us — Your company’s own private AI',
    description: 'We build, deploy and maintain a private AI model for your company, trained on your business and run inside infrastructure you control.',
    url: '/en',
    siteName: 'Works Like Us',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Works Like Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Works Like Us — Your company’s own private AI',
    description: 'We build, deploy and maintain a private AI model for your company, trained on your business and run inside infrastructure you control.',
    images: ['/og.png'],
  },
};

const systems = [
  {
    number: '01',
    title: 'Use AI on sensitive work',
    text: 'Keep approved data and model use inside your own servers or private cloud instead of sending the work to a public assistant.',
  },
  {
    number: '02',
    title: 'Beat generic AI on selected company work',
    text: 'Fine-tune it on approved examples of your products, language, decisions and standards, then test it against the best permitted alternative.',
  },
  {
    number: '03',
    title: 'Keep a compounding company advantage',
    text: 'The trained model, memory, evaluations and corrections become a company asset that remains useful when base models or providers change.',
  },
  {
    number: '04',
    title: 'Create software competitors cannot rent',
    text: 'Build agents, workflows and applications around the knowledge and judgment that make your company different.',
  },
];

const controls = [
  'The deployed model and company-specific training',
  'The approved memory, rules and evaluations',
  'The agent logic and connections to your systems',
  'The freedom to move the company layer later',
];

const visionStages = [
  { number: '01', label: 'OWN', title: 'A private company model', text: 'An open model deployed inside infrastructure you control.' },
  { number: '02', label: 'LEARN', title: 'Intelligence that compounds', text: 'Approved knowledge, decisions, corrections and evaluations improve it.' },
  { number: '03', label: 'ACT', title: 'Agents and workflows', text: 'The model works inside the tools and processes that run the company.' },
  { number: '04', label: 'REPLACE', title: 'Custom AI software', text: 'Generic SaaS gives way where software built for one company creates a real advantage.' },
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
          <a href="#value">Why own it</a>
          <a href="#approach">What we deliver</a>
          <a href="#vision">The vision</a>
          <a href="#privacy">Privacy</a>
          <a href="/se" className="language-link" aria-label="Byt till svenska">SV</a>
          <a href="#contact" className="nav-cta">Explore a private deployment</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Private company AI · In development</p>
          <h1>Own the AI trained for your company.</h1>
          <p className="hero-lede">Works Like Us takes an open model, trains it on approved examples of how your company communicates and decides, connects it to your tools and runs it on hardware or private cloud you control. The aim: beat generic AI on selected company work without sending the work—or the intelligence you build—to a public provider.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Explore your first private AI system <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#why">See what your company owns <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-line" aria-label="Our principles">
            <span>Sensitive work stays inside your chosen boundary</span>
            <span>You control the model, memory and workflows</span>
            <span>Your company’s judgment can live in the model</span>
          </div>
        </div>

        <div className="system-map" aria-label="An open model becomes private company intelligence that powers assistants, agents and custom software">
          <div className="map-label">Inside your controlled environment</div>
          <div className="map-row map-row-data">
            <span className="map-index">BASE</span>
            <strong>An open model you can keep</strong>
            <small>open weights · no single-model lock-in</small>
          </div>
          <div className="map-connector"><span>train + govern</span></div>
          <div className="map-row map-row-core">
            <span className="map-index">YOURS</span>
            <strong>Your company encoded in the model</strong>
            <small>trained judgment · memory · rules</small>
          </div>
          <div className="map-connector"><span>connect + act</span></div>
          <div className="map-row map-row-output">
            <span className="map-index">USE</span>
            <strong>Your private AI</strong>
            <small>assistants · agents · custom software</small>
          </div>
          <div className="learning-loop">
            <span className="pulse" aria-hidden="true" />
            <span>Every approved correction can improve what your company owns.</span>
          </div>
        </div>
      </section>

      <section className="thesis-band" aria-label="Our point of view">
        <p>General AI is becoming something every company can buy.</p>
        <strong>Your advantage begins when the way your company works—its decisions, language and knowledge—is trained into a model you control.</strong>
      </section>

      <section className="fit-strip" aria-label="Who this is for">
        <span>Best fit</span>
        <strong>100+ employees</strong>
        <strong>Public AI is restricted</strong>
        <strong>Sensitive or proprietary work</strong>
        <strong>Starting with Swedish companies</strong>
      </section>

      <section className="section work-section" id="value">
        <div className="section-heading">
          <p className="eyebrow">Why companies want their own AI</p>
          <h2>Use AI on private work, make it better at your company and keep what it learns.</h2>
          <p>A company-owned model lets people use sensitive knowledge inside an agreed boundary. Training on approved company examples can teach it recurring patterns that do not fit in a policy document or prompt. The first deployment must prove that this improves a real job.</p>
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
        <div className="stack-line"><span>Connect the tools you already use</span><strong>Microsoft 365</strong><strong>Google Workspace</strong><strong>HubSpot</strong><strong>Salesforce</strong><strong>Your own systems</strong></div>
      </section>

      <section className="section split-section" id="approach">
        <div className="split-copy">
          <p className="eyebrow">What Works Like Us delivers</p>
          <h2>A hands-on service to build, deploy and maintain your company’s own LLM.</h2>
          <p>This is not another software licence. We start from an open model, deploy it on your hardware or private cloud, train and adapt it with approved company data, then connect it to one job where the result matters.</p>
          <ol className="steps">
            <li><span>01</span><div><strong>Choose the boundary and the job</strong><p>Name the sensitive data, the people who may use it and one result worth improving.</p></div></li>
            <li><span>02</span><div><strong>Deploy the private model</strong><p>Set up an open-weight model in infrastructure your company controls.</p></div></li>
            <li><span>03</span><div><strong>Train it on how your company works</strong><p>Use approved examples, decisions and feedback to fine-tune the model, then add the memory, rules and tools the job needs.</p></div></li>
            <li><span>04</span><div><strong>Operate, measure and improve</strong><p>Let the team use it, record failures and expand only when it produces a valuable result.</p></div></li>
          </ol>
        </div>
        <aside className="control-card">
          <div className="control-card-top">
            <span>THE COMPANY LAYER</span>
            <span className="status-dot">Designed to be portable</span>
          </div>
          <h3>The intelligence stays with you.</h3>
          <ul>
            {controls.map((control) => <li key={control}>{control}</li>)}
          </ul>
          <p className="control-note">The exact contract defines ownership and portability. Outside AI services are used only when your company explicitly agrees to them.</p>
        </aside>
      </section>

      <section className="section privacy-section" id="privacy">
        <div className="privacy-heading">
          <p className="eyebrow">Private by architecture</p>
          <h2>Use AI without sending sensitive work to ChatGPT.</h2>
          <p>A private deployment can keep the model and company data inside your own infrastructure. If an outside service would improve a task, its use is optional, limited and agreed—not hidden inside the system.</p>
        </div>
        <div className="privacy-controls">
          <article><span>01</span><div><h3>Run it where you control it</h3><p>Deploy on company hardware or in a private cloud account chosen for the actual data and job.</p></div></article>
          <article><span>02</span><div><h3>Use a model you can keep</h3><p>Start with open weights so the core system does not disappear when one model vendor changes access, price or policy.</p></div></article>
          <article><span>03</span><div><h3>Give each person only the access they need</h3><p>Company permissions govern who can use which knowledge and which actions still require a named person.</p></div></article>
          <article><span>04</span><div><h3>Record what the AI learns</h3><p>Keep the evaluations, corrections and action records needed to review and deliberately improve the system.</p></div></article>
        </div>
      </section>

      <section className="section ownership-section" id="why">
        <div className="section-heading">
          <p className="eyebrow">The strategic choice</p>
          <h2>Rent the same intelligence as everyone else—or build an advantage your company keeps.</h2>
          <p>Public AI is useful for general work. The risk begins when a provider’s model becomes the place where your sensitive context, operating knowledge and accumulated learning live.</p>
        </div>
        <div className="ownership-grid">
          <article>
            <span>Rent public AI</span>
            <h3>The provider controls the intelligence you depend on.</h3>
            <ul><li>The provider chooses the model, price and access</li><li>Sensitive context may cross your chosen boundary</li><li>Your competitors can rent the same general capability</li><li>Changing provider can mean rebuilding the company layer</li></ul>
          </article>
          <article className="owned-column">
            <span>Own company AI</span>
            <h3>Your company controls the intelligence it creates.</h3>
            <ul><li>You choose the model and where it runs</li><li>Approved data and inference can stay inside your boundary</li><li>Patterns from your decisions and examples can be trained into weights you control</li><li>The company layer can remain when the base model changes</li></ul>
          </article>
        </div>
      </section>

      <section className="first-system-section">
        <div>
          <p className="eyebrow">The first deployment</p>
          <h2>Start with one job worth keeping private.</h2>
        </div>
        <ol>
          <li><span>Choose</span><strong>A valuable workflow that public AI cannot safely or reliably handle</strong></li>
          <li><span>Build</span><strong>The smallest private model, data connection and application needed</strong></li>
          <li><span>Prove</span><strong>A real improvement before training more data or expanding to more work</strong></li>
        </ol>
      </section>

      <section className="section vision-section" id="vision">
        <div className="section-heading">
          <p className="eyebrow">The Enterprise LLM vision</p>
          <h2>Start with one private model. End with software no competitor can rent.</h2>
          <p>The LLM becomes the company’s intelligence layer. We build memory, agents, workflows and applications around it. Over time, one company can operate several specialist models—for sales, legal, support or individual roles—and replace generic software where company-trained AI creates a real advantage.</p>
        </div>
        <div className="vision-path">
          {visionStages.map((stage) => (
            <article key={stage.number}>
              <div><span>{stage.number}</span><strong>{stage.label}</strong></div>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
        <div className="business-model-note">
          <span>How Works Like Us grows</span>
          <p><strong>Begin with hands-on enterprise deployments.</strong> Turn the repeated work—model setup, training, governance, connectors and maintenance—into a reusable platform. Customer data stays separate; the deployment method gets better.</p>
        </div>
      </section>

      <section className="section founder-section">
        <div className="founder-kicker">Why Works Like Us</div>
        <blockquote>“As general intelligence becomes a commodity, a company must encode its own processes, beliefs and data into models it controls.”</blockquote>
        <div className="founder-note">
          <strong>Yusuf Young</strong>
          <p>Yusuf founded <a href="https://www.funnelbud.com/en/om-oss/" target="_blank" rel="noreferrer">FunnelBud</a>, a Swedish CRM company that has helped hundreds of customers. Before that, he implemented HubSpot and Salesforce systems. Works Like Us is now in development and does not yet have a completed customer deployment.</p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading"><p className="eyebrow">Common questions</p><h2>What you should know before we start.</h2></div>
        <div className="faq-list">
          <details open><summary>Why not just use ChatGPT, Copilot or another ready-made tool?</summary><p>Use public AI for general work when its terms and controls fit. Build your own when sensitive data must stay inside your boundary, the AI must become meaningfully better at your company, or depending on one provider would put a core capability at risk.</p></details>
          <details><summary>Won’t Microsoft or Google provide this?</summary><p>They will keep adding company context and stronger privacy controls. Use those products when they solve the job. Works Like Us matters only where your company wants a model trained on its own decisions, deployable under its control and able to become software unique to the company. A first deployment tests whether that difference is valuable enough to own.</p></details>
          <details><summary>Is this software or consulting?</summary><p>It begins as a hands-on service. Works Like Us designs, deploys and maintains the model and first application with your company. Repeated parts of that work can become a product over time.</p></details>
          <details><summary>Do we train a model from scratch?</summary><p>No. We start with an open-weight model, then fine-tune or continue training it only where approved company data and measured results justify the work. Memory and retrieval can handle knowledge that should change without retraining the weights.</p></details>
          <details><summary>Must it run on hardware in our office?</summary><p>No. It can run on company-owned servers or in a private cloud account your company controls. The point is that the core model, company data and learning do not have to depend on a public AI service.</p></details>
          <details><summary>Will a private model be as good as the best public model?</summary><p>Not at every general task. The thesis is that a model trained on one company’s examples and feedback can beat a generic model on selected company work. We compare it with the best permitted alternative and do not expand unless the measured result is better enough to matter.</p></details>
          <details><summary>What does a first deployment cost?</summary><p>There is no fixed public price yet. Hardware, data preparation, training, security and maintenance differ by company. The first discussion defines enough of the job and deployment boundary to scope the work honestly.</p></details>
          <details><summary>Will you replace our CRM or other main systems?</summary><p>Usually not at first. We connect the private AI to the software you already use. If your CRM needs to be replaced, our sister company, <a href="https://companynative.com/en" target="_blank" rel="noreferrer">Company Native</a>, builds CRMs around how your company actually works.</p></details>
          <details><summary>Is Works Like Us already operating?</summary><p>It is in development. There are no completed Works Like Us customer deployments yet. An enquiry starts a technical and business discussion; it is not a promise that the proposed system already exists.</p></details>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Explore a first deployment</p>
          <h2>What work is too sensitive—or too important—to give to a public AI?</h2>
          <p>Tell us what people do today and which data is involved. We’ll reply with the first private AI system we would explore, where it could run and the result worth testing.</p>
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
