import LeadForm from '../components/LeadForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works Like Us — Your company’s own private AI',
  description: 'We fine-tune and deploy an open AI model around how your company works, so the intelligence becomes a company asset you control.',
  alternates: {
    canonical: '/en',
    languages: { en: '/en', sv: '/se' },
  },
  openGraph: {
    title: 'Works Like Us — Your company’s own private AI',
    description: 'We fine-tune and deploy an open AI model around how your company works, so the intelligence becomes a company asset you control.',
    url: '/en',
    siteName: 'Works Like Us',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Works Like Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Works Like Us — Your company’s own private AI',
    description: 'We fine-tune and deploy an open AI model around how your company works, so the intelligence becomes a company asset you control.',
    images: ['/og.png'],
  },
};

const risks = [
  {
    number: '01',
    label: 'NO UNIQUE ADVANTAGE',
    title: 'The same general intelligence cannot be your advantage.',
    text: 'If you and a competitor rent the same models and use the same public knowledge, AI raises the baseline for both companies. It does not encode what makes yours better.',
  },
  {
    number: '02',
    label: 'PLATFORM DEPENDENCE',
    title: 'A provider can change a capability your business depends on.',
    text: 'The vendor controls the underlying model, price, policy and access. A useful tool can still become a strategic dependency when the intelligence is not portable.',
  },
  {
    number: '03',
    label: 'KNOWLEDGE LOSS',
    title: 'Institutional judgment still walks out the door.',
    text: 'The reasoning behind good work often lives in experienced people rather than documents. When they leave, that judgment leaves too unless the company deliberately captures and teaches it.',
  },
];

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

const activitySteps = [
  { number: '01', title: 'Find the work competitors cannot see', text: 'Identify the decisions, examples and unwritten judgment that genuinely make the company different.' },
  { number: '02', title: 'Turn outcomes into a learning loop', text: 'Capture approved feedback, compare results and train only when the evidence says the model should change.' },
  { number: '03', title: 'Make private hosting more economical across deployments', text: 'Reuse capacity planning, setup, evaluation and monitoring so higher shared infrastructure use can lower cost while every customer’s data and trained model stay separate.' },
];

const marketSignals = [
  {
    name: 'Thomson Reuters',
    signal: 'Open foundation + proprietary training',
    text: 'Thomson Reuters invested $40 million to build and control its own model from an open-source foundation. Trained on less than 10% of its legal content, Thomson ranked first on one difficult legal benchmark and competitively on others.',
    href: 'https://www.thomsonreuters.com/en/press-releases/2026/august/thomson-reuters-leverages-its-world-class-data-assets-to-launch-its-own-frontier-model',
  },
  {
    name: 'Kirkland & Ellis',
    signal: '$500m + 180 technology professionals',
    text: 'Kirkland set aside $500 million for proprietary AI technology. It said 180 technology professionals were building a platform with input from 250 lawyers to deploy the firm’s collective intelligence.',
    href: 'https://www.kirkland.com/news/in-the-news/2026/05/kirkland-ellis-to-spend-%24500mn-building-its-own-ai-technology',
  },
  {
    name: 'FIS',
    signal: 'Controlled data + owned agent',
    text: 'FIS and Anthropic embedded engineers together to build a financial-crimes agent. FIS says its data stays in FIS-controlled infrastructure and it owns the agent, while Claude supplies the reasoning.',
    href: 'https://fisglobal.gcs-web.com/news-releases/news-release-details/fis-brings-agentic-ai-banking-anthropic-starting-financial',
  },
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
          <h1>Why rent intelligence your competitors also rent?</h1>
          <p className="hero-lede"><strong>Works Like Us builds your company’s own AI model.</strong> We fine-tune an open model on approved examples of how your company works, connect it to your tools and run it on hardware or private cloud you control. The aim is to encode your operating advantage in intelligence your company owns.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Explore your first private AI system <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#why">See what your company owns <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-line" aria-label="Our principles">
            <span>Sensitive work stays inside your chosen boundary</span>
            <span>You control the model, memory and workflows</span>
            <span>Keep institutional knowledge when people leave</span>
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
        <p>General AI is becoming something every company can rent.</p>
        <strong>We fine-tune an open model on your processes and decisions so your company’s moat is encoded in intelligence it controls.</strong>
      </section>

      <section className="fit-strip" aria-label="Who this is for">
        <span>Best fit</span>
        <strong>100+ employees</strong>
        <strong>Public AI is restricted</strong>
        <strong>Sensitive or proprietary work</strong>
        <strong>Starting with Swedish companies</strong>
      </section>

      <section className="section risk-section">
        <div className="section-heading">
          <p className="eyebrow">The cost of renting all your intelligence</p>
          <h2>Without company-owned AI, three strategic risks remain.</h2>
          <p>Public assistants can be excellent tools. The risk is making them the only place your company’s reasoning, accumulated learning and future software live.</p>
        </div>
        <div className="risk-path">
          {risks.map((risk) => (
            <article key={risk.number}>
              <div><span>{risk.number}</span><strong>{risk.label}</strong></div>
              <h3>{risk.title}</h3>
              <p>{risk.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="value">
        <div className="section-heading">
          <p className="eyebrow">Why companies want their own AI</p>
          <h2>Own the model, make it better at your company and keep what it learns.</h2>
          <p>A company-owned model can preserve patterns that do not fit in a policy document or prompt: how experienced people judge trade-offs, recognise exceptions and decide what good work looks like. The first deployment must prove that this improves a real job.</p>
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
        <div className="platform-reality">
          <span>What Copilot and Gemini already solve</span>
          <div>
            <h3>Their enterprise privacy promises are real. Their product is still rented intelligence.</h3>
            <p>Microsoft and Google state that company prompts and content in their enterprise products are not used to train shared foundation models without permission. That is useful protection. It is different from receiving a company-trained model, the model weights and the freedom to operate that intelligence independently of the platform.</p>
            <p className="source-links"><a href="https://learn.microsoft.com/copilot/microsoft-365/enterprise-data-protection" target="_blank" rel="noreferrer">Microsoft’s data protection terms ↗</a><a href="https://workspace.google.com/security/ai-privacy/" target="_blank" rel="noreferrer">Google’s AI privacy terms ↗</a></p>
          </div>
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
        <div className="activity-system">
          <div className="activity-heading">
            <span>Why Works Like Us can compound</span>
            <h3>The customer keeps the intelligence. Our deployment method gets better.</h3>
            <p>The long-term moat is not access to one base model. It is becoming unusually good at finding proprietary work, teaching it to a model and operating private systems economically.</p>
          </div>
          <ol>
            {activitySteps.map((step) => <li key={step.number}><span>{step.number}</span><div><strong>{step.title}</strong><p>{step.text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section evidence-section">
        <div className="section-heading">
          <p className="eyebrow">The market has begun answering the objection</p>
          <h2>Leading firms are building proprietary AI around the knowledge that makes them different.</h2>
          <p>These are not Works Like Us customers. They are public examples showing that secure access to a general assistant has not ended demand for company-specific intelligence.</p>
        </div>
        <div className="evidence-grid">
          {marketSignals.map((item) => (
            <article key={item.name}>
              <span>{item.signal}</span>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <a href={item.href} target="_blank" rel="noreferrer">Read the company source <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <p className="evidence-limit"><strong>What this does not prove:</strong> none of these examples proves that an open model will outperform a frontier model on every task. They show that institutional knowledge, feedback loops and control of the company-specific system are already strategic investments.</p>
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
          <details><summary>Won’t Microsoft or Google provide this?</summary><p>They already provide useful company context and strong enterprise privacy controls. The market has still moved toward proprietary systems: Thomson Reuters tested a custom model on its data, Kirkland is building firm-owned AI platforms and FIS built an agent it owns around controlled infrastructure. Those examples do not guarantee that every company needs its own model. They show that the Microsoft-or-Google objection no longer ends the case for company-specific intelligence.</p></details>
          <details><summary>Is this software or consulting?</summary><p>It begins as a hands-on service. Works Like Us designs, deploys and maintains the model and first application with your company. Repeated parts of that work can become a product over time.</p></details>
          <details><summary>Do we train a model from scratch?</summary><p>No. We start with an open-weight model, then fine-tune or continue training it only where approved company data and measured results justify the work. Memory and retrieval can handle knowledge that should change without retraining the weights.</p></details>
          <details><summary>Must it run on hardware in our office?</summary><p>No. It can run on company-owned servers or in a private cloud account your company controls. The point is that the core model, company data and learning do not have to depend on a public AI service.</p></details>
          <details><summary>Will a private model be as good as the best public model?</summary><p>Not at every general task. The thesis is that a model trained on one company’s examples and feedback can beat a generic model on selected company work. We compare it with the best permitted alternative and do not expand unless the measured result is better enough to matter.</p></details>
          <details><summary>What does a first deployment cost?</summary><p>There is no fixed public price yet. Hardware, data preparation, training, security and maintenance differ by company. The first discussion defines enough of the job and deployment boundary to scope the work honestly.</p></details>
          <details><summary>Will you replace our CRM or other main systems?</summary><p>Usually not at first. We connect the private AI to the software you already use. If your CRM needs to be replaced, our sister company, <a href="https://crmfromwithin.com/en" target="_blank" rel="noreferrer">CRM From Within</a>, builds CRMs around how your company actually works.</p></details>
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
